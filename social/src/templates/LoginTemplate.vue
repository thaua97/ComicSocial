<template>
  <span>
    <header>
        <navbar logo="Social" url="/" cor="">
            <li v-if="!usuario"><router-link  to="/login">Entrar</router-link></li>
            <li v-if="!usuario"><router-link  to="/cadastro">Cadastrar-se</router-link></li>        
        </navbar>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <grid-vue tamanho="6">
                    <slot name="logo"></slot>
                </grid-vue>
                <grid-vue tamanho="6">
                    <card-menu-vue>
                        <slot name="form"></slot>
                    </card-menu-vue>
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
  name: 'LoginTemplate',
  data () {
      return {
          usuario: false
      }
  },
  components: {
      Navbar,
      Rodape,
      GridVue,
      CardMenuVue
  },
  created(){
      console.log('created()');
      let usuarioAUX = sessionStorage.getItem('usuario');
      if(usuarioAUX){
          this.usuario = JSON.parse(usuarioAUX);
          this.$router.push('/');
      }
  },
  methods: {
      sair(){
          sessionStorage.clear();
          this.usuario = false;
      }
  }
}
</script>