$(document).ready(function () {
    $('.gallery li:lt(2)').show();
    $('.less').hide();
    var items =  12;
    var shown =  4;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.gallery li:visible').length+2;
        if(shown< items) {
          $('.gallery li:lt('+shown+')').show(100);
        } else {
          $('.gallery li:lt('+items+')').show(100);
          $('.more').hide();
        }
    });
    $('.less').click(function () {
        $('.gallery li').not(':lt(2)').hide(100);
        $('.more').show();
        $('.less').hide();
    });
});