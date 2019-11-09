import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAddress: '',
    userAddressShort: '',
    balance: '',
    toAddress: '',
  },
  actions: {
    updateUserData ({ commit }, { userAddress, userAddressShort, balance }) {
      commit('updateUserData', { userAddress, userAddressShort, balance })
    },
    updateBalance ({ commit }, balance) {
      commit('updateBalance', balance)
    },
    updateUserAddress ({ commit }, address) {
      commit('updateUserAddress', address)
    }
  },
  mutations: {
    updateUserData (state, { userAddress, userAddressShort, balance }) {
      state.userAddress = userAddress
      state.userAddressShort = userAddressShort
      state.balance = balance
    },
    updateBalance (state, payload) {
      state.balance = payload
    },
    updateUserAddress (state, payload) {
      state.userAddress = payload
    }
  }
})
