<template>
  <div class="cascader" ref="cascader">
    <div class="trigger"
         @click="toggle">
         {{ result }}
    </div>
    <div class="popover-wrapper"
         v-if="popoverVisible">
      <cascader-item class="popover"
                     :items="source"
                     :height="popoverHeight"
                     :selected="selected"
                     :loadData="loadData"
                     @update:selected="onUpdateSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
  name: 'SnowCascader',
  components: { CascaderItem },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
    }
  },
  data () {
    return {
      popoverVisible: false,
    }
  },
  computed: {
    result(){
      return this.selected.map((item) => item.name).join('/')
    }
  },
  methods: {
    onClickDocument(e){
      let {cascader} = this.$refs
      let {target} = e
      if(cascader === target || cascader.contains(target)){
        return
      }
      this.close()
    },
    open(){
      this.popoverVisible = true
      this.$nextTick(() => {
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close(){
      this.popoverVisible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    toggle(){
      this.popoverVisible ? this.close() : this.open()
    },
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]
      }
      let complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          found = simplest(hasChildren, id)
          if (found) { return found }
          else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {
                return found
              }
            }
            return undefined
          }
        }
      }
      let updateSource = (result) => {
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = result       
        this.$emit('update:source', copy)
      }
      this.loadData && this.loadData(lastItem, updateSource) // 回调:把别人传给我的函数调用一下
      // 调回调的时候传一个函数,这个函数理论应该被调用
    }
  }
}
</script>

<style lang="scss" scoped>
@import "var";

.cascader {
  position: relative;
  height: $input-height;
  display: inline-block;

  .trigger {
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }

  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    margin-top: 6px;
    z-index: 9;
    @extend .box-shadow;
  }
}
</style>