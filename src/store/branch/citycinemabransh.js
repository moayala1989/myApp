
import {http} from '@/api/http'

export default module = {
  namespaced: true,
  state: {
    cinemaList: []
  },
 
  actions : {
    getCinemaList({commit}, id) {
    return  http({
        url: `/gateway?cityId=${id}&ticketFlag=1&k=2970286`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        commit('GETCINEMALIST',res.data.data.cinemas)
      })
    }
  },
 
  mutations : {

    GETCINEMALIST(s, data) {
      s.cinemaList = data
    },
    clearCinemaList(s) {
      s.cinemaList = []
    }
  }
}
