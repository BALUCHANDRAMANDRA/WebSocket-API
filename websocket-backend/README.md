# WebSocket Backend

This is a WebSocket backend server that performs the following actions:
1. Echo the received message in a streaming format with a 0.1 second delay.
2. Echo the received message in reverse in a streaming format with a 0.1 second delay.
3. Count the number of times the last character is repeated in the message (excluding the last character) and return this count.
4. Clear the received messages.

## Setup and Run Locally

### Prerequisites

- Node.js installed on your machine.
- npm (Node package manager) installed.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the required dependencies.
4. node src/server.js(if the server.js file in src folder.Otherwise you can run commend node server.js).
5. The server will be running on ws://localhost:8765.
6. Additionally, set up an index.html file for the web browser view of the website.


