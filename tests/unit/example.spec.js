import { expect } from 'chai'
import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Son from '@/components/common/Son.vue'

describe('Son.vue', () => {
  it('renders props.msg when passed', () => {
    const count = 0
    const wrapper = shallowMount(Son, {
      propsData: { count }
    })
    const Constructor = Vue.extend(Son)
    const SonComp = new Constructor().$mount()
    expect(SonComp.$el.textContent).to.contain('play games')
    // expect(SonComp.text()).to.include(count)
  })
})
