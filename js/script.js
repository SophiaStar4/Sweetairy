$(document).ready(function() {
    $('.share').click(function() {
        let media_name = $(this).attr('id');
        if (media_name === 'vkontakte') {
            window.open("https://vk.com/share.php?url=https://sophiastar4.github.io/Sweetairy/","sharer","status=0,toolbar=0,width=650,height=500");
        }
    });

    $('.burger').click(function() {
        $('.burger, header nav').toggleClass('active');
        $('nav a').click(function() {
            $('.burger, header nav').removeClass('active');
        });
    });   
    
    $('.scroll').click(function() {
        let blockID = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(blockID).offset().top
        }, {
            duration: 1500,
            easing: 'swing'
        });
    });
});