/* **************************** START OF MENU TOGGLING **************************** */
$(document).ready(function() {
    /* main menu toggling */
    $("#menu-toggle").click(function() {
        if($('#nav-list').is(':hidden')) {
            /* open submenu if a tab within it is active */
            if ($('li').hasClass('active-subtab')) {
                $('.active-subtab').parent().show();
                $('.active-subtab').parent().parent().find('.submenu-button').find('i').css('transform', 'rotate(45deg)');
            }
            /* open main menu */
            $('#nav-list').slideDown();
            $('#menu-icon').removeClass('fa-bars');
            $('#menu-icon').addClass('fa-xmark');
        } else {
            $('#nav-list').slideUp();
            $('.nav-subitems').slideUp();
            $('#menu-icon').addClass('fa-bars');
            $('#menu-icon').removeClass('fa-xmark');
        }
    });

    /* submenu toggling */
    $('.submenu-button').click(function() {
        if($(this).next('.nav-subitems').is(':hidden')) {
            console.log('open submenu');
            $(this).find('i').css('transform', 'rotate(45deg)');
            $(this).next('.nav-subitems').slideDown();
        } else {
            console.log('close submenu');
            $(this).find('i').css('transform', 'rotate(0deg)');
            $(this).next('.nav-subitems').slideUp();
        }
    });
});

// ensuring toggled menu items hide when window is resized
const menuShouldReappear = window.matchMedia('(min-width: 912px)')
menuShouldReappear.addEventListener("change", () => {
    if (menuShouldReappear.matches) {
        $('#nav-list').show();
        $('.nav-subitems').hide();
        $('.nav-subitems').removeAttr("style");
        if ($('#menu-icon').hasClass('fa-xmark')) {
            $('#menu-icon').addClass('fa-bars');
            $('#menu-icon').removeClass('fa-xmark');
        }
        $('.submenu-button').find('i').css('transform', 'rotate(0deg)');
        $('.submenu-button').find('.nav-subitems').slideUp();
    } else {
        $('#nav-list').hide();
    }
})

/* **************************** END OF MENU TOGGLING **************************** */

