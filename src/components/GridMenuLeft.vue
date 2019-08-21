<template>
  <v-container class="text-center">
    <mines-left />
    <timer />
  </v-container>
</template>

<script>
import MinesLeft from "./MinesLeft";
import Timer from "./Timer";

export default {
  components: {
    MinesLeft,
    Timer
  }
};
</script>

<style>
</style>