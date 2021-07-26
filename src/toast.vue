<template>
  <div class="toast" 
       :class="toastClasses" 
       ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else 
           v-html="$slots.default[0]"></div>
    </div>
    <div class="line" 
         ref="line"></div>
    <span class="close" 
          v-if="closeButton" 
          @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name:'SnowToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default () {
        return {
          text: '关闭', 
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type:String,
      default:'top',
      validator(value){
        console.log(value)
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  mounted(){
    // this.execAutoClose()
    this.updateStyles()
  },
  computed: {
    toastClasses(){
      return {
        [`position-${this.position}`]:true
      }
    }
  },
  methods:{
    updateStyles () {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    execAutoClose () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close(){
      this.$el.remove()
      this.$emit('close')
      this.$destroy
    },
    log(){
      console.log('测试')
    },
    onClickClose () {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this) // this === toast实例
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes fade-top-in{
  0% {opacity: 0; transform: translate(-50%, -100%);}
  100% {opacity: 1; transform: translate(-50%, 0);}
}
@keyframes fade-middle-in{
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes fade-bottom-in{
  0% {opacity: 0; transform: translate(-50%, 100%);}
  100% {opacity: 1; transform: translate(-50%, 0);}
}
.toast {
  font-size: $font-size; 
  min-height: $toast-min-height; 
  line-height: 1.8;
  position: fixed;
  left: 50%;
  display: flex;
  color: white;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 16px;

  .message {
    padding: 8px 0;
  }

  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  
  .line {
    border-left: 1px solid #666;
    margin-left: 16px;
  }

  &.position-top{
    animation: fade-top-in 1s;
    top: 0; 
    transform: translateX(-50%);
  }

  &.position-middle{
    animation: fade-middle-in 1s;
    top: 50%; 
    transform: translate(-50%, -50%);
  }

  &.position-bottom{
    animation: fade-bottom-in 1s;
    bottom: 0; 
    transform: translateX(-50%);
  }
}
</style>