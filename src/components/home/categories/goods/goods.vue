<template>
    <el-card>
        <!-- 面包屑导航 -->
        <BreadNav :navone="'商品管理'" :navtwo="'商品列表'" />
        <!-- 搜索区域 -->
        <el-row class="my-row">
            <el-col :span="8">
                <el-input v-model="search" placeholder="请输入内容" class="input-with-select">
                    <el-button slot="append" @click="mySearch" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="16">
                <el-button class="my-btn" type="success" @click="toAdd" plain>添加用户</el-button>
            </el-col>
        </el-row>
        <!-- 表格区域 -->
        <el-table :data="tableData" style="width: 100%" height="400">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="goods_name" label="商品名称" width="400">
            </el-table-column>
            <el-table-column prop="goods_price" label="商品价格（元）">
            </el-table-column>
            <el-table-column prop="goods_weight" label="商品重量">
            </el-table-column>
            <el-table-column label="创建时间" width="200">
                <template slot-scope="scope">
                    {{ scope.row.add_time | myFilter('YYYY-MM-DD hh:mm:ss') }}
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template>
                    <!-- slot-scope: 可以用来获取当前行的数据 -->
                    <!-- 两个按钮 -->
                    <el-button type="primary" icon="el-icon-edit" plain size="mini"></el-button>
                    <el-button type="danger" icon="el-icon-delete" plain size="mini"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页组件
    -->
        <el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page="currentPage"
            :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </el-card>
</template>

<script>
// 导入面包屑导航组件
import BreadNav from "../../layout/breadnav.vue";

export default {
    data() {
        return {
            tableData: [], // 当前页
            currentPage: 1, // 页容量
            pageSize: 10, // 页容量选项
            pageSizes: [10, 20, 30], // 数据总条数
            total: 0, // 搜索数据
            search: ''
        }
    },

    methods: {
        // 得到所有的商品列表数据
        async getPageGoods() {
            let res = await this.$http.get(
                `/goods?pagenum=${this.currentPage}&pagesize=${this.pageSize}&query=${this.search}`);

            // 解构
            let {
                meta,
                data
            } = res.data;

            // 判断
            if (meta.status == 200) {
                // 获取数据的总条数
                this.total = data.total;

                // 获取数据源
                this.tableData = data.goods;
            } else {
                this.$message.error(meta.msg);
            }
        },

        // 点击当前页需要重新请求数据
        handleCurrentChange(val) {
            // 更新当前页
            this.currentPage = val;

            // 重新获取数据
            this.getPageGoods();
        },

        // 页容量改变时，重新请求数据
        handleSizeChange(val) {
            this.pageSize = val;

            // 重新获取数据
            this.getPageGoods();
        },

        // 搜索数据
        mySearch() {
            this.getPageGoods();
        },

        // 跳转到添加商品的路由中
        toAdd() {
            this.$router.push("/goods/add");
        }
    },

    mounted() {
        this.getPageGoods();
    },

    components: {
        BreadNav
    }
}

</script>

<style>
.my-row {
    margin-top: 20px;
}

.my-row .my-btn {
    margin-left: 20px;
}

</style>
