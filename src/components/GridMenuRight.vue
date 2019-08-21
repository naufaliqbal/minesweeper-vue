<template>
  <v-container class="text-center">
    <grid-size />
    <grid-restart />
  </v-container>
</template>

<script>
import GridSize from "./GridSize";
import GridRestart from "./GridRestart";

export default {
  components: {
    GridSize,
    GridRestart
  }
};
</script>

<style>
</style>