<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Minesweeper Vue</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
    </v-app-bar>

    <v-content class="my-5">
      <grid-size-dropdown/>
      <main-grid/>
    </v-content>
  </v-app>
</template>

<script>
import GridSizeDropdown from "./components/GridSizeDropdown";
import MainGrid from "./components/MainGrid";

export default {
  name: "App",
  components: {
    GridSizeDropdown,
    MainGrid
  }
};
</script>
