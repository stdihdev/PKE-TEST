import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {GraphQLList} from "graphql/type/definition";
import {ShirtType} from "../models/schema_types/shirt";
import {Shirt} from "../models";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    all_shirts: {
      type: new GraphQLList(ShirtType),
      resolve: async (parent) => await Shirt.findAll()
    }
  }
})

export const schema = new GraphQLSchema({
  query: Query
})