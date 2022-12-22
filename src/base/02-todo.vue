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
        //可以定义多个reactive 只要return出去就行
        // const mylist=reactive([])//这个可以直接允许定义，数字字符串不可以
        // const obj2=reactive('')//不可以
        // const obj3=reactive(1111)//不可以
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