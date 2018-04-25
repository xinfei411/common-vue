<template>
  <div class="hello">
    首页
    <div>
      {{id|id(6,3)}}
    </div>
    <p id='name'>{{name}}</p>
    <button @click='setName'>更换姓名</button>
    
  </div>
</template>

<script>
let si = null;
export default {
  name: "Home",
  data() {
    return {
      id: "610430198808062555",
      name: "李玉霞",
    };
  },
  created() {
    this.$post("getName", {}).then(function(data) {
      console.log(data);
    });
  },
  mounted() {
    si = setInterval(() => {
      console.log(1);
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(si);
  },
  beforeUpdate() {
    console.log(document.querySelector("#name").innerHTML);
  },
  updated() {
    console.log(document.querySelector("#name").innerHTML);
  },

  methods: {
    setName() {
      let vm = this;
      vm.name = "姚文强";
      vm.$forceUpdate();
      vm.$nextTick(() => {
        console.log(document.querySelector("#name").innerHTML);
      });
      console.log(document.querySelector("#name").innerHTML);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
