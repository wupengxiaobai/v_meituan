<template>
  <div class="register">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="昵称" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" placeholder="填写邮箱"></el-input>
      </el-form-item>
      <el-form-item label="邮箱验证">
        <el-button @click="sendVerifyCode" type="default" size="small">发送验证</el-button>
      </el-form-item>
      <el-form-item label="短信验证码" prop="verify">
        <el-input v-model="ruleForm.verify" placeholder="填写验证码"></el-input>
      </el-form-item>
      <el-form-item label="输入密码" prop="password">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input v-model="ruleForm.password2" type="password"></el-input>
      </el-form-item>
      <el-form-item label="同意协议" prop="delivery">
        <el-switch v-model="ruleForm.agreement"></el-switch>[xxx协议]
      </el-form-item>

      <el-form-item>
        <el-button
          :disabled="!ruleForm.agreement"
          asud
          type="primary"
          @click="submitForm('ruleForm')"
        >立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data() {
    //   邮箱验证
    var emailVerify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
      ) {
        callback(new Error("邮箱格式不正确"));
      } else {
        callback();
      }
    };
    //  二次密吗
    var pwsVerify = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //  协议统同意与否
    var agreementVerify = (rule, value, callback) => {
      if (this.ruleForm.agreement != true) {
        callback(new Error("必须同意协议才可以哦"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        email: "",
        agreement: false,
        verify: "",
        password: "",
        password2: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请填写邮箱", trigger: "blur" },
          {
            validator: emailVerify,
            trigger: "blur"
          }
        ],
        verify: [
          {
            required: true,
            message: "请输入发送到邮箱的验证码",
            trigger: "blur"
          },
          { length: 4, message: "验证码长度是4位" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "长度 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        password2: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: pwsVerify, trigger: "blur" }
        ],
        delivery: [{ validator: agreementVerify, trigger: "blur" }]
      },
      disable: true,
      statusMsg: "",
      timerid: null
    };
  },
  methods: {
    //   提交
    sendVerifyCode() {
      const self = this;
      let namePass;
      let emailPass;
      if (self.timerid) {
        return false;
      }
      this.$refs["roleForm"].validateField("name", valid => {
        namePass = valid;
      });
      self.statusMsg = "";
      if (namePass) {
        return false;
      }
      this.$$refs["roleForm"].validateField("email", valid => {
        emailPass = valid;
      });
      if (!namePass && !emailPass) {
        self.$axios
          .post("/users/verify", {
            username: encodeURIComponent(self.ruleForm.name),
            email: self.ruleForm.email
          })
          .then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60;
              self.statusMsg = `验证码已发送, 剩余 ${count--}秒`;
              self.timerid = setInterval(function() {
                self.statusMsg = `验证码已发送, 剩余 ${count--}秒`;
                if (count === 0) {
                  clearInterval(self.timerid);
                }
              }, 1000);
            } else {
              self.statusMsg = data.msg;
            }
          });
      }
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.register {
  width: 1000px;
  margin: 0 auto;
  .demo-ruleForm {
    padding: 20px 0;
  }
}
</style>
