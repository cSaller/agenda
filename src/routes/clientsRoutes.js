import { Router } from 'express'

import Client from 'controllers/clientsController'

const router = Router()

router.post('/', Client.create)
router.get('/:id', Client.get)
router.patch('/', Client.update)
router.delete('/', Client.remove)

export default router
