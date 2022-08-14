<template>
  <div class="q-pa-md">
    
    <p class="text-h3 text-center q-pt-xl">¿Quién soy?</p>

    <div class="row items-center justify-evenly">
      <q-img
        class="col-6 personalImage"
        src="~assets/personalImage.jpg"
        width="280px"
        length="280px"
        alt="Picture of me" 
        
      >

        <template v-slot:loading>
          <q-spinner-gears color="white" />
        </template>
      </q-img>
      <p class="col-6 text-subtitle1">
        Soy un ingeniero informático con experiencia en desarrollo web.
        Quiero profesionalizarme en Ruby on Rails, por lo que en mi tiempo libre
        profundizo y aprendo este framework desarrollando varias aplicaciones.
        Me encanta conocer personas nuevas con las cuales poder afrontar nuevos retos
        como equipo. Me gusta colaborar y poner mi granito de arena para que este
        mundo sea un poquito mejor, por lo que he participado en algunas iniciativas sin
        ánimo de lucro como desarrollador Android para ayudar a niños con autismo.
      </p>
    </div>
  </div>

  <div class="q-pt-xl">

    <p class="text-h3 text-center q-pt-xl">¿Qué puedo aportar?</p>

    <div class="row items-center justify-evenly">
      
      <p class="col-6 text-subtitle1">
        Soy un ingeniero informático con experiencia en desarrollo web.
        Quiero profesionalizarme en Ruby on Rails, por lo que en mi tiempo libre
        profundizo y aprendo este framework desarrollando varias aplicaciones.
        Me encanta conocer personas nuevas con las cuales poder afrontar nuevos retos
        como equipo. Me gusta colaborar y poner mi granito de arena para que este
        mundo sea un poquito mejor, por lo que he participado en algunas iniciativas sin
        ánimo de lucro como desarrollador Android para ayudar a niños con autismo.
      </p>

      <q-img
        class="col-6 personalImage"
        src="~assets/personalImage.jpg"
        width="280px"
        length="280px"
        alt="Picture of me" 
        
      >

        <template v-slot:loading>
          <q-spinner-gears color="white" />
        </template>
      </q-img>

    </div>

  </div>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {

    return {
      
    }
  }
}
</script>

<style scoped>

.personalImage {
  border-radius: 100%;
  border: 10px solid rgba(255, 166, 0, .8);
}

</style>