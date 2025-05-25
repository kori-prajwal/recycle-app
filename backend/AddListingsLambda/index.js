import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "RecycleListings";

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const item = {
      itemId: uuidv4(),
      title: body.title,
      description: body.description,
      category: body.category || "",
      location: body.location || "",
      image_url: body.image_url || "",
      timestamp: new Date().toISOString(),
    };

    await dynamodb
      .put({
        TableName: TABLE_NAME,
        Item: item,
      })
      .promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Listing added successfully",
        itemId: item.itemId,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
