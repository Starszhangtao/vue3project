<template>
  <div>
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
    return {
       obj
    }
    }
 }
</script>