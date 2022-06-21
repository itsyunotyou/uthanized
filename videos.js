var video = document.querySelectorAll('video')
video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');
    

    if(play.played){
        play.play();
        play.currentTime = 0;
        
    }


}));

var medias = Array.prototype.slice.apply(document.querySelectorAll('audio,video'));
medias.forEach(function(media) {
  media.addEventListener('play', function(event) {
    medias.forEach(function(media) {
      if(event.target != media) media.pause();
    });
  });
});