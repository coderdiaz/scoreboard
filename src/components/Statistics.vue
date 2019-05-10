<template>
  <table class="statistics">
    <tbody>
      <tr>
        <td class="row-label">Players:</td>
        <td>{{ totalPlayers }}</td>
      </tr>
      <tr>
        <td class="row-label">Total Points:</td>
        <td>{{ totalPoints }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Statistics',
  computed: {
    ...mapGetters([
      'totalPlayers',
      'totalPoints',
    ]),
  },
};
</script>
