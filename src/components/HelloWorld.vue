<template>
  <div class="hello">
    <div class="content">
      <router-view></router-view>
    </div>
    <ul class="nav">
      <router-link tag="li" class="nav-item" to="/home" active-class="active">首页</router-link>
      <router-link tag="li" class="nav-item" to="/news" active-class="active">消息</router-link>
      <router-link tag="li" class="nav-item" to="/shoppingCart" active-class="active">购物车</router-link>
      <router-link tag="li" class="nav-item" to="/my" active-class="active">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.content {
  position: fixed;
  width: 100%;
  overflow: scroll;
  height: calc(100vh - 41px);
}
.nav {
  background: #eee;
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 40px;
  border-top: 1px solid #999;
  .nav-item {
    line-height: 40px;
    list-style: none;
    flex: 1;
    color: #333;
  }
  .active {
    color: #42b983;
  }
}
</style>
