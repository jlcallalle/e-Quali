var MyApp = {

    eventoDientes : function() {
        $('.cont-diente .diente').on("click", function(e){
            $(this).toggleClass("active");
            $('.cont-diente .diente').removeClass('active-last');
            $(this).addClass('active-last');
            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");
            //console.log( nombrePosition + ' ' + siglaPosition );
            console.log( 'diente: ' + nombrePosition);
            $('.opciones-odontologia p').removeClass('show');

            var idDiente = $(this).parents('svg').attr('id')

            var rowBox = $(this).parents('.box-lista-dientes-top').siblings().find('.box');
            $( rowBox ).each(function( index ) {
                var boxId = this.id;
                if (boxId == idDiente) {
                    $( this ).find('.select-tipo').addClass('show');
                }
            });
        });
    },
    eventoSelect : function() {
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
                    var piezaPosition = $(this).find('.active-last').attr("data-pos");
                    var siglaPosition = $(this).find('.active-last').attr("data-sigla");
                    console.log('select: ' + piezaPosition);
                    //console.log( 'Pieza Positionx:' + piezaPosition);
                    //console.log( 'Sigla Positionx:' + siglaPosition);
                    // console.log(nombreLesion, codLesion);
                    // console.log(piezaPosition, siglaPosition);
                    // console.log(numPieza);

                    $('.lista-hallazgo-detallado').append('<li>'+ nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la '
                                                            +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                                                            + numPieza + '</span>  </li> ');
                }
            });
            //console.log(idDental);
        });
    },
    eventoHallazgos : function() {
        $(".lista-hallazgos li a").on("click", function(e){
            $('.lista-hallazgos li a').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.lista-hallazgos').next().addClass('show');
        });
    },
    eventoRestauracion : function() {
        $('.cont-diente.diente-restaura .diente').on("click", function(e){
            $(this).toggleClass("active-restaura");
            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");
        });

        $('#cod-restauracion').on("click", function(e){
            $(this).toggleClass("active");
            //$('.contenido-odontograma').addClass('contenido-restaura');
            $('svg#box-15').parent().addClass('diente-restaura');
           // $('.contenido-odontograma').addClass('contenido-restauracion');
           // $('.contenido-odontograma').removeClass('contenido-caries');
        });

    },
}

$(function () {
    if ($('.page-odontograma').length) {
       MyApp.eventoDientes();
       MyApp.eventoSelect();
       MyApp.eventoHallazgos();
       MyApp.eventoRestauracion();
    }

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

