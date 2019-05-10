<template>
  <div class="scoreboard">
    <div class="scoreboard-content">
      <Player
        v-for="(player, index) in players"
        :name="player.name"
        :score="player.score"
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
  },
};
</script>
