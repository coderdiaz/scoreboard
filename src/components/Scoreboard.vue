<template>
  <div class="scoreboard">
    <div class="scoreboard-header grid">
      <Statistics />
      <Stopwatch />
    </div>
    <div class="scoreboard-content">
      <Player
        v-for="(player, index) in players"
        :name="player.name"
        :score="player.points"
        :index="index"
        :key="index" />
    </div>
    <div class="scoreboard-footer">
      <PlayerForm />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PlayerForm from '@/components/PlayerForm.vue';
import Player from '@/components/Player.vue';
import Statistics from '@/components/Statistics.vue';
import Stopwatch from '@/components/Stopwatch.vue';

export default {
  name: 'Scoreboard',
  computed: {
    ...mapGetters([
      'players',
    ]),
  },
  components: {
    PlayerForm,
    Player,
    Statistics,
    Stopwatch,
  },
};
</script>
