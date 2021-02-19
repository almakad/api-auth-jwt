import { Router }from 'express'

import authMiddleware from './app/middlewares/authMiddleware'

import UserController from './app/controllers/user-controller'
import AuthController from './app/controllers/auth-controller'

const router = Router()

router.post('/users', UserController.store)
router.post('/auth', AuthController.auth)
router.get('/users', authMiddleware, UserController.index)



export default router