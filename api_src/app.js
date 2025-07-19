import express from 'express'

import {router} from './routes.js'

const app = express()
app.use(express.json())
app.use(router)
app.listen(3000, '0.0.0.0', () => {
    console.log('API started at port 3000')
})