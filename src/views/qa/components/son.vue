<template>
  <div class="father">
      <div class="son">
          <img src="../../../assets/cat.jpeg" alt="">
          <div class="right">
              <h5>{{chuanzhi.title}}</h5>
              <span class="wenzi">123</span>
              <span class="wenzi">456</span>
                <div>789</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Son',
  components: {},
  props: {
    chuanzhi: {

    }
  },
  data () {
    return {

    }
  },
  created () {
    console.log(this.chuanzhi)
  },
  mounted () {},
  activited () {},
  update () {},
  beforeRouteUpdate () {},
  methods: {

  },
  filter: {},
  computed: {},
  watch: {}
}
</script>

<style lang="less" scoped>
.father{
         display: flex;
         width: 100%;
         background-color: #ccc;
    .son{
         display: flex;

        img{
            width: 100px;
            margin:30px 0 0 30px;
            height: 100px;
            flex: 1;
            align-content: center;
        }
        h5{
            margin:30px 0 0 30px;
            .wenzi{
               margin-left:30px;
            }
        }
    }
}
</style>
