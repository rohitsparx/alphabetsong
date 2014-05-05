var scores = [[-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0]];
// [not started(-1)/played(0)/completed(1) , correct answers , current position]

var lesson_html = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];


$('#HomeScreen .lessons a').live('click', function(e)                       //  Lesson tiles
{
    e.preventDefault();
    $('#HomeScreen .lessons a').removeClass('active');
    if (ACTIVITY[$(this).data('id')])
    {
        $('#LessonDesc').html(ACTIVITY[$(this).data('id')].description);
        $('#LessonTitle').html(ACTIVITY[$(this).data('id')].title);
    }
    $(this).addClass('active');
});

$('#playSelected').live('click', function()                                 //  play selected lesson
{
    lesson_html[activity_num] = $('#playArea').html();
    activity_num = $('#HomeScreen .lessons a.active').data('id');
    if (scores[activity_num][0] === 1)                                      //  already completed lesson
    {
        resetLesson(activity_num);
        resetAllVar();
    }
    if (scores[activity_num][0] === 0)                                      //  incompleted lesson
    {
        $('#playArea').html(lesson_html[activity_num]);
        set_num = scores[activity_num][2];
        if ($('.alphabet-holder').length > 0) {
            alphabetClickStatus = false;                                        //on resume it is false
        }
    }
    if (scores[activity_num][0] === -1)                                     //  lesson not started yet
    {
        set_num = 0;
        once_wrong = false;
        $('#playArea').html('');
    }
    showPanel('GameScreen');
});

function updateHomeScreen()                       // update homescreeen score 
{
    $('#HomeScreen ul.lessons li span').removeClass();
    $('#HomeScreen ul.lessons li').each(function(index)
    {
        if (scores[index][0] === 0)
            $(this).children('span').addClass('incomplete').html('Incomplete');
        if (scores[index][0] === 1)
            $(this).children('span').addClass('played').html(scores[index][1] + '/26' + ' ' + Math.round(scores[index][1] / 0.26) + '%');
    });
}

function resetAllVar()      //used here and completescreen.js
{
    correctAlphabetArr = [];
    correctAlphabetArrforThreeU = [];                                                                                       //empty array on start new game for random aplhabet 
    correctAlphabetArrforThreeL = [];
    correctAlphabetArrforFourU = [];
    correctAlphabetArrforThirteenU = [];
    correctAlphabetArrforFourL = [];//written in random.js
    setArrayCount = 1;
    correctAlphabetArrforAllU = [];
    correctAlphabetArrforThirteenL = [];
    correctAlphabetArrforAllL = [];
    randomSetNum =0 //declare in random.js
}

function resetGame()
{
    resetAllVar();
    correctalphabet = '';
    groupAlphabetArr = [];
    alphabetClickStatus = true;

    scores = [[-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0], [-1, 0, 0]];
    lesson_html = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

    activity_num = 0;
    set_num = 0;
    once_wrong = false;
    lessonvoicestatus = false;
    successmessageStatus = false;
    alphabetClickStatus = true;
    audio_queue = [];
    arr = [];
    song_playing = false;

    $('#playArea').html('');
    updateHomeScreen();
    $('.lessons a').first().click();
}




