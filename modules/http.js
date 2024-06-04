const http = require('http');
const port=8080;

const Server= http.createServer((req, res)=>{
    if(req.url ==='/home'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>Hello Word!</h1>')
    }

    if (req.url ==='/user'){
        const user =[
            {
                id:1234,
                name:'Mario Paulo'
            },
            {
                id:1235,
                name:'Bunga Salvador'
            }
        ];

        res.writeHead(200,{'Content-Type':'text/json'})
        res.end(JSON.stringify(user));
    }
})

Server.listen(port,()=>console.log(`Listening Server on port: ${port}`))