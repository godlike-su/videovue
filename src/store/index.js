import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 获取用户信息接口
    userInfoUrl: '/userInfo/findUserInfo',
    // 新增用户信息接口
    addUserInfoUrl: '/userInfo/addUserInfo',
    videoInfoUrl: '/videoInfo/showVideoInfoList',
    // 视频文件上传
    uploadVideoFile: '/document/uploadVideoFile',
    addVideoInfoUrl: '/videoInfo/addVideoInfo'
  },
  getters: {
    setUserInfoUrl(state, data) {
      this.state.userInfoUrl = data
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
