<template>
    <div>
        <ul class="newsul">
            <li v-for="(item,index) in newsList" :key="index">
                <router-link :to="'/index/news/'+item.id">
                    <h4>{{item.title}}</h4>
                </router-link>
            </li>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newsList:[
                {
                    id:'1',
                    title:"震惊! 世界杯"
                },
                {
                    id:'2',
                    title:"NBA冠军数量最多的球队!"
                },
                {
                    id:'3',
                    title:"男篮世界杯:美国队?塞尔维亚?"
                },
            ]
        }
    }
}
</script>

<style>
.newsul{
    margin-top: 20px;
    margin-left: 40px;
}
</style>
