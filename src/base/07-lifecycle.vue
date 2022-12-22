<template>
    <div>
        生命周期
        <ul v-if="list.length">
            <li v-for="data in list" :key="data" >
                {{ data }}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import { toRefs, reactive, ref, onMounted, onBeforeMount } from 'vue'
export default {
    setup() {
        const obj = reactive({
            list: []
        })
        onBeforeMount(() => {
            console.log("dom上树前")
        })

        onMounted(() => {
            console.log("dom上树")
           
            // setTimeout(()=>{
                axios({
                url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=6651581',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16640333202575094886957057","bc":"310100"}',
                    'X-Host': ' mall.film-ticket.film.list'
                }
            }).then(res => {

                console.log(res.data.data.films)
                obj.list.push(res.data.data.films)
            })
            // },2000) 

        })
        return {
       ...toRefs(obj)
       
        }
    }
}
</script>