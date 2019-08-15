<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters v-for="(r, r_idx) in gridSize" :key="r" :data-index="r_idx" justify="center">
      <template v-for="(c, c_idx) in gridSize">
        <v-hover v-slot:default="{ hover }" :key="c">
          <v-col :data-index="c_idx" @click="openCol({row: r_idx, col:c_idx})">
            <v-card :class="{'on-hover': hover }" elevation="4" height="2rem" width="2rem" outlined></v-card>
          </v-col>
        </v-hover>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters({
    gridSize: "gridSizeDropdown/gridSize",
    getMinesPattern: "mainGrid/getMinesPattern"
  }),
  methods: {
    ...mapActions("mainGrid", ["openCol", "createMinesPattern", "modifyMinesPattern"])
  },
  beforeMount() {
    this.createMinesPattern();
  }
};
</script>

<style lang="scss" scoped>
.col {
  flex-grow: 0 !important;
}
.on-hover {
  background-color: rgba(0, 0, 0, 0.01) !important;
  cursor: pointer;
}
</style>