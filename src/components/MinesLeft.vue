<template>
  <v-container>
    <p class="mb-1">Mines Left</p>
    <p class="font-weight-bold headline mb-1 font-color-indigo" v-text="minesLeft"></p>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      minesLeft: "gridPattern/totalMines"
    })
  }
};
</script>

<style>
.font-color-indigo {
  color: #3f51b5;
}
</style>