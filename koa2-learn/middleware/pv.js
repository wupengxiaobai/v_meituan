function pv() {
    console.log('一个 pv 函数中间件')
}

module.exports = function () {
    return async (ctx, next) => {
        ctx.session.count++
        pv(ctx)
        await next()
    }
}