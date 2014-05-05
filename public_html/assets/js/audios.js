var music = AudioFX('assets/audios/A', {formats: ['mp3', 'ogg']}, function() {
});

$('[data-audio]').live('click', function(e)
{
    var path = $(this).data('audio');
    playAudio(path);
});

function playAudio(path)        // play audio 
{
    music.stop();
    music = AudioFX('assets/audios/' + path, {formats: ['mp3', 'ogg']}, function() {
    });
    music.play();
    music.audio.addEventListener('ended', function()
    {
        alphabetClickStatus = true;         //if true then alphabet is clickable , declared in gamesscreen
    });
}





