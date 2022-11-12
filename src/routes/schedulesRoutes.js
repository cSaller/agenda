import { Router } from 'express'

import Schedule from 'controllers/schedulesController'
import { validationMiddleware } from 'middlewares'

const router = Router()

router.get('/client/:id', Schedule.getByClient)
router.get('/range', Schedule.getByRange)
router.get('/:id', Schedule.getByProcedure)
router.post('/', validationMiddleware, Schedule.create)
router.patch('/', Schedule.update)
router.delete('/', Schedule.remove)

export default router
