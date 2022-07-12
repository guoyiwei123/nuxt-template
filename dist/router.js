import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e2634dc6 = () => interopDefault(import('../src/pages/test/error.vue' /* webpackChunkName: "pages/test/error" */))
const _5bd7872a = () => interopDefault(import('../src/pages/test/hollow.vue' /* webpackChunkName: "pages/test/hollow" */))
const _07fdd1da = () => interopDefault(import('../src/pages/test/lottie.vue' /* webpackChunkName: "pages/test/lottie" */))
const _38a84f20 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test/error",
    component: _e2634dc6,
    name: "test-error"
  }, {
    path: "/test/hollow",
    component: _5bd7872a,
    name: "test-hollow"
  }, {
    path: "/test/lottie",
    component: _07fdd1da,
    name: "test-lottie"
  }, {
    path: "/",
    component: _38a84f20,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
