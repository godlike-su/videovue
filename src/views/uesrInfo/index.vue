<template>
    <div>
        <div class="grid-container">

            <div v-for="u in userInfoList" :key="u.id">
                <div class=".grid-item" @click="goVideoInfoRouter(u.id)">
                    <div>
                        <div>
                            <i class="el-icon-folder-opened myicon"></i>
                        </div>
                        <div class="myfont">
                            {{ u.name }}
                        </div>
                    </div>
                </div>
            </div>



            <div class=".grid-item" v-on:click="goRouter('/addUserInfo')">
                <div>
                    <div>
                        <i class="el-icon-circle-plus-outline myicon" style="color: green;"></i>
                    </div>
                    <div class="myfont">
                        添加
                    </div>
                </div>
            </div>

        </div>



    </div>
</template>
  
<script lang="ts">
// @ is an alias to /src
import axios from 'axios';


export default {
    data() {
        return {
            userInfoList: [

            ],

            name: '',

        }
    },
    methods: {
        // 读取用户信息数据
        userInfoSelect() {
            var data = {};
            data.name = this.name;
            var url = this.$store.state.userInfoUrl
            axios.post(url, data)
                .then(res => {
                    this.userInfoList = res.data.data
                    // console.log(this.userInfoList)

                }).catch(e => {
                    // console.log(e)
                })
        },
        //路由挑转
        goRouter(data) {

            this.$router.push(data);
        },
        goVideoInfoRouter(data) {
        
            this.$router.push({ name: 'videoInfo', params: { userinfoid: data } });

        },


    },
    mounted() {

        this.userInfoSelect();
    },

}
</script>
  
<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 一行中有6列，每列平均分配剩余空间 */
    grid-gap: 10px;
    /* 列之间的间隔，可以根据需要调整 */
}

.grid-item {
    width: 100%;
    /* 每个格子的宽度占据一列的100% */
    background-color: #ccc;
    /* 格子的背景颜色 */
    padding: 10px;
    /* 可以根据需要调整内边距 */


}

.myicon {
    font-size: 100px;
    text-align: center;
    /* 水平居中 */
    line-height: 1;
    /* 垂直居中，可以根据需要调整 */
    color: rgba(53, 212, 53, 0.535);
}

.myfont {
    font-size: 15px;
    /* text-align: center;  */
    line-height: 1;
    /* 垂直居中，可以根据需要调整 */
}

/* 如果有更多的格子，继续添加 .grid-item 元素即可 */
</style>