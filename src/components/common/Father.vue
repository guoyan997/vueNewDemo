<template>
  <div class='father'>
    <Son v-model="count"></Son>
    <span>父组件的count: {{count}}</span>
    <button @click="changeValue">从父组件改变count值</button>
  </div>

</template>

<script>
export default {
  name: 'father',
  data () {
    return {
      count: 0
    }
  },
  computed: {},
  methods: {
    changeValue () {
      this.count = this.count + 1
    }
  },
  created () { },
  components: {}
}
</script>
<style lang='scss' scoped>
.father {
  width: 100%;
  height: 300px;
  background-color: #fff000;
}
</style>
