const http = require("node:http");
const { readFileSync } = require("node:fs");
const homePage = readFileSync("./navbar-app/index.html");
const homePageStyles = readFileSync("./navbar-app/styles.css");
const homePageImage = readFileSync("./navbar-app/logo.svg");
const homePageLogic = readFileSync("./navbar-app/browser-app.js");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(homePage);
    res.end();
    //css
  } else if (url === "/styles.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.write(homePageStyles);
    res.end();
    //logo
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-type": "image/svg+xml" });
    res.write(homePageImage);
    res.end();
    //logic
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-type": "text/javascript" });
    res.write(homePageLogic);
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.write("<h1>404</h1>");
    res.end();
  }
});
server.listen(3000, () => {
  console.log("listen");
});
