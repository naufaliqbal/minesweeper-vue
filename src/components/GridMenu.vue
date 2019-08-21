<template>
  <v-container class="text-center">
    <grid-size />
    <mines-left />
    <timer />
  </v-container>
</template>

<script>
import GridSize from "./GridSize";
import MinesLeft from "./MinesLeft";
import Timer from "./Timer";

export default {
  components: {
    GridSize,
    MinesLeft,
    Timer
  }
};
</script>

<style>
</style>