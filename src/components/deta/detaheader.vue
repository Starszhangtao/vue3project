<template>
    <div class="header">
        <div class="header1">
            <img src="../../assets/fanhui.png" @click="handeback" style=" width: 1.5rem;
       height: 1.5rem;" alt="">
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    methods: {
        handeback() {
            this.$router.back();
        }
    }
}
</script>
<style lang="scss" scoped> 
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.45rem;
    display: flex;
    text-align: center;
    line-height: 2.45rem;
    background: white;
    .header1 {
        padding-left: 1rem;
        position: fixed;
        text-align: center;
        left: .5rem;
       line-height: 2.45rem;
       height: 2.45rem;
       display: flex;
       align-items: center;
    }
}
</style>