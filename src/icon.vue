<template>
  <svg class="s-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  props: ['name']
}
</script>

<style lang="scss" scoped>
.s-icon {
  width: 1em;
  height: 1em;
}
</style>