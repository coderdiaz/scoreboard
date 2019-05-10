import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isRunning: false,
    players: [
      {
        name: 'Golda',
        points: 0,
      },
      {
        name: 'Goldo',
        points: 0,
      },
    ],
  },
  actions: {
    ADD_PLAYER: ({ commit }, { name }) => {
      commit('SET_PLAYER', { name });
    },
    ADD_POINT: ({ commit }, { playerIndex }) => {
      commit('INCREMENT', playerIndex);
    },
    REMOVE_POINT: ({ commit }, { playerIndex }) => {
      commit('DECREMENT', playerIndex);
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
    INCREMENT: (state, index) => {
      state.players[index].points += 1;
    },
    DECREMENT: (state, index) => {
      if (state.players[index].points > 0) {
        state.players[index].points -= 1;
      }
    },
  },
  getters: {
    players: state => state.players,
  },
});
