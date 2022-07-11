<template>
    <div class="banner">
      <div class="swiper-comtainer" ref="actorskon">
        <div class="swiper-wrapper">
            <slot></slot>
        
        </div>
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted() {
    new Swiper(this.$refs.actorskon, {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        // autoplay: {
        //   delay: 2000
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      })
  }
}
</script>

<style lang="scss" scoped>
 .banner {
  overflow: hidden;
 }
</style>