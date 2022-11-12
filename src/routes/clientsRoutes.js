import { Router } from 'express'

import Client from 'controllers/clientsController'
import { roleMiddleware, validationMiddleware } from 'middlewares'

const router = Router()

router.post('/', validationMiddleware, Client.create)
router.get('/:id', Client.get)
router.patch('/', Client.update)
router.delete('/', roleMiddleware, Client.remove)

export default router
