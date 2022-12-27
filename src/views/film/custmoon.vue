<template>
    <div>
        <ul>
            <li v-for="data in $store.state.custoomlist" :key="data.filmId">
                <img :src="data.poster" alt="">
                <div>
                    <div class="title">{{ data.name }}</div>
                    <div class="neirong">
                        <div>观众评分：<span>{{ data.grade }}</span></div>
                        <div class="actors">{{ data.synopsis }}</div>
                        <div>{{ data.nation }}|{{ data.runtime }}分钟 </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="empty"></div>
    </div>
</template>
<script>
import { mapState, useStore, } from 'vuex';
import { onMounted, toRefs, reactive } from 'vue';
export default {
    setup() {
        const store = useStore()
        const obj = reactive({
            ...mapState(['custoomlist'])
        })
        onMounted(() => {
            if (store.state.custoomlist.length === 0) {
                store.dispatch('getcustmoon')
            } else {
            }
        })
        return {
            ...toRefs(obj)
        }
    }
}
</script>
<style lang="scss" scoped>
ul {
    li {
        overflow: hidden;
        padding: .75rem;

        img {
            width: 3.5rem;
            float: left;
        }

        .title {
            font-size: .9rem;
        }

        .neirong {
            font-size: .85rem;
            color: gray;

            .actors {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 15rem;
            }
        }
    }
}

.empty {
    height: 2.45rem;
}
</style>