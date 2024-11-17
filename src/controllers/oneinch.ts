import { RequestHandler } from 'express'
import axios from 'axios'

export const getCurrentValue: RequestHandler = async (req, res, next) => {
    const { chain_id, addresses } = req.body

    try {
        const { data } = await axios.get(
            'https://api.1inch.dev/portfolio/portfolio/v4/overview/erc20/current_value',
            {
                params: {
                    chain_id,
                    addresses
                },
                headers: {
                    Authorization: `Bearer ${process.env.VITE_ONE_INCH_API_KEY}`
                },
                paramsSerializer: {
                    indexes: null
                }
            }
        )

        res.status(200).json({ response: data })
    } catch (err) {
        next(err)
    }
}

export const getProfitAndLoss: RequestHandler = async (req, res, next) => {
    const { chain_id, addresses } = req.body

    try {
        const { data } = await axios.get(
            'https://api.1inch.dev/portfolio/portfolio/v4/overview/erc20/profit_and_loss',
            {
                params: {
                    chain_id,
                    addresses,
                    timerange: '1day'
                },
                headers: {
                    Authorization: `Bearer ${process.env.VITE_ONE_INCH_API_KEY}`
                },
                paramsSerializer: {
                    indexes: null
                }
            }
        )

        res.status(200).json({ response: data })
    } catch (err) {
        next(err)
    }
}

export const getTokenDetails: RequestHandler = async (req, res, next) => {
    const { chain_id, addresses } = req.body

    try {
        const { data } = await axios.get(
            'https://api.1inch.dev/portfolio/portfolio/v4/overview/erc20/details',
            {
                params: {
                    chain_id,
                    addresses,
                    timerange: '1day'
                },
                headers: {
                    Authorization: `Bearer ${process.env.VITE_ONE_INCH_API_KEY}`
                },
                paramsSerializer: {
                    indexes: null
                }
            }
        )

        res.status(200).json({ response: data })
    } catch (err) {
        next(err)
    }
}

export const getTokens: RequestHandler = async (_, res, next) => {
    try {
        const { data } = await axios.get('https://api.1inch.dev/token/v1.2/1', {
            headers: {
                Authorization: `Bearer ${process.env.VITE_ONE_INCH_API_KEY}`
            }
        })

        res.status(200).json({ response: data })
    } catch (err) {
        next(err)
    }
}
