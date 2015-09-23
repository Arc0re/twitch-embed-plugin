function showVideo() {

    /* This adds the player to the page. KEEP IN MIND THAT YOU NEED A DIFFERENT ID FOR EACH FOR THIS TO WORK. */

   $('#video').append('<iframe id="cast1" src="http://www.twitch.tv/uknighted/embed" frameborder="0" scrolling="no" height="378" width="620"></iframe>');
}

function hideVideo() {
    $('#cast1').remove(); // Dont forget to change cast1 for the id you chose in showVideo()
}

function showHide() {

    /* This does the regular link switching stuff. Nothing to change */

    if ($('#show-hide-link').text() == 'Hide Video') {
        hideVideo();
        $('#show-hide-link').text('Show Video');
    }
    else {
        showVideo();
        $('#show-hide-link').text('Hide Video');
    }
}