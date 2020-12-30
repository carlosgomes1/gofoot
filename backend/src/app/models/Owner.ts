import { uuid } from "uuidv4";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import Field from "./Field";

@Entity("owners")
class Owner {
  @PrimaryGeneratedColumn("uuid")
  idOwner: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @Column()
  whatsapp: string;

  @Column()
  uf: string;

  @Column()
  city: string;

  @OneToMany(() => Field, field => field.owner)
  fields: Field[];

  constructor() {
    this.idOwner = uuid();
  }
}

export default Owner;
