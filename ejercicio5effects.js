$(document).ready(function () {
    

    //efectos con botones
    var resultado = $('#resultado');

    $('.btn-primary').click(function () { 
        // resultado.hide(1000);   // ocultas el elemento en un tiempo de 1 segundo
        resultado.animate({
            
            left : '140px',
            opacity : '0.5',
            height: '+=150px',
            width: '+=150px'
        },3000,function(){
            resultado.animate({
                
                left : '0px',
                opacity : '1',
                height: '-=150px',
                width: '-=150px'
            });
        });
    });
    
    
});