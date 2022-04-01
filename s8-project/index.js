const koa = require('koa');
const fs = require('fs');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();

// 把静态文件输出出去(如果文件路径匹配了/source/ 就会把里面的文件返回出去，)否则指向localhost:4000的请求都统一返回了根路径的内容
app.use(
    static(__dirname + '/source/')
);

app.use(
    mount('/', async (ctx) => {
        ctx.body = fs.readFileSync(__dirname + '/source/index.htm', 'utf-8')
    })
);


app.listen(4000);
// module.exports = app;