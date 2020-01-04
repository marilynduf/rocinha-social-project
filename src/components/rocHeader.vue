<template>
  <header class="header">
    <h1><img alt="Rocinha" src="../assets/img/rocinha-logo-2.svg" style="width:60%;"><br> <span class="city"> Rio de Janeiro, Brésil</span>
    </h1>
    <div class="aside__title">
      <h2 class="aside__h2">{{ $prismic.richTextAsPlain(title) }}</h2>
      <div class="aside__title-bg">
        <img alt="" src="../assets/img/carte-fond.svg">
      </div>
    </div>
    <div class="wrap">
      <div class="header__intro">
        {{ $prismic.richTextAsPlain(intro) }}
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      title: null,
      intro: null
    }
  }
</script>
