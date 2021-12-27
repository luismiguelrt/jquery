$(document).ready(function () {
    

    //efectos con botones
    var resultado = $('#resultado');

    $('.btn-primary').click(function () { 
        // resultado.hide(1000);   // ocultas el elemento en un tiempo de 1 segundo
        resultado.fadeOut('slow'); // efecto oculta el elemento lento
    });
    $('.btn-danger').click(function () { 
        // resultado.show(1000);   // muestra el elemento en un tiempo de 1 segundo
        resultado.fadeIn('fast'); // efecto muestra el elemento rapido
    });

    $('.btn-warning').click(function () { 
        // resultado.toggle(1000);   // muestra/oculta el elemento en un tiempo de 1 segundo
        resultado.fadeToggle(3000); // efecto muestra/oculta el elemento en un tiempo de 3 segundo
    });
    
});