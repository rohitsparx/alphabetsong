function updateCompleteScreen()
{
    activateScreen();
    $('#Score span').html(scores[activity_num][1] + ' (' + Math.round(scores[activity_num][1] / 0.26) + '%)');
    $('#FinishBtn , #nextGameBtn').hide();
    $('#playArea').html('');
    if (activity_num != 21)                                 // if activity is not last activity
    {
        if (scores[activity_num][1] > 23)
        {
            $('#nextGameBtn').show();
            playAudio(AUDIOS.orange_green_button);
        }
        else
        {
            playAudio(AUDIOS.orange_arrow);
        }
    }
    else                                                    // if activity was last activity last
    {
        playAudio(AUDIOS.orange_arrow);
        if (scores[activity_num][1] > 23)
        {
            $('#FinishBtn').show();
        }
    }
}

$('#nextGameBtn').live('click', function()
{
    activity_num++;
    $('.lessons a').eq(activity_num).click();
    $('#playArea').html(lesson_html[activity_num]);
    $('#playSelected').click();
});

$('#playAgainBtn').live('click', function()
{
    resetLesson(activity_num);
    resetAllVar();//declare in homescreen;  
    showPanel('GameScreen');
});

$('#FinishBtn').live('click', function()
{
    var flag = false;
    for (var j = 0; j < 22; j++)
    {
        if (scores[j][0] < 1)
            flag = true;
    }
    if (flag)
        showPanel('HomeScreen');
    else
        showPanel('CongratsScreen');
});

function resetLesson(num)
{
    scores[num][0] = -1;
    scores[num][1] = 0;
    set_num = 0;
    once_wrong = false;
    $('#playArea').html('');
}
