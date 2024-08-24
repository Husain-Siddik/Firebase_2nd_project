import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import profile from '../components/profile.vue'
import Login from '../components/Login.vue'
import { UseSignInUserStore } from '../stores/SignInUserStore'


const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: { requiresAuth: true },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      beforeEnter: (to, from, next) => {
        const signInUserStore = UseSignInUserStore()
        const isAuthenticated = signInUserStore.LogInUser;
        if (to.meta.requiresAuth && !isAuthenticated) {
          next('/login');
        }else{
          next();
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/registration.vue')
    },
    // 
    {

      path: '/profile',
      name: 'profile',
      component: profile,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        // store called inside route
        const signInUserStore = UseSignInUserStore()
        const isAuthenticated = signInUserStore.LogInUser;
        // wihout login profile route e inter kora jabe na
        if (to.meta.requiresAuth && !isAuthenticated) {
          next('/login'); // Redirect to login if not authenticated
        }
        else {
          next(); // Proceed to route
        }
      },
      // beforeRouteUpdate(to, from, next) {
      //   const signInUserStore = UseSignInUserStore()
      //   const isAuthenticated = signInUserStore.LogInUser;
      //   if (!isAuthenticated ) {
      //     next('/login'); // Redirect to login if not authenticated
      //   } else {
      //     next(); // Proceed to route
      //   }
      // },


    },


  ]
})

export default router
