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
        commit("setMinesPattern", minesPattern);
    },
    async createMinesSubPattern({ state }, { gridSize, rowIdx, minesPattern }) {
        let subPattern = new Array();
        for (let colIdx = 0; colIdx < gridSize; colIdx++) {
            // get random number
            let random = Math.floor(Math.random() * state.dataSource.length);
            let source = state.dataSource[random];

            // change inserted data based on previous inserted data or vice versa
            // if previous data value is "X" or "bomb", add the inserted data
            // if inserted data is number and previous data is "X", add previous data
            let prev = subPattern[colIdx - 1];
            if (prev) {
                let prevData = prev.data;
                if (typeof source === "string" && typeof prevData === "number") subPattern[colIdx - 1].data = prevData + 1;
                if (typeof source === "number" && typeof prevData == "string") source = source + 1;
            }

            // same method, but for previous row
            if (rowIdx > 0) {
                let prevUpperLeft = minesPattern[rowIdx - 1][colIdx - 1];
                let prevUpperRight = minesPattern[rowIdx - 1][colIdx + 1];
                let prevUpperCenter = minesPattern[rowIdx - 1][colIdx];

                if (prevUpperLeft) {
                    let prevUpperLeftData = prevUpperLeft.data;
                    typeof source === "string"
                        ? typeof prevUpperLeftData === "number" ? minesPattern[rowIdx - 1][colIdx - 1].data = prevUpperLeftData + 1 : prevUpperLeftData
                        : typeof prevUpperLeftData === "string" ? source += 1 : source;
                }
                if (prevUpperRight) {
                    let prevUpperRightData = prevUpperRight.data;
                    typeof source === "string"
                        ? typeof prevUpperRightData === "number" ? minesPattern[rowIdx - 1][colIdx + 1].data = prevUpperRightData + 1 : prevUpperRightData
                        : typeof prevUpperRightData === "string" ? source += 1 : source;
                }
                if (prevUpperCenter) {
                    let prevUpperCenterData = prevUpperCenter.data;
                    typeof source === "string"
                        ? typeof prevUpperCenterData === "number" ? minesPattern[rowIdx - 1][colIdx].data = prevUpperCenterData + 1 : prevUpperCenterData
                        : typeof prevUpperCenterData === "string" ? source += 1 : source;
                }
            }
            subPattern.push({
                data: source,
                show: false,
                bomb: typeof source === "string"  
            });
        }
        return subPattern;
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