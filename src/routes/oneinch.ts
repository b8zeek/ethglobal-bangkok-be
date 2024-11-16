import { Router } from 'express'

import {
    getCurrentValue,
    getProfitAndLoss,
    getTokenDetails,
    getTokens
} from '../controllers/oneinch'

const router = Router()

router.post('/get-current-value', getCurrentValue)
router.post('/get-profit-and-loss', getProfitAndLoss)
router.post('/get-token-details', getTokenDetails)

router.get('/get-tokens', getTokens)

export default router
