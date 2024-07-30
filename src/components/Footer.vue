<template>
    <footer class="footer-container">
        <p>Desenvolvido por Renato Khael usando Vue.js + Pinia</p>
    </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--shape);
    /* ou outra cor que preferir */
    color: var(--text-title);
    /* ou outra cor que preferir */
    position: fixed;
    width: 100%;
    bottom: 0;
}

.footer-container p {
    margin: 0;
    font-size: 1rem;
}
</style>