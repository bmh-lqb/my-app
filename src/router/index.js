import Vue from 'vue';
import Router from 'vue-router';

// 引入 userElement 组件
import Login from "../components/login/login.vue";
import Home from "../components/home/home.vue";
import Users from "../components/home/users/users.vue";
import Roles from "../components/home/permission/roles.vue";
import Rights from "../components/home/permission/rights.vue";
import Categories from '../components/home/categories/categories.vue';
import Goods from "../components/home/categories/goods/goods.vue";
import GoodsAdd from "../components/home/categories/goodsAdd.vue";
import Reports from "../components/home/reports/reports.vue";
import Orders from "../components/home/orders/orders.vue";

// 引入 message
import { Message } from 'element-ui';

Vue.use(Router);

let router = new Router({
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
            },   // 添加一个 home 的子路由 rights
            {
                path: "/categories",
                name: "categories",
                component: Categories
            },
            {
                path: "/goods",
                name: "goods",
                component: Goods
            },
            {
                path: "/goods/add",
                name: "goodsAdd",
                component: GoodsAdd
            },
            {
                path: "/reports",
                name: "reports",
                component: Reports
            },
            {
                path: "/orders",
                name: "orders",
                component: Orders
            }
        ]
    }]
});

// 添加一个路由守卫
router.beforeEach((to, from, next) => {
    // 完成登录逻辑
    // 只要请求的路由不是 login 就需要进行登录验证
    if (to.path != "/login") {
        // 判断是否存在 token
        if (!window.localStorage.getItem("token")) {
            Message({
                type: 'error',
                message: '您还没有登录'
            });

            router.push('/login');
            return;
        }
    }

    next();
});

export default router;