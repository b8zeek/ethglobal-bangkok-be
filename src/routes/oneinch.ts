import { Router } from 'express'

import { getCurrentValue, getProfitAndLoss } from '../controllers/oneinch'

const router = Router()

router.post('/get-current-value', getCurrentValue)
router.post('/get-profit-and-loss', getProfitAndLoss)

export default router
