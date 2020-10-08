import { Sequelize } from 'sequelize'

console.log(process.env.DATABASE_URL)

export const sequelize = new Sequelize(process.env.DATABASE_URL || "mysql://user:root@localhost:3306/nextjs-shop")

export function connectSequelize(sequelize) {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })
}