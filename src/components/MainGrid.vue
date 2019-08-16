<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters v-for="(row, row_idx) in getMinesPattern" :key="row_idx" justify="center">
      <template v-for="(col, col_idx) in row">
        <v-hover v-slot:default="{ hover }" :key="col_idx">
          <v-col @click.left.once="openSquare({row: row_idx, col: col_idx})">
            <v-card
              :class="[{'on-hover': hover, 'opened': col.show }, 'square', 'flex-center']"
              elevation="4"
              outlined
            >
              <div v-if="col.show" class="font-weight-bold">
                <span v-if="col.bomb" class="font-red">{{col.data}}</span>
                <span v-else>{{col.data | numberFilter }}</span>
              </div>
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
  beforeMount() {
    this.createMinesPattern();
  },
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
  filters: {
    numberFilter: value => {
      if (value === 0) return "";
      return value;
    }
  }
};
</script>

<style lang="scss" scoped>
$shade-color: rgba(0, 0, 0, 0.05) !important;
.col {
  flex-grow: 0 !important;
}
.on-hover {
  background-color: $shade-color;
  cursor: pointer;
}
.square {
  height: 2rem;
  width: 2rem;
}
.font-red {
  color: #f50f0f;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.opened {
  background-color: $shade-color;
}
</style>