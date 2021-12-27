$(document).ready(function () {
    //console.log('funcionando');
    $('h1').html('etiqueta h1');
    $('.display-4').html('desde clase');
    $('#idh1').html('desde id');

    /* uso en javascript */
    /*
    document.querySelector('h1').innerHTML = 'etiqueta h1';
    document.querySelector('.display-4').innerHTML = 'desde clase';
    document.querySelector('#idh1').innerHTML = 'desde id';
    */

    //  $('.container h1').html('todos los h1 de container');
    //  $('.container h1:first').html('solo el primer h1');
    //  $('.container h1:last').html('solo el ultimo h1');

    // añadir o quitar atributos de id
    $('#idh1').addClass('text-danger');
    $('#idh1').removeClass('display-4');

    // añadir contenido dentro de la id "contenido"
    $('#contenido').append('<h1> nuevo contenido al final</h1>');
    $('#contenido').prepend('<h1> nuevo contenido al principio</h1>');

    // cambiar el css de la id "color-azul"
    $('#color-azul').css('color', 'blue');
    $('#color-azul').css({color: 'blue', background: 'salmon'});

    // eliminar contenido de id "color-azul"
    //$('#color-azul').remove();

    // esconder id "color-azul" con atributo hide
    $('#color-azul').hide();

    // añadir atributos
    $('img').attr('src', 'https://www.beatz-anime.com/img/beatz-anime-logo-white.png');
    $('img:last').attr('width', '50px');

});