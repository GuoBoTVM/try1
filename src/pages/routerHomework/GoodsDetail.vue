<template>
    <div>
        <h1>详情页</h1>
        <br>
        $route中的params是{{$route.params}}
        <br>
        $route的query是{{$route.query}}
        <br>
        <div class="head"></div>
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route)
    }
}
</script>

<style>
.head{
    width: 1rem;
    height:1rem;
    background: orange;
}
</style>
