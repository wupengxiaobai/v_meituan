function pv() {
  console.log('m1 ----')
}

module.exports = function () {
  return async (ctx, next) => {
    pv(ctx)
    await next()
  }
}
