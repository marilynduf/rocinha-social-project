<template>
  <div id="creer"> 

    <div style="overflow-y:hidden;" class="container">
      <side-bar></side-bar>
      <roc-header :intro="fields.intro" :title="fields.title"></roc-header>
    </div>

    <div class="exposition__bg"></div>

    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <alexia></alexia>
      </div>

       <div class="carousel-cell">
        <audrey></audrey>
      </div>
      
      <div class="carousel-cell">
          <bianca></bianca>
      </div>

      <div class="carousel-cell">
        <castello></castello>
      </div>

       <div class="carousel-cell">
          <catharina></catharina>
      </div>

      <div class="carousel-cell">
          <emmanuelle></emmanuelle>
      </div>

      <div class="carousel-cell">
        <eric></eric>
      </div>

      <div class="carousel-cell">
          <juliane></juliane>
      </div>

      <div class="carousel-cell">
          <leiticia></leiticia>
      </div>

       <div class="carousel-cell">
          <loane></loane>
      </div>

       <div class="carousel-cell">
          <luma></luma>
      </div>

       <div class="carousel-cell">
          <marcelle></marcelle>
      </div>

       <div class="carousel-cell">
          <rozeline></rozeline>
      </div>

       <div class="carousel-cell">
          <thais></thais>
      </div>

        <div class="carousel-cell">
          <willington></willington>
      </div>
    </flickity>

</div>

</template>


<script>
import Flickity from 'vue-flickity';

export default {
  name: "creer",
  components: {
    Flickity
  },
  data() {
    return {
      slices: [],
      documentId: "",
      fields: {
        nom: "",
        intro: "",
        title: ""
      },
      flickityOptions: {
        pageDots: true,
        wrapAround: true
      }
    };
  },
  methods: { 
    getContent(uid) {
      this.$prismic.client.getSingle("exposition").then(document => {
        if (document) {
          this.documentId = document.id;
          this.fields.title = document.data.title;
          this.fields.intro = document.data.intro;
          this.fields.nom = document.data.nom;
          this.slices = document.data.body;
        } 
        else {
          this.$router.push({ name: "not-found" });
        }
      });
    },
  },
  created() {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};

</script>
