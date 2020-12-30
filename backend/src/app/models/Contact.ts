import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { uuid } from "uuidv4";

import Responsible from "./Responsible";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  idContact: string;

  @Column()
  type: string;

  @Column()
  value: string;

  @Column()
  fkResponsible: string;

  @ManyToOne(() => Responsible)
  @JoinColumn({ name: "fkResponsible" })
  responsible: Responsible;

  constructor() {
    this.idContact = uuid();
  }
}

export default Contact;
