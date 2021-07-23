<template>
  <div class="col" :class="[span &&`col-${span}`, offset && `offset-${offset}`]"
  :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'SnowCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data(){
    return{
      gutter:0
    }
  }
}
</script>
<style lang="scss" scoped>
.col{
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n}{
      width: ($n/24)*100%
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n}{
      margin-left: ($n/24)*100%
    }
  }
}
</style>