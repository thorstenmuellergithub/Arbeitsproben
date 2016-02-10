/**
 * Created by thorsten on 07.02.16.
 */
$(document).ready(function(){
    // insert the JQuery methods here

    //That the menu will not scroll away
     var distance = $('#NavigationBar').offset().top;
    $(window).scroll(function() {
        if($(this).scrollTop() > distance) {
            $('#NavigationBar').addClass('fixed');
            $('#ContentContainer').addClass('move');
        } else {
            $('#NavigationBar').removeClass('fixed');
            $('#ContentContainer').removeClass('move');
        }
    });

    //For highlighting the actual topic at the page
    $(window).scroll(function() {
        if($(this).scrollTop() >= 0 && $(this).scrollTop() < 1250){
            $('#ListHSMA').addClass('highlightTitle');
            $('#ListZahlen').removeClass('highlightTitle');
            $('#ListFakultäten').removeClass('highlightTitle');
            $('#ListInformatikBeschreibung').removeClass('highlightTitle');
        }
        if($(this).scrollTop() >= 1250 && $(this).scrollTop() < 1490){
            $('#ListHSMA').removeClass('highlightTitle');
            $('#ListZahlen').addClass('highlightTitle');
            $('#ListFakultäten').removeClass('highlightTitle');
            $('#ListInformatikBeschreibung').removeClass('highlightTitle');
        }
        if($(this).scrollTop() >= 1490 && $(this).scrollTop() < 1740){
            $('#ListHSMA').removeClass('highlightTitle');
            $('#ListZahlen').removeClass('highlightTitle');
            $('#ListFakultäten').addClass('highlightTitle');
            $('#ListInformatikBeschreibung').removeClass('highlightTitle');
        }
        if($(this).scrollTop() >= 1740 && $(this).scrollTop() < 1930){
            $('#ListHSMA').removeClass('highlightTitle');
            $('#ListZahlen').removeClass('highlightTitle');
            $('#ListFakultäten').removeClass('highlightTitle');
            $('#ListInformatikBeschreibung').addClass('highlightTitle');
        }
    });

    //Advanced Dropdown Menu for Basketball Player Database
    /*$('#NavBBPD').hover(function(){
       $('#DropdownBBPDMenu').slideDown("fast");
    }, function(){
        $('#DropdownBBPDMenu').slideUp("fast");

    });
    */



});

