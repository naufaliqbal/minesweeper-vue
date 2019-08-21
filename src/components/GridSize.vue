<template>
  <v-container>
    <p class="mb-1">Size</p>
    <v-menu bottom origin="top center" transition="scale-transition" :offset-y="true">
      <template v-slot:activator="{ on }">
        <v-btn text color="primary" v-on="on" v-text="buttonText" class="font-weight-bold headline"></v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(size, index) in sizeLists"
          :key="index"
          @click="createMinesPattern(size), setGridSize(size), restartGame(), restartTime()"
        >
          <v-list-item-title>{{ size + " x " + size }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("gridSize", ["buttonText", "sizeLists"])
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