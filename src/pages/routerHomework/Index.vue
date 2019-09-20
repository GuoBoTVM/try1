<template>
    <div>
        <h1>首页</h1>
        <br>
        <h4>使用router-link跳转 实质就是a标签</h4>
        <br>
        <router-link to="/goods">商品</router-link>
        <router-link to="/order">订单</router-link>
        <router-link to="/car">购物车</router-link>
        <router-view></router-view>

        <br>
        <br>
        <h4>使用$router来进行跳转</h4>
        <br>
        <button type="button" @click="$router.push('/goods/detail')">使用字符串参数进行跳转</button>
        <br>
        <br>
        <button type="button" @click="$router.push({path:'/goods/detail'})">使用对象形式进行跳转</button>
        <br>
        <br>
        <button type="button" @click="$router.push({path:'/goods/detail',query:{id:123,age:23},params:{name:'tom'}})">push对象中包括path,只能传递query参数</button>
        <br>
        <br>
        <button type="button" @click="$router.push({name:'goodsdetail',query:{id:123,age:23},params:{id:123}})">push对象中包括name,可以传递param参数</button>

        <br>
        <br>
        <button @click="jumpTo">使用js写router跳转</button>


    </div>
</template>

<script>
export default {
    methods: {
        jumpTo(){
            this.$router.push({path:"/goods/detail",query:{id:111222333}})
        }
    },
}
</script>

<style>

</style>
