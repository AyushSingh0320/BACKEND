const http = require('http');
const fs = require('fs');   
const path = require('path');
console.log("Server is starting...");

const port = 3000 ;

const server = http.createServer()

server.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});