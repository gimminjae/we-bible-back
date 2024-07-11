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

const db = {
  async putData(tableName, data) {
    const command = new PutCommand({
      TableName: tableName,
      Item: data,
    });

    const response = await docClient.send(command);
    return response;
  },
  async getDatas(tableName, condition) {
    const command = new GetCommand({
      TableName: tableName,
      Key: condition,
    });

    const response = await docClient.send(command);
    return response;
  },
  async getDataById(tableName, idObject) {
    const command = new GetCommand({
      TableName: tableName,
      Key: idObject,
    });

    const response = await docClient.send(command);
    return response;
  }
}

module.exports = db
