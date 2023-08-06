import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Applicants from '../components/Applicants.vue'
import Applicant_info from '../components/Applicant_info.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/applicants',
    name: 'applicants',
    component: Applicants,
   
  
  },
  {
    path: "/applicant/:id",
    name: "Applicant_info",
    component: Applicant_info,
    props: true, 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
