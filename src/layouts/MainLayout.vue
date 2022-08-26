<template>
  <q-layout view="lHh Lpr lFf" class="background">
    
    <q-header class="header">     
      <div class="row justify-center"> 
        <q-tabs align="right" no-caps class="col-6" indicator-color="transparent">

          <q-route-tab active-class="active-route" class="circularTabs q-mt-xl q-mr-md" 
            name="aboutMe" label="Sobre mí" to="/" exact
          />

          <q-route-tab active-class="active-route" class="circularTabs q-mt-xl q-mr-xl" 
            name="projects" label="Proyectos" to="projects" exact
          />

        </q-tabs> 
      </div>
      
    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: { },

  setup () {


    return {
      
    }

  }
})
</script>

<style scoped>

.background {
  background-color: rgba(191, 239, 136, 1);
}

.header {
  background-color: rgba(0, 0, 0, 0);
}

.circularTabs {
  border-radius: 50px;
  border: 1px solid #fff;
}

.active-route {
  background-color: rgba(255, 255, 255, 0.2);
}



</style>