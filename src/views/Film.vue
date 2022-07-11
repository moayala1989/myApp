<template>
  <div class="film">
      <div class="banner">
        <Film-swiper>
          <div class="swiper-slide" v-for="img,index in imglist" :key="index">
           <img :src="img" />
            </div>
        </Film-swiper>
      </div>
     <ul class="stic">
      <router-link  to="/film/nowplaying" tag="li" active-class="con"><span>正在热映</span> <i></i> </router-link>
      <router-link  to="/film/comingsoon" tag="li" active-class="con"><span>即将上映</span> <i></i> </router-link>
     </ul>
     <section>
       <router-view></router-view>
     </section>
  </div>
</template>

<script>
import FilmSwiper from './film/FilmSwiper.vue'
import Tabbar from '../components/Tabbar.vue'

import Swiper from 'swiper'
import { http } from '@/api/http'
export default {
  name:'Film',
   data() {
    return {
      imglist: []
    }
   },
  components:{
    FilmSwiper, Tabbar
  },
   mounted() {
    http({
      url:'/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6372684', 
      headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
    }).then(res => {
        // console.log(res.data)
        res.data.data.films.forEach(item => {
          this.imglist.push(item.poster)
        })
    })
   },
   watch: {
    imglist(){
      this.$nextTick(()=>{
        new Swiper(this.$refs.kon, {
        loop: true,
        autoplay: {
          delay: 2000
        }
      })
     })
    }
   }
} 
</script>

<style lang="scss" scoped>
 .film {
  width: 100%;
  margin: 0 auto;
  section {
    margin-bottom: 50px;
  }
}
.stic {
  position: sticky;
  top: 0;
  z-index: 188;
  display: flex;
  background-color: #fff;
  li {
    flex:1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .con {
      color: red;
      i {
        width: 40%;
        display: block;
        border-bottom: 2px solid #ff5f16;
        border-radius: 20px;
        margin: auto;
      }
    }
}
.swiper-slide {
      img {
        width: 100%;
        height: 200px;
      }
    }
</style>