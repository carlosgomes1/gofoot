import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { uuid } from "uuidv4";

import Field from "./Field";

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

  constructor() {
    this.idResponsible = uuid();
  }
}

export default Responsible;
