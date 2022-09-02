<template>
  <video
          src="backgroundVideo.mp4" muted
          autoplay
          loop />

  <h1 class="text-h3 centerText fixed-center matriverRegularFont">I am Juanma</h1>

  <q-layout view="lHh Lpr lFf">
    
    <q-header class="header">     
      <div class="row justify-left"> 
        <q-tabs align="right" no-caps class="col-10" indicator-color="transparent">

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
      <!-- <router-view /> -->
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

<style scoped lang="scss">

.header {
  background-color: rgba(0, 0, 0, 0);
}

.circularTabs {
  border-radius: 50px;
  border: 1px solid $vue-secondary;
  background-color: $vue-primary;
}

.active-route {
  background-color: $vue-primary;
  border: 1px solid #fff;
}

.centerText {
  // background-color: red;
  font-size: 70px;
  color: $vue-primary;
  text-align: center;
}

video {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
}



</style>