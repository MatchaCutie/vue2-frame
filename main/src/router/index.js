import Home from '@/views/Home.vue'
import MicroComponent from '@/components/microComponent.vue'

export default [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/micro',
    component: MicroComponent,
    children: [
      {
        path: 'sub-vue2',
        name: 'sub-vue2',
        component: MicroComponent,
        children: [
          {
            path: '*'
          }
        ]
      },
      {
        path: 'sub-html',
        name: 'sub-html',
        component: MicroComponent,
        children: [
          {
            path: '*'
          }
        ]
      }
    ]
  }
]
