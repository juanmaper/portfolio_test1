<template>
  <q-layout view="lHh Lpr lFf" class="background">
    
    <q-header class="header">     
      <q-tabs align="right" no-caps>
          <q-route-tab name="aboutMe" label="Sobre mí" to="/" exact/>
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

<style scoped>

.background {
  background-color: rgba(191, 239, 136, 1);
}

.header {
  background-color: rgba(0, 0, 0, 0);
}

</style>