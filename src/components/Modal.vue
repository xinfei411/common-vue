<template>
  <div class="modal" v-if="options.show">
    <div class="alert">
      <h3>{{options.title}}</h3>
      <div>
        <button @click="yes">确定</button>
        <button @click="no">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props:['options'],
  data() {
    return {
    };
  },
  methods:{
    yes(){
      this.options.show=false;
      this.$emit('a');
    },
    no(){
      this.options.show=false;
      this.$emit('b');
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.modal{
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top:0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);
  .alert{
    padding: 50px;
    border-radius: 8px;
    border:1px solid red;
  }
}

</style>
