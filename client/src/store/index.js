import Vuex from 'vuex';
import Vue from 'vue';
import Dishes from './modules/menu/Dishes.js'
import Design from  './modules/menu/Design.js'
import Userservice from './modules/Userservice.js'
import createPersistedState from 'vuex-persistedstate'
//import game from './modules/game'

Vue.use(Vuex);


export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    modules: {
        Dishes,
        Design,
        Userservice
    }
})