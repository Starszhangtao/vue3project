import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    cityId: '310100',
    cityName: '上海',
    current:1,
    isTabbershow: true,
    datalist: [],
    custoomlist: [],
    cinlist: []
  },
  getters: {
  },
  mutations: {
    //修改nowplaying
    mudatalist(state, data) {
      state.datalist = data
    },
    mudacustmoon(state, data) {
      state.custoomlist = data
    },
    handcinemas(state, data) {
      state.cinlist = data
    },
    handchanges(state,cityName){
      state.cityName=cityName
    },
    handchangesId(state,cityId){
    state.cityId=cityId
    },
    hadchange( state){
    state.cinlist=[]
    state.datalist=[]
    state.custoomlist=[]
    },
    handcurrent(state){
         state.current++       
    },
    show(state) {
      state.isTabbershow = true
    },
    hide(state) {
      state.isTabbershow = false
    }
  },
  actions: {
    getdatalist(store) {
      //获取nowplaying数据
      return new Promise((reslove,reject)=>{
        axios({
          url: `https://m.maizuo.com/gateway?cityId=${store.state.cityId}&pageNum=${store.state.current}&pageSize=10&type=1&k=6651581`,
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16640333202575094886957057","bc":"310100"}',
            'X-Host': ' mall.film-ticket.film.list'
          }
        }).then(res => {
          let data=[...store.state.datalist,...res.data.data.films]
          console.log(res.data.data)
          store.commit("mudatalist", data)
           if(res){
             reslove(res.data.data.total)
          }else{
            
          }
        })
      })
    },
    getcustmoon(store) {
      return axios({
        url: `https://m.maizuo.com/gateway?cityId=${store.state.cityId}&pageNum=1&pageSize=10&type=2&k=3240376`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16640333202575094886957057","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit("mudacustmoon", res.data.data.films)
      })
    },
    getcinmlist(store) {
      return axios({
        url: `https://m.maizuo.com/gateway?cityId=${store.state.cityId}&ticketFlag=1&k=7530493`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16640333202575094886957057"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        console.log('响应', res.data.data.cinemas)
        store.commit("handcinemas", res.data.data.cinemas)
      })
    },
  },
  modules: {
  }
})
