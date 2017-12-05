import path from 'path'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'
import { makeExecutableSchema } from 'graphql-tools'

const typesArray = fileLoader(path.join(__dirname, './types'))
const resolversArray = fileLoader(path.join(__dirname, './resolvers'), { extensions: ['.js'] });

const typeDefs = mergeTypes(typesArray)
const resolvers = mergeResolvers(resolversArray)

const schema = makeExecutableSchema({ typeDefs, resolvers })
// // addMockFunctionsToSchema({ schema })

export { schema, typeDefs }
