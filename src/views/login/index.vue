<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <ValidationObserver>

<ValidationProvider name="手机号" rules="">
 <van-field clearable v-model="user.mobile" placeholder="请输入手机号">
        <i class="icon icon-shoujihao" slot="left-icon"></i>
      </van-field>
      <span></span>
</ValidationProvider>

<ValidationProvider>
      <van-field placeholder="请输入验证码" v-model="user.code">
        <i class="icon icon-yanzhengma" slot="left-icon"></i>
        <van-button
          slot="button"
          v-if="!isCountDownShow"
          size="small"
          round
          @click="onSendSmsCode"
          type="primary"
          >发送验证码
        </van-button>
        <van-count-down
          v-if="isCountDownShow"
          slot="button"
          @finish="isCountDownShow=false"
          format="ss s"
          :time="1000 * 60"
        />
      </van-field>
</ValidationProvider>

    </ValidationObserver>
    <div class="login-btn-wrap">
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      isCountDownShow: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    async onLogin () {
      // 1获取表单数据
      const user = this.user
      // 2.表单验证

      // 3.开启登录loading
      this.$toast.loading({
        duration: 0, // 0为持续展示toast
        message: '登录中',
        foebidClick: true // 是否禁止北京点击
      })
      // 4.请求登录
      //   5.0
      try {
        const result = await login(user)
        console.log(result)
        this.$toast.success('登录成功')
      } catch (error) {
        console.log(error)
        this.$toast.fail('登录失败')
      }
    },
    async onSendSmsCode () {
      try {
        // 1.验证手机号
      // 2.请求验证码
        let { mobile } = this.user
        const res = await getSmsCode(mobile)
        console.log(res)
        this.isCountDownShow = true
      // 3.显示倒计时
      } catch (error) {
        this.$toast('请勿频繁操作')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .login-btn-wrap {
    padding: 27px 16px;
    .van-button {
      width: 100%;
      background-color: #6db4fb;
    }
  }
  .van-cell {
    align-items: center;
  }
}
</style>
