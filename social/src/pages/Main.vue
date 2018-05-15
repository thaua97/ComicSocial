<template>
  <span>
    <header>
        <navbar>
            <li><router-link to="/" >Inicio</router-link></li>
            <li v-if="!usuario"><router-link  to="/login">Entrar</router-link></li>
            <li v-if="!usuario"><router-link  to="/cadastro">Cadastrar-se</router-link></li>
            <li v-if="usuario"><router-link to="/cadastro">{{usuario.name}}</router-link></li>
            <li v-if="usuario"><a v-on:click="sair()">Sair</a></li>
        </navbar>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <grid-vue tamanho="4">
                    <card-menu-vue>
                        <div class="row">
                            <grid-vue tamanho="3">
                                <img src="https://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img">
                            </grid-vue>
                            <grid-vue tamanho="9">
                                <span class="black-text">
                                    <h6>{{usuario.name}}</h6>
                                    Add the "circle" class to it to make it appear circular.
                                </span>
                            </grid-vue>
                        </div>
                    </card-menu-vue>
                    <card-menu-vue>
                        <h3>teste</h3>
                    </card-menu-vue>
                </grid-vue>
                <grid-vue tamanho="8">
                    <router-view/>
                </grid-vue>                
            </div>
        </div>
    </main>
    <rodape></rodape>        
  </span>
</template>

<script>
import Navbar from '@/components/layouts/Navbar'
import Rodape from '@/components/layouts/Footer'
import GridVue from '@/components/layouts/GridVue'
import CardMenuVue from '@/components/layouts/CardMenuVue'


export default {
  name: 'Main',
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
      }else{
        this.$router.push('/login');
      }
  },
  methods: {
      sair(){
          sessionStorage.clear();
          this.usuario = false;
          this.$router.push('/login');
      }
  }
}
</script>