<template>
  <div ref="popover"
       class="popover">
    <div ref="contentWrapper"
         class="content-wrapper"
         :class="{[`position-${position}`]:true}"
         v-if="visible">
      <slot name="content"
            :close="close"></slot>
    </div>
    <span ref="triggerWrapper"
          style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "SnowPopover",
  data () {
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    openEvent () {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent () {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }
    }
  },
  methods: {
    positionContent () {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      const { width, height, top, left } = triggerWrapper.getBoundingClientRect()
      const { height: contentHeight } = contentWrapper.getBoundingClientRect()
      let positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX + width / 2 },
        bottom: { top: top + window.scrollY + height, left: left + window.scrollX + width / 2 },
        left: { top: top + window.scrollY + (height - contentHeight) / 2, left: left + window.scrollX },
        right: { top: top + window.scrollY + (height - contentHeight) / 2, left: left + window.scrollX + width }
      }
      contentWrapper.style = `top: ${positions[this.position].top}px; left: ${positions[this.position].left}px;`
    },
    onClickDocument (e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return
      }
      if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
        return
      }
      this.close()
    },
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close () {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  },
  mounted () {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed () {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #ebeef5;
$border-radius: 4px;
$popover-background-color: #fff;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  padding: 1em 1.5em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background-color: $popover-background-color;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.1));
  background: white;
  max-width: 20em;
  word-break: break-all;

  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top {
    transform: translate(-50%, -100%);
    margin-top: -16px;

    &::before,
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      border-top-color: $border-color;
      border-bottom: none;
      top: 100%;
    }

    &::after {
      border-top-color: $popover-background-color;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    transform: translate(-50%, 0);
    margin-top: 16px;

    &::before,
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      border-bottom-color: $border-color;
      border-top: none;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: $popover-background-color;
      border-top: none;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -16px;

    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      border-left-color: $border-color;
      border-right: none;
      left: 100%;
    }

    &::after {
      border-left-color: $popover-background-color;
      border-right: none;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 16px;

    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      border-right-color: $border-color;
      border-left: none;
      right: 100%;
    }

    &::after {
      border-right-color: $popover-background-color;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style> 