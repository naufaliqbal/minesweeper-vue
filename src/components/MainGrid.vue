<template>
  <v-container class="grey lighten-5 ">
    <v-row no-gutters v-for="r in gridSize" :key="r" justify="center">
      <!-- <template v-for="n in 4">
        <v-col :key="n">
          <v-card class="pa-2" outlined tile>Column</v-card>
        </v-col>
        <v-responsive v-if="n === 2" :key="`width-${n}`" width="100%"></v-responsive>
      </template> -->
      <template v-for="c in gridSize">
          <v-col :key="c">
              <v-card class="pa-2" height="2rem" width="2rem" elevation="3" outlined>&nbsp;</v-card>
          </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters('gridSizeDropdown', [
        'gridSize'
    ])
};
</script>

<style lang="scss" scoped>
.col {
    flex-grow: 0 !important;
}
</style>