const SoundCloudAudio = require('soundcloud-audio');
const player = new SoundCloudAudio('95f22ed54a5c297b1c41f72d713623ef');

window.play = () => {
  player.resolve("https://soundcloud.com/biskwiq/dawntheopus", (track) => {
    player.play();
  });
}