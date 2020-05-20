console.log('ready local')

//mostrar nombre de imagen, en input file
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

//mostrar imagen, desde input file
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img-upload')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function(){    
  $(".save-data").blur(function(){
      var dtipoDocumento = document.getElementById("cboTipoDoc").value;
      var dnumeroDocumento = document.getElementById("txtNumeroDocumento").value;
      var dnom = document.getElementById("txtNombres").value;
      var dapePaterno = document.getElementById("txtPaterno").value;
      var dapeMaterno = document.getElementById("textMaterno").value;
      localStorage.setItem("TipoDocumento", dtipoDocumento);
      localStorage.setItem("NumeroDocumento", dnumeroDocumento);
      localStorage.setItem("Nombre", dnom);
      localStorage.setItem("ApellidoPaterno", dapePaterno);
      localStorage.setItem("ApellidoMaterno", dapeMaterno);
  });
});


window.addEventListener("load", function(event) {
  var localTipoDocumento = localStorage.getItem("TipoDocumento");
  var localNumeroDocumento = localStorage.getItem("NumeroDocumento");
  var localNombre = localStorage.getItem("Nombre");
  var localApellidoPaterno = localStorage.getItem("ApellidoPaterno");
  var localApellidoMaterno = localStorage.getItem("ApellidoMaterno");
  document.getElementById("cboTipoDoc").value = localTipoDocumento;
  document.getElementById("txtNumeroDocumento").value = localNumeroDocumento;
  document.getElementById("txtNombres").value = localNombre;
  document.getElementById("txtPaterno").value = localApellidoPaterno;
  document.getElementById("textMaterno").value = localApellidoMaterno;
});

