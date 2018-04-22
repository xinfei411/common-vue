<template>
  <div class="hello">
    首页
    <div>
      {{id|id(6,3)}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      id: '610430198808062555'
    }
  },
  created(){
    this.$post('getName',{}).then(function(data){
      console.log(data)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
