export default {
  //    mongodb 
  dbs: 'mongodb://127.0.0.1:27017/student',
  //    redis
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  //   邮箱服务
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return
    },
    get pass() {

    }
  },
  //    验证码
  get code() {
    return () => {
      return Math.random().toString(16).slice(2, 6).toUpperCase()
    }
  },
  //    过期时间
  get expire() {
    return () => {
      return new Date().getTime() + 60 * 1000 * 60
    }
  }
}
