import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {
  },
  actions: {
    async registerUser({ commit }, user) {
      return axios.post('/api/register', user)
        .then((response) => commit('setUser', response.data));
    },
    async signIn({ commit }, userLogin) {
      return axios.post('/api/sign-in', userLogin)
        .then((response) => commit('setUser', response.data));
    },
  },
};
