import { Router } from 'express'

import User from 'controllers/usersController'
import { roleMiddleware } from 'middlewares/role-middleware'

const router = Router()

router.post('/signup', roleMiddleware, User.create)
router.get('/:id', roleMiddleware, User.get)
router.patch('/', roleMiddleware, User.update)
router.delete('/', roleMiddleware, User.remove)

router.post('/login', User.login)

export default router
