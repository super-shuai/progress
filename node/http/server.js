// node 提供了 http 模块可以快速的创建一个http服务

const http = require('http')

const server = http.createServer((req, res)=>{
    res.end('hello word')
})

server.listen('3000', () => {
    console.log('server start')
})
