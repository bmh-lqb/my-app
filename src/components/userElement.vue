<template>
    <div>
        <h1>使用 element-ui</h1>
        <el-button type="primary" round>按钮</el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <h3>使用 element-ui 中的多选框</h3>
        <el-checkbox v-model="checked">多选框</el-checkbox><hr />

        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {}

</script>

<style>

</style>
