/* Scroll Nav Bar Fixed */
let distance = $('#header-bar').offset().top;
let $window = $(window);

$window.scroll(function() {
    marinafunction();
    marinaswitch();

});

function marinafunction() {
    if ($window.scrollTop() >= distance) {
        $('#header-bar').css("position","fixed").css("top","0").css("opacity","1");
    }
    else {
        scratch();
    }
}

function scratch() {
    $('.main-header').attr('style', '');
}

/* Scroll Highlight Nav Bar in Section */
let distanceone = ($('#section-one').offset().top);
let distancetwo = ($('#section-two').offset().top) - 60;
let distancethree = ($('#section-three').offset().top) - 80;
let distancefour = ($('#button').offset().top) - 80;

function marinaswitch() {
    if ($window.scrollTop() >= distanceone) {
        $('#first-nav').css("color", "#fff");
        scratchit2(1);
    }
    if ($window.scrollTop() >= distancetwo) {
        $('#second-nav').css("color", "#fff");
        scratchit2(2);
    }
    if ($window.scrollTop() >= distancethree) {
        $('#third-nav').css("color", "#fff");
        scratchit2(3);
    }
    if ($window.scrollTop() <= distancefour) {
        scratchit2(4);
    }
}

function scratchit2(num) {
    let key = num;

    switch (key) {
        case 1:
            $('#second-nav').css('color', '#3acec2');
            $('#third-nav').css('color', '#3acec2');
            break;
        case 2:
            $('#first-nav').css('color', '#3acec2');
            $('#third-nav').css('color', '#3acec2');
            break;
        case 3:
            $('#first-nav-nav').css('color', '#3acec2');
            $('#second-nav').css('color', '#3acec2');
            break;
        case 4:
            $('#first-nav').css('color', '#3acec2');
    }
}

/* About nav link scroll to about section */
$('#first-nav').click(function() {
   $('html, body').animate({
       scrollTop: $("#section-one").offset().top
   }, 1000);
});

/* Portfolio nav link scroll to portfolio section */
$('#second-nav').click(function() {
    $('html, body').animate({
        scrollTop: ($("#section-two").offset().top) - 60
    }, 1000);
});

/* Contact nav link scroll to contact section */
$('#third-nav').click(function() {
    $('html, body').animate({
        scrollTop: ($("#section-three").offset().top) - 30
    }, 1000);
});

/* Button scroll to portfolio section */
$("#button").click(function() {
    $('html, body').animate({
        scrollTop: ($("#section-two").offset().top) - 80
    }, 1000);
});

/* Button scroll to top */
$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#banner").offset().top
    }, 1000);
});

$('ul.main-nav > li').click(function(e) {
    $('ul.main-nav > li').removeClass('active');
    $(this).addClass('active');
});

$("#box-1").hover(function(e) {
    $(this).css('opacity', '0.25')
}, function() {
        $(this).css('opacity', '')
});

function classToggle() {
    const navs = document.querySelectorAll('.main-nav')

    navs.forEach(nav => nav.classList.toggle('toggle'));
}

document.querySelector('.hamburger')
    .addEventListener('click', classToggle);

var mobileHover = function () {
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
};

mobileHover();
