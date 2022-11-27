import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
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

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  userId: number
}
