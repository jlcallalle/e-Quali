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


/* Mannipulando Polygon Odontograma */

    $('.cont-diente .diente').on("click", function(e){
        $(this).toggleClass("active");
        var nombrePosition = $(this).attr("data-pos");
        var siglaPosition = $(this).attr("data-sigla");
        //console.log( nombrePosition + ' ' + siglaPosition );
        $('.opciones-odo.ntologia p').removeClass('show');

        var idDiente = $(this).parents('svg').attr('id')

        var rowBox = $(this).parents('.box-lista-dientes-top').siblings().find('.box');
        $( rowBox ).each(function( index ) {
            var boxId = this.id;
            if (boxId == idDiente) {
                $( this ).find('.select-tipo').addClass('show');
            }
        });

    });

    $(".select-tipo").change(function(){
        var codLesion = $(this).children("option:selected").text();
        var nombreLesion = $(this).children("option:selected").val();
        $(this).parent().append(codLesion);
        var numPieza = $(this).parents('.box').attr("data-pieza");
        var idBox = $(this).parents('.box').attr("id");
        //console.log(idBox);

        //var idDental = $(this).parents('.box-options').siblings().find('.svg').attr('id');
        var parteDental = $(this).parents('.box-options').siblings().find('.svg');
        $( parteDental ).each(function( index ) {
            var idParte = this.id;
            if (idBox == idParte) {
                //console.log(idParte);
                var piezaPosition = $(this).find('.active').attr("data-pos");
                var siglaPosition = $(this).find('.active').attr("data-sigla");
                console.log( 'Pieza Positionx:' + piezaPosition);
                console.log( 'Sigla Positionx:' + siglaPosition);

                $('.lista-hallazgo-detallado').append('<li>'+ nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la '
                                                        +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                                                        + numPieza + '</span>  </li> ');
            }
        });




        //console.log(idDental);
    });



    $('.cont-diente.diente-restaura .diente').on("click", function(e){
        $(this).toggleClass("active-restaura");
        var nombrePosition = $(this).attr("data-pos");
        var siglaPosition = $(this).attr("data-sigla");
    });


/* Sidebar*/

    $(".lista-hallazgos li a").on("click", function(e){
        $('.lista-hallazgos li a').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.lista-hallazgos').next().addClass('show');
    });


    /* Hallazgos*/

    $('#cod-restauracion').on("click", function(e){
        $(this).toggleClass("active");
        //$('.contenido-odontograma').addClass('contenido-restaura');
        $('svg#box-15').parent().addClass('diente-restaura');
       // $('.contenido-odontograma').addClass('contenido-restauracion');
       // $('.contenido-odontograma').removeClass('contenido-caries');
    });


    // $('#cod-caries').on("click", function(e){
    //     $(this).toggleClass("active");
    //     //$('.contenido-odontograma').addClass('contenido-restaura');
    //     $('svg#box-15').parent().removeClass('diente-restaura');
    //    // $('.contenido-odontograma').addClass('contenido-restauracion');
    //    // $('.contenido-odontograma').removeClass('contenido-caries');
    // });


    // $('#cod-caries').on("click", function(e){
    //     $(this).toggleClass("active");
    //     $('.contenido-odontograma').addClass('contenido-caries');
    //     $('.contenido-odontograma').removeClass('contenido-restauracion');
    // });


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

