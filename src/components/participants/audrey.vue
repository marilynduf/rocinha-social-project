      <template>

              <div class="container-exposant">

                <div class="exposant">

                  <div class="exposant__wrap1">

                    <div class="exposant__name">Audrey da Costa</div>

                    <div class="exposant__wrap-img">

                      <div class="exposant__draw">
                        <div class="wrapper-img">
                          <p class="exposant__draw-title">Recto</p>
                          <!-- <img src="../assets/img/dessins/Bianca-Oliva_verso.jpg" alt> -->
              
                          <img src="../../assets/img/dessins/audrey-recto-200px6.jpg" alt="">
                        </div>
                      </div>

                      <div class="exposant__draw">
                        <div class="wrapper-img wrapper-img--2">
                          <p class="exposant__draw-title">Verso</p>
                          <img src="../../assets/img/dessins/audrey-verso-200px8.jpg" alt="">
                        </div>
                      </div>

                    </div>

                  </div>

                  <div class="exposant__wrap2">

                    <div class="exposant__text">

                      <div class="exposant__wrap-pic-sound">
                        <div class="exposant__picture">
                          <img src="../../assets/img/participants/audrey-costa-350x435.jpg" alt="">
            
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
                
                      <div class="exposant__text">« C’est la différence entre ceux qui vivent dans les grands édifices, dans les condos, et ceux qui vivent dans la favela, la différence elle est visuelle, elle est dans le quotidien, dans tout. »</div>
          
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
    };
  },
  mounted () {
    
  },
  methods: { 
   
    // play() {
    //     let music = document.getElementById('music');
    //     let pButton = document.getElementById('pButton');
       

    //     if (music.paused) { 
    //       music.play();
    //       pButton.className = "";
    //       pButton.className = "pause";
    //     } 

    //     else { 
    //       music.pause();
    //       pButton.className = "";
    //       pButton.className = "play";
    //     }
    // },
  },
};

</script>