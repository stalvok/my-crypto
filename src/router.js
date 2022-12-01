import {createRouter,createWebHashHistory} from "vue-router";
import HomePage from "./components/HomePage.vue";
import MarketPage from "./components/MarketPage.vue";
import CoinDetail from "./components/CoinDetail.vue";
import WalletPage from "./components/WalletPage.vue";
import InsightsPage from "./components/InsightsPage.vue";
import loginPage from "./components/LoginPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: HomePage},
    {path: '/market', component: MarketPage},
    {path: '/coin-detail', component: CoinDetail},
    {path: '/wallet', component: WalletPage},
    {path: '/insights', component: InsightsPage},
    {path: '/login', component: loginPage}
  ]
    }
)