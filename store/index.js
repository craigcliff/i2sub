import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      navState: true
    },
    mutations: {
      navStateTrue (state) {
        state.navState = true;
      },
      navStateFalse (state) {
        state.navState = false;
      }
    }
  })
}


export default createStore