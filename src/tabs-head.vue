<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line"
         ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SnowTabsHead',
  inject: ['eventBus'],
  created () {
    this.eventBus.$on('update:selected', (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.transform = `translateX(${left - 20}px)`
      // this.$refs.line.style.left = `${left - 20}px`
    })
  }
}
</script>
<style lang="scss" scoped>
@import "var";

.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;

  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style> 