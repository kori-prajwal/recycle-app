const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1" });

exports.handler = async (event) => {
  try {
    const command = new ScanCommand({ TableName: "RecycleListings" });
    const data = await client.send(command);

    const items = data.Items.map((item) => {
      return {
        id: item.id.S,
        title: item.title.S,
        description: item.description.S,
        location: item.location.S
      };
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items)
    };
  } catch (err) {
    console.error("Error fetching listings:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" })
    };
  }
};
