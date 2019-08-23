<template>
  <div v-if="isWin" class="dialog-bg">
    <v-row class="dialog-content" justify="center">
      <v-card class="text-center">
        <v-card-title class="headline font-weight-bold">You win!</v-card-title>
        <v-card-text>Want to play minesweeper again?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="restartTime(), restartGame(), setGridSize(gridSize), createMinesPattern(gridSize)"
          >Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isWin: "mainGame/isWin",
      gridSize: "gridSize/size"
    })
  },
  methods: {
    ...mapActions({
      restartGame: "mainGame/restartGame",
      setGridSize: "gridSize/setGridSize",
      createMinesPattern: "gridPattern/createMinesPattern",
      restartTime: "gridTimer/restartTime"
    })
  }
};
</script>

<style lang="scss" scoped>
.dialog-bg {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.dialog-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style> 