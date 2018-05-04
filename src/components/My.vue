<template>
  <div class="hello">
    <h3>我的</h3>
    <h3 @click="options.show = true">点我弹出模态框</h3>
    <modal :options="options" @a="aa" @b="bb">
      <h4>slot测试</h4>
    </modal>
    <myTable :op="op1"></myTable>
  </div>
  
</template>

<script>
import modal from "@/components/Modal";
import myTable from "@/components/table";
export default {
  name: "My",
  components: {
    modal,myTable
  },
  data() {
    return {
      options: {
        title: "确定删除吗?",
        show: false
      },
      op1: {
        url: "list",
        kv: {
          编号: "name",
          名称: "id"
        },
        pgDirection:'left'
      }
    };
  },
  methods: {
    aa() {
      console.log("删除成功！");
    },
    bb() {
      console.log("操作取消");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
