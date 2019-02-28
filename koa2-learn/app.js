const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 连接数据库
const mongoose = require('mongoose')
const config = require('./models/config')
mongoose.connect(config.dbs, {
    useNewUrlParser: true
})
mongoose.connection.once('open', () => {
    console.log('数据库连接成功')
})


//  redis 配合 session使用
const session = require('koa-generic-session')
const Redis = require('koa-redis')


const index = require('./routes/index')
const users = require('./routes/users')

onerror(app)

//  session连接
app.keys = ['key', 'keyskeys']
app.use(session({
    key: 'mt',
    prefix: 'mtpr',
    store: new Redis()
}))

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app