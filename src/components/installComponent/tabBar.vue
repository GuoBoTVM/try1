<template>
    <div class="tab_bar">
        <div class="tabbar_item" ref="tabbar" v-for="(item,index) in tabbar" :key="index" @click="change(index)">
            <img class="item_img" :src="item.img">
            <div class="item_label">{{item.label}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"tabBar",
    data(){
        return{
            tabbar:[
                {
                    img:require("@/assets/icons/shouye.png"),
                    label:"首页"
                },{
                    img:require("@/assets/icons/che.png"),
                    label:"车汇"
                },{
                    img:require("@/assets/icons/xiaoxi.png"),
                    label:"消息"
                },{
                    img:require("@/assets/icons/wode.png"),
                    label:"我的"
                },
            ],
        }
    },
    methods: {
        change(index){
            for(let i in this.tabbar){
                if(i == index){
                    this.$refs.tabbar[i].style.color="#ff88bb";
                }else {
                    this.$refs.tabbar[i].style.color="black";
                }
            }
        }
    },
}
</script>

<style lang="less">
@import "../../assets/css/14.less";
.tab_bar{
    position: fixed;
    bottom: 0;
    .height(100rem);
    width: 100%;
    border-top: 1px solid black;
    display: flex;
    justify-content: space-around;
    
    .tabbar_item:nth-child(1){
        color:@primary;
    }
    .tabbar_item{
        display: flex;
        flex-direction: column;
        .item_img{
            width: 22px;
            height: 22px;
            margin: 0 auto;
            margin-top: 4px;
        }
        .item_label{
            font-size: 22px;
            text-align: center;
        }
    }
}
</style>
