import express, {NextFunction, Request, Response} from 'express'
import {userRouter} from "./users/users.js";

const port = 8000
const app = express()

app.use((req, res, next) => {
    // TODO remove console
    console.log('время ' + Date.now())
    next()
})

app.get('/hello', (req, res) => {
    throw new Error('test')
})

app.use('/users', userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message, `: err.message`)
    res.status(500).send(err.message)
})

app.listen(port, () => {
    // TODO remove console
    console.log('server listening on port ' + port)
})
