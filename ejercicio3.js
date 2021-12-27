$(document).ready(function () {
    

    // para que no aparezca en la url lo que enviamos con el submit 
    $("#formulario").submit(function (e) { 
        e.preventDefault();
        var nombre = $('#nombre').val();
        console.log(nombre);
    });
    
});