// Import AWS SDK v3 using ESM-style imports
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

// Create an AWS Lambda client
const client = new LambdaClient({ region: "us-east-1" });

async function invokeGetListings() {
  const params = {
    FunctionName: "GetListings",
    InvocationType: "RequestResponse",
    LogType: "Tail",
    Payload: new TextEncoder().encode(JSON.stringify({})),
  };

  const command = new InvokeCommand(params);

  try {
    const response = await client.send(command);
    const payload = new TextDecoder("utf-8").decode(response.Payload);
    console.log("✅ Response:", JSON.parse(payload));
  } catch (err) {
    console.error("❌ Error invoking Lambda:", err);
  }
}

invokeGetListings();
