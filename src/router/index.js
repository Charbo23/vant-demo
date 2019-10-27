import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const About = () => import('@/views/About.vue');
const Test = () => import('@/views/Test.vue');
const Axios = () => import('@/views/Axios.vue');

const routes = [
  {
    path: "/",
    name: "index",
    redirect:'/home'
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: "/axios",
    name: "axios",
    component: Axios,
    meta:{
      title:'Axios测试'
    }
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path: "/test",
    name: "test",
    component: Test,
    meta:{
      title:'测试'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
