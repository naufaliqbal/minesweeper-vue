const state = {
    bombIcon: require('../../assets/bomb.png')
}
const getters = {
    bombIcon(state) {
        return state.bombIcon
    }
}
const actions = {
    openSquare({ rootState, commit }, { row, col }) {
        let pattern = rootState.gridPattern.minesPattern;
        let squareTarget = pattern[row][col];
        commit("changeSquareShow", squareTarget);
    },
    flagSquare(_, { row, col }) {
        console.log(row, col)
    }
};
const mutations =  {
    changeSquareShow(_, squareTarget) {
        squareTarget.show = true; 
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};