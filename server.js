const express = require("express");
const app = express();

const authorizedDomains = ["jjj.com", "example.com"]; // Add your authorized domains here

app.get("/widget.js", (req, res) => {
  const apiKey = req.query.apiKey; // Assuming the API key is provided as a query parameter

  // Validate API key and authorized domain
  //   if (validateApiKey(apiKey) && validateDomain(req.get("host"))) {
  if (validateApiKey(apiKey)) {
    // Serve the widget script
    res.sendFile(__dirname + "/index.js");
  } else {
    // Unauthorized access
    res.status(403).send("Access denied");
  }
});

function validateApiKey(apiKey) {
  // Implement logic to validate the API key against your database or storage
  return apiKey === "yourApiKey"; // Replace with your actual validation logic
}

function validateDomain(requestedDomain) {
  // Implement logic to validate the requesting domain against your list of authorized domains
  return authorizedDomains.includes(requestedDomain);
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
