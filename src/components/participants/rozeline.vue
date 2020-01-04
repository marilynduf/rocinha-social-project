<template>
  <div class="container-exposant">
    <div class="exposant">
      <div class="exposant__wrap1">
        <div class="exposant__name">Rozeline Silva</div>
        <div class="exposant__wrap-img">
          <div class="exposant__draw">
            <div class="wrapper-img">
              <p class="exposant__draw-title">Recto</p>
              <img alt="" src="../../assets/img/dessins/Rozeline-recto-200px34.jpg">
            </div>
          </div>
          <div class="exposant__draw">
            <div class="wrapper-img wrapper-img--2">
              <p class="exposant__draw-title">Verso</p>
              <img alt="" src="../../assets/img/dessins/Rozeline-verso-200px35.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="exposant__wrap2">
        <div class="exposant__text">
          <div class="exposant__wrap-pic-sound">
            <div class="exposant__picture">
              <img alt="" src="../../assets/img/participants/Rozeline-Silva-350x435.jpg">
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
          <div class="exposant__text">« C’est mon premier dessin, j’ai montré ce que j’aime, les fleurs, les plantes, la
            forêt, et j’ai montré un monde de couleurs, les toits, ma maison, la fenêtre, mais il arrive des choses
            moins bien, on demande la paix, de sortir de la guerre, les tirs, tout ce qui nous choque, tout ce que nous
            n’avons pas. »
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
