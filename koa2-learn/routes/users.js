const router = require('koa-router')()
//  引入 Schema
const User = require('../models/dbs/users')
const Person = require('../models/dbs/person')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})


//  增添数据
router.get('/addUser', async (ctx, next) => {
  console.log(ctx.query)
  const user = new User({
    name: ctx.query.name,
    age: ctx.query.age,
    gender: ctx.query.gender
  })
  let code;
  try {
    await user.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})

router.get('/getUser', async (ctx) => {
  const res = await User.find({})
  ctx.body = res
})


router.get('/addPerson', async (ctx) => {
  /* Person.create({
    name: ctx.query.name
  }, (err, data) => {
    if (!err) {
      console.log(data)
    } else {
      console.log('插入失败')
    }
  }) */
  let code;
  const res = await new Person({
    name: ctx.query.name
  }).save()
  if (res) {
    code = 0
  } else {
    code = -1
  }
  ctx.body = {
    code,
    data: res
  }
})


router.get('/getPerson', async (ctx) => {
  let code
  const res = await Person.find({})
  if (res) {
    code = 0
  } else {
    code = -1
  }
  ctx.body = {
    code,
    data: res
  }
})


router.get('/updatePerson', async (ctx)=>{
    const res = await Person.where({
        name:'"小白"'
    }).update({
        name:'大白菜'
    })
    console.log(res)

    ctx.body = res?{code:0}:{code:1}
})

router.get('/removePerson',async (ctx)=>{
    const res = await Person.where({
        name: ctx.query.name
    }).remove()

    console.log(res)
    ctx.body = res?{code:0}:{code:1}
})

module.exports = router