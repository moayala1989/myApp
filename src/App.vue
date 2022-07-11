<template>
  <div id="app">
    <Tabbar v-show="!$route.meta.isShow" />
    <router-view></router-view>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar.vue'
export default {
  name: 'App',
  components:{
    Tabbar
  },
  mounted() {
    // axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4').then(res => {
    //   console.log(res.data)
    // })
    // console.log(this.$route.meta)
  }
}
</script>
<style lang="scss">
 li {
  list-style: none;
 }
 * {
  margin: 0;
  padding: 0;
  touch-action: manipulation
 }
 body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // background-color: #ddd;
 }

</style>
