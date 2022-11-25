import { Request, Response } from "express";


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

function validation(text: string): boolean {
  const splitedText = text.split('')

  if(
    splitedText[0] === ']' 
    || splitedText[0] === ')' 
    || splitedText[0] === '}'
  ){
    return false
  }

  const parentheses = splitedText
                        .filter(letter => letter === '(' || letter === ')')
  
  const squareBrackets = splitedText
                        .filter(letter => letter === '[' || letter === ']')
  
  const brackets = splitedText
                        .filter(letter => letter === '{' || letter === '}')
  
  if(parentheses.length > 0 && parentheses.length % 2 !== 0)
    return false
  
  if(squareBrackets.length > 0 && squareBrackets.length % 2 !== 0)
    return false
  
  if(brackets.length > 0 && brackets.length % 2 !== 0)
    return false
                      
  if(!validateBracketsTypes(parentheses, '('))
    return false
  
  if(!validateBracketsTypes(squareBrackets, '['))
    return false

  if(!validateBracketsTypes(brackets, '{'))
    return false
  
  return true
}

// type is a left bracket (, [ or {
function validateBracketsTypes(list: string[], type: string): boolean{
  const leftPositions = []
  const rightPositions = []

  for(let i in list){
    if(list[i] === type)
      leftPositions.push(i)
    else
      rightPositions.push(i)
  }


  for(let i in leftPositions) {
    if(Number(leftPositions[i]) > Number(rightPositions[i]))
      return false
  }

  return true
}



export { BracketsValidation }