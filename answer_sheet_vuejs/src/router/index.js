import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import DoExam from "@/views/DoExam";
import Score from "@/views/Score";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/do-exam',
    name: 'DoExam',
    component: DoExam
  },
  {
    path: '/score',
    name: 'Score',
    component: Score
  }
]

const router = new VueRouter({
  routes
})

export default router
