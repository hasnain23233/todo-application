import express from 'express'
import {getInfo} from '../controller/todoController'

const router = express.Router()

router.get('/addingTodo' ,getInfo)

export default router