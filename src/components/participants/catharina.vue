<template>
  <div class="container-exposant">
    <div class="exposant">
      <div class="exposant__wrap1">
        <div class="exposant__name">Catharina Aiza Rego Marinho</div>
        <div class="exposant__wrap-img">
          <div class="exposant__draw">
            <div class="wrapper-img">
              <p class="exposant__draw-title">Recto</p>
              <img alt="" src="../../assets/img/dessins/catharina-200px18.jpg" style="max-width: 50rem;">
            </div>
          </div>
        </div>
      </div>
      <div class="exposant__wrap2">
        <div class="exposant__text">
          <div class="exposant__wrap-pic-sound">
            <div class="exposant__picture">
              <img alt="" src="../../assets/img/participants/Catharina-Aiza-Rego-Marinho-350x435.jpg">
            </div>
            <div class="exposant__sound">
              <audio
                @ended="setPlaying(false)"
                @pause="setPlaying(false)"
                @play="setPlaying(true)"
                preload="true"
                ref="music">
                <source src="../../assets/audio/alexia-atlelier2-002-A.mp3" type="audio/ogg">
                <source src="../../assets/audio/alexia-atlelier2-002-A.ogg" type="audio/mpeg">
              </audio>
              <div id="audioplayer">
                <button :class="{ play: !isPlaying, pause: isPlaying }"
                        @click="play()" class="pButton"/>
              </div>
            </div>
          </div>
          <div class="exposant__text">« Avec les images, les photos de rocinha, j’ai repris cela, tout ce vert cette
            nature qu’on a, la forêt, les maisons, les petites maisons, et le bleu du ciel comme de la mer. Et puis de
            l’autre côté j’ai voulu dire que là où il y a de l’amour il y a de la paix, tout est plus léger, plus
            heureux. »
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bianca",
    data() {
      return {
        isPlaying: false
      };
    },

    methods: {
      play() {
        let music = this.$refs.music;

        if (music.paused) {
          music.play();
        } else {
          music.pause();
        }
      },

      pause() {
        this.$refs.music.pause();
      },

      setPlaying(isPlaying) {
        this.isPlaying = isPlaying;
      }
    },
  };
</script>
