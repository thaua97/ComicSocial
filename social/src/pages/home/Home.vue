<template>
    <span>
        <publicar-vue/>
        <card-conteudo-vue 
        perfil="https://materializecss.com/images/yuna.jpg"
        nome="Maria" 
        data="13/05/18 - 00:30"
        >
            <conteudo-card-vue
            imagem="https://materializecss.com/images/sample-1.jpg"
            titulo="Teste"
            texto="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, accusamus. Inventore ex aspernatur iste, nemo ab ea cumque, omnis numquam fugit expedita dignissimos quasi nesciunt placeat enim facere dolor mollitia!
            "
            />  
        </card-conteudo-vue>
    </span>
</template>
<script>
    import CardConteudoVue from '@/components/social/CardConteudoVue'
    import ConteudoCardVue from '@/components/social/ConteudoCardVue'
    import PublicarVue from '@/components/social/PublicarVue'

    export default {
        components: {
            CardConteudoVue,
            ConteudoCardVue,
            PublicarVue
        }
    }
</script>

