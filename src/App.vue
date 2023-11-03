<template>
  <div id="app">
    <nav class="left">
      <Menu></Menu> 
     
      <!-- <router-link to="/"></router-link> -->
      <!-- <Menu msg="Welcome to Your Vue.js App"/>  -->
    </nav>
    <div class="right">
      <router-view/>

    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

// import Menu from '@/components/Menu.vue'
export default {
    components: { Menu }
}

</script>

<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
#app {
      display: flex;
      height: 100vh;
  }

  .left {
    width: 13.4%;
    // background-color: #ccc; /* 左侧控件的背景颜色 */
    height: 100%; 
  }

  .right {
    flex: 1;
    background-color: #eee; /* 右侧控件的背景颜色 */
    height: 100%; 
  }

  
</style>
