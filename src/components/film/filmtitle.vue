<template>
    <div>
        <ul>
                <router-link to="/film/nowplaying" custom v-slot="{ navigate,  isActive }" >
                    <li @click="navigate">
                        <span :class="isActive?'zhangtao':''">正在热映</span>
                    </li>
                </router-link>
            <li>
                <router-link to="/film/custmoon" custom v-slot="{ navigate, isActive }">
                    <li @click="navigate">
                <span :class=" isActive ? 'zhangtao' :''">即将热映</span>
                    </li>
            </router-link>
            </li>   
        </ul>
    </div>
</template>
<style lang="scss" scoped>
ul{
    padding-inline-start:0rem;
  height: 2.45rem;
  display: flex;
  justify-content: space-around;
  line-height: 2.45rem;
li{
    list-style:none;
  flex: 1;
  text-align: center;
  font-size: .9rem;  
}
}
.zhangtao{
 color: red;
 border-bottom: .15rem solid red;
}

</style>