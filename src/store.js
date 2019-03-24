import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import pages from './modules/pages'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    posts,
    pages 
  }
})
