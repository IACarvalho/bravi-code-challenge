import { AppDataSource } from "../data-source"
import { User } from "../entity/User"

const userRepository = AppDataSource.getRepository(User)

async function CreateNewUser(name: string): Promise<number>{

  const user = new User()

  user.name = name

  await AppDataSource.manager.save(user)

  return user.id

}

async function FindUserById(id: number): Promise<object> {

  const user = await userRepository.findOneBy({
    id: id
  })

  if(!user)
    throw "User not found"

  return user
}

async function UpdateUserById(id: number, name: string): Promise<object> {
  const user = await userRepository.findOneBy({
    id: id
  })

  if(!user) {
    throw "User not found"
  }

  user.name = name

  await userRepository.save(user)

  return user
}

async function DeleteUserById(id: number): Promise<boolean> {

  const user = await userRepository.findOneBy({ id })

  if(!user)
    throw "User not found"
  
  await userRepository.remove(user)

  return true
}

export { CreateNewUser, FindUserById, UpdateUserById, DeleteUserById }