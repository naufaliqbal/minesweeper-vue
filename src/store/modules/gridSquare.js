const state = {
    bombIcon: require("../../assets/bomb.png"),
    flagIcon: require("../../assets/flag.png"),
    vueIcon: require("../../assets/logo.png")
};
const getters = {
    bombIcon(state) {
        return state.bombIcon;
    },
    flagIcon(state) {
        return state.flagIcon;
    },
    vueIcon(state) {
        return state.vueIcon;
    },
    pattern(state, getters, { gridPattern }) {
        return gridPattern.gridPattern;
    }
};
const actions = {
    openSquare({ getters, commit, rootState, dispatch }, { row, col }) {
        let pattern = getters.pattern;
        if (!pattern[row] || !pattern[row][col]) return;

        let squareTarget = pattern[row][col];
        // flagged or lose
        if (squareTarget.flagged || rootState.mainGame.lose) return;
        // nol
        if (squareTarget.data === 0) {
            if (squareTarget.show) return;
            dispatch("floodFillSquare", { squareTarget: squareTarget, row: row, col: col });
        }
        // bomb
        if (squareTarget.bomb) {
            commit("endGame", rootState);
        }
        // open the cell
        commit("changeSquareShow", squareTarget);
        // set initial time
        dispatch("setInitialTime");
    },
    flagSquare({ getters, commit, rootState }, { row, col }) {
        let squareTarget = getters.pattern[row][col];
        if (squareTarget.show || rootState.mainGame.lose) return;
        commit("changeSquareFlagged", { squareTarget: squareTarget, rootState: rootState });
    },
    floodFillSquare({ dispatch, commit }, { squareTarget, row, col }) {
        commit("changeSquareShow", squareTarget);
        dispatch("openSquare", { row: row, col: col + 1 });
        dispatch("openSquare", { row: row, col: col - 1 });
        dispatch("openSquare", { row: row + 1, col: col });
        dispatch("openSquare", { row: row - 1, col: col });
    },
    winningCheck({ getters, commit, rootState }) {
        let pattern = getters.pattern;
        let number = [].concat(...pattern).filter(el => {
            return !el.bomb && el.data > 0;
        });
        let openedSquare = [].concat(...pattern).filter(el => {
            return el.data > 0 && el.show;
        });
        if (number.length == openedSquare.length) commit("winGame", rootState);
    },
    setInitialTime({ rootState, commit }) {
        if (!rootState.gridTimer.initialTime) {
            commit("setInitialTime", rootState);
        }
    }
};
const mutations = {
    changeSquareShow(_, squareTarget) {
        squareTarget.show = true;
    },
    changeSquareFlagged(_, { squareTarget, rootState }) {
        squareTarget.flagged = !squareTarget.flagged;
        squareTarget.flagged
            ? rootState.gridPattern.totalMines -= 1
            : rootState.gridPattern.totalMines += 1;
    },
    endGame(_, rootState) {
        rootState.mainGame.lose = true;
        let minesPattern = rootState.gridPattern.pattern;
        minesPattern.map(el => {
            el.show = true;
        });
        // stop time at gridTimer rootState
        rootState.gridTimer.stopTime = true;
    },
    winGame(_, rootState) {
        rootState.mainGame.win = true;
    },
    setInitialTime(_, rootState) {
        rootState.gridTimer.initialTime = new Date().getTime();
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};