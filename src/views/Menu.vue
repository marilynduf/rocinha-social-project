<template>
  <transition name="modal">
    <div class="modal-mask">
      <section class="menu">
        <div class="container">
          <div @click="$emit('close')">
            <router-link to="/">
              <div class="logo-ajira">Ajira</div>
            </router-link>
          </div>
          <h1><img alt="Rocinha" class="logo-rocinha" src="../assets/img/rocinha-logo.svg"></h1>
          <div class="home-nav">
            <nav>
              <li class="home-nav__item">
                <router-link to="/idee/idee">L'idée</router-link>
              </li>

              <div class="separator"></div>

              <ul>
                <li @click="$emit('close')">
                  <router-link to="/hier/hier">Hier</router-link>
                </li>
                <li @click="$emit('close')">
                  <router-link to="/aujourdhui/aujourdhui">Aujourd'hui</router-link>
                </li>
                <li @click="$emit('close')">
                  <router-link to="/voir/voir">Voir</router-link>
                </li>
                <li @click="$emit('close')">
                  <router-link to="/creer/creer">Créer</router-link>
                </li>
                <li @click="$emit('close')">
                  <router-link to="/transformer/transformer">Transformer</router-link>
                </li>
              </ul>
            </nav>

            <div class="participants">

              <div class="separator separator-mobile"></div>
              <div class="participants__title">Participants :</div>

              <ul>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/alexia">Alexia Lima</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/audrey">Audrey da Costa</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/bianca">Bianca Oliva</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/castello">Castelo Branco</router-link>
                </li>

                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/catharina">Catharina Aiza Rego Marinho</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/emmanuele">Emmanuele</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/castello">Castelo Branco</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/eric">Eric</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/juliane">Juliane Cruz</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/leiticia">Leiticia Ferreira Silva</router-link>
                </li>

                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/loane">Loane Carolina de Jesus Silva</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/luma">Luma Gomes</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/marcelle">Marcelle Rodrigues</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/rozeline">Rozeline Silva</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/thais">Thais Almeida</router-link>
                </li>
                <li @click="$emit('close')" class="participants__item">
                  <router-link to="/creer/creer/wellington">Wellington Perreira</router-link>
                </li>
                <p class="eperluette">&</p>
                <li class="participants__item">Francine Saillant,<br>Lygia Segala & Antonio Carlos Firmino</li>
              </ul>

            </div>

          </div>
        </div>
        <div class="home-bg-card">
          <img alt="carte" src="../assets/img/carte-fond2.svg">
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
  export default {
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
