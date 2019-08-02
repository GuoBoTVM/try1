<template>
  <div>
    <div :class="['btn','btn_'+type , 'size_'+size]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:{
    type:{
      type:String,
      default:'basic'
    },
    size:{
      type:String,
      default:'normal'
    }
  }

}
</script>

<style lang='less' scope>
@import '../../assets/css/iviewcolor';
  .btn{
    display:inline-block;
    color:#fff;
    text-align:center;
    .render(@height,@width,@backgroundColor){
      height:@height;
      width:@width;
      background:@backgroundColor;
      border-radius:@height/3;
      line-height:@height;
      &:hover{
        background:lighten(@backgroundColor,20%);
        transition:background 0.2s linear;
      }
    }
    &.btn_basic{
      .render(30px,70px,@Primary)
    }
    &.btn_success{
      .render(30px,70px,@Success)
    }
    &.btn_warning{
      .render(30px,70px,@Warning)
    }
    &.btn_error{
      .render(30px,70px,@Error)
    }
    &.size_small{
      width:50px;
    }
    &.size_big{
      width:100px;
    }
  }
  // .btn:hover{
  //   background:red;
  // }
</style>
