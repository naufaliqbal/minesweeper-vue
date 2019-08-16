const actions = {
    openSquare({ rootState, commit }, { row, col }) {
        // commit("changeSquareShow")
        let pattern = rootState.gridPattern.minesPattern
        let squareTarget = pattern[row][col]
        commit("changeSquareShow", squareTarget)
    }
}
const mutations = {
    changeSquareShow(_, squareTarget) {
        squareTarget.show = true 
    }
}

export default {
    namespaced: true,
    actions,
    mutations
}