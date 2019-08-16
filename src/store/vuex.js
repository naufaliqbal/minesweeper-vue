import Vue from "vue";
import Vuex from "vuex";
import gridSizeDropdown from "./modules/gridSizeDropdown";
import gridPattern from "./modules/gridPattern";
import gridSquare from "./modules/gridSquare";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: debug,
  modules: {
    gridSizeDropdown,
    gridPattern,
    gridSquare
  }
});