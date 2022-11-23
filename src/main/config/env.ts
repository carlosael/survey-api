export default {
  mongoUrl: process.env.MONGO_URL as string || 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'tj671=-5K'
}
