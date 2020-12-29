import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Owner from "./Owner";

@Entity("fields")
class Field {
  @PrimaryGeneratedColumn("uuid")
  idField: string;

  @Column()
  name: string;

  @Column()
  logradouro: string;

  @Column("int")
  number: number;

  @Column()
  complement: string;

  @Column("int")
  latitude: number;

  @Column("int")
  longitude: number;

  @Column()
  fkOwner: string;

  @ManyToOne(() => Owner)
  @JoinColumn({ name: "fkOwner" })
  owner: Owner;
}
