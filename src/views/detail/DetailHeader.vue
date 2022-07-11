<template>
  <div>
    {{flimname}}
  </div>
</template>

<script>
export default {
    props: ['flimname']
}
</script>

<style lang="scss" scoped>
div {
    position:fixed;
    top: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    text-align: center;
    background-color: #fff;
}
</style>