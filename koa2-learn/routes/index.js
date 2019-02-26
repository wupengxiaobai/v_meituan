const router = require('koa-router')()
const pv = require('../middleware/pv')
const m1 = require('../middleware/m1')
const m2 = require('../middleware/m2')
const m3 = require('../middleware/m3')

router.get('/', pv(), m1(), m2(), m3(), async (ctx, next) => {
  const res = await new Promise((resolve, reject) => {
    console.log('--------- console')
    setTimeout(() => {
      console.log('setTimeout 1000ms console')
      resolve('promise resolve ....')
    }, 1000)
  })
  const b = await 'b';
  const c = await Promise.resolve('c')
  ctx.body = {
    res,
    b,
    c
  }
})

router.get('/json',async(ctx,next)=>{
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/testAsync',async(ctx,next)=>{
  await ctx.render('index',{
    title: 'hello index.ejs'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router