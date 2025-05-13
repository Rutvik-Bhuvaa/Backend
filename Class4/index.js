const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello coder army");
  } else if (req.url === "/contact") {
    res.end("This is our contact page");
  } else if (req.url === "/about") {
    res.end("This is our about page");
  } else {
    res.end("Page is not found");
  }
});

server.listen(4000, () => {
  console.log("I am listening at port number 4000");
});
