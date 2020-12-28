import { uuid } from "uuidv4";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  constructor() {
    this.idOwner = uuid();
  }
}

export default Owner;
