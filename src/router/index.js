import tag from '@/examples/docs/tag.md'
import layout from '@/examples/components/layout'

export default [
  {
    path: '/',
    redirect: () => {
      return {
        name: 'tag'
      }
    }
  },
  {
    path: '/ui',
    component: layout,
    children: [
      {
        path: 'tag',
        name: 'tag',
        component: tag
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
