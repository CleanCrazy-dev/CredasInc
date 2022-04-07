import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrganizationColumns1645563453043 implements MigrationInterface {
  name = "AddOrganizationColumns1645563453043";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "created_by" varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "location" varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "contact_name" varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "phone" varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "street_address" varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "city" varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "state" varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "postal_code" varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "email" varchar(255) NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "organizations" DROP COLUMN "email"`);
    await queryRunner.query(
      `ALTER TABLE "organizations" DROP COLUMN "postal_code"`
    );
    await queryRunner.query(`ALTER TABLE "organizations" DROP COLUMN "state"`);
    await queryRunner.query(`ALTER TABLE "organizations" DROP COLUMN "city"`);
    await queryRunner.query(
      `ALTER TABLE "organizations" DROP COLUMN "street_address"`
    );
    await queryRunner.query(`ALTER TABLE "organizations" DROP COLUMN "phone"`);
    await queryRunner.query(
      `ALTER TABLE "organizations" DROP COLUMN "contact_name"`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" DROP COLUMN "location"`
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" DROP COLUMN "created_by"`
    );
  }
}
