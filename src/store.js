import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAddress: '',
    balance: '',
    toAddress: '',
  },
  actions: {
    updateUserData ({ commit }, { userAddress, balance }) {
      commit('updateUserData', { userAddress, balance })
    },
    updateBalance ({ commit }, balance) {
      commit('updateBalance', balance)
    },
    updateUserAddress ({ commit }, address) {
      commit('updateUserAddress', address)
    }
  },
  mutations: {
    updateUserData (state, { userAddress, balance }) {
      state.userAddress = userAddress
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
