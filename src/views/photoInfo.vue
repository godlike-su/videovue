<template>
    <div>

        <!-- <button @click="operaPhotoLeft()">向左</button> -->
        <!-- <button @click="operaPhotoRight()">向右</button> -->
        <el-button type="primary" round @click="operaPhotoLeft()">
            <i class="el-icon-back"></i>
        </el-button>
        <el-button type="primary" round @click="operaPhotoRight()">
            <i class="el-icon-right"></i>
        </el-button>
        <!-- <el-button type="primary" round @click="operaPhotoRight()">向右</el-button> -->
        <el-button type="primary" round @click="goVideoInfoRouter">返回</el-button>
        <!-- <div class="demo-image container">
            <div class="block box">

                <el-image style="width: 500px; height: 500px" :src="url1" fit="cover"></el-image>
            </div>
            <div class="block box">

                <el-image style="width: 500px; height: 500px" :src="url2" fit="cover"></el-image>
            </div>
        </div> -->
        <div class="demo-image container">
            <div :style="{ background: `url(${url1}) no-repeat` }" class="sss block box">


            </div>
            <div :style="{ background: `url(${url2}) no-repeat` }" class="sss block box">


            </div>
        </div>





    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url1: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            url2: '',
            photoInfo1: [],
            photoInfo2: [],
            index: 1,
            videoinfoid1: '',
            videoinfoid2: '',
            userinfoid: '',
            baseUrl: 'http://localhost:8081/video/document/downloadFileByImage?attachGroupId='
        }
    },
    methods: {
        preloadImage(src) {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(src);
                img.src = src;
            });
        },
        goVideoInfoRouter() {

            this.$router.push({ name: 'videoInfo', params: { userinfoid: this.userinfoid } });

        },
        // 操作显示到图片
        async operaPhotoLeft() {
            if (this.index <= 1) {
                console.log("最左边了，操作不了了")
                return
            }
            this.index = this.index - 1;
            var name = 'image-' + this.index + '.jpeg';
            var tmp1 = '';
            var tmp2 = '';
            for (var i = 0; i < this.photoInfo1.length; i++) {
                if (name === this.photoInfo1[i].name) {
                    await this.preloadImage(this.baseUrl + this.photoInfo1[i].attachGroupId);

                    tmp1 = this.baseUrl + this.photoInfo1[i].attachGroupId;
                    console.log(this.url1)
                    break
                }
            }
            for (var i = 0; i < this.photoInfo2.length; i++) {
                if (name === this.photoInfo2[i].name) {
                    await this.preloadImage(this.baseUrl + this.photoInfo2[i].attachGroupId);
                    tmp2 = this.baseUrl + this.photoInfo2[i].attachGroupId;
                    break
                }
            }
            this.url1 = tmp1;
            this.url2 = tmp2;
        },
        async operaPhotoRight() {
            if (this.index >= this.photoInfo1.length || this.index >= this.photoInfo2.length) {
                console.log("最右边了，操作不了了")
                return
            }

            this.index = this.index + 1;
            var name = 'image-' + this.index + '.jpeg';
            for (var i = 0; i < this.photoInfo2.length; i++) {
                if (name === this.photoInfo2[i].name) {
                    await this.preloadImage(this.baseUrl + this.photoInfo2[i].attachGroupId);
                    this.url2 = this.baseUrl + this.photoInfo2[i].attachGroupId;
                    break
                }
            }
            var tmp1 = '';
            var tmp2 = '';
            for (var i = 0; i < this.photoInfo1.length; i++) {
                if (name === this.photoInfo1[i].name) {
                    await this.preloadImage(this.baseUrl + this.photoInfo1[i].attachGroupId);

                    tmp1 = this.baseUrl + this.photoInfo1[i].attachGroupId;
                    console.log(this.url1)
                    break
                }
            }
            for (var i = 0; i < this.photoInfo2.length; i++) {
                if (name === this.photoInfo2[i].name) {
                    await this.preloadImage(this.baseUrl + this.photoInfo2[i].attachGroupId);
                    tmp2 = this.baseUrl + this.photoInfo2[i].attachGroupId;
                    break
                }
            }
            this.url1 = tmp1;
            this.url2 = tmp2;
        },
        photoInfo1Data(videoinfoid) {
            var data = {};
            data.videoinfoid = videoinfoid;
            var url = this.$store.state.userInfoUrl
            axios.post('/photoInfo/showPhotoInfoByVideoInfoId', data)
                .then(res => {
                    this.photoInfo1 = res.data.data
                    var name = 'image-' + this.index + '.jpeg';
                    for (var i = 0; i < this.photoInfo1.length; i++) {
                        if (name === this.photoInfo1[i].name) {
                            this.url1 = this.baseUrl + this.photoInfo1[i].attachGroupId;

                            break
                        }
                    }

                }).catch(e => {
                    // console.log(e)
                })
        },
        photoInfo2Data(videoinfoid) {
            var data = {};
            data.videoinfoid = videoinfoid;
            var url = this.$store.state.userInfoUrl
            axios.post('/photoInfo/showPhotoInfoByVideoInfoId', data)
                .then(res => {
                    this.photoInfo2 = res.data.data
                    var name = 'image-' + this.index + '.jpeg';
                    for (var i = 0; i < this.photoInfo2.length; i++) {
                        if (name === this.photoInfo2[i].name) {
                            this.url2 = this.baseUrl + this.photoInfo2[i].attachGroupId;

                            break
                        }
                    }

                }).catch(e => {
                    // console.log(e)
                })
        },
        loadPhoto(videoinfoid1, videoinfoid2) {
            var data = {};
            data.videoinfoid = videoinfoid1;
            axios.post('/photoInfo/showPhotoInfoByVideoInfoId', data)
                .then(res => {
                    this.photoInfo1 = res.data.data
                    var name = 'image-' + this.index + '.jpeg';
                    this.$nextTick(() => {
                        res.data.data.forEach((item) => {
                            new Image().src = this.baseUrl + item.attachGroupId;
                            // if (name === item.name) {
                            //     this.url1 = 'http://localhost:8081/video/document/downloadFileByImage?attachGroupId=' + item.attachGroupId;
                            // }
                        });
                    })

                }).catch(e => {
                    // console.log(e)
                })

            data.videoinfoid = videoinfoid2;
            axios.post('/photoInfo/showPhotoInfoByVideoInfoId', data)
                .then(res => {
                    this.photoInfo2 = res.data.data
                    var name = 'image-' + this.index + '.jpeg';
                    this.$nextTick(() => {
                        res.data.data.forEach((item) => {

                            new Image().src = this.baseUrl + item.attachGroupId;
                            // if (name === item.name) {
                            //     this.url2 = 'http://localhost:8081/video/document/downloadFileByImage?attachGroupId=' + item.attachGroupId;
                            // }
                        });
                    })

                }).catch(e => {
                    // console.log(e)
                })

        }
    },
    mounted() {
        // console.log(this.$route.params)
        this.userinfoid = this.$route.params.userinfoid;
        this.videoinfoid1 = this.$route.params.videoinfoid1;
        this.videoinfoid2 = this.$route.params.videoinfoid2;
        // this.loadPhoto(this.videoinfoid1, this.videoinfoid2);

        this.photoInfo1Data(this.videoinfoid1);
        this.photoInfo2Data(this.videoinfoid2);
    }
}
</script>

<style scoped>
.sss {
    width: 500px;
    height: 800px;
    /* width: 100%;
    height: 100%; */
    background-size: cover !important;
    /* transition: all 0.5s linear; */
}

.container {
    display: flex;
}

.box {
    flex: 1;
    /* height: 100px; */
    /* 设置高度或其他样式 */

    box-sizing: border-box;
    /* 防止边框引起的溢出 */
}
</style>