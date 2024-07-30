<template>
    <section class="dashboard-container">
        <Summary />
        <TransactionsTable />
    </section>
</template>

<script setup>
import Summary from './Summary.vue'
import TransactionsTable from './TransactionsTable.vue'

</script>

<style scoped>
.dashboard-container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
}
</style>