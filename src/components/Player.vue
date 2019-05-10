<template>
  <div class="player grid">
    <div class="player-remove"></div>
    <div class="player-name">
      <HighScoreIcon :highest="isHighest"  />
      {{ name }}
    </div>
    <div class="player-controls grid">
      <div class="decrement">
        <button class="btn" @click.prevent="decrement" :disabled="!isRunning">-</button>
      </div>
      <span class="score">{{ score }}</span>
      <div class="increment">
        <button class="btn" @click.prevent="increment" :disabled="!isRunning">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import HighScoreIcon from '@/components/HighScoreIcon.vue';
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters([
      'highestScore',
      'isRunning',
    ]),
    isHighest() {
      return this.highestScore === this.score;
    },
  },
  components: {
    HighScoreIcon,
  },
};
</script>
