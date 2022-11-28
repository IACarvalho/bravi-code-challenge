import { Trash, Pencil, PlusCircle } from "phosphor-react"

import "./UserCard.scss"

type Contact = {
  id: number;
  phoneNumber?: string;
  email?: string;
  whatsappNumber?: string;
}

type Props = {
  userID: number;
  name: string;
  contacts: Contact[];
}

export function UserCard({ userID, name, contacts }: Props) {
  function handleTrashClick() {
    console.log(userID)
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
        <span id="user-name">{name}</span>
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
            {contacts.map((contact: Contact) => {
              return (
                <ul>
                  {!contact.phoneNumber ? null : (
                    <li key={contact.id}>
                      <b>Telefone:</b> {contact.phoneNumber}{" "}
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
                    </li>
                  )}
                  {!contact.email ? null : (
                    <li key={contact.id}>
                      <b>E-mail:</b> {contact.email}{" "}
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
                    </li>
                  )}
                  {!contact.whatsappNumber ? null : (
                    <li key={contact.id}>
                      <b>Whatsapp:</b> {contact.whatsappNumber}{" "}
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
                    </li>
                  )}
                </ul>
              )
            })}
            <span>
              <PlusCircle 
                color="#099420" 
                size={32} 
                alt="Adicionar novo contato"
                id="create-contact-button"
                onClick={handleCreateContactClick}
              />
            </span>
        </div>
      </div>
    </div>
  )
}
