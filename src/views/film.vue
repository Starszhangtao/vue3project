<template>
    <div>
        <filmtitle class="stickly"></filmtitle>
        <router-view></router-view>
    </div>
</template>
<script>
import filmtitle from '@/components/film/filmtitle.vue'
 export  default {
      components:{
        filmtitle,
    },
    setup(){
     
    }  
}
 </script>
<style>
.stickly{
    position: sticky;
    top:0rem;
    background: white;
    z-index: 100;
}
</style>