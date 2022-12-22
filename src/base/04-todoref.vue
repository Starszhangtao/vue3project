<template>
    <div>
        <input type="text" ref="mytext">
        <button @click="handAdd">add</button>
        <ul>
            <li v-for="(data,index) in datalist" :key="data" >
               {{ data }}
               <button @click="handreact(index)">delete</button>
            </li>
        </ul>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        const mytext = ref()
        const datalist=ref([])
        const handAdd = () => {
        console.log(mytext.value.value)
           datalist.value.push(mytext.value.value)
           mytext.value.value=''
        }
        const handreact=(index)=>{
            datalist.value.splice(index,1)
        }
        return {
            mytext,
            handAdd,
            datalist,
            handreact
        }
    }
}
</script>