<template>
  <div>
    <!-- <div>
      按钮组件练习
      <Button siez='small'>按钮</Button>
      <br>
      <Button type='success'>按钮</Button>
      <br>
      <Button type='warning' size='small'>按钮</Button>
      <br>
      <Button type='error' size='big'>按钮</Button>
    </div> -->
    <!-- <Transtion></Transtion> -->
    <direc></direc>

  </div>
</template>

<script>
import Vue from 'vue'
import Button from './mycomponent/Button'
import Transtion from './mycomponent/Transtion'
import direc from './mycomponent/direc'
Vue.component('Button',Button)
Vue.component('Transtion',Transtion)
Vue.component('direc',direc)
export default {

}
</script>

<style>

</style>
