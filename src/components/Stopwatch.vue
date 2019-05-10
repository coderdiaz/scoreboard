<template>
  <div class="stopwatch">
    <h2 class="title">Stopwatch</h2>
    <span class="stopwatch-time">{{ seconds }}</span>
    <div class="stopwatch-controls">
      <button class="btn handler" @click.prevent="toogleHandler">
        {{ isRunning ? 'Stop' : 'Start' }}
      </button>
      <button class="btn" @click.prevent="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Stopwatch',
  data() {
    return {
      elapsedTime: 0,
      previousTime: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.intervalId = setInterval(() => this.tick(), 100);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    toogleHandler() {
      const status = this.isRunning;
      this.$store.dispatch('STATUS_GAME', !status);
      this.previousTime = Date.now();
    },
    tick() {
      if (this.isRunning) {
        const now = Date.now();
        const time = this.elapsedTime;
        this.elapsedTime = time + (now - this.previousTime);
        this.previousTime = now;
      }
    },
    reset() {
      this.elapsedTime = 0;
    },
  },
  computed: {
    ...mapGetters([
      'isRunning',
    ]),
    seconds() {
      return Math.floor(this.elapsedTime / 1000);
    },
  },
};
</script>
