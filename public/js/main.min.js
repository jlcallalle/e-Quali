var dataOdontograma = {
  "caries": [],
  "restauracion": [],
};

var dientes = {};

var countClick = 0;
var countClickFijo = 0;
var countClickFijoMalo = 0;
var countClickRemovible = 0;
var countClickRemovibleMalo = 0;
var countClickOrtodonticoFijo = 0;
var countClickOrtodonticoFijoMalo = 0;

var countClickProtesisFija = 0;
var countClickProtesisFijaMalo = 0;

var countClickEspigoMuñon = 0;
var countClickEspigoMuñonMalo = 0;


var MyApp = {
  eventoDientes : function() {
    $(".cont-diente .diente").on("click", function(e){
      if ($(this).hasClass("active")) {
        return;
      }
      var piezaDentariaActual = $(this).parents(".svg");
      if ( piezaDentariaActual.hasClass("active-erupcion")
         || piezaDentariaActual.hasClass("active-extruida")
         || piezaDentariaActual.hasClass("active-intruida")
         || piezaDentariaActual.hasClass("active-diastema")
         || piezaDentariaActual.hasClass("active-giroversion") ) {
        return;
      }

      var piezasDentariasTotal = $(".contenido-polygon").find(".svg");
      piezasDentariasTotal.removeClass("pre-seleccionado");
      piezasDentariasTotal.not(".seleccionado").find(".diente").removeClass("active");
      piezasDentariasTotal.not(".seleccionado").removeClass("active-hallazgo-corona active-hallazgo-corona-malo active-hallazgo-corona-temporal ");
      piezasDentariasTotal.not(".seleccionado").removeClass("active-hallazgo-pieza-dentaria-ausente");

      var contenidoOdontograma = $(this).parents(".contenido-odontograma");
      var idHallazgo =  contenidoOdontograma.attr("data-id");
      var tipoHallazgo =  parseInt(contenidoOdontograma.attr("data-tipo"));
      var nombreHallazgo =  contenidoOdontograma.attr("data-name");
      var nombreHallazgoTexto =  contenidoOdontograma.attr("data-texto");
      var tipoEdentulo = $(this).parents(".box-lista-dientes").parent().attr("data-edentulo");

      var nombrePosition = $(this).attr("data-pos");

      var siglaPosition = $(this).attr("data-sigla");
      var idDiente = $(this).parents("svg").attr("id");
      var piezaDiente = $(this).parents("svg").attr("data-pieza");
      var cuadroDiente = $(this).parents(".box-lista-dientes").siblings().find(".box");
      var edadDentaria = $(this).parents(".row-dental").data('edad');

      // console.log(edadDentaria,'edadDentaria');

      $(this).toggleClass("active");
      $(this).toggleClass(nombreHallazgo);
      $(".cont-diente .diente").removeClass("active-last");
      $(this).addClass("active-last");
      $(this).parents("svg").addClass("pre-seleccionado");
      $(".select-tipo").remove();

      if (tipoHallazgo == listaPintado.tipoPintado4 || tipoHallazgo == listaPintado.tipoPintado5
         || tipoHallazgo == listaPintado.tipoPintado6 || tipoHallazgo == listaPintado.tipoPintado8
         || tipoHallazgo == listaPintado.tipoPintado9) {
        $(this).parents("svg").addClass(`active-${nombreHallazgo}`);
      }

      // TIPO 11
      if (tipoHallazgo == listaPintado.tipoPintado11) {
        // $(this).parents("svg").parent().addClass(`active-${nombreHallazgo}`);
        // $(this).parents("svg").parent().addClass(`callalle`)
      }

      if(nombrePosition == 'oclusal') {
          $(this).parents('svg').find('[data-pos="oclusal"]').addClass('disabledbutton');
          $(this).removeClass("disabledbutton");
      }

      if(nombrePosition == 'oclusal-1' || nombrePosition == 'oclusal-2') {
          var valorOclusal = nombrePosition.split('-')[0]; // oclusal
          var numOclusal = nombrePosition.split('-')[1]; // 1
          console.log(valorOclusal,'valorOclusal');
          console.log(numOclusal,'numOclusal');
          $(this).parents('svg').find(`[data-pos="oclusal-*"]`).addClass('disabledbutton');
          $(this).removeClass("disabledbutton");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoDienteExtruida) ) {
          $(this).parents("svg").toggleClass('active-extruida');
          var tagFlecha = '<img src="img/flecha-extruida.png">';
          $(this).parents(".cont-diente").addClass('flecha-extruida');
          $(this).parents(".cont-diente").append(tagFlecha)
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoDienteIntruida) ) {
          $(this).parents("svg").toggleClass('active-intruida');
          var tagFlecha = '<img src="img/flecha-intruida.png">';
          $(this).parents(".cont-diente").addClass('flecha-intruida');
          $(this).parents(".cont-diente").append(tagFlecha)
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoDiastema) ) {
          $(this).parents("svg").toggleClass('active-diastema');
          var tagFlecha = '<img src="img/diastema.png">';
          $(this).parents(".cont-diente").addClass('diastema');
          $(this).parents(".cont-diente").append(tagFlecha)
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoGiroversion) ) {
          var tagFlecha = '<img src="img/giroversion.png">';
          $(this).parents(".cont-diente").addClass('giroversion');
          $(this).parents(".cont-diente").append(tagFlecha)
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoImplanteDental) ) {
          $(this).parents("svg").addClass("seleccionado");
          $(this).parents("svg").removeClass("pre-seleccionado");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoImplanteDentalMalo) ) {
          $(this).parents("svg").addClass("seleccionado");
          $(this).parents("svg").removeClass("pre-seleccionado");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoGeminacion) ) {
          $(this).parents("svg").parent().toggleClass("active-geminacion");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgFusion) ) {
          $(this).parents("svg").parent().toggleClass("active-fusion");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoDienteClavija) ) {
          $(this).parents("svg").parent().toggleClass("active-clavija");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoEdentuloTotal) ) {
          $(this).parents("svg").parent().toggleClass("active-edentulo-total");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoSupernumeraria) ) {
          $(this).parents("svg").parent().toggleClass("active-supernumeraria");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoProtesisTotal) ) {
          $(this).parents("svg").parent().toggleClass("active-protesis-total");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoProtesisTotalMalo) ) {
          $(this).parents("svg").parent().toggleClass("active-protesis-total-malo");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoOrtodonticoRemovible) ) {
          $(this).parents("svg").parent().toggleClass("active-ortodontico-removible");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoOrtodonticoRemovibleMalo) ) {
          $(this).parents("svg").parent().toggleClass("active-ortodontico-removible-malo");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoTransposicion) ) {
          $(this).parents("svg").parent().toggleClass("active-transposicion");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoFractura) ) {
          $(this).parents("svg").parent().toggleClass("active-fractura-linea-top");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoFracturaLineaTop) ) {
          $(this).parents("svg").parent().toggleClass("active-fractura-linea-sub");
      }
      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoFracturaDiagonalIzquierda) ) {
          $(this).parents("svg").parent().toggleClass("active-fractura-diagonal-izquierda");
      }
      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoFracturaDiagonallDerecha) ) {
          $(this).parents("svg").parent().toggleClass("active-fractura-diagonal-derecha");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoFracturaDiagonalIzquierdaSmall) ) {
          $(this).parents("svg").parent().toggleClass("active-fractura-diagonal-izquierda-small");
      }
      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoFracturaDiagonallDerechaSmall) ) {
          $(this).parents("svg").parent().toggleClass("active-fractura-diagonal-derecha-small");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoFracturaRayalIzquierda) ) {
          $(this).parents("svg").parent().toggleClass("active-fractura-raya-izquierda");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoFracturaRayalDerecha) ) {
          $(this).parents("svg").parent().toggleClass("active-fractura-raya-derecha");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoRemanenteRadicular) ) {
          $(this).parents("svg").toggleClass("active-remanente-radicular");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoSellantes) ) {
          $(this).parents("svg").parent().toggleClass("active-sellantes");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoSellantesMalo) ) {
        $(this).parents("svg").parent().toggleClass("active-sellantes-malo");
      }


      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoSuperficieDesgastada) ) {
        $(this).parents("svg").parent().toggleClass("active-superficie-desgastada-linea-top");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoSuperficieDesgastadaLineaSub) ) {
        $(this).parents("svg").parent().toggleClass("active-superficie-desgastada-linea-sub");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoSuperficieDesgastadaIzquierda) ) {
        $(this).parents("svg").parent().toggleClass("active-superficie-desgastada-izquierda");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoSuperficieDesgastadaDerecha) ) {
        $(this).parents("svg").parent().toggleClass("active-superficie-desgastada-derecha");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoTratamientoPulpar) ) {
          if (edadDentaria === "adulto") {
            $(this).parents("svg").parent().toggleClass("active-tratamiento-pulpar");
          } else {
            $(this).parents("svg").parent().toggleClass("active-tratamiento-pulpar-nino");
            $(this).parents("svg").parent().addClass("pre-seleccionado");
          }
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoTratamientoPulparMalo) ) {
        if (edadDentaria === "adulto") {
          $(this).parents("svg").parent().toggleClass("active-tratamiento-pulpar-malo");
        } else {
          $(this).parents("svg").parent().toggleClass("active-tratamiento-pulpar-malo-nino");
        }
      }


      $( cuadroDiente ).each(function( index ) {
          var idCuadro = this.id;

          if (idCuadro == idDiente) {

              /* ----------Inicio Generado por DB--------- */
              if (nombreHallazgo == listaHallazgo.hallazgoCaries) {
                  var selectCaries ="<select class='select-tipo select-caries' name='hallazgo-caries'><option value=''>Elegir</option><option value='Mancha Blanca'>MB</option> <option value='Caries del esmalte'>CE</option> <option value='Caries de la dentina'>CD</option> <option value='Caries de la pulpa'>CDP</option></select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoDefectosDelEsmalte) {
                  var selectCaries ="<select class='select-tipo select-defectos-esmalte' name='hallazgo-defectos-del-esmalte'><option value=''>Elegir</option><option value='Hipoplasia'>HP</option> <option value='Hipo Mineralización' >HM</option> <option value='Opacidades de Esmalte'>O</option> <option value='Decoloración del Esmalte'>D</option><option value='Fluorosis'>Fluorosis</option></select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoRestauracionDefinitiva) {
                  var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-restauracion-definitiva'><option value=''>Elegir</option><option value='Amalgama Dental'>AM</option> <option value='Resina' >R</option> <option value='Ionónedo de vidrio'>IV</option><option value='Incrustación Estética'>IE</option><option value='Canilla Estética'>CE</option></select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoRestauracionDefinitivaMalo) {
                  var selectCaries ="<select class='select-tipo select-restauracion-definitiva-malo' name='hallazgo-restauracion-definitiva-malo'><option value=''>Elegir</option><option value='Amalgama Dental'>AD</option> <option value='Resina' >R</option> <option value='Ionónedo de vidrio'>IV</option><option value='Incrustación Estética'>IE</option><option value='Canilla Estética'>C</option></select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoPosicionDentaria) {
                  var selectCaries ="<select class='select-tipo select-posicion-dentari' name='hallazgo-posicion-dentaria'><option value=''>Elegir</option><option value='Mesializado'>M</option> <option value='Distalizado'>D</option> <option value='Vestibularizado'>V</option><option value='Palatinizado'>P</option><option value='Lingualizado'>L</option></select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoMovilidadPatologica) {
                  var selectCaries ="<select class='select-tipo select-movilidad-patologica' name='hallazgo-movilidad-patologica'><option value=''>Elegir</option><option value='M1'>M1</option> <option value='M2'>M2</option> <option value='M3'>M3</option> </select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoCorona) {
                  var selectCaries ="<select class='select-tipo select-corona' name='hallazgo-corona'><option value=''>Elegir</option><option value='Corona en Diente Deciduo'>CDD</option><option value='Corona Metálica'>CM</option><option value='Corona Fenestrada'>CF</option><option value='Corona Metal Cerámica'>CMC</option><option value='Corona Veneer'>CV</option><option value='Canilla Estética'>CJ</option><option value='Corona Temporal'>CT</option> </select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoCoronaMalo) {
                var selectCaries ="<select class='select-tipo select-corona-malo' name='hallazgo-corona-malo'><option value=''>Elegir</option><option value='Corona Metálica'>CM</option><option value='Corona Fenestrada'>CF</option><option value='Corona Metal Cerámica'>CMC</option><option value='Corona Veneer'>CV</option><option value='Canilla Estética'>CJ</option><option value='Corona Temporal'>CT</option> </select>"
                $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoDienteAusente) {
                  var selectCaries ="<select class='select-tipo select-ausente' name='hallazgo-ausente'><option value=''>Elegir</option><option value='Diente no erupcionado'>DNE</option><option value='Diente ausente por extracción'>DEX</option><option value='Diente ausente por otras razones'>DAO</option> </select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoSuperficieDesgastada) {
                var selectCaries ="<select class='select-tipo select-superficie-desgastada' name='hallazgo-superficie-desgastada'> <option value=''>Elegir</option> <option value='DES'>Atricción</option> <option value='DES'>Erosión</option> <option value='DES'>Abfracción</option></select>"
                $( this ).find('.select-hallazgos').append(selectCaries);
             }
             if (nombreHallazgo == listaHallazgo.hallazgoSuperficieDesgastadaLineaSub) {
                var selectCaries ="<select class='select-tipo select-superficie-desgastada' name='hallazgo-superficie-desgastada'> <option value=''>Elegir</option> <option value='DES'>Atricción</option> <option value='DES'>Erosión</option> <option value='DES'>Abfracción</option></select>"
                $( this ).find('.select-hallazgos').append(selectCaries);
            }
            if (nombreHallazgo == listaHallazgo.hallazgoSuperficieDesgastadaIzquierda) {
                var selectCaries ="<select class='select-tipo select-superficie-desgastada' name='hallazgo-superficie-desgastada'> <option value=''>Elegir</option> <option value='DES'>Atricción</option> <option value='DES'>Erosión</option> <option value='DES'>Abfracción</option></select>"
                $( this ).find('.select-hallazgos').append(selectCaries);
            }
            if (nombreHallazgo == listaHallazgo.hallazgoSuperficieDesgastadaDerecha) {
                var selectCaries ="<select class='select-tipo select-superficie-desgastada' name='hallazgo-superficie-desgastada'> <option value=''>Elegir</option> <option value='DES'>Atricción</option> <option value='DES'>Erosión</option> <option value='DES'>Abfracción</option></select>"
                $( this ).find('.select-hallazgos').append(selectCaries);
            }

            if (nombreHallazgo == listaHallazgo.hallazgoTratamientoPulpar) {
              if (edadDentaria == 'nino') {
                console.log('se agrega select en pulpar');
                var selectCaries ="<select class='select-tipo select-tratamiento-pulpar' name='hallazgo-tratamienito-pulpar'> <option value=''>Elegir</option> <option value='Pulpectomia'>PC</option> <option value='Pulpotomia'>PP</option> </select>"
                $( this ).find('.select-hallazgos').append(selectCaries);
                // $( this ).parent().parent().addClass('callalle123')
              }
            }

            if (nombreHallazgo == listaHallazgo.hallazgoTratamientoPulparMalo) {
              if (edadDentaria == 'nino') {
                var selectCaries ="<select class='select-tipo select-tratamiento-pulpar' name='hallazgo-tratamienito-pulpar'> <option value=''>Elegir</option> <option value='Pulpectomia'>PC</option> <option value='Pulpotomia'>PP</option> </select>"
                $( this ).find('.select-hallazgos').append(selectCaries);
              }
            }

              /*----------Fin Generado por DB--------- */

              if (nombreHallazgo == listaHallazgo.hallazgoImplanteDental) {
                  $( this ).find('.select-hallazgos').append('<span class="hallazgo-implante-dental">IMP</span>');
              }
              if (nombreHallazgo == listaHallazgo.hallazgoImplanteDentalMalo) {
                  $( this ).find('.select-hallazgos').append('<span class="hallazgo-implante-dental-malo">IMP</span>');
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
              if (nombreHallazgo == listaHallazgo.hallazgoCoronaTemporal) {
                  $( this ).find('.select-hallazgos').append('<span class="hallazgo-corona-temporal">CT</span>');
              }
              if (nombreHallazgo == listaHallazgo.hallazgoSellantes) {
                $( this ).find('.select-hallazgos').append('<span class="hallazgo-sellantes">S</span>');
              }
              if (nombreHallazgo == listaHallazgo.hallazgoSellantesMalo) {
                $( this ).find('.select-hallazgos').append('<span class="hallazgo-sellantes-malo">S</span>');
              }

              if ( nombreHallazgo == listaHallazgo.hallazgoTratamientoPulpar) {
                // var edadGrupo = $( this ).parents('.box-options').parent().data('edad');
                // console.log(edadGrupo,'adulto bueno');
                if ( edadDentaria == 'adulto') {
                  $( this ).find('.select-hallazgos').append('<span class="hallazgo-tratamiento-pulpar">TC</span>');
                } else {
                  console.log('es niño');
                }
              }

              if (nombreHallazgo == listaHallazgo.hallazgoTratamientoPulparMalo) {
                // var edadGrupo = $( this ).parents('.box-options').parent().data('edad');
                // console.log(edadGrupo,'adulto malo');
                if ( edadDentaria == 'adulto') {
                  $( this ).find('.select-hallazgos').append('<span class="hallazgo-tratamiento-pulpar-malo">TC</span>');
                } else {
                  console.log('es niño malo');
                }
              }

          }

      });

      function eliminar() {
        var enlaceEliminar = $('<a href="#"></a>');
        enlaceEliminar.append('Eliminar');
        lista.append(enlaceEliminar);
      }

      function mostrar(idGlobal, posicionGlobal, siglaGlobal, tipoGlobal, nombreGlobal, codEvento = "") {
        lista = $("<li></li>");
        lista.attr("id", idGlobal);
        lista.attr("data-pos", posicionGlobal);
        lista.attr("data-sigla", siglaGlobal);
        lista.attr("data-hallazgo", tipoGlobal);
        lista.attr("data-evento", codEvento);
        var spanNombre = $('<span class="nombre-hallazo"></span> ');
        spanNombre.append(nombreGlobal +' :');
        lista.append(spanNombre);
      }

      var lista = '';
      var codEvento = "";
      mostrar(idDiente, nombrePosition, siglaPosition, tipoHallazgo, nombreHallazgoTexto, codEvento);
      if (tipoHallazgo === listaPintado.tipoPintado3) {
        var nombreSlug = contenidoOdontograma.attr("data-name");
        var idPieza = piezaDiente;
        var piezaPosition = nombrePosition;
        var paramPD = {
          slug: nombreSlug,
          diente: idPieza,
          cara: piezaPosition,
          pos: siglaPosition,
          nompos: piezaPosition,
          nombreHallazgo: nombreHallazgo,
          tipoHallazgo: tipoHallazgo,
        };
        codEvento = dOdont.fngSetAgregarHallazgo(paramPD, paramPD.slug);
        lista.attr("data-evento", codEvento);
        $("#id_odontograma_especificaciones").html(dOdont.getJsonData());
        // mostrarCPOCeo();
        lista.append(` en la cara ${nombrePosition} <span> ${siglaPosition}</span> `);
      } else if (tipoHallazgo === listaPintado.tipoPintado8) {
        // lista.append(`<span> ${tipoEdentulo}</span> `);
        var nombreSlug = contenidoOdontograma.attr("data-name");
        var piezaPosition = nombrePosition;
        var paramPD = {
          slug: nombreSlug,
          diente: piezaDiente,
          cara: piezaPosition,
          nombreHallazgo: nombreHallazgo,
          tipoHallazgo: tipoHallazgo,
        };
        codEvento = dOdont.fngSetAgregarHallazgo(paramPD, paramPD.slug);
        lista.attr("data-evento", codEvento);
        $("#id_odontograma_especificaciones").html(dOdont.getJsonData());
        // mostrarCPOCeo();
      } else if (tipoHallazgo === listaPintado.tipoPintado5 || tipoHallazgo === listaPintado.tipoPintado11) {
        var nombreSlug = contenidoOdontograma.attr("data-name");
        var idPieza = piezaDiente;
        var texto = "";
        var paramPD = {
          slug: nombreSlug,
          diente: idPieza,
          texto: texto,
          nombreHallazgo: nombreHallazgo,
          tipoHallazgo: tipoHallazgo,
        };
        if(paramPD.slug==="hallazgo-remanente-radicular"){
          paramPD.texto = "RR";
        }
        if(paramPD.slug==="hallazgo-corona-temporal"){
          paramPD.texto = "CT";
        }
        codEvento = dOdont.fngSetAgregarHallazgo(paramPD, paramPD.slug);
        lista.attr("data-evento", codEvento);
        $("#id_odontograma_especificaciones").html(dOdont.getJsonData());
        // mostrarCPOCeo();
      }

      lista.append(" en la pieza dental" + '<span> '+ piezaDiente+'</span>');
      eliminar()

      if (tipoHallazgo === listaPintado.tipoPintado3
        || tipoHallazgo === listaPintado.tipoPintado5
        || tipoHallazgo === listaPintado.tipoPintado6
        || tipoHallazgo === listaPintado.tipoPintado7
        || tipoHallazgo === listaPintado.tipoPintado8 ) {
          $(this).parents("svg").addClass("seleccionado");
          $(this).parents("svg").removeClass("pre-seleccionado");
          $(".lista-hallazgo-detallado").append(lista);
      }

      if (tipoHallazgo === listaPintado.tipoPintado11 ) {
          $(this).parents("svg").addClass("seleccionado");
          $(this).parents("svg").removeClass("pre-seleccionado");
          if (edadDentaria == 'adulto') {
             $(".lista-hallazgo-detallado").append(lista);
          }

      }

      //HALLAZGOS PINTADO
      if (tipoHallazgo === listaPintado.tipoPintado9 ) {
          $(this).parents("svg").addClass("seleccionado");
          $(this).parents("svg").removeClass("pre-seleccionado");
          $(".lista-hallazgo-detallado").append(lista);
      }


        $(document).on("change", ".select-tipo", function() {

          var codLesion = $(this).children("option:selected").text();
          var nombreLesion = $(this).children("option:selected").val();

          var idDiente = $(this).parents(".box").attr("data-pieza");
          var idPieza = $(this).parents(".box").attr("data-pieza");
          var idBox = $(this).parents(".box").attr("id");

          var contenidoOdontograma = $(this).parents(".contenido-odontograma");
          var nombreSlug = contenidoOdontograma.attr("data-name");
          var nombreHallazgo = contenidoOdontograma.attr("data-texto");
          var tipoHallazgo = parseInt(contenidoOdontograma.attr("data-tipo"));

          var nomHallazgo = contenidoOdontograma.attr("data-name");

          if (codLesion !== "Elegir" && tipoHallazgo === listaPintado.tipoPintado10)  {
            $(this).parent().append('<span  class='+ nomHallazgo + '>' + nombreLesion  + '</span> ');
          } else if(codLesion !== "Elegir") {
            $(this).parent().append('<span  class='+ nomHallazgo + '>' + codLesion  + '</span> ');
          }

          if (tipoHallazgo === listaPintado.tipoPintado11)  {
            console.log('select elegido en tipo 11');
          }

          // if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoTratamientoPulpar) ) {
          //   alert('pulpar change');
          // }


          function mostrarCaraSelect() {
            lista.append(nombreLesion );
            var spanLesion = $("<span></span>");
            spanLesion.append(' ' +codLesion);
            lista.append(spanLesion);;
          }

          var parteDental = $(this).parents(".box-options").siblings().find(".svg");
          $( parteDental ).each(function( index ) {
              var idParte = this.id;
              if (idBox == idParte) {
                  var piezaPosition = $(this).find(".active-last").attr("data-pos");
                  var siglaPosition = $(this).find(".active-last").attr("data-sigla");

                  var paramPD = {
                    slug: nombreSlug,
                    diente: idPieza,
                    nombreHallazgo: nombreHallazgo,
                    tipoHallazgo: tipoHallazgo,
                  };

                  if (["hallazgo-caries", "hallazgo-defectos-del-esmalte"].includes(paramPD.slug)) {
                    paramPD.cara = piezaPosition;
                    paramPD.pos = siglaPosition;
                    paramPD.nompos = piezaPosition;
                    paramPD.tipo = codLesion;
                    paramPD.nomtipo = nombreLesion;
                  } else if (["hallazgo-restauracion-definitiva",
                    "hallazgo-restauracion-definitiva-malo"].includes(paramPD.slug)) {
                    paramPD.cara = piezaPosition;
                    paramPD.pos = siglaPosition;
                    paramPD.nompos = piezaPosition;
                    paramPD.tipo = codLesion;
                    paramPD.nomtipo = nombreLesion;
                    paramPD.estado = "bueno";
                    if (paramPD.slug === "hallazgo-restauracion-definitiva-malo") {
                      paramPD.slug = "hallazgo-restauracion-definitiva";
                      paramPD.estado = "malo";
                    }
                  } else if (["hallazgo-pieza-dentaria-ausente"].includes(paramPD.slug)) {
                    paramPD.texto = codLesion;
                  } else if (["hallazgo-corona", "hallazgo-corona-malo"].includes(paramPD.slug)) {
                    paramPD.texto = codLesion;
                    paramPD.estado = "bueno";
                    if (paramPD.slug === "hallazgo-corona-malo") {
                      paramPD.slug = "hallazgo-corona";
                      paramPD.estado = "malo";
                    }
                  }

                  var codEvento = dOdont.fngSetAgregarHallazgo(paramPD, paramPD.slug);
                  $("#id_odontograma_especificaciones").html(dOdont.getJsonData());


                  /**Para que los oclusales se pinten de manera independiente se debe cambiar en todas las piezas data atributo data-pos="oclusal* a data-pos="oclusal-3, por números" */
                  /* Luego aqui abajo esta un script para que cambie de nombre de oclusa-# a oclusal solo para que muestre es especificaciones */

                  var posOclusal = $(this).find(".active-last").attr("data-pos").indexOf("-");
                  if (posOclusal > 0) {
                    var piezaPosition = piezaPosition.slice(0,posOclusal);
                  }

                  mostrar(idBox, piezaPosition, codLesion, tipoHallazgo, nombreHallazgo, codEvento);

                  if ( tipoHallazgo === listaPintado.tipoPintado1 || tipoHallazgo === listaPintado.tipoPintado2 ) {
                    mostrarCaraSelect();
                    lista.append(" en la cara "  +  piezaPosition );
                    var spanSigla = $("<span></span>");
                    spanSigla.append(' ' +siglaPosition);
                    lista.append(spanSigla);
                  } else {
                    mostrarCaraSelect();
                  }
                  lista.append(" de la pieza dental" + '<span> '+ idPieza+'</span>');

                   eliminar()

                  $(".lista-hallazgo-detallado").append(lista);

                  if (tipoHallazgo === listaPintado.tipoPintado11 ) {
                      if (codLesion == 'PC') {
                        $(this).parent().addClass("seleccionado");
                        $(this).parent().removeClass("pre-seleccionado");
                      } else {
                        $(this).parent().addClass("seleccionado");
                        $(this).parent().removeClass("pre-seleccionado");
                        $(this).parent().removeClass("active-tratamiento-pulpar-nino active-tratamiento-pulpar-malo-nino")

                        if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoTratamientoPulpar) ) {
                          $(this).parent().addClass("tipo-pulponomia");
                        }
                        if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoTratamientoPulparMalo) ) {
                          $(this).parent().addClass("tipo-pulponomia-malo");
                        }
                    }
                  } else {
                    $(this).addClass("seleccionado");
                    $(this).removeClass("pre-seleccionado");
                  }

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
          idHallazgo = $(this).attr("data-id");

          $(".lista-hallazgos li a").removeClass("active");
          $(this).addClass("active");

          $(".select-tipo").remove();

          var contenedorHallazgo = $(this).parents(".page-odontograma").find(".contenido-odontograma");
          contenedorHallazgo.attr("data-texto", textoHallazgo);
          contenedorHallazgo.attr("data-name", nombreHallazgo);
          contenedorHallazgo.attr("data-tipo", tipoHallazgo);
          contenedorHallazgo.attr("data-id", idHallazgo);

          contenedorHallazgo.removeClass();
          contenedorHallazgo.addClass("contenido-odontograma");
          contenedorHallazgo.addClass(nombreHallazgo);

          contenedorHallazgo.find('.pre-seleccionado .diente').removeClass('active');

          if ( nombreHallazgo == listaHallazgo.hallazgoRestauracionDefinitiva
            || nombreHallazgo == listaHallazgo.hallazgoRestauracionDefinitivaMalo ){
              $(".restaura-estado").addClass("show");
          } else {
              $(".restaura-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoImplanteDental
            || nombreHallazgo == listaHallazgo.hallazgoImplanteDentalMalo ){
              $(".implante-estado").addClass("show");
          } else {
              $(".implante-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoCorona
            || nombreHallazgo == listaHallazgo.hallazgoCoronaMalo ){
              $(".corona-estado").addClass("show");
          } else {
              $(".corona-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoEdentuloTotal ){
            alert("Selecinonar la pieza dentaria inicial");
            $(".svg").addClass("disabledbutton");
            $(".row-dientes .cont-diente:first-child svg").removeClass("disabledbutton");
          } else {
            $(".svg").removeClass("disabledbutton");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoProtesisTotal
            || nombreHallazgo == listaHallazgo.hallazgoProtesisTotalMalo  ){
            alert("Selecinonar la pieza dentaria inicial");
            $(".svg").addClass("disabledbutton");
            $(".row-dientes .cont-diente:first-child svg").removeClass("disabledbutton");
            $(".protesis-estado").addClass("show");
          }  else {
            $(".protesis-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoOrtodonticoRemovible
            || nombreHallazgo == listaHallazgo.hallazgoOrtodonticoRemovibleMalo  ){
            alert("Selecinonar la pieza dentaria inicial");
            $(".svg").addClass("disabledbutton");
            $(".row-dientes .cont-diente:first-child svg").removeClass("disabledbutton");
            $(".ortodontico-estado").addClass("show");
          }  else {
            $(".ortodontico-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoOrtodonticoFijo
            || nombreHallazgo == listaHallazgo.hallazgoOrtodonticoFijoMalo ){
              $(".ortodontico-estado-fijo").addClass("show");
          } else {
              $(".ortodontico-estado-fijo").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoProtesisRemovible
            || nombreHallazgo == listaHallazgo.hallazgoProtesisRemovibleMalo ){
              $(".protesis-removible-estado").addClass("show");
          } else {
              $(".protesis-removible-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoProtesisFija
            || nombreHallazgo == listaHallazgo.hallazgoProtesisFijaMalo ){
              $(".protesis-fija-estado").addClass("show");
          } else {
              $(".protesis-fija-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoSellantes
            || nombreHallazgo == listaHallazgo.hallazgoSellantesMalo ){
              $(".sellantes-estado").addClass("show");
          } else {
              $(".sellantes-estado").removeClass("show");
          }

         if( nombreHallazgo == listaHallazgo.hallazgoFractura
          || nombreHallazgo == listaHallazgo.hallazgoFracturaLineaTop
          || nombreHallazgo == listaHallazgo.hallazgoFracturaDiagonalIzquierda
          || nombreHallazgo == listaHallazgo.hallazgoFracturaDiagonallDerecha
          || nombreHallazgo == listaHallazgo.hallazgoFracturaDiagonalIzquierdaSmall
          || nombreHallazgo == listaHallazgo.hallazgoFracturaDiagonallDerechaSmall
          || nombreHallazgo == listaHallazgo.hallazgoFracturaRayalIzquierda
          || nombreHallazgo == listaHallazgo.hallazgoFracturaRayalDerecha){
              $(".fractura-estado").addClass("show");
          } else {
              $(".fractura-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoSuperficieDesgastada
            || nombreHallazgo == listaHallazgo.hallazgoSuperficieDesgastadaLineaTop
            || nombreHallazgo == listaHallazgo.hallazgoSuperficieDesgastadaLineaSub
            || nombreHallazgo == listaHallazgo.hallazgoSuperficieDesgastadaIzquierda
            || nombreHallazgo == listaHallazgo.hallazgoSuperficieDesgastadaDerecha){
                $(".superficie-desgastada-estado").addClass("show");
            } else {
                $(".superficie-desgastada-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoTratamientoPulpar
            || nombreHallazgo == listaHallazgo.hallazgoTratamientoPulparMalo ){
              $(".tratamiento-pulpar-estado").addClass("show");
          } else {
              $(".tratamiento-pulpar-estado").removeClass("show");
          }

          if( nombreHallazgo == listaHallazgo.hallazgoEspigoMuñon
            || nombreHallazgo == listaHallazgo.hallazgoEspigoMuñonIzquierda
            || nombreHallazgo == listaHallazgo.hallazgoEspigoMuñonDerecha
            || nombreHallazgo == listaHallazgo.hallazgoEspigoMuñonMalo
            || nombreHallazgo == listaHallazgo.hallazgoEspigoMuñonIzquierdaMalo
            || nombreHallazgo == listaHallazgo.hallazgoEspigoMuñonDerechaMalo ){
                $(".espigo-muñon-estado").addClass("show");
            } else {
                $(".espigo-muñon-estado").removeClass("show");
            }

      });

      $( ".restaura-estado .bueno" ).click(function(e) {
          $("#hallazgo-restauracion-definitiva").trigger("click")
      });

      $( ".restaura-estado .malo" ).click(function(e) {
          $("#hallazgo-restauracion-definitiva").toggleClass('active');
      });

      $( ".implante-estado .bueno" ).click(function(e) {
          $("#hallazgo-implante-dental").trigger("click")
      });

      $( ".implante-estado .malo" ).click(function(e) {
          $("#hallazgo-implante-dental").toggleClass('active');
      });

      $( ".corona-estado .bueno" ).click(function(e) {
          $("#hallazgo-corona").trigger("click")
      });

      $( ".corona-estado .malo" ).click(function(e) {
          $("#hallazgo-corona").toggleClass('active');
      });

      $( ".protesis-estado .bueno" ).click(function(e) {
          $("#hallazgo-protesis-total").trigger("click")
      });

      $( ".protesis-estado .malo" ).click(function(e) {
          $("#hallazgo-protesis-total-malo").toggleClass('active');
      });

      $( ".ortodontico-estado-fijo .bueno" ).click(function(e) {
        $("#hallazgo-ortodontico-fijo").trigger("click")
      });

      $( ".ortodontico-estado-fijo .malo" ).click(function(e) {
          $("#hallazgo-ortodontico-fijo-malo").toggleClass('active');
      });

      $( ".protesis-removible-estado .bueno" ).click(function(e) {
        $("#hallazgo-protesis-removible").trigger("click")
      });

      $( ".protesis-removible-estado .malo" ).click(function(e) {
          $("#hallazgo-ortodontico-fijo-malo").toggleClass('active');
      });

      $( ".fractura-estado .fractura-linea-top" ).click(function(e) {
        $("#hallazgo-fractura").trigger("click")
      });

      $( ".fractura-estado .malo" ).click(function(e) {
          $("#hallazgo-fractura-malo").toggleClass('active');
      });

      $( ".protesis-fija-estado .bueno" ).click(function(e) {
        $("#hallazgo-protesis-fija").trigger("click")
      });

      $( ".protesis-fija-estado .malo" ).click(function(e) {
          $("#hallazgo-protesis-fija-malo").toggleClass('active');
      });

      $( ".sellantes-estado .bueno" ).click(function(e) {
        $("#hallazgo-sellantes").trigger("click")
      });

      $( ".sellantes-estado .malo" ).click(function(e) {
          $("#hallazgo-sellantes-malo").toggleClass('active');
      });

      $( ".superficie-desgastada-estado  .superficie-desgastada-linea-top" ).click(function(e) {
        $("#hallazgo-superficie-desgastada").trigger("click");
      });

      $( ".tratamiento-pulpar-estado .bueno" ).click(function(e) {
        $("#hallazgo-tratamiento-pulpar").trigger("click")
      });

      $( ".espigo-muñon-estado .espigo-muñon-top" ).click(function(e) {
        $("#hallazgo-espigo-muñon").trigger("click")
      });


      $("#hallazgo-caries").click();

  },
  eliminarHallazgos : function() {

      $(document).on("click",".lista-hallazgo-detallado li a",function(e){
        //------ evento eliminar "nueva estructura" -----//
        var idEvento = $(this).parents("li").data("evento");
        dOdont.fngQuitarHallazgoCodEvento(idEvento.toString());
        $("#id_odontograma_especificaciones").html(dOdont.getJsonData());
        //------ ----------------------------------------//
         countClickRemovible = 0

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
                      var caraDientes =  $(this).attr("data-pos");
                      var caraSigla =  $(this).attr("data-sigla");
                      if (caraLista == caraDientes) {
                          $(this).removeClass("active");
                          $(this).parents(".puente2-removible, .puente2-removible-malo, .puente2-fijo ,.puente2-fijo-malo,  .puente2, .puente2-malo").find("svg").siblings().remove();
                          $(this).removeClass("hallazgo-caries hallazgo-defectos-del-esmalte hallazgo-restauracion-definitiva hallazgo-restauracion-definitiva-malo hallazgo-restauracion-temporal hallazgo-protesis-removible");
                          $(this).parents(".svg").removeClass("seleccionado active-erupcion active-hallazgo-pieza-dentaria-en-erupcion active-corona active-corona-malo active-hallazgo-corona-temporal active-fractura active-fractura-malo active-remanente-radicular active-hallazgo-fusion  active-hallazgo-corona-temporal active-hallazgo-corona  active-hallazgo-corona-malo active-hallazgo-pieza-dentaria-ausente");
                          $(this).parents(".svg").parent().removeClass("active-geminacion active-transposicion active-fusion  active-clavija active-edentulo-total active-supernumeraria active-protesis-total active-protesis-total-malo active-ortodontico-removible active-ortodontico-removible-malo ");
                          $(this).parents(".svg").parent().removeClass("  seleccionado puente1 puente2 puente1-malo puente2-malo puente1-fijo puente2-fijo puente1-fijo-malo  puente1 puente2 puente1-removible puente1-removible-malo puente2-removible puente2-removible-malo active-fractura-linea-top active-fractura-linea-sub active-fractura-diagonal-izquierda active-fractura-diagonal-derecha active-fractura-diagonal-izquierda-small active-fractura-diagonal-derecha-small active-fractura-raya-izquierda active-fractura-raya-derecha");
                          $(this).parents(".svg").find('[data-pos="oclusal"]').removeClass("disabledbutton");
                          $(this).parents(".diastema").find("img").remove();
                          $(this).parents(".flecha-extruida, .flecha-intruida, .giroversion").find("img").remove();
                          $(this).parents(".active-espigo-muñon").find("div").remove();
                          $(this).parents(".active-espigo-muñon-malo").find("div").remove();
                          $(this).parents(".active-espigo-muñon-izquierda").find("div").remove();
                          $(this).parents(".active-espigo-muñon-derecha").find("div").remove();
                          $(this).parents(".active-espigo-muñon-izquierda-malo").find("div").remove();
                          $(this).parents(".active-espigo-muñon-derecha-malo").find("div").remove();
                          $(this).parents(".svg").parent().removeClass("active-espigo-muñon active-espigo-muñon-malo tipo-pulponomia tipo-pulponomia-malo active-tratamiento-pulpar-nino active-tratamiento-pulpar-nino-malo active-tratamiento-pulpar active-tratamiento-pulpar-malo active-superficie-desgastada-linea-top active-hallazgo-superficie-desgastada-izquierda   active-hallazgo-superficie-desgastada-derecha active-superficie-desgastada-linea-sub active-sellantes active-sellantes-malo selecflecha-extruida flecha-intruida giroversion diastema");
                          $(this).parents(".svg").removeClass("active-hallazgo-espigo-muñon active-hallazgo-espigo-muñon-malo active-extruida active-intruida active-hallazgo-giroversion active-diastema active-hallazgo-implante-dental active-hallazgo-implante-dental-malo active-hallazgo-transposicion active-hallazgo-fractura active-hallazgo-fractura-linea-sub active-hallazgo-fractura-diagonal-izquierda active-hallazgo-fractura-diagonal-derecha active-hallazgo-fractura-diagonal-izquierda-small active-hallazgo-fractura-diagonal-derecha-small active-hallazgo-fractura-raya-izquierda active-hallazgo-fractura-raya-derecha active-hallazgo-protesis-removible active-hallazgo-protesis-removible-malo active-hallazgo-ortodontico-fijo active-hallazgo-ortodontico-fijo-malo disabled-range");
                          $("svg").removeClass("disabled-range");
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

                  if ( tipoHallazgo == listaPintado.tipoPintado5 || tipoHallazgo == listaPintado.tipoPintado10 || tipoHallazgo == listaPintado.tipoPintado11  ) {
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
  mostrarOdontrograma: function(){
    // var data ='{"eventos":{"E20200102224435953":{"hallazgo":"hallazgo-caries","slug":"hallazgo-caries","tipoHallazgo":1,"evento":"E20200102224435953","diente":"4.8","cara":"mesial","pos":"CM","nompos":"mesial","tipo":"MB","nomtipo":"Mancha Blanca"},"E20200102224444046":{"hallazgo":"hallazgo-defectos-del-esmalte","slug":"hallazgo-defectos-del-esmalte","tipoHallazgo":1,"evento":"E20200102224444046","diente":"4.7","cara":"vestibular","pos":"VE","nompos":"vestibular","tipo":"HP","nomtipo":"Hipoplasia"},"E20200102224448478":{"hallazgo":"hallazgo-restauracion-definitiva","slug":"hallazgo-restauracion-definitiva","tipoHallazgo":2,"evento":"E20200102224448478","diente":"4.6","cara":"lingual","pos":"LN","nompos":"lingual","tipo":"AM","nomtipo":"Amalgama Dental","estado":"bueno"},"E20200102224452897":{"hallazgo":"hallazgo-restauracion-temporal","slug":"hallazgo-restauracion-temporal","tipoHallazgo":3,"evento":"E20200102224452897","diente":"4.5","cara":"lingual","pos":"LN","nompos":"lingual"},"E20200102224515614":{"hallazgo":"hallazgo-remanente-radicular","slug":"hallazgo-remanente-radicular","tipoHallazgo":5,"evento":"E20200102224515614","diente":"4.4","texto":"RR"},"E20200102224525708":{"hallazgo":"hallazgo-pieza-dentaria-ausente","slug":"hallazgo-pieza-dentaria-ausente","tipoHallazgo":4,"evento":"E20200102224525708","diente":"4.3","texto":"DEX"},"E20200102224535184":{"hallazgo":"hallazgo-corona","slug":"hallazgo-corona","tipoHallazgo":4,"evento":"E20200102224535184","diente":"4.2","estado":"bueno","texto":"CM"},"E20200102224537866":{"hallazgo":"hallazgo-corona-temporal","slug":"hallazgo-corona-temporal","tipoHallazgo":5,"evento":"E20200102224537866","diente":"4.1","texto":"CT"}},"datos":{"individual":{"4.8":{"hallazgo-caries":{"mesial":{"evento":"E20200102224435953","nombreHallazgo":"Lesión de caries dental","slug":"hallazgo-caries","pos":"CM","nompos":"mesial","tipo":"MB","nomtipo":"Mancha Blanca"}}},"4.7":{"hallazgo-defectos-del-esmalte":{"vestibular":{"evento":"E20200102224444046","nombreHallazgo":"Defectos de desarrollo del esmalte","slug":"hallazgo-defectos-del-esmalte","pos":"VE","nompos":"vestibular","tipo":"HP","nomtipo":"Hipoplasia"}}},"4.6":{"hallazgo-restauracion-definitiva":{"lingual":{"evento":"E20200102224448478","nombreHallazgo":"Restauracion definitiva","slug":"hallazgo-restauracion-definitiva","pos":"LN","nompos":"lingual","tipo":"AM","nomtipo":"Amalgama Dental","estado":"bueno"}}},"4.5":{"hallazgo-restauracion-temporal":{"lingual":{"evento":"E20200102224452897","nombreHallazgo":"hallazgo-restauracion-temporal","slug":"hallazgo-restauracion-temporal","pos":"LN","nompos":"lingual"}}},"4.4":{"hallazgo-remanente-radicular":{"evento":"E20200102224515614","nombreHallazgo":"hallazgo-remanente-radicular","slug":"hallazgo-remanente-radicular","texto":"RR"}},"4.3":{"hallazgo-pieza-dentaria-ausente":{"evento":"E20200102224525708","nombreHallazgo":"Pieza dentaria ausente","slug":"hallazgo-pieza-dentaria-ausente","texto":"DEX"}},"4.2":{"hallazgo-corona":{"evento":"E20200102224535184","nombreHallazgo":"Corona","slug":"hallazgo-corona","estado":"bueno","texto":"CM"}},"4.1":{"hallazgo-corona-temporal":{"evento":"E20200102224537866","nombreHallazgo":"hallazgo-corona-temporal","slug":"hallazgo-corona-temporal","texto":"CT"}}},"grupal":{}},"datosVersion":{"version":"v1.0"}}';

    var data = '{"eventos":{"E20200110143552512":{"hallazgo":"hallazgo-caries","slug":"hallazgo-caries","tipoHallazgo":1,"evento":"E20200110143552512","diente":"4.8","cara":"lingual","pos":"LN","nompos":"lingual","tipo":"MB","nomtipo":"Mancha Blanca"},"E20200110143554698":{"hallazgo":"hallazgo-caries","slug":"hallazgo-caries","tipoHallazgo":1,"evento":"E20200110143554698","diente":"4.8","cara":"oclusal-3","pos":"OC","nompos":"oclusal-3","tipo":"CE","nomtipo":"Caries del esmalte"},"E20200110143558977":{"hallazgo":"hallazgo-defectos-del-esmalte","slug":"hallazgo-defectos-del-esmalte","tipoHallazgo":1,"evento":"E20200110143558977","diente":"4.7","cara":"vestibular","pos":"VE","nompos":"vestibular","tipo":"HM","nomtipo":"Hipo Mineralización"},"E20200110143600754":{"hallazgo":"hallazgo-defectos-del-esmalte","slug":"hallazgo-defectos-del-esmalte","tipoHallazgo":1,"evento":"E20200110143600754","diente":"4.7","cara":"oclusal-1","pos":"OC","nompos":"oclusal-1","tipo":"HM","nomtipo":"Hipo Mineralización"},"E20200110143604740":{"hallazgo":"hallazgo-restauracion-definitiva","slug":"hallazgo-restauracion-definitiva","tipoHallazgo":2,"evento":"E20200110143604740","diente":"4.6","cara":"distal","pos":"CD","nompos":"distal","tipo":"R","nomtipo":"Resina","estado":"bueno"},"E20200110143607014":{"hallazgo":"hallazgo-restauracion-definitiva","slug":"hallazgo-restauracion-definitiva","tipoHallazgo":2,"evento":"E20200110143607014","diente":"4.6","cara":"oclusal-4","pos":"OC","nompos":"oclusal-4","tipo":"R","nomtipo":"Resina","estado":"bueno"},"E20200110143610102":{"hallazgo":"hallazgo-restauracion-temporal","slug":"hallazgo-restauracion-temporal","tipoHallazgo":3,"evento":"E20200110143610102","diente":"4.5","cara":"lingual","pos":"LN","nompos":"lingual"},"E20200110143611569":{"hallazgo":"hallazgo-restauracion-temporal","slug":"hallazgo-restauracion-temporal","tipoHallazgo":3,"evento":"E20200110143611569","diente":"4.5","cara":"oclusal","pos":"OC","nompos":"oclusal"}},"datos":{"individual":{"4.8":{"hallazgo-caries":{"lingual":{"evento":"E20200110143552512","nombreHallazgo":"Lesión de caries dental","slug":"hallazgo-caries","pos":"LN","nompos":"lingual","tipo":"MB","nomtipo":"Mancha Blanca"},"oclusal-3":{"evento":"E20200110143554698","nombreHallazgo":"Lesión de caries dental","slug":"hallazgo-caries","pos":"OC","nompos":"oclusal-3","tipo":"CE","nomtipo":"Caries del esmalte"}}},"4.7":{"hallazgo-defectos-del-esmalte":{"vestibular":{"evento":"E20200110143558977","nombreHallazgo":"Defectos de desarrollo del esmalte","slug":"hallazgo-defectos-del-esmalte","pos":"VE","nompos":"vestibular","tipo":"HM","nomtipo":"Hipo Mineralización"},"oclusal-1":{"evento":"E20200110143600754","nombreHallazgo":"Defectos de desarrollo del esmalte","slug":"hallazgo-defectos-del-esmalte","pos":"OC","nompos":"oclusal-1","tipo":"HM","nomtipo":"Hipo Mineralización"}}},"4.6":{"hallazgo-restauracion-definitiva":{"distal":{"evento":"E20200110143604740","nombreHallazgo":"Restauracion definitiva","slug":"hallazgo-restauracion-definitiva","pos":"CD","nompos":"distal","tipo":"R","nomtipo":"Resina","estado":"bueno"},"oclusal-4":{"evento":"E20200110143607014","nombreHallazgo":"Restauracion definitiva","slug":"hallazgo-restauracion-definitiva","pos":"OC","nompos":"oclusal-4","tipo":"R","nomtipo":"Resina","estado":"bueno"}}},"4.5":{"hallazgo-restauracion-temporal":{"lingual":{"evento":"E20200110143610102","nombreHallazgo":"hallazgo-restauracion-temporal","slug":"hallazgo-restauracion-temporal","pos":"LN","nompos":"lingual"},"oclusal":{"evento":"E20200110143611569","nombreHallazgo":"hallazgo-restauracion-temporal","slug":"hallazgo-restauracion-temporal","pos":"OC","nompos":"oclusal"}}}},"grupal":{}},"datosVersion":{"version":"v1.0"}}'

    // var data = $("#id_odontograma_especificaciones").val();
    var grupal = {}, ev = "", hl = "";
    dOdont.setJsonData(data);
    if ((typeof dOdont["data"] === "object") &&
      (typeof dOdont["data"]["datos"] === "object") &&
      (typeof dOdont["data"]["datos"]["individual"] === "object")) {
      data = Object.assign({}, dOdont.data.datos.individual);
    } else {
      data = Object.assign({});
    }
    if (typeof dOdont.data.datos.grupal === "object") {
      grupal = Object.assign({}, dOdont.data.datos.grupal);
    }
    $(".cont-diente .svg").each(function (index, value) {
      var idpieza = $(value).attr("data-pieza");
      for (item in data) {
        if (idpieza == item) {
          $(value).addClass("seleccionado");
          var hallazgo = data[item];
          if (hallazgo) {
            for (itemHallaz in hallazgo) {
              var dataHallazgo = hallazgo[itemHallaz];
              var auxSlugPDHallazgo = itemHallaz;
              if ((typeof dataHallazgo.estado === "string") &&
                (dataHallazgo.estado === "malo")) {
                auxSlugPDHallazgo = dataHallazgo.slug + "-malo";
              }
              $(value).addClass(`active-${auxSlugPDHallazgo}`);
              if (dataHallazgo) {
                var diente = $(value).find(".diente");
                if (["hallazgo-pieza-dentaria-ausente", "hallazgo-remanente-radicular", "hallazgo-corona",
                  "hallazgo-corona-temporal", "hallazgo-posicion-dentaria", "hallazgo-movilidad-patologica",
                  "hallazgo-fosas-fisuras-profundas", "hallazgo-piesa-dentaria-ectopica",
                  "hallazgo-macrodoncia", "hallazgo-microdoncia",
                  "hallazgo-impactacion"].includes(itemHallaz)) {
                  $(".box-options").find("#box-" + idpieza.replace(".", "")).find(".select-hallazgos").append(
                    `<span class="${auxSlugPDHallazgo}">${dataHallazgo.texto}</span>`
                  );
                  $(".lista-hallazgo-detallado").append(
                    `<li>
                      <span class="nombre-hallazo">${dataHallazgo.nombreHallazgo}</span>:
                      ${dataHallazgo.texto}, en la pieza dental <span>${idpieza} </span>
                    </li>`
                  );
                }
                for (itemDataHallaz in dataHallazgo) {

                  var auxSlugHallazgo = itemHallaz;
                  if ((typeof dataHallazgo[itemDataHallaz].estado === "string") &&
                    (dataHallazgo[itemDataHallaz].estado === "malo")) {
                    auxSlugHallazgo = itemHallaz + "-malo";
                  }

                  $(value).find('[data-pos="' + itemDataHallaz + '"]').addClass("active").addClass(auxSlugHallazgo);
                  if ((typeof dataHallazgo[itemDataHallaz] === "object") &&
                    (typeof dataHallazgo[itemDataHallaz]['tipo'] !== "undefined")) {
                    $(".box-options").find("#box-" + idpieza.replace(".", "")).find(".select-hallazgos").append(
                      `<span class="${auxSlugHallazgo}">${dataHallazgo[itemDataHallaz]["tipo"]}</span>`
                    );
                  }

                  var itemDataHallazOclusal = itemDataHallaz;
                  var posOclusal = itemDataHallaz.indexOf("-");
                  if (posOclusal > 0) {
                      var itemDataHallazOclusal = itemDataHallaz.slice(0,posOclusal);
                    }

                  if (["hallazgo-caries", "hallazgo-defectos-del-esmalte", "hallazgo-restauracion-definitiva"].includes(itemHallaz)) {
                    $(".lista-hallazgo-detallado").append(
                      `<li>
                      <span class="nombre-hallazo">${dataHallazgo[itemDataHallaz].nombreHallazgo}</span>:
                      ${dataHallazgo[itemDataHallaz]["nomtipo"]} <span>${dataHallazgo[itemDataHallaz]["tipo"]}</span>,
                      en la cara <span>${itemDataHallazOclusal} ${dataHallazgo[itemDataHallaz]["pos"]} </span>,
                      de la pieza dental <span>${idpieza} </span>
                    </li>`
                    );
                  } else if (["hallazgo-restauracion-temporal"].includes(itemHallaz)) {
                    $(".lista-hallazgo-detallado").append(
                      `<li>
                      <span class="nombre-hallazo">${dataHallazgo[itemDataHallaz].nombreHallazgo}</span>:
                      en la cara <span>${itemDataHallazOclusal} ${dataHallazgo[itemDataHallaz]["pos"]} </span>,
                      de la pieza dental <span>${idpieza} </span>
                    </li>`
                    );
                  }
                }
              }
            }
          }
        }
      }
      for (hallazgoFor in grupal) {
        if (hallazgoFor === "hallazgo-edentulo-total") {
          for (eventoFor in grupal[hallazgoFor]) {
            if (grupal[hallazgoFor][eventoFor].diente === idpieza) {
              $(value).parent().addClass("active-" + grupal[hallazgoFor][eventoFor].slug);
              $(".lista-hallazgo-detallado").append(
                `<li>
                <span class="nombre-hallazo">${grupal[hallazgoFor][eventoFor].nombreHallazgo}</span>:
                en la pieza dental <span>${idpieza} </span>
              </li>`
              );
            }
          }
        }
      }
    });

  //  $('.cont-diente .svg').each(function(index, value){
  //    var idpieza = $(value).attr('data-pieza');  //4.8
  //      for (item in data) {
  //        if (idpieza == item) {
  //          console.log(idpieza,'idpieza'); //4.8
  //          console.log(item,'item'); // 4.8
  //          $(value).addClass('seleccionado'); //addClass en .svg
  //          console.log(data[item],'data [item]'); // hallazgo-caries: vestibular: {tipo: "CD", nomtipo: "Caries de la dentina", pos: "VE", nompos: "vestibular", evento: "20191219155147888", …}
  //          var hallazgo = data[item];

  //          if (hallazgo) {
  //            for (itemHallaz in hallazgo) {
  //              console.log(itemHallaz, 'itemHallaz'); //hallazgo-caries
  //              var dataHallazgo = hallazgo[itemHallaz]; //vestibular: {tipo: "CD", nomtipo: "Caries de la dentina", pos: "VE", nompos: "vestibular", evento: "20191219155147888", …}
  //              console.log(dataHallazgo,'dataHallazgo');
  //              $(value).addClass('active-'+itemHallaz);

  //              if (dataHallazgo) {
  //                console.log(dataHallazgo,'dataHallazgo-aa');
  //                var diente = $(value).find('.diente');
  //                for (itemDataHallaz in dataHallazgo) {
  //                  console.log('item Hallazgo', itemDataHallaz); //vestibular
  //                  console.log('data Hallazgo', dataHallazgo);  //vestibular: {tipo: "CD", nomtipo: "Caries de la dentina", pos: "VE", nompos: "vestibular", evento: "20191219155147888", …}
  //                  console.log(dataHallazgo[itemDataHallaz],'dataHallazgo[itemDataHallaz]');  //{tipo: "CE", nomtipo: "Caries del esmalte", pos: "LN", nompos: "lingual", evento: "20191219155146048", …}
  //                  console.log(dataHallazgo[itemDataHallaz]['nombreHallazgo'],'nombre Hallazgo texto ');
  //                  $(value).find('[data-pos="'+itemDataHallaz+'"]').addClass('active').addClass(itemHallaz);
  //                  $('.box-options').find("#box-"+idpieza.replace('.', '')).find('.select-hallazgos').append(`<span class="${itemHallaz}">${dataHallazgo[itemDataHallaz]['tipo']}</span> </div>`);
  //                  $('.lista-hallazgo-detallado').append(`<li> <span class="nombre-hallazo">${dataHallazgo[itemDataHallaz]['nombreHallazgo']}</span>: ${dataHallazgo[itemDataHallaz]['nomtipo']} <span>${dataHallazgo[itemDataHallaz]['tipo']}</span>, en la cara <span>${itemDataHallaz} ${dataHallazgo[itemDataHallaz]['pos']} </span>, de la pieza dental <span>${idpieza} </span></li>`);
  //                }
  //              }

  //            }
  //          }
  //        }

  //      }
  //  });


  },
  examenPeriodontal:function() {
    var edad = 20
    if (edad >= 12 && edad <= 17) {
      $(".panel-examenes-periodontal ").addClass("show");
      $(".contenido-examen-periodontal").addClass("examen-adulto");
    } else if (edad > 17) {
      $(".panel-examenes-periodontal ").addClass("show");
    }
  },
  onlyNumbers : function() {
      $('.only-numbers').on('keypress', function(event) {
          var numbers = /[0-4]/g;
          var key = String.fromCharCode(event.which);
          if ($.inArray(event.keyCode) >= 0 || numbers.test(key)) {
              return true;
          }
          return false;
      });
  },
  protesisRemovible : function() {
    var arregloProtesis = [];
    var arregloProtesisMalo = [];

    $(".cont-diente .diente").on("click", function(e){
      var contenidoOdontograma = $(this).parents(".contenido-odontograma");
      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoProtesisRemovible) ) {
        countClickRemovible++;

        if(countClickRemovible === 1){
          $(this).parents("svg").parent().toggleClass("puente1-removible");
          var posicionActual = $(this).parents(".svg").attr("data-count");
          arregloProtesis.push(posicionActual);

          $('.contenido-polygon').addClass("row-active");
          $(this).parents(".contenido-polygon").removeClass("row-active");

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;
            if (posicionActual > countIndex) {
              $(this).addClass("disabled");
            }
          });
        } else if (countClickRemovible === 2) {
          countClickRemovible = 0;
          var posicionFinal = $(this).parents(".svg").attr("data-count");
          arregloProtesis.push(posicionFinal);

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          var sumarAnchoRango = 0
          var sumarMarginRango = 0

          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;
            if (countIndex >= arregloProtesis[0] && countIndex <= arregloProtesis[1])  {
              $(this).addClass("disabled-range");
              var anchoDientes = $(this).outerWidth();
              var marginRight = 2;
              sumarAnchoRango += Number(anchoDientes);
              sumarMarginRango += Number(marginRight);
            }
          });

          var rangoTotal = sumarAnchoRango + sumarMarginRango;

          $(this).parents("svg").parent().append('<div style="z-index: 9999; height: 3px; width:' + rangoTotal + 'px;"  class="puente-protesis-removible"></div>');
          $(this).parents("svg").parent().children().last().css({
              "position": "absolute",
              "right": "0"
          });

          arregloProtesis = []

          $(".svg").removeClass("disabled");
          $('.contenido-polygon').removeClass("row-active");
          $(this).parents("svg").parent().toggleClass("puente2-removible");
          $(this).parents("svg").parent().addClass("seleccionado");
          $(this).parents("svg").parent().parent().find(".puente1-removible").addClass("seleccionado");
        }
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoProtesisRemovibleMalo) ) {
          countClickRemovibleMalo++;

          if(countClickRemovibleMalo === 1 ){
            $(this).parents("svg").parent().toggleClass("puente1-removible-malo");
            var posicionActual = $(this).parents(".svg").attr("data-count");
            arregloProtesisMalo.push(posicionActual);

            $('.contenido-polygon').addClass("row-active");
            $(this).parents(".contenido-polygon").removeClass("row-active");

            var listarPiezaDentaria = $(".contenido-polygon .svg");
            $( listarPiezaDentaria ).each(function( index ) {
              var countIndex = index+1;
              if (posicionActual > countIndex) {
                $(this).addClass("disabled");
              }
            });
          } else if ( countClickRemovibleMalo === 2 ) {
            countClickRemovibleMalo = 0;
            var posicionFinal = $(this).parents(".svg").attr("data-count");
            arregloProtesisMalo.push(posicionFinal);

            var listarPiezaDentaria = $(".contenido-polygon .svg");
            var sumarAnchoRango = 0
            var sumarMarginRango = 0

            $( listarPiezaDentaria ).each(function( index ) {
              var countIndex = index+1;
              if (countIndex >= arregloProtesisMalo[0] && countIndex <= arregloProtesisMalo[1])  {
                $(this).addClass("disabled-range");
                var anchoDientes = $(this).outerWidth();
                var marginRight = 2;
                sumarAnchoRango += Number(anchoDientes);
                sumarMarginRango += Number(marginRight);
              }
            });

            var rangoTotal = sumarAnchoRango + sumarMarginRango;

            $(this).parents("svg").parent().append('<div style="z-index: 9999; height: 3px; width:' + rangoTotal + 'px;"  class="puente-protesis-removible-malo"></div>');
            $(this).parents("svg").parent().children().last().css({
                "position": "absolute",
                "right": "0"
            });;

            arregloProtesisMalo = []

            $(".svg").removeClass("disabled");
            $('.contenido-polygon').removeClass("row-active");
            $(this).parents("svg").parent().toggleClass("puente2-removible-malo");
            $(this).parents("svg").parent().addClass("seleccionado");
            $(this).parents("svg").parent().parent().find(".puente1-removible-malo").addClass("seleccionado");
          }
      }
    });
  },
  ortodonticoFijo : function() {
    var arregloOrtodonticoFijo = [];
    var arregloOrtodonticoFijoMalo = [];

    $(".cont-diente .diente").on("click", function(e){
      var contenidoOdontograma = $(this).parents(".contenido-odontograma");

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoOrtodonticoFijo) ) {
        countClickOrtodonticoFijo++;

        if(countClickOrtodonticoFijo === 1){
          $(this).parents("svg").parent().toggleClass("puente1-fijo");
          var posicionActual = $(this).parents(".svg").attr("data-count");
          arregloOrtodonticoFijo.push(posicionActual);

          $('.contenido-polygon').addClass("row-active");
          $(this).parents(".contenido-polygon").removeClass("row-active");

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;

            if (posicionActual > countIndex) {
              $(this).addClass("disabled");
            }
          });

        } else if (countClickOrtodonticoFijo === 2) {
          countClickOrtodonticoFijo = 0;
          var posicionFinal = $(this).parents(".svg").attr("data-count");
          arregloOrtodonticoFijo.push(posicionFinal);

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          var sumarAnchoRango = 0
          var sumarMarginRango = 0

          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;

            if (countIndex >= arregloOrtodonticoFijo[0] && countIndex <= arregloOrtodonticoFijo[1])  {
              $(this).addClass("disabled-range");
              var anchoDientes = $(this).outerWidth();
              var marginRight = 2;
              sumarAnchoRango += Number(anchoDientes);
              sumarMarginRango += Number(marginRight);
            }
          });

          var rangoTotal = sumarAnchoRango + sumarMarginRango;

          $(this).parents("svg").parent().append('<div style="z-index: 9999; height: 5px; width:' + rangoTotal + 'px;"  class="puente-ortodontico-fijo"></div>');
          $(this).parents("svg").parent().children().last().css({
              "position": "absolute",
              "right": "0"
          });
          arregloOrtodonticoFijo = []

          $(".svg").removeClass("disabled");
          $('.contenido-polygon').removeClass("row-active");
          $(this).parents("svg").parent().toggleClass("puente2-fijo");
          $(this).parents("svg").parent().addClass("seleccionado");
          $(this).parents("svg").parent().parent().find(".puente1-fijo").addClass("seleccionado");

        }
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoOrtodonticoFijoMalo) ) {
        countClickOrtodonticoFijoMalo++;

        if(countClickOrtodonticoFijoMalo === 1){
          $(this).parents("svg").parent().toggleClass("puente1-fijo-malo");
          var posicionActual = $(this).parents(".svg").attr("data-count");
          arregloOrtodonticoFijoMalo.push(posicionActual);

          $('.contenido-polygon').addClass("row-active");
          $(this).parents(".contenido-polygon").removeClass("row-active");

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;
            if (posicionActual > countIndex) {
              $(this).addClass("disabled");
            }
          });

        } else if (countClickOrtodonticoFijoMalo === 2) {
          countClickOrtodonticoFijoMalo = 0;
          var posicionFinal = $(this).parents(".svg").attr("data-count");
          arregloOrtodonticoFijoMalo.push(posicionFinal);

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          var sumarAnchoRango = 0
          var sumarMarginRango = 0

          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;
            if (countIndex >= arregloOrtodonticoFijoMalo[0] && countIndex <= arregloOrtodonticoFijoMalo[1])  {
              $(this).addClass("disabled-range");
              var anchoDientes = $(this).outerWidth();
              var marginRight = 2;
              sumarAnchoRango += Number(anchoDientes);
              sumarMarginRango += Number(marginRight);
            }
          });

          var rangoTotal = sumarAnchoRango + sumarMarginRango;

          $(this).parents("svg").parent().append('<div style="z-index: 9999; height: 5px; width:' + rangoTotal + 'px;"  class="puente-ortodontico-fijo-malo"></div>');
          $(this).parents("svg").parent().children().last().css({
              "position": "absolute",
              "right": "0"
          });

          arregloOrtodonticoFijoMalo = []
          $(".svg").removeClass("disabled");
          $('.contenido-polygon').removeClass("row-active");
          $(this).parents("svg").parent().toggleClass("puente2-fijo-malo");
          $(this).parents("svg").parent().addClass("seleccionado");
          $(this).parents("svg").parent().parent().find(".puente1-fijo-malo").addClass("seleccionado");

        }
      }

    });
  },
  protesisFija: function() {
    var arregloProtesisFija = [];
    var arregloProtesisFijaMalo = [];

    $(".cont-diente .diente").on("click", function(e){
      var contenidoOdontograma = $(this).parents(".contenido-odontograma");

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoProtesisFija) ) {
        countClickProtesisFija++;

        if(countClickProtesisFija === 1){
          $(this).parents("svg").parent().toggleClass("puente1");
          var posicionActual = $(this).parents(".svg").attr("data-count");
          arregloProtesisFija.push(posicionActual);

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;
            if (posicionActual > countIndex) {
              $(this).addClass("disabled");
            }
          });

        } else if (countClickProtesisFija === 2) {
          countClickProtesisFija = 0;
          var posicionFinal = $(this).parents(".svg").attr("data-count");
          arregloProtesisFija.push(posicionFinal);

          var diferencia = arregloProtesisFija[1] - arregloProtesisFija[0] + 1;

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          var sumarAnchoRango = 0
          var sumarMarginRango = 0

          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;
            if (countIndex >= arregloProtesisFija[0] && countIndex <= arregloProtesisFija[1])  {
              $(this).addClass("disabled-range");
              var anchoDientes = $(this).outerWidth();
              var marginRight = 2;
              sumarAnchoRango += Number(anchoDientes);
              sumarMarginRango += Number(marginRight);
            }
          });

          var rangoTotal = sumarAnchoRango + sumarMarginRango;

          $(this).parents("svg").parent().append('<div style="z-index: 9999; height: 5px; width:' + rangoTotal + 'px;"  class="puente-protesis-fija"></div>');
          $(this).parents("svg").parent().children().last().css({
              "position": "absolute",
              "right": "0"
          });
          arregloProtesisFija = []

          $(".svg").removeClass("disabled");
          $(this).parents("svg").parent().toggleClass("puente2");
          $(this).parents("svg").parent().addClass("seleccionado");
          $(this).parents("svg").parent().parent().find(".puente1").addClass("seleccionado");

        }
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoProtesisFijaMalo) ) {
        countClickProtesisFijaMalo++;

        if(countClickProtesisFijaMalo === 1){
          $(this).parents("svg").parent().toggleClass("puente1-malo");
          var posicionActual = $(this).parents(".svg").attr("data-count");
          arregloProtesisFijaMalo.push(posicionActual);

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;
            if (posicionActual > countIndex) {
              $(this).addClass("disabled");
            }
          });

        } else if (countClickProtesisFijaMalo === 2) {
          countClickProtesisFijaMalo = 0;
          var posicionFinal = $(this).parents(".svg").attr("data-count");
          arregloProtesisFijaMalo.push(posicionFinal);

          var listarPiezaDentaria = $(".contenido-polygon .svg");
          var sumarAnchoRango = 0
          var sumarMarginRango = 0

          $( listarPiezaDentaria ).each(function( index ) {
            var countIndex = index+1;
            if (countIndex >= arregloProtesisFijaMalo[0] && countIndex <= arregloProtesisFijaMalo[1])  {
              $(this).addClass("disabled-range");
              var anchoDientes = $(this).outerWidth();
              var marginRight = 2;
              sumarAnchoRango += Number(anchoDientes);
              sumarMarginRango += Number(marginRight);
            }
          });

          var rangoTotal = sumarAnchoRango + sumarMarginRango;

          $(this).parents("svg").parent().append('<div style="z-index: 9999; height: 5px; width:' + rangoTotal + 'px;"  class="puente-protesis-fija-malo"></div>');
          $(this).parents("svg").parent().children().last().css({
              "position": "absolute",
              "right": "0"
          });
          arregloProtesisFijaMalo = []

          $(".svg").removeClass("disabled");
          $(this).parents("svg").parent().toggleClass("puente2-malo");
          $(this).parents("svg").parent().addClass("seleccionado");
          $(this).parents("svg").parent().parent().find(".puente1-malo").addClass("seleccionado");

        }
      }

    });
  },
  espigoMuñon: function() {

    $(".cont-diente .diente").on("click", function(e){
        var cantRaiz = $(this).parents(".svg").attr("data-raiz");
        var contenidoOdontograma = $(this).parents(".contenido-odontograma");

        if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoEspigoMuñon) ) {
          countClickEspigoMuñon++;

            $(this).parents("svg").parent().addClass("active-espigo-muñon");
            var tagFlecha = '<div class="espigo"> </div>';
            $(this).parents(".cont-diente").append(tagFlecha)

            if (cantRaiz === "1") {
              $(this).parents("svg").parent().addClass("seleccionado");
              console.log('cant raiz 1');

            } else if (cantRaiz === "2") {
              // countClickEspigoMuñon++;
              // console.log(countClickEspigoMuñon,'countClickEspigoMuñon');
              // console.log('cant raiz 2');

              // if(countClickEspigoMuñon === 1){
              //   console.log('click 1');

              // } else if (countClickEspigoMuñon === 2) {
              //   countClickEspigoMuñon = 0;
              //   console.log('click 2');
              //   $(this).parents("svg").parent().addClass("seleccionado");
              // }

            }




        }

        if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoEspigoMuñonMalo) ) {
            $(this).parents("svg").parent().toggleClass("active-espigo-muñon-malo");
            var tagFlecha = '<div class="espigo-malo"> </div>';
            $(this).parents(".cont-diente").append(tagFlecha)
            if (cantRaiz === "1") {
              $(this).parents("svg").parent().toggleClass("seleccionado");
            }
        }


        if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoEspigoMuñonIzquierda) ) {
          $(this).parents("svg").parent().toggleClass("active-espigo-muñon-izquierda");
          var tagFlecha = '<div class="espigo-izquierda"> </div>';
          $(this).parents(".cont-diente").append(tagFlecha)
          if (cantRaiz === "1") {
            $(this).parents("svg").parent().toggleClass("seleccionado");
          }
        }

        if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoEspigoMuñonDerecha) ) {
          $(this).parents("svg").parent().toggleClass("active-espigo-muñon-derecha");
          var tagFlecha = '<div class="espigo-derecha"> </div>';
          $(this).parents(".cont-diente").append(tagFlecha)
          if (cantRaiz === "1") {
            $(this).parents("svg").parent().toggleClass("seleccionado");
          }
        }

        if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoEspigoMuñonIzquierdaMalo) ) {
          $(this).parents("svg").parent().toggleClass("active-espigo-muñon-izquierda-malo");
          var tagFlecha = '<div class="espigo-izquierda-malo"> </div>';
          $(this).parents(".cont-diente").append(tagFlecha)
          if (cantRaiz === "1") {
            $(this).parents("svg").parent().toggleClass("seleccionado");
          }
        }

        if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoEspigoMuñonDerechaMalo) ) {
          $(this).parents("svg").parent().toggleClass("active-espigo-muñon-derecha-malo");
          var tagFlecha = '<div class="espigo-derecha-malo"> </div>';
          $(this).parents(".cont-diente").append(tagFlecha)

          if (cantRaiz === "1") {
            $(this).parents("svg").parent().toggleClass("seleccionado");
          }
        }

    });
  },
}

$(function () {
  if ($(".page-odontograma").length) {
      MyApp.eventoDientes();
      MyApp.eventJson();
      MyApp.activarHallazgo();
      MyApp.eliminarHallazgos();

      MyApp.protesisRemovible();
      MyApp.ortodonticoFijo();
      MyApp.protesisFija();
      MyApp.espigoMuñon();
  }
  if ($(".resultado-odontograma").length) {
      MyApp.mostrarOdontrograma();
  }
  if ($(".contenido-examen-periodontal").length) {
      MyApp.examenPeriodontal();
  }
  if ($('.only-numbers').length) {
    MyApp.onlyNumbers();
  }



  $(".lista-hallazgos li").each(function(){
    var tipo = $(this).find("a").data('tipo');
    $(this).append(`<span class="mostrar-tipo">${tipo}</span>`);
  });

  // var listarPiezaDentaria = $(".page-odontograma").find(".svg");
  // $( listarPiezaDentaria ).each(function( index, value ) {
  //     var contador = $(this).attr("data-count");
  //     console.log(contador),contador;
  // });


});
