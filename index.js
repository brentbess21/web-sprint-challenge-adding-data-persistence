// start your server here
const server = require('./api/server');

const port = process.env.PRORT || 5000;

server.listen(port, ()=> {
    console.log(`*** Listening on localhost:${port} ***`);
});