<template>
  <q-layout view="lHh Lpr lFf">
    
    <q-header elevated>     
      <q-skeleton width="100%" height="100px" animation="none"/>
      <q-tabs align="left" no-caps>
          <q-route-tab name="aboutMe" label="Sobre mí" to="about" exact/>
          <q-route-tab name="projects" label="Proyectos" to="projects" exact/>
      </q-tabs>
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
