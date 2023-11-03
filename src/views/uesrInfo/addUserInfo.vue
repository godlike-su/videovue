<template>
    <div>
        <div>
            <el-form ref="form" :model="form" label-width="80px" :rules="rules"  class="demo-ruleForm">
                <el-form-item label="目录名称"  prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                    <el-button @click="goRouter('/userInfo')">取消</el-button>
                </el-form-item>
            </el-form>
        </div>



    </div>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                name: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入目录名称', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post(this.$store.state.addUserInfoUrl, this.form)
                        .then(res => {
                            this.$message({
                                message: '创建用户目录成功',
                                type: 'success'
                            });
                            this.goRouter('/userInfo');
                        }).catch(e => {
                            // console.log(e)
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

        },
        goRouter(data) {

            this.$router.push(data);
        },
    }
}
</script>