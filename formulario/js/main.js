console.log('ready local')


var MyApp = {

  caputraData : function () {
    $(".save-data").blur(function(){
      
      var dtipoDocumento = document.getElementById("cboTipoDoc").value;
      var dnumeroDocumento = document.getElementById("txtNumeroDocumento").value;
      var dnom = document.getElementById("txtNombres").value;
      var dapePaterno = document.getElementById("txtPaterno").value;
      var dapeMaterno = document.getElementById("textMaterno").value;
      var dFechaNacimiento = document.getElementById("fechaNacimiento").value;

      localStorage.setItem("TipoDocumento", dtipoDocumento);
      localStorage.setItem("NumeroDocumento", dnumeroDocumento);
      localStorage.setItem("Nombre", dnom);
      localStorage.setItem("ApellidoPaterno", dapePaterno);
      localStorage.setItem("ApellidoMaterno", dapeMaterno);
      localStorage.setItem("FechaNacimiento", dFechaNacimiento);
    });
  },
  muestraData : function () {
    var localTipoDocumento = localStorage.getItem("TipoDocumento");  
    var localNumeroDocumento = localStorage.getItem("NumeroDocumento");  
    var localNombre = localStorage.getItem("Nombre");
    var localApellidoPaterno = localStorage.getItem("ApellidoPaterno");
    var localApellidoMaterno = localStorage.getItem("ApellidoMaterno");
    var localFechaNacimiento = localStorage.getItem("FechaNacimiento");

    document.getElementById("cboTipoDoc").value = localTipoDocumento;
    document.getElementById("txtNumeroDocumento").value = localNumeroDocumento;
    document.getElementById("txtNombres").value = localNombre;
    document.getElementById("txtPaterno").value = localApellidoPaterno;
    document.getElementById("textMaterno").value = localApellidoMaterno;
    document.getElementById("fechaNacimiento").value = localFechaNacimiento;
  },
}


$(function () {
  if ($('body').length) {
     console.log('ready localstorage');
     // MyApp.caputraData();
     // MyApp.muestraData();
  }

  $("#formFicha000").validate({
    rules: {
      nombre: "required",
      apellido: "required",
    }
  });


});



 