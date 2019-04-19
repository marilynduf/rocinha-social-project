<template>
  <div id="creer">
  <div @click="$emit('close')"><router-link to="/"><div class="logo-ajira">Ajira</div></router-link></div> 

    <div style="overflow-y:hidden;" class="container">
      <side-bar></side-bar>
      <roc-header :intro="fields.intro" :title="fields.title"></roc-header>
    </div>

    <div class="exposition__bg"></div>

    <flickity ref="flickity" :options="flickityOptions">

        <div class="carousel-cell" v-for="slideName in slideNames" :key="slideName">
          <component :is="slideName" :ref="slideName"></component>
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
      },
      slideNames: [
        "alexia", 
        "audrey",
        "bianca",
        "castello",
        "catharina",
        "emmanuelle",
        "eric",
        "juliane",
        "leiticia",
        "loane",
        "luma",
        "marcelle",
        "rozeline",
        "thais",
        "willington" 
      ]
    };
  },
  watch: {
    $route: 'changeSlide'
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
    changeSlide () {
      const exposant = this.$route.params.exposant;
      if (exposant) {
        const slideIndex = this.slideNames.indexOf(exposant);
        this.$refs.flickity.select(slideIndex);
        window.scrollTo(0, 100000000000);
      }
    }
  },
  created() {
    this.getContent(this.$route.params.uid);
  },
  mounted() {
    const self = this;
    this.changeSlide();
    this.$refs.flickity.on("change", () => {
      self.slideNames.forEach(slideName => {
        const child = self.$refs[slideName];
        if (child[0]) {
          child[0].pause();
        }
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};

</script>
