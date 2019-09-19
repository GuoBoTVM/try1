<template>
    <div>
        {{userdata | toUpper | cut('O')}}
        <br>
        <input type="text" v-model="userdata">
        <br>
        <button @click="test()">按钮</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userdata:"what's your problem"
        }
    },
    filters:{
        toUpper(str){
            return str.toUpperCase()
        },
        cut(str,name){
            if(str.indexOf(name)>-1){
                return str.replace(name,'')
            }
            return str
        }
    },
    methods:{
        test(){
            let a="abcdefg";
            console.log(a.slice(1))
        }
    }
}
</script>

<style>

</style>
