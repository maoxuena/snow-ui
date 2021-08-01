import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Cascader from './cascader'
import CascaderItem from './cascader-item'
import Col from './col'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Icon from './icon'
import Input from './input'
import Layout from './layout'
import plugin from './plugin'
import Popover from './popover'
import Row from './row'
import Sider from './sider'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Toast from './toast'

Vue.component('s-button-group', ButtonGroup)
Vue.component('s-button', Button)
Vue.component('s-cascader-item', CascaderItem)
Vue.component('s-cascader', Cascader)
Vue.component('s-col', Col)
Vue.component('s-collapse-item', CollapseItem)
Vue.component('s-collapse', Collapse)
Vue.component('s-content', Content)
Vue.component('s-footer', Footer)
Vue.component('s-header', Header)
Vue.component('s-icon', Icon)
Vue.component('s-input', Input)
Vue.component('s-layout', Layout)
Vue.component('s-popover', Popover)
Vue.component('s-row', Row)
Vue.component('s-sider', Sider)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-pane', TabsPane)
Vue.component('s-tabs', Tabs)
Vue.component('s-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading: false,
    message: 'hi',
    selectedTab: 'tab1',
    selectedTabSingle: ['1', '3'],
    source: [{
      name: '浙江',
      children: [
        {
          name: '杭州',
          children: [
            { name: '上城' },
            { name: '下城' },
            { name: '江干' },
          ]
        },
        {
          name: '嘉兴',
          children: [
            { name: '南湖' },
            { name: '秀洲' },
            { name: '嘉善' },
          ]
        },
      ]
    }, {
      name: '福建',
      children: [
        {
          name: '福州',
          children: [
            { name: '鼓楼' },
            { name: '台江' },
            { name: '仓山' },
          ]
        },
      ]
    }],
  },
  created () {
  },
  methods: {
    yyy () {
      console.log('yyy')
    },
    inputChange (e) {
      console.log(e.target.value)
    },
    showToast (position) {
      this.$toast('<p>show toast!</p><i>倾斜了</i>', {
        position,
        autoClose: 3,
        enableHtml: true,
        closeButton: {
          text: '知道了',
          callback (toast) {
            console.loh(toast)
            console.log('ok')
          }
        }
      })
    }
  },
})
