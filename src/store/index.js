import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default createStore({
  state: {
    quotes: [
      'Just a quote to see something'
    ],
    maxQuotes: 10
  },
  mutations,
  actions,
  getters
})
