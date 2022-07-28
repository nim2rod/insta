import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/insta.app.vue'
import UserPage from '../views/user.page.vue'
import Login from '../views/login.vue'
import Explore from '../views/explore.vue'
import DirectMassage from '../views/dm.vue'
import comment from '../components/comment.mode.cmp.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user/:userId',
      name: 'user-page',
      component: UserPage
    },
    {
      path: '/story/:storyId',
      name: 'post-details',
      component: comment
    },
    {
      path: '/explore/story/:storyId',
      name: 'explore-details',
      component: comment
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/dm',
      name: 'direct-massage',
      component: DirectMassage
    },
  ]
})

export default router
