<template>
  <div class="app-module">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #444;
  box-sizing: border-box;
}
.app-module {
  background: #f8f8f8;
  min-height: 100vh;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}
</style>

