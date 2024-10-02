const AWS = require("aws-sdk")
const dynamoDB = new AWS.DynamoDB.DocumentClient()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  //   endpoint: process.env.AWS_END_POINT,
})

// Create operation
const createItem = async (tableName, item) => {
  const params = {
    TableName: tableName,
    Item: item,
  }

  return dynamoDB.put(params).promise()
}

// Read operation
const getItem = async (tableName, itemId) => {
  const params = {
    TableName: tableName,
    Key: {
      id: itemId,
    },
  }

  return dynamoDB.get(params).promise()
}

// Update operation
const updateItem = async (tableName, itemId, updateData) => {
  const params = {
    TableName: tableName,
    Key: {
      id: itemId,
    },
    UpdateExpression: "set ...",
    ExpressionAttributeValues: {
      ":value": updateData.value,
    },
    ReturnValues: "UPDATED_NEW",
  }

  return dynamoDB.update(params).promise()
}

// Delete operation
const deleteItem = async (tableName, itemId) => {
  const params = {
    TableName: tableName,
    Key: {
      id: itemId,
    },
  }

  return dynamoDB.delete(params).promise()
}
