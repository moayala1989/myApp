<template>
    <div class="banner">
      <div class="swiper-comtainer" ref="stillskon">
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
    new Swiper(this.$refs.stillskon, {
      slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true
      })
  }
}
</script>

<style lang="scss" scoped>
 .banner {
  overflow: hidden;
 }
</style>