import { Router } from 'express'

import Procedures from 'controllers/proceduresController'

const router = Router()

router.post('/', Procedures.create)
router.get('/:id', Procedures.get)
router.patch('/', Procedures.update)
router.delete('/', Procedures.remove)

export default router
