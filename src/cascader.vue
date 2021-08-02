<template>
  <div class="cascader">
    <div class="trigger"
         @click="popoverVisible = !popoverVisible">
         {{ result }}
    </div>
    <div class="popover-wrapper"
         v-if="popoverVisible">
      <cascader-item class="popover"
                     :items="source"
                     :height="popoverHeight"
                     :selected="selected"
                     @update:selected="onUpdateSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
  name: 'SnowCascader',
  components: { CascaderItem },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      popoverVisible: false,
    }
  },
  computed: {
    result(){
      return this.selected.map((item) => item.name).join('/')
    }
  },
  methods: {
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";

.cascader {
  position: relative;
  height: $input-height;

  .trigger {
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }

  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    margin-top: 6px;
    @extend .box-shadow;
  }
}
</style>