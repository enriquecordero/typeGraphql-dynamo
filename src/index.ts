import "reflect-metadata";
import {ApolloServer} from 'apollo-server'
import { buildSchema } from "type-graphql";
import {BookResolver} from './resolvers/BookResolver'


const main = async () => {

const schema = await buildSchema({

    resolvers: [BookResolver]
})

const server = new ApolloServer({schema}) 

await server.listen(4000)

console.log("Server has Start")

}
main()