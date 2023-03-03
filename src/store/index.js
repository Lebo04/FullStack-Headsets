import { createStore } from 'vuex'
import axios from 'axios';
const renderLink = "https://headsets.onrender.com"
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: true,
    error:null 
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setSpinner(state, spinner) {
      state.spinner = spinner
    },
    setError(state, error){
      state.error = error
    }
  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${renderLink}/Users`);
      const {results, err} = await res.data;
      if (results){
        context.commit('setUsers', results)
}else{
  context.commit('setError', err)
}
    },

    async fetchUserById(context,id){
      const res = await axios.get(`${renderLink}/User/${id}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUser', results)
      }else{
        context.commit('setError', err)
      }
    },

    async updateUser(context, payload){
      const res = await axios.put(`${renderLink}/user/${payload.userID}`, payload);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUser', results)
      }else{
        context.commit('setError', err)
      }
    },

    async fetchProducts(context){
      const res = await axios.get(`${renderLink}/products`);
      const {results, err} = await res.data;
      console.log(results)
      if(results){
        context.commit('setProducts', results)
      }else{
        context.commit('setError', err)
      }
    },
    async fetchProduct(context, id){
      const res = await axios.get(`${renderLink}/product/${id}`);
      const {
        result
      } = await res.data;
      console.log(result[0]);
      context.commit('setProduct', result[0]);
    },
    async register(context, payload) {
      const res = await axios.post(`${renderLink}/register`, payload);
      const {msg, err} = await res.data;
      if (msg) {
        context.commit('setError', msg)
      } else {
        context.commit('setError',err)
      }
    }
         
  },
   
  
  modules: {
  }
})
