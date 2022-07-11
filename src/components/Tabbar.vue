<template>
  <nav class="nav">
    <ul>
      <router-link to = "/film" tag="li" active-class="con">
      <i class="iconfont icon-training"></i>
      <span>电影</span>
      </router-link>
      <router-link to = "/move" tag="li"  active-class="con">
      <i class="iconfont icon-all"></i>
      <span>影院</span>
      </router-link>
      <router-link to = "/center" tag="li" active-class="con">
      <i class="iconfont icon-account"></i>
      <span>我的</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Tabbar' 
}
</script>

<style scoped lang = "scss">
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 999;
  ul {
    display: flex;
    text-align: center;
    li {
      flex:33%;
      display: flex;
      height: 100%;
      flex-direction: column;
      border: 1px solid pink;
      span {
          line-height: 20px;
          font-size: 12px;
        }
        i {
          font-size: 20px;
          line-height: 30px;
        }
      }
      .con {
        color: red
      }
   
 }
}
</style>

