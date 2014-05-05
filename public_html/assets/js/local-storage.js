function initialiseStore()
{
    if (lscache.get('haveData'))
    {
        getAllData();
        if (current_panel == 'GameScreen' || current_panel == 'CompleteScreen' || current_panel == 'CongratsScreen')
        {
            showPanel('HomeScreen');
        }
        else if (current_panel == 'StartScreen')                // when startscreen was opened last time
        {

        }
        else
            showPanel(current_panel);

        $('#playArea').html(lesson_html[activity_num]);
        $('.lessons a').eq(activity_num).click();
    }
    else
    {
        lscache.set('haveData', true);
        setAllData();
    }
}

function getAllData()
{
//    correctAlphabetArr = lscache.get('correctAlphabetArr');
    correctAlphabetArrforThreeU = lscache.get('correctAlphabetArrforThreeU');
    correctAlphabetArrforThreeL = lscache.get('correctAlphabetArrforThreeL');
    correctAlphabetArrforFourU = lscache.get('correctAlphabetArrforFourU');
    correctAlphabetArrforThirteenU = lscache.get('correctAlphabetArrforThirteenU');
    correctAlphabetArrforFourL = lscache.get('correctAlphabetArrforFourL')
    setArrayCount = lscache.get('correctAlphabetArrforAllU');
    correctAlphabetArrforAllU = lscache.get('correctAlphabetArrforAllU');
    correctAlphabetArrforThirteenL = lscache.get('correctAlphabetArrforThirteenL');
    correctAlphabetArrforAllL = lscache.get('correctAlphabetArrforAllL');

    correctalphabet = lscache.get('correctalphabet');
    groupAlphabetArr = lscache.get('groupAlphabetArr');
    alphabetClickStatus = lscache.get('alphabetClickStatus');

    scores = lscache.get('scores');
    lesson_html = lscache.get('lesson_html');

    activity_num = lscache.get('activity_num');
    set_num = lscache.get('set_num');
    once_wrong = lscache.get('once_wrong');
    lessonvoicestatus = lscache.get('lessonvoicestatus');
    successmessageStatus = lscache.get('successmessageStatus');
    alphabetClickStatus = lscache.get('alphabetClickStatus');
//    audio_queue = lscache.get('audio_queue');
    arr = lscache.get('arr');
    song_playing = lscache.get('song_playing');

    current_panel = lscache.get('current_panel');
    randomSetNum = lscache.get('randomSetNum');

}

function setAllData()
{

    lesson_html[activity_num] = $('#playArea').html();


//    lscache.set('correctAlphabetArr', correctAlphabetArr);
    lscache.set('correctAlphabetArrforThreeU', correctAlphabetArrforThreeU);
    lscache.set('correctAlphabetArrforThreeL', correctAlphabetArrforThreeL);
    lscache.set('correctAlphabetArrforFourU', correctAlphabetArrforFourU);
    lscache.set('correctAlphabetArrforThirteenU', correctAlphabetArrforThirteenU);
    lscache.set('correctAlphabetArrforFourL', correctAlphabetArrforFourL)
    lscache.set('correctAlphabetArrforAllU', correctAlphabetArrforAllU);
    lscache.set('correctAlphabetArrforAllU', correctAlphabetArrforAllU);
    lscache.set('correctAlphabetArrforThirteenL', correctAlphabetArrforThirteenL);
    lscache.set('correctAlphabetArrforAllL', correctAlphabetArrforAllL);

    lscache.set('correctalphabet', correctalphabet);
    lscache.set('groupAlphabetArr', groupAlphabetArr);
    lscache.set('alphabetClickStatus', alphabetClickStatus);

    lscache.set('scores', scores);
    lscache.set('lesson_html', lesson_html);

    lscache.set('activity_num', activity_num);
    lscache.set('set_num', set_num);
    lscache.set('once_wrong', once_wrong);
    lscache.set('lessonvoicestatus', lessonvoicestatus);
    lscache.set('successmessageStatus', successmessageStatus);
    lscache.set('alphabetClickStatus', alphabetClickStatus);
//    lscache.set('audio_queue', audio_queue);
    lscache.set('arr', arr);
    lscache.set('song_playing', song_playing);

    lscache.set('current_panel', current_panel);
    lscache.set('randomSetNum', randomSetNum);

}


$('.main').live('click', function()
{
    setTimeout(function()
    {
        setAllData();
    }, 75);
    updateTeacherMessage();
});