<template>
    <div class="login">
      <div class="contents">
        <img src="" alt="">
        <div>
          <input type="text" placeholder="请输入用户名"  v-model="username" @blur='usernameChecked'>
        </div>
        <div class="password">
          <input type="password" placeholder="请输入密码"  v-model="password"  @blur='passwordChecked'>
        </div>
        <div class="btn">
          <button class="agreebtn" :style="Astyle"  @click="handle" >登录</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data(){
    return{
        username:"",
        password:"",
        conpassword:"",
      }
    },
  	methods:{
      usernameChecked(){
            let usernameRegExp=/^[0-9A-Za-z]{6,10}$/;
            if(usernameRegExp.test(this.username)){             
                this.$toast({
                message:'用户名格式正确',
                duration:2000
                })
          		return true
            }else{
      
                this.$toast({
                message:'用户名格式错误',
                duration:2000
                })
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
            return true
            }else{
                this.$toast({
                message:'密码格式错误',
                duration:2000
                }) 
            return false 
            }
        },  
  	}
	}
</script>

<style>
.password{
  position: relative;
}
.login{
  height: 100%;
  width: 100%;
  background-size:100% 100% ;
  position: fixed;
}
.login .contents{
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

.login a{
  color: #fff;
  text-decoration: none;
}

.login input{
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


.login .agreebtn{
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
.login .btn{
     width: 350px;
    font-size: 14px;
    margin: 0 auto;
    position: relative;
    padding: 13px 0;
    clear: both; 
}
</style>
