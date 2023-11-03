<template>
    <div>
        <div>
            <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="demo-ruleForm">
                <el-form-item label="视频名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="form.descri"></el-input>
                </el-form-item>
                <el-form-item label="视频文件" prop="attachgroupid" >
                    <el-input v-model="form.attachgroupid" disabled></el-input>
                </el-form-item>

                <el-upload class="upload-demo" style="padding: 10px;"
                    action="http://localhost:8081/video/document/uploadVideoFile" :on-preview="handlePreview"
                    :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed"
                    :file-list="fileList" :on-success="handleSuccess" :on-error="handleError">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传mp4文件</div>
                </el-upload>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                    <el-button @click="goRouter('/videoInfo')">取消</el-button>
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
                "name": "",
                "descri": "",
                "attachgroupid": "",
                "userinfoid": 0,
            },
            userinfoid: 0,
            fileList: [],
            rules: {
                name: [
                    { required: true, message: '请输入视频名称', trigger: 'blur' },
                ],
                attachgroupid: [
                    { required: true, message: '请上传视频', trigger: 'blur' },
                ],
            }
        }
    },
    mounted() {
        this.userinfoid = this.$route.params.userinfoid;
        this.form.userinfoid = this.$route.params.userinfoid;
        // console.log(this.$route.params.userinfoid)
    },
    methods: {
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.post('/videoInfo/addVideoInfo', this.form)
                        .then(res => {
                            this.$message({
                                message: '创建用户视频成功',
                                type: 'success'
                            });
                            this.goRouter('')
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
            this.$router.push({ name: 'videoInfo', params: { userinfoid: this.userinfoid } });

        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
            this.form.attachgroupid = ''
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        handleSuccess(data) {
            this.form.attachgroupid = data.message
            this.$message('上传文件成功');
        },
        handleError(data) {
            this.form.attachgroupid = ''
            // console.log(data)
            this.$message.error(data);

        },

    }
}
</script>