import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      products: null,
    };
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  getters: {
    filteredProducts: (state, getters, rootState, rootGetters) => (filter) => {
      // access this module's getter
      console.log(getters);
      // access the root and the other modules states
      console.log(rootState.users.user);
      // access the root and the other modules getters
      console.log(rootGetters.users);
      if (!filter) return state.products;
      return state.products.filter((p) => p.category === filter);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      // commit and dispatch is already namespaced so we can use in them directly
      // ----------------------------------------------------------------
      // run the mutation on the root store
      // commit('setExampleMutation', { dataToSend }, { root: true });
      // run the mutation on the target module
      // commit('users/setExampleMutation', { dataToSend }, { root: true });
      // ----------------------------------------------------------------
      // run the actions on the root store
      // commit('setExampleAction', { dataToSend }, { root: true });
      // run the actions on the target module
      // commit('users/setExampleAction', { dataToSend }, { root: true });
      const response = await axios.get('/api/products');
      commit('setProducts', response.data);
    },
  },
};
