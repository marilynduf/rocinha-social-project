<template>
  <div class="container-exposant">
    <div class="exposant">
      <div class="exposant__wrap1">
        <div class="exposant__name">Thais Almeida</div>
        <div class="exposant__wrap-img">
          <div class="exposant__draw">
            <div class="wrapper-img">
              <p class="exposant__draw-title">Recto</p>
              <img alt="" src="../../assets/img/dessins/thais-recto-200px36.jpg">
            </div>
          </div>
          <div class="exposant__draw">
            <div class="wrapper-img wrapper-img--2">
              <p class="exposant__draw-title">Verso</p>
              <img alt="" src="../../assets/img/dessins/thais-recto-200px37.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="exposant__wrap2">
        <div class="exposant__text">
          <div class="exposant__wrap-pic-sound">
            <div class="exposant__picture">
              <img alt="" src="../../assets/img/participants/Thais-Almeida-350x435.jpg">
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
                        @click="play()" class="pButton"></button>
              </div>
            </div>
          </div>
          <div class="exposant__text">« Ça parle de la paix qui est difficile et qui n’arrive pas, je ne pensais pas
            vivre ici, la difficulté d’aujourd’hui m’inquiète pour mes enfants, mais aujourd’hui dans cet atelier je vis
            des choses que je n’ai pas eu l’opportunité de vivre avant, de partager de nouvelles choses, des
            expériences, écouter sur les expériences des autres, peut être que je pourrai avoir une vie meilleure, et
            puis j’ai dessiné une pierre, une chute, un arbre. »
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
