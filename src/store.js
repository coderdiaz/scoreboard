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
    STATUS_GAME: ({ commit }, status) => {
      commit('STATUS_GAME', status);
    },
  },
  mutations: {
    SET_PLAYER: (state, { name }) => {
      const player = {
        name,
        points: 0,
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
    STATUS_GAME: (state, status) => {
      state.isRunning = status;
    },
  },
  getters: {
    players: state => state.players,
    totalPlayers: state => state.players.length,
    totalPoints: state => state.players.reduce((total, player) => total + player.points, 0),
    highestScore: (state) => {
      const scores = state.players.map(p => p.points);
      const highestScore = Math.max(...scores);
      if (highestScore) {
        return highestScore;
      }
      return null;
    },
    isRunning: state => state.isRunning,
  },
});
