import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrganizations1644508371129 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "organizations",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "datetime",
            default: "getutcdate()",
          },
          {
            name: "updated_at",
            type: "datetime",
            default: "getutcdate()",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("organizations");
  }
}
