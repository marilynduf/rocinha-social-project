import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import App from './App.vue'
import router from './router'
import SideBar from './components/SideBar.vue'
import MainNav from './components/MainNav.vue'
import FooterPrismic from './components/FooterPrismic.vue'
import AjiraHeader from './components/AjiraHeader.vue'
import RocHeader from './components/rocHeader.vue'
import Modal from './components/Modal.vue'
// import ExposantSound from './components/exposantSound.vue'
import Exposition from './components/exposition.vue'

import Bianca from './components/participants/bianca.vue'
import Castello from './components/participants/castello.vue'
import Eric from './components/participants/eric.vue'
import Alexia from './components/participants/alexia.vue'
import Audrey from './components/participants/audrey.vue'
import Catharina from './components/participants/catharina.vue'
import Emmanuelle from './components/participants/emmanuelle.vue'
import Juliane from './components/participants/juliane.vue'
import Leiticia from './components/participants/leiticia.vue'
import Loane from './components/participants/loane.vue'
import Luma from './components/participants/luma.vue'
import Marcelle from './components/participants/marcelle.vue'
import Rozeline from './components/participants/rozeline.vue'
import Thais from './components/participants/thais.vue'
import Willington from './components/participants/willington.vue'

// import Flickity from 'flickity';

// COMPONENTS

Vue.component('ajira-header', AjiraHeader);
Vue.component('roc-header', RocHeader);
Vue.component('side-bar', SideBar);
Vue.component('main-nav', MainNav);
Vue.component('footer-prismic', FooterPrismic);
Vue.component('modal', Modal);
// Vue.component('exposant-sound', ExposantSound);
Vue.component('exposition', Exposition);

Vue.component('bianca', Bianca);
Vue.component('castello', Castello);
Vue.component('eric', Eric);
Vue.component('alexia', Alexia);
Vue.component('audrey', Audrey);
Vue.component('catharina', Catharina);
Vue.component('emmanuelle', Emmanuelle);
Vue.component('juliane', Juliane);
Vue.component('Leiticia', Leiticia);
Vue.component('loane', Loane);
Vue.component('catharina', Catharina);
Vue.component('luma', Luma);
Vue.component('marcelle', Marcelle);
Vue.component('rozeline', Rozeline);
Vue.component('thais', Thais);
Vue.component('willington', Willington);

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer,
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
