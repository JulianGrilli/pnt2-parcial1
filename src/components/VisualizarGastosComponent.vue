<template>

  <section class="src-components-visualizar-gastos-component">
    
    <div class="jumbotron">
      <h1 class="display-4">Obtención de Gastos</h1>
      <hr>
      <p class="lead">- Tabla de Gastos Obtenidos de MockApi.io -</p>
    </div>
    <div class="container">
      <div v-if="gastos.length == 0 && requestCompleted" class="alert alert-warning mt-1">
        <span>No hay Gastos registrados.</span>      
      </div>
      <input 
              type="number" 
              id="presupuesto" 
              class="input-valor form-control" 
              v-model="presupuesto"
              placeholder="Ingrese el presupuesto con el que cuenta"
              style="margin-bottom: 15px;"
            >
      <table class="table table-striped " v-if="gastos.length > 0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Edad</th>
                <th scope="col">Importe</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(gasto, index) in gastos"
              :key="index">
                <td></td>
                <td>{{gasto.nombre}}</td>
                <td>{{gasto.descripcion}}</td>
                <td>{{dateFormat(gasto.createdAt)}}</td>
                <td>{{numberWithDolar(gasto.importe)}}</td>
              </tr>
              <tr :style="{'color': getTextColor}">
                <td></td>
                <td></td>
                <td></td>
                <td><strong>Total</strong></td>
                <td><strong>{{numberWithDolar(obtenerSumaTotal)}}</strong></td>
              </tr>
            </tbody>
      </table>
    </div>
  </section>

</template>

<script>

  import Filters from '../Filters.js'

  export default  {
    name: 'src-components-visualizar-gastos-component',
    mixins : [Filters],
    props: [],
    mounted () {
      this.getDatosFormAxios()
    },
    data () {
      return {
        gastos: [],
        requestCompleted: false,
        url: 'https://5f86225bc8a16a0016e6ab42.mockapi.io/api/v1/usuarios/gastos',
        presupuesto: null
      }
    },
    methods: {
      async getDatosFormAxios() {
        let response = await this.axios(this.url)
        try {
          console.log(response.data)
          this.gastos = response.data
          this.requestCompleted = true;
        } catch (error) {
          console.log("Error obtenido haciendo el Get de los gastos")
        }
      },
    },
    computed: {
      obtenerSumaTotal(){
        let total = 0;
        this.gastos.forEach(function (gasto) {
          total = total + parseInt(gasto.importe)
        });
        //return this.gastos.reduce((a, b) => (parseInt(a.importe) + parseInt(b.importe)));
        return total;
      },
      getTextColor(){
        if(this.obtenerSumaTotal > this.presupuesto && this.presupuesto != null){
          return 'red';
        }
        if(this.obtenerSumaTotal < 1000){
          return 'green';
        }else if (this.obtenerSumaTotal >= 1000 && this.obtenerSumaTotal <= 5000){
          return '#FF00FF';
        } else if (this.obtenerSumaTotal > 5000){
          return 'orange';
        } else {
          return 'black';
        }
        
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-visualizar-gastos-component {

  }
  table {
    border: 1px solid lightblue;
  }
  
  .jumbotron {
    background-color: #d8e7f7;
    box-shadow: 1px 2px #3597ff7d;
  }
</style>
