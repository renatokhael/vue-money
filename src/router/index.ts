import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import { getAuth } from "firebase/auth"; // Importa o Firebase Authentication

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true, // Marca a rota como protegida
      },
    },
  ],
});

// Guard de rota para verificar autenticação
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Verifica se a rota requer autenticação
    if (!user) {
      // Se o usuário não estiver autenticado, redireciona para a rota de login
      next({ path: "/" });
    } else {
      // Se o usuário estiver autenticado, permite a navegação
      next();
    }
  } else {
    // Para rotas que não requerem autenticação, permite a navegação
    next();
  }
});

export default router;
