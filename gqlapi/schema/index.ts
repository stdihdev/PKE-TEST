import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
import {GraphQLList} from "graphql/type/definition";
import {ShirtColorType, ShirtType} from "../models/schema_types/shirt";
import {Pants, Shirt} from "../models";
import {PantsType} from "../models/schema_types/pants";

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    all_shirts: {
      type: new GraphQLList(ShirtType),
      resolve: async (parent) => await Shirt.findAll()
    },
    all_pants: {
      type: new GraphQLList(PantsType),
      resolve: async (parent) => await Pants.findAll()
    },
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createShirt: {
      type: ShirtType,
      args: {
        name: {type: GraphQLString},
        color: {type: new GraphQLNonNull(ShirtColorType)},
        size: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve: (parent, {name, color, size}) =>
        Shirt.create({name, color, size})
    },
    deleteShirtById: {
      type: GraphQLInt,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (parent, {id}) => Shirt.destroy({where: {id}})
    },
    createPants: {
      type: PantsType,
      args: {
        name: {type: GraphQLString},
        color: {type: new GraphQLNonNull(GraphQLString)},
        W: {type: new GraphQLNonNull(GraphQLInt)},
        L: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve: (parent, {name, color, W, L}) =>
        Pants.create({name, color, W, L})
    },
    deletePantsById: {
      type: GraphQLInt,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve: (parent, {id}) => Pants.destroy({where: {id}})
    }
  }
})

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})