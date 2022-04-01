const EasySock = require('easy_sock');

const protobuf = require('protocol-buffers')
const fs = require('fs');
const schemas = protobuf(fs.readFileSync(`${__dirname}/detail.proto`));

const easySock = new EasySock({
    ip: '127.0.0.1',
    port: 4000,
    timeout: 500,
    keepAlive: true
})

easySock.encode = function(data, seq) {
    // 按照协议对请求包进行编码
    const body = schemas.ColumnRequest.encode(data);

    const head = Buffer.alloc(8);
    head.writeInt32BE(seq); // 序号
    head.writeInt32BE(body.length, 4); // 包长度

    return Buffer.concat([head, body])
}
easySock.decode = function(buffer) {
    const seq = buffer.readInt32BE();
    const body = schemas.ColumnResponse.decode(buffer.slice(8));

    return {
        result: body,
        seq
    }
}
easySock.isReceiveComplete = function(buffer) {
    // 如果小于头的长度表示不完整
    if (buffer.length < 8) {
        return 0
    }
    const bodyLength = buffer.readInt32BE(4);

    // 包的长度是正确的,则返回包长度
    if (buffer.length >= bodyLength + 8) {
        return bodyLength + 8

    } else {
        return 0
    }
}

module.exports = easySock;
