<template>
  <div class="container-exposant">
    <div class="exposant">
      <div class="exposant__wrap1">
        <div class="exposant__name">Emmanuele</div>
        <div class="exposant__wrap-img">
          <div class="exposant__draw">
            <div class="wrapper-img">
              <p class="exposant__draw-title">Recto</p>
              <img alt="" src="../../assets/img/dessins/Emmanuele-recto-200px20.jpg">
            </div>
          </div>
          <div class="exposant__draw">
            <div class="wrapper-img wrapper-img--2">
              <p class="exposant__draw-title">Verso</p>
              <img alt="" src="../../assets/img/dessins/Emmanuele-verso-200px21.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="exposant__wrap2">
        <div class="exposant__text">
          <div class="exposant__wrap-pic-sound">
            <div class="exposant__picture">
              <img alt="" src="../../assets/img/participants/emmanuele-350x435.jpg">
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
          <div class="exposant__text">« C’est la joie qui manque, il n’y a pas beaucoup de choses pour les enfants. »
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
