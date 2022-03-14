import { Router } from 'express'

import userRoutes from './usersRoutes'
import clientRoutes from './clientsRoutes'
import scheduleRoutes from './schedulesRoutes'
import procedureRoutes from './proceduresRoutes'

const router = Router()
const api = Router()

api.use('/users', userRoutes)
api.use('/clients', clientRoutes)
api.use('/schedules', scheduleRoutes)
api.use('/procedures', procedureRoutes)

router.use('/v1', api)

export default router
