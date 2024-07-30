<template>
    <section class="transactions-table-container">
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="transaction in transactions" :key="transaction.id">
                    <td>{{ transaction.title }}</td>
                    <td :class="transaction.type">
                        {{ new Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(transaction.amount) }}
                    </td>
                    <td>{{ transaction.category }}</td>
                    <td>
                        {{ new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt)) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTransactionStore } from '../stores/useTransactionStore';

const store = useTransactionStore();
const { transactions } = storeToRefs(store);
</script>

<style scoped>
.transactions-table-container {
    margin-top: 4rem;
}

table {
    width: 100%;
    border-spacing: 0 0.5rem;
}

table th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
}

table td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;
}

table td:first-child {
    color: var(--text-color);
}

table td.deposit {
    color: var(--green);
}

table td.withdraw {
    color: var(--red);
}
</style>