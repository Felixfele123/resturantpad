
const state = {
    font: null,
    fontWeight: null
  }

  const getters = {
    fontWeight: state => state.fontWeight,
    font: state => state.font,
    activeColors: state => state.colors
  }

  const actions = {
    updateFontWeight({commit}, fontWeight){
      commit('setFontWeight', fontWeight)
    },
    updateFont({commit}, font){
        commit('setFont', font.name);
    },
    updateColors({commit}, colors){
        commit('setColors', colors);
    },
  };

  const mutations = {
    setFontWeight: (state, fontWeight) => (state.fontWeight = fontWeight),
    setFont: (state, font) => (state.font = font),
    setColors: (state, colors) => (state.colors = colors)
  }

  export default {
    state,
    getters,
    actions,
    mutations
}