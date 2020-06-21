import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pessoas: [
      { id: 1, nome:'Paulo Eduardo Monteiro',email:'monteiroconsultoria.paulo@gmail.com',telefone:'(51)3933-7954', idade: 32},
      { id: 2, nome:'Maria da Silva',email:'mariasilva@maria.com',telefone:'(51)3933-7954', idade: 72},
      { id: 3, nome:'João da Silva Marciano',email:'joaosilva@joao.com',telefone:'(51)3933-7954', idade: 69},
      { id: 4, nome:'Marcos Alberto Pereira',email:'marcos@marcos.com',telefone:'(51)3933-7954', idade: 41},
      { id: 5, nome:'Juca Bala',email:'jucabala@juca.com',telefone:'(51)3933-7954', idade: 17},
    ]  
  },
  mutations: {
    salvarpessoa(state, pessoa) {
      state.pessoas.push(pessoa )
      console.log({...state.pessoas})
      alert(`Pessoa ${pessoa.nome} cadastrada com sucesso.`)
      
    },
    editarpessoa(state, pessoa) {
      alert(`Pessoa ${pessoa.nome} alterada com sucesso.`)
      
    },
    deletarpessoa(state, pessoa) {
      const deletar = () => {
        for(let c = 0; c < state.pessoas.length; c++){
          if(pessoa.id===state.pessoas[c].id){
            state.pessoas.splice(c,1)
            console.log({...pessoa})
            return true
          }
        }
        return false
      }
      if(deletar()===true){
        alert(`Registro excluida com sucesso.`)
        
      }else{
        alert('Ops algo errado')
      }
      
    }
  },
  actions: {
    salvarpessoa(context, pessoa) {
      const verificaDuplicidade = () => {
        for(var c = 0; c < context.state.pessoas.length; c++) {
          if(pessoa.nome.trim() == context.state.pessoas[c].nome.trim() && pessoa.idade == context.state.pessoas[c].idade) {
            return true
          }
        }
        return false
      }
      const repetido = verificaDuplicidade()
      if(!repetido){
        context.commit('salvarpessoa',pessoa)
      }else {
        alert(`Pessoa já existe.`)
      }
        
    },

    editarpessoa(context, pessoa) {
      const alterardados = (id) => {
        for(var c = 0; c < context.state.pessoas.length; c++) {
          if(context.state.pessoas[c].id === id ) {
            
            context.state.pessoas[c] = { ...pessoa} 
            
            return true
          }
          
        }return false
      }
      
      const alterou = alterardados(pessoa.id)

      if(alterou){
        context.commit('editarpessoa',pessoa)
      }else{
        alert('Ops algo errado')
      }
    },
    deletarpessoa(context, pessoa) {
      context.commit('deletarpessoa',pessoa)
    }

  },
  modules: {
  }
})
