<template>
  <div id="app">
    <router-view/>
    <menu @click="showModal = true" class="ham" id="show-modal">
      <div class="ham__line"></div>
      <div class="ham__line"></div>
      <div class="ham__line"></div>
    </menu>
    <modal @close="showModal = false" v-if="showModal"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
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
