<template>
  <div class='market page'>
    <!-- <dv-loading>Loading...</dv-loading>
    <dv-active-ring-chart :config="config"
                          style="width:300px;height:300px" />
    <dv-scroll-board :config="configTable"
                     style="width:500px;height:220px" /> -->
    <img :src="carImg" />
    <div class="cald">
      <van-calendar v-model="show" />
    </div>

    <el-date-picker v-model="value1"
                    type="date"
                    placeholder="选择日期">
    </el-date-picker>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7],
      config: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ],
        lineWidth: 10
      },
      configTable: {
        header: ['列1', '列2', '列3'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      },
      show: true,
      value1: '',
      carImg: './img/car.png'
    }
  },
  computed: {},
  methods: {},
  created () { },
  components: {}
}
</script>
<style lang='scss' scoped>
.market {
  overflow-y: auto;
  .item {
    width: px2rem(300);
    height: px2rem(300);
    background-color: aqua;
    margin-right: px2rem(20);
    margin-left: px2rem(20);
  }
  .cald {
    width: 100%;
    height: px2rem(500);
  }
}
</style>
