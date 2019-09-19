<template>
    <div>
        <router-link to="/index">index</router-link>
        <headBar/>
    </div>
</template>

<script>
import Vue from 'vue'
import headBar from "@/pages/headBar"
Vue.component("headBar",headBar)
export default {

}
</script>

<style>

</style>
