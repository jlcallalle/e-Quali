var dataOdontograma = {
    "caries":[],
    "restauracion":[],
  };

  var dientes = {
  };


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

            $(this).toggleClass("active");
            $(this).toggleClass(nombreHallazgo);

            $( cuadroDiente ).each(function( index ) {
                var idCuadro = this.id;

                if (idCuadro == idDiente) {

                    if (nombreHallazgo == 'hallazgo-caries') {
                        var selectCaries ="<select class='select-tipo select-caries' name='hallazgo-caries'><option value=''>Elegir</option><option value='Mancha Blanca'>MB</option> <option value='Caries del esmalte'>CE</option> <option value='Caries de la dentina'>CD</option> <option value='Caries de la pulpa'>CDP</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);

                    }

                    if (nombreHallazgo == 'hallazgo-defectos-esmalte') {
                        var selectCaries ="<select class='select-tipo select-defectos-esmalte' name='hallazgo-defectos-esmalte'><option value=''>Elegir</option><option value='Hipoplasia'>HP</option> <option value='Hipo Mineralización' >HM</option> <option value='Opacidades de Esmalte'>O</option> <option value='Decoloración del Esmalte'>D</option><option value='Fluorosis'>Fluorosis</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }


                    if (nombreHallazgo == 'hallazgo-restauracion-definitiva') {
                        var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-restauracion-definitiva'><option value=''>Elegir</option><option value='Amalgama Dental'>AD</option> <option value='Resina' >R</option> <option value='Ionónedo de vidrio'>IV</option><option value='Incrustación Estética'>IE</option><option value='Canilla Estética'>C</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }

                    if (nombreHallazgo == 'hallazgo-poosicion-dentaria') {
                        var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-poosicion-dentaria'><option value=''>Elegir</option><option value='Mesializado'>M</option> <option value='Distalizado'>D</option> <option value='Vestibularizado'>V</option><option value='Palatinizado'>P</option><option value='Lingualizado'>L</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }

                    if (nombreHallazgo == 'hallazgo-fosas-fisuras-profundas') {
                        var selectCaries ="<select class='select-tipo select-fosas-fisuras-profundas' name='hallazgo-fosas-fisuras-profundas'><option value=''>Elegir</option><option value='Fosas y fisuras profundas'>FFP</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }

                    if (nombreHallazgo == 'hallazgo-piesa-dentaria-ectopica') {
                        var selectCaries ="<select class='select-tipo select-fosas-fisuras-profundas' name='hallazgo-fosas-fisuras-profundas'><option value=''>Elegir</option><option value='Pieza Ectópica'>E</option></select>"
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

            if ( $( contenidoOdontograma ).hasClass( "hallazgo-poosicion-dentaria" ) ) {
                $(this).parents("svg").toggleClass("active-dentaria"); //active pieza all
            }


            $(".select-tipo").change(function(){
                var codLesion = $(this).children("option:selected").text();
                var nombreLesion = $(this).children("option:selected").val();

                var nameSelec = $(this).attr("name");

                if (codLesion !== "Elegir") {
                    $(this).parent().append('<span  class='+ nameSelec + '>' + codLesion  + '</span> ');
                }

                var idDiente = $(this).parents(".box").attr("data-pieza");
                var idBox = $(this).parents(".box").attr("id");

                var wrapperContainer = $(this).parents(".contenido-odontograma");
                var nombreHallazgo = wrapperContainer.attr("data-texto");


                var parteDental = $(this).parents(".box-options").siblings().find(".svg");
                $( parteDental ).each(function( index ) {
                    var idParte = this.id;
                    if (idBox == idParte) {
                        var piezaPosition = $(this).find(".active-last").attr("data-pos");
                        var siglaPosition = $(this).find(".active-last").attr("data-sigla");
                        if( nombreHallazgo == 'Posicion Dentaria' || nombreHallazgo == 'Fosas y Fisuras Profundas' ||  nombreHallazgo == 'Pieza dentaria ectopica' ) {
                            $(".lista-hallazgo-detallado").append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' data-sigla=' +codLesion+ ' >'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + '</span> - ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>, de la  pieza dental <span> '
                            + idDiente + '</span> <a href="#">Eliminar</a>  </li> ');
                        } else {
                            $(".lista-hallazgo-detallado").append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' data-sigla=' +codLesion+ ' >'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + '</span> - ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la cara '
                            +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                            + idDiente + '</span> <a href="#">Eliminar</a>  </li> ');

                        }

                        if( idDiente in dientes) {
                          if(nombreHallazgo in dientes[idDiente]){
                            dientes[idDiente][nombreHallazgo][piezaPosition] = true;
                          }

                        } else {
                          dientes[idDiente]={};

                          if (nombreHallazgo in dientes[idDiente]){
                          } else {
                            dientes[idDiente][nombreHallazgo] ={}
                            dientes[idDiente][nombreHallazgo][piezaPosition] = true;
                          }
                       }

                        document.getElementById("id_odontograma_especificaciones").innerHTML = JSON.stringify(dientes);


                        dataOdontograma.caries.push({
                            "numero_pieza":idDiente,
                            "posicion_pieza":piezaPosition,
                            "hallazgo_pieza":nombreHallazgo,
                        })

                        document.getElementById("data-json").innerHTML =
                        dataOdontograma.caries[0].hallazgo_pieza  + " en la cara " + dataOdontograma.caries[0].posicion_pieza   + " de la pieza dental " +  dataOdontograma.caries[0].numero_pieza;

                        var parseOdontograma = JSON.parse(dataOdontograma);
                        document.getElementById("id_odontograma_especificaciones2").innerHTML = JSON.stringify(parseOdontograma);
                    }
                });


                $(this).remove();

            });

            if ( $( contenidoOdontograma ).hasClass( "hallazgo-restauracion-temporal" ) ) {
                $(this).parent().attr("id");
                var getid = $(this).parent().attr("id");
                var piezaPositiona = $(this).find(".active-last").attr("data-pos");
                $(".lista-hallazgo-detallado").append('<li id=' + getid + ' data-pos="mesial"> <span class="nombre-hallazo"> Restauración Temporal </span> en la cara mesial <span>  CM </span>  de la  pieza dental <span> 45 </span> <a href="#">Eliminar</a> </li >');

            }

        });
    },
    eventJson : function() {
      var hallazgo = '{ "nombre": "caries","pieza": "1.1" , "cara": "mesial",  "tipo" : "mancha blanca"}';
      var myObj = JSON.parse(hallazgo);
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

            var listaDientes = $(this).parents(".page-odontograma").find(".svg");

            $( listaDientes ).each(function( index ) {
                var idDiente = this.id;
                if (idDiente == idLista) {
                    var nombreCaraDiente = $(this).find(".diente");

                    $( nombreCaraDiente ).each(function( index ) {
                        var caraDiente =  $(this).attr("data-pos");
                        var caraSigla =  $(this).attr("data-sigla");
                        if (caraLista == caraDiente) {
                            $(this).removeClass("active");
                        }
                    });
                }
            });

            var infoCuadro = $(this).parents(".page-odontograma").find(".box");
            $( infoCuadro ).each(function( index ) {
                var boxId = this.id;
                if (boxId == idLista) {
                    var textoBox = $(this).find(".select-hallazgos").find('span');

                    $( textoBox ).each(function( index ) {
                        var textoSigla =  $(this).text();
                        if( textoSigla == caraSigla) {
                            $(this).remove();
                        }
                    });
                }
            });

            $(this).parents("li").remove();
            var jsonTexto = $('#id_odontograma_especificaciones');
            var valorjsonTexto = jsonTexto.val();

        });
    },
  }

  $(function () {
    if ($(".page-odontograma").length) {
       MyApp.eventoDientes();
       MyApp.eventJson();
       MyApp.activarHallazgo();
       MyApp.eliminarHallazgos();
    }
  });
