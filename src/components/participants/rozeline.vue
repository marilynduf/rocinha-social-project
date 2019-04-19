      <template>

              <div class="container-exposant">

                <div class="exposant">

                  <div class="exposant__wrap1">

                    <div class="exposant__name">Rozeline Silva</div>

                    <div class="exposant__wrap-img">

                      <div class="exposant__draw">
                        <div class="wrapper-img">
                          <p class="exposant__draw-title">Recto</p>
                          <!-- <img src="../assets/img/dessins/Bianca-Oliva_verso.jpg" alt> -->
              
                          <img src="../../assets/img/dessins/Rozeline-recto-200px34.jpg" alt="">
                        </div>
                      </div>

                      <div class="exposant__draw">
                        <div class="wrapper-img wrapper-img--2">
                          <p class="exposant__draw-title">Verso</p>
                          <img src="../../assets/img/dessins/Rozeline-verso-200px35.jpg" alt="">
                        </div>
                      </div>

                    </div>

                  </div>


                  <div class="exposant__wrap2">

                    <div class="exposant__text">

                      <div class="exposant__wrap-pic-sound">
                        <div class="exposant__picture">
                          <img src="../../assets/img/participants/Rozeline-Silva-350x435.jpg" alt="">
            
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
                
                      <div class="exposant__text">« C’est mon premier dessin, j’ai montré ce que j’aime, les fleurs, les plantes, la forêt, et j’ai montré un monde de couleurs, les toits, ma maison, la fenêtre, mais il arrive des choses moins bien, on demande la paix, de sortir de la guerre, les tirs, tout ce qui nous choque, tout ce que nous n’avons pas. »</div>
          
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