<template>
  <div class="hello">
    购物车
    <div v-for='(item,index) in goods' :key="index">
      <div>{{item.name}} {{item.price}} <input v-model="item.num"></div>
    </div>
    <div>合计:{{totalPrice}}</div>
    <button @click='changeArr'>改变数组</button>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      goods: [
        { name: "BB霜", price: 2300, num: 1 },
        { name: "乳液", price: 100, num: 1 },
        { name: "爽肤水", price: 200, num: 1 },
        { name: "眼霜", price: 400, num: 1 }
      ]
    };
  },
  computed: {
    totalPrice() {
      let vm = this;
      return vm.goods.reduce((a, b) => {
        return a + b.price * b.num;
      }, 0);
    }
  },
  watch: {
    goods: {
      handler(oldValue, newValue) {
        console.log(oldValue, newValue);
      },
      deep: true
    }
  },
  methods:{
    changeArr(){
      let vm=this;
      console.log('ywq')
      vm.goods[1]={ name: "乳液", price: 100, num: 2}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
