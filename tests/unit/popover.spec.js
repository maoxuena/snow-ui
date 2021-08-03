import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Popover from '@/popover'

chai.use(sinonChai)

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('可以设置position.', (done) => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    const vm = wrapper.vm
    vm.$nextTick(() => {
      let classes = wrapper.find('.content-wrapper').classes()
      expect(classes).to.include('position-bottom')
      done()
    })
  })
  it('可以设置 trigger', (done) => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom',
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('.popover').trigger('mouseenter')
    const vm = wrapper.vm
    vm.$nextTick(() => {
      expect(wrapper.find('.content-wrapper').element).to.exist
      done()
    })
  })
})