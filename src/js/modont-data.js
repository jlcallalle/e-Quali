var mOdont;
(function (mOdont) {
  const MODNT_APLICAR_HALLAZGO = {
    opciones: {
      individual: "individual",
      grupal: "grupal",
    },
  };

  const HALLAZGOS = [
  {
      codigo: "hallazgo-caries",
      hallazgoCod: "h01",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "diente", tipoDato: "string"},
        {parametro: "cara", tipoDato: "string"},
        {parametro: "tipo", tipoDato: "string"},
        {parametro: "nomtipo", tipoDato: "string"},
        {parametro: "pos", tipoDato: "string"},
        {parametro: "nompos", tipoDato: "string"},
        {parametro: "slug", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", evento: "evento", cara: "cara", diente: "diente", slug: "slug", tipoHallazgo: "tipoHallazgo",
          tipo: "tipo", nomtipo: "nomtipo", pos: "pos", nompos: "nompos"
        },
        datos: {
          r_cara: ["tipo", "nomtipo", "pos", "nompos", "evento","slug", "nombreHallazgo", "nombreLesion"]
        },
      }
    },
  {
      codigo: "hallazgo-defectos-del-esmalte",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "diente", tipoDato: "string"},
        {parametro: "cara", tipoDato: "string"},
        {parametro: "tipo", tipoDato: "string"},
        {parametro: "nomtipo", tipoDato: "string"},
        {parametro: "pos", tipoDato: "string"},
        {parametro: "nompos", tipoDato: "string"},
        {parametro: "slug", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", evento: "evento", cara: "cara", diente: "diente", slug: "slug", tipoHallazgo: "tipoHallazgo",
          tipo: "tipo", nomtipo: "nomtipo", pos: "pos", nompos: "nompos"
        },
        datos: {
          r_cara: ["tipo", "nomtipo", "pos", "nompos", "evento","slug", "nombreHallazgo", "nombreLesion"]
        },
      }
    },
  {
      codigo: "hallazgo-restauracion-definitiva",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "diente", tipoDato: "string"},
        {parametro: "cara", tipoDato: "string"},
        {parametro: "tipo", tipoDato: "string"},
        {parametro: "nomtipo", tipoDato: "string"},
        {parametro: "pos", tipoDato: "string"},
        {parametro: "nompos", tipoDato: "string"},
        {parametro: "slug", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", evento: "evento", cara: "cara", diente: "diente", slug: "slug", tipoHallazgo: "tipoHallazgo",
          tipo: "tipo", nomtipo: "nomtipo", pos: "pos", nompos: "nompos"
        },
        datos: {
          r_cara: ["tipo", "nomtipo", "pos", "nompos", "evento","slug", "nombreHallazgo", "nombreLesion"]
        },
      }
    },
  ];

  let cnfHallazgo = {};

  HALLAZGOS.forEach(function (item) {
    cnfHallazgo[item.codigo] = item;
    cnfHallazgo[item.codigo]["parametros"].push({parametro: "evento", tipoDato: "string"});
    cnfHallazgo[item.codigo]["parametros"].push({parametro: "hallazgo", tipoDato: "string"});
  });

  const DATA_POR_DEFECTO = {
    eventos: {},
    datos: {
      individual: {},
      grupal: {},
    },
  };

  let Odontograma = (function () {
    function Odontograma() {
      this.data = Object.assign({}, DATA_POR_DEFECTO);
      this.resumen = {length: 0, hash: ""};
      this.lc = {paramsAgregarH: {}, cnfH: {}, codH: ""};
    }

    return Odontograma;
  })();

  Odontograma.prototype = {
    cnfHallazgos: cnfHallazgo,
    fngInicializarEventoHallazgo(codHallazgo) {
      this.lc.codH = codHallazgo;
      this.lc.cnfH = (typeof this.cnfHallazgos[this.lc.codH] === "object") ? this.cnfHallazgos[this.lc.codH] : {};
      this.lc.paramsAgregarH = this.lc.cnfH.parametros;
    },
    getJsonData() {
      return JSON.stringify(this.data);
    },
    setJsonData(dataJson) {
      let data = {};
      try {
        data = JSON.parse(dataJson);
        this.data = data;
      } catch (e) {
        console.log("Error en cargar la data JSON");
      }
    },
    fngGenerarNuevoCodEvento() {
      return (new Date()).toISOString()
        .split("-").join("")
        .replace("T", "")
        .split(":").join("")
        .replace(".", "")
        .replace("Z", "");
    },
    fngGetOpciones(opciones) {
      let values = [];
      Object.keys(opciones).forEach(function (nom) {
        values.push({codigo: nom, nombre: opciones[nom]});
      });
      return values;
    },
    fngVerificarParametrosAgregar(parametros) {
      var parmsAgregar = [];
      this.lc.paramsAgregarH.forEach(function (param) {
        parmsAgregar.push(param.parametro);
        if (typeof parametros[param.parametro] !== param.tipoDato) {
          return false;
        }
      });
      if (Object.keys(parametros).sort().join("") !== parmsAgregar.sort().join("")) {
        return false;
      }
      return true;
    },
    fngSetAgregarHallazgo(parametros, codHallazgo) {
      this.fngInicializarEventoHallazgo(codHallazgo);
      parametros.evento = this.fngGenerarNuevoCodEvento();
      parametros.hallazgo = this.lc.codH;
      if (!this.fngVerificarParametrosAgregar(parametros)) {
        console.log("Error validacion");
        return false;
      }
      return this.fngAgregarHallazgoGenerico(parametros);
    },
    fngAgregarHallazgoGenerico(parametros) {
      this.fngInicializarEventoHallazgo(parametros.hallazgo);
      if (this.fnlAgregarDataPD(parametros)) {
        let dataFormateado = this.fnlGetDatosFormateado(
          parametros, this.lc.cnfH.formatoDato.evento, {}
        );
        let evento = parametros.evento;
        if (typeof this.data.eventos[evento] === "undefined") {
          this.data.eventos[evento] = {};
        }
        this.data.eventos[evento] = Object.assign({}, dataFormateado);
        return evento;
      } else {
        return false;
      }
    },
    fngGetHallazgoCodEvento(codE) {
      if (this.fngValidarExisteCodEvento(codE)) {
        return this.data.eventos[codE];
      }
      return false;
    },
    fngQuitarHallazgoCodEvento(codE) {
      if (!this.fngValidarExisteCodEvento(codE)) {
        return false;
      }
      let paramsEvt = this.fngGetHallazgoCodEvento(codE);
      if (paramsEvt && this.fnlQuitarDataPD(paramsEvt)) {
        delete this.data.eventos[codE];
        return true;
      }
      return false;
    },
    fngValidarExisteCodEvento(codE) {
      return Object.keys(this.data.eventos).includes(codE);
    },
    fnlAgregarDataPD(parametros) {
      this.fngInicializarEventoHallazgo(parametros.hallazgo);
      let codH = this.lc.codH;
      let aplicar = this.lc.cnfH.aplicar;
      let dataFormateado = {};
      if (aplicar === MODNT_APLICAR_HALLAZGO.opciones.individual) {
        let diente = parametros.diente;
        if (typeof this.data.datos[aplicar] === "undefined") {
          this.data.datos[aplicar] = {};
        }
        if (typeof this.data.datos[aplicar][diente] === "undefined") {
          this.data.datos[aplicar][diente] = {};
        }
        if (typeof this.data.datos[aplicar][diente][codH] === "undefined") {
          this.data.datos[aplicar][diente][codH] = {};
        }
        dataFormateado = this.fnlGetDatosFormateado(
          parametros, this.lc.cnfH.formatoDato.datos, Object.assign({}, this.data.datos[aplicar][diente][codH])
        );
        if (dataFormateado) {
          this.data.datos[aplicar][diente][codH] = Object.assign({}, dataFormateado);
          return true;
        } else {
          return false;
        }
      } else if (aplicar === MODNT_APLICAR_HALLAZGO.opciones.grupal) {
        let evento = parametros.evento;
        if (typeof this.data.datos[aplicar][codH] === "undefined") {
          this.data.datos[aplicar][codH] = {};
        }
        if (typeof this.data.datos[aplicar][codH][evento] === "undefined") {
          this.data.datos[aplicar][codH][evento] = {};
        }
        dataFormateado = this.fnlGetDatosFormateado(
          parametros, this.lc.cnfH.formatoDato.datos, this.data.datos[aplicar][codH]
        );
        if (dataFormateado) {
          this.data.datos[aplicar][codH][evento] = Object.assign({}, dataFormateado);
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    fnlQuitarDataPD(parametros) {
      this.fngInicializarEventoHallazgo(parametros.hallazgo);
      let codH = this.lc.codH;
      let aplicar = this.lc.cnfH.aplicar;
      let dataFormateado = {};
      if (aplicar === MODNT_APLICAR_HALLAZGO.opciones.individual) {
        let diente = parametros.diente;
        if ((typeof this.data.datos[aplicar] === "undefined") ||
          (typeof this.data.datos[aplicar][diente] === "undefined") ||
          (typeof this.data.datos[aplicar][diente][codH] === "undefined")
        ) {
          console.log("No se encontro datos para eliminar - individual");
          return false;
        }
        dataFormateado = this.fnlEliminarDatosFormateado(
          parametros, this.lc.cnfH.formatoDato.datos, this.data.datos[aplicar][diente][codH]
        );
        if (dataFormateado) {
          this.data.datos[aplicar][diente][codH] = Object.assign({}, dataFormateado);
          if (!Object.keys(this.data.datos[aplicar][diente][codH]).length) {
            delete this.data.datos[aplicar][diente][codH];
            if (!Object.keys(this.data.datos[aplicar][diente]).length) {
              delete this.data.datos[aplicar][diente];
            }
          }
          return true;
        } else {
          return false;
        }
      } else if (aplicar === MODNT_APLICAR_HALLAZGO.opciones.grupal) {
        let evento = parametros.evento;
        if ((typeof this.data.datos[aplicar][codH] === "undefined") ||
          (typeof this.data.datos[aplicar][codH][evento] === "undefined")
        ) {
          console.log("No se encontro datos para eliminar - grupal");
          return false;
        }
        delete this.data.datos[aplicar][codH][evento];
        if (!Object.keys(this.data.datos[aplicar][codH]).length) {
          delete this.data.datos[aplicar][codH];
        }
        return true;
      }
      return false;
    },
    fnlGetDatosFormateado(parametros, formato, data = {}) {
      let formateado = Object.assign({}, data);
      const TIPO_ARRAY = "array";
      const TIPO_OBJETO = "objeto";
      const TIPO_OTROS = "otros";
      const TIPO_UNDEFINED = "nodefinido";
      let obtenerTipoDato = function (valor) {
        if (typeof valor === "undefined") {
          return TIPO_UNDEFINED;
        } else if (Array.isArray(valor)) {
          return TIPO_ARRAY;
        } else if (typeof valor === "object") {
          return TIPO_OBJETO;
        } else {
          return TIPO_OTROS;
        }
      };
      let obtenerKey = function (item) {
        if (typeof item !== "string") {
          return false;
        }
        if (item.substr(0, 2) === "r_") {
          return parametros[item.substr(2)];
        } else {
          return item;
        }
      };
      let formatearIterar = function (lcFormat, lcFormateado) {
        switch (obtenerTipoDato(lcFormat)) {
          case TIPO_OBJETO:
            let i = 0;
            let key = 0;
            for (i in lcFormat) {
              key = obtenerKey(i);
              if (typeof lcFormateado[key] === "undefined") {
                lcFormateado[key] = {};
              }
              if (obtenerTipoDato(lcFormat[i]) === TIPO_OTROS) {
                lcFormateado[key] = parametros[lcFormat[i]];
              } else {
                lcFormateado[key] = Object.assign({}, formatearIterar(lcFormat[i], lcFormateado[key]));
              }
            }
            break;
          case TIPO_ARRAY:
            lcFormat.forEach(function (item1) {
              switch (obtenerTipoDato(item1)) {
                case TIPO_OBJETO:
                  lcFormateado = Object.assign({}, formatearIterar(item1, lcFormateado));
                  break;
                case TIPO_OTROS:
                  lcFormateado[item1] = parametros[item1];
                  break;
                default:
                  break;
              }
            });
            break;
          default:
            break;
        }
        return lcFormateado;
      };
      return formatearIterar(formato, formateado);
    },
    fnlEliminarDatosFormateado(paramEvento, formato, data = {}) {
      let formateado = Object.assign({}, data);
      let paramEvt = Object.assign({}, paramEvento);
      const TIPO_ARRAY = "array";
      const TIPO_OBJETO = "objeto";
      const TIPO_OTROS = "otros";
      const TIPO_UNDEFINED = "nodefinido";
      let obtenerTipoDato = function (valor) {
        if (typeof valor === "undefined") {
          return TIPO_UNDEFINED;
        } else if (Array.isArray(valor)) {
          return TIPO_ARRAY;
        } else if (typeof valor === "object") {
          return TIPO_OBJETO;
        } else {
          return TIPO_OTROS;
        }
      };
      let obtenerKey = function (item) {
        if (typeof item !== "string") {
          return false;
        }
        if (item.substr(0, 2) === "r_") {
          return paramEvt[item.substr(2)];
        } else {
          return item;
        }
      };
      let tieneTipoDatoObject = function (frmto) {
        switch (obtenerTipoDato(frmto)) {
          case TIPO_OBJETO:
            let i = null;
            let valReturn = false;
            for (i in frmto) {
              if (obtenerTipoDato(frmto[i]) === TIPO_OBJETO) {
                valReturn = true;
                break;
              }
            }
            return valReturn;
            break;
          case TIPO_ARRAY:
            let tieneObjeto = (item) => obtenerTipoDato(item) !== TIPO_OBJETO;
            return frmto.every(tieneObjeto);
            break;
          default:
            return false;
            break;
        }
      };
      let formatearIterar = function (lcFormat, lcFormateado) {
        switch (obtenerTipoDato(lcFormat)) {
          case TIPO_OBJETO:
            let i = 0;
            let key = 0;
            for (i in lcFormat) {
              key = obtenerKey(i);
              if (tieneTipoDatoObject(lcFormateado[key])) {
                lcFormateado[key] = Object.assign({}, formatearIterar(lcFormat[i], lcFormateado[key]));
                if (!Object.keys(lcFormateado[key]).length) {
                  delete lcFormateado[key];
                }
              } else {
                delete lcFormateado[key];
              }
            }
            break;
          default:
            lcFormateado = Object.assign({});
            break;
        }
        return lcFormateado;
      };
      return formatearIterar(formato, formateado);
    }
  };

  mOdont.Odontograma = Odontograma;
})(mOdont || (mOdont = {}));

var aa = new mOdont.Odontograma();
//aa.setJsonData('{"eventos":{"20191216160330965":{"hallazgo":"h01","diente":"41","cara":"oclusal","pos":"OC1","evento":"20191216160330965"},"20191216160334571":{"hallazgo":"h01","diente":"41","cara":"oclusal","pos":"OC2","evento":"20191216160334571"},"20191216160337484":{"hallazgo":"h01","diente":"41","cara":"mesial","pos":"CM","evento":"20191216160337484"},"20191216160341611":{"hallazgo":"h01","diente":"42","cara":"mesial","pos":"CM","evento":"20191216160341611"},"20191216160346596":{"hallazgo":"h01","diente":"42","cara":"oclusal","pos":"OC1","evento":"20191216160346596"}},"datos":{"individual":{"41":{"h01":{"oclusal":{"OC1":{"tipo":"MB","tiponom":"Mancha blanca","pos":"OC1","posnom":"Oclusal 1","evento":"20191216160330965"},"OC2":{"tipo":"MB","tiponom":"Mancha blanca","pos":"OC2","posnom":"Oclusal 2","evento":"20191216160334571"}},"mesial":{"CM":{"tipo":"MB","tiponom":"Mancha blanca","pos":"CM","posnom":"Cara mesial 1","evento":"20191216160337484"}}}},"42":{"h01":{"mesial":{"CM":{"tipo":"MB","tiponom":"Mancha blanca","pos":"CM","posnom":"Cara mesial 1","evento":"20191216160341611"}},"oclusal":{"OC1":{"tipo":"MB","tiponom":"Mancha blanca","pos":"OC1","posnom":"Oclusal 1","evento":"20191216160346596"}}}}},"grupal":{}}}');
