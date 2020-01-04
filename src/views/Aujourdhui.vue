<template>
  <div class="container">
    <div @click="$emit('close')">
      <router-link to="/">
        <div class="logo-ajira">Ajira</div>
      </router-link>
    </div>
    <side-bar :title="fields.title"/>
    <roc-header :intro="fields.intro" :title="fields.title"/>
    <div>
      <section :key="'slice-' + index" class="section" v-for="(slice, index) in slices">
        <template v-if="slice.slice_type === 'section'">
          <prismic-rich-text :field="slice.primary.title2" class="section__title"/>
          <prismic-rich-text :field="slice.primary.texte" class="section__text"/>
          <div style="display:flex;width:100%;">
            <template v-for="(item, index) in slice.items">
              <div class="section__bloc">
                <div class="wrapper">
                  <prismic-image :field="item.image2" :key="'photo-item-' + index" class="section__image"/>
                </div>
                <prismic-rich-text :field="item.description" class="section__description"/>
                <prismic-rich-text :field="item.credit" class="section__credit"/>
              </div>
            </template>
          </div>
        </template>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Transformer',
    data() {
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
      getContent(uid) {
        this.$prismic.client.getByUID('section', uid)
          .then((document) => {
            if (document) {
              this.documentId = document.id;
              this.fields.title = document.data.title;
              this.fields.intro = document.data.intro;
              this.fields.image = document.data.image;
              this.fields.image = document.data.credit;
              this.slices = document.data.body
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
