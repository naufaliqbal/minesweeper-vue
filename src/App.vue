<template>
  <v-app>
    <v-content>
      <v-row>
        <octocat />
      </v-row>
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
import Octocat from "./components/Octocat";

export default {
  name: "App",
  components: {
    GridMenuLeft,
    MainGrid,
    GridMenuRight,
    Octocat
  }
};
</script>

<style lang="scss">
.container {
  width: auto;
  margin: auto 0;
}
</style>
