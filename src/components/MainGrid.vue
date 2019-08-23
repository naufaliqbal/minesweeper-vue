<template>
  <v-container class="grey lighten-5">
    <v-row justify="center" align="center">
      <p class="display-1 my-6">Minesweeper</p>
      <img width="2rem" class="ma-2" alt="Vue icon" :src="vueIcon" />
    </v-row>
    <v-row no-gutters v-for="(row, row_idx) in pattern" :key="row_idx" justify="center">
      <template v-for="(col, col_idx) in row">
        <v-hover v-slot:default="{ hover }" :key="col_idx">
          <v-col
            @click.left.prevent="openSquare({row: row_idx, col: col_idx}), winningCheck()"
            @click.right.prevent="flagSquare({row: row_idx, col: col_idx})"
          >
            <v-card
              :class="[{'on-hover': hover,
              'opened': col.show, 
              'bomb':col.bomb && col.show && !col.flagged, 
              'flagged-bomb': col.bomb && col.show && col.flagged}, 
              'square-card', 
              'flex-center']"
              elevation="4"
              outlined
            >
              <div v-if="col.show">
                <v-img v-if="col.bomb" alt="bomb" :src="bombIcon" class="square-icon"></v-img>
                <span v-else class="font-weight-bold">{{ col.data | numberFilter }}</span>
              </div>
              <div v-else>
                <v-img v-if="col.flagged" alt="flag" :src="flagIcon" class="square-icon"></v-img>
              </div>
            </v-card>
          </v-col>
        </v-hover>
      </template>
    </v-row>
    <v-row v-if="isWin">
      <win-dialog />
    </v-row>
  </v-container>
</template>

<script>
import WinDialog from "./WinDialog";
import { mapActions, mapGetters } from "vuex";
export default {
  beforeMount() {
    this.createMinesPattern();
  },
  computed: {
    ...mapGetters({
      gridSize: "gridSize/size",
      pattern: "gridPattern/pattern",
      isWin: "mainGame/isWin"
    }),
    ...mapGetters("gridSquare", ["bombIcon", "flagIcon", "vueIcon"])
  },
  methods: {
    ...mapActions({
      createMinesPattern: "gridPattern/createMinesPattern"
    }),
    ...mapActions("gridSquare", ["openSquare", "flagSquare", "winningCheck"])
  },
  filters: {
    numberFilter: value => {
      if (value === 0) return "";
      return value;
    }
  },
  components: {
    WinDialog
  }
};
</script>

<style lang="scss" scoped>
$shade-color: rgba(0, 0, 0, 0.05);
$red: #f73030;
$yellow: #feff00;
@mixin background-color($bomb: false, $flagged: false) {
  @if $bomb {
    @if $flagged {
      background-color: $yellow !important;
    } @else {
      background-color: $red !important;
    }
  } @else {
    background-color: $shade-color !important;
  }
}

.on-hover {
  background-color: $shade-color !important;
  cursor: pointer;
}
.square-card {
  height: 2rem;
  width: 2rem;
}
.square-icon {
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
  @include background-color($bomb: false, $flagged: false);
  &.bomb {
    @include background-color($bomb: true, $flagged: false);
  }
  &.flagged-bomb {
    @include background-color($bomb: true, $flagged: true);
  }
}
</style>