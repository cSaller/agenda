import { Router } from 'express'

import User from 'controllers/usersController'

const router = Router()

router.post('/signup', User.create)
router.get('/:id', User.get)
router.patch('/', User.update)
router.delete('/', User.remove)

router.post('/login', User.login)

export default router
