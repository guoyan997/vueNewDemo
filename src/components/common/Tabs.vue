<template>
  <div class='tabs'>
    <div v-for="(item, index) in list"
         :class="['item', activeIndex === index ? 'item-active' : '']"
         :key="index"
         @click="selectedItem(index, item)">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      list: [{ name: '财务', value: '/' }, { name: '营销', value: '/market' }, { name: '人事', value: '/grid' }],
      activeIndex: 0
    }
  },
  computed: {},
  methods: {
    selectedItem (index, item) {
      this.activeIndex = index
      this.$router.push({
        path: item.value
      })
    }
  },
  created () { },
  components: {}
}
</script>
<style lang='scss' scoped>
.tabs {
  width: 100%;
  height: px2rem(120);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .item {
    width: 33%;
    line-height: px2rem(120);
    text-align: center;
    font-size: px2rem(18);
  }
  .item-active {
    border-bottom: px2rem(10) solid #fff;
  }
}
</style>
