<template>
  <div id="app">
    <Scoreboard />
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue';

export default {
  name: 'app',
  components: {
    Scoreboard,
  },
};
</script>

<style lang="scss" src="./scss/main.scss"></style>
