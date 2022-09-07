<template>
  <div class="container absolute-center">
    <q-img src="~assets/personalImage.jpg" height="100%" width="100%" />
  </div>

  <!-- <h1 class="text-h3 centerText absolute-center matriverRegularFont">I am Juanma</h1> -->

  <!-- <q-layout view="lHh Lpr lFf">
    
    <q-header class="header">     
      <div class="row justify-left"> 
        <q-tabs align="right" no-caps class="col-11" indicator-color="transparent">

          <q-tab active-class="active-route" class="circularTabs q-mt-xl q-mr-md" 
            name="aboutMe" label="Sobre mí" @click="alert = true"
          />

          <q-route-tab active-class="active-route" class="circularTabs q-mt-xl q-mr-md" 
            name="projects" label="Proyectos"
          />

          <q-route-tab active-class="active-route" class="circularTabs q-mt-xl q-mr-xl" 
            name="contactme" label="Contáctame" 
          />

        </q-tabs> 
      </div>
      
    </q-header>
    
    <q-page-container>
       <router-view /> 
    </q-page-container>
  </q-layout> -->
  
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: { },

  setup () {


    return {
      alert: ref(false),
    }

  }
})
</script>

<style scoped lang="scss">


.centerText {
  // background-color: red;
  font-size: 70px;
  color: $vue-primary;
  text-align: center;
}

.container {
  height: 500px;
  width: 500px;
  background-color: red;
}

video {
  height: 700px;
  width: 100%;
}




</style>