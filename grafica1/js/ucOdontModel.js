/*
 * Versión: 1.0 beta
 * Autor: César Ac.
 * lib: ucOdontogram 
 * dependencia:
 * ucOdontModel_manager (v1.0) {
 * var: ucOdontogram_model, ucOdontogram_data
 * }
 * ucOdontModel_log (v1.0),
 * */
jQuery.fn.ucOdontogram = function (action_or_data_user, option_metodo_model, set_data) {
  var pkid = $(this).data("ucodnt-pkid");
  //var pkid_key = "pk_" + pkid;
  var pkid_key = $(this).attr("id");
  var ucOdnt_objPkId = this;
  var ucOdnt_data = {};
  var ucOdnt_options = ["setOpc", "getOpc", "refresh"];
  var ucOdnt_optionMetodo = "";
  //Load Data
  var fnLoadData = function () {
    if (typeof action_or_data_user === "object") {
      ucOdnt_data = ucOdontogram_model.action.load.loadData(action_or_data_user);
    } else if (ucOdontogram_manager("exist", pkid_key)) {
      ucOdnt_data = ucOdontogram_manager("get", pkid_key);
    } else {
      ucOdnt_data = ucOdontogram_model.config.defaulData;
    }
  };
  fnLoadData();
  //----FINAL
  if (ucOdontogram_manager("exist", pkid_key)) {
    ucOdontogram_manager("update", pkid_key, ucOdnt_data);
  } else {
    ucOdontogram_manager("add", pkid_key, ucOdnt_data);
  }
  ucOdontogram_view(ucOdnt_objPkId, pkid_key);
  return ucOdnt_data;
};
