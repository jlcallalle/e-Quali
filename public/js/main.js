// Main

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
    }
}

$(function () {
    console.log('page odontologia');

    if ($('.contenido-odontograma').length) {
       // MyApp.onlyNumbers();
       console.log('hola');
    }
});

/* Get Element */
var box18 = document.querySelector('#box-18');
var diente18 = document.querySelector('#diente-18');
console.log(box18);

box18.addEventListener('click', onClickBox18)
diente18.addEventListener('click', onClickDiente18)

function onClickBox18() {
    console.log('onClick Box18');
}
function onClickDiente18() {
    console.log('onClick diente 18');
}
