<template>
    <div v-if="flimlist" class="detail">
        <i class="iconfont icon-back kon" @click="todedatil"></i>
        <DetailHeader :flimname = "flimlist.name" v-top></DetailHeader>
        <div class="upper">
            <img :src="flimlist.poster" />
            <div class="fliminfo">
            
                <h3>{{flimlist.name}}</h3>
                <p class="category">{{ flimlist.category}}</p>
                <p>2022-04-12上映</p>
                <p class="nation" >{{ flimlist.nation}} | 112分钟</p>
                <p class="synopsis" :class="isShow ? '' : 'text'">{{ flimlist.synopsis}}</p>
                <div style="text-align: center; height: 30px">
                    <i class="iconfont" :class="isShow ? 'icon-less' : 'icon-moreunfold'" @click="isShow = !isShow" style="padding: 10px 25px 0 0; display: inline-block"> </i>
                </div>
            </div>
        </div>
        <div class="actors">
            <h3 style="padding: 15px; text-align: left;">演职人员</h3>
            <DetailSwiper1>
                <div class="swiper-slide" v-for="actor,index in actors" :key="index">
                    <img :src="actor.avatarAddress" />
                    <p>{{actor.role}}</p>
                    <p>{{actor.name}}</p>
                </div>
            </DetailSwiper1>
        </div>
        <div class="stills actors">
            <h3 style="padding: 15px;text-align: left;">剧照</h3>
            <DetailSwiper2>
                <div class="swiper-slide" v-for="photo,index in photos" :key="index" @click="showBig(index)">
                    <!-- <div :style="{backgroundImage:'url('+photo+')'}" style="width: 180px;
        height: 120px;background-size:cover;"></div> -->
                    <img :src="photo" />
                </div>
            </DetailSwiper2>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import DetailSwiper1 from './detail/DetailSwiper1.vue'
import DetailSwiper2 from './detail/DetailSwiper2.vue'
import DetailHeader from './detail/DetailHeader.vue'
import { http } from '@/api/http'

import { ImagePreview } from 'vant'

// 定义指令 v-top
Vue.directive('top',{
    inserted(e){
      e.style.display = 'none'
      window.onscroll = () => {
        if ((document.body.scrollTop || document.documentElement.scrollTop) > 50) {
             e.style.display = 'block'
       } else {
            e.style.display = 'none'
       }
      }
    },
    unbind () {
        window.onscroll = null
    }
})
export default {
    data() {
        return {
            flimlist: null,
            isShow: false
        }
    },
    components: {
        DetailSwiper1, DetailSwiper2, DetailHeader
    },
    mounted() {
        http({
            url: `/gateway?filmId=${this.$route.params.id}&k=7244563`,
            headers: {
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            this.flimlist = res.data.data.film
        })
        
    },
    computed: {
        actors () {
           return this.flimlist.actors || []
        },
        photos () {
            return this.flimlist.photos || []
        }
    },
    methods: {
        todedatil () {
            // history.back()
            this.$router.go(-1)
        },
        showBig(index) {
          ImagePreview({
            images: this.flimlist.photos,
            startPosition: index,
            loop: false,
            closeable: true,
            closeIconPosition: 'top-left'
          })
        }
    }
}
</script>

<style lang="scss" scoped>
.detail {
    overflow: hidden;
    height: 100%;
    background-color: #ddd;
    font-size: 13px;
    color: #797d82;
    .kon {
        display: block;
        position: fixed;
        top: 10px;
        left: 10px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        // padding-left: 5px;
        font-size: 25px;
        color: #333;
        z-index: 999;
        border-radius: 50%;
        background-color: #fff;
        background: rgba(252, 251, 251, 0.6)
    }
.upper {
height: 100%;
width: 100%;
margin-bottom: 10px;
background-color: #fff;
img {
    width: 100%;
    height: 250px;
 }
 .fliminfo {
    width: 100%;
    // height: 180px;
    padding: 15px;

    .category {
        padding: 8px 0;
    }
    .nation {
        padding: 8px 0;
    }
    .text {
        height: 30px;
        overflow: auto;
    }
    .synopsis {
        padding-right: 20px;
    }
 }
}
.actors {
    background-color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    margin-bottom: 10px;
    img {
        width: 85px;
        height: 85px;
    }
    p {
        padding-top: 6px;
        font-size: 14px;
    }
 }
.stills {
    padding-bottom: 100px;
    img {
        width: 180px;
        height: 120px;
    }
}
}



</style>