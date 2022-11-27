import { Request, Response } from "express"
import { Contact } from "../entity/Contact"
import { CreateContact, DeleteContact, FindContact, UpdateContact } from "../models/ContactModel"


export class ContactController {
  async Create(request: Request, response: Response) {
    const {phoneNumber, email, whatsappNumber, userId} = request.body
    
    if(phoneNumber === null && email === null && whatsappNumber === null) {
      return response.status(400).json({
        error: "You need to pass at least one type of contact"
      })

    }
    let error: string

    const id: number = await CreateContact(phoneNumber, email, whatsappNumber, Number(userId))
        .catch(er => error = er)
    
    if(error === "User not found")
      return response.status(400).json({error})

    return response.status(201).json({
      message: `Contact created with id: ${id}`
    })
  }

  async Find(request: Request, response: Response) {
    const { id } = request.params

    let error: string

    const contact: Contact = await FindContact(Number(id))
        .catch(er => error = er)

    if(error)
      return response.status(400).json({error})
    
    return response.status(200).json(contact)
  }

  async Update(request: Request, response: Response) {
    const { id } = request.params
    const { phoneNumber, email, whatsappNumber } = request.body

    let error: string

    const contact = await UpdateContact(Number(id), phoneNumber, email, whatsappNumber)
      .catch(er => error = er)

    if(error)
      return response.status(400).json({error})
    
    return response.status(200).json({contact})
  }

  async Delete(request: Request, response: Response) {
    const { id } = request.params

    let error: string

    await DeleteContact(Number(id))
      .catch(er => error = er)
    
    if(error)
      return response.status(400).json({error})
    
    return response.status(200).json({
      message: "Contact deleted"
    })
  }
}