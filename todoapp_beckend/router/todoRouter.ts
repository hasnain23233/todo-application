import express from 'express'
import {getInfo} from '../controller/todoController'

const router = express.Router()

router.get('/' ,getInfo)

export default router