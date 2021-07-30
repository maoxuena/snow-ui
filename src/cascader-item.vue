<template>
  <div class="cascader-item">
    <div class="left">
      <div class="label" v-for="(item,index) in items" 
           :key="index"
           @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <snow-cascader-item :items="rightItems"></snow-cascader-item>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SnowCascaderItem",
    props: {
      items: {
        type: Array
      }
    },
    data () {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems () {
        return this.leftSelected?.children
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cascader-item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .left {
      border: 1px solid red;
    }
    
    .right {
      margin-top: -1px;
    }
  }
</style>