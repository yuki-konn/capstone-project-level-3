import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { accessKeyId, region, secretAccessKey } from "../../.aws/credentials";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export async function authenticationAws(email = "", password = "") {
  //DynamoDB CREDENTIALS
  const apiKey = {
    region: region,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  };

  // DynamoDB CLIENTS
  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  // DynamoDB REQUEST
  const request = {
    TableName: "capstone_logins",
    Key: { email: email },
  };

  // RESPONSE
  const response = await niceClient.get(request);
  // NOTE: Needs to make a outcome for when matchingLogin is 'undefined'.
  //       when the email doesn't match and no error message showing.
  const matchingLogin = response.Item;

  // CHECKS IF INPUTTED PASSWORD MATCHES PASSWORD IN DATABASE.
  const isAuthenticated = password === matchingLogin.password;
  return isAuthenticated;
}
