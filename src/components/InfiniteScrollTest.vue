<template>
  <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="(item,index) in list" :key="index">{{ item }}</li>
  </ul>
</template>
<script>
import Vue from "vue";
import { InfiniteScroll } from "mint-ui";
import im from "@/mixins/infiniteScrollMixins";
console.log(im);
Vue.use(InfiniteScroll);
export default {
  name: "InfiniteScrollTest",
  mixins: [im],
  data() {
    return {
      url:'list',
      size:50,
      num:1
    };
  },
  methods: {
  }
};
</script>
<style scoped>
ul {
  height: 100vh;
  overflow-y: auto;
  margin: 0;
}
</style>


