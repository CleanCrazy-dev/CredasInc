import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrganizationType1645576524364 implements MigrationInterface {
  name = "AddOrganizationType1645576524364";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "organization_types" ("id" int NOT NULL IDENTITY(1,1), "description" varchar(255) NOT NULL, CONSTRAINT "PK_1e086602db2811aa43bfd5ff149" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`ALTER TABLE "organizations" ADD "typeId" int`);
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD CONSTRAINT "FK_ecea9e8e98c195dbcdcfa59d60c" FOREIGN KEY ("typeId") REFERENCES "organization_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organizations" DROP CONSTRAINT "FK_ecea9e8e98c195dbcdcfa59d60c"`
    );
    await queryRunner.query(`ALTER TABLE "organizations" DROP COLUMN "typeId"`);
    await queryRunner.query(`DROP TABLE "organization_types"`);
  }
}
