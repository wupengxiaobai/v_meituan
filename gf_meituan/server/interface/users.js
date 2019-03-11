/**
 * 用户操作接口
 */
const Router = require('koa-router')
const Redis = require('koa-redis')
const nodeMailer = require('nodemailer')
const axios = require('axios')
const User = require('../dbs/models/users')
const Passport = require('./utils/passport')
const Email = require('../dbs/config')

let router = new Router({
  prefix: '/users'
})

let Store = new Redis().client //  操作redis库的实例

//  注册 
router.post('/signup', async (ctx) => {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body

  //    验证验证码
  if (code) {
    //  code 存在, 从 redis 库中拿取数据, 判断验证码有效性
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期, 请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }

  //  验证该用户名是否存在
  let user = await User.find({
    username
  })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '用户已被注册'
    }
    return
  }

  //  用户没有被注册, 进行保存用户入库操作
  let nuser = await User.create({
    username,
    password,
    email
  })

  //  写入数据库成功
  if (nuser) {
    //  我们直接进行登录请求  
    let res = await axios.post('/users/signin', {
      username,
      password
    })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功, 即将为您登录',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '登录失败, 请手动登录'
      }
    }

  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

//  登录
router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', (err, user, info, status) => {
    if (err) {
      ctx.body = {
        err: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

//  验证码验证
router.post('/verify', async (ctx) => {
  let username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证码请求过于频繁, 1分钟1次'
    }
    return false
  }


  //    邮件验证块
  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    port: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })

  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }

  let mailOptions = {
    from: `"认证邮件" <${Email.smtp.user}`,
    to: ko.user,
    subject: '<<高仿美团全栈实战>> 注册码',
    html: `您在 <<高仿美团全栈实战>> 课程中注册, 您的邀请码实 ${ko.code}`
  }

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('error' + error)
    } else {
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送,可能会有延时,有效期一分钟.'
  }
})

//  退出
router.get('/exit', async (ctx) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

//  获取用户信息
router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const {
      username,
      email
    } = ctx.session.Passport.user

    ctx.body = {
      user: username,
      email
    }
  } else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})

module.exports =  router
