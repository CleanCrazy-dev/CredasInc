import {
  Connection,
  ConnectionManager,
  createConnection,
  EntityManager,
  getConnectionManager,
} from "typeorm";
import ormconfig from "../ormconfig";
import { Organization } from "./entity/Organization";
import { OrganizationType } from "./entity/OrganizationType";
import { AccountEntity } from "./entity/auth/AccountEntity";
import { UserEntity } from "./entity/auth/UserEntity";
import { SessionEntity } from "./entity/auth/SessionEntity";
import { VerificationTokenEntity } from "./entity/auth/VerificationTokenEntity";

class DatabaseConnectionManager {
  private connectionManager: ConnectionManager;
  private hasCreatedConnection = false;
  private readonly CONNECTION_NAME = "default";

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  public async getEntityManager(): Promise<EntityManager> {
    const connection = await this.getConnection();
    return connection.manager;
  }

  private async getConnection(): Promise<Connection> {
    const hasConnection = this.connectionManager.has(this.CONNECTION_NAME);
    if (!hasConnection) {
      return this.createConnection(this.CONNECTION_NAME);
    }

    const connection = this.connectionManager.get(this.CONNECTION_NAME);

    if (!this.hasCreatedConnection) {
      console.debug("Stale database connection due to hot reloading");
      await this.closeConnection(connection);
      return this.createConnection(this.CONNECTION_NAME);
    }

    if (connection.isConnected) {
      return connection;
    } else {
      return connection.connect();
    }
  }

  private createConnection(name: string): Promise<Connection> {
    this.hasCreatedConnection = true;
    console.debug("Creating new database connection...");

    return createConnection({
      name,
      ...ormconfig,
      migrations: [],
      entities: [
        Organization,
        OrganizationType,
        AccountEntity,
        UserEntity,
        SessionEntity,
        VerificationTokenEntity,
      ],
    });
  }

  private async closeConnection(currentConnection: Connection) {
    if (currentConnection.isConnected) {
      console.debug("Closing database connection...");
      await currentConnection.close();
    }
  }
}

export const connectionManager = new DatabaseConnectionManager();
