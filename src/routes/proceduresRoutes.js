import { Router } from 'express'

import Procedures from 'controllers/proceduresController'
import { roleMiddleware, validationMiddleware } from 'middlewares'

const router = Router()

router.post('/', roleMiddleware, /* validationMiddleware, */ Procedures.create)
router.get('/', roleMiddleware, Procedures.getAll)
router.get('/:id', roleMiddleware, Procedures.get)
router.patch('/', roleMiddleware, Procedures.update)
router.delete('/', roleMiddleware, Procedures.remove)

export default router
