Node.js Server

This repository contains a simple Node.js server built with Express.js. The server provides two main functionalities:

PIN Authentication: An endpoint to authenticate users using a PIN.
WebSocket Token Retrieval: An endpoint to fetch a WebSocket token from an external API.
Features

CORS Enabled: The server allows cross-origin requests.
PIN Authentication: Verifies a provided PIN and returns an authentication token.
WebSocket Token Retrieval: Fetches a WebSocket token from the KuCoin API.
Installation

Follow these steps to set up the server on your local machine:

Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/your-repository.git
Navigate to the project directory:
bash
Copy code
cd your-repository
Install the dependencies:
bash
Copy code
npm install
Usage

To start the server, run:

bash
Copy code
npm start
The server will start and listen on port 3000.

API Endpoints

POST /api/authenticate
Description: Authenticates a user with a PIN.
Request Body:
json
Copy code
{
  "pin": "string",
  "symbol": "string"
}
Response:
Success:
json
Copy code
{
  "authtoken": "string"
}
Failure:
json
Copy code
{
  "error": "Invalid PIN"
}
Status Codes:
200 OK for successful authentication
401 Unauthorized for invalid PIN
POST /ws-token
Description: Retrieves a WebSocket token from the KuCoin API.
Response:
json
Copy code
{
  // WebSocket token data
}
Status Codes:
200 OK for successful retrieval
500 Internal Server Error if the request to KuCoin fails
Configuration

VALID_PIN: The PIN used for authentication is hardcoded in the server code. Change the value of VALID_PIN if needed.
Testing

You can test the server using tools like Postman or curl.

Example using curl:

Authenticate:
bash
Copy code
curl -X POST http://localhost:3000/api/authenticate -H "Content-Type: application/json" -d '{"pin": "123", "symbol": "BTC"}'
Get WebSocket Token:
bash
Copy code
curl -X POST http://localhost:3000/ws-token
