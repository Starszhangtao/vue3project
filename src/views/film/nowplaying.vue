<template>
  <div>
    nowplaying
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handin(data.filmId)">
        {{ data.name }}
        <div>
          {{ actorfilter(data.actors) }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from 'vue'
import axios from 'axios'
 import { useRouter } from 'vue-router'
export default {
  setup() {

    //定义router //router ===this.$router
    const router =useRouter()
    const obj = reactive({
      datalist: []
    })
    const handin=(filmId)=>{
        console.log(filmId)
        router.push(`/detail/${filmId}`)
      }
    const actorfilter=(e)=>{
       if(e===undefined)return "暂无主演";
      return e.map((item)=>item.name).join(" ")
    }
    onMounted(() => {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=6651581',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16640333202575094886957057","bc":"310100"}',
          'X-Host': ' mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)
        obj.datalist = res.data.data.films
      })

    })
    return {
      ...toRefs(obj),
      handin,
      actorfilter
    }
  },

  // methods:{
  //   handin(filmId){
  //   this.$router.push(`/detail/${filmId}`)
  // },
  // actorfilter(e){
  //   if(e === undefined)return "暂无主演";
  //   return e.map((item)=>item.name).join(" ");
  // }
  // }
}
</script>