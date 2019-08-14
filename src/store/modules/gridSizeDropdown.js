const state = {
    buttonText: "",
    items: [
        { title: "16 x 16" },
        { title: "32 x 32" },
        { title: "48 x 48" },
    ],
    sizeSelected: false
}
const getters = {
    sizeNotation(state) {
        if (state.sizeSelected) {
            return state.buttonText
        }
        return state.items[0].title
    },
    sizeLists(state) {
        return state.items
    }
}
const actions = {
    changeButtonText({ commit }, text) {
        commit("changeButtonText", text)
    }
}
const mutations = {
    changeButtonText(state, text) {
        state.buttonText = text
        state.sizeSelected = true
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}