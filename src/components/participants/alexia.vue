      <template>

              <div class="container-exposant">

                <div class="exposant">

                  <div class="exposant__wrap1">

                    <div class="exposant__name">Alexia Lima</div>

                    <div class="exposant__wrap-img">

                      <div class="exposant__draw">
                        <div class="wrapper-img">
                          <p class="exposant__draw-title">Recto</p>
                    
              
                          <img src="../../assets/img/dessins/alexia-recto-200px2.jpg" alt="">
                        </div>
                      </div>

                      <div class="exposant__draw">
                        <div class="wrapper-img wrapper-img--2">
                          <p class="exposant__draw-title">Verso</p>
                          <img src="../../assets/img/dessins/alexia-verso-200px4.jpg" alt="">
                        </div>
                      </div>

                    </div>

                  </div>

                  <div class="exposant__wrap2">

                    <div class="exposant__text">

                      <div class="exposant__wrap-pic-sound">
                        <div class="exposant__picture">
                          <img src="../../assets/img/participants/alexia-lima-350x435.jpg" alt="">
            
                        </div>
                       

                          <!-- <img src="../assets/img/sound.svg" alt="sound icon"> -->

                            <div class="exposant__sound">

                            <audio id="music" ref="music" preload="true">
                                  <source src="../../assets/audio/alexia-atlelier2-002-A.mp3" type="audio/ogg">
                                  <source src="../../assets/audio/alexia-atlelier2-002-A.ogg" type="audio/mpeg">
                            </audio>

                            <div id="audioplayer">
                                <button @click="play()" id="pButton" class="play"></button>
                                <!-- <div id="timeline">    
                                      <div id="playhead"></div>
                                </div> -->
                            </div>
                        </div>
                      </div>
                
                      <div class="exposant__text">« Une personne qui danse, qui ne fait que danser, et de l’autre côté, les deux côtés de l’amour, avec les bons et les mauvais côtés. »</div>
          
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