<template>
  <v-container class="text-center">
    <mines-left />
    <timer />
  </v-container>
</template>

<script>
import MinesLeft from "./MinesLeft";
import Timer from "./Timer";

export default {
  components: {
    MinesLeft,
    Timer
  }
};
</script>

<style lang="scss" scoped>
@media(max-width: 516px) { 
  .container {
    order: 2;
    margin: 0;
  }
}
</style>