<template>
    <div class="screen_content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'screenContent',
}
</script>

<style lang="less">
@import '../../assets/css/14.less';

.screen_content{
    flex: 1;
    display: flex;
    background: @backgroundcolor;
}

</style>
