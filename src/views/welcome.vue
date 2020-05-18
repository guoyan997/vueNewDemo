<template>
  <div class="page-welcome page"
       id="welcome">
    <div class="label"
         style="fontSize: 30px">测试</div>
    <div class="wapper"
         ref="wapper">
      <div>
        <div class="chart-main"
             id="main">
          <base-chart :chartData=dataList1
                      :option="chartOption(dataList1)"></base-chart>
        </div>
        <!-- <div class="chart-main">
          <base-chart :chartData=dataList2
                      :option="chartOption(dataList2)"></base-chart>
        </div>
        <div class="chart-main">
          <base-chart :chartData=dataList3
                      :option="chartOption(dataList3)"></base-chart>
        </div>
        <div class="chart-main">
          <base-chart :chartData=dataList4
                      :option="chartOption(dataList4)"></base-chart>
        </div>
        <div class="chart-main">
          <base-chart :chartData=dataList5
                      :option="chartOption(dataList5)"></base-chart>
        </div>
        <div class="chart-main">
          <base-chart :chartData=dataList6
                      :option="chartOption(dataList6)"></base-chart>
        </div>
        <div class="chart-main">
          <base-chart :chartData=dataList7
                      :option="chartOption(dataList7)"></base-chart>
        </div>
        <div class="chart-main">
          <base-chart :chartData=dataList8
                      :option="chartOption(dataList8)"></base-chart>
        </div> -->
        <div v-for="(item, index) in dataList"
             class="chart-main"
             :key=index>{{item}}</div>
      </div>
    </div>
    <!-- <block></block> -->
    <!-- <dv-loading>Loading...</dv-loading> -->
  </div>
</template>

<script>
/**
 * @description 欢迎页面
 */
import API from '../assets/js/api'
import BaseChart from '../components/charts/BaseChart'
import BScroll from 'better-scroll'
import { px2px } from 'assets/js/core/rem'
export default {
  name: 'Welcome',
  data () {
    return {
      userName: window.userCode,
      dataList1: [],
      dataList2: [],
      dataList3: [],
      dataList4: [],
      dataList5: [],
      dataList6: [],
      dataList7: [],
      dataList8: [],
      skr: null,
      bs: null,
      scrollOption: {
        // 这个要把页面固定的头部高度算进去
        pullDownRefresh: {
          threshold: 170, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 140 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        },
        pullUpLoad: {
          threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
        },
        scrollY: true,
        click: true,
        probeType: 2
      },
      dataList: [1, 2, 3, 4, 5]
    }
  },
  computed: {
  },
  methods: {
    /**
    *@description 标准的jsDoc注释配置样例
    *@param arr 要展示的数组数据
    *@returns echarts 图样式配置option
    */
    chartOption (arr) {
      const option = {
        xAxis: [{ data: [] }],
        series: [{
          data: [],
          type: 'line',
          lineStyle: {
            width: px2px(6)
          }
        }]
      }
      const labelList = []
      const dataList = []
      for (let item of arr) {
        labelList.push(item.name)
        dataList.push(item.value)
      }
      option.xAxis[0].data = labelList
      option.series[0].data = dataList
      return option
    },
    async getBarData (index) {
      const { __statusCode, data } = await API.getDataFromInterface(API.welcome.getBarData, { date: '123' })
      if (__statusCode === '1') {
        const list = JSON.parse(data).result
        const temp = []
        for (let item of list) {
          const obj = {}
          obj.name = item.name
          obj.value = item.value
          temp.push(obj)
        }
        const str = 'dataList' + index
        this[str] = temp.splice(0, 10)
      }
    },
    getAllData () {
      this.getBarData(1)
      this.getBarData(2)
      this.getBarData(3)
      this.getBarData(4)
      this.getBarData(5)
      this.getBarData(6)
      this.getBarData(7)
      this.getBarData(8)
    },
    firstlevel () {
      console.log(this.bs.y)
    },
    // 到达底部时，上拉事件
    pullingUpEvent () {
      console.log('到达底部，触发上拉事件')
      this.$nextTick(() => {
        this.dataList.push('111')
        this.dataList.push('222')
        this.dataList.push('333')
      })
      this.bs.finishPullDown()
      this.bs.finishPullUp()
      this.bs.refresh() // 重新计算元素高度
    },
    pullDownRefresh () {
      this.bs.finishPullDown()
      this.bs.finishPullUp()
      this.bs.refresh() // 重新计算元素高度
      console.log('顶部，触发下拉事件')
    }
  },
  components: {
    BaseChart
  },
  created () {
  },
  mounted () {
    this.getAllData()
    this.bs = new BScroll(this.$refs.wapper, this.scrollOption)
    this.bs.on('pullingUp', () => {
      // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
      this.pullingUpEvent()
    })
    this.bs.on('pullingDown', () => {
      // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
      this.pullingUpEvent()
    })
    // this.bs.on('scroll', this.firstlevel)
  },
  beforeDestroy () {
    // this.bs.off('scroll', this.firstlevel)
  }
}
</script>

<style lang="scss" scoped>
.page-welcome {
  text-align: center;
  font-size: px2rem(44);
  font-family: 'DS-DIGI';
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .label {
    font-size: 64px;
  }
  .wapper {
    overflow-y: auto;
    flex: 1;
    .chart-main {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
