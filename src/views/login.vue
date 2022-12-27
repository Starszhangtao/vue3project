<template>
    <div>登录页面
        <button @click="handlogin">点击登录</button>
      
    </div>
</template>
<script>
 export default {
   data(){
    return{
    
    }
},
methods:{
handlogin(){
  localStorage.setItem("token","后端返回的字段")
 
   //先获取到query字段
    console.log("登录页拿到的route",this.$route)
   //跳转到字段想要跳到的页面，需要接收query传过来的字段
  this.$router.push(this.$route.query.aaa)
},

}
}

</script>