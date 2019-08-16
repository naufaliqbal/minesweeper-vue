<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters v-for="(row, row_idx) in getMinesPattern" :key="row_idx" justify="center">
      <template v-for="(col, col_idx) in row">
        <v-hover v-slot:default="{ hover }" :key="col_idx">
          <v-col @click.left="openSquare({row: row_idx, col: col_idx})">
            <v-card :class="{'on-hover': hover }" elevation="4" height="2rem" width="2rem" outlined>
              <span v-if="col.show">{{col.data}}</span>
            </v-card>
          </v-col>
        </v-hover>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      gridSize: "gridSizeDropdown/gridSize",
      getMinesPattern: "gridPattern/getMinesPattern"
    })
  },
  methods: {
    ...mapActions({
      createMinesPattern: "gridPattern/createMinesPattern",
      openSquare: "gridSquare/openSquare"
    })
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