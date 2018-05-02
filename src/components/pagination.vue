
<template>
<!-- let option={
  pageSize:'',
  pageNum:''
};
let pageChange(NewIndex,OldIndex){

}
<pagination :option='option' @change='pageChange'></pagination> -->
  <div class="pagination">
    <div class="pagination-item" :class='{selected:item==nowIndex}' @click='changePage(item)' v-for='item in items'>{{item}}</div>
  </div>
</template>
<style lang='scss' scoped>
  .pagination{
    display: flex;
    .pagination-item{
      flex:1;
      padding: 20px;
      color:#999;
      border:1px solid #ccc;
    }
    .pagination-item.selected{
      background: green;
      color: #fff;
    }
  }
</style>
<script>
export default {
  name:'Pagination',
  data(){
    return{
      items:[1,2,3,4,5],
      nowIndex:1
    }
  },
  methods:{
    changePage(item){
      let vm =this;
      if(item != vm.nowIndex){
        vm.nowIndex=item;
        vm.$emit("change",vm.nowIndex);
        console.log(vm.isRight())
        if(vm.isRight()){
          vm.items=[vm.nowIndex-2,vm.nowIndex-1,vm.nowIndex,vm.nowIndex+1,vm.nowIndex+2]
        };
      }
    },
    isRight(){
      let vm =this;
      let length = vm.items.length;
      let middle = (vm.items[0]+vm.items[length-1])/2;
      return vm.nowIndex > middle
    }
  }
}
</script>


