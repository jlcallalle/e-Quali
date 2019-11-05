var dataOdontograma = {
    "caries": [],
    "restauracion": [],
  };

  var dientes = {};

  var MyApp = {
    eventoDientes : function() {
        $(".cont-diente .diente").on("click", function(e){
            if ($(this).hasClass('active')) {
              return;
            }
            $(".contenido-polygon").find(".svg").removeClass("pre-seleccionado");
            $(".contenido-polygon").find(".svg").not(".seleccionado").find(".diente").removeClass("active");
            var contenidoOdontograma = $(this).parents(".contenido-odontograma");
            var nombreHallazgo =  contenidoOdontograma.attr("data-name");
            var tipoHallazgo =  contenidoOdontograma.attr("data-tipo");

            $(this).toggleClass("active");
            $(this).toggleClass(nombreHallazgo);
            $(".cont-diente .diente").removeClass("active-last");
            $(this).addClass("active-last");

            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");

            var idDiente = $(this).parents("svg").attr("id");
            var cuadroDiente = $(this).parents(".box-lista-dientes").siblings().find(".box");

            $(this).parents("svg").addClass("pre-seleccionado");
            $(".select-tipo").remove();

            $( cuadroDiente ).each(function( index ) {
                var idCuadro = this.id;

                if (idCuadro == idDiente) {

                    if (nombreHallazgo == listaHallazgo.hallazgoCaries) {
                        var selectCaries ="<select class='select-tipo select-caries' name='hallazgo-caries'><option value=''>Elegir</option><option value='Mancha Blanca'>MB</option> <option value='Caries del esmalte'>CE</option> <option value='Caries de la dentina'>CD</option> <option value='Caries de la pulpa'>CDP</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoDefectosDelEsmalte) {
                        var selectCaries ="<select class='select-tipo select-defectos-esmalte' name='hallazgo-defectos-del-esmalte'><option value=''>Elegir</option><option value='Hipoplasia'>HP</option> <option value='Hipo Mineralización' >HM</option> <option value='Opacidades de Esmalte'>O</option> <option value='Decoloración del Esmalte'>D</option><option value='Fluorosis'>Fluorosis</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoRestauracionDefinitiva) {
                        var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-restauracion-definitiva'><option value=''>Elegir</option><option value='Amalgama Dental'>AD</option> <option value='Resina' >R</option> <option value='Ionónedo de vidrio'>IV</option><option value='Incrustación Estética'>IE</option><option value='Canilla Estética'>C</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoRestauracionDefinitivaMalo) {
                        var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-restauracion-definitiva-malo'><option value=''>Elegir</option><option value='Amalgama Dental'>AD</option> <option value='Resina' >R</option> <option value='Ionónedo de vidrio'>IV</option><option value='Incrustación Estética'>IE</option><option value='Canilla Estética'>C</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoPosicionDentaria) {
                        var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-posicion-dentaria'><option value=''>Elegir</option><option value='Mesializado'>M</option> <option value='Distalizado'>D</option> <option value='Vestibularizado'>V</option><option value='Palatinizado'>P</option><option value='Lingualizado'>L</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoMovilidadPatologica) {
                        var selectCaries ="<select class='select-tipo select-movilidad-patologica' name='hallazgo-movilidad-patologica'><option value=''>Elegir</option><option value='M1'>M1</option> <option value='M2'>M2</option> <option value='M3'>M3</option> </select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoFosasyFisurasProfundas) {
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-fosas-fisuras-profundas">FFP</span>');
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoPiesaDentariaEctopica) {
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-piesa-dentaria-ectopica">E</span>');
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoMacrodoncia) {
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-macrodoncia">MAC</span>');
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoMicrodoncia) {
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-microdoncia">MIC<span>');
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoImpactacion) {
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-impactacion">I</span>');
                    }
                    if (nombreHallazgo == listaHallazgo.hallazgoRemanenteRadicular) {
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-remanente-radicular">RR</span>');
                    }

                }

            });

            if( $(contenidoOdontograma).is('[data-tipo~="3"]') ) {
                var idDiente = $(this).parents("svg").attr("id");
                var piezaDiente = $(this).parents("svg").attr("data-pieza");
                var wrapperContainer = $(this).parents(".contenido-odontograma");
                var nombreHallazgo = wrapperContainer.attr("data-texto");
                $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ '  data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' : </span>  En la cara '
                +  nombrePosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> ' + piezaDiente + '</span> <a href="#">Eliminar</a>  </li>');

              } else if ($(contenidoOdontograma).is('[data-tipo~="5"]')){
                var idDiente = $(this).parents("svg").attr("id");
                var piezaDiente = $(this).parents("svg").attr("data-pieza");
                var wrapperContainer = $(this).parents(".contenido-odontograma");
                var nombreHallazgo = wrapperContainer.attr("data-texto");
                $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ '  data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' </span>: En la  pieza dental <span> '
                + piezaDiente + '</span> <a href="#">Eliminar</a>  </li>');
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
                var idTipo = parseInt(wrapperContainer.attr("data-tipo"));

                var nomHallazgo = wrapperContainer.attr("data-name");
                var tipoHallazgo = wrapperContainer.attr("data-tipo");

                var parteDental = $(this).parents(".box-options").siblings().find(".svg");
                $( parteDental ).each(function( index ) {
                    var idParte = this.id;
                    if (idBox == idParte) {
                        var piezaPosition = $(this).find(".active-last").attr("data-pos");
                        var siglaPosition = $(this).find(".active-last").attr("data-sigla");

                        if(idTipo === listaPintado.tipoPintado4 ||  idTipo === listaPintado.tipoPintado5 ){
                            $(".lista-hallazgo-detallado").append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' data-sigla=' +codLesion+ '  data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' +nombreHallazgo+ '</span> : ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>, de la  pieza dental <span> '
                            + idDiente + '</span> <a href="#">Eliminar</a> </li> ');
                        } else {
                            $(".lista-hallazgo-detallado").append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' data-sigla=' +codLesion+ ' data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' +nombreHallazgo+ '</span> : ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la cara '
                            +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                            + idDiente + '</span> <a href="#">Eliminar</a> </li> ');
                        }

                        $(this).addClass('seleccionado');
                        $(this).removeClass('pre-seleccionado');

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
                       $("#id_odontograma_especificaciones").html(JSON.stringify(dientes));
                    }
                });
                $(this).remove();
            });

        });
    },
    eventJson : function() {
      var hallazgo = '{ "nombre": "caries","pieza": "1.1" , "cara": "mesial",  "tipo" : "mancha blanca"}';
      var objetoHallazgo = JSON.parse(hallazgo);
    },
    activarHallazgo : function() {

        $(".lista-hallazgos li a, .estados a").on("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            nombreHallazgo = $(this).attr("id");
            textoHallazgo = $(this).attr("data-texto");
            tipoHallazgo = $(this).attr("data-tipo");

            $(".lista-hallazgos li a").removeClass("active");
            $(this).addClass("active");

            var contenedorHallazgo = $(this).parents(".page-odontograma").find(".contenido-odontograma");
            contenedorHallazgo.attr("data-texto", textoHallazgo);
            contenedorHallazgo.attr("data-name", nombreHallazgo);
            contenedorHallazgo.attr("data-tipo", tipoHallazgo);

            contenedorHallazgo.removeClass();
            contenedorHallazgo.addClass("contenido-odontograma");
            contenedorHallazgo.addClass(nombreHallazgo);

            if(nombreHallazgo == listaHallazgo.hallazgoRestauracionDefinitiva || nombreHallazgo == listaHallazgo.hallazgoRestauracionDefinitivaMalo ){
                $(".restaura-estado").addClass("show");
            } else {
                $(".restaura-estado").removeClass("show");
            }

            $("#hallazgo-restauracion-definitiva-malo").toggleClass("actiive");
        });

        $( ".estados .bueno" ).click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $("#hallazgo-restauracion-definitiva").trigger("click")
        });

        $( ".estados .malo" ).click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $("#hallazgo-restauracion-definitiva").toggleClass('active');
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
            var tipoHallazgo = parseInt($(this).parents("li").attr("data-hallazgo"));

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
                            $(this).parents('.svg').removeClass("active-dentaria");
                        }
                    });
                }
            });

            var textoHallazgo = $(this).parents("li").find(".nombre-hallazo").text().trim();
            var infoCuadro = $(this).parents(".page-odontograma").find(".box");
            $( infoCuadro ).each(function( index ) {
                var boxId = this.id;
                if (boxId == idLista) {
                    var textoBox = $(this).find(".select-hallazgos").find("span");

                    if ( tipoHallazgo == listaPintado.tipoPintado5 ) {
                        textoBox.remove();

                    } else {
                            $( textoBox ).each(function( index ) {
                            var textoSigla =  $(this).text();
                            if( textoSigla == caraSigla) {
                                $(this).remove();
                            }
                        });
                    }

                }
            });

            $(this).parents("li").remove();

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
