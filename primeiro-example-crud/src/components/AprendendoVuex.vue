<template>
    <div class="principal">
        <fieldset id="campos" v-if="disabled" disabled="disabled">
        <div class="form">
            <div class="linha cabecalho-linha cabecalho">Cadastro de Pessoas</div>
            <div class="linha form-linha" v-if="pessoa.id"><label>Código:{{pessoa.id}}</label></div>
            <div class="linha form-linha">
                <label for="nome">Nome:</label>
                <input type="hidden" id="id" v-model="pessoa.id">
                
                <input type="text" id="nome" v-model="pessoa.nome">
            </div>
            <div class="linha form-linha">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="pessoa.email">
            </div>
            <div class="linha form-linha">
                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" :value="pessoa.telefone | telefone">
            </div>
            <div class="linha form-linha">
                <label for="celular">Celular:</label>
                <input type="text" id="celular" :value="pessoa.celular | telefone">
            </div>
            <div class="linha form-linha">
                <label for="idade">Idade:</label>
                <input type="text" id="idade" v-model="pessoa.idade">
            </div>
            <div class="linha form-linha rodape">
                <button @click="salvar" >
                    <font-awesome-icon icon="save" />
                    <span class="oculta"> Salvar</span>
                </button>
                <button disabled >
                    <font-awesome-icon icon="times-circle" />
                    <span class="oculta"> Cancelar</span>
                </button>
            </div>
        </div>
        </fieldset>
        <fieldset id="campos" v-else>
        <div class="form">
            <div class="linha cabecalho-linha cabecalho">Cadastro de Pessoas</div>
            <div class="linha form-linha" v-if="pessoa.id"><label>Código: {{pessoa.id}}</label></div>
            <div class="linha form-linha" v-else><label>Código: {{id}}</label></div>
            <div class="linha form-linha">
                <label for="nome">Nome:</label>
                <input type="hidden" id="id" v-model="pessoa.id">
                
                <input type="text" id="nome" v-model="pessoa.nome">
            </div>
            <div class="linha form-linha">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="pessoa.email">
            </div>
            <div class="linha form-linha">
                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" v-mask="'(##) ####-####'" v-model="pessoa.telefone">
            </div>
            <div class="linha form-linha">
                <label for="celular">Celular:</label>
                <input type="text" id="celular" v-mask="'(##) #####-####'" v-model="pessoa.celular">
            </div>
            <div class="linha form-linha">
                <label for="idade">Idade:</label>
                <input type="text" id="idade" v-model="pessoa.idade">
            </div>
            <div class="linha form-linha rodape">
                <button @click="salvar" >
                    <font-awesome-icon icon="save" />
                    <span class="oculta"> Salvar</span>
                </button>
                <button @click="cancelar" >
                    <font-awesome-icon icon="times-circle" />
                    <span class="oculta"> Cancelar</span>
                </button>
            </div>
        </div>
        </fieldset>
        <div v-if="this.pessoas.length>0" :class="style">
            <table  class="">   
                <caption>Listagem de Pessoas
                    <div class="linha" v-if="disabled">
                        <button @click="novo(), disabled=false,mostraLista=false" >
                            <font-awesome-icon icon="user-plus" />
                            <span class="oculta"> Novo</span>
                        </button>
                        <button @click="mostraLista=!mostraLista" >
                            <font-awesome-icon icon="list-alt" />
                            <span class="oculta"> Mostrar Lista</span>
                        </button>
                    </div>
                    <div class="linha" v-else>
                        <button disabled >
                            <font-awesome-icon icon="user-plus" />
                            <span class="oculta"> Novo</span>
                        </button>
                        <button disabled >
                            <font-awesome-icon icon="list-alt" />
                            <span class="oculta"> Mostrar Lista</span>
                        </button>
                    </div>
                </caption>
                <thead v-show="mostraLista">
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th class="oculta">E-mail</th>
                        <th class="oculta">Telefone</th>
                        <th class="oculta">Celular</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody v-show="mostraLista">
                    <tr v-for="pessoa in pessoas" :key="pessoa.id" >
                        <td @click="ver(pessoa)">{{pessoa.id}}</td>
                        <td @click="ver(pessoa)" class="texto-esquerda">{{pessoa.nome}}</td>
                        <td @click="ver(pessoa)">{{pessoa.idade}}</td>
                        <td @click="ver(pessoa)" class="texto-esquerda oculta">{{pessoa.email}}</td>
                        <td @click="ver(pessoa)" class="oculta">{{ pessoa.telefone | telefone }}</td>
                        <td @click="ver(pessoa)" class="oculta">{{ pessoa.celular | telefone }}</td>
                        <td>
                            <a href="#" @click="editar(pessoa),mostraLista=!mostraLista"><font-awesome-icon icon="user-edit" /><span class="oculta">
                                 Editar</span>
                            </a>
                            <a href="#" @click="deletar(pessoa)"><font-awesome-icon icon="trash" />
                                <span class="oculta"> Excluir</span>
                            </a>
                            <a href="#" @click="ver(pessoa)"><font-awesome-icon icon="eye" />
                                <span class="oculta"> Ver</span>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else :class="style">
                <div class="area">
                    <div class="linha" v-if="disabled">
                        <button @click="novo(), disabled=false,mostraLista=!mostraLista" >
                            <font-awesome-icon icon="user-plus" />
                            <span class="oculta"> Novo</span>
                        </button>
                    </div>
                    <div class="linha" v-else>
                        <button disabled >
                            <font-awesome-icon icon="user-plus" />
                            <span class="oculta"> Novo</span>
                        </button>
                        <button disabled >
                            <font-awesome-icon icon="list-alt" />
                            <span class="oculta"> Mostrar Lista</span>
                        </button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
//import { mapState } from 'vuex'
export default {
    name: 'AprendendoVuex',
    filters: {
        telefone(fone){
            fone = `${fone}`.replace(/\D/g, "");
            fone = fone.replace(/^(\d\d)(\d)/g, "($1) $2");

            if (fone.length < 14) {
                fone = fone.replace(/(\d{4})(\d)/, "$1-$2");
            } else {
                
                fone = fone.replace(/(\d{5})(\d)/, "$1-$2");
            }   
            return fone;
            
            //return fone.replace(/\D/g,'').length === 11 ? '(##) 00000-0000' : '(##) 0000-00009'
            
        }
    },
    computed: {
        
        style() {
            return 'centro cabecalho rodape'
        },
        pessoas() {
            return this.$store.state.pessoas
        }

    },
    data: function () {
        return {
            id:'',
            pessoa:{},
            disabled:true,
            mostraLista:false,
            maskTelefone:''
        }
    },
    methods: {
        deletar(pessoa) {
            if(confirm(`Tem certeza que deseja excluir o registro de ${pessoa.nome}`)===true){
                this.$store.dispatch('deletarpessoa',{...pessoa})
            }
            
        },
        cancelar() {
            this.disabled = true
            this.novo()
        },
        editar(pessoa) {
            this.id = pessoa.id
            this.pessoa = {...pessoa}
            this.disabled = false
            
            if (this.pessoa.telefone.length < 11) {
                this.maskTelefone='(##) ####-####'
                
            } else {
                this.maskTelefone='(##) #####-####'
                
            }
            
            
        },
        ver(pessoa) {
            this.id = pessoa.id
            this.pessoa = {...pessoa}
            this.disabled = true
            
        },
        salvar() {
            if(this.pessoa.id){
                this.$store.dispatch('editarpessoa', {...this.pessoa})
                

            } else {
                if(this.pessoa.nome && this.pessoa.idade){
                    
                    this.$store.dispatch('salvarpessoa', {id:this.id,...this.pessoa})
                } else {
                    alert('Preencha os campos')
                }            
            }
            this.novo()
            this.disabled=true
        },
        novo() {
            const novoId = () => {
                let arrayCodigo = []
                if (this.$store.state.pessoas.length > 0){
                    for(let c = 0; c < this.$store.state.pessoas.length; c++ ) {
                        arrayCodigo += [this.$store.state.pessoas[c].id]
                        
                    }
                    
                    return Math.max(...arrayCodigo) + 1
                }else{
                    return 1
                }
            }
            this.pessoa = []
            this.id = novoId()
            
        }
    },
}
</script>

<style>
    :root { 
        --cor-fundo-corpo: rgba(18, 122, 134, 1);
        --cor-table-cell-hover:rgba(18, 122, 134, 0.418);
        --branco:#fff;
        --raio-borda-form: 10px;
    }
    
    fieldset {
        border:0px;
        margin: 0px;
        background: var(--branco);
    }
    .centro {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        
        text-align: center;
        position: relative;
        border: 5px solid var(--cor-fundo-corpo);
        padding: 10px 10px 10px;
        background: var(--branco);
    }

    .cabecalho-linha {
        display: flex!important;
        flex-direction: column!important;
        max-width: 100%;
        padding: 10px 10px 10px;
        text-align: center!important;
        position: relative;
        background: var(--branco);
        border: 5px solid var(--branco);
        font-weight: 900;
        font-size: 1rem;
        
    }
    .cabecalho {
        border-top-left-radius: var(--raio-borda-form)!important;
        border-top-right-radius: var(--raio-borda-form)!important
    }

    .rodape {
        border-bottom-left-radius: var(--raio-borda-form)!important;
        border-bottom-right-radius: var(--raio-borda-form)!important
    }
    .form {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        padding: 15px 30% 15px;
        width: 40%;
        background: var(--cor-fundo-corpo);
        
        
    }

    .form-linha {
        display: flex;
        flex-direction: column;
        width: 100%;
        
        text-align: center;
        position: relative;
        border: 5px solid var(--branco);
        background: var(--branco);
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 0px;
        padding-top: 5px;
        
    }
    
    @media(max-width: 700px) {
        .form {
            padding: 0px;
            padding-top: 5px!important;
            width: 100%;
        }

        .form .linha label {
            padding-left: 0!important;
            padding-right: 0%!important;
            padding-top: 5px!important;
            width: 70px!important;
        }

        .form .linha input {
            width: 70%!important;
            padding-left: 15px!important;
            margin-left: 15px;
            border-radius: var(--raio-borda-form);
        }

        .oculta {
            display: none!important;
        }
    }
    
    .form .linha {
        display: flex;
        position: relative;
        flex-direction: row;
        padding-bottom: 2%;
        width: 90%;
    }
    
    .form button {
        padding: 5px 5px 5px;
        margin: 5px;
        width: 50%;
        border-radius: var(--raio-borda-form);
    }

    button {
        padding: 5px 5px 5px;
        margin: 5px;
        width: 120px;
        border-radius: var(--raio-borda-form);
    }
    
    .form .linha label {
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 3px;
        width: 20%;
        text-align: right;
    }

    .form .linha input {
        width: 100%;
        height: 20px;
        padding-left: 15px!important;
        border-radius: var(--raio-borda-form);
    }
    table {
        width: 100%;
        font-size: 11px;
    }
    table caption {
        font-weight: bolder;
    }

    table a {
        margin-left: 10px;
    }

    table {
        border-collapse: collapse;
    }

    table td {
        border-bottom: 2px solid var(--cor-fundo-corpo);
        
    }
    table .texto-esquerda {
        text-align: left;
    }
    table tbody tr:hover {
        background:  var(--cor-table-cell-hover);
    }

    a:link {
        text-decoration: none;
        color: var(--cor-fundo-corpo)
    }

    a:visited {
        text-decoration: none;
        color: var(--cor-fundo-corpo)
    }

    a:hover {
        text-decoration: underline;
        color: var(--cor-fundo-corpo)
    }

    a:active {
        text-decoration: underline;
        color: var(--cor-fundo-corpo)
    }
</style>