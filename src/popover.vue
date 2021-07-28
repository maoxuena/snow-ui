<template>
  <div ref="popover"
       class="popover" 
       @click="onClick">
    <div ref="contentWrapper" 
         class="content-wrapper" 
         v-if="visible">
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
      positionContent(){
        document.body.appendChild(this.$refs.contentWrapper) 
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style =`
          left: ${left + window.scrollX + width/2}px; 
          top: ${top + window.scrollY}px;
        `
      },
      onClickDocument(e){
        if (
          this.$refs.contentWrapper.contains(e.target) || 
          this.$refs.popover && 
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { 
          return 
        }
        this.close()
      },
      open(){
        this.visible = true
        this.$nextTick(() => {   
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        console.log('关闭')
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