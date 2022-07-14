import {Resolver,Query, Mutation , Arg} from 'type-graphql'

import AWS from "aws-sdk";
require("dotenv").config();


AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
@Resolver()
export class BookResolver{
    @Query(()=>String)
     helloBook(){
        return "Hola estas en libro"
    }

    @Query(()=>String)
        async getbooks(){
            const params = {
                TableName: 'userTable'             
            }       
            const data = await dynamoClient.scan(params).promise();        
            const d = JSON.stringify(data.Items)          
            console.log(d)
            return d
        }
    @Mutation( ()=> String)
        createBook( @Arg("name") name:string ,@Arg("quantity") quantity:number  )  {    
            const params = {
                TableName: 'userTable',
                Item: {               
                    name,
                    quantity
                    }
       }       
       dynamoClient.put(params).promise();        
       return "Book creation was sucefull"
    }

}

