import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      user: null,
      products: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  getters: {
    filteredProducts: (state) => (filter) => {
      if (!filter) return state.products;
      return state.products.filter((p) => p.category === filter);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('/api/products');
      commit('setProducts', response.data);
    },
    async registerUser({ commit }, user) {
      return axios.post('/api/register', user)
        .then((response) => commit('setUser', response.data));
    },
    async signIn({ commit }, userLogin) {
      return axios.post('/api/sign-in', userLogin)
        .then((response) => commit('setUser', response.data));
    },
  },
});

export default store;
