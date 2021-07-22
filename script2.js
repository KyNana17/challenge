$(document).ready(function() {
    $(".text h1").html(function(index, html) {
        return html.replace(/\S/g, '<span>$&</span>');
    });
    $(window).load(function() {
        $('.text').addClass('active');

        var $count = 0.1;
        $('.text span').each(function() {
            $(this).css('transitionDelay', $count + 's');
            $count = $count + .1;
        });
    })
})