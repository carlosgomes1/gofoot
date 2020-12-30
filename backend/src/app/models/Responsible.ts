import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { uuid } from "uuidv4";

import Field from "./Field";
import Contact from "./Contact";

@Entity("responsibles")
class Responsible {
  @PrimaryGeneratedColumn("uuid")
  idResponsible: string;

  @Column()
  name: string;

  @Column()
  fkField: string;

  @ManyToOne(() => Field)
  @JoinColumn({ name: "fkField" })
  field: Field;

  @OneToMany(() => Contact, contact => contact.responsible)
  contacts: Contact[];

  constructor() {
    this.idResponsible = uuid();
  }
}

export default Responsible;
