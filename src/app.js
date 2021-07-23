import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './Row'
import Col from './Col'

Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-icon', Icon)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)

new Vue({
  el: '#app',
  data: {
    loading: false,
    message:'hi'
  },
  methods: {
    inputChange (e) {
      console.log(e.target.value)
    }
  },
})
