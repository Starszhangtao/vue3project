<template>
    <div>
        <input type="text" v-model="obj.mytext" >
    <ul>
        <li v-for="data in computedlist" :key="data">
{{ data }}
        </li>
    </ul>
    </div>
</template>
<script>
import { ToRefs,reactive ,computed} from 'vue';
 export  default {
   setup(){
      const obj =reactive({
        mytext:'',
    datalist:["aaaa","adf","dfg","dhssdd","tahgs","sdjhffd","bdf"]
    })
    // const filterlist=()=>{
    // return obj.datalist.filter(item=>item.includes(obj.mytext))
    // }
    const computedlist=computed(()=>{
       return obj.datalist.filter(item=>item.includes(obj.mytext))
    })
    return {
     obj,
    //  filterlist,
     computedlist
     }
}
 }
</script>