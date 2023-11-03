<template>
  <div class="grid-container ">

    首页

  </div>
</template>

<script >
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 一行中有6列，每列平均分配剩余空间 */
  grid-gap: 10px; /* 列之间的间隔，可以根据需要调整 */
}

.grid-item {
  width: 100%; /* 每个格子的宽度占据一列的100% */
  background-color: #ccc; /* 格子的背景颜色 */
  padding: 10px; /* 可以根据需要调整内边距 */
}

/* 如果有更多的格子，继续添加 .grid-item 元素即可 */

</style>