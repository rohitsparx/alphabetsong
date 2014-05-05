var activity_num = 0;
var set_num = 0;
var once_wrong = false;
var lessonvoicestatus = false;                                                               //play alphabet name after resume (panel.js/gamescreen.js)
var successmessageStatus = false;
var alphabetClickStatus = true;                                                                //alphabet is not click untill audio is finish(audios.js,homescreen)

$('#Tutor').live('click', function(e)                              // clicking on teacher
{
    e.preventDefault();
    resetHorizontalLetterAnimation();
    alphabetClickStatus = false;
    console.log(song_playing + "======" + ACTIVITY[activity_num].random + "====" + lessonvoicestatus)
    if (song_playing)
    {
        if (ACTIVITY[activity_num].random === true && lessonvoicestatus === true) {                                             //check for random number and play sound after resume
            playCorrectRandomAlphabet();                                                                                        //declare in random.js
            if (activity_num !== 3 || activity_num !== 8 || activity_num !== 12 || activity_num !== 17) {
                $('#playArea').show();
            }
        }
        else {
            playInstructions();
        }
        song_playing = false;
    }
    else
    {
        if (ACTIVITY[activity_num].random === true && lessonvoicestatus === true) {                                             //check for random number and play sound after resume
            if (activity_num === 3 || activity_num === 8 || activity_num === 12 || activity_num === 17) {
                playCorrectRandomAlphabet();                                                                                        //declare in random.js
            }
            else {
                startHorizontalLetterAnimation();
            }
        }
        else {
            startHorizontalLetterAnimation();
        }
    }

});


$('#playArea .alphabet').live('click', function(e)                  // clicking on alphabet in play area options
{
    e.preventDefault();
    //console.log(alphabetClickStatus);
    if (alphabetClickStatus === true) {
        if (ACTIVITY[activity_num].random === false) {
            staticAlphabetClick(this);
        }
        else {
            if (activity_num === 3 || activity_num === 8 || activity_num === 12 || activity_num === 17) {
                randomAplhabetLessThanThirteen(this);
            }
            else {
                randomAplhabetGreaterThanThirteen(this);
            }
        }
    }
});
function staticAlphabetClick(obj) {
    if ($(obj).data('correct') && !$(obj).data('selected'))       // correct answer
    {
        push_audio_queue($(obj).text().toUpperCase());
        $(obj)[0].setAttribute("data-selected",true);                         // marked as clicked
        $(obj).addClass('go-up');
        checkForJ(obj);

        var num = $(obj).data('num');

        var left = UPCASELETTERPOS[num];                            // set position of alphabet in correct place
        if (!ACTIVITY[activity_num].uppercase)
            left = LOWCASELETTERPOS[num];
        $(obj).css({'left': left, 'width': 'auto'});
        set_num++;
        scores[activity_num][2] = set_num;
        clearArea();
        if (set_num < 26)       // if alpahbets are left
        {
            generateLetters();
        }
        else
        {
            scores[activity_num][0] = 1;
            successmessageStatus = true;
            playOneMoreGame();
        }
        if (!once_wrong)    // answered wrong once
        {
            scores[activity_num][1] = scores[activity_num][1] + 1;
            console.log(scores[activity_num][1]);
        }
        once_wrong = false;
    }
    else if (!$(obj).data('correct')) // on wrong answer
    {
        once_wrong = true;

    }
    else                                                            // alphabet in alphabet holder 
    {
    }

}
function randomAplhabetLessThanThirteen(obj) {
    if ($(obj).data('correct') && !$(obj).data('selected'))       // correct answer
    {
        $(obj)[0].setAttribute("data-selected",true);                         // marked as clicked
        $(obj).addClass('go-up');
        checkForJ(obj);
        var num = $(obj).data('num');

        var left = UPCASELETTERPOS[num];                            // set position of alphabet in correct place
        if (!ACTIVITY[activity_num].uppercase)
            left = LOWCASELETTERPOS[num];
        $(obj).css({'left': left, 'width': 'auto'});
        set_num++;
        scores[activity_num][2] = set_num;
        clearArea();
        if (set_num < 26)       // if alpahbets are left
        {
            generateLetters();
        }
        else
        {
            scores[activity_num][0] = 1;
            successmessageStatus = true;
            playOneMoreGame();
        }
        if (!once_wrong)    // answered wrong once
        {
            scores[activity_num][1] = scores[activity_num][1] + 1;
        }
        once_wrong = false;
    }
    else if (!$(obj).data('correct')) // on wrong answer
    {
        once_wrong = true;

    }
    else                                                            // alphabet in alphabet holder 
    {
    }

}
function randomAplhabetGreaterThanThirteen(obj) {
    if ($(obj).data('num') === set_num && !$(obj).data('selected'))       // correct answer
    {
        push_audio_queue($(obj).text());
        $(obj)[0].setAttribute("data-selected",true);                         // marked as clicked
        $(obj).addClass('go-up');
        checkForJ(obj);
        var num = $(obj).data('num');
        var left = UPCASELETTERPOS[num];                            // set position of alphabet in correct place
        if (!ACTIVITY[activity_num].uppercase)
            left = LOWCASELETTERPOS[num];
        $(obj).css({'left': left, 'width': 'auto'});
        set_num++;
        scores[activity_num][2] = set_num;

        if (set_num < 26)       // if alpahbets are left
        {
            if (set_num === 13 && activity_num === 4 || set_num === 13 && activity_num === 13) {
                generateLetters();          //run for lesson 5 Uppercase , 5 Lowercase
            }
        }
        else
        {
            scores[activity_num][0] = 1;
            successmessageStatus = true;
            playOneMoreGame();
        }
        if (!once_wrong)    // answered wrong once
        {
            scores[activity_num][1] = scores[activity_num][1] + 1;
            //console.log(scores[activity_num][1]);
        }
        once_wrong = false;

    }
    else if (!$(obj).data('correct')) // on wrong answer
    {
        once_wrong = true;
    }
    else                                                            // alphabet in alphabet holder 
    {
    }

}
function generateLetters()                                                      // generating new letters
{
    if (ACTIVITY[activity_num].random === true) {        //for random alphabet
        createRandomAlphabetArr();                       // written in randomLetter.js
        arr = groupAlphabetArr;
        var html = '';
        if (activity_num !== 8 && activity_num !== 17) {
            for (var i = 0; i < arr.length; i++)
            {
                html = html + '<div class="letter"><div class="alphabet small color-' + getRandomNum(1, 17) + ' position-' + i + '" data-correct="' + arr[i].correct + '" data-num="' + arr[i].letter.split("=split=")[1] + '"><span>' + arr[i].letter.split("=split=")[0] + '</span></div></div>';
            }
        }
        else {
            //randomSetNum declare in random.js
            //randomSetNum = parseInt(randomSetNum)+1;
            arr = shuffle(groupAlphabetArr);
            //console.log(JSON.stringify(arr))
            var html = '';
            for (var i = 0; i < arr.length; i++)
            {
               html = html + '<div class="letter"><div class="alphabet small color-' + getRandomNum(1, 17) + ' position-' + i + '" data-correct="' + arr[i].correct + '" data-num="' + randomSetNum+ '"><span' + setTransformForRandom(i,arr) + '>' + arr[i].letter + '</span></div></div>';
            }
        }
    }
    else
    {
        arr = shuffle(ACTIVITY[activity_num ].sets[set_num]);
        var html = '';
        for (var i = 0; i < arr.length; i++)
        {
            html = html + '<div class="letter"><div class="alphabet small color-' + getRandomNum(1, 17) + ' position-' + i + '" data-correct="' + arr[i].correct + '" data-num="' + set_num + '"><span' + setTransform(i) + '>' + arr[i].letter + '</span></div></div>';
        }
    }
    $('#playArea').append(html);
    setTimeout(function()
    {
        $('#playArea .alphabet').removeClass('small');
    }, 10);
    scores[activity_num][0] = 0;
    if (ACTIVITY[activity_num].random === true)
    {
        lessonvoicestatus = true;
    }
}

function clearArea()                                                            // hide previously added alphabets, display correct answered alphabet
{
    $('#playArea .letter').each(function()
    {
        var curr = $(this).children();
        if (!(curr.data('correct') && curr.data('selected')))
        {
            $(this).hide();
        }
    });
}

function playOneMoreGame()
{
    deactivateScreen();
    setTimeout(function()
    {
        push_audio_queue(AUDIOS.cheer);
        push_audio_queue(AUDIOS.now_you_know_please_play);
        audio_queue[audio_queue.length - 1].audio.addEventListener('ended', function()
        {
            showPanel('CompleteScreen');
        });
    }, 1000);
}

var audio_queue = [];

function push_audio_queue(path)
{
    var audio = AudioFX('assets/audios/' + path, {formats: ['mp3', 'ogg']}, function() {
    });
    audio_queue.push(audio);
    if (audio_queue.length === 1)
    {
        pop_audio_queue();
    }
}

function pop_audio_queue()
{
    var to_play = audio_queue[0];
    to_play.play();
    to_play.audio.addEventListener('ended', function()
    {
        audio_queue.shift();
        if (audio_queue.length > 0)
            pop_audio_queue();
    });
}

function setPlayAreaLettersSize()                  // add class in playArea according to current activity
{
    $('#playArea').removeClass();
    $('#playArea').addClass('play-area chapter-' + activity_num);
    if (ACTIVITY[activity_num].uppercase)
        $('#playArea, #AlphabetHolder, #HorizontalAnimationHolder').removeClass('lowercase');
    else
        $('#playArea, #AlphabetHolder, #HorizontalAnimationHolder').addClass('lowercase');
    if (ACTIVITY[activity_num].mixed)
        $('#playArea').addClass('mixed');
}


function setTransformForRandom(num,arr)                         // set transform scale on alphabets
{
    var str = '';
   
    if (ACTIVITY[activity_num].transformed)
    {
        var scale = arr[num].t;
        var rotate = '';
        if (typeof arr[num].r == "number")
            rotate = ' rotate(' + arr[num].r + 'deg)';
        str = ' style="';
        str = str + 'transform:scale(' + scale + ')' + rotate + ';';
        str = str + '-webkit-transform:scale(' + scale + ')' + rotate + ';';
        str = str + '-ms-transform:scale(' + scale + ')' + rotate + ';';
        str = str + (scale.split(',')[1] === "-1" ? 'margin-top:-10px;"' : '"');
    }
    return str;
}
function setTransform(num)                         // set transform scale on alphabets
{
    var str = '';
    if (ACTIVITY[activity_num].transformed)
    {
        var scale = ACTIVITY[activity_num].sets[set_num][num].t;
        var rotate = '';
        if (typeof ACTIVITY[activity_num].sets[set_num][num].r == "number")
            rotate = ' rotate(' + ACTIVITY[activity_num].sets[set_num][num].r + 'deg)';
        str = ' style="';
        str = str + 'transform:scale(' + scale + ')' + rotate + ';';
        str = str + '-webkit-transform:scale(' + scale + ')' + rotate + ';';
        str = str + '-ms-transform:scale(' + scale + ')' + rotate + ';';
        str = str + (scale.split(',')[1] === "-1" ? 'margin-top:-10px;"' : '"');
    }
    return str;
}

function checkForJ(obj)
{
    if ($(obj).text().toUpperCase() === 'J' && !ACTIVITY[activity_num].uppercase)
    {
        $(obj).addClass('adjust-alpha-j');
    }
}

