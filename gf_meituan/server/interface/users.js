/**
 * 用户操作接口
 */ 
const router = require('koa-router')
const Redis = require('koa-redis')
const nodeMailer = require('nodemailer')
const axios = require('axios')
const User = require('../dbs/models/users')
const Passport = require('./utils/passport')    //  验证
const Email = require('../dbs/models/config')


