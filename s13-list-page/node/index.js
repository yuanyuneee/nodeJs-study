const app = new (require('koa'));
const mount = require('koa-mount');
const serveStatic = require('koa-static');
const getData = require('./get-data')
const ReactDOMServer = require('react-dom/server');
const App = require('./app.jsx')
// 使用模板引擎，因为除了动态的列表之外，其他地方依然是静态的
const template = require('./template')(__dirname + '/index.htm')

app.use(mount('/static', serveStatic(__dirname + '/source')))

// 排序接口
app.use(mount('/data', async (ctx) => {
    ctx.body = await getData(+(ctx.query.sort || 0), +(ctx.query.filt || 0));
}));

app.use(async (ctx) => {
    ctx.status = 200;
    const filtType = +(ctx.query.filt || 0)
    const sortType = +(ctx.query.sort || 0);
    // 获取数据
    const reactData = await getData(sortType, filtType);
    // console.log(ReactDOMServer.renderToString(ReactRoot));
    // 使用renderToString获取渲染好的字符串
    ctx.body = template({
        reactString: ReactDOMServer.renderToString(
            App(reactData)
        ),
        // 存储在windows中，作为客户端模板渲染时的初始数据
        reactData,
        filtType,
        sortType
    })
})

app.listen(3000)
// module.exports = app;
