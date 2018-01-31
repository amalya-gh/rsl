$(document).foundation();
$(document).ready(function(){
    $('.slider-prop').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
		arrows:false
    });

    $("a[href^='#arrow']").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('body,html').animate({
            scrollTop: destination
        }, 600);
    });

    $('#mobile-menu-icon').click(function(e) {
        $('#mobile-menu').toggle(1000);
        e.preventDefault();

    });
    $('#search').click(function(e) {
        $('.open').toggle(1000);
        e.preventDefault();

    });


});
