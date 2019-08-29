<template>
    <div>
        <button @click='firstShow=!firstShow'>按钮</button>
        <transition name='first'>
            <div v-if="firstShow" class="trans_box"></div>
        </transition>
        <br>
        <div class="test"></div>
        <input type="text" v-ooo:aa='1+3'>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.directive('ooo',function(el,bindings,vnode,vlodVnode){
    console.log('ooo');
    console.log(bindings)
    console.log(vnode)
    console.log(vlodVnode)
})


export default {
    data(){
        return{
            firstShow:true,
        }
    }
}
</script>

<style>
.trans_box{
    height: 100px;
    width: 100px;
    border-radius: 30%;
    background: #53868B;
    /* float:right; */
}
.first-enter,.first-leave-to {
    opacity: 0;
    /* transform: translateX(100px); */
    transform: rotate(360deg);
}
.first-enter-active, .first-leave-active {
    transition: all 1s;
    /* transition: opacity 1s;
    transition: transform 1s; */
}
.test{
    height: 100px;
    width: 100px;
    background: #53868B;    
    /* transform:rotateZ(30deg) */
    transform: scaleX(2);
    transform:translateX(100px) scaleX(2);
}
</style>
