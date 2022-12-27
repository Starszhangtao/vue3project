<template>
  <div>
    <detaheader v-scroll>{{ dlist.name }}</detaheader>
    <div style="position:relative" class="poster" :style="{
      backgroundImage: 'url(' + dlist.poster + ')'
    }">
     <div style="position:absolute;top: 10px;left: 20px;">
      <img src="../assets/fanhui.png" alt="" style="height:1.3rem;width: 1.3rem;">
     </div>  
  </div>

    <div class="content">
      <div>{{ dlist.name }}</div>
      <div>
        <div class="data-text">{{ dlist.category }}</div>
        <div class="data-text">{{ dlist.premiereAt }}上映</div>
        <div class="data-text">{{ dlist.nation }}|{{ dlist.runtime }}分钟</div>
        <div class="data-text" style="line-height:13px;" :class="ishidden ? 'hidden' : ''">{{ dlist.synopsis }}</div>
        <div class="data-text" style="text-align:center;padding-top: .5rem;">
          <img src="../assets/jiantou.png" alt="" @click="ishidden = !ishidden" v-if="ishidden">
          <img src="../assets/jiantoushang.png" alt="" @click="ishidden = !ishidden" v-else>
        </div>
      </div>
      <!--演员人群 -->
      <div style="border-bottom: 1px solid gray ;">
        <div style="margin-top:10px">演职人员</div>
        <swiper :slides-per-view="3.5"  :space-between="10"    @swiper="onSwiper" @slideChange="onSlideChange" >
          <swiper-slide v-for="item in dlist.actors" :key="item"> 
            <div :style="{
               backgroundImage:'url('+item.avatarAddress +')' 
            }" class="avatar"></div>
            <div style="text-algin:center; font-size:12px;">{{ item.name }}</div>
            <div style="text-algin:center; font-size:13px;">{{ item.role }}</div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 剧照 -->
      <div style="margin-top:20px">
        <div>剧照</div>
        <swiper :slides-per-view="2"  :space-between="30"    @swiper="onSwiper" @slideChange="onSlideChange" >
          <swiper-slide v-for="poitem in dlist.photos" :key="poitem"> 
            <div :style="{
               backgroundImage:'url('+poitem +')' 
            }" class="avatar"></div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import  detaheader from '@/components/deta/detaheader.vue'
import { onMounted, reactive, toRefs,onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    const obj = reactive({
      dlist: [],
      ishidden: true
    })
    const onSwiper = (swiper) => {
      console.log(swiper);
      
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    onMounted(() => {
      store.commit('hide')
      fetch(`https://m.maizuo.com/gateway?filmId=${route.params.id}&k=3635951`, {
        method: "GET",
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16640333202575094886957057","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.info'
        }
      }).then(res => res.json()).then(res => {
        console.log(res.data.film)
        obj.dlist = res.data.film
      })
    })
    onUnmounted(()=>{
       store.commit('show')
    })
    return {
      route,
      store,
      ...toRefs(obj),
      onSwiper,
      onSlideChange
    }
  },
  components: {
    detaheader,
    Swiper,
    SwiperSlide,
  },
  directives: {
   scroll: {
      mounted(el,binding) {
        el.style.display='none'
      window.onscroll=()=>{
          if((document.documentElement.scrollTop ||  document.body.scrollTop)>50){
              console.log("111111111111")
            el.style.display='block'
          }else{
            console.log("22222222222")
            el.style.display='none'
          }
      }
      },
      //
      unmounted(){
          window.onscroll=null
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.poster {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 12rem;
}
.avatar{
  width: 100%;
  height: 5rem;
  background-position: center;
  background-size: cover;
}
.content {
  padding: .75rem;

  .data-text {
    color: gray;
    font-size: .65rem;

    img {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
}

.hidden {
  overflow: hidden;
  height: 1.5rem;
}
</style>
  