<template>
  <site-template>
    <span slot="menuesquerdo">
      <div class="row valign-wrapper">
        <grid-vue tamanho="12">
          <img src="http://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
        </grid-vue>
        <grid-vue tamanho="12">
          <span class="black-text">
            <h5>Maria Silva</h5>
            Add the "circle" class to it to make it appear circular.
          </span>
        </grid-vue>
      </div>
    </span>
    <span slot="principal">
      <publicar-vue />
      <card-conteudo-vue
        perfil="http://materializecss.com/images/yuna.jpg"
        nome="Maria Silva"
        data="13/01/18 13:30">
          <conteudo-card-vue
            imagem="http://materializecss.com/images/sample-1.jpg"
            titulo="Teste"
            texto="I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively."  />
      </card-conteudo-vue>
    </span>
  </site-template>
</template>

<script>
import SiteTemplate from '@/templates/SiteTemplate'
import CardConteudoVue from '@/components/social/CardConteudoVue'
import ConteudoCardVue from '@/components/social/ConteudoCardVue'
import PublicarVue from '@/components/social/PublicarVue'
import GridVue from '@/components/layouts/GridVue'


export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components:{
    SiteTemplate,
    CardConteudoVue,
    ConteudoCardVue,
    PublicarVue,
    GridVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
