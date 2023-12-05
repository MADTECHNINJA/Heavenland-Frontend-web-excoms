import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import NotFound from "./components/NotFound.vue"
import Staking from "./components/Staking.vue"
import StakingDetail from "./components/StakingDetail.vue"
import Home from "./components/Home.vue"
import "./main.css"
import Toast from "vue-toastification"
// Import the CSS or use your own!
import "vue-toastification/dist/index.css"

const routes = [
  { path: "/", component: Home },
  { path: "/:pathMatch(.*)*", component: NotFound },
  /* { path: "/staking", component: Staking },
  {
    path: "/staking/:id",
    name: "stakingDetail",
    component: StakingDetail,
    props({ params }) {
      return { id: +params.id }
    },
  }, */
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }
  },
})

createApp(App).use(Toast).use(router).mount("#app")
