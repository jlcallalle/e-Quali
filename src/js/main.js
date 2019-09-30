var MyApp = {

    eventoDientes : function() {
        $('.cont-diente .diente').on("click", function(e){
            $(this).toggleClass("active");
            $('.cont-diente .diente').removeClass('active-last');
            $(this).addClass('active-last');
            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");
            $('.opciones-odontologia p').removeClass('show');

            var idDiente = $(this).parents('svg').attr('id')

            var rowBox = $(this).parents('.box-lista-dientes').siblings().find('.box');
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
            console.log(codLesion);
            //console.log(nombreLesion);

            if (codLesion !== 'Elegir') {
                $(this).parent().append('<span>' + codLesion  + '</span> ');
            }

            var numPieza = $(this).parents('.box').attr("data-pieza");
            var idBox = $(this).parents('.box').attr("id");

            var parteDental = $(this).parents('.box-options').siblings().find('.svg');
            $( parteDental ).each(function( index ) {
                var idParte = this.id;

                if (idBox == idParte) {
                    var piezaPosition = $(this).find('.active-last').attr("data-pos");
                    var siglaPosition = $(this).find('.active-last').attr("data-sigla");
                    $('.lista-hallazgo-detallado').append('<li>'+ nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la '
                                                            +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                                                            + numPieza + '</span>  </li> ');

                }
            });
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
            $('svg#box-15').parent().addClass('diente-restaura');
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
});

