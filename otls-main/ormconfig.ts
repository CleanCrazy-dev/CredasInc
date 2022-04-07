import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

const port = Number(process.env.DATABASE_PORT);

const trustServerCertificate =
  process.env.TRUST_SERVER_CERTIFICATE?.trim().toLowerCase() || "true";

export default {
  type: "mssql",
  host: process.env.DATABASE_HOST,
  port: port,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: ["database/entity/**/*.ts"],
  migrations: ["database/migration/**/*.ts"],
  subscribers: ["database/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "database/entity",
    migrationsDir: "database/migration",
    subscribersDir: "database/subscriber",
  },
  options: {
    trustServerCertificate: trustServerCertificate === "true",
  },
  migrationsRun: false,
} as SqlServerConnectionOptions;
