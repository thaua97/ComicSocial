<template>
  <span>
    <div class="row">
        <grid-vue tamanho="12 input-field">
            <textarea v-model="conteudo" class="materialize-textarea" rows="3"></textarea>
            <label>Qual é a boa?</label>
        </grid-vue>
        <p>
            <button v-if="conteudo" class="btn waves-effect waves-light bgb col s2 offset-s10">Publicar</button>
        </p>
    </div>
  </span>
</template>
<script>
    import GridVue from '@/components/layouts/GridVue'

    export default {
        name: 'PublicarVue',
        components: {
            GridVue
        },
        props: [],
        data () {
            return {
                conteudo: ''
            }
        }
    }
</script>
<style scoped>
    .bgb{
        background: linear-gradient(45deg, #0a77b6 0%, #06e2ff 100%);
    }
</style>