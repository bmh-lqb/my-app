import Vue from 'vue';
import Router from 'vue-router';

// 引入 userElement 组件
import UserElement from "../components/userElement.vue";
import Login from "../components/login/login.vue";
import Home from "../components/home/home.vue";
import Users from "../components/home/users/users.vue";

Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        redirect: "/home"
    },  // 重定向
    {
        path: "/userElement",
        component: UserElement
    },  // 使用 element-ui 的路由
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
            }   // home 的子路由 users
        ]
    }]
});
