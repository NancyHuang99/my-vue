<template>
    <Center>
        <form class="form-container" @submit.prevent="handleSubmit" >
           
                <div class="form-item">
                    <div class="input">
                        <label>账号：</label>
                        <input 
                        v-model="userInfo.loginId"
                        type="text"
                        @input="validateEmpty('loginId','账号不能为空')"
                        />
                    </div>
                    <FormError :msg="error.loginId"/>
                </div>
                <div class="form-item">
                    <div class="input">
                        <label>密码：</label>
                        <input 
                        v-model="userInfo.loginPwd"
                        type="password" 
                         @input="validateEmpty('loginPwd','密码不能为空')"
                        autocomplete="new-password"
                        />
                    </div>
                     <FormError :msg="error.loginPwd"/>
                    
                </div>
                <div class="form-item">
                    <div class="input">
                        <label>重复密码：</label>
                        <input 
                        v-model="userInfo.pwdAgain"
                        type="password" 
                        @input="validatePwdAgain"
                        autocomplete="new-password"
                        />
                        </div>
                    <FormError :msg="error.pwdAgain"/>
                    
                </div>
                <div class="form-item">
                    <div class="input">
                        <label>昵称</label>
                        <input 
                        type="text" 
                         @input="validateEmpty('nickname','昵称不能为空')"
                        v-model="userInfo.nickname"
                        autocomplete="new-password"
                        />
                    </div>
                     <FormError :msg="error.nickname"/>
                    
                </div>
                <div class="form-item">
                    <div class="input"><label></label><button>注册</button></div>
                    <FormError :isCenter="true" :msg="error.server"/>
                </div>

            
        </form>
    </Center>
</template>


<script>
import Center from "../components/Center";
import FormError from "../components/FormError";
import { reg } from "../services/userService"
export default {
    components:{
        Center,
        FormError,
    },
    data(){
        return{
            userInfo:{
                loginId:"",
                loginPwd:"",
                pwdAgain:"",
                nickname:"",
            },
            error:{
                loginId:"",
                loginPwd:"",
                pwdAgain:"",
                nickname:"",
                server:"",
            },

        };
    },
    methods:{
        //非空验证
        validateEmpty(field,msg){
            if(this.userInfo[field]){
                this.error[field]="";
                return  true;
            }else{
                this.error[field]=msg;
                return false;
            }

        },
        async handleSubmit(){
            var validatad1 = this.validateEmpty("loginId","账号不能为空");
            var validatad2 = this.validateEmpty("loginPwd","密码不能为空");
            var validatad3 = this.validatePwdAgain;
            var validatad4 = this.validateEmpty("nickname","昵称不能为空");
            if(validatad1&&validatad2&&validatad3&&validatad4){
                //提交数据
                var resp = await reg(this.userInfo);
                console.log(resp)
                if(resp.data){
                    //注册成功
                    alert("注册成功");
                    this.$router.push({
                        name:"Login",
                    })

                }else{
                    this.error.server = resp.msg;
                }

            }
            


        },
        validatePwdAgain(){
            var result = this.validateEmpty("pwdAgain","重复密码不能为空");
           
            if(result){
                if(this.userInfo.loginPwd !== this.userInfo.pwdAgain){
                        this.error.pwdAgain="两次密码不一致";                  
                    
                }
            }
        },

    }

}
</script>


<style scoped>
.login-container{
    width: 400px;

}

.form-item .input{
    display: flex;
}
.form-item label{
    width: 100px;
    display: inline-block;
    text-align: right;
    height: 40px;
    line-height: 41px;
    margin-right: 20px;
}

.form-item input,
.form-item button{
    flex-grow: 1;

}
</style>