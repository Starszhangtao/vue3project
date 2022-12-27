<template>
  <div>
    <div>
      <van-nav-bar title="影院" ref="navbar" @click-left="handleft" @click-right="handright">
      <template #left>
        {{ store.state.cityName }}<van-icon name="arrow-down" />
      </template>
      <template #right>
        <van-icon name="search" color="black" size="25" />
      </template>
    </van-nav-bar>
    </div>
    <div class="boxx">
      <li v-for="data in store.state.cinlist" :key="data.cinemaId">
        <div class="left">
          <div class="cinema_name">{{ data.name }}</div>
          <div class="cinema_text">{{ data.address }}</div>
        </div>
        <div class="right">
          <div style="color:red;">￥{{ data.lowPrice / 100 }}起</div>
        </div>
      </li>
    </div>
  </div>
</template>
<script>
import { onMounted,nextTick } from 'vue';
import { useStore } from 'vuex';
import BetterScroll from 'better-scroll'
import { useRouter } from 'vue-router';
export default {
  setup() {
    const store = useStore()
    const router=useRouter()
    const handleft=()=>{
      router.push('/city')
    }
    const handright=()=>{
      router.push('/cinemas/search')
    }
    onMounted(async () => {
      if (store.state.cinlist.length === 0) {
        await store.dispatch('getcinmlist').then(res => {
          console.log(res)
          nextTick(() => {
            new BetterScroll('.boxx', {
              scrollbar: {
                fade: true
              }
            })
          })
        })
      } else {
        nextTick(() => {
            new BetterScroll('.boxx', {
              scrollbar: {
                fade: true
              }
            })
          })
      }
    })
    return {
      store,
      router,
      handleft,
      handright
    }
  }
}
</script>
<style lang="scss" scoped>
li {
  padding: .75rem;
  list-style: none;
  display: flex;
  justify-content: space-between;

  .left {
    max-width: 14rem;
  }

  .right {
    font-size: 15px;
    text-overflow: ellipsis;
    display: flex;
  }

  .cinema_text {
    color: #797D82;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
}
.boxx {
  height: 37rem;
  overflow: scroll;
  position: relative;
  //修正滚动条的位置
}
</style>