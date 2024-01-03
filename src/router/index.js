import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from "@/views/LogInView"
import userProfileView from "@/views/UserProfileView";
import JoinView from "@/views/register/JoinView";
import TestView from "@/views/TestView";
import Test2View from "@/views/register/test2View";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
{
    path: '/test2',
    name: 'test2',
    component: Test2View
  },

  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/user-profile',
    name: 'userProfileRoute',
    component: userProfileView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/join',
    name: 'join',
    component: JoinView
  }
]

const router = new VueRouter({
  routes
})

export default router
