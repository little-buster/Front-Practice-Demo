// 使用nodeJS编写一个后端处理请求
const { log } = require('console');
const { Socket } = require('dgram');
const http = require('http');
const WebSocket = require('ws');

const server = http.createServer();
const wss = new WebSocket.Server({server});

wss.on('connection',(socket)=>{
    console.log('WebSocket连接已打开');

    socket.on('message',(message)=>{
        
        console.log('收到消息：'+message);
        socket.send('Hello 爱来自NodeJS');
    });

    socket.on('close',()=>{
        console.log('WebSocket连接已关闭');
    });
})

server.on('request',(req,res)=>{
    res.writeHead(200,{ 'Content-Type':'text/plain'});
    res.end('Hello WORLD!');
})

server.listen(8088,()=>{
    console.log('服务已启动，端口为8088');
})