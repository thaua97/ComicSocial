<template>
  <span>
      <div :class="'col s'+ tamanho">
          <slot></slot>
      </div>
  </span>
</template>
<script>
    export default {
        name: 'GridVue',
        props: ['tamanho']
    }
</script>