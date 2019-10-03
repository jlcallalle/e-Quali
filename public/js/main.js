var MyApp = {

    eventoDientes : function() {
        $('.cont-diente .diente').on("click", function(e){

            $('.cont-diente .diente').removeClass('active-last');
            $(this).addClass('active-last');
            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");
            $('.opciones-odontologia p').removeClass('show');

            var idDiente = $(this).parents('svg').attr('id')

            var rowBox = $(this).parents('.box-lista-dientes').siblings().find('.box');

            var contenidoOdontograma = $(this).parents('.contenido-odontograma');
            var nombreData =  contenidoOdontograma.attr('data-name');
            console.log(nombreData);

            $(this).toggleClass("active");
            $(this).toggleClass(nombreData);


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
                    $('.lista-hallazgo-detallado').append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' >'+ ' Lesion de caries dental - ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la '
                                                            +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                                                            + numPieza + '</span> <a href="#">Eliminar</a>  </li> ');

                }
            });
        });
    },
    activarHallazgo : function() {
        $(".lista-hallazgos li a").on("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            nombreHallazgo = $(this).attr('id');

            //console.log(nombreHallazgo);

            $('.lista-hallazgos li a').removeClass('active');
            $(this).addClass('active');

            var contenedorHallazgo = $(this).parents('.page-odontograma').find('.contenido-odontograma');

            if (nombreHallazgo == 'hallazgo-caries') {
                contenedorHallazgo.addClass(nombreHallazgo);
                contenedorHallazgo.removeClass('hallazgo-restauracion-definitiva');
                contenedorHallazgo.removeClass(' hallazgo-restauracion-temporal');
                contenedorHallazgo.attr('data-name', nombreHallazgo);
            }
            if (nombreHallazgo == 'hallazgo-restauracion-definitiva') {
                contenedorHallazgo.addClass(nombreHallazgo);
                contenedorHallazgo.removeClass('hallazgo-caries ');
                contenedorHallazgo.removeClass('hallazgo-restauracion-temporal');
                $('svg#box-44').parent().addClass('diente-restaura');
                contenedorHallazgo.attr('data-name', nombreHallazgo);
            }
            if (nombreHallazgo == 'hallazgo-restauracion-temporal') {
                contenedorHallazgo.addClass(nombreHallazgo);
                contenedorHallazgo.removeClass('hallazgo-caries');
                contenedorHallazgo.removeClass('hallazgo-restauracion-definitiva');
                contenedorHallazgo.attr('data-name', nombreHallazgo);
            }
        });

        $('.cont-diente.diente-restaura .diente').on("click", function(e){
            $(this).toggleClass("active-restaura");
            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");
        });

        // $('#hallazgo-restauracion-definitiva').on("click", function(e){
        //     $(this).toggleClass("active");
        //     $('#box-15').parent().addClass('diente-restaura');
        // });

        $("#hallazgo-caries").click();

    },
    eliminarHallazgos : function() {
        $(document).on('click',".lista-hallazgo-detallado li a",function(e){
            e.preventDefault();
            e.stopPropagation();
            var idLista = $(this).parents('li').attr('id')
            var caraLista = $(this).parents('li').attr("data-pos");
            // console.log(idLista);
            console.log('cara lista: ' + caraLista);

            //Remove color: cara dental
            var listaDientes = $(this).parents('.page-odontograma').find('.svg');
            // console.log(listaDientes);
            $( listaDientes ).each(function( index ) {
                var idDiente = this.id;
                // console.log(idDiente);
                if (idDiente == idLista) {
                    //console.log('id dient' + idDiente);
                    //console.log('id lista' +idLista);
                    //$(this).find('.active-last').removeClass('active');
                    // var nombreCaraDiente = $(this).find('.diente').attr("data-pos");
                    var nombreCaraDiente = $(this).find('.diente');
                    $( nombreCaraDiente ).each(function( index ) {
                        var caraDiente =  $(this).attr("data-pos");
                        //console.log('cara diente: ' + caraDiente);
                        if (caraLista == caraDiente) {
                            console.log('cara diente: ' + caraDiente);
                            $(this).removeClass('active');
                        }
                    });

                    // $(this).find('.active').removeClass('active');
                }
            });

            //Remove Texto Box
            var infoCuadro = $(this).parents('.page-odontograma').find('.box');
            $( infoCuadro ).each(function( index ) {
                var boxId = this.id;
                if (boxId == idLista) {
                   // console.log(boxId);
                    $(this).find('.select-tipo').removeClass('show');
                    $(this).find('.select-tipo').next().remove();
                }
            });

            $(this).parents('li').remove();
        });
    },
}

$(function () {
    if ($('.page-odontograma').length) {
       MyApp.eventoDientes();
       MyApp.eventoSelect();
       MyApp.activarHallazgo();
      // MyApp.eventoRestauracion();
       MyApp.eliminarHallazgos();
    }


});


