<template>
    <span>
        <nav :class="cor || 'bgn'">
            <div class="nav-wrapper container">      
                <router-link class="brand-logo" :to="url || '/'">{{logo || 'Site'}}</router-link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <slot />
                </ul>
            </div>
        </nav>
    </span>
</template>
<script>
    export default {
        name: 'Navbar',
        props: ['logo','url','cor'],
        data () {
            return {

            }
        }
    }
</script>
<style scoped>
    .bgn {
        background: linear-gradient(45deg, #0a77b6 0%, #06e2ff 100%);
    }
</style>
