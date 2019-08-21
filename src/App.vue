<template>
  <v-app>
    <v-content class="my-5">
      <v-row justify="center">
        <grid-menu-left />
        <main-grid />
        <grid-menu-right />
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import GridMenuLeft from "./components/GridMenuLeft";
import MainGrid from "./components/MainGrid";
import GridMenuRight from "./components/GridMenuRight";

export default {
  name: "App",
  components: {
    GridMenuLeft,
    MainGrid,
    GridMenuRight
  }
};
</script>

<style lang="scss">
.container {
  width: auto;
  margin: auto 0;
}
</style>
