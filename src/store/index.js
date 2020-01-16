import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
import decodeJwt from 'jwt-decode'
Vue.use(Vuex)

const USER_KEY = 'user'
export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY)// token
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      if (data && data.token) {
        data.id = decodeJwt(data.token).user_id
      }
      setItem(USER_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
