var MyApp = {

    onlyNumbers : function() {
        $('.only-numbers').on('keypress', function(event) {
            var numbers = /[0-9]/g;
            var key = String.fromCharCode(event.which);
            if ($.inArray(event.keyCode) >= 0 || numbers.test(key)) {
                return true;
            }
            return false;
        });
    },
}

$(function () {
    if ($('.only-numbers').length) {
        MyApp.onlyNumbers();
    }
    if ($('.page-odontograma').length) {
       console.log('enjoy odontogram');
    }




    $('.cont-diente .diente').on("click", function(e){
        $(this).toggleClass("active");
        $('.box select').show();
    });

    $(".select-tipo").change(function(){
        var tipo = $(this).children("option:selected").val();
        $(this).parent().append(tipo);
    });





    // $(".lista-hallazgos li a").on("click", function(e){
    //     $('.lista-hallazgos li a').removeClass('active');
    //     $(this).addClass('active');
    // });

    /* Hallazgos*/

    $('#cod-caries').on("click", function(e){
        $(this).toggleClass("active");
        $('.contenido-odontograma').addClass('contenido-caries');
        $('.contenido-odontograma').removeClass('contenido-restauracion');
    });

    $('#cod-restauracion').on("click", function(e){
        $(this).toggleClass("active");
        $('.contenido-odontograma').addClass('contenido-restauracion');
        $('.contenido-odontograma').removeClass('contenido-caries');
    });

    /*
    function onClickExtraccion() {
        var wrapo = document.getElementById("contenido-odontograma");
        wrapo.addClass("intro1");
    }
    var codExtraccion = document.getElementById('cod-extraccion');
    codExtraccion.addEventListener("click", onClickExtraccion);
    */


    // $('#cod-extraccion').on("click", function(e){
    //     $(this).toggleClass("active");
    //     $('.contenido-odontograma').addClass('contenido-extraccion');
    // });

    // $('#cod-fractura').on("click", function(e){
    //     $(this).toggleClass("active");
    //     $('.contenido-odontograma').addClass('contenido-fractura');
    // });


});

