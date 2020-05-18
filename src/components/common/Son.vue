<template>
  <div class='son'>
    <span>子组件的count: {{count}}</span>
    <button @click="changeValue"
            class="son__btn">从子组件改变count值</button>
  </div>
</template>

<script>
export default {
  name: 'son',
  props: ['count'],
  model: {
    prop: 'count',
    event: 'changeCount'
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    changeValue () {
      this.$emit('changeCount', this.count + 1)
    }
  },
  created () { },
  components: {}
}
</script>
<style lang='scss' scoped>
.son {
  width: 50%;
  height: 200px;
  margin: 0 auto;
  background-color: aquamarine;
  &__btn {
    height: 60px;
  }
}
</style>
