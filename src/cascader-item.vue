<template>
  <div class="cascader-item" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="(item,index) in items" 
           :key="index"
           @click="leftSelected = item">
        {{item.name}}
         <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <snow-cascader-item :items="rightItems" :height="height"></snow-cascader-item>
    </div>
  </div>
</template>

<script>
import Icon from './icon'
  export default {
    name: "SnowCascaderItem",
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      }
    },
    components: {
      Icon
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
@import "var";

.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;

  .left {
    height: 100%;
    padding: .3em 0;
  }

  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }

  .label {
    padding: .3em 1em;
    display: flex;
    align-items: center;
    min-width: 80px;

    .icon {
      margin-left: 1em;
      transform: scale(0.5);
    }
  }
}
</style>