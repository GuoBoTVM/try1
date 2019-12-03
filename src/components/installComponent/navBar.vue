<template>
    <div class="navbar">

        <div class="navbar_start">
            <slot name="start"></slot>
        </div>
        <div class="navbar_title">
            <slot name="title"></slot>
        </div>
        <div class="navbar_end">
            <slot name="end"></slot>
        </div>

    </div>
</template>

<script>
export default {
    name:'navBar'
}
</script>

<style lang='less'>

@import "../../assets/css/14.less";

.navbar{
    .height(103rem);
    background: @primary;
    position: fixed;
    top: 0;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:22px;

    .navbar_start,
    .navbar_end{
        width: 2rem;//给两边设上宽度之后,就算隐藏左边或者右边,他中间还是居中的.
        text-align: center;
    }
}

</style>
