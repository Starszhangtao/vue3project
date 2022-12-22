<template>
    <div>
        detail
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
    </div>
</template>
<script>
import obj from '@/until/minix'
import { onMounted ,onUnmounted,inject} from 'vue'
import { useRoute } from 'vue-router'
  export default {
    mixins:[obj],
      setup(){
        const isshow=inject("zhangtao")
        console.log(isshow)
      const route=useRoute()
      onMounted(()=>{
         console.log(route.params.id)
        isshow.isshow=false
      })
      onUnmounted(()=>{
        isshow.isshow=true
      })
      
      },
  }
</script>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>