<template>
  <div
    class="s-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="s-slides-window" ref="window">
      <div class="s-slides-wrapper">
        <slot></slot>
      </div>
      <div class="s-slides-dots">
        <span @click="onClickPrev">
          <s-icon name="left"></s-icon>
        </span>
        <span
          v-for="n in childrenLength"
          :key="n"
          :class="{ active: selectedIndex === n - 1 }"
          @click="select(n - 1)"
        >
          {{ n }}
        </span>
        <span @click="onClickNext">
          <s-icon name="right"></s-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import SIcon from './icon'
export default {
  components: {
    SIcon,
  },
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
      timerId: undefined,
      startTouch: undefined
    }
  },
  mounted () {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.items.length
    this.lastSelectedIndex = this.selectedIndex
  },
  updated () {
    this.updateChildren()
  },
  computed: {
    selectedIndex () {
      let index = this.names.indexOf(this.selected)
      return index === -1 ? 0 : index
    },
    names () {
      return this.items.map(vm => vm.name)
    },
    items(){
      return this.$children.filter(vm => vm.$options.name === 'SnowSlidesItem')
    }
  },
  methods: {
    onMouseEnter () {
      this.pause()
    },
    onMouseLeave () {
      this.playAutomatically()
    },
    onTouchStart (e) {
      this.pause()
      if (e.touches.length > 1) {
        return
      }
      this.startTouch = e.touches[0]
    },
    onTouchMove () {

    },
    onTouchEnd (e) {
      let endTouch = e.changedTouches[0]
      let { clientX: x1, clientY: y1 } = this.startTouch
      let { clientX: x2, clientY: y2 } = endTouch
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
      let deltaY = Math.abs(y2 - y1)
      let rate = distance / deltaY
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1)
        } else {
          this.select(this.selectedIndex + 1)
        }
      }
      this.$nextTick(() => {
        this.playAutomatically()
      })
    },
    onClickPrev () {
      this.select(this.selectedIndex - 1)
    },
    onClickNext () {
      this.select(this.selectedIndex + 1)
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
        let newIndex = index + 1
        this.select(newIndex)
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
      if (index === -1) {
        index = this.names.length - 1
      }
      if (index === this.names.length) {
        index = 0
      }
      this.$emit('update:selected', this.names[index])
    },
    getSelected () {
      const first = this.items[0]
      const selected = this.selected || first.name
      return selected
    },
    updateChildren () {
      const selected = this.getSelected()
      this.items.forEach((vm) => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.timerId) {
          if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
            reverse = true
          }
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
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
      margin: 0 8px;
      font-size: 12px;

      &:hover {
        cursor: pointer;
      }

      &.active {
        background-color: black;
        color: #fff;

        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>