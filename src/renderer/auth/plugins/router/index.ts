import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import {ElectronWindowType} from '@main/window-type';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AuthLayout",
    component: () => import("@renderer/auth/layouts/AuthMain.vue"),
    meta: { bypassLogin: true, window: ElectronWindowType.Auth },
    // children: [
    //   {
    //     path: "/",
    //     redirect: "login",
    //   },
    //   {
    //     path: "login",
    //     name: "AuthLoginIndex",
    //     component: () => import("@renderer/auth/views/login/Index.vue"),
    //     meta: { title: "登录" },
    //   },
    //   {
    //     path: "register",
    //     name: "AuthRegisterIndex",
    //     component: () => import("@renderer/auth/views/register/Index.vue"),
    //     meta: { title: "注册" },
    //   },
    // ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
