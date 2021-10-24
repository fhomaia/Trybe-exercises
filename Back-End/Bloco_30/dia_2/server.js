const net = require('net');

let sockets = [];
let id = 0;

const server = net.createServer((connection) => {
  id ++;
  connection.name = `Cliente ${id}`;
  sockets.push(connection);
  console.log(`${connection.name} conectado`);

  connection.on('end', () => {
    sockets = sockets.filter((socket) => connection.name !== socket.name);
    console.log('Cliente desconectado');
  });

  connection.write('Boas vindas ao chat!');

  server.getConnections((_err, count) => { console.log(count)})

  connection.on('data', (data) => {
    sockets.forEach((socket) => {
      if (socket.name !== connection.name) return socket.write(`${connection.name} disse: ${data}`);
      return;
    });
  });
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
