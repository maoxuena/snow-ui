<template>
  <div class="popover" 
       @click.stop="xxx">
    <div ref="contentWrapper" 
         class="content-wrapper" 
         v-if="visible" 
         @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">      
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
    methods: {
      xxx () {
        this.visible = !this.visible
        if (this.visible === true) {
          this.$nextTick(() => {   
            document.body.appendChild(this.$refs.contentWrapper) 
            let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            console.log(width, height, top, left)
            this.$refs.contentWrapper.style =`
              left: ${left + window.scrollX + width/2}px; 
              top: ${top + window.scrollY}px;
            `
            let eventHandler = () => {
              this.visible = false
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
          })
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    transform: translate(-50%, -100%);
    padding: 18px 20px;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
</style> 