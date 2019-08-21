<template>
  <v-container>
    <p class="mb-1">Time</p>
    <p class="font-weight-bold headline font-color-red">{{getTime}}</p>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("gridTimer", ["getTime"])
  },
  methods: {
    ...mapActions("gridTimer", ["setInterval"])
  },
  mounted() {
    this.setInterval();
  }
};
</script>

<style>
.font-color-red {
  color: #c62828;
}
</style>