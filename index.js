const http = require("http");

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Agent is running 🚀");
}).listen(port, () => {
  console.log(`Agent listening on port ${port}`);
});