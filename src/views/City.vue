<template>
  <div v-if="newCities">
    <van-index-bar :index-list="cityIndex">
        <div v-for="(item,index) in newCities" :key="index">
            <van-index-anchor :index="item.type" />
            <van-cell :title="city.name" v-for="(city,index) in item.list" :key="index" @click="changeCitys(city)"/>
        </div>

    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell } from 'vant'

Vue.use(IndexBar).use(IndexAnchor).use(Cell)
import {http} from '@/api/http';
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            newCities: null
        }
    },
    mounted() {

        http({
            url: '/gateway?k=4128628',
            headers: {
                'X-Host': 'mall.film-ticket.city.list'
            }
            }).then(res => {
            this.handleCity(res.data.data.cities)
        })
    },
    methods: {
       handleCity(cities){
        let letterArr = []
        let newCities = []
        for (let code = 65; code < 91; code++) {
            letterArr.push(String.fromCharCode(code))
        }
        letterArr.forEach(letter => {
            let list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
            if (list.length > 0) {
                newCities.push({
                    type: letter,
                    list: list
                })
            }
        })
        this.newCities = newCities
       },
       ...mapActions('nowplayingbransh', ['changeCity']),
       changeCitys(city) {
        this.changeCity(city)
        this.$router.back()
       }
    },
    computed:{
        cityIndex(){
            return  this.newCities.map(item => item.type)
        }
    }
}
</script>

<style>

</style>