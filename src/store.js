import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isRunning: false,
    players: [
      {
        name: 'John Doe',
        points: 0,
      },
      {
        name: 'Bruce Wayne',
        points: 0,
      },
    ],
  },
  actions: {
    ADD_PLAYER: ({ commit }, { name }) => {
      commit('SET_PLAYER', { name });
    },
  },
  mutations: {
    SET_PLAYER: (state, { name }) => {
      const player = {
        name,
        score: 0,
      };
      state.players.push(player);
    },
  },
  getters: {
    players: state => state.players,
  },
});
