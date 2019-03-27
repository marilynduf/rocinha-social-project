<template>
  <div class="wrapper">

    <ajira-header class="header"></ajira-header>

    <section class="section">
      <div class="home-nav">
          <main-nav ></main-nav>
      </div>
      <div class="home-bg-card">
          <img src="../assets/img/carte-fond2.svg" alt="carte">
      </div>
    </section>
    <prismic-edit-button :documentId="documentId"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      documentId: '',
      fields: {
        title: null,
        description: null,
      }
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getSingle('home')
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.title = document.data.title
            this.fields.description = document.data.description
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },

  created () {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>
