import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        name: 'Proyecto 1',
        descripcion: 'Proyecto hecho en Vue.js',
        etiquetas: 'Vue'
      }
    ]
  })
});
