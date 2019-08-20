<template>
  <div class="restart px-3">
    <p class="mb-1">Restart</p>
    <v-btn
      text
      color="warning"
      class="font-weight-bold headline"
      @click="createMinesPattern(gridSize), setGridSize(gridSize), restartGame()"
    >&#x21bb;</v-btn>
  </div>
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
      restartGame: "mainGame/restartGame"
    })
  }
};
</script>

<style>
</style>