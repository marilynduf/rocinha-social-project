<template>

    <header class="header">

        <h1><img style="width:60%;" src="../assets/img/rocinha-logo-2.svg" alt="Rocinha"><br> <span style="    font-size: 5rem;
    position: relative;
    top: -29px;
}"> Rio de Janeiro, Brésil</span>
       </h1>

       <div class="aside__title">
            <h2 class="aside__h2">{{ $prismic.richTextAsPlain(title) }}</h2>
            <div class="aside__title-bg">
                <img src="../assets/img/carte-fond.svg" alt="">
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
