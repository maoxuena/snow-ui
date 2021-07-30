<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-item :items="source"></cascader-item>
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
    },
    data () {
      return {
        popoverVisible: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "var";

.cascader{
  .trigger{
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }

  .popover{
    border: 1px solid red;
    height: 200px;
    width: 100px;
  }
}
</style>