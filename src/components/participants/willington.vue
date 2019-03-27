      <template>

              <div class="container-exposant">

                <div class="exposant">

                  <div class="exposant__wrap1">

                    <div class="exposant__name">Willington Perreira</div>

                    <div class="exposant__wrap-img">

                      <div class="exposant__draw">
                        <div class="wrapper-img">
                          <p class="exposant__draw-title">Recto</p>
                    
              
                          <img src="../../assets/img/dessins/Willington-recto-200px38.jpg" alt="">
                        </div>
                      </div>

                      <div class="exposant__draw">
                        <div class="wrapper-img wrapper-img--2">
                          <p class="exposant__draw-title">Verso</p>
                          <img src="../../assets/img/dessins/Willington-verso-200px38.jpg" alt="">
                        </div>
                      </div>

                    </div>

                  </div>

                  <div class="exposant__wrap2">

                    <div class="exposant__text">

                      <div class="exposant__wrap-pic-sound">
                        <div class="exposant__picture">
                          <img src="../../assets/img/participants/willington-perreira-350x435.jpg" alt="">
            
                        </div>
                       

                          <!-- <img src="../assets/img/sound.svg" alt="sound icon"> -->

                            <div class="exposant__sound">

                            <audio id="music" ref="music" preload="true">
                                  <source src="../../assets/audio/MONO-002.wav" type="audio/ogg">
                                  <source src="../../assets/audio/MONO-002.wav" type="audio/mpeg">
                            </audio>

                            <div id="audioplayer">
                                <button @click="play()" id="pButton" class="play"></button>
                                <!-- <div id="timeline">    
                                      <div id="playhead"></div>
                                </div> -->
                            </div>
                        </div>
                      </div>
                
                      <div class="exposant__text">« J’ai mis là toutes les choses que j’aime le plus faire, la forêt, la plage Gavea, la pierre de Gavea, mais il y a la guerre, j’ai mis le mot paix, puis pour cela on a la musique, la Rocinha fait la paix. (chant : A rocinha fait la paix). »</div>
          
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
    };
  },
  mounted () {
    
  },
  methods: { 
   
    play() {
        let music = document.getElementById('music');
        let pButton = document.getElementById('pButton');
       

        if (music.paused) { 
          music.play();
          pButton.className = "";
          pButton.className = "pause";
        } 

        else { 
          music.pause();
          pButton.className = "";
          pButton.className = "play";
        }
    },
  },
};

</script>