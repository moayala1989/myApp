export default module = {
  namespaced: true,
  state: {
    cityName: '北京',
    cityId: '110100'
  },
 
  actions: {
    changeCity({commit},city){
        commit('CHANGECITY',city)
    }
  },
 
  mutations: {
    CHANGECITY(s,city) {
      s.cityName = city.name
      s.cityId = city.cityId
    }
  }
}
