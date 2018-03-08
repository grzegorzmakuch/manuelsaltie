$(document).ready(function() {
    var $mainBarLogo = $('.mainBar-logo');
    var $mainMenu = $('.mainMenu');
    var $mainBar = $('.mainBar');

    $mainBarLogo.on('click', function() {
        $mainMenu.show('normal');
        $mainBar.hide('fast');
    });

    $mainMenu.on('mouseleave', function() {
        $mainBar.show('fast');
        $mainMenu.hide('normal');
    });
})