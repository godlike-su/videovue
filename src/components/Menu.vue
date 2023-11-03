<template>
  <div>



    <el-row class="tac">
      <el-col :span="30">
        <h5></h5>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <router-link to="/">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              首页
            </el-menu-item>
          </router-link>
          <router-link to="/userInfo">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              用户目录
            </el-menu-item>
          </router-link>

          <!-- <router-link to="/photoInfo">
            <el-menu-item index="3" >
              <i class="el-icon-menu"></i>
              照片比对
            </el-menu-item>
          </router-link> -->

         
        </el-menu>
      </el-col>


    </el-row>
  </div>
</template>
  
<script>
import router from '@/router';

export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: { router }
}
</script>