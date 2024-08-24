<template>
    <div class="login-container">
        <div class="login-card">
            <h2>Login</h2>
            <form @submit.prevent="handleLogin">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" required />
                </div>
                <div class="input-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" v-model="password" required />
                </div>
                <button type="submit" class="login-button">Entrar</button>
            </form>
            <div class="divider">ou</div>
            <button class="google-button" @click="loginWithGoogle">Entrar com Google</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth, googleProvider } from '@/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('Usuário logado:', userCredential.user);
        router.push('/home');  // Redireciona para a rota /home após o login
    } catch (error) {
        console.error('Erro ao fazer login:', error.message);
    }
};

const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log('Usuário logado com Google:', result.user);
        router.push('/home');  // Redireciona para a rota /home após o login
    } catch (error) {
        console.error('Erro ao fazer login com Google:', error.message);
    }
};
</script>


<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

}

.login-card {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.25rem;

    text-align: center;
    width: 500px;
}

h2 {
    margin-bottom: 1.5rem;
    color: #333;
}

.input-group {
    margin-bottom: 1rem;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
}

.input-group input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.login-button {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--green-dark);
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
}

.login-button:hover {
    background-color: #218838;
}

.divider {
    margin: 1.5rem 0;
    color: #888;
    font-size: 0.875rem;
}

.google-button {
    width: 100%;
    padding: 0.75rem;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
}

.google-button:hover {
    background-color: #357ae8;
}
</style>