$(document).ready(function () {
    //declarar variables
    var input = $('#nombre');
    var contenido = $('#contenido');

    // evento key
    input.keyup(function () { 
        console.log(input.val()); // verificamos en consola
        contenido.html(input.val()); // agregamos en contenido

        // podemos verificar si esta el contenido:
        if (input.val() === "") {
            contenido.html("estoy esperando...");
        }

    });
    
    $("input").keydown(function(){
        $("input").css("background-color", "yellow");
      });
    $("input").keyup(function(){
        $("input").css("background-color", "pink");
      });
    
});