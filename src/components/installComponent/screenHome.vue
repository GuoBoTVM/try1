<template>
    <div class="screen_home">
        <!-- <screen></screen> -->
        <navBar>
            <template slot="start">
                返回
            </template>
            <template slot="title">
                车友汇
            </template>
            <template slot="end">
                菜单
            </template>
        </navBar>

        <screenContent />

        <tabBar />
    </div>
</template>

<script>
export default {
    name:"screenHome",
}
</script>

<style lang="less">

.screen_home{
    display: flex;
    flex-direction: column;
    height: 100%;
}


</style>
