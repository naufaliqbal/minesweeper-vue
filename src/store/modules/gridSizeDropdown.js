const state = {
    buttonText: "",
    sizes: [8, 10, 12],
    isSelected: false,
    gridSize: 0
};
const getters = {
    sizeLists(state) {
        return state.sizes;
    },
    buttonText(state) {
        if (state.isSelected) {
            return state.buttonText;
        }
        return state.sizes[0] + " x " + state.sizes[0];
    },
    gridSize(state) {
        if (state.isSelected) {
            return state.gridSize;
        }
        return state.sizes[0];
    },
};
const actions = {
    setGridSize({ commit }, size) {
        setTimeout(() => {
            commit("changeButtonTitle", size);
            commit("changeGridSize", size);
            commit("changeIsSelected");
        }, 200);
    }
};
const mutations = {
    changeButtonTitle(state, size) {
        state.buttonText = size + " x " + size;
    },
    changeGridSize(state, size) {
        state.gridSize = size;
    },
    changeIsSelected(state) {
        state.isSelected = true;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};