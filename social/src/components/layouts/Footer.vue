<template>
    <span>
        <footer :class="'page-footer '+ cor || bgf">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">{{logo || 'Site'}}</h5>
                <p class="grey-text text-lighten-4">{{descricao || "Sua descrição"}}</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <slot name="links"></slot>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © {{ano || '2018'}} Copyright {{logo || 'Site'}}
            </div>
          </div>
      </footer>
    </span>
</template>
<script>
export default {
  name: 'Rodape',
  props:['cor','logo','descricao','ano'],
  data () {
    return {

    }
  }
}
</script>
<style scoped>
    .bgf {
        background: linear-gradient(45deg, #0a77b6 0%, #06e2ff 100%);
    }
</style>
