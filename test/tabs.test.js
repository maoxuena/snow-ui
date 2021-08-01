const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
  it('接受 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <s-tabs selected="tab1">
        <s-tabs-head>
          <s-tabs-item name="tab1">娱乐</s-tabs-item>
          <s-tabs-item name="tab2">游戏</s-tabs-item>
          <s-tabs-item name="tab3">美食</s-tabs-item>
        </s-tabs-head>
        <s-tabs-body>
          <s-tabs-pane name="tab1">娱乐相关</s-tabs-pane>
          <s-tabs-pane name="tab2">游戏相关</s-tabs-pane>
          <s-tabs-pane name="tab3">美食相关</s-tabs-pane>
        </s-tabs-body>
      </s-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="tab1"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
  it('可以接受 direction 属性', () => {

  })
})