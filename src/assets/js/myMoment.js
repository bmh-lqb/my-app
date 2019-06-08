// 引入 moment
import moment from "moment";

// 创建一个对象
let myMoment = {};

myMoment.install = function(Vue) {
    // 定义一个全局的过滤器
    Vue.filter("myFilter", function(value, format) {
        // 使用过滤器的数据
        return moment(value).format(format);
    });
}

// 暴露接口
export default myMoment;