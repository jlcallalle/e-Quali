
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
            //$(".contenido-polygon").find(".pre-seleccionado").find('.diente').removeClass("active");
            $(".contenido-polygon").find(".svg").removeClass('pre-seleccionado');
            $(".contenido-polygon").find(".svg").not(".seleccionado").find('.diente').removeClass("active");
            //deteremina nombre hallazgo y tipo
            var contenidoOdontograma = $(this).parents(".contenido-odontograma");
            var nombreHallazgo =  contenidoOdontograma.attr("data-name");
            var tipoHallazgo =  contenidoOdontograma.attr("data-tipo");
            console.log('nombre hallazgo: ' + nombreHallazgo);
            console.log('tipo hallazgo: ' + tipoHallazgo);

            $(this).toggleClass("active");
            $(this).toggleClass(nombreHallazgo);
            $(".cont-diente .diente").removeClass("active-last");
            $(this).addClass("active-last");

            var nombrePosition = $(this).attr("data-pos");
            var siglaPosition = $(this).attr("data-sigla");

            var idDiente = $(this).parents("svg").attr("id"); //box-48 SVG
            var cuadroDiente = $(this).parents(".box-lista-dientes").siblings().find(".box");  // <div id="box-48" class="box box-48" data-pieza="4.8">



            $(this).parents("svg").addClass('pre-seleccionado');
            $('.select-tipo').remove();

            //diente ausente

            if ( $(contenidoOdontograma).hasClass("hallazgo-pieza-dentaria-ausente") ) {
                console.log('pieza dentaria ausente');
                $(this).parents("svg").toggleClass('active-ausente');
            }



            $( cuadroDiente ).each(function( index ) { // <div id="box-48" class="box box-48" data-pieza="4.8">
                var idCuadro = this.id;

                if (idCuadro == idDiente) {

                    if (nombreHallazgo == 'hallazgo-caries') { //tipo 1 //select
                        var selectCaries ="<select class='select-tipo select-caries' name='hallazgo-caries'><option value=''>Elegir</option><option value='Mancha Blanca'>MB</option> <option value='Caries del esmalte'>CE</option> <option value='Caries de la dentina'>CD</option> <option value='Caries de la pulpa'>CDP</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);

                    }

                    if (nombreHallazgo == 'hallazgo-defectos-del-esmalte') {  //tipo 1 //select
                        var selectCaries ="<select class='select-tipo select-defectos-esmalte' name='hallazgo-defectos-del-esmalte'><option value=''>Elegir</option><option value='Hipoplasia'>HP</option> <option value='Hipo Mineralización' >HM</option> <option value='Opacidades de Esmalte'>O</option> <option value='Decoloración del Esmalte'>D</option><option value='Fluorosis'>Fluorosis</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }

                    if (nombreHallazgo == 'hallazgo-restauracion-definitiva') {  //tipo 2 //select
                        var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-restauracion-definitiva'><option value=''>Elegir</option><option value='Amalgama Dental'>AD</option> <option value='Resina' >R</option> <option value='Ionónedo de vidrio'>IV</option><option value='Incrustación Estética'>IE</option><option value='Canilla Estética'>C</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }

                    if (nombreHallazgo == 'hallazgo-restauracion-definitiva-malo') { //tipo 2 //select
                        var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-restauracion-definitiva-malo'><option value=''>Elegir</option><option value='Amalgama Dental'>AD</option> <option value='Resina' >R</option> <option value='Ionónedo de vidrio'>IV</option><option value='Incrustación Estética'>IE</option><option value='Canilla Estética'>C</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }

                    if (nombreHallazgo == 'hallazgo-posicion-dentaria') { //tipo 4 //select
                        var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-posicion-dentaria'><option value=''>Elegir</option><option value='Mesializado'>M</option> <option value='Distalizado'>D</option> <option value='Vestibularizado'>V</option><option value='Palatinizado'>P</option><option value='Lingualizado'>L</option></select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }
                    if (nombreHallazgo == 'hallazgo-movilidad-patologica') {  //tipo 4 //select
                        var selectCaries ="<select class='select-tipo select-movilidad-patologica' name='hallazgo-movilidad-patologica'><option value=''>Elegir</option><option value='M1'>M1</option> <option value='M2'>M2</option> <option value='M3'>M3</option> </select>"
                        $( this ).find('.select-hallazgos').append(selectCaries);
                    }

                    if (nombreHallazgo == 'hallazgo-fosas-fisuras-profundas') { //tipo 5  //span
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-fosas-fisuras-profundas">FFP</span>');
                    }

                    if (nombreHallazgo == 'hallazgo-piesa-dentaria-ectopica') { //tipo 5  //span
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-piesa-dentaria-ectopica">E</span>');
                    }

                    if (nombreHallazgo == 'hallazgo-macrodoncia') { //tipo 5   //span
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-macrodoncia">MAC</span>');
                    }
                    if (nombreHallazgo == 'hallazgo-microdoncia') { //tipo 5   //span
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-microdoncia">MIC<span>');
                    }

                    if (nombreHallazgo == 'hallazgo-impactacion') { //tipo 5   //span
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-impactacion">I</span>');
                    }

                    if (nombreHallazgo == 'hallazgo-remanente-radicular') { //tipo 5   //span
                        $( this ).find('.select-hallazgos').append('<span class="hallazgo-remanente-radicular">RR</span>');
                    }

                    if (nombreHallazgo == 'hallazgo-pieza-dentaria-ausente') {
                        console.log('ausente');

                     }
                }

            });


            if( $(contenidoOdontograma).is('[data-tipo~="3"]') ) { //tipo 3: Restauración temporal
                var idDiente = $(this).parents("svg").attr("id");
                var piezaDiente = $(this).parents("svg").attr("data-pieza");
                var wrapperContainer = $(this).parents(".contenido-odontograma");
                var nombreHallazgo = wrapperContainer.attr("data-texto");
                $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ ' >'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' : </span>  En la cara '
                +  nombrePosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                + piezaDiente + '</span> <a href="#">Eliminar</a>  </li>');


            } else if ($(contenidoOdontograma).is('[data-tipo~="5"]')){   //tipo 5: //Macrodoncia
                console.log('aaaa tipo 4');
                var idDiente = $(this).parents("svg").attr("id");
                var piezaDiente = $(this).parents("svg").attr("data-pieza");
                console.log('pieza: '+piezaDiente);
                var wrapperContainer = $(this).parents(".contenido-odontograma");
                var nombreHallazgo = wrapperContainer.attr("data-texto");
                $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ ' >'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' </span>: En la  pieza dental <span> '
                + piezaDiente + '</span> <a href="#">Eliminar</a>  </li>');

            } else if ($(contenidoOdontograma).is('[data-tipo~="6"]')){   //tipo 6: //ausente
                var idDiente = $(this).parents("svg").attr("id");
                var piezaDiente = $(this).parents("svg").attr("data-pieza");
                var wrapperContainer = $(this).parents(".contenido-odontograma");
                var nombreHallazgo = wrapperContainer.attr("data-texto");
                $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ ' >'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' : </span> De la  pieza dental <span> '
                + piezaDiente + '</span> <a href="#">Eliminar</a>  </li>');
            }

            // $(document).on('change', '.select-tipo', function(){
            //     console.log('termina change');
            // });



        });
    },
    eventoSelect : function() {
        console.log('aaa');
        $(document).on('change','.select-tipo',function(){

            var codLesion = $(this).children("option:selected").text();
            var nombreLesion = $(this).children("option:selected").val();
            var nameSelec = $(this).attr("name");
            console.log(codLesion,'asdasd');
            console.log(nombreLesion);
            console.log(nameSelec);

            if (codLesion !== "Elegir") {
                $(this).parent().append('<span  class='+ nameSelec + '>' + codLesion  + '</span> ');
            }

            var idDiente = $(this).parents(".box").attr("data-pieza");
            var idBox = $(this).parents(".box").attr("id"); //box-48

            var wrapperContainer = $(this).parents(".contenido-odontograma");
            var nombreHallazgo = wrapperContainer.attr("data-texto");
            var idTipo = wrapperContainer.attr("data-tipo");

            console.log('select hallazgo: ' + nombreHallazgo);

            var parteDental = $(this).parents(".box-options").siblings().find(".svg");
            $( parteDental ).each(function( index ) {
                var idParte = this.id;
                if (idBox == idParte) {
                    var piezaPosition = $(this).find(".active-last").attr("data-pos");
                    var siglaPosition = $(this).find(".active-last").attr("data-sigla");

                    if(idTipo == '4' ||  idTipo == '5' ){
                        $(".lista-hallazgo-detallado").append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' data-sigla=' +codLesion+ ' >'+ '<span class="nombre-hallazo"> ' +nombreHallazgo+ '</span> : ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>, de la  pieza dental <span> '
                        + idDiente + '</span> <a href="#">Eliminar</a>  </li> ');

                    } else {
                        $(".lista-hallazgo-detallado").append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' data-sigla=' +codLesion+ ' >'+ '<span class="nombre-hallazo"> ' +nombreHallazgo+ '</span> : ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la cara '
                        +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                        + idDiente + '</span> <a href="#">Eliminar</a>  </li> '); //completo
                    }

                    $(this).addClass('seleccionado');
                    $(this).removeClass('pre-seleccionado');


                    // Json Arrays save
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

                    // dataOdontograma.caries.push({
                    //     "numero_pieza":idDiente,
                    //     "posicion_pieza":piezaPosition,
                    //     "hallazgo_pieza":nombreHallazgo,
                    // })

                    // document.getElementById("data-json").innerHTML =
                    // dataOdontograma.caries[0].hallazgo_pieza  + " en la cara " + dataOdontograma.caries[0].posicion_pieza   + " de la pieza dental " +  dataOdontograma.caries[0].numero_pieza;

                    // var parseOdontograma = JSON.parse(dataOdontograma);
                    // document.getElementById("id_odontograma_especificaciones2").innerHTML = JSON.stringify(parseOdontograma);

                }
            });
            $(this).remove();

            //mostrar referencia diente seleccionado

        });
    },
    eventJson : function() {
      var hallazgo = '{ "nombre": "caries","pieza": "1.1" , "cara": "mesial",  "tipo" : "mancha blanca"}';
      var myObj = JSON.parse(hallazgo);
    },

    activarHallazgo : function() {

        $(".lista-hallazgos li a, .estados a").on("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            nombreHallazgo = $(this).attr("id");
            textoHallazgo = $(this).attr("data-texto");
            tipoHallazgo = $(this).attr("data-tipo");
            console.log('opciones: ' + tipoHallazgo);

            $(".lista-hallazgos li a").removeClass("active");
            $(this).addClass("active");

            var contenedorHallazgo = $(this).parents(".page-odontograma").find(".contenido-odontograma");
            contenedorHallazgo.attr("data-texto", textoHallazgo);
            contenedorHallazgo.attr("data-name", nombreHallazgo);
            contenedorHallazgo.attr("data-tipo", tipoHallazgo);

            contenedorHallazgo.removeClass();
            contenedorHallazgo.addClass("contenido-odontograma");
            contenedorHallazgo.addClass(nombreHallazgo);

            if(nombreHallazgo == 'hallazgo-restauracion-definitiva' || nombreHallazgo == 'hallazgo-restauracion-definitiva-malo' ){
                $('.restaura-estado').addClass('show');
            } else {
                $('.restaura-estado').removeClass('show');
            }

            $("#hallazgo-restauracion-definitiva-malo").toggleClass('actiive');
        });


        $( ".estados .bueno" ).click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $("#hallazgo-restauracion-definitiva").trigger("click")
        });
        $( ".estados .malo" ).click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('hola malo');
            $("#hallazgo-restauracion-definitiva").toggleClass('active');
        });

        // $(".cont-diente.diente-restaura .diente").on("click", function(e){
        //     alert('diente restaura');
        //     $(this).toggleClass("active-restaura");
        //     var nombrePosition = $(this).attr("data-pos");
        //     var siglaPosition = $(this).attr("data-sigla");
        // });


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
                            console.log('a-'+caraLista);
                            console.log('b-'+caraDiente);
                            $(this).removeClass("active");
                            $(this).parents('.svg').removeClass("active-ausente"); //elimina pieza dentaria ausente
                        }
                    });
                }
            });


            var textoHallazgo = $(this).parents("li").find(".nombre-hallazo").text().trim();
            console.log(textoHallazgo);
            var infoCuadro = $(this).parents(".page-odontograma").find(".box");
            $( infoCuadro ).each(function( index ) {
                var boxId = this.id;
                if (boxId == idLista) {
                    var textoBox = $(this).find(".select-hallazgos").find('span');

                    if ( textoHallazgo == 'Remanente radicular' || textoHallazgo == 'Impactacion' || textoHallazgo == 'Fosas y fisuras profundas' || textoHallazgo == 'Pieza dentaria ectopica' || textoHallazgo == 'Macrodoncia' || textoHallazgo == 'Microdoncia'  ) {
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
            // var jsonTexto = $('#id_odontograma_especificaciones');
            // var valorjsonTexto = jsonTexto.val();

        });
    },
  }

  $(function () {
    if ($(".page-odontograma").length) {
       MyApp.eventoDientes();
       MyApp.eventoSelect();
       MyApp.eventJson();
       MyApp.activarHallazgo();
       MyApp.eliminarHallazgos();

    }
  });
