
var AUDIOS = {
    'welcome': 'welcome',
    'press_to_play': 'press_to_play',
    'lets_sing_together': 'lets_sing_together',
    'complete': 'complete',
    'touch_each_letter': 'touch_each_letter',
    'now_you_know_please_play': 'now_you_know_please_play',
    'cheer': 'cheer',
    'orange_arrow': 'orange_arrow',
    'orange_green_button': 'orange_green_button',
    'MixedInstructionsLower': 'MixedInstructionsLower',
    'MixedInstructionsUpper': 'MixedInstructionsUpper',
    'congrats': 'congrats'
};


var COLORS = ['#9240D0', '#6E47D2', '#51015A', '#534ED9', '#993550', '#7673D9', '#59BD18', '#618201', '#EF5A02', '#F78440', '#D40019', '#F65882', '#C0026D', '#0A3A93', '#267DFF', '#36BCC9', '#0D6A63'];
//var TEACHERMESSAGE = ['<small>Skip Song</small>', '<small>Replay</small><small>Instructions</small>', '<small>Replay Song</small>'];
var TEACHERMESSAGE = ['teacher-stop', 'teacher-instruct', 'teacher-play'];


function updateTeacherMessage()
{
    var message = 1;
    if (!ACTIVITY[activity_num].random)
        message = 2;
    if (activity_num == 4 || activity_num == 5 || activity_num == 13 || activity_num == 14)
        message = 2;
    if (song_playing)
        message = 0;
    $('#TeacherMessage').attr('src', 'assets/images/'+TEACHERMESSAGE[message] + '.png');
}

function getRandomNum(begin, end)
{
    return Math.floor(Math.random() * (end - begin + 1)) + begin;
}

function getColor()
{
    return COLORS[getRandomNum(0, 16)];
}

var UPCASELETTERPOS = [30, 68, 102, 138, 173, 205, 236, 273, 309, 330, 361, 393, 424, 465, 500, 538, 570, 608, 641, 670, 702, 737, 768, 815, 848, 879];
var LOWCASELETTERPOS = [42, 79, 114, 149, 185, 219, 251, 285, 320, 347, 373, 406, 432, 476, 511, 546, 581, 616, 648, 680, 709, 743, 776, 815, 847, 881];


var SONG_DELAYS = [757, // A
    705, // B
    987, // C
    850, // D
    773, // E
    771, // F
    1475, // G
    699, // H
    687, // I
    746, // J
    957, // K
    704, // L
    778, // M
    692, // N
    687, // O
    1250, // P
    1168, // Q
//    1582, // P
//    836, // Q
    824, // R
    1347, // S
    773, // T
    761, // U
    1473, // V
    1430, // W
    1169, // X
    1210, // Y
    815  // Z
];

var delay_arr = [];

for (var i = 0; i < 26; i++)
{
    var temp = 0;
    for (var j = i; j > 0; j--)
        temp += SONG_DELAYS[j];
    delay_arr.push(temp);
}


function shuffle(v)
{
    for (var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x)
        ;
    return v;
}


