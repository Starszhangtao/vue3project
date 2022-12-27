<template>
    <div class="box">
        <van-index-bar :index-list="computedlist" @select="handchange">
            <div v-for="data in citylist" :key="data.type">
                <van-index-anchor :index="data.type" />
                <van-cell :title="item.name" v-for="item in data.list" :key="item.cityId"  @click="handclick(item)"/>
            </div>
        </van-index-bar>
    </div>
</template>
<script>
import { Toast } from 'vant'
import Better from 'better-scroll'
export default {
    data() {
        return {
            citylist: []
        }
    },
    mounted() {
        this.$store.commit('hide')
        this.$store.commit('hadchange')
        fetch(`https://m.maizuo.com/gateway?k=3119228
`, {
            method: 'GET',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16640333202575094886957057"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res => res.json()).then(response => {
            console.log('响应', response.data.cities)
            //这个可以确认DOM上树 
              this.$nextTick(() => {
                new Better('.box', {
                  scrollbar: {
                    fade: true
                  }
                })
              })
            this.citylist = this.rendyCity(response.data.cities)
        })
    },
    computed: {
        computedlist() {
            return this.citylist.map(item => item.type)
        }
    },
    methods: {
        rendyCity(list) {
            // console.log(list)
            var citylist = []
            //1，取回数据，按照ABCD...Z分好组
            //2，利用转换后的数组结合组件渲染在桌面
            var letterlist = []
            //65到90ascll码
            for (var i = 65; i < 91; i++) {
                letterlist.push(String.fromCharCode(i))
            }
            console.log(letterlist)
            letterlist.forEach(letter => {
                var newlist = list.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
                // console.log(newlist)
                newlist.length > 0 && citylist.push({
                    type: letter,
                    list: newlist
                })
            })
            // console.log(citylist)
            return citylist
        },
        handchange(data) {
            console.log("改变了", data)
            Toast(data)
        },
        handclick(item){
           console.log("检查name",item.name,item.cityId)
          console.log(this.$store.state)
          this.$store.commit("handchanges",item.name)
          this.$store.commit("handchangesId",item.cityId)
        this.$router.back()
        }
    },
    unmounted(){
      this.$store.commit('show')
    }
}
//vuex能管理公共状态（分散在各个地方的状态，刷新就会丢。
//vuex  持久化(默认管理在内存，一刷新页面就会丢)
</script>
<style lang="scss" scoped>
.box {
    height: 74rem;
    overflow: scroll;
    position:relative ;
}
</style>