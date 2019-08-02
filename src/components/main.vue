<template>
  <div>
    <div>
      <!-- 按钮组件练习 -->
      <Button>按钮</Button>
      <br>
      <Button type='success'>按钮</Button>
      <br>
      <Button type='warning' size='small'>按钮</Button>
      <br>
      <Button type='error' size='big'>按钮</Button>
    </div>


  </div>
</template>

<script>
import Vue from 'vue'
import Button from './mycomponent/Button'
Vue.component('Button',Button)
export default {

}
</script>

<style>

</style>
