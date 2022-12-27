<template>
  <div >
    <van-list
 v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  :immediate-check="false"
>
      <van-cell v-for="data in $store.state.datalist" :key="data.filmId" @click="handin(data.filmId)" >
        <img :src="data.poster" alt="">
        <div>
          <div class="title">{{ data.name }}</div>
          <div class="neirong">
            <div>观众评分：<span>{{ data.grade }}</span></div>
            <div class="actors">{{ data.synopsis }}</div>
            <div>{{ data.nation }}|{{ data.runtime }}分钟 </div>
          </div>
        </div>
      </van-cell>
    </van-list>
    <div class="empty"></div>
  </div>
</template>
<script>
import { onMounted,ref,reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mapState, useStore } from 'vuex'
export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    const loading=ref(false)
    const finished=ref(false)
    const obj=reactive({
       total:0
    })
    const  onLoad=()=>{
         if(store.state.datalist.length==obj.total){
            finished.value=true
            return
        }
         console.log("到底了")
         store.commit('handcurrent')
       store.dispatch('getdatalist').then(res=>{
        console.log(res)
        obj.total=res
        loading.value=false
      })
    }
    const handin = (filmId) => {
      router.push(`/detail/${filmId}`)
    }
    const actorfilter = (e) => {
      if (e === undefined) return "暂无主演";
      return e.map((item) => item.name).join(" ")
    }
    onMounted(() => {
      if (store.state.datalist.length === 0) {
        store.dispatch('getdatalist')
      } else {
     
      }
    })
    return {
     loading,
     finished,
      handin,
      actorfilter,
      onLoad,
      obj,
    }
  },
}
</script>
<style lang="scss" scoped>
.van-list {
    .van-cell {
        overflow: hidden;
        padding: .70rem;

        img {
            width: 3.6rem;
            float: left;

        }        .title {
            font-size: .9rem;
        }

        .neirong {
            font-size: .8rem;
            color: gray;

            .actors {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 14rem;
            }
        }
    }
}
.empty{
 height: 2.45rem;
}
</style>