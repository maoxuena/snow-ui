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
  import Button from '../../../src/button'
  export default {
    components: {
      's-button': Button
    },
    data () {
      return {
        content: `
          <s-button>默认按钮</s-button>
          <s-button icon="settings">默认按钮</s-button>
          <s-button :loading="true">默认按钮</s-button>
          <s-button disabled>默认按钮</s-button>
        `
      }
    }
  }
</script> 