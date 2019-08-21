<template>
  <v-app>
    <v-content class="my-5">
      <v-row justify="center">
        <grid-menu />
        <main-grid />
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import GridMenu from "./components/GridMenu";
import MainGrid from "./components/MainGrid";

export default {
  name: "App",
  components: {
    GridMenu,
    MainGrid
  }
};
</script>

<style lang="scss">
.container {
  width: auto;
  margin: auto 0;
}
</style>
