$(document).ready(function() {

    $('nav a, .model-btn a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length > 0) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
        } else {
            $('html, body').animate({'scrollTop': 0});
        }
        e.preventDefault();
    });

});

$(window).on('load resize scroll', function() {
    var curScroll = $(window).scrollTop();
    var curHeight = $(window).height();

    $('nav li').removeClass('active');
    $('nav li').eq(0).addClass('active');
    $('nav a').each(function(e) {
        var curLink = $(this);
        var curBlock = $(curLink.attr('href'));
        if (curBlock.length > 0 && ((curScroll + curHeight / 2) > curBlock.offset().top)) {
            $('nav li.active').removeClass('active');
            curLink.parent().addClass('active');
        }
    });

});