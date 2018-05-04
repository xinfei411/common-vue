
<template>
  <div class="pagination">
    <div class="pagination-item" v-if="totalPage<=7" :class="{selected:item==nowIndex}" 
    @click="changePage(item)" v-for="item in totalPage" :key="item">{{item}}</div>
    
    <!-- <div>设定的格子只能渲染5个数</div> -->
    <div class="pagination-item" v-if="totalPage>7" :class="{selected:nowIndex==1}" @click="changePage(1)">1</div>
    <div class="more" v-if="start!=2" @click="getMoreL"
     @mousemove="changeLeftIconA" 
     @mouseout="changeLeftIconE">{{leftEllipsis}}</div>
    <div class="pagination-item" v-if="totalPage>7" :class="{selected:middleItem==nowIndex}"
       @click="changePage(middleItem)" v-for="middleItem in middleItems" :key="middleItem">{{middleItem}}</div>
    <div @click="getMoreR" class="more" v-if="start < totalPage-5" @mousemove="changeRightIconA" @mouseout="changeRightIconE">{{rightEllipsis}}</div>
    <div class="pagination-item" v-if="totalPage>7" :class="{selected:totalPage==nowIndex}" @click="changePage(totalPage)">{{totalPage}}</div>

    
  </div>
</template>

<script>
const middleLength = 5;
export default {
  name: "Pagination",
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      middleItems: [2, 3, 4, 5, 6],
      total: 200,
      pageSize: 10,
      nowIndex: 1,
      start: 2,
      rightEllipsis: "...",
      leftEllipsis: "..."
    };
  },
  computed: {
    totalPage() {
      let vm = this;
      return vm.total / vm.pageSize;
    }
  },
  methods: {
    changePage(item) {
      let vm = this;
      if (item != vm.nowIndex) {
        vm.nowIndex = item;
        vm.$emit("change", vm.nowIndex);
        // console.log(vm.isRight())
        // if (vm.isRight()) {
        if (vm.nowIndex == 1) {
          vm.middleItems = [2, 3, 4, 5, 6];
          vm.start = 2;
        } else if (vm.nowIndex == vm.totalPage) {
           vm.middleItems = [
            vm.totalPage - 5,
            vm.totalPage - 4,
            vm.totalPage - 3,
            vm.totalPage - 2,
            vm.totalPage - 1
          ];
          vm.start = vm.totalPage - 5;
        } else if (
          vm.totalPage > 7 &&
          vm.start + middleLength > 8 &&
          vm.nowIndex + 2 < vm.totalPage
        ) {
          vm.middleItems = [
            vm.nowIndex - 2,
            vm.nowIndex - 1,
            vm.nowIndex,
            vm.nowIndex + 1,
            vm.nowIndex + 2
          ];
          vm.start = vm.nowIndex - 2;
        } else if (
          vm.totalPage > 7 &&
          vm.start + middleLength > 8 &&
          vm.nowIndex + 2 >= vm.totalPage
        ) {
          vm.middleItems = [
            vm.totalPage - 5,
            vm.totalPage - 4,
            vm.totalPage - 3,
            vm.totalPage - 2,
            vm.totalPage - 1
          ];
          vm.start = vm.totalPage - 5;
        } else if (
          vm.totalPage > 7 &&
          vm.start - middleLength <= 0 &&
          vm.nowIndex - middleLength <= 0
        ) {
          vm.middleItems = [2, 3, 4, 5, 6];
          vm.start = 2;
        }

        // }
      }
    },
    isRight() {
      let vm = this;
      let length = vm.items.length;
      let middle = (vm.items[0] + vm.items[length - 1]) / 2;
      return vm.nowIndex > middle;
    },
    changeRightIconA() {
      let vm = this;
      vm.rightEllipsis = ">>";
    },
    changeRightIconE() {
      let vm = this;
      vm.rightEllipsis = "...";
    },
    changeLeftIconA() {
      let vm = this;
      vm.leftEllipsis = "<<";
    },
    changeLeftIconE() {
      let vm = this;
      vm.leftEllipsis = "...";
    },
    getMoreR() {
      let vm = this;
      if (vm.start - 1 == 1) {
        vm.nowIndex = vm.start + middleLength - 1;
        vm.middleItems = [
          vm.nowIndex - 2,
          vm.nowIndex - 1,
          vm.nowIndex,
          vm.nowIndex + 1,
          vm.nowIndex + 2
        ];
        vm.start = vm.nowIndex - 2;
      } else if (vm.start + middleLength + 2 <= vm.totalPage) {
        vm.nowIndex = vm.nowIndex + middleLength;
        vm.middleItems = [
          vm.nowIndex - 2,
          vm.nowIndex - 1,
          vm.nowIndex,
          vm.nowIndex + 1,
          vm.nowIndex + 2
        ];
        vm.start = vm.nowIndex - 2;
      } else {
        vm.nowIndex = vm.totalPage;
        vm.middleItems = [
          vm.nowIndex - 5,
          vm.nowIndex - 4,
          vm.nowIndex - 3,
          vm.nowIndex - 2,
          vm.nowIndex - 1
        ];
        vm.start = vm.totalPage - 5;
      }
    },
    getMoreL() {
      let vm = this;
      if (vm.start + middleLength >= vm.totalPage) {
        vm.nowIndex = vm.start;
        vm.middleItems = [
          vm.nowIndex - 2,
          vm.nowIndex - 1,
          vm.nowIndex,
          vm.nowIndex + 1,
          vm.nowIndex + 2
        ];
        vm.start = vm.nowIndex - 2;
      } else if (vm.start - 2 > 1) {
        vm.nowIndex = vm.nowIndex - middleLength;
        vm.middleItems = [
          vm.nowIndex - 2,
          vm.nowIndex - 1,
          vm.nowIndex,
          vm.nowIndex + 1,
          vm.nowIndex + 2
        ];
        vm.start = vm.nowIndex - 2;
      } else if (vm.start - 2 <= 1) {
        vm.nowIndex = 1;
        vm.middleItems = [
          vm.nowIndex + 1,
          vm.nowIndex + 2,
          vm.nowIndex + 3,
          vm.nowIndex + 4,
          vm.nowIndex + 5
        ];
        vm.start = vm.nowIndex + 1;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  margin-top: 20px;
  .pagination-item {
    flex: 1;
    color: #999;
    border: 1px solid #ccc;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
  }
  .pagination-item.selected {
    background: green;
    color: #fff;
  }
  .more {
    padding: 20px;
    font-size: 20px;
  }
  .ellipsis {
    padding: 15px;
    font-size: 20px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
}
</style>


