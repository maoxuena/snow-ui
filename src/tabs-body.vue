<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'SnowTabsBody',
    inject: ['eventBus'],
    created(){
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
    }
  }
</script>
<style>
  .tabs-body {
  }
</style> 