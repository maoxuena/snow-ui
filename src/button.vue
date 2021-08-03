<template>
  <button class="s-button"
          :class="{[`icon-${iconPosition}`]:true}"
          @click="$emit('click')">
    <s-icon v-if="loading"
            class="icon loading"
            name="loading"></s-icon>
    <s-icon v-if="icon && !loading"
            class="icon"
            :name="icon"></s-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon'
export default {
  name: 'SnowButton',
  components: {
    's-icon': Icon
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  }

}
</script>
<style lang="scss" scoped>
@import "var";

.s-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  font: inherit;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background-color: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
    background-color: $button-bg;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.2em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.2em;
      margin-right: 0;
    }

    > .content {
      order: 1;
    }
  }

  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>