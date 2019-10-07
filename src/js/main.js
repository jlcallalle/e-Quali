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
            // console.log('content: ' + nombreData);

            $(this).toggleClass("active");
            $(this).toggleClass(nombreData);


            $( rowBox ).each(function( index ) {
                var boxId = this.id;
                if (boxId == idDiente) {
                    // $( this ).find('.select-tipo').addClass('show');

                    var listaSelect = $( this ).find('.select-tipo');
                    $( listaSelect ).each(function( index ) {
                        var nombreSelect =  $(this).attr("name");
                        // console.log('nombre select: ' +nombreSelect);
                        if( nombreSelect == nombreData ){
                            $( this ).addClass('show');
                        }
                    });
                }
            });


            if ( $( contenidoOdontograma ).hasClass( "hallazgo-restauracion-temporal" ) ) {
                    console.log('nuevo');
                // var piezaPositionOdonto = $(this).find('.active-last').attr("data-pos");
                // console.log(piezaPositionOdonto);
                var idBox = $(this).parents('.box').attr("id");
                var piezaPositiona = $(this).find('.active-last').attr("data-pos");

                $('.lista-hallazgo-detallado').append('<li id=' + idBox + '> <span class="nombre-hallazo"> Restauración Temporal </span> en la cara mesial <span>  CM </span>  de la  pieza dental <span> 18 </span> <a href="#">Eliminar</a> </li >');
            }

        });
    },
    eventoSelect : function() {
        $(".select-tipo").change(function(){
            var codLesion = $(this).children("option:selected").text();
            var nombreLesion = $(this).children("option:selected").val();
            console.log(codLesion);
            console.log(nombreLesion);

           var nameSelec = $(this).attr("name");

            if (codLesion !== 'Elegir') {
                $(this).parent().append('<span  class='+ nameSelec + '>' + codLesion  + '</span> ');
            }

            var numPieza = $(this).parents('.box').attr("data-pieza");
            var idBox = $(this).parents('.box').attr("id");

            var wrapperContainer = $(this).parents('.contenido-odontograma');
            var dataTexto = wrapperContainer.attr('data-texto');

            var parteDental = $(this).parents('.box-options').siblings().find('.svg');
            $( parteDental ).each(function( index ) {
                var idParte = this.id;

                if (idBox == idParte) {
                    var piezaPosition = $(this).find('.active-last').attr("data-pos");
                    var siglaPosition = $(this).find('.active-last').attr("data-sigla");
                    $('.lista-hallazgo-detallado').append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' >'+ '<span class="nombre-hallazo"> ' + dataTexto + '</span> - ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la cara '
                                                            +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                                                            + numPieza + '</span> <a href="#">Eliminar</a>  </li> ');
                    $('.select-tipo').removeClass('show');

                }
            });
        });
    },
    activarHallazgo : function() {
        $(".lista-hallazgos li a").on("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            nombreHallazgo = $(this).attr('id');
            textoHallazgo = $(this).attr('data-texto');

            $('.lista-hallazgos li a').removeClass('active');
            $(this).addClass('active');

            var contenedorHallazgo = $(this).parents('.page-odontograma').find('.contenido-odontograma');
            contenedorHallazgo.attr('data-texto', textoHallazgo);
            contenedorHallazgo.attr('data-name', nombreHallazgo);

            contenedorHallazgo.removeClass();
            contenedorHallazgo.addClass('contenido-odontograma');
            contenedorHallazgo.addClass(nombreHallazgo);

        });

        $('.cont-diente.diente-restaura .diente').on("click", function(e){
            $(this).toggleClass("active-restaura");
            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");
        });


        $("#hallazgo-caries").click();

    },
    eliminarHallazgos : function() {
        $(document).on('click',".lista-hallazgo-detallado li a",function(e){
            e.preventDefault();
            e.stopPropagation();
            var idLista = $(this).parents('li').attr('id')
            var caraLista = $(this).parents('li').attr("data-pos");
            // console.log(idLista);
            // console.log('cara lista: ' + caraLista);

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
                            // console.log('cara diente: ' + caraDiente);
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


