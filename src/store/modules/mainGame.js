const state = {
    lose: false
};
const getters = {
    isLose(state) {
        return state.lose;
    }
};
const actions = {
    restartGame({ commit  }) {
        commit("restartGame");
    },
    
};
const mutations = {
    restartGame(state, rootState) {
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