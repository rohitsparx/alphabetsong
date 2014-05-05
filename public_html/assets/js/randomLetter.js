//choose random alphabet from here
var randomAlphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//store correct answer alphabet for random lessons
var correctAlphabetArrforThreeU = [];
var correctAlphabetArrforThreeL = [];
var correctAlphabetArrforFourU = [];
var correctAlphabetArrforFourL = [];
var correctAlphabetArrforThirteenU = [];
var correctAlphabetArrforAllU = [];
var correctAlphabetArrforThirteenL = [];
var correctAlphabetArrforAllL = [];
var setArrayCount = 1;
var correctalphabet = '';//correct answer
var groupAlphabetArr = [];
var arr = [];
var randomSetNum = 0;//used for sactivity 8 in (gamescreen)
function createRandomAlphabetArr() {
    if (activity_num === 3) {                                                                                    //for lesson 4 uppercase
        var matchLetter = Math.floor((Math.random() * 3));                                                       //create match alphabet for correct answer
        maintainRandomArr(correctAlphabetArrforThreeU, 3, 26, matchLetter);
    }
    if (activity_num === 4) {                                                                                    //for lesson 5 uppercase
        maintainRandomArrwithoutmatchLetter(correctAlphabetArrforThirteenU, 13);
    }
    if (activity_num === 5) {                                                                                    //for lesson 6 uppercase
        maintainRandomArrwithoutmatchLetter(correctAlphabetArrforAllU, 26);
    }
    if (activity_num === 8) {                                                                                      //for lesson 9 uppercase
        var matchLetter = Math.floor((Math.random() * 26));                                                         //create match alphabet for correct answer
        maintainStaticArr(correctAlphabetArrforFourU, matchLetter);
    }
    if (activity_num === 12) {                                                                                      //for lesson 4 lowercase
        var matchLetter = Math.floor((Math.random() * 3));                                                          //create match alphabet for correct answer
        maintainRandomArr(correctAlphabetArrforThreeL, 3, 26, matchLetter);
    }
    if (activity_num === 13) {                                                                                      //for lesson 5 lowercase
        maintainRandomArrwithoutmatchLetter(correctAlphabetArrforThirteenL, 13);
    }
    if (activity_num === 14) {                                                                                      //for lesson 6 lowercase
        maintainRandomArrwithoutmatchLetter(correctAlphabetArrforAllL, 26);
    }
    if (activity_num === 17) {                                                                                      //for lesson 9 Lowercase
        var matchLetter = Math.floor((Math.random() * 26));                                                          //create match alphabet for correct answer
        maintainStaticArr(correctAlphabetArrforFourL, matchLetter);
    }
}
function maintainStaticArr(correctAlphabetArr, matchLetter) {
    console.log(JSON.stringify(matchLetter))
    //console.log(JSON.stringify("answer"+correctAlphabetArr))
    correctalphabet = '';
    groupAlphabetArr = [];                                                                         //insert alphabet after choose from randomAlphabetArr
    //var tempArr = [];

    //var tempArr = createRandomAlpha(alphabetCount, matchCount);                                     //call random alphabet function
    if (correctAlphabetArr.indexOf(matchLetter) > -1) {                                    // check if correct answer is repeat
        if (correctAlphabetArr.length > 25) {                                                       //exit if length is greater than 25   

            return false;
        }
        else {
            var matchLetterr = Math.floor((Math.random() * 26));
            maintainStaticArr(correctAlphabetArr, matchLetterr);//re-call if correct answer is repeat
        }
    }
    else {
        correctalphabet = matchLetter;
        correctAlphabetArr.push(correctalphabet);
        $.each(ACTIVITY[activity_num].sets, function(i, option) {
            $.each(option, function(j, options) {
                if (options.correct === true && options.letter.toUpperCase() === randomAlphabetArr[correctalphabet]) {
                    groupAlphabetArr = option;
                    randomSetNum = i;
                }
            });
        });
        //console.log(JSON.stringify(groupAlphabetArr))
        playCorrectRandomAlphabet();

    }
}
function maintainRandomArr(correctAlphabetArr, alphabetCount, matchCount, matchLetter) {
    //console.log(JSON.stringify("answer"+correctAlphabetArr))
    correctalphabet = '';
    groupAlphabetArr = [];                                                                         //insert alphabet after choose from randomAlphabetArr
    var tempArr = [];

    var tempArr = createRandomAlpha(alphabetCount, matchCount);                                     //call random alphabet function
    if (correctAlphabetArr.indexOf(tempArr[matchLetter]) > -1) {                                    // check if correct answer is repeat
        if (correctAlphabetArr.length > 25) {                                                       //exit if length is greater than 25   

            return false;
        }
        else {
            maintainRandomArr(correctAlphabetArr, alphabetCount, matchCount, matchLetter);//re-call if correct answer is repeat
        }
    }
    else {
        correctalphabet = tempArr[matchLetter];
        correctAlphabetArr.push(correctalphabet);
        for (var i = 0; i < tempArr.length; i++) {
            var pdata = new Object();
            pdata.letter = randomAlphabetArr[tempArr[i]] + "=split=" + tempArr[i];
            if (tempArr[i] === correctalphabet) {
                pdata.correct = true;
            }
            else {
                pdata.correct = false;
            }
            groupAlphabetArr.push(pdata);                                                           //create an ACTIVITY.set arr for random alphabet 
        }
        // console.log(JSON.stringify(groupAlphabetArr))

        playCorrectRandomAlphabet();

    }
}
function maintainRandomArrwithoutmatchLetter(correctAlphabetArr, alphabetCount) {
    if (correctAlphabetArr.length === 13) {
        setArrayCount++;
    }
    else {
        setArrayCount = 1;
    }
    groupAlphabetArr = [];
    var randomVar = 0;
    var tempArr = [];
    while (tempArr.length < alphabetCount) {
        randomVar = Math.floor((Math.random() * alphabetCount * setArrayCount));
        if (correctAlphabetArr.indexOf(randomVar) === -1) {
            correctAlphabetArr.push(randomVar);                                                     //random Alphabet Arr
            tempArr.push(randomVar);                                                                //random Alphabet Arr
        }
    }
    // console.log(JSON.stringify(tempArr))
    for (var i = 0; i < tempArr.length; i++) {
        var pdata = new Object();
        pdata.letter = randomAlphabetArr[tempArr[i]] + "=split=" + tempArr[i];
        if (tempArr[i] === 0) {
            pdata.correct = true;
        }
        else {
            pdata.correct = false;
        }
        groupAlphabetArr.push(pdata);                                                               //create an ACTIVITY.set arr for random alphabet 
    }
    if (setArrayCount === 1) {
        playCorrectRandomAlphabet();
    }
    setArrayCount = 1;
}
function createRandomAlpha(alphabetCount, matchCount) {
    //console.log(matchCount);
    var randomVar = 0;
    var tempArr = [];
    while (tempArr.length < alphabetCount) {
        randomVar = Math.floor((Math.random() * matchCount));
        if (tempArr.indexOf(randomVar) === -1) {
            tempArr.push(randomVar);                                                                                                    //random Alphabet Arr
        }
    }
    return tempArr;
}
function playCorrectRandomAlphabet() {
    if (activity_num === 3) {
        playAudio('touch_' + randomAlphabetArr[correctAlphabetArrforThreeU[correctAlphabetArrforThreeU.length - 1]].toLowerCase());//play sound before click on alphabet
    }
    if (activity_num === 8) {
        playAudio('touch_' + randomAlphabetArr[correctAlphabetArrforFourU[correctAlphabetArrforFourU.length - 1]].toLowerCase());//play sound before click on alphabet
    }
    if (activity_num === 12) {
        playAudio('touch_' + randomAlphabetArr[correctAlphabetArrforThreeL[correctAlphabetArrforThreeL.length - 1]].toLowerCase());//play sound before click on alphabet
    }
    if (activity_num === 17) {
        playAudio('touch_' + randomAlphabetArr[correctAlphabetArrforFourL[correctAlphabetArrforFourL.length - 1]].toLowerCase());//play sound before click on alphabet
    }
    if (lessonvoicestatus === true && (activity_num === 4 || activity_num === 5 || activity_num === 13 || activity_num === 14)) {
        playAudio('touch_each_letter');                                                             //play sound before click on alphabet
    }
}
