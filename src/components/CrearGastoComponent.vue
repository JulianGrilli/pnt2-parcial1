<template>

  <section class="src-components-crear-gasto-component">
    <div class="jumbotron">
      <h1 class="display-4">Crear Gastos</h1>
      <hr>
      <p class="lead">- Formulario para la creación de gastos -</p>
    </div>
    <div class="container">
      <div class="col-md-12">
        <form  nonvalidate autocomplete="off" @submit.prevent="enviar()">
          <!-- Campo Nombre -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              class="input-valor form-control" 
              v-model="$v.f.nombre.$model"
              placeholder="Ingrese un nombre"
            >
          </div>
          <!-- Validacion campo Nombre -->
          <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
            <div v-else-if="$v.f.nombre.minLength.$invalid">Este campo debe tener al menos 5 caracteres</div>
            <div v-else-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener como maximo 10 caracteres</div>
          </div>

          <!-- Campo Descripcion -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="descripcion">Descipcion</label>
            <textarea 
              class="input-valor form-control" 
              id="descripcion" 
              v-model="$v.f.descripcion.$model"
              placeholder="Ingrese una descripcion"
            ></textarea>
          </div>
          <!-- Validacion campo Descripcion -->
          <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger mt-1">
              <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
          </div>


          <!-- Campo importe -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="importe">Importe</label>
            <input 
              type="number" 
              class="input-valor form-control" 
              id="nombre" 
              v-model="$v.f.importe.$model"
              placeholder="Ingrese una importe"
            >
          </div>
          <!-- Validacion campo importe -->
          <div v-if="$v.f.importe.$error && $v.f.importe.$dirty" class="alert alert-danger mt-1">
              <div v-if="$v.f.importe.required.$invalid">Este campo es requerido</div>
          </div>
          <button 
            type="submit" 
            class="btn btn-success"
            :disabled="false"
          >
            Crear Gasto
          </button> 
        </form>
      </div>
    </div>
  </section>


</template>

<script>

  import {required, minLength, maxLength} from '@vuelidate/validators' 
  export default  {
    name: 'src-components-crear-gasto-component',
    props: [],
  data () {
    return {
      f: this.resetForm(),
      url: 'https://5f86225bc8a16a0016e6ab42.mockapi.io/api/v1/usuarios/gastos'
    }
  },
  computed: {

  },
  mounted () {

  },
  validations: {
    f: {
        nombre: { 
          required,
          minLength: minLength(5),
          maxLength: maxLength(10)
        },
        importe: { 
          required
        },
        descripcion: {
          required
        }
      }
  },
  methods: {
    sendsFormData(datos){
      console.log(datos)
    },
    enviar(){
      
      let form = {
          nombre: this.$v.f.nombre.$model,
          importe: this.$v.f.importe.$model,
          descripcion: this.$v.f.descripcion.$model
      }
      console.log(form)
      this.sendDatosFormAxios(form)
      this.f = this.resetForm()
      this.$v.$reset()
    },
    resetForm(){
      return {
        nombre: '',
        importe: '',
        decripcion: ''
      }
    },
    sendDatosFormAxios(datos) {
      this.axios.post(this.url, datos, {'content-type': 'application/json'})
      .then(res => console.log(res.data))
      .catch(error => console.log('HTTP POST ERROR', error))
    }
}
}


</script>

<style scoped lang="css">
  .src-components-crear-gasto-component {

  }
  .label-form {
    float: left;
    margin-left: 3px;
    margin-top: 35px;
}

h1 {
    font-size: 30px;
}

button {
    position: absolute;
    right: 17px;
    margin-bottom: 20px;
    margin-top: 10px;
    box-shadow: 4px 4px #87f137b5;
}

.jumbotron {
    background-color: #d8e7f7;
    box-shadow: 1px 2px #3597ff7d;
}

.input-valor {
    box-shadow: 4px 4px #d8e7f77d;
}

</style>
