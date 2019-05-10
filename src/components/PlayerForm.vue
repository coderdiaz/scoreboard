<template>
  <form class="player-form" @submit.prevent="handleSubmit">
    <input
      type="text"
      class="player-input"
      v-model="playerName"
      placeholder="Enter a player's name" />
    <button type="submit" class="submit-button">Add player</button>
  </form>
</template>

<script>
export default {
  name: 'PlayerForm',
  data() {
    return {
      playerName: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.playerName !== '') {
        this.$store.dispatch('ADD_PLAYER', { name: this.playerName });
        this.playerName = '';
      }
    },
  },
};
</script>
