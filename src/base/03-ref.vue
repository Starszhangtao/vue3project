<template>
    <div>
        {{ myname }}
        <button @click="handclick">change</button>
    </div>
</template>
<script>
import { reactive ,ref } from '@vue/reactivity'
 export default {
    //vue3老写法中beforcreate,create生命周期===setup
     //调用函数的时候才创建对象，调用方法等，直接在内部改
    setup(){
        const myname=ref('zhangtao')// 原理是对.value拦截
         console.log(myname)
        const handclick=()=>{
             //ref拦截原理，所以需要.value才可以改
           myname.value="zhang"


        }
        return{
         handclick,
         myname
        }
    }
 }
</script>