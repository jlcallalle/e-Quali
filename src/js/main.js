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
         || piezaDentariaActual.hasClass("active-ausente") ) {
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

              if (nombreHallazgo == listaHallazgo.hallazgoCaries) {
                  var selectCaries ="<select class='select-tipo select-caries' name='hallazgo-caries'><option value=''>Elegir</option><option value='Mancha Blanca'>MB</option> <option value='Caries del esmalte'>CE</option> <option value='Caries de la dentina'>CD</option> <option value='Caries de la pulpa'>CDP</option></select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoDefectosDelEsmalte) {
                  var selectCaries ="<select class='select-tipo select-defectos-esmalte' name='hallazgo-defectos-del-esmalte'><option value=''>Elegir</option><option value='Hipoplasia'>HP</option> <option value='Hipo Mineralización' >HM</option> <option value='Opacidades de Esmalte'>O</option> <option value='Decoloración del Esmalte'>D</option><option value='Fluorosis'>Fluorosis</option></select>"
                  $( this ).find('.select-hallazgos').append(selectCaries);
              }
              if (nombreHallazgo == listaHallazgo.hallazgoRestauracionDefinitiva) {
                  var selectCaries ="<select class='select-tipo select-restauracion-definitiva' name='hallazgo-restauracion-definitiva'><option value=''>Elegir</option><option value='Amalgama Dental'>AM</option> <option value='Resina' >R</option> <option value='Ionónedo de vidrio'>IV</option><option value='Incrustación Estética'>IE</option><option value='Canilla Estética'>C</option></select>"
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

      if( $(contenidoOdontograma).is('[data-tipo~="3"]') ) {
          var idDiente = $(this).parents("svg").attr("id");
          var piezaDiente = $(this).parents("svg").attr("data-pieza");
          var wrapperContainer = $(this).parents(".contenido-odontograma");
          var nombreHallazgo = wrapperContainer.attr("data-texto");
          $(".lista-hallazgo-detallado").append('<li id=' + idDiente + ' data-pos=' +nombrePosition+ ' data-sigla=' +siglaPosition+ '  data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' + nombreHallazgo + ' : </span>  En la cara '
          +  nombrePosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> ' + piezaDiente + '</span>  <a href="#">Eliminar</a>  </li>');
          $(this).parents("svg").addClass('seleccionado');
          $(this).parents("svg").removeClass('pre-seleccionado');

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
           + siglaPosition  + ' </span>, Entre la  pieza dental <span> ' + piezaDiente + '</span> y <span> '+segundoDiente+' </span> <a href="#">Eliminar</a>  </li>');
          // $(this).parents("svg").addClass('seleccionado');
          // $(this).parents("svg").removeClass('pre-seleccionado');
    }



      $(".select-tipo").change(function(){
          var codLesion = $(this).children("option:selected").text();
          var nombreLesion = $(this).children("option:selected").val();

          var idDiente = $(this).parents(".box").attr("data-pieza");
          var idPieza = $(this).parents(".box").attr("data-pieza");
          var idBox = $(this).parents(".box").attr("id");

          var contenidoOdontograma = $(this).parents(".contenido-odontograma");
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

                  if(tipoHallazgo === listaPintado.tipoPintado4 ||  tipoHallazgo === listaPintado.tipoPintado5 ){
                      $(".lista-hallazgo-detallado").append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' data-sigla=' +codLesion+ '  data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' +nombreHallazgo+ '</span> : ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>, de la  pieza dental <span> '
                      + idDiente + '</span> <a href="#">Eliminar</a> </li> ');
                  } else {
                      $(".lista-hallazgo-detallado").append('<li id=' + idBox + ' data-pos=' +piezaPosition+ ' data-sigla=' +codLesion+ ' data-hallazgo=' +tipoHallazgo+ '>'+ '<span class="nombre-hallazo"> ' +nombreHallazgo+ '</span> : ' + nombreLesion + ' <span>'+ (codLesion) + ' </span>,  en la cara '
                      +  piezaPosition + ' <span>  '  + siglaPosition  + ' </span>, de la  pieza dental <span> '
                      + idDiente + '</span> <a href="#">Eliminar</a> </li> ');
                  }

                  $(this).addClass('seleccionado');
                  $(this).removeClass('pre-seleccionado');

                  console.log(idDiente,'idDiente');
                  console.log(codLesion,'codLesion');
                  console.log(nombreLesion,'nombreLesion');
                  nombreHallazgo = nombreHallazgo.toString().toLowerCase();
                  piezaPosition = piezaPosition.toString().toLowerCase();
                  //var data = [];
                  var datos = {'tipo':codLesion,'nomtipo':nombreLesion,'pos':siglaPosition,'nompos':'cara '+piezaPosition};

                  if( idDiente in dientes) {
                    if(nombreHallazgo in dientes[idDiente]){
                      dientes[idDiente][nombreHallazgo][piezaPosition]=datos
                    }
                  } else {
                    dientes[idDiente]={};
                    if (nombreHallazgo in dientes[idDiente]){
                    } else {
                      dientes[idDiente][nombreHallazgo] = {};
                      dientes[idDiente][nombreHallazgo][piezaPosition] = datos;
                    }
                  }
                  console.log(dientes,'dientes');
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
                          $(this).removeClass("hallazgo-caries");
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
    // var data ='{"4.3":{"caries":{"vestibular":{"tipo":"MB","nomtipo":"Mancha Blanca","pos":"VE","nompos":"cara vestibular"},"lingual":{"tipo":"CE","nomtipo":"Caries del esmalte","pos":"LN","nompos":"cara lingual"},"mesial":{"tipo":"CD","nomtipo":"Caries de la dentina","pos":"CM","nompos":"cara mesial"},"distal":{"tipo":"CDP","nomtipo":"Caries de la pulpa","pos":"CD","nompos":"cara distal"}}},"3.8":{"caries":{"oclusal":{"tipo":"CE","nomtipo":"Caries del esmalte","pos":"OC","nompos":"cara oclusal"},"vestibular":{"tipo":"CDP","nomtipo":"Caries de la pulpa","pos":"VE","nompos":"cara vestibular"}}}}';

    var data ='{"4.8":{"lesión de caries dental":{"lingual":{"tipo":"MB","nomtipo":"Mancha Blanca","pos":"LN","nompos":"cara lingual"}}},"4.7":{"defectos del esmalte":{"vestibular":{"tipo":"HP","nomtipo":"Hipoplasia","pos":"VE","nompos":"cara vestibular"}}},"4.6":{"restauracion definitiva":{"mesial":{"tipo":"AM","nomtipo":"Amalgama Dental","pos":"CM","nompos":"cara mesial"}}}}';
   data = JSON.parse(data);  //convierte a objetos en javascript
   console.log(data,'data');
   $('.cont-diente .svg').each(function(index, value){
     var idpieza = $(value).attr('data-pieza');
    //  console.log(idpieza, 'data-pieza');
       for (item in data) {
         if (idpieza == item) {
           $(value).addClass('seleccionado');
           console.log(data[item],'data item abc');
           var hallazgo = data[item];
           if (hallazgo) {
             for (itemHallaz in hallazgo) {
               console.log(itemHallaz);  //lesión de caries dental
               var dataHallazgo = hallazgo[itemHallaz];
               if (dataHallazgo) {
                 console.log(dataHallazgo,'hallazgo 54');
                 var diente = $(value).find('.diente');
                 for (itemDataHallaz in dataHallazgo) {
                   //diente.attr('data-pos')
                   console.log('item Hallazgo', itemDataHallaz);
                   console.log('data Hallazgo', dataHallazgo);
                   console.log(dataHallazgo[itemDataHallaz],'dataHallazgo[itemDataHallaz]'); //<span class="hallazgo-restauracion-definitiva">AM</span> </div>
                   $(value).find('[data-pos="'+itemDataHallaz+'"]').addClass('active').addClass('hallazgo-'+itemHallaz.split(" ").join("-"));
                  $('.box-options').find("#box-"+idpieza.replace('.', '')).find('.select-hallazgos').append(`<span class="hallazgo-${itemHallaz.split(" ").join("-")}">${dataHallazgo[itemDataHallaz]['tipo']}</span> </div>`);
                  //  console.log(dataHallazgo[itemDataHallaz]['tipo']);
                  //  $(value).find('[data-pos="'+itemDataHallaz+'"]').addClass('active').addClass(nombreHallazgo);
                   //console.log(itemDataHallaz,'itemDataHallaz');
                 }
               }
               //$(value).find('[data-pos="'+itemHallaz+'"]').addClass('active');

             }
           }
         }

       }
   });
 }
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
});
