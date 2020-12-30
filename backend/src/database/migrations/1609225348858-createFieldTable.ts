import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export default class createFieldTable1609225348858
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "fields",
        columns: [
          {
            name: "idField",
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
            name: "logradouro",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "number",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "complement",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "latitude",
            type: "float",
            isNullable: false,
          },
          {
            name: "longitude",
            type: "float",
            isNullable: false,
          },
          {
            name: "fkOwner",
            type: "uuid",
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      "fields",
      new TableForeignKey({
        name: "foreignKeyOwner",
        columnNames: ["fkOwner"],
        referencedColumnNames: ["idOwner"],
        referencedTableName: "owners",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("fields", "foreignKeyOwner");
    await queryRunner.dropTable("fields");
  }
}
