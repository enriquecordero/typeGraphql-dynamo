import {Resolver,Query, Mutation} from 'type-graphql'




@Resolver()
export class BookResolver{
    @Query(()=>String)

     helloworld(){
        return "helloworld"
    }

}

