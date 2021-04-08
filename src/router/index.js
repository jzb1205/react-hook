import asyncComponent from "@/utils/asyncComponent";
const login = asyncComponent(() => import("@/pages/login/login"));
const profile = asyncComponent(() => import("@/pages/profile/profile"));
const info = asyncComponent(() => import("@/pages/info/info"));
const setUser = asyncComponent(() => import("@/pages/set_user/set_user"));
const msite = asyncComponent(() => import("@/pages/msite/msite"));
const shop = asyncComponent(() => import("@/pages/shop/shop"));
const food = asyncComponent(() => import("@/pages/food/food"));
const forget = asyncComponent(() => import("@/pages/forget/forget"));
const technology = asyncComponent(() =>
  import("@/pages/technology/technology")
);

const routes = [
  {
    path: "/login",
    exact: true,
    component: login,
    _title: "登录",
  },
  {
    path: "/profile",
    component: profile,
    _title: "登录",
  },
  {
    path: "/info",
    component: info,
    _title: "信息",
  },
  {
    path: "/setUser",
    component: setUser,
    _title: "用户设置",
  },
  {
    path: "/",
    component: msite,
    _title: "首页",
  },
  {
    path: "/forget",
    component: forget,
    _title: "重置密码",
  },
  {
    path: "/shop/:id",
    component: shop,
    _title: "商品列表",
  },
  {
    path: "/food/:geohash/:id/:title",
    component: food,
    _title: "周边",
  },
  {
    path: "/technology",
    component: technology,
    _title: "技术",
  },
];
export default routes;
