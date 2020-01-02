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

var MyApp = {
  eventoDientes : function() {
    $(".cont-diente .diente").on("click", function(e){
      if ($(this).hasClass("active")) {
        return;
      }
      var piezaDentariaActual = $(this).parents(".svg");
      if ( piezaDentariaActual.hasClass("active-ausente")
         || piezaDentariaActual.hasClass("active-erupcion")
         || piezaDentariaActual.hasClass("active-extruida")
         || piezaDentariaActual.hasClass("active-diastema")
         || piezaDentariaActual.hasClass("active-remanente-radicular")
         || piezaDentariaActual.hasClass("active-corona")
         || piezaDentariaActual.hasClass("active-corona-malo") ) {
        return;
      }

      var piezasDentariasTotal = $(".contenido-polygon").find(".svg");
      piezasDentariasTotal.removeClass("pre-seleccionado");
      piezasDentariasTotal.not(".seleccionado").find(".diente").removeClass("active");
      piezasDentariasTotal.not(".seleccionado").removeClass("active-corona active-corona-malo");
      piezasDentariasTotal.not(".seleccionado").removeClass("active-ausente");

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

      $(this).toggleClass("active");
      $(this).toggleClass(nombreHallazgo);
      $(".cont-diente .diente").removeClass("active-last");
      $(this).addClass("active-last");
      $(this).parents("svg").addClass("pre-seleccionado");
      $(".select-tipo").remove();

      if (tipoHallazgo == listaPintado.tipoPintado5) {
        $(this).parents("svg").addClass(nombreHallazgo);
      }

      if(nombrePosition == 'oclusal') {
          $(this).parents('svg').find('[data-pos="oclusal"]').addClass('disabledbutton');
          $(this).removeClass("disabledbutton");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoDienteAusente) ) {
          $(this).parents("svg").toggleClass('active-ausente');
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoDienteErupcion) ) {
          $(this).parents("svg").toggleClass('active-erupcion');
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
          $(this).parents("svg").toggleClass('active-giroversion');
          var tagFlecha = '<img src="img/giroversion.png">';
          $(this).parents(".cont-diente").addClass('giroversion');
          $(this).parents(".cont-diente").append(tagFlecha)
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoImplanteDental)
      ||  $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoImplanteDentalMalo) ) {
          $(this).parents("svg").addClass("seleccionado");
          $(this).parents("svg").removeClass("pre-seleccionado");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoCorona) ) {
          $(this).parents("svg").toggleClass("active-corona");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoCoronaMalo) ) {
          $(this).parents("svg").toggleClass("active-corona-malo");
      }

      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoCoronaTemporal) ) {
          $(this).parents("svg").toggleClass("active-corona-temporal");
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

      countClick++;
      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoProtesisFija) ) {
          if(countClick=='1'){
            $(this).parents("svg").parent().toggleClass('puente1');
          } else if (countClick=='2') {
            countClick = 0;
            $(this).parents("svg").parent().toggleClass('puente2');
            $(this).parents("svg").parent().addClass('seleccionado');
            $(this).parents("svg").parent().parent().find('.puente1').addClass('seleccionado');
          }
      }

      countClickFijo++;
      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoOrtodonticoFijo) ) {
        if(countClickFijo=='1'){
          $(this).parents("svg").parent().toggleClass('puente1-fijo');
        } else if (countClickFijo=='2') {
          countClickFijo = 0;
          $(this).parents("svg").parent().toggleClass('puente2-fijo');
          $(this).parents("svg").parent().addClass('seleccionado');
          $(this).parents("svg").parent().parent().find('.puente1-fijo').addClass('seleccionado');
        }
      }

      countClickFijoMalo++;
      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoOrtodonticoFijoMalo) ) {
        if(countClickFijoMalo=='1'){
          $(this).parents("svg").parent().toggleClass('puente1-fijo-malo');
        } else if (countClickFijoMalo=='2') {
          countClickFijoMalo = 0;
          $(this).parents("svg").parent().toggleClass('puente2-fijo-malo');
          $(this).parents("svg").parent().addClass('seleccionado');
          $(this).parents("svg").parent().parent().find('.puente1-fijo-malo').addClass('seleccionado');
        }
      }

      countClickRemovible++;
      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoProtesisRemovible) ) {
        alert('hola');
          if(countClickRemovible=='1'){
            $(this).parents("svg").parent().toggleClass('puente1-removible');
          } else if (countClickRemovible=='2') {
            countClickRemovible = 0;
            $(this).parents("svg").parent().toggleClass('puente2-removible');
            $(this).parents("svg").parent().addClass('seleccionado');
            $(this).parents("svg").parent().parent().find('.puente1-removible').addClass('seleccionado');
          }
      }

      countClickRemovibleMalo++;
      if ( $(contenidoOdontograma).hasClass(listaHallazgo.hallazgoProtesisRemovibleMalo) ) {
          if(countClickRemovibleMalo=='1'){
            $(this).parents("svg").parent().toggleClass('puente1-removible-malo');
          } else if (countClickRemovibleMalo=='2') {
            countClickRemovibleMalo = 0;
            $(this).parents("svg").parent().toggleClass('puente2-removible-malo');
            $(this).parents("svg").parent().addClass('seleccionado');
            $(this).parents("svg").parent().parent().find('.puente1-removible-malo').addClass('seleccionado');
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
              if (nombreHallazgo == listaHallazgo.hallazgoDienteAusente) {
                  var selectCaries ="<select class='select-tipo select-ausente' name='hallazgo-ausente'><option value=''>Elegir</option><option value='Diente no erupcionado'>DNE</option><option value='Diente ausente por extracción'>DEX</option><option value='Diente ausente por otras razones'>DAO</option> </select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoCoronaMalo) {
                  var selectCaries ="<select class='select-tipo select-corona-malo' name='hallazgo-corona-malo'><option value=''>Elegir</option><option value='Corona Metálica'>CM</option><option value='Corona Fenestrada'>CF</option><option value='Corona Metal Cerámica'>CMC</option><option value='Corona Veneer'>CV</option><option value='Canilla Estética'>CJ</option><option value='Corona Temporal'>CT</option> </select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
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

          }

      });

     /* --------Validar con scrip de Cesar -------*/
      if( $(contenidoOdontograma).is('[data-tipo~="3"]') ) {
        console.log('tipo 3');
          var idDiente = $(this).parents("svg").attr("id");
          var piezaDiente = $(this).parents("svg").attr("data-pieza");
          var wrapperContainer = $(this).parents(".contenido-odontograma");
          var nombreHallazgo = wrapperContainer.attr("data-texto");
          $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ '  data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' : </span>  En la cara '
          +  nombrePosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> ' + piezaDiente + '</span>  <a href="#">Eliminar</a>  </li>');
          $(this).parents("svg").addClass('seleccionado');
          $(this).parents("svg").removeClass('pre-seleccionado');
          var nomHallazgo = contenidoOdontograma.attr("data-name");
          var nombreSlug = contenidoOdontograma.attr("data-name");
          var idPieza = piezaDiente;
          var piezaPosition = nombrePosition;

          console.log(idPieza);
          console.log(piezaPosition);
          console.log(siglaPosition);
          console.log(nombreSlug);
          console.log(siglaPosition);
          console.log(piezaPosition);
          console.log(nombreSlug);
          console.log(nombreHallazgo);
          console.log(tipoHallazgo);
          //------nuevo evento json------//
          var paramPD = {
            diente: idPieza,
            cara: piezaPosition,
            tipo: siglaPosition,
            nomtipo: nombreSlug,
            pos: siglaPosition,
            nompos: piezaPosition,
            slug: nomHallazgo,
            nombreHallazgo: nombreHallazgo,
            tipoHallazgo: tipoHallazgo,
          };

          var evento = dOdont.fngSetAgregarHallazgo(paramPD, nomHallazgo);
          console.log(evento,'evento');
          console.log(dOdont.getJsonData(),'json generado');
          $("#id_odontograma_especificaciones").html(dOdont.getJsonData());


      } else if ($(contenidoOdontograma).is('[data-tipo~="5"]')){
          var idDiente = $(this).parents("svg").attr("id");
          var piezaDiente = $(this).parents("svg").attr("data-pieza");
          var wrapperContainer = $(this).parents(".contenido-odontograma");
          var nombreHallazgo = wrapperContainer.attr("data-texto");
          $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ '  data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' </span>: En la  pieza dental <span> '
          + piezaDiente + '</span> <a href="#">Eliminar</a>  </li>');
          $(this).parents("svg").addClass('seleccionado');
          $(this).parents("svg").removeClass('pre-seleccionado');

      } else if ($(contenidoOdontograma).is('[data-tipo~="6"]')){
          var idDiente = $(this).parents("svg").attr("id");
          var piezaDiente = $(this).parents("svg").attr("data-pieza");
          var wrapperContainer = $(this).parents(".contenido-odontograma");
          var nombreHallazgo = wrapperContainer.attr("data-texto");
          $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ ' >'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' : </span> De la  pieza dental <span> '
          + piezaDiente + '</span> <a href="#">Eliminar</a>  </li>');
          $(this).parents("svg").addClass('seleccionado');
          $(this).parents("svg").removeClass('pre-seleccionado');

      } else if ($(contenidoOdontograma).is('[data-tipo~="7"]')){
          var idDiente = $(this).parents("svg").attr("id");
          var piezaDiente = $(this).parents("svg").attr("data-pieza");
          var wrapperContainer = $(this).parents(".contenido-odontograma");
          var nombreHallazgo = wrapperContainer.attr("data-texto");
          $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ ' >'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' : </span> Entre la  pieza dental <span> '
          + piezaDiente + '</span> <a href="#">Eliminar</a>  </li>');
          $(this).parents("svg").addClass('seleccionado');
          $(this).parents("svg").removeClass('pre-seleccionado');

      }  else if ($(contenidoOdontograma).is('[data-tipo~="8"]')){
          var idDiente = $(this).parents("svg").attr("id");
          var tipoEdentulo = $(this).parents(".box-lista-dientes").parent().attr("data-edentulo");
          var piezaDiente = $(this).parents("svg").attr("data-pieza");
          var wrapperContainer = $(this).parents(".contenido-odontograma");
          var nombreHallazgo = wrapperContainer.attr("data-texto");
          $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ ' >'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' : </span> <span> '
          + tipoEdentulo + '</span> <a href="#">Eliminar</a>  </li>');
          $(this).parents("svg").addClass('seleccionado');
          $(this).parents("svg").removeClass('pre-seleccionado');

      }  else if ($(contenidoOdontograma).is('[data-tipo~="9"]')){
          var idDiente = $(this).parents("svg").attr("id");
          var piezaDiente = $(this).parents("svg").attr("data-pieza");
          var wrapperContainer = $(this).parents(".contenido-odontograma");
          var nombreHallazgo = wrapperContainer.attr("data-texto");

          var segundoDiente = 4.5;
          $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ '  data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' : </span>   '
           + siglaPosition  + ' </span>, Entre la  pieza dental <span> ' + piezaDiente + '</span> y <span class="id-pieza"> '+segundoDiente+' </span> <a href="#">Eliminar</a>  </li>');
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

          if (codLesion !== "Elegir") {
             $(this).parent().append('<span  class='+ nomHallazgo + '>' + codLesion  + '</span> ');
          }

          var parteDental = $(this).parents(".box-options").siblings().find(".svg");
          $( parteDental ).each(function( index ) {
              var idParte = this.id;
              if (idBox == idParte) {
                  var piezaPosition = $(this).find(".active-last").attr("data-pos");
                  var siglaPosition = $(this).find(".active-last").attr("data-sigla");

                  //------nuevo evento json------//
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

                  console.log(paramPD,'parametros ********');

                  var codEvento = dOdont.fngSetAgregarHallazgo(paramPD, nomHallazgo);

                  console.log(codEvento,'codEvento');
                  console.log(dOdont.getJsonData(),'json generado');
                  $("#id_odontograma_especificaciones").html(dOdont.getJsonData());


                  if(tipoHallazgo === listaPintado.tipoPintado4 ||  tipoHallazgo === listaPintado.tipoPintado5 ){
                      $(".lista-hallazgo-detallado").append(
                        `<li id='${idBox}' data-pos='${piezaPosition}' data-sigla='${codLesion}' data-hallazgo='${tipoHallazgo}' data-evento='${codEvento}'><span class="nombre-hallazo"> ${nombreHallazgo} </span>:
                        ${nombreLesion} <span> ${codLesion} </span> , de la  pieza dental <span class="class="id-pieza"">${idDiente}</span> <a href="#">Eliminar aa</a> </li>`);
                        $(this).addClass('pieza-total');
                  } else {
                    console.log('tipo 1');
                      $(".lista-hallazgo-detallado").append(
                        `<li id='${idBox}' data-pos='${piezaPosition}' data-sigla='${codLesion}' data-hallazgo='${tipoHallazgo}' data-evento='${codEvento}'><span class="nombre-hallazo"> ${nombreHallazgo} </span>:
                        ${nombreLesion} <span> ${codLesion} </span> ,  en la cara <span  class="posicion">${piezaPosition} </span><span>${siglaPosition}</span>, de la  pieza dental <span class="class="id-pieza"">${idDiente}</span>
                        <a href="#">Eliminar bb</a> </li>`);
                  }

                  $(this).addClass('seleccionado');
                  $(this).removeClass('pre-seleccionado');

              }
          });
          console.log('en remove');
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

          if( nombreHallazgo == listaHallazgo.hallazgoSupernumeraria ){
            $(".row-dientes .cont-diente:last-child svg").addClass("disabledbutton");
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


      $("#hallazgo-caries").click();

  },
  eliminarHallazgos : function() {

      $(document).on("click",".lista-hallazgo-detallado li a",function(e){
        //------ evento eliminar "nueva estructura" -----//
        var idEvento = $(this).parents("li").data("evento");
        dOdont.fngQuitarHallazgoCodEvento(idEvento.toString());
        $("#id_odontograma_especificaciones").html(dOdont.getJsonData());
        //------ ----------------------------------------//

        //------ evento eliminar "estructura anterior" -----//

         // var data = $("#id_odontograma_especificaciones").val();
        // data = JSON.parse(data);

        // var valorPieza = $(this).parent().find('.id-pieza').text().trim();
        // var nombrePieza = $(this).parent().find('.nombre-hallazo').text().trim().toLowerCase();
        // var posPieza = $(this).parent().find('.posicion').text();

        // for (key in data) {
        //   count = 0;
        //   console.log(key)
        //   console.log(data[valorPieza][nombrePieza]);
        //   if (key == valorPieza) {
        //     for (keypost in data[valorPieza][nombrePieza]) {
        //       count++;
        //      }
        //   }
        //   console.log(count);
        //   if (count == '1') {
        //     console.log(delete data[valorPieza]);
        //   } else {
        //     console.log(delete data[valorPieza][nombrePieza][posPieza]);
        //   }
        // }
        // console.log(nombrePieza);
        // datafinal = JSON.stringify(data);
        // console.log(datafinal);
        // $("#id_odontograma_especificaciones").val(datafinal);
        //------ ----------------------------------------//

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
                          $(this).removeClass("hallazgo-caries hallazgo-defectos-del-esmalte hallazgo-restauracion-definitiva hallazgo-restauracion-definitiva-malo hallazgo-restauracion-temporal");
                          $(this).removeClass("hallazgo-restauracion-temporal");
                          $(this).parents(".svg").removeClass("seleccionado");
                          $(this).parents('.svg').removeClass("active-ausente");
                          $(this).parents('.svg').removeClass("active-erupcion");
                          $(this).parents('.svg').removeClass("active-corona");
                          $(this).parents('.svg').removeClass("active-corona-malo");
                          $(this).parents('.svg').removeClass("active-corona-temporal");
                          $(this).parents('.svg').removeClass("active-fractura");
                          $(this).parents('.svg').removeClass("active-fractura-malo");
                          $(this).parents('.svg').removeClass("active-remanente-radicular");
                          $(this).parents('.svg').parent().removeClass("active-geminacion");
                          $(this).parents('.svg').parent().removeClass("active-transposicion");
                          $(this).parents('.svg').parent().removeClass("active-fusion");
                          $(this).parents('.svg').parent().removeClass("active-clavija");
                          $(this).parents('.svg').parent().removeClass("active-edentulo-total");
                          $(this).parents('.svg').parent().removeClass("active-supernumeraria");
                          $(this).parents('.svg').parent().removeClass("active-protesis-total");
                          $(this).parents('.svg').parent().removeClass("active-protesis-total-malo");
                          $(this).parents('.svg').parent().removeClass("active-ortodontico-removible");
                          $(this).parents('.svg').parent().removeClass("active-ortodontico-removible-malo");
                          $(this).parents('.svg').parent().removeClass("puente1");
                          $(this).parents('.svg').parent().removeClass("puente2");
                          $(this).parents('.svg').parent().removeClass("puente1-removible");
                          $(this).parents('.svg').parent().removeClass("puente2-removible-malo");
                          $(this).parents('.svg').parent().removeClass("active-fractura-linea-top");
                          $(this).parents('.svg').parent().removeClass("active-fractura-linea-sub");
                          $(this).parents('.svg').parent().removeClass("active-fractura-diagonal-izquierda");
                          $(this).parents('.svg').parent().removeClass("active-fractura-diagonal-derecha");
                          $(this).parents('.svg').parent().removeClass("active-fractura-diagonal-izquierda-small");
                          $(this).parents('.svg').parent().removeClass("active-fractura-diagonal-derecha-small");
                          $(this).parents('.svg').parent().removeClass("active-fractura-raya-izquierda");
                          $(this).parents('.svg').find('[data-pos="oclusal"]').removeClass('disabledbutton');
                          $(this).parents('.flecha-extruida').find('img').remove();
                          $(this).parents('.flecha-intruida').find('img').remove();
                          $(this).parents('.diastema').find('img').remove();
                          $(this).parents('.giroversion').find('img').remove();
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
  mostrarOdontrograma: function(){
    // var data ='{"4.8":{"lesión de caries dental":{"mesial":{"tipo":"MB","nomtipo":"Mancha Blanca","pos":"CM","nompos":"cara mesial"}}},"4.7":{"restauracion definitiva":{"vestibular":{"tipo":"AM","nomtipo":"Amalgama Dental","pos":"VE","nompos":"cara vestibular"}}}}';
    // data = JSON.parse(data);
    // console.log(data,'data');

    var data ='{"eventos":{"20191226061456494":{"hallazgo":"hallazgo-caries","evento":"20191226061456494","cara":"lingual","diente":"4.8","slug":"hallazgo-caries","tipoHallazgo":1,"tipo":"MB","nomtipo":"Mancha Blanca","pos":"LN","nompos":"lingual"},"20191226061502447":{"hallazgo":"hallazgo-defectos-del-esmalte","evento":"20191226061502447","cara":"mesial","diente":"4.7","slug":"hallazgo-defectos-del-esmalte","tipoHallazgo":1,"tipo":"HM","nomtipo":"Hipo Mineralización","pos":"CM","nompos":"mesial"},"20191226061507396":{"hallazgo":"hallazgo-restauracion-definitiva","evento":"20191226061507396","cara":"mesial","diente":"4.6","slug":"hallazgo-restauracion-definitiva","tipoHallazgo":2,"tipo":"AM","nomtipo":"Amalgama Dental","pos":"CM","nompos":"mesial"},"20191226061520126":{"hallazgo":"hallazgo-restauracion-definitiva-malo","evento":"20191226061520126","cara":"lingual","diente":"4.5","slug":"hallazgo-restauracion-definitiva-malo","tipoHallazgo":2,"tipo":"AD","nomtipo":"Amalgama Dental","pos":"LN","nompos":"lingual"},"20191226061528169":{"hallazgo":"hallazgo-posicion-dentaria","evento":"20191226061528169","cara":"oclusal","diente":"4.4","slug":"hallazgo-posicion-dentaria","tipoHallazgo":4,"tipo":"D","nomtipo":"Distalizado","pos":"OC","nompos":"oclusal"},"20191226061537431":{"hallazgo":"hallazgo-movilidad-patologica","evento":"20191226061537431","cara":"lingual","diente":"4.3","slug":"hallazgo-movilidad-patologica","tipoHallazgo":4,"tipo":"M1","nomtipo":"M1","pos":"LN","nompos":"lingual"},"20191226061550771":{"hallazgo":"hallazgo-pieza-dentaria-ausente","evento":"20191226061550771","cara":"lingual","diente":"4.2","slug":"hallazgo-pieza-dentaria-ausente","tipoHallazgo":4,"tipo":"DNE","nomtipo":"Diente no erupcionado","pos":"LN","nompos":"lingual"},"20191226061559820":{"hallazgo":"hallazgo-corona","evento":"20191226061559820","cara":"lingual","diente":"4.1","slug":"hallazgo-corona","tipoHallazgo":4,"tipo":"CDD","nomtipo":"Corona en Diente Deciduo","pos":"LN","nompos":"lingual"},"20191226061605444":{"hallazgo":"hallazgo-corona-malo","evento":"20191226061605444","cara":"lingual","diente":"3.1","slug":"hallazgo-corona-malo","tipoHallazgo":4,"tipo":"CV","nomtipo":"Corona Veneer","pos":"LN","nompos":"lingual"}},"datos":{"individual":{"4.8":{"hallazgo-caries":{"lingual":{"tipo":"MB","nomtipo":"Mancha Blanca","pos":"LN","nompos":"lingual","evento":"20191226061456494","slug":"hallazgo-caries","nombreHallazgo":"Lesión de caries dental"}}},"4.7":{"hallazgo-defectos-del-esmalte":{"mesial":{"tipo":"HM","nomtipo":"Hipo Mineralización","pos":"CM","nompos":"mesial","evento":"20191226061502447","slug":"hallazgo-defectos-del-esmalte","nombreHallazgo":"Defectos de desarrollo del esmalte"}}},"4.6":{"hallazgo-restauracion-definitiva":{"mesial":{"tipo":"AM","nomtipo":"Amalgama Dental","pos":"CM","nompos":"mesial","evento":"20191226061507396","slug":"hallazgo-restauracion-definitiva","nombreHallazgo":"Restauracion definitiva"}}},"4.5":{"hallazgo-restauracion-definitiva-malo":{"lingual":{"tipo":"AD","nomtipo":"Amalgama Dental","pos":"LN","nompos":"lingual","evento":"20191226061520126","slug":"hallazgo-restauracion-definitiva-malo","nombreHallazgo":"Restauracion definitiva malo"}}},"4.4":{"hallazgo-posicion-dentaria":{"oclusal":{"tipo":"D","nomtipo":"Distalizado","pos":"OC","nompos":"oclusal","evento":"20191226061528169","slug":"hallazgo-posicion-dentaria","nombreHallazgo":"Posicion Dentaria"}}},"4.3":{"hallazgo-movilidad-patologica":{"lingual":{"tipo":"M1","nomtipo":"M1","pos":"LN","nompos":"lingual","evento":"20191226061537431","slug":"hallazgo-movilidad-patologica","nombreHallazgo":"Movilidad patologica"}}},"4.2":{"hallazgo-pieza-dentaria-ausente":{"lingual":{"tipo":"DNE","nomtipo":"Diente no erupcionado","pos":"LN","nompos":"lingual","evento":"20191226061550771","slug":"hallazgo-pieza-dentaria-ausente","nombreHallazgo":"Pieza dentaria ausente"}}},"4.1":{"hallazgo-corona":{"lingual":{"tipo":"CDD","nomtipo":"Corona en Diente Deciduo","pos":"LN","nompos":"lingual","evento":"20191226061559820","slug":"hallazgo-corona","nombreHallazgo":"Corona"}}},"3.1":{"hallazgo-corona-malo":{"lingual":{"tipo":"CV","nomtipo":"Corona Veneer","pos":"LN","nompos":"lingual","evento":"20191226061605444","slug":"hallazgo-corona-malo","nombreHallazgo":"Corona malo"}}}},"grupal":{}}}';

    console.log(data,'data');
    dOdont.setJsonData(data);
    data = Object.assign({},dOdont.data.datos.individual);

    console.log(data,'data nuevo');


   $('.cont-diente .svg').each(function(index, value){
     var idpieza = $(value).attr('data-pieza');  //4.8

       for (item in data) {
         if (idpieza == item) {
           console.log(idpieza,'idpieza'); //4.8
           console.log(item,'item'); // 4.8
           $(value).addClass('seleccionado'); //addClass en .svg
           console.log(data[item],'data [item]'); // hallazgo-caries: vestibular: {tipo: "CD", nomtipo: "Caries de la dentina", pos: "VE", nompos: "vestibular", evento: "20191219155147888", …}
           var hallazgo = data[item];

           if (hallazgo) {
             for (itemHallaz in hallazgo) {
               console.log(itemHallaz, 'itemHallaz'); //hallazgo-caries
               var dataHallazgo = hallazgo[itemHallaz]; //vestibular: {tipo: "CD", nomtipo: "Caries de la dentina", pos: "VE", nompos: "vestibular", evento: "20191219155147888", …}
               console.log(dataHallazgo,'dataHallazgo');
               $(value).addClass('active-'+itemHallaz);

               if (dataHallazgo) {
                 console.log(dataHallazgo,'dataHallazgo-aa');
                 var diente = $(value).find('.diente');
                 for (itemDataHallaz in dataHallazgo) {
                   console.log('item Hallazgo', itemDataHallaz); //vestibular
                   console.log('data Hallazgo', dataHallazgo);  //vestibular: {tipo: "CD", nomtipo: "Caries de la dentina", pos: "VE", nompos: "vestibular", evento: "20191219155147888", …}

                   console.log(dataHallazgo[itemDataHallaz],'dataHallazgo[itemDataHallaz]');  //{tipo: "CE", nomtipo: "Caries del esmalte", pos: "LN", nompos: "lingual", evento: "20191219155146048", …}
                   console.log(dataHallazgo[itemDataHallaz]['nombreHallazgo'],'nombre Hallazgo texto ');
                   $(value).find('[data-pos="'+itemDataHallaz+'"]').addClass('active').addClass(itemHallaz);
                   $('.box-options').find("#box-"+idpieza.replace('.', '')).find('.select-hallazgos').append(`<span class="${itemHallaz}">${dataHallazgo[itemDataHallaz]['tipo']}</span> </div>`);
                   $('.lista-hallazgo-detallado').append(`<li> <span class="nombre-hallazo">${dataHallazgo[itemDataHallaz]['nombreHallazgo']}</span>: ${dataHallazgo[itemDataHallaz]['nomtipo']} <span>${dataHallazgo[itemDataHallaz]['tipo']}</span>, en la cara <span>${itemDataHallaz} ${dataHallazgo[itemDataHallaz]['pos']} </span>, de la pieza dental <span>${idpieza} </span></li>`);
                 }
               }

             }
           }
         }

       }
   });
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
}

$(function () {
  if ($(".page-odontograma").length) {
      MyApp.eventoDientes();
      MyApp.eventJson();
      MyApp.activarHallazgo();
      MyApp.eliminarHallazgos();
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

});
