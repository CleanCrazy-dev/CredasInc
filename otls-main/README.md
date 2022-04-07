# OTLS

## Local Development

Requirements:

- Node v16
- Docker

### Initial Setup

1. Get `.env.local` from the shared 1Password vault (ask teammates if you need access).

   - If there are any missing values, ask the team where to retrieve them.
   - **NOTE: when adding to `.env.local`, there are a few steps:**:
     - Add values to `scripts/setup_env.cmd`
     - Update `azure_pipelines.yml` with either static values in `variables` (for non-secrets) or `env` values (for secrets - in this case make sure to also add to the Azure DevOps Pipeline's Variables)

2. Go to Github and create a Personal Access Token (PAT) using these [instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
   - PAT should have `repo` and `read:packages` permissions enabled.
3. Login to npm (when prompted use your PAT as your password):
   ```bash
   $ npm login --registry=https://npm.pkg.github.com
   ```
4. Install dependencies:
   ```bash
   $ npm i
   ```
5. Create and start Docker container:

   ```bash
   $ docker run --name otls-ms-sql -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=1Secure@Password1" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest
   ```

   NOTE: If you're on an M1 Mac, [this won't work, as of 2022-02-14](https://github.com/microsoft/mssql-docker/issues/668) and you'll need to [fall back to using Azure SQL Edge](https://database.guide/how-to-install-sql-server-on-an-m1-mac-arm64/) instead.
   We may find subtle differences between these SQL Server variants, but it's a potential workaround for now.
   This is missing the `sqlcmd` tool that's used in the next step, so (at least for now) you'll also need to download and install [Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15) to run SQL commands like the one in the next step.
   It does say ARM isn't supported, but (again, at least for now) it seems to work fine.

6. Create database:
   ```bash
   $ docker exec -it otls-ms-sql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 1Secure@Password1 -Q "CREATE DATABASE otls"
   ```
7. Run migrations:
   ```bash
   $ npm run typeorm:local migration:run
   ```

### Starting the App

1. Start database:
   ```bash
   $ npm run db:local:start
   ```
2. Start server:
   ```bash
   $ npm run dev
   ```

### Database

A Docker container for Microsoft SQL Server is required to run this application.

If you change the username or password, make sure to change them in `.env.local`. Passwords require a level of complexity and not meeting that requirement will [result in a silent failure](https://github.com/microsoft/mssql-docker/issues/315#issuecomment-392957615).

Access database via CLI:

```bash
$ docker exec -it otls-ms-sql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 1Secure@Password1
```

Stop database:

```bash
$ docker stop otls-ms-sql
```

#### Migrations

Create new migration:

```bash
$ npm run typeorm:local migration:create -- -n <NAME OF MIGRATION>
```

Run migrations:

```bash
$ npm run typeorm:local migration:run
```

Undo a migration:

```bash
$ npm run typeorm:local migration:revert
```

## Run Jest Tests

```bash
$ npm test
```

## Deployment Notes

### IIS

Currently deployed to a single EC2 Windows host running IIS.
There were a number of manual steps to set this up:

- install node
- install iisnode
- create an `iisnode` directory and give the `IIS_IUSRS` Write+Modify permissions (this is the logs)
- [lots of additional stuff Jeff did - e.g. set up IIS app for domain, http bindings, LetsEncrypt, ...]

Update Test 3
