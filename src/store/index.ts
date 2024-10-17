import { createStore } from 'vuex'
import axios from 'axios'

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number; // quantidade é opcional
}

export default createStore({
  state: {
    products:[] as Product[],
    productsInBag:[] as Product[]
  },
  getters: {
  },
  mutations: {
      // O state garante acesso as propriedades dos valores que contém
      //Em seguida temos products como o objeto a ser acessado dos dados da ação
      loadProducts(state,produtos){
        state.products = produtos
      },
      addToBag(state,product){
        state.productsInBag.push(product)
      },
      removeToBag(state,productId){
        const updatedBag = state.productsInBag.filter( product => product.id != productId.id )
        state.productsInBag = updatedBag
      }

  },
  actions: {
                //A commit diz respeito as mutations
    loadProducts({commit}){
      axios.get('https://fakestoreapi.com/products')
            .then(resposta =>{
              //Passando o loadProducts da mutation
                commit('loadProducts', resposta.data)
            })
    },
    addToBag({commit}, product : Product){
        commit('addToBag',product)
    },
    removeFromBag({commit},productId : number){
        commit('removeFromBag',productId)
    }
  },
  modules: {
  }
})
