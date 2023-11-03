import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '../components/Menu.vue'
import UserInfo from '../views/uesrInfo/index.vue'
import AddUserInfo from '../views/uesrInfo/addUserInfo.vue'
import VideoInfo from '../views/videoInfo/index.vue'
import PhotoInfo from '../views/photoInfo.vue'
import AddVideoInfo from '../views/videoInfo/addVideoInfo.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/addVideoInfo',
    name: 'addVideoInfo',
    component: AddVideoInfo
  },
  {
    path: '/photoInfo',
    name: 'photoInfo',
    component: PhotoInfo
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },

  {
    path: '/userInfo',
    name: 'userInfo',
    component: UserInfo
  },
  {
    path: '/addUserInfo',
    name: 'addUserInfo',
    component: AddUserInfo
  },
  {
    path: '/videoInfo',
    name: 'videoInfo',
    component: VideoInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
