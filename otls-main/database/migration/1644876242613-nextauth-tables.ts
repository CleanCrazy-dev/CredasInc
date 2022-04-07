import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class nextauthTables1644876242613 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" (
        "id" uniqueidentifier NOT NULL DEFAULT NEWSEQUENTIALID(),
        "name" varchar(255) NOT NULL,
        "email" varchar(255) NOT NULL,
        "emailVerified" varchar(255),
        "image" varchar(MAX),
        CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
        CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "accounts" (
        "id" uniqueidentifier NOT NULL DEFAULT NEWSEQUENTIALID(),
        "session_state" varchar(MAX),
        "id_token" varchar(MAX),
        "scope" varchar(255),
        "token_type" varchar(255),
        "access_token" varchar(2048),
        "refresh_token" varchar(2048),
        "expires_at" bigint,
        "type" nvarchar(255) NOT NULL,
        "provider" nvarchar(255) NOT NULL,
        "providerAccountId" nvarchar(255) NOT NULL,
        "userId" uniqueidentifier NOT NULL,
        CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "sessions" (
        "id" uniqueidentifier NOT NULL DEFAULT NEWSEQUENTIALID(),
        "sessionToken" nvarchar(2048) NOT NULL,
        "expires" nvarchar(255) NOT NULL,
        "userId" uniqueidentifier NOT NULL,
        CONSTRAINT "UQ_8b5e2ec52e335c0fe16d7ec3584" UNIQUE ("sessionToken"),
        CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "verification_tokens" (
        "id" uniqueidentifier NOT NULL DEFAULT NEWSEQUENTIALID(),
        "token" nvarchar(2048) NOT NULL,
        "identifier" nvarchar(255) NOT NULL,
        "expires" nvarchar(255) NOT NULL,
        CONSTRAINT "PK_f2d4d7a2aa57ef199e61567db22" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "accounts" ADD CONSTRAINT "FK_3aa23c0a6d107393e8b40e3e2a6" FOREIGN KEY ("userId") REFERENCES "users"("id")`
    );
    await queryRunner.query(
      `ALTER TABLE "sessions" ADD CONSTRAINT "FK_57de40bc620f456c7311aa3a1e6" FOREIGN KEY ("userId") REFERENCES "users"("id")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("verification_tokens");
    await queryRunner.dropTable("sessions");
    await queryRunner.dropTable("accounts");
    await queryRunner.dropTable("users");
  }
}
