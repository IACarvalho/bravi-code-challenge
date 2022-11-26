import { Request, Response } from "express";
import { validation } from "../models/BracketsModel";


function BracketsValidation(request: Request, response: Response){
  const { text } = request.body

  if(validation(text)) {
    return response.status(200).json({
      message: "Valid brackets"
    })
  }

  return response.status(200).json({
    message: "Invalid brackets"
  })
}





export { BracketsValidation }