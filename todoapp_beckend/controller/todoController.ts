import { Request , Response , NextFunction } from "express"

export const getInfo = async (req : Request , res : Response, next : NextFunction)=>{
    res.send('Your data was fetched thank you')
}

