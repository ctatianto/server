# Node.js Authentication and WebSocket Token Server

## Overview

This Node.js project is a simple server that provides authentication and a WebSocket token endpoint. It uses Express for the server framework, CORS for cross-origin requests, and Axios for making HTTP requests.

## Features

- **Authentication Endpoint:** Validates a PIN and returns an authentication token if the PIN is correct.
- **WebSocket Token Endpoint:** Fetches a WebSocket token from an external API.

## Requirements

- Node.js (version 14 or later recommended)
- npm (Node Package Manager)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. **Navigate into the project directory:**

    ```bash
    cd your-repository
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the server:**

    ```bash
    node server.js
    ```

    The server will start and listen on port 3000.

## API Endpoints

### Authentication

- **Endpoint:** `/api/authenticate`
- **Method:** `POST`
- **Request Body:**

    ```json
    {
      "pin": "string",
      "symbol": "string"
    }
    ```

- **Response:**

    - **Success (HTTP 200):**

        ```json
        {
          "authtoken": "sample-token"
        }
        ```

    - **Error (HTTP 401):**

        ```json
        {
          "error": "Invalid PIN"
        }
        ```

### WebSocket Token

- **Endpoint:** `/ws-token`
- **Method:** `POST`
- **Response:**

    - **Success (HTTP 200):**

        ```json
        {
          "code": "200000", 
          "data": {
            "instanceServers": ["wss://ws-api-spot.kucoin.com/"], 
            "token": "2neAiuYvAU61ZDXANAGAsiL4-iAExhsBXZxftpOeh_55i3Ysy2q2LEsEWU64mdzUOPusi34M_wGoSf7iNyEWJzOtkiolx5YvQG_14cxWCE6XK_T3WUmt9diYB9J6i9GjsxUuhPw3Blq6rhZlGykT3Vp1phUafnulOOpts-MEmEGeUN1IjBJYAf16v0aNwcNWJBvJHl5Vs9Y=.u1VjAeipt_mH45epkmCl-g=="
          }
        }
        ```

    - **Error (HTTP 500):**

        ```json
        {
          "message": "Failed to fetch WebSocket token"
        }
        ```

## Notes

- The `VALID_PIN` is hardcoded as `'123'` for simplicity. In a production environment, you should use a more secure method for PIN management.
- The WebSocket token endpoint fetches data from the KuCoin API. Ensure you handle any rate limits or restrictions imposed by the API.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.
## Contact

For any questions or feedback, please contact [chandra.tatianto@gmail.com](mailto:chandra.tatianto@gmail.com).
