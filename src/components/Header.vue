<template>
    <div>
        <header class="header-container">
            <div class="header-content">
                <img src="../assets/logo.svg" alt="vue money" />

                <div class="header-user">
                    <img src="../assets/icons/person-icon.svg" alt="icons" width="16px" />
                    <span>{{ userEmail }}</span>
                </div>

                <button type="button" @click="showModal = true">
                    Nova transação
                </button>
            </div>
        </header>

        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <h2>Nova Transação</h2>
                <input v-model="newTransaction.title" placeholder="Título" />
                <select v-model="newTransaction.type">
                    <option value="">Tipo</option>
                    <option value="deposit">Entrada</option>
                    <option value="withdraw">Saída</option>
                </select>
                <input v-model="newTransaction.category" placeholder="Categoria" />
                <input v-model="newTransaction.amount" placeholder="Quantia" type="number" />
                <input v-model="newTransaction.createdAt" placeholder="Data" type="date" />

                <button @click="addTransaction">Adicionar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Importa funções do Firebase
import { useTransactionStore } from '../stores/useTransactionStore';

const showModal = ref(false);
const newTransaction = ref({
    title: '',
    type: '',
    category: '',
    amount: 0,
    createdAt: '',
});

const store = useTransactionStore();
const userEmail = ref(''); // Referência para armazenar o email do usuário

const addTransaction = () => {
    store.addTransaction({ ...newTransaction.value });
    showModal.value = false;

    // Limpa os campos do formulário
    newTransaction.value = {
        title: '',
        type: '',
        category: '',
        amount: 0,
        createdAt: '',
    };
};

// Obtém o email do usuário logado
onMounted(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userEmail.value = user.email;
        } else {
            // Se o usuário não estiver autenticado, redirecione para a página de login ou tome outra ação
            console.log('Usuário não autenticado');
        }
    });
});
</script>

<style scoped>
/* (Mantenha o estilo conforme o exemplo anterior) */
.header-container {
    background: var(--green-dark);
}

.header-content {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-user {
    background: #2A737D;
    padding: 10px 15px;
    border-radius: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
}

.header-user img {
    background: var(--green);
    margin-right: 5px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 5px;
}

button {
    font-size: 1rem;
    color: var(--green-dark);
    background: var(--green);
    font-weight: 600;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
}

button:hover {
    filter: brightness(0.9);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: #fff;
    padding: 2rem;
    border-radius: 0.25rem;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.modal-content h2 {
    margin-bottom: 1rem;
}

.modal-content input,
.modal-content select {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
}

input::placeholder,
select::placeholder {
    color: var(--text-body);
}

input+input,
input+select,
select+input,
select+select {
    margin-top: 1rem;
}

.modal-content button {
    width: 99%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
}
</style>
