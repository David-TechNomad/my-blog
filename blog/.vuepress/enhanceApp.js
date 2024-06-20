// enhanceApp.js
import { getCount } from "../utils/api";
import Vue from "vue";
export default ({ router, isServer }) => {
  // 路由切换事件处理
  router.beforeEach(async (to, from, next) => {
    Vue.prototype.isServer = isServer;
    if (typeof _hmt != "undefined") {
      // 这里稍微修改了一下，因为被编译成html了，hash值改变就不再重复添加了
      if (to.path && (to.path == "/" || to.path != from.path)) {
        _hmt.push(["_trackPageview", to.path]);
        await getCount(to.path);
      }
    }
    next();
  });
};
