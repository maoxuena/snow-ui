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

new Vue({
  el: '#app',
  data: {
    loading: false,
    message: 'hi'
  },
  created(){
  },
  methods: {
    inputChange (e) {
      console.log(e.target.value)
    },
    showToast(){
      this.$toast('show toast')
    }
  },
})
