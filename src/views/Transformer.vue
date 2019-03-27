<template>

  <div class="container">

  <side-bar :title="fields.title"></side-bar>

  <roc-header :intro="fields.intro" :title="fields.title"></roc-header>
   
    <div>
      
      <section class="section" v-for="(slice, index) in slices" :key="'slice-' + index">

        <template v-if="slice.slice_type === 'section'">

          <prismic-rich-text class="section__title" :field="slice.primary.title2"/>
          <prismic-rich-text class="section__text" :field="slice.primary.texte"/>

          <div style="display:flex;width:100%;">

            <template v-for="(item, index) in slice.items">

            <div class="section__bloc">

              <div class="wrapper">
                <prismic-image class="section__image" :field="item.image2" :key="'photo-item-' + index"/>
              </div>

              <prismic-rich-text class="section__description" :field="item.description"/>
              <prismic-rich-text class="section__credit" :field="item.credit"/>

            </div>
          
          </template>

          </div>

        </template>
        
         <template v-if="slice.slice_type === 'video'">

         
          <template v-for="(item, index) in slice.items">

              <prismic-embed :field="item.video"/>
              <prismic-rich-text class="section__description" :field="item.description2"/>
              <prismic-rich-text class="section__credit" :field="item.credit1"/>
      
          </template>

        </template>
      </section>

    </div>

  </div>
  
</template>

<script>
export default {
  name: 'Transformer',
  data () {
    return {
      slices: [],
      documentId: '',
      fields: {
        title: '',
        intro: '',
      },
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('section', uid)
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.title = document.data.title
            this.fields.intro = document.data.intro
            this.fields.image = document.data.image
            this.fields.image = document.data.credit
            this.slices = document.data.body
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
