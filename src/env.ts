import dotenv from 'dotenv'

dotenv.config()

const { APP_PORT = 3000, APP_URL = `http://localhost:${APP_PORT}` } = process.env

export { APP_PORT, APP_URL }
