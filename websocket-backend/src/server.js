const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8765 });

server.on('connection', ws => {
  ws.on('message', message => {
    let data;
    try {
      data = JSON.parse(message);
    } catch (error) {
      ws.send('Invalid JSON');
      return;
    }

    const action = data.action;
    const msg = data.message;

    if (action === 'echo') {
      echoMessage(ws, msg);
    } else if (action === 'reverse') {
      reverseMessage(ws, msg);
    } else if (action === 'count') {
      countCharacter(ws, msg);
    } else {
      ws.send('Unknown action');
    }
  });
});

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const echoMessage = async (ws, message) => {
  for (const char of message) {
    ws.send(char);
    await delay(100);
  }
};

const reverseMessage = async (ws, message) => {
  for (const char of message.split('').reverse().join('')) {
    ws.send(char);
    await delay(100);
  }
};

const countCharacter = (ws, message) => {
  const lastChar = message[message.length - 1];
  const count = message.slice(0, -1).split(lastChar).length - 1;
  const response = JSON.stringify({
    last_character: lastChar,
    Occurrences: count
  });
  ws.send(response);
};

console.log('WebSocket server is running on ws://localhost:8765');
