<template>
  <div class="text-center">
    <span class="font-weight-light mx-5">Select Grid Size</span>
    <v-menu bottom origin="top center" transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" v-text="sizeNotation"></v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(list, index) in sizeLists"
          :key="index"
          @click="changeButtonText(list.title)"
        >
          <v-list-item-title>{{ list.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const gsd = "gridSizeDropdown";
export default {
  computed: {
    ...mapGetters(gsd, ["sizeNotation", "sizeLists"])
  },
  methods: mapActions(gsd, ["changeButtonText"])
};
</script>