const http = require('http');

const port = 3000 || process.env.PORT;  //PORT --> agr set nahi hua to 3000 pr listen krega

const server = http.createServer((req,res)=>{
   res.statusCode = 200;
   res.setHeader('Content-Type','text/html')
   res.end('<h1>This request has been served<h1><p>Hello Kushagra<p>')
})

server.listen(port,()=>{
    console.log(`The server is listening on ${port}`);
});