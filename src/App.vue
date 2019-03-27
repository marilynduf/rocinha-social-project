<template>
  <div id="app">
    <router-view/>

      <!-- <div class="logo-ajira"> Ajira</div> -->

      <menu id="show-modal" @click="showModal = true" class="ham"> 
          <div class="ham__line"></div>
          <div class="ham__line"></div>
          <div class="ham__line"></div>
      </menu>

      <modal v-if="showModal" @close="showModal = false"></modal>
      
  </div>
</template>

<script>

export default {
  name: 'App',
   data () {
     return {
      showModal: false
    }
  },
   methods: {
    close() {
      this.$emit('close');
    },
  },
}

</script>

<style>
@import "./assets/font/fontface.css";
@import "./assets/css/resetr.css";
@import "./assets/css/all.css";
@import "./assets/css/prismic-edit-button.css";
</style>
