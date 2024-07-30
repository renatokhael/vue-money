<template>
    <section class="summary-container">
        <div>
            <header>
                <p>Entradas</p>
                <img src="../assets/income.svg" alt="Entradas" />
            </header>
            <strong>
                {{ formattedIncome }}
            </strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img src="../assets/outcome.svg" alt="Saídas" />
            </header>
            <strong>
                {{ formattedOutcome }}
            </strong>
        </div>
        <div class="highlight-background">
            <header>
                <p>Total</p>
                <img src="../assets/total.svg" alt="Total" />
            </header>
            <strong>
                {{ formattedTotal }}
            </strong>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useTransactionStore } from '../stores/useTransactionStore';
import { storeToRefs } from 'pinia';

const store = useTransactionStore();
const { transactions } = storeToRefs(store);

const income = computed(() =>
    transactions.value
        .filter(transaction => transaction.type === 'deposit')
        .reduce((acc, transaction) => acc + transaction.amount, 0)
);

const outcome = computed(() =>
    transactions.value
        .filter(transaction => transaction.type === 'withdraw')
        .reduce((acc, transaction) => acc + transaction.amount, 0)
);

const total = computed(() => income.value - outcome.value);

const formattedIncome = computed(() =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(income.value)
);

const formattedOutcome = computed(() =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(outcome.value)
);

const formattedTotal = computed(() =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total.value)
);
</script>

<style scoped>
.summary-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;
}

div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
}

div.highlight-background {
    background: var(--blue-light);
    color: white;
}
</style>