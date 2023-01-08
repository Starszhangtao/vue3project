<template>
    <div>
        {{ obj.mytext }}
        <input type="text" v-model="obj.mytext" />
        <input type="text" ref="mytextref" />
        <button @click="handadd">add</button>
         <ul>
            <li v-for="data in obj.datalist" :key="data">{{ data }}</li>
         </ul>
    </div>
</template>
<script>
import { reactive ,ref  } from '@vue/reactivity'
  export  default {
      setup(){
       const obj=reactive({
        mytext:'',
        datalist:[],
        myname:'zhangtao'
    })
    const mytextref =ref()
     const handadd=()=>{
      console.log("拿一下这个mytextref",mytextref.value.value)
         console.log(obj.mytext)
          obj.datalist.push(obj.mytext)
          obj.mytext=''
        }
    return {
      obj,
      handadd,
      mytextref
    }
    },
    mounted(){
      // console.log("mounted",this.$refs.mytextref)
    
    }
  }
</script>