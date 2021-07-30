<template>
  <div class="cascader">
    <div class="trigger"></div>
    <slot></slot>
    <div class="popover">
      <div v-for="(item, key) in source" :key="key">
        <cascader-item :sourceItem="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'
  export default {
    name:'SnowCascader',
    components: {CascaderItem},
    props: {
      source: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "var";

.cascader{
}
</style>