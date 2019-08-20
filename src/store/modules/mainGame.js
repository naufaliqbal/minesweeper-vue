const state = {
    lose: false
};
const getters = {
    isLose(state) {
        return state.lose;
    }
};
const actions = {
    restartGame({ commit, rootState }) {
        commit("restartGame", rootState);
    },
    
};
const mutations = {
    restartGame(state, rootState) {
        state.lose = false;
        rootState.gridPattern.totalMines = 0;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};