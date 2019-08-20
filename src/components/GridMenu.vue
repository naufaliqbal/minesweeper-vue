<template>
  <v-row class="text-center" justify="center">
    <grid-size />
    <grid-restart />
    <mines-left />
  </v-row>
</template>

<script>
import GridSize from "./GridSize";
import GridRestart from "./GridRestart";
import MinesLeft from "./MinesLeft";

export default {
  components: {
    GridSize,
    GridRestart,
    MinesLeft
  }
};
</script>

<style>
</style>