const state = {
    dataSource: [0, 0, 0, 0, "X"], //4:1
    minesPattern: []
};
const getters = {
    getMinesPattern(state) {
        return state.minesPattern;
    }
};
const actions = {
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
        console.log(minesPattern)
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
            if (prev) {
                let prevData = prev.data
                if (typeof source === "string" && typeof prevData === "number") temp[colIdx - 1].data = prevData + 1
                if (typeof source === "number" && typeof prevData == "string") source = source + 1;
            }

            if (rowIdx > 0) {
                let prevUpperLeft = minesPattern[rowIdx - 1][colIdx - 1];
                let prevUpperRight = minesPattern[rowIdx - 1][colIdx + 1];
                let prevUpperCenter = minesPattern[rowIdx - 1][colIdx];

                if (prevUpperLeft) {
                    let prevUpperLeftData = prevUpperLeft.data;
                    typeof source === "string"
                        ? typeof prevUpperLeftData === "number" ? minesPattern[rowIdx - 1][colIdx - 1].data = prevUpperLeftData + 1 : prevUpperLeftData
                        : typeof prevUpperLeftData === "string" ? source += 1 : source
                }
                if (prevUpperRight) {
                    let prevUpperRightData = prevUpperRight.data;
                    typeof source === "string"
                        ? typeof prevUpperRightData === "number" ? minesPattern[rowIdx - 1][colIdx + 1].data = prevUpperRightData + 1 : prevUpperRightData
                        : typeof prevUpperRightData === "string" ? source += 1 : source
                }
                if (prevUpperCenter) {
                    let prevUpperCenterData = prevUpperCenter.data;
                    typeof source === "string"
                        ? typeof prevUpperCenterData === "number" ? minesPattern[rowIdx - 1][colIdx].data = prevUpperCenterData + 1 : prevUpperCenterData
                        : typeof prevUpperCenterData === "string" ? source += 1 : source
                }
            }
            temp.push({
                data: source,
                show: false,
                square_idx: (rowIdx * gridSize) + colIdx
            });
        }
        return temp;
    }
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