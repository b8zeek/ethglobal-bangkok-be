import { RequestHandler } from 'express'
import axios from 'axios'

export const getCurrentValue: RequestHandler = async (req, res, next) => {
    const { walletAddress, chainId } = req.body

    try {
        const { data } = await axios.get(
            `https://api.1inch.dev/portfolio/portfolio/v4/overview/erc20/current_value?addresses=${walletAddress}&chain_id=${chainId}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.VITE_ONE_INCH_API_KEY}`
                }
            }
        )

        res.status(200).json({ response: data })
    } catch (err) {
        next(err)
    }
}

export const getProfitAndLoss: RequestHandler = async (req, res, next) => {
    const { walletAddress, chainId, fromTimestamp, toTimestamp } = req.body

    try {
        const { data } = await axios.get(
            `https://api.1inch.dev/portfolio/portfolio/v4/overview/erc20/profit_and_loss?addresses=${walletAddress}&chain_id=${chainId}&from_timestamp=${fromTimestamp}&to_timestamp=${toTimestamp}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.VITE_ONE_INCH_API_KEY}`
                }
            }
        )

        res.status(200).json({ response: data })
    } catch (err) {
        next(err)
    }
}
