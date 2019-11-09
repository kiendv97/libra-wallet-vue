import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Send from './views/Send'
import Receive from './views/Receive'
import Transactions from './views/Transactions'
import ScanQR from './views/ScanQR'
import Stats from './views/Stats'
import PaymentSuccess from './views/PaymentSuccess'
import About from './views/About'
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'

Vue.use(Router)
const router =  new Router({
  routes: [
    
    {
      path: '/auth/signup',
      name: 'Sign Up',
      component: SignUp
    },
    {
      path: '/auth/signin',
      name: 'Sign In',
      component: SignIn
    },
    {
      path: '/',
      name: 'Wallet',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/send',
      name: 'Send',
      component: Send,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/receive',
      name: 'Receive',
      component: Receive,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/scanQR',
      name: 'ScanQR',
      component: ScanQR,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: Transactions,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/paymentSuccess',
      name: 'PaymentSuccess',
      component: PaymentSuccess,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/facebook',
      name: 'Facebook',
      meta: {
        requiresAuth: true
      },
      beforeEnter (route) {
        const { locale } = route.query

        if (locale === 'en') {
          location.href = 'https://www.facebook.com/kien.nguyenvan.1675'
        } else {
          location.href = 'https://www.facebook.com/kien.nguyenvan.1675'
        }
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token_wallet')) {
      next()
      return
    }
    next("/auth/signin")
  } else {
    next()
  }
})

export default router