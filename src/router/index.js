import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Holding from '../views/holding/Holding'
import About from '../views/about/About'
import Feedback from '../views/feedback/Feedback'
import FundHave from '../views/tables/FundHave'
import FundSelected from '../views/tables/FundSelected'
import FundChart from '../views/chart/FundChart'
import SharesHave from '../views/tables/SharesHave'
import SharesSelected from '../views/tables/SharesSelected'
import SharesChart from '../views/chart/SharesChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/holding',
      component: Holding,
      children:[
        { path:'', component:FundHave},
        { path:'fundHave', component:FundHave},
        { path:'fundSelected', component:FundSelected},
        { path:'fundChart', component:FundChart},
        { path:'sharesHave', component:SharesHave},
        { path:'sharesSelected', component:SharesSelected},
        { path:'sharesChart', component:SharesChart}
      ]
    },
    {
      path:'/about',
      component: About
    },
    {
      path:'/feedback',
      component: Feedback
    }
  ]
})
