export default [
  {
    path: '/aircraft',
    name: 'aircraft',
    component: () => import(/* webpackChunkName: "aircraft" */ '../views/IOS/Position'),
    meta: {
      icon: 'plane-line',
      iconActive: 'plane-fill',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/position',
    name: 'position',
    component: () => import(/* webpackChunkName: "position" */ '../views/IOS/Position'),
    meta: {
      icon: 'pin-distance-line',
      iconActive: 'pin-distance-fill',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/environment',
    name: 'environment',
    component: () => import(/* webpackChunkName: "environment" */ '../views/IOS/Position'),
    meta: {
      icon: 'sun-cloudy-line',
      iconActive: 'sun-cloudy-fill',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/comms',
    name: 'comms',
    component: () => import(/* webpackChunkName: "comms" */ '../views/IOS/Control'),
    meta: {
      icon: 'broadcast-line',
      iconActive: 'broadcast-fill',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/failure',
    name: 'failure',
    component: () => import(/* webpackChunkName: "failure" */ '../views/IOS/Failure'),
    meta: {
      icon: 'spam-2-line',
      iconActive: 'spam-2-fill',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '../views/IOS/Failure'),
    meta: {
      icon: 'route-line',
      iconActive: 'route-fill',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/freeze-reset',
    name: 'freeze-reset',
    component: () => import(/* webpackChunkName: "freeze-reset" */ '../views/IOS/Control'),
    meta: {
      icon: 'restart-line',
      iconActive: 'restart-fill',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/control',
    name: 'control',
    component: () => import(/* webpackChunkName: "sim-control" */ '../views/IOS/Control'),
    meta: {
      icon: 'computer-line',
      iconActive: 'computer-fill',
      showBack: false,
      keepAlive: true
    }
  },
  {
    path: '/',
    redirect: '/control'
  }
]
