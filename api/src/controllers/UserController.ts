import { Request, Response } from "express";
import { CreateNewUser, DeleteUserById, FindUserById, UpdateUserById } from "../models/UserModel";

class UserController {
  async Create(request: Request, response: Response){
    const { name } = request.body

    let error: string
  
    const id  = await CreateNewUser(name)
      .catch(er => error = er)
  
    if(error) {
      return response.status(400).json({error})
    }
    
    return response.status(201).json({
      success: `Created user id: ${id}`
    })
  }

  async FindById(request: Request, response: Response) {
    const { id } = request.params

    let error: string
  
    const user = await FindUserById(Number(id))
      .catch(er => error = er)
    
    if(error){
      return response.status(404).json({error})
    }
  

    return response.status(200).json(user)

  
  }

  async Update(request: Request, response: Response) {
    const { id } = request.params
    const { name } = request.body

    let error: string

    const user = await UpdateUserById(Number(id), name).catch(er => error = er)

    if(error) {
      return response.status(404).json({
        error
      })
    }

    return response.status(202).json(user)
  }

  async Delete(request: Request, response: Response) {
    const { id } = request.params

    let error: string

    await DeleteUserById(Number(id))
      .catch(er => error = er)

    if(error)
      return response.status(404).json({error})
    
    return response.status(202).json({
      success: `User id: ${id} deleted`
    })

  
  }


}

export { UserController }