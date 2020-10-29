import { createWebHistory, createRouter } from 'vue-router'
import VisualizarGastosComponent from '../components/VisualizarGastosComponent.vue'
import MultipleChoiceComponent from '../components/MultipleChoiceComponent.vue'
import CrearGastoComponent from '../components/CrearGastoComponent.vue'

const routes = [
    { path: '/', name: 'Home', component: VisualizarGastosComponent },
    { path: '/crearGasto', name: 'CrearGastoComponent', component: CrearGastoComponent },
    { path: '/visualizarGastos', name: 'VisualizarGastosComponent', component: VisualizarGastosComponent },
    { path: '/multipleChoice', name: 'MultipleChoiceComponent', component: MultipleChoiceComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


