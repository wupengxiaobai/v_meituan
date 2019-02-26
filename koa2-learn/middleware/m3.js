function pv() {
  console.log('----------m3')
}

module.exports = function () {
  return async (ctx, next) => {
    pv(ctx)
    await next()
  }
}
