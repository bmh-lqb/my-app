// 自己封装的一个 axios 插件
// 导入 Vue
import Vue from "vue";

// 导入 axios
import axios from "axios";

// 创建插件对象
let myAxios = {};

// 添加 install 方法
myAxios.install = function() {
    // 统一设置请求的 API
    axios.defaults.baseURL = "http://localhost:8888/api/private/v1";

    // 给 Vue 示例对象添加方法
    Vue.prototype.$http = axios;
}

export default myAxios;