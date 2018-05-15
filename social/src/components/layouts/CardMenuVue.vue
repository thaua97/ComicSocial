<template>
  <span>
    <div class="card-panel grey lighten-5 z-depth-1">
        <slot></slot>
    </div>
  </span>
</template>
<script>
    export default {
        name: 'CardMenuVue',
        props: [],
        data () {
            return {

            }
        }
    }
</script>