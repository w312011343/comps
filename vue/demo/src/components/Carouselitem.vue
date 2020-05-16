<template>
    
  <div class="carouselItem" :class="{'hide':selectIndex !== index}">
    <img :src="data.img">
  </div>
</template>

<script>
export default {
  props:{
    data:Object,
    selectIndex:Number,
    index:Number
  }
}
</script>

<style>

</style>