import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import { connectSequelize, sequelize } from '../../gqlapi/models/base'
import { schema } from '../../gqlapi/schema'

connectSequelize(sequelize)

const cors = Cors({
  allowMethods: ['GET', 'POST', 'OPTIONS']
})

const apolloServer = new ApolloServer({
  schema
})
const handler = apolloServer.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false
  }
}

export default cors(handler)
