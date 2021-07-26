<template>
  <div class="row"
       :class="rowClass"
       :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SnowRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator (value) {
        return ['left', 'center', 'right'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    rowClass () {
      let { align } = this
      return [align && `align-${align}`]
    },
    rowStyle () {
      let { gutter } = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    }
  },
  mounted () {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-center {
    justify-content: center;
  }

  &.align-right {
    justify-content: flex-end;
  }
}
</style>