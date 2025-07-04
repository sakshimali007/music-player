// music.js - Spotify style functionality

const audio = document.getElementById('audio'); const playBtn = document.getElementById('play'); const title = document.getElementById('title'); const artist = document.getElementById('artist'); const cover = document.querySelector('.now-playing img');

const songs = [ { title: 'Tu Hi Hai Aashiqui', artist: 'Arijit Singh', src: 'audio/tu-hi-hai.mp3', cover: 'images/tu-hi-hai.jpg' }, { title: 'Raabta', artist: 'Arijit Singh', src: 'audio/raabta.mp3', cover: 'images/raabta.jpg' }, { title: 'Kesariya', artist: 'Arijit Singh', src: 'audio/kesariya.mp3', cover: 'images/kesariya.jpg' } ];

let currentSong = 0;

function loadSong(index) { const song = songs[index]; audio.src = song.src; title.textContent = song.title; artist.textContent = song.artist; cover.src = song.cover; }

function playPause() { if (audio.paused) { audio.play(); playBtn.textContent = '⏸️'; } else { audio.pause(); playBtn.textContent = '▶️'; } }

function nextSong() { currentSong = (currentSong + 1) % songs.length; loadSong(currentSong); audio.play(); playBtn.textContent = '⏸️'; }

function prevSong() { currentSong = (currentSong - 1 + songs.length) % songs.length; loadSong(currentSong); audio.play(); playBtn.textContent = '⏸️'; }

audio.addEventListener('ended', nextSong); // autoplay next

// Load initial song loadSong(currentSong);

// Optional autoplay on load // audio.play();