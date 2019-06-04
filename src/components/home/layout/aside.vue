<template>
    <!-- 侧边栏 -->
    <el-menu :router="true" :unique-opened="true" default-active="2" class="my-menu el-menu-vertical-demo" background-color="#fff" text-color="#444">
        <!-- 子选项 -->
        <el-submenu index="1">
            <!-- 子选项的标题 -->
            <template slot="title">
                <i class="el-icon-watermelon"></i>
                <span>用户管理</span>
            </template>
            <!-- 子选项中的子选项：二级选项 -->
            <el-menu-item index="/users">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-apple"></i>
                <span>权限管理</span>
            </template>
            <el-menu-item index="/roles">
                <i class="el-icon-menu"></i>
                <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="/rights">
                <i class="el-icon-menu"></i>
                <span>权限列表</span>
            </el-menu-item>

        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-pear"></i>
                <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
                <i class="el-icon-menu"></i>
                <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="3-2">
                <i class="el-icon-menu"></i>
                <span>分类参数</span>
            </el-menu-item>
            <el-menu-item index="3-3">
                <i class="el-icon-menu"></i>
                <span>商品分类</span>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-orange"></i>
                <span>订单管事</span>
            </template>
            <el-menu-item index="4-1">
                <i class="el-icon-menu"></i>
                <span>订单列表</span>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">
                <i class="el-icon-grape"></i>
                <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">
                <i class="el-icon-menu"></i>
                <span>数据报表</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {

}

</script>

<style>
.my-menu {
    height: 100%;
}

.my-menu span {
    font-size: 20px;
}
</style>
