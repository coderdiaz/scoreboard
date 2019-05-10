<template>
  <div class="player grid">
    <div class="player-remove"></div>
    <div class="player-name">{{ name }}</div>
    <div class="player-controls grid">
      <div class="decrement">
        <button class="btn" @click.prevent="decrement">-</button>
      </div>
      <span class="score">{{ score }}</span>
      <div class="increment">
        <button class="btn" @click.prevent="increment">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('ADD_POINT', { playerIndex: this.index });
    },
    decrement() {
      this.$store.dispatch('REMOVE_POINT', { playerIndex: this.index });
    },
  },
};
</script>
