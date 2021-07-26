import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-icon', Icon)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)
Vue.component('s-layout', Layout)
Vue.component('s-header', Header)
Vue.component('s-sider', Sider)
Vue.component('s-content', Content)
Vue.component('s-footer', Footer)
Vue.component('s-toast', Toast)
Vue.use(plugin)
Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-pane', TabsPane)

new Vue({
  el: '#app',
  data: {
    loading: false,
    message: 'hi',
    selectedTab: 'tab1',
  },
  created(){
  },
  methods: {
    yyy(data){
      console.log('yyy')
      console.log(data)
    },
    inputChange (e) {
      console.log(e.target.value)
    },
    showToast(position){
      this.$toast('<p>show toast!</p><i>倾斜了</i>', {
        position,
        autoClose: 3,
        enableHtml: true,
        closeButton: {
          text:'知道了', 
          callback(toast){
            console.loh(toast)
            console.log('ok')
          }
        }
      })
    }
  },
})
