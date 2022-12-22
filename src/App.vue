<template>
  <div>
    <div style="background:red" v-show="obj.isshow">header</div>
    <Tabber v-if="$store.state.isTabbershow" ></Tabber>
  <router-view></router-view>
  </div>
</template>
<script>
import { reactive,provide} from 'vue';
import Tabber from '@/components/Tabber.vue'
 export default {
    components:{
      Tabber
    },
    setup(){
      const obj=reactive({
         isshow:true
      })
      provide("zhangtao",obj)//供应商提供一个服务，前面是key,后面是value
    return {
       obj
    }
    }
 }
</script>