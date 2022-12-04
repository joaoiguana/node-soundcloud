const SoundCloudAudio = require('soundcloud-audio');
const player = new SoundCloudAudio('95f22ed54a5c297b1c41f72d713623ef');

global.play = function () {
    player.resolve("https://soundcloud.com/iguanagarcia/02-crypto-surf", function (track) {
      console.log(track);
      player.play();
    });
}

global.pause = function () {
  player.pause();
}
