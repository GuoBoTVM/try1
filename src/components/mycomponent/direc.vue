<template>
    <div>
        <!-- 注册一个局部自定义方法 -->
        实现输入数值进行背景颜色定义
        <div class="test" v-color="bcolor"></div>
        <br>
        <input type="text" v-model="bcolor">

        <br>
        <br>
        自定义v-cmodel实现v-model的双向绑定
        <br>
        {{value}}
        <br>
        <!-- 上面是自定义指令,下面是原生指令 -->
        <input type="text" v-cmodel="value">
        <input type="text" v-model="value">
    </div>
</template>

<script>
export default {
    data(){
        return{
            bcolor:null,//
            value:null,//
        }
    },
    directives:{
        color:{
            inserted(el,binding){
            },
            update(el,binding) {
                el.style.background= binding.value;
            },
        },
        cmodel:{
            inserted(el,binding,vnode){
                console.log(binding)
                el.addEventListener("input",()=>{
                    console.log(vnode.context);//虚拟dom,相当于vue
                    // binding.expression 相当于v-cmodel绑定的value
                    vnode.context[binding.expression] = el.value;
                })
            },
            update(el,binding){
                el.value=binding.value
            }
        }
    }
}
</script>

<style>
.test{
    height: 100px;
    width: 100px;
    border: 1px solid black;
}
</style>
