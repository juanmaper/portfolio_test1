
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '',
        name: '',
        component: () => import('pages/AboutMePage.vue') 
      },
      { 
        path: 'projects',
        name: 'projects',
        component: () => import('pages/ProjectsPage.vue') 
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
