<template>
  <div id="app">
    <div class="header">
      <tabs></tabs>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Tabs from './components/common/Tabs'
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  .header {
    width: 100%;
    height: px2rem(120);
  }
  .content {
    position: relative;
    width: 100%;
    flex: 1;
    overflow: hidden;
  }
}
</style>
