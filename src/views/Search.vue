<template>
  <div>
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @cancel="onCancel"
  />
  <van-list>
      <van-cell v-for="cinema in searchList" :key="cinema.cinemaId" class="cinemaaa">
        
          <div class="left">
            <p class="cinemaname">{{cinema.name}}</p>
            <span>{{cinema.address}}</span>
          </div>
       </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, List, Cell} from 'vant'
import { mapActions, mapState } from 'vuex'

Vue.use(Search).use(List).use(Cell);
export default {
    data() {
        return {
            value: '',
        }
    },
  computed:{
      ...mapState('citycinemabransh',['cinemaList']),
      ...mapState('nowplayingbransh',['cityName','cityId']), 
      searchList(){
        if (this.value.trim() === '')  return []
       return this.cinemaList.filter(item => item.name.includes(this.value.trim()))
      }
  },
  methods: {
    ...mapActions('citycinemabransh', ['getCinemaList']),
    onCancel(){
        this.$router.back()
    }
  },
  mounted() {
    if (this.cinemaList.length === 0) {
        this.getCinemaList(this.cityId)
      }
  }
}
</script>

<style lang="scss" scoped>
.van-search {
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
   z-index: 166;
}
.van-list {
    margin-top: 60px;
}

</style>