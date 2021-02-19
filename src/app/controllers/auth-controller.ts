import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const env = require('../../../env')

class AuthController {
  async auth(req: Request, res: Response) {
    const repository = getRepository(User)
    const { email, password } = req.body

    const user = await repository.findOne({ email })

    if (!user) {
      return res.sendStatus(401)
    }
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.sendStatus(401)
    }
    const token = jwt.sign({ id: user.id }, env.jwtSecret, { expiresIn: '1d'})
    
    const toUser = {
      user: {
        id: user.id,
        email: user.email
      },      
      token
    }

    return res.json(toUser)

  }
}
export default new AuthController()