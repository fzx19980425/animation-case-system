import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";
import CaseDetail from "../views/CaseDetail.vue";

const routes = [
  {
    path: "/",
    redirect: "/detail/1",
  },
  {
    path: "/detail/:id",
    name: "CaseDetail",
    component: CaseDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
