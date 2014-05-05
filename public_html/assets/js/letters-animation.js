var audioTimer, audioTimer1, audioTimer2, audioTimer3, audioTimer4, audioTimer5;

var song_playing = false;

function startHorizontalLetterAnimation()
{
    $('#playArea').hide();
    colorSongAlphabets();
    if (activity_num === 3 || activity_num === 8 || activity_num === 12 || activity_num === 17)
    {
        playSongForRandom();
    }
    else
    {
        playSong();
    }
}


function playSong()
{
    stopQueuedAudios();
    song_playing = true;
    playAudio(AUDIOS.lets_sing_together);
    music.audio.addEventListener('ended', function()
    {
        playAudio(AUDIOS.complete);
        music.audio.addEventListener('playing', function()
        {
            animatingLetter();
            console.log('started');
        });
        music.audio.addEventListener('ended', function()
        {
            $('#AlphabetHolder').addClass('fade-and-move');
            if (activity_num !== 18 && activity_num !== 19 && activity_num !== 20 && activity_num !== 21)
            {
                playAudio(AUDIOS.touch_each_letter);
            }
            if (activity_num === 18 || activity_num === 20)
            {
                playAudio(AUDIOS.MixedInstructionsUpper);
            }
            if (activity_num === 19 || activity_num === 21)
            {
                playAudio(AUDIOS.MixedInstructionsLower);
            }
            music.audio.addEventListener('ended', function()
            {
                $('#playArea').show();
                if (scores[activity_num][0] === -1)
                    generateLetters();
                song_playing = false;
                updateTeacherMessage();
            });
        });
    });
}
function playSongForRandom()
{
    stopQueuedAudios();
    song_playing = true;
    playAudio(AUDIOS.lets_sing_together);
    music.audio.addEventListener('ended', function()
    {
        playAudio(AUDIOS.complete);
        music.audio.addEventListener('playing', function()
        {
            animatingLetter();
            console.log('started');
        });
        music.audio.addEventListener('ended', function()
        {
            $('#AlphabetHolder').addClass('fade-and-move');
            audioTimer5 = setTimeout(function()
            {
                $('#playArea').show();
                if (scores[activity_num][0] === -1)
                    generateLetters();//decalre in gamescreen
                song_playing = false;
                updateTeacherMessage();
            }, 3000);

        });
    });
}


function resetHorizontalLetterAnimation()
{
    music.stop();
    stopQueuedAudios();
    $('#HorizontalAnimationHolder').removeClass('horizontal-animation');
    $('#AlphabetHolder').removeClass('alphabet-holder-animating fade-and-move');
    $('#AlphabetHolder div , #AlphabetHolder .alphabet').css({'transition-delay': 0 + 's'});
}

function stopQueuedAudios()
{
    if (audio_queue[0])
    {
        audio_queue[0].stop();
        audio_queue = [];
    }
    clearInterval(audioTimer);
    clearInterval(audioTimer1);
    clearInterval(audioTimer2);
    clearInterval(audioTimer3);
    clearInterval(audioTimer4);
    clearInterval(audioTimer5);
}


function colorSongAlphabets()       // random coloring of alphabets
{
    $('#AlphabetHolder div').each(function(ind, curr)
    {
        var color = getColor();
        $('#HorizontalAnimationHolder div').eq(ind).css('color', color);
        $('#AlphabetHolder div').eq(ind).css('color', color);
    });
}


function animatingLetter()
{
    audioTimer = setTimeout(function()
    {
        $('#HorizontalAnimationHolder').addClass('horizontal-animation');
        $('#HorizontalAnimationHolder div').each(function(ind, current)
        {
            $(this).css({'animation-delay': delay_arr[ind] / 1000 - SONG_DELAYS[ind] / 3000 + 's'});
        });
        audioTimer1 = setTimeout(function()
        {
            $('#AlphabetHolder').addClass('alphabet-holder-animating');
            $('#AlphabetHolder div').each(function(ind, current)
            {
                $(this).css({'transition-delay': delay_arr[ind] / 1000 - SONG_DELAYS[ind] / 3000 + 's'});
            });
        }, 3000);
    }, 5);
}

