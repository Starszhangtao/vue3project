import axios from "axios"
import { onMounted, reactive } from "vue"
function getDate1() {
    const get1 = reactive({
        list: []
    })
    onMounted(() => {
        axios.get("/test1.json").then(res => {
            get1.list = res.data.list
        })
    })
    return get1
}
function getDate2() {
    const get2 = reactive({
        list: []
    })
    onMounted(() => {
        axios.get("/test2.json").then(res => {
            get2.list = res.data.list
        })
    })
    return get2
}
export { getDate1, getDate2 }