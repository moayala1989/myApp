<template>
    <div class="banner">
      <div class="swiper-comtainer" ref="kon">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>

export default {}
</script>

<style scoped lang="scss">
.banner {
  overflow: hidden;
  .swiper-comtainer{
    width: 100%;
    height: 200px;
    background-color: red;
    
    
  }
}
</style>