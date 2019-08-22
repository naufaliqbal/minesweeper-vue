const state = {
    initialTime: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    stopTime: false,
    intervals: {
        second: 1000,
        minute: 1000 * 60,
        hour: 1000 * 60 * 60,
        day: 1000 * 60 * 60 * 24
    }
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
    async setInterval({ state, dispatch }) {
        let int = setInterval(() => {
            if (state.initialTime > 0) {
                let diff = Date.now() - state.initialTime;
                dispatch("interval", { diff });
            }
            if (state.stopTime) clearInterval(int);
        }, 1000);
        return int;
    },
    async interval({ dispatch }, { diff }) {
        let seconds = await dispatch("setSeconds", diff);
        let minutes = await dispatch("setMinutes", diff);
        let hours = await dispatch("setHours", diff);
        return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
    },
    setHours({ state, commit }, diff) {
        let hours = Math.floor((diff % state.intervals.day) / state.intervals.hour);
        commit("setHoursState", hours);
        return hours;
    },
    setMinutes({ state, commit }, diff) {
        let minutes = Math.floor((diff % state.intervals.hour) / state.intervals.minute);
        commit("setMinutesState", minutes);
        return minutes;
    },
    setSeconds({ commit }, diff) {
        let seconds = Math.floor((diff % state.intervals.minute) / state.intervals.second);
        commit("setSecondsState", seconds);
        return seconds;
    },
    restartTime({ dispatch, commit }) {
        commit("restartTimeState");
        dispatch("setInterval");
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
    },
    restartTimeState(state) {
        state.stopTime = false,
            state.initialTime = 0,
            state.seconds = 0,
            state.minutes = 0,
            state.hours = 0;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};