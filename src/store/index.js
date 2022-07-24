import { createStore } from 'vuex';
import productsModule from '@/store/modules/products';
import userModule from '@/store/modules/user';

const store = createStore({
  modules: {
    products: productsModule,
    users: userModule,
  },
  state() {
    return {
    };
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
});

export default store;
