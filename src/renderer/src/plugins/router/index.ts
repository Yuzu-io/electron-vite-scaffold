import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import {ElectronWindowType} from '@main/window-type';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AuthLayout",
    component: () => import("@renderer/src/layouts/AuthMain.vue"),
    meta: { bypassLogin: true, window: ElectronWindowType.Auth },
    children: [
      {
        path: "/",
        redirect: "index",
      },
      {
        path: "index",
        name: "Index",
        component: () => import("@renderer/src/views/index/index.vue"),
        meta: { title: "首页" },
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
