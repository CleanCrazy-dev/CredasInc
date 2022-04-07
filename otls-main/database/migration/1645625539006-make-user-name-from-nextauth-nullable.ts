import { MigrationInterface, QueryRunner } from "typeorm";

export class nextauthTables21645625539006 implements MigrationInterface {
  name = "nextauthTables21645625539006";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "name" varchar(255)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "name" varchar(255) NOT NULL`
    );
  }
}
