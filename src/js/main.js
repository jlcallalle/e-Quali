var MyApp = {

    eventoDientes : function() {
        $(".cont-diente .diente").on("click", function(e){

            $(".cont-diente .diente").removeClass("active-last");
            $(this).addClass("active-last");
            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");
            $(".opciones-odontologia p").removeClass("show");

            var idDiente = $(this).parents("svg").attr("id")
            var cuadroDiente = $(this).parents(".box-lista-dientes").siblings().find(".box");

            var contenidoOdontograma = $(this).parents(".contenido-odontograma");
            var nombreHallazgo =  contenidoOdontograma.attr("data-name");

             //console.log('content: ' + nombreHallazgo);

            $(this).toggleClass("active");
            $(this).toggleClass(nombreHallazgo);


            $( cuadroDiente ).each(function( index ) {
                var idCuadro = this.id;

                if (idCuadro == idDiente) {
                    //console.log(idCuadro);
                    //console.log(idDiente);

                    if (nombreHallazgo == 'hallazgo-caries') {
                        var selectCaries ="<select class='select-tipo select-caries' name='hallazgo-caries'><option value=''>Elegir</option><option value='Mancha Blanca'>MB</option> <option value='Caries del esmalte'>CE</option> <option value='Caries de la dentina'>CD</option> <option value='Caries de la pulpa'>CDP</option></select>"

                        $( this ).find('.select-hallazgos').append(selectCaries);

                    }
                    if (nombreHallazgo == 'hallazgo-restauracion-definitiva') {
                        var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-restauracion-definitiva'><option value=''>Elegir</option><option value='Amalgama Dental'>AD</option> <option value='Resina' >R</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }

                    if (nombreHallazgo == 'hallazgo-defectos-esmalte') {
                        var selectCaries ="<select class='select-tipo select-defectos-esmalte' name='hallazgo-defectos-esmalte'><option value=''>Elegir</option><option value='Hipoplasia'>HP</option> <option value='Hipo Mineralización' >HM</option> <option value='Opacidades de Esmalte'>O</option> </select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }



                    $( this ).find('.select-tipo').addClass('show');
                    var listaSelect = $( this ).find(".select-tipo");

                    $( listaSelect ).each(function( index ) {
                        var nombreSelect =  $(this).attr("name");
                        if( nombreSelect == nombreHallazgo ){
                            $( this ).addClass("show");
                        }
                    });

                }
            });



            $(".select-tipo").change(function(){
                //console.log('select-tipo en html');

                var codLesion = $(this).children("option:selected").text();
                var nombreLesion = $(this).children("option:selected").val();
                // console.log(codLesion);
                // console.log(nombreLesion);

                var nameSelec = $(this).attr("name");

                if (codLesion !== "Elegir") {
                    $(this).parent().append('<span  class='+ nameSelec + '>' + codLesion  + '</span> ');
                }

                var numPieza = $(this).parents(".box").attr("data-pieza");
                var idBox = $(this).parents(".box").attr("id");

                var wrapperContainer = $(this).parents(".contenido-odontograma");
                var dataTexto = wrapperContainer.attr("data-texto");

                var parteDental = $(this).parents(".box-options").siblings().find(".svg");
                $( parteDental ).each(function( index ) {
                    var idParte = this.id;

                    if (idBox == idParte) {
                        var piezaPosition = $(this).find(".active-last").attr("data-pos");
                        var siglaPosition = $(this).find(".active-last").attr("data-sigla");
                        $(".lista-hallazgo-detallado").append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' data-sigla=' +codLesion+ ' >'+ '<span class="nombre-hallazo"> ' + dataTexto + '</span> - ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la cara '
                                                                +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                                                                + numPieza + '</span> <a href="#">Eliminar</a>  </li> ');
                        // $(".select-tipo").removeClass("show");
                        $(".select-tipo").remove();

                    }
                });

            });


            if ( $( contenidoOdontograma ).hasClass( "hallazgo-restauracion-temporal" ) ) {
                    console.log("nuevo");
                // var piezaPositionOdonto = $(this).find(".active-last").attr("data-pos");
                // console.log(piezaPositionOdonto);
                var idBox = $(this).parents(".box").attr("id");
                var piezaPositiona = $(this).find(".active-last").attr("data-pos");

                $(".lista-hallazgo-detallado").append('<li id=' + idBox + '> <span class="nombre-hallazo"> Restauración Temporal </span> en la cara mesial <span>  CM </span>  de la  pieza dental <span> 18 </span> <a href="#">Eliminar</a> </li >');
            }

        });
    },
    eventoSelect : function() {


    },
    activarHallazgo : function() {
        $(".lista-hallazgos li a").on("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            nombreHallazgo = $(this).attr("id");
            textoHallazgo = $(this).attr("data-texto");

            $(".lista-hallazgos li a").removeClass("active");
            $(this).addClass("active");

            var contenedorHallazgo = $(this).parents(".page-odontograma").find(".contenido-odontograma");
            contenedorHallazgo.attr("data-texto", textoHallazgo);
            contenedorHallazgo.attr("data-name", nombreHallazgo);

            contenedorHallazgo.removeClass();
            contenedorHallazgo.addClass("contenido-odontograma");
            contenedorHallazgo.addClass(nombreHallazgo);

        });

        $(".cont-diente.diente-restaura .diente").on("click", function(e){
            $(this).toggleClass("active-restaura");
            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");
        });


        $("#hallazgo-caries").click();

    },
    eliminarHallazgos : function() {
        $(document).on("click",".lista-hallazgo-detallado li a",function(e){
            e.preventDefault();
            e.stopPropagation();
            var idLista = $(this).parents("li").attr("id")
            var caraLista = $(this).parents("li").attr("data-pos");
            var caraSigla = $(this).parents("li").attr("data-sigla");
            console.log(idLista);
            console.log("cara lista: " + caraLista);
            console.log("cara sigla: " + caraSigla);

            //Remove color: cara dental
            var listaDientes = $(this).parents(".page-odontograma").find(".svg");

            // console.log(listaDientes);
            $( listaDientes ).each(function( index ) {
                var idDiente = this.id;
                // console.log(idDiente);
                if (idDiente == idLista) {
                    //console.log('id dient' + idDiente);
                    //console.log('id lista' +idLista);
                    //$(this).find('.active-last').removeClass('active');
                    // var nombreCaraDiente = $(this).find('.diente').attr("data-pos");
                    var nombreCaraDiente = $(this).find(".diente");

                    $( nombreCaraDiente ).each(function( index ) {
                        var caraDiente =  $(this).attr("data-pos");
                        var caraSigla =  $(this).attr("data-sigla");
                        // console.log("cara diente: " + caraDiente);
                        if (caraLista == caraDiente) {
                            //console.log("cara diente: " + caraDiente);
                            //console.log("cara sigla: " + caraSigla);
                            $(this).removeClass("active");
                        }
                    });
                    // $(this).find(".active").removeClass("active");
                }
            });

            //Remove Texto Box
            var infoCuadro = $(this).parents(".page-odontograma").find(".box");
            $( infoCuadro ).each(function( index ) {
                var boxId = this.id;
                if (boxId == idLista) {
                    //console.log('id cuadro: ' +boxId);
                    // $(this).find(".select-tipo").removeClass("show");
                    // $(this).find(".select-tipo").next().remove();
                    var textoBox = $(this).find(".select-hallazgos").find('span');

                    $( textoBox ).each(function( index ) {
                        var textoSigla =  $(this).text();
                        //console.log('texto Sigla en span: ' + textoSigla);
                        if( textoSigla == caraSigla) {
                            console.log(caraSigla);
                            $(this).remove();
                        }
                    });


                    //  var lisHallazgo = $(this).find(".select-hallazgos").find("span");
                    //  var nameHallazgo = $(this).find(".select-hallazgos").find("span").val();
                    //  console.log(lisHallazgo);

                    //  $( lisHallazgo ).each(function( key, value  ) {
                    //     console.log( key + ": " + value );
                    //     if (!lisHallazgo == '0') {
                    //         console.log(nameHallazgo);
                    //     }
                    // });
                }
            });

            $(this).parents("li").remove();
        });
    },
}

$(function () {
    if ($(".page-odontograma").length) {
       MyApp.eventoDientes();
    //    MyApp.eventoSelect();
       MyApp.activarHallazgo();
       MyApp.eliminarHallazgos();
    }
});


