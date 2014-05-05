var myLoader = html5Preloader();

myLoader.addFiles('assets/images/loading-assets.GIF');

myLoader.addFiles('assets/images/start-screen.jpg');
myLoader.addFiles('assets/images/asg-text.png');
myLoader.addFiles('assets/images/home-btn.png');
myLoader.addFiles('assets/images/home-txt.jpg');
myLoader.addFiles('assets/images/complete-text.png');
myLoader.addFiles('assets/images/teacher-stop.png');
myLoader.addFiles('assets/images/teacher-instruct.png');
myLoader.addFiles('assets/images/teacher-play.png');
myLoader.addFiles('assets/images/logo.png');
myLoader.addFiles('assets/images/arrows.png');

var audio_arr = [
    'touch_each_letter', 'MixedInstructionsLower'
            , 'touch_uppercase', 'press_to_play'
//            , 'song', 'now_you_know', 'After song'
            , 'lets_sing_together', 'MixedInstructionsUpper', 'cheer'
            , 'complete', 'touch_lowercase'
            , 'touch_a', 'touch_b', 'touch_c', 'touch_d', 'touch_e', 'touch_f', 'touch_g', 'touch_h', 'touch_i', 'touch_j', 'touch_k', 'touch_l', 'touch_m', 'touch_n', 'touch_o', 'touch_p', 'touch_q', 'touch_r', 'touch_s', 'touch_t', 'touch_u', 'touch_v', 'touch_w', 'touch_x', 'touch_y', 'touch_z'
            , 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var secondary_audio_arr = [
    'orange_green_button', 'green_arrow', 'orange_arrow', 'congrats', 'now_you_know_please_play'
];


for (var i = 0; i < audio_arr.length; i++)                   // Load audio files from audio_arr with correct format
{
    var path = audio_arr[i];
    if (path.length > 0)
        console.log(AudioFX('assets/audios/' + path, {formats: ['mp3', 'ogg'], volume: 0.001, loop: false, autoplay: true}));
}
