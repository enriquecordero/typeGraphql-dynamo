import { DocumentClient } from "aws-sdk/clients/dynamodb";
import AWS from "aws-sdk";
import {ApiConstants} from '../constans/api-constans'
require("dotenv").config();

 AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export class DynamoDbClient {
  private documentClient!: DocumentClient;

  public getClient(): DocumentClient {
    if (!this.documentClient) {
      this.documentClient = new AWS.DynamoDB.DocumentClient({region: ApiConstants.DEFAULT_REGION});
    }

    return this.documentClient;
  }
}
