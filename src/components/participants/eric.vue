<template>
  <div class="container-exposant">
    <div class="exposant">
      <div class="exposant__wrap1">
        <div class="exposant__name">Eric</div>
        <div class="exposant__wrap-img">
          <div class="exposant__draw">
            <div class="wrapper-img">
              <p class="exposant__draw-title">Recto</p>
              <img alt="" src="../../assets/img/dessins/eric-recto-200px22.jpg">
            </div>
          </div>
          <div class="exposant__draw">
            <div class="wrapper-img wrapper-img--2">
              <p class="exposant__draw-title">Verso</p>
              <img alt="" src="../../assets/img/dessins/eric-verso-200px23.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="exposant__wrap2">
        <div class="exposant__text">
          <div class="exposant__wrap-pic-sound">
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
          <div class="exposant__text">« Ca c’est le chaos, la division, j’aime la philosophie, le possible, c’est notre
            existence paradoxale, notre dualité, il y a des choses négatives comme une tempête, ce que nous vivons
            maintenant, mais c’est un côté des choses, le conflit, la guerre, la violence dans Rocinha maintenant, et
            puis il y a aussi le bien, le soleil, les jours clairs, c’est la dualité dans mon dessin, 2018, c’est
            maintenant, et puis il y a le vert pour l’espérance, le jaune pour l’argent, et le rouge pour l’amour, et
            puis il y a un peu de mystique, et mon mot, que la vie soit meilleure dans les prochains jours. Et puis de
            l’autre côté c’est le mélange des réalités, le noir c’est un côté, le plus sombre, c’est un Brésil qui peut
            aussi être plus clair, le rouge qui est notre lutte, notre persévérance, avoir la foi en l’avenir, garder
            nos convictions, les pensées positives, imaginer l’évolution. »
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "castelo",
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
