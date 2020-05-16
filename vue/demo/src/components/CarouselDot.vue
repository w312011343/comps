<template>
  <div class="dotItem" :class="{'selected':selectIndex === index}" @click="changeFn">
  </div>
</template>

<script>
export default {
  props: {
    index:Number,
    selectIndex:Number
  },
  methods: {
    changeFn(){
      this.$parent.$emit('changeSelect',{index:this.index});
    }
  }
}
</script>

<style lang='less'>
  .dotItem{
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: white;
    margin-right: 10px;
    cursor: pointer;
    &.selected{
      background: rgb(231, 147, 11);
    }
  }
</style>