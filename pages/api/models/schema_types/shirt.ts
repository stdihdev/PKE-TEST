import {
  GraphQLEnumType,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

const ShirtColorType = new GraphQLEnumType({
  name: 'ShirtColorType',
  values: {
    WHITE: {value: "white"},
    GREY: {value: "grey"},
    BLUE: {value: "blue"}
  }
});

export const ShirtType = new GraphQLObjectType({
  name: "Shirt",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    color: {
      type: new GraphQLNonNull(ShirtColorType)
    },
    size: {
      type: new GraphQLNonNull(GraphQLInt)
    },
  })
})