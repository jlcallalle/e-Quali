/*
 * Versión: 1.0
 * Autor: César Ac.
 * lib: ucOdontogram_log
 * ucOdontModel_manager (v1.0) {
 * var: ucOdontogram_data
 * }
 * */
function logManagerOpenClose() {
  if ($("#logInspectorView").css("display") === "none") {
    $("#logInspectorView").css("display", "block");
  } else {
    $("#logInspectorView").css("display", "none");
  }
}
function logInspectorClear(id_div) {
  $("#" + id_div).html("");
}
function logInspector(id_div, data_array, basico) {
  var myDate = new Date();
  if (typeof id_div !== "string") {
    id_div = "logprueba";
  }
  var nivelDetall = parseInt($("#" + id_div + "_nivel").val());
  if (nivelDetall < 2) {
    nivelDetall = 2;
  } else if (nivelDetall > 8) {
    nivelDetall = 8;
  }
  if (typeof basico !== "string") {
    basico = "no";
  }
  if ((typeof data_array === "undefined") || (typeof data_array !== "object")) {
    data_array = ucOdontogram_data;
    $("#" + id_div).append("\n-DEFAULT-\n");
  }
  var fnGetValString = function (_var) {
    if (typeof _var === "object") {
      if (nivelDetall > 4) {
        return "&laquo;{obj}&raquo;&rArr;[" + (typeof _var) + "]&rArr;[" + (JSON.stringify(_var)) + "]";
      } else {
        return "&laquo;{obj}&raquo;&rArr;[" + (typeof _var) + "]";
      }
    } else if (typeof _var === "boolean") {
      if (_var === true) {
        return "&laquo;t&raquo;&rArr;[" + (typeof _var) + "]";
      } else {
        return "&laquo;f&raquo;&rArr;[" + (typeof _var) + "]";
      }
    } else if (typeof _var === "string") {
      return "&laquo;" + _var + "&raquo;&rArr;[" + (typeof _var) + "]";
    } else if (typeof _var === "number") {
      return "&laquo;" + _var + "&raquo;&rArr;[" + (typeof _var) + "]";
    } else {
      return "&laquo;(*)&raquo;&rArr;[" + (typeof _var) + "]";
    }
  };
  $("#" + id_div).append("\n");
  $("#" + id_div).append("Test " + myDate.getFullYear() + "/" + myDate.getMonth() + "/" + myDate.getDay() + " ");
  $("#" + id_div).append(myDate.getHours() + "." + myDate.getMinutes() + ":" + myDate.getSeconds() + "." + myDate.getMilliseconds() + "\n");
  $("#" + id_div).append("-------------------------------\n");
  $.each(data_array, function (i, dati) {
    $("#" + id_div).append("\n");
    $("#" + id_div).append(i + ":" + fnGetValString(dati) + " \n");
    $("#" + id_div).append("------------------------------------------------------------------------\n");
    if (typeof dati === "object" && (dati !== null)) {
      $.each(dati, function (j, datj) {
        $("#" + id_div).append("&boxvr;&boxh;" + j + ":" + fnGetValString(datj) + " \n");
        if (basico === "no") {
          if (typeof datj === "object" && (datj !== null) && (nivelDetall > 2)) {
            $.each(datj, function (k, datk) {
              $("#" + id_div).append("&boxv; &boxvr;&boxh;" + k + "(" + (typeof k) + "):" + fnGetValString(datk) + " \n");
              if (typeof datk === "object" && (datk !== null) && (nivelDetall > 3)) {
                $.each(datk, function (l, datl) {
                  $("#" + id_div).append("&boxv; &boxv; &boxvr;&boxh;" + l + ":" + fnGetValString(datl) + " \n");
                  if (typeof datl === "object" && (datl !== null) && (nivelDetall > 4)) {
                    $.each(datl, function (m, datm) {
                      $("#" + id_div).append("&boxv; &boxv; &boxv; &boxvr;&boxh;" + m + ":" + fnGetValString(datm) + " \n");
                      if (typeof datm === "object" && (datm !== null) && (nivelDetall > 5)) {
                        $.each(datm, function (n, datn) {
                          $("#" + id_div).append("&boxv; &boxv; &boxv; &boxv; &boxvr;&boxh;" + n + ":" + fnGetValString(datn) + " \n");
                          if (typeof datn === "object" && (datn !== null) && (nivelDetall > 6)) {
                            $.each(datn, function (o, dato) {
                              $("#" + id_div).append("&boxv; &boxv; &boxv; &boxv; &boxv; &boxvr;&boxh;" + o + ":" + fnGetValString(dato) + " \n");
                              if (typeof dato === "object" && (dato !== null)) {
                                $.each(dato, function (p, datp) {
                                  $("#" + id_div).append("&boxv; &boxv; &boxv; &boxv; &boxv; &boxv; &boxvr;&boxh;" + p + ":" + fnGetValString(datp) + " \n");
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        }
      });
    }
  });
}
