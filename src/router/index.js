import { createRouter, createWebHistory } from "vue-router";
import ACospend from "../views/a_cospend_list.vue";
import Login from "../views/Login.vue";
import GCospend from "../views/g_cospend_list.vue";
import addCospend from "../views/add_cospend.vue";


const routes = [
  {
    path: "/",
    name: "a_cospend",
    component: ACospend,
  },  
  
  {
    path: "/",
    name: "g_cospend",
    component: GCospend,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/addcospend",
    name: "add_cospend",
    component: addCospend,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles

// Route guard for auth routes

export default router;
