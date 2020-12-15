<template>
    <div class="register">
      <div class="contents">
        <img src="" alt="">
        <div>
          <input type="text" placeholder="账号名"  :disabled="IsAgree===false" v-model="username" @blur='usernameChecked'>
        </div>
        <div class="password">
          <input type="password" placeholder="设置密码"  :disabled="IsAgree===false" v-model="password"  @blur='passwordChecked'>
        </div>
        <div class="password">
          <input type="password" placeholder="确认密码"  :disabled="IsAgree===false" v-model="conpassword"  @blur='conpasswordChecked'>
        </div>
        <div class="agree">
          <input type="checkbox" class='agreecheck' v-model="IsAgree" >
          注册即同意
          <a href="" class="agreecolor">《西安旅游使用协议》</a>
          <a href="" class="agreecolor">《隐私政策》</a>
        </div>
        <div class="btn">
          <button class="agreebtn" :style="Astyle"  @click="handle" :disabled="IsAgree===false">同意</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data(){
    return{
        IsAgree: false,
        username:"",
        password:"",
        conpassword:"",
      }
    },
   methods:{
       argeeRe(){
         
       },
       usernameChecked(){
            let usernameRegExp=/^[0-9A-Za-z]{6,10}$/;
            if(usernameRegExp.test(this.username)){             
                this.$toast({
                message:'用户名格式正确',
                duration:2000
                })
             return true
            }else{
              alert("1")
                this.$toast({
                message:'用户名格式错误',
                duration:2000
                })
                this.usernameState="warning"
            return false  
            }
        },
        passwordChecked(){
        let passwordRegExp=/^[0-9A-Za-z]{8,16}$/;
            if(passwordRegExp.test(this.password)){
                this.$toast({
                message:'密码格式正确',
                duration:2000
                })
            this.passwordState="success"
            return true
            }else{  
                alert("2")
                this.$toast({
                message:'密码格式错误',
                duration:2000
                }) 
            this.passwordState="warning"
            return false 
            }
        },
        conpasswordChecked(){
            if(this.password==this.conpassword){
              this.$toast({
              message:"两次密码一致,验证通过",
              duration:2000
                })
            this.conpasswordState="success"
            return true
            }else{
                alert("3")
                this.$toast({
                message:"两次密码不一致",
                duration:2000
                })
            this.conpasswordState="error"
            return false
            } 
        },     
       handle(){
           if(this.usernameChecked() && this.passwordChecked()&&this. conpasswordChecked()){
               alert("4")
            this.axios.post('/register', `username=${this.username}&password=${this.password}`).then(res=>{
                if(res.data.code == 201){
                   this.$messagebox('提示信息','用户已经存在')
                }
                else if(res.data.code == 200){
                    this.$router.push("/")
                }
            })

       }
    } ,
   }
}
</script>



<style>
.password{
  position: relative;
}
.register{
  height: 100%;
  width: 100%;
  background-size:100% 100% ;
  position: fixed;
}
.register .contents{
 position: absolute;
    top: 40px;
    background-color: #fff;
    margin-left: 50%;
    left: -238px;
    width: 476px;
    padding-top: 62px;
    box-shadow: 0 2px 6px 2px rgba(0,0,0,0.24);
    border-radius: 2px;
}

.register a{
  color: #fff;
  text-decoration: none;
}

.register input{
  padding: 1px 2px;
  width: 331px;
  padding-left: 15px;
  border: 2px solid #EBEBEB;
  height: 36px;
  line-height: unset;
  line-height: 36px\9;
  color: #000;
  outline: none;
  font-size: 14px;
  margin-top:20px ;
}
.register .agreecolor{
  color:#ff552e; 
}
.register .agree{
  font-size: 14px;
    text-align: center;
    margin-top: 33px;
    margin-bottom: 10px;
}
.register .agreebtn{
  width: 100%;
    height: 100%;
    border: none;
    background: #ff552e;
    color: #fff;
    font-size: 14px;
    line-height: 42px;
    outline: none;
    cursor: pointer;
}
.register .btn{
     width: 350px;
    font-size: 14px;
    margin: 0 auto;
    position: relative;
    padding: 13px 0;
    clear: both; 
}
.register .agreecheck {
  height: 15px;
  width: 15px;
}
</style>
