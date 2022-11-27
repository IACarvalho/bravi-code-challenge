import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./Contact";


@Entity()
class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Contact, contact => contact.userId)
  contact: Contact[]
}

export { User }