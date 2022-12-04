import { Users } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";

import { UserCard } from "../../Components/UserCard"
import { IUser } from "../../types";
import "./User.module.scss"

export function User() {
  const [users, setUsers] = useState<IUser[]>([])

  async function getUsers(): Promise<IUser[]> {

    const usersResponse =  await api.get('/user')
      .then((response) => response.data)
      .catch(err => console.log(err))
    return usersResponse
  }

  useEffect(() => {
    getUsers()
      .then(response => setUsers(response))
      .catch(err => console.log(err))
  
  }, [])
  function handleCreateUserClick() {}
  return(
    <main id="users-page">
      <form>
        <input type="text" id="IUser-id"/>
        <span className="search-button">Buscar</span>
        <Link to="/new-IUser"><span id="create-IUser-button">Cadastrar</span></Link>
      </form>
      <div id="users">
        {
          users.map(
            user => {
              return <UserCard user={user} key={user.id} />
            }
          )
        }
      </div>

    </main>
  )
}