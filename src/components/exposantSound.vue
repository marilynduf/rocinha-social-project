<template>

    <div class="exposant__sound">

        <audio
            ref="music"
            preload="true"
            @play="setPlaying(true)"
            @pause="setPlaying(false)"
            @ended="setPlaying(false)">
                <source src="../assets/audio/alexia-atlelier2-002-A.mp3" type="audio/ogg">
                <source src="../assets/audio/alexia-atlelier2-002-A.ogg" type="audio/mpeg">
        </audio>

        <div id="audioplayer">
            <button @click="play()"
                :class="{ play: !isPlaying, pause: isPlaying }" class="pButton" ></button>
            <!-- <div id="timeline">    
                    <div id="playhead"></div>
            </div> -->
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
        } 
        else { 
          music.pause();
        }
    },
    pause () {
      this.$refs.music.pause();
    },
    setPlaying (isPlaying) {
      this.isPlaying = isPlaying;
    }
  },
};

</script>