<template>
  <video
        src="backgroundVideo.mp4" muted
        autoplay
        loop />

  <h1 class="text-h3 centerText absolute-center matriverRegularFont">I am Juanma</h1>

  <q-layout view="lHh Lpr lFf">
    
    <q-header class="header">     
      <div class="row justify-left"> 
        <q-tabs align="right" no-caps class="col-11" indicator-color="transparent">

          <q-tab active-class="active-route" class="circularTabs q-mt-xl q-mr-md" 
            name="aboutMe" label="Sobre mí" @click="alert = true"
          />

          <q-route-tab active-class="active-route" class="circularTabs q-mt-xl q-mr-md" 
            name="projects" label="Proyectos" to="projects" exact
          />

          <q-route-tab active-class="active-route" class="circularTabs q-mt-xl q-mr-xl" 
            name="contactme" label="Contáctame" 
          />

        </q-tabs> 
      </div>
      
    </q-header>
    
    <q-page-container>
      <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      alert: ref(false),
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
  border: 1px solid #fff;
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

  min-width: 100%;
  min-height: 100%;
}



</style>