const state = {
    initialTime: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};
const getters = {
    getSeconds(state) {
        return (state.seconds < 10 ? "0" : "") + state.seconds;
    },
    getMinutes(state) {
        return (state.minutes < 10 ? "0" : "") + state.minutes + ":";
    },
    getHours(state) {
        return state.hours < 1 ? "" : state.hours + ":";
    },
    getTime(_, getters) {
        return getters.getHours + getters.getMinutes + getters.getSeconds;
    }
};
const actions = {
    async setInterval({state, dispatch}) {
        return setInterval(() => {
            if (state.initialTime > 0) {
                let diff = Date.now() - state.initialTime;
                dispatch("interval", {diff});
            }
        }, 1000);
    },
    async interval({dispatch}, {diff}) {
        let seconds = await dispatch("setSeconds", diff);
        let minutes = await dispatch("setMinutes", diff);
        let hours = await dispatch("setHours", diff);
        return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
    },
    setHours({commit}, diff) {
        let hours = Math.floor(diff / (60000 * 60));
        commit("setHoursState", hours);
        return hours;
    },
    setMinutes({commit}, diff) {
        let minutes = Math.floor(diff / 60000);
        commit("setMinutesState", minutes);
        return minutes;
    },
    setSeconds({commit}, diff) {
        let seconds = Math.floor((diff % 60000) / 1000);
        commit("setSecondsState", seconds);
        return seconds;
    }
};
const mutations = {
    setHoursState(state, hours) {
        state.hours = hours;
    },
    setMinutesState(state, minutes) {
        state.minutes = minutes;
    },
    setSecondsState(state, seconds) {
        state.seconds = seconds;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};