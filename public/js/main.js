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
    },
}

$(function () {
    if ($('.only-numbers').length) {
        MyApp.onlyNumbers();
    }
    if ($('.page-odontograma').length) {
       console.log('enjoy odontogram');
    }
});
