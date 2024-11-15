import { Router } from 'express'

import {
    getCurrentValue,
    getProfitAndLoss,
    getTokenDetails
} from '../controllers/oneinch'

const router = Router()

router.post('/get-current-value', getCurrentValue)
router.post('/get-profit-and-loss', getProfitAndLoss)
router.post('/get-token-details', getTokenDetails)

export default router
