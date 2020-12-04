function randombg(){
    var random= Math.floor(Math.random() * 7) + 0;
    var bigSize = ["url('resources/images/6-64412_happy-suns-wallpaper-happy-backgrounds-for-desktop.jpg')",
                   "url('resources/images/a176716205951f374b88a00d77d89a3e.jpg')",
                   "url('resources/images/b2d3cbf00323c36e072d873f016b1d4f.jpg')",
                   "url('resources/images/Best-hip-hop-love-songs-featured-image.jpg')",
                   "url('resources/images/Dizzy-Wallpaper.webp')",
                   "url('resources/images/1.jpg')",
                   "url('resources/images/flat,750x1000,075,f.jpg')",];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }