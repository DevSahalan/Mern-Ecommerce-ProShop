import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
const app = express()

connectDb()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
)
