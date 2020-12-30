import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export default class createResponsibleTable1609293888088
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "responsibles",
        columns: [
          {
            name: "idResponsible",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fkField",
            type: "uuid",
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      "responsibles",
      new TableForeignKey({
        name: "foreignKeyField",
        columnNames: ["fkField"],
        referencedColumnNames: ["idField"],
        referencedTableName: "fields",
        onUpdate: "CASCADE",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("responsibles", "foreignKeyField");
    await queryRunner.dropTable("responsibles");
  }
}
