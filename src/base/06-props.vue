<template>
    <div>
        通信
        <navbar myname="home" myid="1111" @event="handchange"></navbar>
        <sidebar v-show="show"></sidebar>
   </div>
</template>
<script>
import { reactive,toRefs } from 'vue'
import sidebar from '@/base/comonent/sidebar.vue'
import navbar from '@/base/comonent/navbar.vue'
 export default {
    components:{
     navbar,
     sidebar
    },
    setup(){
     const obj=reactive({
      show:true
    })
    const handchange=()=>{
       obj.show=!obj.show
    }
    return {
      ...toRefs(obj),
      handchange
    }
    }
 }
</script>