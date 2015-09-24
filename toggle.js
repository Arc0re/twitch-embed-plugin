/* This adds the player to the page. KEEP IN MIND THAT YOU NEED A DIFFERENT ID FOR EACH #video, iframe,... FOR THIS TO WORK. */
function showVideo() {
   $('#video').append('<iframe id="cast1" src="http://www.twitch.tv/uknighted/embed" frameborder="0" scrolling="no" height="378" width="620"></iframe>');
}

function hideVideo() {
    $('#cast1').remove(); // Dont forget to change cast1 for the id you chose in showVideo()
}

/* This does the regular link switching stuff. Nothing to change */
$('#show-hide-link').click(function(){
    if ($('#show-hide-link').text() == 'Hide Video') {
        hideVideo();
        $('#show-hide-link').text('Show Video');
    }
    else {
        showVideo();
        $('#show-hide-link').text('Hide Video');
    }
});

/* Example, displaying another stream : just clone the above functions (same in HTML) */
function showVideo2() {
   $('#video2').append('<iframe id="cast2" src="http://www.twitch.tv/crunk_muffin/embed" frameborder="0" scrolling="no" height="378" width="620"></iframe>');
}

function hideVideo2() {
    $('#cast2').remove(); // Dont forget to change cast1 for the id you chose in showVideo2()
}

$('#show-hide-link2').click(function(){
    if ($('#show-hide-link2').text() == 'Hide Video') {
        hideVideo2();
        $('#show-hide-link2').text('Show Video');
    }
    else {
        showVideo2();
        $('#show-hide-link2').text('Hide Video');
    }
});

// etc etc