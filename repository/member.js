// import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
// import {PutCommand, GetCommand, DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Replace with your access key id
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY // Replace with your secret access key
  }
});
const docClient = DynamoDBDocumentClient.from(client);

const tableName = "member"

const memberRepository = {
  async putData(member) {
    console.log("member: ", member)
    const command = new PutCommand({
      TableName: tableName,
      Item: {
        createdAt: member.createdAt,
        updatedAt: member.updatedAt,
        loginType: member.loginType,
        useYn: member.useYn,
        auth: member.auth,
        username: member.username,
        password: member.password,
        nickname: member.nickname,
        name: member.name,
        email: member.email,
      },
    });

    const response = await docClient.send(command);
    return response;
  },
  async getDatas(condition) {
    const command = new GetCommand({
      TableName: tableName,
      Key: condition,
    });

    const response = await docClient.send(command);
    return response;
  },
  async getDataById(memId) {
    const command = new GetCommand({
      TableName: tableName,
      Key: {
        memId: memId
      },
    });

    const response = await docClient.send(command);
    return response;
  }
}

module.exports = memberRepository
