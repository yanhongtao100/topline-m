<template>
  <!-- 搜索栏 star-->
  <div class="search-container">
    <form action="/">
      <van-search
        v-model="searchContent"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 搜索栏 end-->

    <!--联想建议  star-->
    <van-cell-group>
      <van-cell icon="search" title="单元格" />
    </van-cell-group>

    <!-- 联想建议 end-->
    <!--历史记录 star -->
    <van-cell title="历史记录">
      <van-icon name="delete"></van-icon>
      <span>全部删除</span>
      &nbsp;&nbsp;
      <span>完成</span>
    </van-cell>
    <van-cell-group>
      <van-cell title="单元格">
        <van-icon name="close"></van-icon>
      </van-cell>
    </van-cell-group>
    <!--历史记录 end-->

    <!-- 搜索列表 star -->

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
    <!-- 搜索列表 end-->
  </div>
</template>
<script>
export default {
  name: 'SearchPage',
  components: {},
  props: {},
  data () {
    return {
      searchContent: '',
      list: [],
      loading: false,
      finished: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onSearch () {},
    onCancel () {},
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>
<style scoped></style>
