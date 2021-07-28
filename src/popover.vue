<template>
  <div ref="popover"
       class="popover" 
       @click="onClick">
    <div ref="contentWrapper" 
         class="content-wrapper" 
         :class="{[`position-${position}`]:true}"
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
    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      positionContent(){
        const { contentWrapper, triggerWrapper } = this.$refs
        document.body.appendChild(contentWrapper) 
        let {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        if(this.position === 'top'){
          contentWrapper.style =`
            left: ${left + window.scrollX + width/2}px; 
            top: ${top + window.scrollY}px;
          `
        }else if(this.position === 'bottom'){
          contentWrapper.style =`
            left: ${left + window.scrollX + width/2}px; 
            top: ${top + window.scrollY + height}px;
          `
        }else if(this.position === 'left'){
          let {height: contentHeight} = contentWrapper.getBoundingClientRect()
          contentWrapper.style =`
            left: ${left + window.scrollX}px; 
            top: ${top + window.scrollY + (height - contentHeight)/2}px;
          `
        }else if(this.position === 'right'){
          let {height: contentHeight} = contentWrapper.getBoundingClientRect()
          contentWrapper.style =`
            left: ${left + window.scrollX + width}px; 
            top: ${top + window.scrollY + (height - contentHeight)/2}px;
          `
        }
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
    }

    &.position-top{
      transform: translate(-50%, -100%);
      margin-top: -16px;
      
      &::before, &::after {
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
    
    &.position-bottom{
      transform: translate(-50%, 0);
      margin-top: 16px;
      
      &::before, &::after {
        left: 50%;
        transform: translate(-50%,-50%);
      }

      &::before {
        border-bottom-color: $border-color;
        top: -11px;
      }
      
      &::after {
        border-bottom-color:  $popover-background-color;
        top: -10px;
      }
    } 
    
    &.position-left{
      transform: translateX(-100%);
      margin-left: -16px;
      
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        border-left-color: $border-color;
        left: 100%;
      }
      
      &::after {
        border-left-color:  $popover-background-color;
        left: calc(100% - 1px);
      }
    }
    
    &.position-right{
      margin-left: 16px;
      
      &::before, &::after {
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        border-right-color: $border-color;
        right: 100%;
      }
      
      &::after {
        border-right-color:  $popover-background-color;
        right: calc(100% - 1px);
      }
    }
  }
</style> 