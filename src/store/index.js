import { createStore } from 'vuex'

export default createStore({
  state: {
    isTabbershow:true
  },
  getters: {
  },
  mutations: {
      show(state){
         state.isTabbershow=true
      },
      hide(state){
       state.isTabbershow=false
      }
  },
  actions: {
  },
  modules: {
  }
})
