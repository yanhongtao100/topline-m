<template>
<div class="home-container">
  <van-nav-bar title="主页" />
  <van-tabs v-model="active">
  <van-tab :title="channel.name"
   v-for="channel in userChannels"
   :key="channel.id">
<article-list :channel="channel" />
    </van-tab>
</van-tabs>

</div>
</template>

<script>
import { getUserChannels } from '@/api/channel'
import ArticleList from './components/article-list'
export default {
  name: 'Home',
  data () {
    return {
      active: 3,
      userChannels: []
    }
  },
  components: {
    ArticleList
  },
  methods: {
    async loadUserChannels () {
      try {
        const { data } = await getUserChannels()
        this.userChannels = data.data.channels
      } catch (error) {
        this.$toast('获取频道列表失败')
      }
    }
  },
  created () {
    this.loadUserChannels()
  }
}
</script>

<style>

</style>
