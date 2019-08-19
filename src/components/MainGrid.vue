<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters v-for="(row, row_idx) in getMinesPattern" :key="row_idx" justify="center">
      <template v-for="(col, col_idx) in row">
        <v-hover v-slot:default="{ hover }" :key="col_idx">
          <v-col 
            @click.left.once="openSquare({row: row_idx, col: col_idx})"
            @click.right.prevent="flagSquare({row: row_idx, col: col_idx})">
            <v-card
              :class="[{'on-hover': hover, 'opened': col.show, 'bomb':col.bomb && col.show}, 'square-card', 'flex-center']"
              elevation="4"
              outlined
            >
              <div v-if="col.show">
                <v-img v-if="col.bomb" alt="bomb" :src="bombIcon" class="square-bomb"></v-img>
                <span v-else class="font-weight-bold">
                  {{ col.data | numberFilter }}
                </span>
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
      getMinesPattern: "gridPattern/getMinesPattern",
      bombIcon: "gridSquare/bombIcon"
    })
  },
  methods: {
    ...mapActions({
      createMinesPattern: "gridPattern/createMinesPattern",
      openSquare: "gridSquare/openSquare",
      flagSquare: "gridSquare/flagSquare"
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
$shade-color: rgba(0, 0, 0, 0.05);
$red: #f73030;
@mixin background-color($bomb:false) {
  @if $bomb {
    background-color: $red !important;
  }
  @else {
    background-color: $shade-color !important;
  }
}

.col {
  flex-grow: 0 !important;
}
.on-hover {
  background-color: $shade-color;
  cursor: pointer;
}
.square-card {
  height: 2rem;
  width: 2rem;
}
.square-bomb {
  height: 1.3rem;
  width: 1.3rem;
}
.bg-red {
  background-color: $red;
}
.font-white {
  color: white;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.opened {
  @include background-color($bomb: false);
  &.bomb {
    @include background-color($bomb: true);
  }
}
</style>