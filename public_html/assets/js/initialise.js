$(function()
{
    initialiseStore();

    var $hover_ele = $('a , .alphabet');
    $hover_ele.live("touchstart", function(e)                            //    Hover effects on all elements
    {
        if (!$(this).hasClass('go-up'))
            $(this).addClass('hover');
    });
    $hover_ele.live("touchend", function(e)
    {
        $(this).removeClass('hover');
    });

    if (!('ontouchstart' in window))
    {
        $hover_ele.live({
            mouseenter: function()
            {
                if (!$(this).hasClass('go-up'))
                    $(this).addClass('hover-mouse');
            },
            mouseleave: function()
            {
                $(this).removeClass('hover-mouse');
            }
        });
    }

    $('#ResetData').live('click', function(e)                   // Show pop-up
    {
        e.preventDefault();
        $('.lightbox-cover , .reset-lightbox').fadeIn(200);
    });

    $('.reset-btns a').live('click', function(e)                // Hide pop-up
    {
        e.preventDefault();
        if ($(this).index() === 0)
            resetGame();
        $('.lightbox-cover , .reset-lightbox').hide();
    });

    if (navigator.userAgent.indexOf('Mac') > 0)
    {
        $('.alphabet-holder').css('padding-left', '9px');
    }
});

function showLoader()
{
    $('#LoadingScreen').show();
}

function hideLoader()
{
    $('#LoadingScreen').hide();
}

function deactivateScreen()
{
    $('#DeactivateScreen').show();
}

function activateScreen()
{
    $('#DeactivateScreen').hide();
}

$(window).load(function()
{
    hideLoader();
    showPanel(current_panel);
    setTimeout(function()
    {
        for (var i = 0; i < secondary_audio_arr.length; i++)
        {
            var path = secondary_audio_arr[i];
            if (path.length > 0)
                console.log(AudioFX('assets/audios/' + path, {formats: ['mp3', 'ogg'], volume: 0.001, loop: false, autoplay: true}));
        }
    }, 1000);
});

$(document).bind('touchmove', function(e)
{
//    e.preventDefault();
});

function scaling()
{
    var screenHeight = screen.height > screen.width ? screen.width : screen.height;
    var win = window.innerHeight < window.innerWidth ? window.innerWidth : window.innerHeight;
    var ratio = (screenHeight-25) / 748;
    if (screenHeight != 768)
    {
        $('.game-wrapper').css({'transform': 'scale(' + ratio + ')'});
        $('.game-wrapper').css({'width': (((win) / ratio) - 20) + 'px'});
    }
    if (screenHeight >= 550 && screenHeight <= 650)
    {
        $('html').addClass('devicesmall');
    }
}