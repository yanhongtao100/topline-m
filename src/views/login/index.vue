<template>
  <div class="login-container">
    <van-nav-bar
      title="登录"
    />
    <van-cell-group>
  <van-field
    clearable
    placeholder="请输入手机号"
  >
  <i class="icon icon-shoujihao" slot="left-icon"></i>

  </van-field>
  <van-field
    placeholder="请输入验证码"
  >
  <i class="icon icon-yanzhengma"  slot="left-icon"></i>
      <van-button slot="button" size="small" round type="primary">发送验证码</van-button>
  </van-field>
</van-cell-group>
<div class="login-btn-wrap">
<van-button type="info">登录</van-button>
</div>
  </div>

</template>

<script>

export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.login-container{
    .login-btn-wrap{
        padding:27px 16px;
        .van-button {
            width: 100%;
            background-color: #6db4fb;
        }

}

}
</style>
