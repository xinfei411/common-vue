<template>
  <div class="hello">消息
    <router-link to='InfiniteScrollTest'>跳转到无限加载</router-link>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
