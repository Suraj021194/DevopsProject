const http = require("http");
http.createServer((req, res)=>{
    res.end("Hello, from Suraj App");
}).listen(3000);
// trigger CI
