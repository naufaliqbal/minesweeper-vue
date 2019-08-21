import Vue from "vue";
import Vuex from "vuex";
import mainGame from "./modules/mainGame";
import gridSize from "./modules/gridSize";
import gridPattern from "./modules/gridPattern";
import gridSquare from "./modules/gridSquare";
import gridTimer from "./modules/gridTimer";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: debug,
  modules: {
    mainGame,
    gridSize,
    gridPattern,
    gridSquare,
    gridTimer
  }
});