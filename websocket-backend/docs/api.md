# WebSocket API Documentation

## Connecting to the Server

```javascript
const ws = new WebSocket('ws://localhost:8765');
ws.onmessage = (event) => {
  console.log(event.data);
};
