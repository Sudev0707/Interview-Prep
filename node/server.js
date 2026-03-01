

let http = require("http");

const hostName = "localhost";   
const port = 8080;

// crate a server object:
const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");  
  res.write("Hello World!");
  res.end();
}); // the server object listens on port 8080


server.listen(port, hostName, ()=>{
  console.log(`Server running at http://${hostName}:${port}/`);
})

module.exports = server;