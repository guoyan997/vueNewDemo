import Vue from 'vue'
import Vuex from 'vuex'
import finance from './modules/finance'
import market from './modules/market'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    finance: finance,
    market: market
  }
})
