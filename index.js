const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");
const router = require("./router");

const htmlContentType = {
    "Content-Type": "text/HTML",
};
router.get("/", (req,res) =>{
    console.log(req.method);
    console.log(req.url);
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});
router.get("/home.html", (req,res) =>{
    console.log(req.method);
    console.log(req.url);
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});
router.get("/books.html", (req,res) =>{
    console.log(req.method);
    console.log(req.url);
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/books.html", res);
});
router.get("/book1.html", (req,res) =>{
    console.log(req.method);
    console.log(req.url);
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/book1.html", res);
});
router.get("/images/book1.jpeg", (req,res) =>{
    console.log(req.method);
    console.log(req.url);
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("public/images/book1.jpeg", res);
});
router.get("/book2.html", (req,res) =>{
    console.log(req.method);
    console.log(req.url);
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/book2.html", res);
});
router.get("/images/book2.jpeg", (req,res) =>{
    console.log(req.method);
    console.log(req.url);
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("public/images/book2.jpeg", res);
});
router.get("/book3.html", (req,res) =>{
    console.log(req.method);
    console.log(req.url);
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("views/book3.html", res);
});
router.get("/images/book3.jpeg", (req,res) =>{
    console.log(req.method);
    console.log(req.url);
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("public/images/book3.jpeg", res);
});
const app = http.createServer(router.handle);
app.listen(port);
console.log(
    `server started on port: ${port}`
);
customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log("Error reading file");
        }
        res.end(data);
    });
};