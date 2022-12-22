<template>
    <div>
        <input type="text" v-model="obj.mytext" >
    <ul>
        <li v-for="data in obj.datalist" :key="data">
{{ data }}
        </li>
    </ul>
    </div>
</template>
<script>
import { reactive,watch } from 'vue';
 export  default {
   setup(){
      const obj =reactive({
        mytext:'',
    datalist:["aaaa","adf","dfg","dhssdd","tahgs","sdjhffd","bdf"],
    oldlist:["aaaa","adf","dfg","dhssdd","tahgs","sdjhffd","bdf"]
    })
    watch(
    ()=>obj.mytext,
    ()=>{
         obj.datalist=obj.oldlist.filter(item=>item.includes(obj.mytext))
        console.log("改变")
    })
   const handinput=()=>{
        obj.datalist=obj.oldlist.filter(item=>item.includes(obj.mytext))
    console.log("handinput")
}
    return {
     obj,
     handinput,
     }
}
 }
</script>