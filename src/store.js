import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
            darkMode: false
        }
    },
    mutations: {
        setDarkMode(state, mode) {
            state.darkMode = mode
            if (mode)
                $("*").addClass("darkMode")
            else
                $("*").removeClass("darkMode")
        }
    },
    actions: {

    },
    getters: {

    }
})