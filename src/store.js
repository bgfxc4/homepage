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
            $(".preModeSwitch").removeClass("preModeSwitch")
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
