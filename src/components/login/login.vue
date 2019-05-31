<template>
    <div class="loginBox">
        <el-form label-position="top" :model="ruleForm" :rules="rules" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <h2>用户登录</h2>
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="myBtn" type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 用户对象
            ruleForm: {
                username: "",
                password: ""
            },
            // 验证规则
            rules: {
                username: [
                    // 这个属性是必须的，如果没有，则提示 message，失去焦点(blur)时触发
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    }
                ],
                password: [
                    // 这个属性是必须的，如果没有，则提示 message，失去焦点(blur)时触发
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    }
                ]
            }
        }
    },
    methods: {
        login() {
            // 判断 form 表单中的元素是否满足验证条件
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.$http.post("/login", this.ruleForm)
                        .then( res => {
                            // 解构参数
                            let { data, meta } = res.data;

                            // 判断登录状态
                            if (meta.status == 200) {
                                // 弹出登录成功提示框
                                this.$message({
                                    showClose: true,
                                    message: meta.msg,
                                    type: 'success'
                                });

                                // 跳转到首页
                                this.$router.push("/home");
                                console.log(data);
                            } else {
                                this.$message({
                                    showClose: true,
                                    message: '请输入正确的用户名和密码',
                                    type: 'error'
                                });
                                return false;
                            }
                        });
                } else {
                    this.$message({
                        showClose: true,
                        message: '请输入正确的用户名和密码',
                        type: 'error'
                    });
                    return false;
                }
            });
        }
    }
}

</script>

<style scoped>
.loginBox {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    background-color: #fff;
    padding: 20px 40px;
    border-radius: 10px;
}

.myBtn {
    width: 100%;
    margin-top: 20px;
}
</style>
