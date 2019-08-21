<template>
  <v-container class="text-center">
    <p class="mb-1">Restart</p>
    <v-btn
      text
      color="warning"
      class="font-weight-bold headline"
      @click="createMinesPattern(gridSize), setGridSize(gridSize), restartGame(), restartTime()"
    >&#x21bb;</v-btn>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      gridSize: "gridSize/size"
    })
  },
  methods: {
    ...mapActions({
      setGridSize: "gridSize/setGridSize",
      createMinesPattern: "gridPattern/createMinesPattern",
      restartGame: "mainGame/restartGame",
      restartTime: "gridTimer/restartTime"
    }),
  }
};
</script>

<style>
</style>