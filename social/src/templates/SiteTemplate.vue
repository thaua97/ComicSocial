<template>
  <span>
    <header>
      <navbar logo="Social" url="/" cor="bgn">
        <li v-if="!usuario"><router-link to="/login">Entrar</router-link></li>
        <li v-if="!usuario"><router-link to="/cadastro">Cadastre-se</router-link></li>
        <li v-if="usuario"><router-link to="/perfil">{{usuario.name}}</router-link></li>
        <li v-if="usuario"><a v-on:click="sair()">Sair</a></li>
      </navbar>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <grid-vue tamanho="4">
            <card-menu-vue>
              <slot name="menuesquerdo" />
            </card-menu-vue>
            <card-menu-vue>
              <h3>Teste</h3>
            </card-menu-vue>
          </grid-vue>
          <grid-vue tamanho="8">
            <slot name="principal" />
          </grid-vue>
        </div>
      </div>
    </main>

    <rodape cor="bgf" logo="Social" descricao="Teste de descrição" ano="2018">
      <span slot="links">
        <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
        <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
      </span>
    </rodape>
  </span>
</template>

<script>
import Navbar from '@/components/layouts/Navbar'
import Rodape from '@/components/layouts/Footer'
import GridVue from '@/components/layouts/GridVue'
import CardMenuVue from '@/components/layouts/CardMenuVue'

export default {
  name: 'SiteTemplate',
  data(){
    return {
      usuario: false
    }
  },
  components:{
    Navbar,
    Rodape,
    GridVue,
    CardMenuVue
  },
  created(){
    console.log('created()');
    let usuarioAux = sessionStorage.getItem('usuario');
    if(usuarioAux){
      this.usuario = JSON.parse(usuarioAux);
    }else{
      this.$router.push('/login');
    }
  },
  methods:{
    sair(){
      sessionStorage.clear();
      this.usuario = false;
      this.$router.push('/login');
    }
  }
}
</script>

<style>

</style>
