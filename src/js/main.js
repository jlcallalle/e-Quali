var MyApp = {

    onlyNumbers : function() {
        $('.only-numbers').on('keypress', function(event) {
            var numbers = /[0-9]/g;
            var key = String.fromCharCode(event.which);
            if ($.inArray(event.keyCode) >= 0 || numbers.test(key)) {
                return true;
            }
            return false;
        });
    },
}

$(function () {
    if ($('.only-numbers').length) {
        MyApp.onlyNumbers();
    }
    if ($('.page-odontograma').length) {
       console.log('enjoy odontogram');
    }


/* Mannipulando Polygon diente */

    $('.cont-diente .diente').on("click", function(e){
        $(this).toggleClass("active");
        $('#box-18 select').show();
        var nombrePosition = $(this).attr("data-pos");
        var siglaPosition = $(this).attr("data-sigla");
        console.log( nombrePosition + ' ' + siglaPosition );
    });

    $(".select-tipo").change(function(){
        var codLesion = $(this).children("option:selected").text();
        var nombreLesion = $(this).children("option:selected").val();
        $(this).parent().append(codLesion);
        console.log('aaaaa');
        $('.lista-hallazgo-detallado').append('<li>'+ nombreLesion + ' <span>'+ (codLesion) + ' </span>, en la cara mesial <span> (CM) </span> de la  <span> Pieza Dental 1.8</span>  </li> ');
    });





    // $(".lista-hallazgos li a").on("click", function(e){
    //     $('.lista-hallazgos li a').removeClass('active');
    //     $(this).addClass('active');
    // });

    /* Hallazgos*/

    $('#cod-caries').on("click", function(e){
        $(this).toggleClass("active");
        $('.contenido-odontograma').addClass('contenido-caries');
        $('.contenido-odontograma').removeClass('contenido-restauracion');
    });

    $('#cod-restauracion').on("click", function(e){
        $(this).toggleClass("active");
        $('.contenido-odontograma').addClass('contenido-restauracion');
        $('.contenido-odontograma').removeClass('contenido-caries');
    });

    /*
    function onClickExtraccion() {
        var wrapo = document.getElementById("contenido-odontograma");
        wrapo.addClass("intro1");
    }
    var codExtraccion = document.getElementById('cod-extraccion');
    codExtraccion.addEventListener("click", onClickExtraccion);
    */


    // $('#cod-extraccion').on("click", function(e){
    //     $(this).toggleClass("active");
    //     $('.contenido-odontograma').addClass('contenido-extraccion');
    // });

    // $('#cod-fractura').on("click", function(e){
    //     $(this).toggleClass("active");
    //     $('.contenido-odontograma').addClass('contenido-fractura');
    // });


});

