import Vue from 'vue';
import Router from 'vue-router';

// 引入 userElement 组件
import Login from "../components/login/login.vue";
import Home from "../components/home/home.vue";
import Users from "../components/home/users/users.vue";
import Roles from "../components/home/permission/roles.vue";
import Rights from "../components/home/permission/rights.vue";

Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        redirect: "/home"
    },  // 重定向
    {
        path: "/login",
        name: "login",
        component: Login
    },  // 登录的路由
    {
        path: "/home",
        name: "home",
        component: Home,    // 首页的路由
        children: [
            {
                path: "/users",
                name: "users",
                component: Users
            },   // home 的子路由 users
            {
                path: "/roles",
                name: "roles",
                component: Roles
            },   // 添加一个 home 的子路由 roles
            {
                path: "/rights",
                name: "rights",
                component: Rights
            }   // 添加一个 home 的子路由 rights
        ]
    }]
});
