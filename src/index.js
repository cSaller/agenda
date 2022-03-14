import express from 'express'
import { authMiddleware } from './middlewares/auth-middleware'
import { errorHandlingMiddleware } from './middlewares/error-handling-middleware'

import router from './routes'
import { NODE_ENV, PORT } from './config'

const app = express()
app.use(express.json())

if (NODE_ENV === 'develop') {
  const morgan = require('morgan')
  app.use(morgan('tiny'))
}

app.use(authMiddleware)

app.use(router)

app.use(errorHandlingMiddleware)

app.listen(PORT, () => { console.info(`App is listening on port ${PORT}`) })
