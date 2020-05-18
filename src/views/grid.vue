<template>
<div class="grid-page page">
  <div class="header"></div>
  <div class="left"></div>
  <div class="right"></div>
  <div class="bottom"></div>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .grid-page {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: px2rem(80) repeat(7, 1fr) px2rem(80);
    grid-gap: px2rem(6);
    padding: px2rem(0);
    background-color: orange;
    .header {
      grid-area: 1 / 1 / span 1 / span 9;
      background-color: #ccc;
    }
    .left {
      grid-area: 2 / 1 / span 7 / span 4;
      background-color: green;
    }
    .right {
      grid-area: 2 / 5 / span 7 / span 5;
      background-color: greenyellow;
    }
    .bottom {
      grid-area: 9 / 1 / span 1 / span 9;
      background-color: red;
    }
  }

</style>
