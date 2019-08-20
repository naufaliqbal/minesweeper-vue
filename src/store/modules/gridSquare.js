const state = {
    bombIcon: require('../../assets/bomb.png'),
    flagIcon: require('../../assets/flag.png')
}
const getters = {
    bombIcon(state) {
        return state.bombIcon
    },
    flagIcon(state) {
        return state.flagIcon
    },
    pattern(state, getters, { gridPattern }) {
        return gridPattern.minesPattern;
    }
}
const actions = {
    openSquare({ getters, commit, rootState, dispatch }, { row, col }) {
        let pattern = getters.pattern
        if (!pattern[row] || !pattern[row][col]) return

        let squareTarget = pattern[row][col]
        // nol
        if (squareTarget.data === 0) {
            if (squareTarget.show) return
            dispatch("floodFillSquare", { squareTarget: squareTarget, row: row, col: col })
        }
        // bomb
        if (squareTarget.bomb) {
            commit("endGame", rootState)
        }
        commit("changeSquareShow", squareTarget)
    },
    flagSquare({ getters, commit }, { row, col }) {
        let squareTarget = getters.pattern[row][col];
        commit("changeSquareFlagged", squareTarget);
    },
    floodFillSquare({ dispatch, commit }, { squareTarget, row, col }) {
        commit("changeSquareShow", squareTarget)
        dispatch("openSquare", { row: row, col: col + 1 })
        dispatch("openSquare", { row: row, col: col - 1 })
        dispatch("openSquare", { row: row + 1, col: col })
        dispatch("openSquare", { row: row - 1, col: col })
    }
};
const mutations = {
    changeSquareShow(_, squareTarget) {
        squareTarget.show = true;
    },
    changeSquareFlagged(_, squareTarget) {
        squareTarget.flagged = !squareTarget.flagged;
    },
    endGame(_, rootState) {
        rootState.mainGame.lose = true
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};