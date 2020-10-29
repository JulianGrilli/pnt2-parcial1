<template>

  <div class="jumbotron">
      <h1 class="display-4">Multiple Choice</h1>
      <hr>
      <p class="lead">- Tabla que demuestra el resultado de las respuestas de multiple choice-</p>
    </div>
    <div class="container">
      <table class="table table-striped " v-if="preguntas.length > 0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Pregunta</th>
                <th scope="col">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pregunta, index) in preguntas"
              :key="index">
                <td></td>
                <td>{{pregunta.numero}}</td>
                <td>{{pregunta.respuesta.toString()}}</td>
              </tr>
            </tbody>
      </table>
    </div>

</template>

<script>

  export default  {
    name: 'src-components-multiple-choice-component',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          {numero: 1, respuesta: ['B', 'D']},
          {numero: 2, respuesta: ['B']},
          {numero: 3, respuesta: ['C']},
          {numero: 4, respuesta: ['D']},
          {numero: 5, respuesta: ['B','E']},
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-multiple-choice-component {

  }
</style>
