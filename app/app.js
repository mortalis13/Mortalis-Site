const TabAndroid = httpVueLoader('/app/components/TabAndroid.vue')
const TabQtCpp = httpVueLoader('/app/components/TabQtCpp.vue')
const TabWebSites = httpVueLoader('/app/components/TabWebSites.vue')
const TabWordpress = httpVueLoader('/app/components/TabWordpress.vue')
const TabJoomla = httpVueLoader('/app/components/TabJoomla.vue')
const TabFirefox = httpVueLoader('/app/components/TabFirefox.vue')
const TabMisc = httpVueLoader('/app/components/TabMisc.vue')

const router = new VueRouter({
  routes: [
    {path: '/android', component: TabAndroid},
    {path: '/qtcpp', component: TabQtCpp},
    {path: '/web-sites', component: TabWebSites},
    {path: '/wordpress', component: TabWordpress},
    {path: '/joomla', component: TabJoomla},
    {path: '/firefox-addons', component: TabFirefox},
    {path: '/misc', component: TabMisc},
    
    {path: '*', redirect: '/android'}
  ],
  linkActiveClass: 'active',
  
  scrollBehavior (to, from, savedPosition) {
    // console.log('== scrollBehavior: ' + to.hash);
    
    if (savedPosition) {
      return savedPosition
    }
    else if (to.hash) {
      // setTimeout(() => {
      //   const element = document.getElementById(to.hash.replace(/#/, ''))
      //   element.scrollIntoView()
      // }, 500)
      
      return {selector: to.hash}
    }
    else {
      return {x:0, y:0}
      // return {}
    }
  }
  
})

const App = new Vue({el: '#app', components: {'app': httpVueLoader('/app/Main.vue')}, router})