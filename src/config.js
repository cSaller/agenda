import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export const NODE_ENV = process.env.NODE_ENV || 'develop'
export const PORT = process.env.PORT || 3000
export const ACCESS_SECRET = process.env.ACCESS_SECRET || 'mysupersecret'
export const ACCESS_EXPIRES = process.env.ACCESS_EXPIRES || '1d'
