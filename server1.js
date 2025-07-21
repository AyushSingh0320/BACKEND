const http = require('http');
const fs = require('fs');   
const path = require('path');


const port = 5000 ;
const ext = ".html";

const server = http.createServer((req , res) => {
    const filepath = path.join(__dirname, req.url === "/" ? "index.html" : req.url + ext);
    // const extname = String(path.extname(filepath)).toLowerCase();
    let contentType = "application/octet-stream";

    // Set content type based on file extension
    switch (ext) {
        case ".html":
            contentType = "text/html";
            break;
        case ".js":
            contentType = "application/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
        case ".jpeg":
            contentType = "image/jpeg";
            break;
        case ".gif":
            contentType = "image/gif";
            break;
        case ".svg":
            contentType = "image/svg+xml";
            break;
        case ".txt":
            contentType = "text/plain";
            break;
    }

    fs.readFile(filepath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Not Found Broooooooo</h1>");
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
            console.log(`Served: ${req.url}`);
        }
    });

})
server.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});