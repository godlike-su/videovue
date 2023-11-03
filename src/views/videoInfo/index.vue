<template>
    <div>
        <div class="grid-container">
            <!-- <el-checkbox-group v-model="videoInfoId" :min="1" :max="2"> -->
            <div v-for="u in videoInfoList" :key="u.id">
                <div class=".grid-item">
                    <div>
                        <div>
                            <!-- <i class="el-icon-video-camera myicon"></i> -->
                            <img class="myicon" :src="baseURL + u.attgroupid1">
                        </div>
                        <div class="myfont">
                            {{ u.name }}
                        </div>
                        <div class="myfont" v-if="u.status == 0" style="color: red;">
                            视频解析中
                        </div>
                        <div class="myfont" v-if="u.status == 1">
                            <!-- <el-checkbox v-model="checked" @click="chenkbokclick(u.id)">11</el-checkbox> -->
                            <!-- <el-checkbox  :key="u.id">{{u.id}}</el-checkbox> -->
                            <!-- <input type="checkbox" v-model="selectedItems" :value="u.id" name="u.id" /> -->
                            视频编号：{{ u.id }}
                        </div>

                    </div>
                </div>
            </div>

            <!-- </el-checkbox-group> -->

            <div class=".grid-item" v-on:click="goRouter('addVideoInfo')">
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
        <div class="row" style="width: 1000px;">
            整容前比对视频选择:
            <el-radio-group v-model="videoinfoid1" v-for="u in videoInfoList" :key="u.id" v-if="u.status == 1"
                style="padding-right: 10px;">
                <el-radio :label="u.id">{{ u.id }}</el-radio>
            </el-radio-group>
        </div>
        <div class="row">
            整容后比对视频选择:

            <el-radio-group v-model="videoinfoid2" v-for="u in videoInfoList" :key="u.id" v-if="u.status == 1"
                style="padding-right: 10px;">
                <el-radio :label="u.id">{{ u.id }}</el-radio>
            </el-radio-group>

        </div>


        <div class="row">
            <el-button type="primary" @click="goPhotoInfo">进行比对</el-button>
            <el-button type="" @click="videoInfoSelect">刷新视频状态 </el-button>
        </div>

    </div>
</template>


<script>

import axios from 'axios';
export default {
    data() {
        return {
            videoInfoList: [],
            name: '',
            userinfoid: 0,
            checkedCities: [],
            videoInfoId: [],
            // cities: videoInfoId
            selectedItems: [],
            videoinfoid1: '',
            videoinfoid2: '',
            baseURL: 'http://localhost:8081/video/document/downloadFileByImage?attachGroupId=',


        }
    },
    methods: {
        //路由挑转
        goRouter(data) {
            console.log(this.userinfoid)
            this.$router.push({ name: data, params: { userinfoid: this.userinfoid } });

        },
        videoInfoSelect() {
            var data = {};
            data.name = this.name;
            data.userinfoid = this.userinfoid;
            var url = this.$store.state.videoInfoUrl
            axios.post(url, data)
                .then(res => {
                    this.videoInfoList = res.data.data
                    // console.log(this.userInfoList)

                }).catch(e => {
                    // console.log(e)
                })
        },
        chenkbokclick(id) {
            console.log('选择了id' + id)
        },
        goPhotoInfo() {
            console.log(this.videoinfoid1)
            console.log(this.videoinfoid2)
            if (this.videoInfoId1 === '' || this.videoinfoid2 === '') {
                this.$message.error('请选择比对视频')
                return;
            }
            if (this.videoinfoid1 === this.videoinfoid2) {
                this.$message.error('比对视频不能一样！')
                return
            }
            // 跳转比对视频页面
            this.$router.push({ name: 'photoInfo'
            , params: { videoinfoid1: this.videoinfoid1, videoinfoid2: this.videoinfoid2, userinfoid: this.userinfoid } });

        },
    },
    mounted() {

        this.userinfoid = this.$route.params.userinfoid;
        // console.log(this.userinfoid)
        this.videoInfoSelect();

    }
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
    width: 100px;
    height: 100px;
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
.row {
    padding: 10px;
}
</style>