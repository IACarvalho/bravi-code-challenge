import { UserCard } from "../../Components/UserCard";
import "./User.module.scss"

const contacts = [
  {
    id: 1,
    phoneNumber: "(85) 0 0000-0000"
  },
  {
    id: 2,
    email: "teste@email.com",
    whatsappNumber: "(00) 0 0000-0000"
  }
]
export function User() {
  return(
    <main>
      <UserCard userID={1} name="Fulano de tal" contacts={contacts}/>
    </main>
  )
}