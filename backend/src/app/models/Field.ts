import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { uuid } from "uuidv4";

import Owner from "./Owner";
import Responsible from "./Responsible";

@Entity("fields")
class Field {
  @PrimaryGeneratedColumn("uuid")
  idField: string;

  @Column()
  name: string;

  @Column()
  logradouro: string;

  @Column("int")
  number: string;

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

  @OneToMany(() => Responsible, responsible => responsible.field)
  responsibles: Responsible[];

  constructor() {
    this.idField = uuid();
  }
}

export default Field;
