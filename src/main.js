import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 element-ui
import ElementUI from "element-ui";

// 引入 element-ui 的样式
import "../node_modules/element-ui/lib/theme-chalk/index.css";

// 引入全局样式
import "./assets/css/index.css";

// 引入 axios
import myAxios from "./assets/js/myAxios.js";

// 引入 element-tree-grid
import TreeGrid from "element-tree-grid";

// 调用 use方法
Vue.use(ElementUI);
Vue.use(myAxios);
Vue.component(TreeGrid.name, TreeGrid); // 定义一个全局组件 tree-grid

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
});
