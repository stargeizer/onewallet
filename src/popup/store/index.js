import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import wallets from "./modules/wallets";
import network from "./modules/network";
import hrc20 from "./modules/hrc20";
import account from "./modules/account";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ["wallets", "network", "hrc20"],
});

export default new Vuex.Store({
  modules: {
    wallets,
    network,
    account,
    hrc20,
  },

  state: {
    loading: false,
  },

  mutations: {
    loading(state, loading) {
      state.loading = loading;
    },
  },

  plugins: [vuexLocal.plugin],
});
