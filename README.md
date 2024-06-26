# TS-Fastify-JWT

This project demonstrates how to implement JWT authentication using Fastify and TypeScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/luanmxz/TS-Fastify-JWT.git
    cd TS-Fastify-JWT
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. The server will start, and you can access it at `http://localhost:3000`.

## Project Structure

- **src/**: Contains the source code
  - **controllers/**: Controllers for handling requests
  - **routes/**: API routes
  - **services/**: Services for business logic
  - **utils/**: Utility functions

## Endpoints

- **POST /login**: Authenticate user and generate JWT.
- **GET /protected**: Access a protected route (requires JWT).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
