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
            this.$refs.ruleForm.validate(async valid => {
                // valid boole 值，如果通过返回 true， 否则返回 false
                if (valid) {
                    // 发送登录请求
                    let res = await this.$http.post('login', this.ruleForm);
                    let { data, meta } = res.data;

                    // 判断登录状态
                    if (meta.status === 200) {
                        // 提示登录成功
                        this.$message({
                            message: meta.msg,
                            type: 'success'
                        });

                        // 将 登录 中的 token 保存到浏览器中的 localstorage 中
                        localStorage.setItem('token', data.token);

                        // 路由的跳转，跳转到首页
                        this.$router.push('/home');
                    } else {
                        this.$message.error(meta.msg);
                    }
                } else {
                    this.$message.error('请输入正确的用户名和密码');
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
    transform: translate(-50%, -70%);
    background-color: #fff;
    padding: 20px 40px;
    border-radius: 10px;
}

.myBtn {
    width: 100%;
    margin-top: 20px;
}
</style>
