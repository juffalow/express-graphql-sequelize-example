import {
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';


export default new GraphQLInputObjectType({
  name: 'authorInputType',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    last_name: { type: new GraphQLNonNull(GraphQLString) }
  })
})
