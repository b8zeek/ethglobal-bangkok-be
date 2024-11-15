import { Router } from 'express'

import { getCurrentValue } from '../controllers/oneinch'

const router = Router()

router.post('/get-current-value', getCurrentValue)

export default router
