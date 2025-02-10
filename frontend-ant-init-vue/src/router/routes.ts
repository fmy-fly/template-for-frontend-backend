import HomeView from '@/views/HomeView.vue'
import searchView from '@/views/searchView.vue'
import AdminView from '@/views/AdminView.vue'
import AboutView from '@/views/AboutView.vue'
import NoAuthView from '@/views/NoAuthView.vue'
import AccessEnum from '@/access/accessEnum.ts'

export const routes = [
  {
    path: '/',
    name: '浏览题目',
    component: searchView,
    meta: {
      access: AccessEnum.NOT_LOGIN,
    },
  },
  {
    path: '/hide',
    name: '隐藏页面',
    component: HomeView,
    meta: {
      hideInMenu: true,
    },
  },

  {
    path: '/admin',
    name: '管理员',
    component: AdminView,
    meta: {
      access: AccessEnum.ADMIN,
    },
  },

  {
    path: '/noAuth',
    name: '没有权限',
    component: NoAuthView,
    meta: {
      access: AccessEnum.NOT_LOGIN,
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
    meta: {
      access: AccessEnum.NOT_LOGIN,
    },
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      access: AccessEnum.NOT_LOGIN,
    },
  },
]
