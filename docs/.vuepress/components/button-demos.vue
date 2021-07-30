<template>
  <div>
    <s-button>默认按钮</s-button>
    <s-button icon="settings">图标按钮</s-button>
    <s-button :loading="true">加载中按钮</s-button>
    <s-button disabled>禁用按钮</s-button>
    <pre>
      <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        content: `
          <s-button>默认按钮</s-button>
          <s-button icon="settings">默认按钮</s-button>
          <s-button :loading="true">默认按钮</s-button>
          <s-button disabled>默认按钮</s-button>
        `
      }
    },
    mounted () {
      import('../../../src/button').then(module => {      
        Vue.component('s-button', module.SnowButton)
      })
    }
  }
</script> 