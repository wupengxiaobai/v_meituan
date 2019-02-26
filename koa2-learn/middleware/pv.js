function pv() {
  console.log('一个 pv 函数中间件')
}

module.exports = function () {
  return async (ctx, next) => {
    pv(ctx)
    await next()
  }
}
