const state = {
    dataSource: ["X", 0],
    minesPattern: []
}
const getters = {
    getMinesPattern(state) {
        return state.minesPattern
    }
}
const actions = {
    openCol({ state }, { row, col }) {
        console.log("ROW", row)
        console.log("COL", col)
        console.log(state.minesPattern[row][col])
    },
    async createMinesPattern({ rootGetters, dispatch, commit }) {
        const gridSize = rootGetters["gridSizeDropdown/gridSize"];
        const mainArray = new Array()

        for (let i = 0; i < gridSize; i++) {
            let subPattern = await dispatch("createMinesSubPattern", gridSize)
            mainArray.push(subPattern)
        }
        commit("setMinesPattern", mainArray)
    },
    async createMinesSubPattern({ state }, gridSize) {
        let temp = new Array()
        for (let j = 0; j < gridSize; j++) {
            // get random number
            let random = Math.floor(Math.random() * state.dataSource.length)
            temp.push(state.dataSource[random])
        }
        return temp
    },
}
const mutations = {
    setMinesPattern(state, pattern) {
        state.minesPattern = pattern
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}