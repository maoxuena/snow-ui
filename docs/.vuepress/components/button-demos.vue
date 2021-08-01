<template>
  <div>
    <component v-if="snowButton"
               :is="snowButton">默认按钮</component>
    <component v-if="snowButton"
               :is="snowButton"
               icon="settings">图标按钮</component>
    <component v-if="snowButton"
               :is="snowButton"
               :loading="true">加载中按钮</component>
    <component v-if="snowButton"
               :is="snowButton"
               disabled>禁用按钮</component>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data () {
    return {
      snowButton: null,
      content: `
          <s-button>默认按钮</s-button>
          <s-button icon="settings">默认按钮</s-button>
          <s-button :loading="true">默认按钮</s-button>
          <s-button disabled>默认按钮</s-button>
        `.replace(/\t| +/g, '').trim()
    }
  },
  mounted () {
    import('../../../src/button').then(module => {
      this.snowButton = module.default
    })
  }
}
</script> 