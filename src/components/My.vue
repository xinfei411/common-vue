<template>
  <div class="hello">
    <h3>我的</h3>
    <h3 @click="options.show = true">点我弹出模态框</h3>
    <modal :options="options" @a="aa" @b="bb"></modal>
  </div>
  
</template>

<script>
import modal from '@/components/Modal'
export default {
  name: 'My',
  components:{
    modal
  },
  data () {
    return {
      options:{
        title:'确定删除吗?',
        show:false
      }
    }
  },
  methods:{
    aa(){
      console.log('删除成功！')
    },
    bb(){
      console.log('操作取消')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
