<template>
    <div>
        <van-list
         v-model="loading"
         :finished="finished"
         finished-text="没有更多了"
         @load="onLoad"
         :immediate-check="false"
        >
            <van-cell v-for="data in datalist" :key="data.filmId" @click="handleclick(data.filmId)">
                <img :src="data.poster" alt="">
                <div>{{ data.name }} <span>{{ data.filmType.name }}</span></div>
                <p>演职人员：{{data.actors | actorfilter}}</p>
            </van-cell>
       </van-list>
    </div>
</template>

<script>
import Vue from 'vue';
import { List, Cell } from 'vant'
import {mapState} from 'vuex'

Vue.use(List)
Vue.use(Cell)
import {http} from '@/api/http'
export default ({
    data() {
        return {
            datalist: [],
            loading: false, // 是否正在加载中,防止多次触发
            finished: false, // 是否已经结束
            num: 1,
            total: 0
        }
    },
    computed: {
        ...mapState('nowplayingbransh',['cityName','cityId'])
    },
    methods: {
        handleclick (id) {
            this.$router.push({
                name: 'detail',
                params: {
                    id
                }
            })
        },
        onLoad(){
            if (this.datalist.length === this.total && this.datalist.length !== 0) {
                this.finished = true // 结束
                return
            }
            console.log('到底了');
             // ajax 请求页面数据
             // 合并新数据到老数据
             // 修改 loading 为 false
            this.num++
            http({
              url:`/gateway?cityId=${this.cityId}&pageNum=${this.num}&pageSize=10&type=1&k=6372684`, 
              headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                } 
            }).then(res => {
                this.datalist = [...this.datalist, ...res.data.data.films]
                
                this.loading = false
            })
        } 
    },
    mounted() {
        http({
              url:`/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=6372684`, 
              headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                } 
            }).then(res => {
                this.datalist = res.data.data.films
                this.total = res.data.data.total
            })

    },
    filters: {
        actorfilter(val){
            if(val === undefined) return '暂无主演'
          return  val.map(item => item.name).join(',') 
        }
    }
})
</script>

<style lang="scss" scoped>
 .van-cell {

    img {
        float: left;
        width: 70px;
    }
    p {
        white-space: nowrap;
        overflow: hidden;
        width: 200px;
        text-overflow: ellipsis
    }
 }
</style>
