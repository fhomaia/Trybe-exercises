const net = require('net');
const stdin = process.openStdin();

const client = new net.Socket();

client.connect(8080,'localhost', () => {
  console.log('Cliente conectado ao servidor!');
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();
    client.write(message);
  })
});

client.write('Cheguei');

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('Desconectado do servidor');
});