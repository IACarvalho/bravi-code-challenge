import { PlusCircle } from "phosphor-react"

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
  function handleCreateUserClick() {}
  return(
    <main>
      <form>
        <input type="text" id="user-id"/>
        <span className="search-button">Buscar</span>
        <span id="create-user-button">Cadastrar</span>
      </form>
      <div id="users">
        <UserCard userID={1} name="Fulano de tal" contacts={contacts}/>
        <UserCard userID={1} name="Fulano de tal" contacts={contacts}/>
        <UserCard userID={1} name="Fulano de tal" contacts={contacts}/>
        <UserCard userID={1} name="Fulano de tal" contacts={contacts}/>
        <UserCard userID={1} name="Fulano de tal" contacts={contacts}/>

      </div>

    </main>
  )
}