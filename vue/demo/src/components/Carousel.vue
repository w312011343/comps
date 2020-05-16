<template>
  <div class="carousel">
    <div class="itemWrap">
      <Carouselitem
        v-for="(key, index) in carousel.data"
        :key="index"
        :data="key"
        :index="index"
        :selectIndex="carousel.selectIndex"
      ></Carouselitem>
    </div>
    <div class="dotWrap">
      <CarouselDot
        v-for="(key, index) in carousel.data"
        :key="index"
        :index="index"
        :selectIndex="carousel.selectIndex"
      ></CarouselDot>
    </div>
    <div class="arrowWrap"></div>
  </div>
</template>

<script>
import Carouselitem from "../components/Carouselitem.vue";
import CarouselDot from "../components/CarouselDot.vue";
export default {
  props: {
    carousel: Object,
  },
  data() {
    return {
      interVal: null,
    };
  },
  components: {
    Carouselitem,
    CarouselDot,
  },
  mounted() {
    this.interFn();
    this.$on("changeSelect", (data) => {
      clearInterval(this.interVal);
      this.carousel.selectIndex = data.index;
      this.interFn();
    });
  },
  destroyed() {
    clearInterval(this.interVal);
  },
  methods: {
    interFn() {
      this.interVal = setInterval(() => {
        let index = this.carousel.selectIndex;
        index++;
        if (index >= this.carousel.data.length) {
          index = 0;
        }
        this.carousel.selectIndex = index;
      }, this.carousel.timeout);
    },
  },
};
</script>

<style lang="less">
.carousel {
  position: relative;
  .itemWrap {
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    .hide {
      display: none !important;
    }
    .carouselItem {
      width: 100%;
      font-size: 0;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
  .dotWrap {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
  }
}
</style>
