const state = {
    lose: false,
    win: false
};
const getters = {
    isLose(state) {
        return state.lose;
    },
    isWin(state) {
        return state.win;
    }
};
const actions = {
    restartGame({ commit  }) {
        commit("restartGame");
    },
    
};
const mutations = {
    restartGame(state, rootState) {
        state.win = false;
        state.lose = false;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};