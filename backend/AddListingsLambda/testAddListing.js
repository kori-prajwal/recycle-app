import fetch from "node-fetch";

const url = "https://aietvs2uw8.execute-api.us-east-1.amazonaws.com/v1/AddListing";

const data = {
  title: "Test Item from VS Code",
  description: "Adding this using Node.js fetch",
  category: "Books",
  location: "Pune",
  image_url: "https://example.com/test-image.jpg"
};

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(json => console.log("Response:", json))
.catch(err => console.error("Error:", err));
