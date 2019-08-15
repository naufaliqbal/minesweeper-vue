const state = {
    dataSource: [0,0,0,0,"X"],
    minesPattern: []
};
const getters = {
    getMinesPattern(state) {
        return state.minesPattern;
    }
};
const actions = {
    openCol({ state }, { row, col }) {
    },
    async createMinesPattern({ rootGetters, dispatch, commit }, size) {
        let gridSize = size ? size : rootGetters["gridSizeDropdown/gridSize"];
        let minesPattern = new Array();

        for (let rowIdx = 0; rowIdx < gridSize; rowIdx++) {
            let subPattern = await dispatch("createMinesSubPattern",
                {
                    gridSize: gridSize,
                    rowIdx: rowIdx,
                    minesPattern: minesPattern
                });
            minesPattern.push(subPattern);
        }
        commit("setMinesPattern", minesPattern);
    },
    async createMinesSubPattern({ state }, { gridSize, rowIdx, minesPattern }) {
        let temp = new Array();
        for (let colIdx = 0; colIdx < gridSize; colIdx++) {
            // get random number
            let random = Math.floor(Math.random() * state.dataSource.length);
            let source = state.dataSource[random];

            // change current row value
            let prev = temp[colIdx - 1];
            if (typeof source == "string" && typeof prev == "number") {
                temp[colIdx - 1] = prev + 1;
            }
            if (typeof source == "number" && typeof prev == "string") {
                source = source + 1;
            }

            // change prev row value
            if (rowIdx > 0) {
                let prevUpperCenter = minesPattern[rowIdx - 1][colIdx];
                let prevUpperLeft = minesPattern[rowIdx - 1][colIdx - 1];
                let prevUpperRight = minesPattern[rowIdx - 1][colIdx + 1];

                if (typeof source == "string") {
                    typeof prevUpperCenter == "number" ? minesPattern[rowIdx - 1][colIdx] = prevUpperCenter + 1 : prevUpperCenter;
                    typeof prevUpperLeft == "number" ? minesPattern[rowIdx - 1][colIdx - 1] = prevUpperLeft + 1 : prevUpperLeft;
                    typeof prevUpperRight == "number" ? minesPattern[rowIdx - 1][colIdx + 1] = prevUpperRight + 1 : prevUpperRight;
                } else {
                    typeof prevUpperCenter == "string" ? source = source + 1 : source;
                    typeof prevUpperLeft == "string" ? source = source + 1 : source;
                    typeof prevUpperRight == "string" ? source = source + 1 : source;
                }
            }

            temp.push(source);
        }
        return temp;
    },
};
const mutations = {
    setMinesPattern(state, pattern) {
        state.minesPattern = pattern;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};