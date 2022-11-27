import { AppDataSource } from "../data-source";
import { Contact } from "../entity/Contact";
import { User } from "../entity/User";

const contactRepository = AppDataSource.getRepository(Contact)
const userRepository = AppDataSource.getRepository(User)

export async function  CreateContact(phoneNumber: string, email: string, whatsappNumber: string, userId: number): Promise<number> {

  const user = await userRepository.findOneBy({id: userId})

  if(!user)
    throw "User not found"

  const contact = new Contact()

  contact.email = email
  contact.phoneNumber = phoneNumber
  contact.whatsappNumber = whatsappNumber
  contact.userId = userId

  await contactRepository.manager.save(contact)

  return contact.id


}

export async function FindContact(id: number): Promise<Contact> {
  
  const contact = await contactRepository.findOneBy({id: id})

  if(!contact)
    throw "Contact not found"
  
  return contact
}

export async function  UpdateContact(id: number, phoneNumber: string = null, email: string = null, whatsappNumber: string = null): Promise<Contact> {
  const contact = await contactRepository.findOneBy({id: id})

  if(!contact)
    throw "Contact not found"
  
  contact.email = !email? contact.email : email
  contact.phoneNumber = !phoneNumber? contact.phoneNumber: phoneNumber
  contact.whatsappNumber = !whatsappNumber? contact.whatsappNumber: whatsappNumber

  await contactRepository.save(contact)

  return contact
}

export async function DeleteContact(id: number): Promise<void>{
  const contact = await contactRepository.findOneBy({id: id})

  if(!contact)
    throw "Contact not found"
  
  await contactRepository.delete(contact)
}