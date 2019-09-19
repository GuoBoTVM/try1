<template>
    <div>
        <h1>
            这是新闻详情页
            新闻id是{{id}}
        </h1>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
        console.log(this.$route)
    },
    computed: {
        id(){
            return this.$route.params.id
        }
    },
}
</script>

<style>

</style>
