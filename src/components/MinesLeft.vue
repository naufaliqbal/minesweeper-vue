<template>
  <div class="mines-left px-3">
    <p class="mb-1">Mines Left</p>
    <p class="font-weight-bold headline mb-1" v-text="minesLeft"></p>
  </div>
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
</style>