<template>
    <div>
        <h1>详情页</h1>
        <br>
        $route中的params是{{$route.params}}
        <br>
        $route的query是{{$route.query}}
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

</style>
