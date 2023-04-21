const http = require('http');

const fs = require('fs');

const port = 3000 || process.env.PORT;  //PORT --> agr set nahi hua to 3000 pr listen krega

const server = http.createServer((req,res)=>{
   res.statusCode = 200;
   res.setHeader('Content-Type','text/html')

   if(req.url == '/')
   res.end('<h1>This request has been served for Home page<h1><p>Hello Kushagra<p>')
   else if(req.url == '/about'){
   res.end('<h1>This request has been served for about<h1><p>Hello Kushagra<p>')
   }
   else if(req.url == '/home'){
       const data = fs.readFileSync('index.html');
       res.end(data.toString());
   }
   else{
    res.statusCode =404;
    res.end('<h1>Page no found<h1><p>Server Error<p>')
   }
})

server.listen(port,()=>{
    console.log(`The server is listening on ${port}`);
});