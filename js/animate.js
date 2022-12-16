$(function() {

    // fadeOut
    $('#btn-close').on('click', function(){
        $('#right-target').fadeOut()
    })

    // fadeIn
    $('#btn-menu').on('click', function(){
        $('#right-target').fadeIn()
    })
})