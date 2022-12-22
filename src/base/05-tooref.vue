<template>
    <div>
        hello 3  新写法
        {{ myname }}
        <button @click="handclick">change</button>
    </div>
</template>
<script>
import { reactive ,toRefs} from '@vue/reactivity'
 export default {
    //vue3老写法中beforcreate,create生命周期===setup
     //调用函数的时候才创建对象，调用方法等，直接在内部改
    setup(){
      const obj=reactive({
      myname:"zhangtao",
      myage:21
    })
    const handclick=()=>{
       obj.myname="zhang"
    }
    //写完状态 return出去
    return{
        //展开相当于myname一个大对象，myage一个大对象
      ...toRefs(obj),
       handclick
    }
    }
 }
</script>