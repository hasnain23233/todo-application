import { Request , Response , NextFunction } from "express"
import TodoSchema from "../model/user"

export const getInfo = async (req : Request , res : Response, next : NextFunction)=>{
    try{
        const {title , message} = req.body

        if(!title || !message){
           return res.status(400).json({message: 'Fill all the input'})
        }

        const TodoAdd = await TodoSchema.create({
            title ,
            message
        })
        res.status(200).json({message: 'successfully add the data' , data: TodoAdd})
    } catch(error){
        res.status(500).json({message: 'server Error' , error})
    }
}

