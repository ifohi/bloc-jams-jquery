{
  $('button#play-pause').on('click', function() {
    // call playPause() to stop or play song
    player.playPause();
    // Switches between play & pause icon when button is clicked
    $(this).attr('playState', player.playState);
  });



  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;

    if (previousSongIndex < 0) { return; }

    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });




  $('button#next').on('click', function() {
    // if playState !== 'playing', return
    if (player.playState !== 'playing') { return; }

    // get index of the song that is currently playing and add 1
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;

    // Checks if it's the last song
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });
}
