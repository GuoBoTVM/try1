<template>
    <div class="screen">
        <!-- <h1>这是screen</h1> -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'screen'
}
</script>

<style lang="less">
@import "../../assets/css/14.less";

.screen{
    position: fixed;
    height: 100%;
    width: 100%;
    background: @backgroundcolor;
}
</style>
