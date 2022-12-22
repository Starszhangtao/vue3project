<template>
    <div>
        <button @click="handshow">left</button>
        {{ myname }}
        <button>right</button>
    </div>
</template>
<script>
 export default {
    props:["myname","myid"],
    //默认传参数，自己会传
    setup (props,e){
        // let {emit}=e,//当上面填e的时候，这个是在这里解析参数，而{emit}在参数使直接解析
      //emit===this.$emit()
        console.log(props.myid)
      const handshow=()=>{
        //  console.log(e) 
         e.emit("event")
    }
    return {
        handshow
    }
}
}
  
</script>