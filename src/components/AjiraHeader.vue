<template>
  <header>
    <h2 class="main-title">
      <span>Rocinha</span><br>
      {{ $prismic.richTextAsPlain(fields.title) }}
    </h2>
    <div class="header__intro">
      {{ $prismic.richTextAsPlain(fields.description) }}
    </div>
    <div class="home-bg-card">
      <img alt="carte" src="../assets/img/carte-fond2.svg" style="top: 70.6%!important;">
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        documentId: '',
        fields: {
          title: null,
          description: null,
        }
      }
    },
    methods: {
      getContent(uid) {
        this.$prismic.client.getSingle('home')
          .then((document) => {
            if (document) {
              this.documentId = document.id;
              this.fields.title = document.data.title;
              this.fields.description = document.data.description
            } else {
              this.$router.push({name: 'not-found'})
            }
          })
      }
    },

    created() {
      this.getContent(this.$route.params.uid)
    },
    beforeRouteUpdate(to, from, next) {
      this.getContent(to.params.uid);
      next()
    }
  }
</script>
