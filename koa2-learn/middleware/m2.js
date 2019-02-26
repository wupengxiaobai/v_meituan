function pv() {
  console.log('m2------------')
}

module.exports = function () {
  return async (ctx, next) => {
    pv(ctx)
    await next()
  }
}
