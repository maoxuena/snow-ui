<template>
  <div class="popover" @click="xxx">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GuluPopover",
    data () {
      return {visible: false}
    },
    methods: {
      xxx () {
        this.visible = !this.visible
      }
    }
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding: 18px 20px;
      border: 1px solid #ebeef5;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
</style> 