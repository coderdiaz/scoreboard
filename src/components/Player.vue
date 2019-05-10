<template>
  <div class="player grid">
    <div class="player-remove"></div>
    <div class="player-name">{{ name }}</div>
    <div class="player-controls grid">
      <div class="decrement">
        <button class="btn">-</button>
      </div>
      <span class="score">{{ score }}</span>
      <div class="increment">
        <button class="btn">+</button>
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
  },
};
</script>
