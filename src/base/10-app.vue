<template>
    <div>
        <ul>
            <li v-for="data in obj1.list" :key="data">
{{ data.name }}
            </li>
        </ul>
        <ul>
            <li v-for="item in obj2.list" :key="item">
{{ item.title}}
            </li>
        </ul>
    </div>
</template>
<!-- 函数式写法就很清晰 -->
<script>
import {getDate1 ,getDate2}  from '@/base/modlues/app'
  export default {
   setup(){
const obj1=getDate1()
const obj2=getDate2()
return {
 obj1,
 obj2
}
} 
  }
</script>