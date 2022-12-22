<template>
    <footer class="box">
       <ul>
          <li>
             <router-link to="/film" custom v-slot="{ navigate, isActive }">
          <li @click="navigate" :class="isActive ? 'first' : ''"><img src="../assets/yingyuan.png" alt="">
             <span>电影</span>
          </li>
          </router-link>
          </li>
          <li>
             <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
          <li @click="navigate" :class="isActive ? 'first' : ''"><img src="../assets/dianying.png" alt="">
             <span>影院</span>
          </li>
 
          </router-link>
          </li>
          <li>
             <router-link to="/center" custom v-slot="{ navigate, isActive }">
          <li @click="navigate" :class="isActive ? 'first' : ''"><img src="../assets/wode.png" alt="">
             <span>我的</span>
          </li>
          </router-link>
          </li>
       </ul>
    </footer>
 </template>
 <script>
 export default {
 
 }
 </script>
 <style  scoped>
 footer {
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    width: 100%;
    height: 2.45rem;
    background: white;
 }
 
 footer>ul {
    height: 100%;
    width: 100%;
    display: flex;
    padding-inline-start: 0rem;
    margin-block-start: 0rem;
    margin-block-end: 0rem;
 }
 
 ul>li {
    flex: 1;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 ul>li>li{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
 span{
   font-size: .6rem;
 }
 img{
  width: 1.7rem;
  height: 1.7rem;
 }
 .first {
    color: red;
 }
 </style>