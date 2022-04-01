const mount = require('koa-mount');
const static = require('koa-static')
const app = new (require('koa'));
const rpcClient = require('./client');
// template是一个方法，传入templatePath可以读取文件模板并编译
const template = require('./template');

const detailTemplate = template(__dirname + '/template/index.html');

app.use(mount('/static', static(`${__dirname}/source/static/`)))

app.use(async (ctx) => {
    if (!ctx.query.columnid) {
        ctx.status = 400;
        ctx.body = 'invalid columnid';
        return
    }

    const result = await new Promise((resolve, reject) => {

        rpcClient.write({
            columnid: ctx.query.columnid
        }, function (err, data) {
            err ? reject(err) : resolve(data)
        })
    })

    ctx.status = 200;

    ctx.body = detailTemplate(result);
})

app.listen(3000)

// module.exports = app;
