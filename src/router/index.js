import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const About = () => import('@/views/About.vue');

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
      title:'Home'
    }
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta:{
      title:'About'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
