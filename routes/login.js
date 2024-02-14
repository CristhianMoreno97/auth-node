const { jsonResponse } = require('../lib/jsonResponse')

const router = require('express').Router()

router.post('/', (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json(
            jsonResponse(400, {
                error: 'Fields are required'
            })
        )
    }

    // TODO: Autenticar usuario

    const accessToken = 'access_token'
    const refreshToken = 'refresh_token'
    const user = {
        _id: '1',
        name: 'Cristhian Moreno',
        username: 'CristhianMoreno',
    }

    res
        .status(200)
        .json(
            jsonResponse(200, {
                user,
                accessToken,
                refreshToken,
                message: 'User Logged in'
            })
        )
})

module.exports = router