<template>
    <div>
      <form action="/">
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
      </form>
      <ul v-if="value">
        <li v-for="data in serchlist" :key="data.cinemaId">
          <div class="left">
            <div class="cinema_name">{{ data.name }}</div>
            <div class="cinema_text">{{ data.address }}</div>
          </div>
          <div class="right">
            <div style="color:red;" >￥{{ data.lowPrice / 100 }}起</div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    mounted() {
         this.$store.commit('hide')
      if (this.$store.state.cinlist.length === 0) {
       this.$store.dispatch('getcinmlist')
    } else {
        console.log("search页面我已经用缓存数据了")
      }
  
    },
    unmounted(){
     this.$store.commit('show')
    }, 
    computed:{
      serchlist(){
         return  this.$store.state.cinlist.filter(item=>item.name.toUpperCase().includes(this.value.toUpperCase())||item.address.toUpperCase().includes(this.value.toUpperCase()))
      }
    },
    methods: {
      onSearch() {
  
      },
      onCancel() {
            this.$router.back()
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
      max-width:14rem ;
    }
  
    .right{
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
    height: 73rem;
    overflow: hidden;
    position: relative;
    //修正滚动条的位置
  }
  </style>