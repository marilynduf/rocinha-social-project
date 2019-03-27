<template>

<transition name="modal">

    <div class="modal-mask">

      <!-- <div @click="$emit('close')" class="close"></div> -->

      <section class="menu"> 

        <div class="container">

        <h1><img class="logo-rocinha" src="../assets/img/rocinha-logo.svg" alt="Rocinha"></h1>

      <div class="home-nav">

        <div class="participants">

          <div class="participants__title">Participants</div>
            <ul>
              <li class="participants__item">Alexia Lima</li>
              <li class="participants__item">Audrey da Costa</li>
              <li class="participants__item">Bianca Oliva</li>
              <li class="participants__item">Castelo Branco</li>
              <li class="participants__item">Catharina Aiza Rego Marinho</li>
              <li class="participants__item">Emmanuele</li>
              <li class="participants__item">Eric</li>
              <li class="participants__item">Juliane Cruz</li>
              <li class="participants__item">Leiticia Ferreira Silva</li>
              <li class="participants__item">Loane Carolina de Jesus Silva</li>
              <li class="participants__item">Luma Gomes</li>
              <li class="participants__item">Marcelle Rodrigues</li>
              <li class="participants__item">Rozeline Silva</li>
              <li class="participants__item">Thais Almeida</li>
              <li class="participants__item">Wellington Perreira</li>
              <p class="eperluette">&</p>
              <li class="participants__item">Francine Saillant,<br>Lygia Segala & Antonio Carlos Firmino</li>
            </ul>
          </div>


        <nav>
          <li class="home-nav__item"><router-link to="/idee/idee">L'idée</router-link></li>
              
            <div class="separator"></div>

            <ul>
                <li @click="$emit('close')"><router-link to="/hier/hier">Hier</router-link></li>
                <li @click="$emit('close')"><router-link to="/aujourdhui/aujourdhui">Aujourd'hui</router-link></li>
                <li @click="$emit('close')"><router-link to="/voir/voir">Voir</router-link></li>
                <li @click="$emit('close')"><router-link to="/creer/creer">Créer</router-link></li>
                <li @click="$emit('close')"><router-link to="/transformer/transformer">Transformer</router-link></li>
            </ul>
        </nav>

      </div>

      </div>

      <div class="home-bg-card">
          <img src="../assets/img/carte-fond2.svg" alt="carte">
      </div>

    </section>

   

    </div>

    </transition>
  

</template>

<script>
export default {
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