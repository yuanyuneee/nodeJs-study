const net = require('net');

const server = net.createServer((socket)=> {
    // 读数据，监听data数据，回调参数是buffer实例
    socket.on('data', function(buffer) {
        console.log(buffer, buffer.toString())
    })
});

// 创建rcp服务器
server.listen(4000);
// 先运行server.js,再运行client.js