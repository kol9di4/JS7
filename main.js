$(function(){
    $('.button').on('click',function(){
        $(this).next().slideToggle(500);
        $('.text').not($(this).next()).slideUp(500);  
        $(this).children("span").toggleClass('active');
        $('.button span').not($(this).children("span")).removeClass('active');
    });
})