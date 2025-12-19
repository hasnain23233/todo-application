import express from 'express'
import {getInfo} from '../controller/todoController'

const router = express.Router()

router.post('/addingTodo' ,getInfo)

export default router