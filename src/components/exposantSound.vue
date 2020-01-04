<template>
  <div class="exposant__sound">
    <audio
      @ended="setPlaying(false)"
      @pause="setPlaying(false)"
      @play="setPlaying(true)"
      preload="true"
      ref="music">
      <source src="../assets/audio/alexia-atlelier2-002-A.mp3" type="audio/ogg">
      <source src="../assets/audio/alexia-atlelier2-002-A.ogg" type="audio/mpeg">
    </audio>
    <div id="audioplayer">
      <button :class="{ play: !isPlaying, pause: isPlaying }"
              @click="play()" class="pButton"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sound",
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
