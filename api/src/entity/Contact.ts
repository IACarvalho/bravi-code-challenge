import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm"
import { User } from "./User"

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  phoneNumber: string

  @Column({ nullable: true })
  email: string

  @Column({ nullable: true })
  whatsappNumber: string

  @Column()
  userId: number
}
