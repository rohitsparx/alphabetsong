var current_panel = 'StartScreen';

$(function()
{
    $('a[data-show]').live('click', function(e)
    {
        e.preventDefault();
        var toshow = $(this).data('show');
        showPanel(toshow);
    });
});

function showPanel(ele)
{
    resetHorizontalLetterAnimation();               // reset song animation on changing panel
    song_playing = false;

    $('.all-panels').children().hide();
    $('#' + ele).show();

    if (ele === 'StartScreen')
        onStartScreenShow();
    if (ele === 'GameScreen')
        onGameScreenShow();
    if (ele === 'HomeScreen')
        updateHomeScreen();
    if (ele === 'CompleteScreen')
        updateCompleteScreen();
    if (ele === 'CongratsScreen')
        onCongratsScreen();

    current_panel = ele;
}

function onStartScreenShow()                        // welcome screen and welcome song
{
    playAudio(AUDIOS.welcome);
    music.audio.addEventListener('ended', function()
    {
        playAudio(AUDIOS.press_to_play);
    });
}

function onCongratsScreen()
{
    playAudio(AUDIOS.congrats);
}

function onGameScreenShow()
{
    setPlayAreaLettersSize();
    if (scores[activity_num][0] === -1)             //  lesson not started yet
    {
        startHorizontalLetterAnimation();
        lessonvoicestatus = false;                      //declare in gamescreen                                                           //reset staus for random

    }
    else if (scores[activity_num][0] === 0)         //  incompleted lesson
    {
        $('#playArea').hide();
        playInstructions();
        if (ACTIVITY[activity_num].random === false) {      //condition for repeat complete song after click on teacher
            lessonvoicestatus = false;                      //declare in gamescreen                                                      //reset staus for random
        }
        else {
            lessonvoicestatus = true;                      //declare in gamescreen                                                       //reset staus for random
        }
    }
    else                                            //  already completed lesson
    {
        $('#playArea').html('');
        startHorizontalLetterAnimation();
        lessonvoicestatus = false;                      //declare in gamescreen                                                           //reset staus for random
    }
}


function playInstructions()                         //  play instructions and show played game
{
    if (ACTIVITY[activity_num].random === false) {
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
            $('#playArea').fadeIn();
            if ($('#playArea > div').length === 0)
                generateLetters();
        });
    }
    else
    {
        if (scores[activity_num][0] === 0)         //  incompleted lesson
        {
            playCorrectRandomAlphabet();
        }
        $('#playArea').fadeIn();
        console.log($('#playArea > div').length)
        if ($('#playArea > div').length === 0) {
            generateLetters();
            if (activity_num !== 3 && activity_num !== 8 && activity_num !== 12 && activity_num !== 17) {
                playAudio(AUDIOS.touch_each_letter);
            }
        }
    }
}


