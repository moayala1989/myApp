<template>
<div>
    <van-nav-bar
        title="影院"
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
      <template #left>
        {{ cityName }} <van-icon name="arrow-down" size="10" color="#333"></van-icon>
      </template>
      <template #right>
        <van-icon name="search" size="25" color="#333"></van-icon>
      </template>
      
    </van-nav-bar>
  <div class="cinemas" :style="{height:height}">
    <ul>
      <li v-for="cinema in cinemaList" :key="cinema.cinemaId" class="cinemaaa">
        
          <div class="left">
            <p class="cinemaname">{{cinema.name}}</p>
            <span>{{cinema.address}}</span>
          </div>
          <div class="right">
            <p>￥{{cinema.lowPrice / 100}} 起</p>
            <span>距离未知</span>
          </div>
      
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon } from 'vant'
import {mapActions, mapMutations, mapState} from 'vuex'

Vue.use(NavBar).use(Icon)

export default {
  data() {
    return {
      height: 0,
    }
  },
  methods: {
    ...mapMutations('citycinemabransh', ['clearCinemaList']),
    ...mapActions('citycinemabransh', ['getCinemaList']),
    onClickLeft(){
      this.$router.push('/city')
      this.clearCinemaList()
    },
    onClickRight(){
      this.$router.push('/move/search')
    }
  },
  computed:{
      ...mapState({
      cinemaList: state => state.citycinemabransh.cinemaList
    }),
      ...mapState('nowplayingbransh',['cityName','cityId'])
  },
  mounted() {
      // 获取视口高度赋值给滚动盒子
      this.height = document.documentElement.clientHeight - 100 +'px'
      
      // 在仓库中完成一部请求
      if (this.cinemaList.length === 0) {
        this.getCinemaList(this.cityId).then(res => {
          this.$nextTick(() => {
            new BetterScroll('.cinemas', {
              scrollbar: {
               fade: true // betterscroll 的滚动条
              }
            })
          })
        })
      } else {
        console.log('缓存');
          this.$nextTick(() => {
            new BetterScroll('.cinemas', {
              scrollbar: {
               fade: true // betterscroll 的滚动条
              }
            })
          })
      }
  }
}
</script>

<style lang="scss" scoped>
 .cinemas {
  font-size: 13px;
  overflow: hidden;
  position: relative; // 修正滚动条
 }
 .cinemaaa {
  display: flex;
  width: 100%;
  text-decoration: none;
  color: #797d82;
  padding: 8px 15px;
  .left {
    flex: 7;
    p {
    color: #000;
    font-size: 15px;
  }
  }
  .right {
    flex: 3;
    // margin-right: 20px;
  }
 }
</style>
