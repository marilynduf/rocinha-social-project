      <template>

              <div class="container-exposant">

                <div class="exposant">

                  <div class="exposant__wrap1">

                    <div class="exposant__name">Juliane Cruz</div>

                    <div class="exposant__wrap-img">

                      <div class="exposant__draw">
                        <div class="wrapper-img">
                          <p class="exposant__draw-title">Recto</p>
                    
              
                          <img src="../../assets/img/dessins/juliane-recto-200px24.jpg" alt="">
                        </div>
                      </div>

                      <div class="exposant__draw">
                        <div class="wrapper-img wrapper-img--2">
                          <p class="exposant__draw-title">Verso</p>
                          <img src="../../assets/img/dessins/juliane-verso-200px25.jpg" alt="">
                        </div>
                      </div>

                    </div>

                  </div>

                  <div class="exposant__wrap2">

                    <div class="exposant__text">

                      <div class="exposant__wrap-pic-sound">
                        <div class="exposant__picture">
                          <img src="../../assets/img/participants/Juliane-Cruz-350x435.jpg" alt="">
            
                        </div>
                       
                          <!-- <img src="../assets/img/sound.svg" alt="sound icon"> -->

                          <div class="exposant__sound">

                            <audio
                              ref="music"
                              preload="true"
                              @play="setPlaying(true)"
                              @pause="setPlaying(false)"
                              @ended="setPlaying(false)">
                                  <source src="../../assets/audio/alexia-atlelier2-002-A.mp3" type="audio/ogg">
                                  <source src="../../assets/audio/alexia-atlelier2-002-A.ogg" type="audio/mpeg">
                            </audio>

                            <div id="audioplayer">
                                <button @click="play()"
                                  :class="{ play: !isPlaying, pause: isPlaying }" class="pButton" ></button>
                                <!-- <div id="timeline">    
                                      <div id="playhead"></div>
                                </div> -->
                            </div>

                        </div>


                      </div>
                
                      <div class="exposant__text">« Ça c’est Rocinha avec beaucoup de vert, et l’arc de la passerelle, et avec une phrase, soyez fort et courageux parce qu’ on a besoin de cela pour vivre ici, surtout si on est noir, et puis de l’autre côté. C’est Rocinha, avec l’eau qui arrive, des escaliers colorés, une piscine, des loisirs, que Rocinha soit un lieu de paix, comme avec la chute. »</div>
          
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
  mounted () {
    
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