export interface IUser  {
  id: number
  name: string
}

export interface IContact {
  id: number
  phoneNumber?: string
  email?: string
  whatsappNumber?: string
  userId: number
}