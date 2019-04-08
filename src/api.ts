import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function subscribeToKafkaTopic(cb: (err: null, message: any) => void) {
  socket.on('person', (message: any) => cb(null, message));
  socket.emit('subscribeToKafkaTopic', 'people');
}
export { subscribeToKafkaTopic };
