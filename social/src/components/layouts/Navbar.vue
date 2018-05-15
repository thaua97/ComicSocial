<template>
    <span>
        <nav class="bgn">
            <div class="nav-wrapper container">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <slot></slot>
                </ul>
            </div>
        </nav>
    </span>
</template>
<script>
    export default {
        name: 'Navbar'
    }
</script>
<style scoped>
    .bgn {
        background: linear-gradient(45deg, #0a77b6 0%, #06e2ff 100%);
    }
</style>
