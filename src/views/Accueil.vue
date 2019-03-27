<template>
<div>
    <div class="geography__logo-wrap">
    <router-link to="/idee/idee"><div class="logo-ajira logo-ajira--light"> Ajira</div></router-link> 
    </div>

      <!-- <modal v-if="showModal" @close="showModal = false"></modal> -->
      
    <div class="geography">

       <section class="geography__item">
           <h2 class="geography__title geography__title--disabled">
               <p class="geography__district ">Grigny</p>
               <p class="geography__country">Essone, France</p> 
           </h2>
       </section>

       <section class="geography__item geography__item--lighter">
            <h2 class="geography__title geography__title--disabled">
                <p class="geography__district">Montréal-Nord</p>
                <p class="geography__country">Québec, Canada</p> 
            </h2>
        </section>

        <section class="geography__item geography__item--lighter">
            <h2 class="geography__title geography__title--disabled">
                <p class="geography__district">Port-au-Prince</p>
                <p class="geography__country">Haïti</p> 
            </h2>
        </section>

        <router-link class="geography__item geography__item--rocinha" to="/menu">
   
            <h2 class="geography__title">
                <p class="geography__district">Rocinha</p>
                <p class="geography__country">Rio de Janeiro, Brésil</p> 
            </h2>
    
        </router-link>

    </div>
    </div>
</template>

<script>
export default {
    name: "accueil"
}
</script>