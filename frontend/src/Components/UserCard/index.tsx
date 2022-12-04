import { Trash, Pencil, PlusCircle } from "phosphor-react"
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { IContact, IUser } from "../../types";

import "./UserCard.scss"

type Props = {
  user: IUser
}

export function UserCard({ user }: Props) {
  const [contacts, setContacts] = useState<IContact[]>([])

  async function getContacts(userId: number): Promise<IContact[]> {
    const responseContacts = await api.get(`/contact/${userId}`)
      .then(response => response.data)
      .catch(err => console.log(err))
    console.log(responseContacts)
    return responseContacts
  }

  useEffect(() =>{
    getContacts(user.id)
      .then(response => setContacts(response))
      .catch(err => console.log(err))

  }, [])

  function handleTrashClick() {
    console.log()
  }

  
  function handleEditButtonClick() {
    console.log("Editar")
  }

  function handleDeleteContactClick() {}

  function handleEditContactClick() {}

  function handleCreateContactClick() {}

  return (
    <div id="user-card-main-body">
      <div className="user-card-header">
        <span id="user-name">{user.name}</span>
        <span className="button-group">
          <Pencil
            onClick={handleEditButtonClick}
            className="user-card-button"
            color="#b2b6ec"
            size={32}
            alt="Editar usuário"
          />
          <Trash
            className="user-card-button"
            onClick={handleTrashClick}
            color="#c90a0a"
            weight="fill"
            size={32}
            alt="Excluir usuário"
          />
        </span>
      </div>
      <div>
        <div id="contact">
            {contacts.map((contact: IContact) => {
              return (
                <div className="contact-list">
                  <ul>
                    {!contact.phoneNumber ? null : (
                      <li key={contact.id}>
                        <b>Telefone:</b> {contact.phoneNumber}{" "}
                      </li>
                    )}
                    {!contact.email ? null : (
                      <li key={contact.id}>
                        <b>E-mail:</b> {contact.email}{" "}
                      </li>
                    )}
                    {!contact.whatsappNumber ? null : (
                      <li key={contact.id}>
                        <b>Whatsapp:</b> {contact.whatsappNumber}{" "}
                      </li>
                    )}
                  </ul>
                  <span className="button-group">
                  <Pencil
                    onClick={handleEditContactClick}
                    className="user-card-button"
                    color="#b2b6ec"
                    size={16}
                    alt="Editar contato"
                  />
                  <Trash
                    className="user-card-button"
                    onClick={handleDeleteContactClick}
                    color="#c90a0a"
                    weight="fill"
                    size={16}
                    alt="Ecluir contato"
                    />
                  </span>
                </div>
              )
            })}
            <span>
              <Link to="/new-contact">
                <PlusCircle 
                  color="#099420" 
                  size={32} 
                  alt="Adicionar novo contato"
                  id="create-contact-button"
                />
              </Link>
            </span>
        </div>
      </div>
    </div>
  )
}
