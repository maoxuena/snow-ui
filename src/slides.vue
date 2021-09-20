<template>
  <div class="s-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="s-slides-window" ref="window">
      <div class="s-slides-wrapper">
        <slot></slot>
      </div>
      <div class="s-slides-dots">
        <span
          v-for="n in childrenLength"
          :key="n"
          :class="{ active: selectedIndex === n - 1 }"
          @click="select(n - 1)"
        >
          {{ n }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined
    }
  },
  mounted () {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length
    this.lastSelectedIndex = this.selectedIndex
  },
  updated () {
    this.updateChildren()
  },
  computed: {
    selectedIndex () {
      return this.names.indexOf(this.selected) || 0
    },
    names () {
      return this.$children.map(vm => vm.name)
    }
  },
  methods: {
    onMouseEnter () {
      this.pause()
    },
    onMouseLeave () {
      this.playAutomatically()
    },
    playAutomatically () {
      // setInterval(() => {
      //   if (index === this.names.length) {
      //     index = 0
      //   }
      //   this.$emit('update:selected', this.names[index + 1])
      //   index++
      // }, 3000)

      // setTimeout模拟setInterval
      if (this.timerId) {
        return
      }
      let run = () => {
        const index = this.names.indexOf(this.getSelected())
        let newIndex = index - 1
        if (newIndex === -1) {
          newIndex = this.names.length - 1
        }
        if (newIndex === this.names.length) {
          newIndex = 0
        }
        this.select(newIndex)
        newIndex--
        this.timerId = setTimeout(run, 5000)
      }
      this.timerId = setTimeout(run, 5000)
    },
    pause () {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    select (index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    },
    getSelected () {
      const first = this.$children[0]
      const selected = this.selected || first.name
      return selected
    },
    updateChildren () {
      const selected = this.getSelected()
      this.$children.forEach((vm) => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
          reverse = false
        }
        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
          reverse = true
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.s-slides {
  border: 1px solid #384676;

  &-window {
    overflow: hidden;
  }

  &-wrapper {
    position: relative;
  }

  &-dots {
    > span {
      &.active {
        background-color: #f00;
      }
    }
  }
}
</style>