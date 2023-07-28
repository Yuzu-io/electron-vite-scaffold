import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import {ElectronWindowType} from '@main/window-type';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/main',
    name:'MainLayout',
    component: () => import("@renderer/layouts/main/MainLayout.vue"),
    meta: { window: ElectronWindowType.Main },
    redirect: "index",
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@renderer/views/index/index.vue"),
        meta: { title: "首页" },
      },
    ]
  },
  {
    path: "/auth",
    name: "AuthLayout",
    component: () => import("@renderer/layouts/auth/AuthLayout.vue"),
    meta: { window: ElectronWindowType.Auth },
    redirect: "login",
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@renderer/views/login/index.vue"),
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
