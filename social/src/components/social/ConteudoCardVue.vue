<template>
  <span>
    <div v-if="imagem" class="card-image">
        <img :src="imagem" :alt="titulo">
        <span class="card-title">
            <strong>{{ titulo || '' }}</strong>
        </span>
    </div>
    <div v-if="texto" class="card-content">
        <p>{{texto}}</p>
    </div>
  </span>
</template>
<script>
    export default {
        name: 'ConteudoCardVue',
        props: ['imagem', 'titulo', 'texto'],
        data () {
            return {

            }
        }
    }
</script>
