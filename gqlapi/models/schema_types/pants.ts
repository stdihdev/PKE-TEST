import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

export const PantsType = new GraphQLObjectType({
  name: 'Pants',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    color: {
      type: new GraphQLNonNull(GraphQLString)
    },
    W: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    L: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  })
})
