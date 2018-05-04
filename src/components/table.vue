
<template>
  <div class="table">

    <div class='head'>
      <div class="col" v-for='item in Object.keys(op.kv)' :key="item">{{item}}</div>
    </div>

    <div class='row' v-for='(item,index) in list' :key="index">
      <div class="col" v-for='(v,k,i) in item' :key="k">{{item[op.kv[Object.keys(op.kv)[i]]]}}</div>
    </div>
    <div class="pg-wrap" :style="pgDirection">
      <Pagination @change='cg'></Pagination>
    </div>
    
  </div>
</template>

<script>
import Pagination from "@/components/pagination";
export default {
  name: "myTable",
  components: {
    Pagination
  },
  data() {
    return {
      list: [],

    };
  },
  computed: {
    pgDirection() {
      let vm = this;
      if(vm.op.pgDirection == 'right'){
        return {justifyContent:'flex-end'}
      }else{
        return {justifyContent:'flex-start'}
      };
    }
  },
  props: ["op"],
  created() {
    let vm = this;
    vm.$get(vm.op.url, { size: 10, num: 1 }).then(function(data) {
      console.log(data);
      vm.list = data;
    });
  },
  methods: {
    cg(now) {
      let vm = this;
      vm.$get(vm.op.url, { size: 10, num: now }).then(function(data) {
        vm.list = data;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.table {
  .head {
    display: flex;
    .col {
      border: 1px solid #ccc;
      background: #000;
      color: #fff;
      flex: 1;
      padding: 20px;
    }
  }
  .row {
    display: flex;
    .col {
      border: 1px solid #ccc;
      flex: 1;
      padding: 10px;
    }
  }
  .pg-wrap {
    display: flex;
    justify-content: flex-end;
  }
}
</style>


