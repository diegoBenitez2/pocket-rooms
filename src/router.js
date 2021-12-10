import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage.vue';
import SearchPage from './views/SearchPage.vue';
import NotFoundPage from './views/NotFoundPage.vue';
import CreateHomePage from './views/CreateHomePage.vue';

// User Pages
import ProfilePage from './views/user/ProfilePage.vue';
import HousesPages from './views/user/HousesPage.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage,
    },
    {
      path: '/user',
      redirect: { name: 'ProfilePage' },
    },
    {
      path: '/user/profile',
      name: 'ProfilePage',
      component: ProfilePage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/user/houses',
      name: 'HousesPages',
      component: HousesPages,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/house',
      redirect: {
        name: 'ProfilePage',
      },
    },
    {
      path: '/house/new',
      name: 'CreateHousePage',
      component: CreateHomePage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage,
    }, 
  ],
});

router.beforeEach((to, from, next) => {
  if (to.match.some(route => route.meta.requiresAuth)) {
    if (store.state.authId) {
      next();
    } else {
      next({ name: 'HomePage' });
    }
  } else { 
    next();
  }
})

export default router;
