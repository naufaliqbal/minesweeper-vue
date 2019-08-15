<template>
  <div class="text-center my-5">
    <span class="font-weight-light mx-5">Select Grid Size:</span>
    <v-menu bottom origin="top center" transition="scale-transition" :offset-y="true">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" v-text="buttonText"></v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(size, index) in sizeLists"
          :key="index"
          @click="createMinesPattern(size), setGridSize(size)"
        >
          <v-list-item-title>{{ size + " x " + size }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("gridSizeDropdown", ["buttonText", "sizeLists"])
  },
  methods: {
    ...mapActions("gridSizeDropdown", ["setGridSize"]),
    ...mapActions("mainGrid", ["createMinesPattern"])
  }
};
</script>