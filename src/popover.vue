<template>
  <div ref="popover"
       class="popover" 
       @click="onClick">
    <div ref="contentWrapper" 
         class="content-wrapper" 
         v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">      
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
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) { 
          return 
        }
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) { 
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
    margin-top: -16px;
    transform: translate(-50%, -100%);
    padding: 1em 1.5em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background-color:  $popover-background-color;
    // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.1));
    background: white;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    &::before {
      border-top-color: $border-color;
      top: 100%;
    }
    &::after {
      border-top-color:  $popover-background-color;
      top: calc(100% - 1px);
    }
  }
</style> 