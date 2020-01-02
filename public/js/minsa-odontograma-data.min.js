var minsaOdontogramaData;
(function (minsaOdontogramaData) {
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
        {parametro: "slug", tipoDato: "string"},
        {parametro: "diente", tipoDato: "string"},
        {parametro: "cara", tipoDato: "string"},
        {parametro: "pos", tipoDato: "string"},
        {parametro: "nompos", tipoDato: "string"},
        {parametro: "tipo", tipoDato: "string"},
        {parametro: "nomtipo", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", slug: "slug", tipoHallazgo: "tipoHallazgo", evento: "evento",
          diente: "diente", cara: "cara",
          pos: "pos", nompos: "nompos",
          tipo: "tipo", nomtipo: "nomtipo"
        },
        datos: {
          r_cara: ["evento", "nombreHallazgo", "slug", "pos", "nompos", "tipo", "nomtipo", "nombreLesion"]
        },
      }
    },
    {
      codigo: "hallazgo-defectos-del-esmalte",
      hallazgoCod: "h02",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "slug", tipoDato: "string"},
        {parametro: "diente", tipoDato: "string"},
        {parametro: "cara", tipoDato: "string"},
        {parametro: "pos", tipoDato: "string"},
        {parametro: "nompos", tipoDato: "string"},
        {parametro: "tipo", tipoDato: "string"},
        {parametro: "nomtipo", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", slug: "slug", tipoHallazgo: "tipoHallazgo", evento: "evento",
          diente: "diente", cara: "cara",
          pos: "pos", nompos: "nompos",
          tipo: "tipo", nomtipo: "nomtipo"
        },
        datos: {
          r_cara: ["evento", "nombreHallazgo", "slug", "pos", "nompos", "tipo", "nomtipo", "nombreLesion"]
        },
      }
    },
    {
      codigo: "hallazgo-restauracion-definitiva",
      hallazgoCod: "h08",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "slug", tipoDato: "string"},
        {parametro: "diente", tipoDato: "string"},
        {parametro: "cara", tipoDato: "string"},
        {parametro: "pos", tipoDato: "string"},
        {parametro: "nompos", tipoDato: "string"},
        {parametro: "tipo", tipoDato: "string"},
        {parametro: "nomtipo", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
        {parametro: "estado", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", slug: "slug", tipoHallazgo: "tipoHallazgo", evento: "evento",
          diente: "diente", cara: "cara",
          pos: "pos", nompos: "nompos",
          tipo: "tipo", nomtipo: "nomtipo",
          estado: "estado"
        },
        datos: {
          r_cara: ["evento", "nombreHallazgo", "slug", "pos", "nompos", "tipo", "nomtipo", "estado"]
        },
      }
    },
    {
      codigo: "hallazgo-restauracion-temporal",
      hallazgoCod: "h09",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "slug", tipoDato: "string"},
        {parametro: "diente", tipoDato: "string"},
        {parametro: "cara", tipoDato: "string"},
        {parametro: "pos", tipoDato: "string"},
        {parametro: "nompos", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", slug: "slug", tipoHallazgo: "tipoHallazgo", evento: "evento",
          diente: "diente", cara: "cara",
          pos: "pos", nompos: "nompos"
        },
        datos: {
          r_cara: ["evento", "nombreHallazgo", "slug", "pos", "nompos"]
        },
      }
    },
    {
      codigo: "hallazgo-remanente-radicular",
      hallazgoCod: "h25",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "slug", tipoDato: "string"},
        {parametro: "diente", tipoDato: "string"},
        {parametro: "texto", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", slug: "slug", tipoHallazgo: "tipoHallazgo", evento: "evento",
          diente: "diente", texto: "texto",
        },
        datos: {
          evento: "evento", nombreHallazgo: "nombreHallazgo", slug: "slug", texto: "texto"
        },
      }
    },
    {
      codigo: "hallazgo-pieza-dentaria-ausente",
      hallazgoCod: "h06",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "slug", tipoDato: "string"},
        {parametro: "diente", tipoDato: "string"},
        {parametro: "texto", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", slug: "slug", tipoHallazgo: "tipoHallazgo", evento: "evento",
          diente: "diente", texto: "texto",
        },
        datos: {
          evento: "evento", nombreHallazgo: "nombreHallazgo", slug: "slug", texto: "texto"
        },
      }
    },
    {
      codigo: "hallazgo-corona",
      hallazgoCod: "h28",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "slug", tipoDato: "string"},
        {parametro: "diente", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
        {parametro: "estado", tipoDato: "string"},
        {parametro: "texto", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", slug: "slug", tipoHallazgo: "tipoHallazgo", evento: "evento",
          diente: "diente", estado: "estado", texto: "texto"
        },
        datos: {
          evento: "evento", nombreHallazgo: "nombreHallazgo", slug: "slug", estado: "estado", texto: "texto"
        },
      }
    },
    {
      codigo: "hallazgo-corona-temporal",
      hallazgoCod: "h27",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.individual,
      parametros: [
        {parametro: "slug", tipoDato: "string"},
        {parametro: "diente", tipoDato: "string"},
        {parametro: "texto", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", slug: "slug", tipoHallazgo: "tipoHallazgo", evento: "evento",
          diente: "diente", texto: "texto",
        },
        datos: {
          evento: "evento", nombreHallazgo: "nombreHallazgo", slug: "slug", texto: "texto"
        },
      }
    },
    {
      codigo: "hallazgo-edentulo-total",
      hallazgoCod: "h10",
      aplicar: MODNT_APLICAR_HALLAZGO.opciones.grupal,
      parametros: [
        {parametro: "slug", tipoDato: "string"},
        {parametro: "diente", tipoDato: "string"},
        {parametro: "cara", tipoDato: "string"},
        {parametro: "nombreHallazgo", tipoDato: "string"},
        {parametro: "tipoHallazgo", tipoDato: "string"},
      ],
      formatoDato: {
        evento: {
          hallazgo: "hallazgo", slug: "slug", tipoHallazgo: "tipoHallazgo", evento: "evento",
          diente: "diente", cara: "cara",
        },
        datos: {
          cara: "cara", evento: "evento", nombreHallazgo: "nombreHallazgo", slug: "slug", nombreLesion: "nombreLesion"
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
    datosVersion: {
      version: "v1.0"
    }
  };

  let Odontograma = (function () {
    function Odontograma() {
      this.data = Object.assign({}, DATA_POR_DEFECTO);
      this.resumen = {length: 0, hash: ""};
      this.lc = {paramsAgregarH: {}, cnfH: {}, codH: "", logErrors: [], activarLog: false};
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
      if (typeof this.data === "object") {
        return JSON.stringify(this.data);
      } else {
        this.setLogError("Error al generar JSON");
        return false;
      }
    },
    setJsonData(dataJson) {
      let data = {};
      try {
        data = JSON.parse(dataJson);
        this.data = data;
      } catch (e) {
        this.setLogError("Error en cargar la data JSON", [e, dataJson]);
      }
    },
    fngGenerarNuevoCodEvento() {
      return "E_cod_".replace("_cod_", (new Date()).toISOString()
        .split("-").join("")
        .replace("T", "")
        .split(":").join("")
        .replace(".", "")
        .replace("Z", ""));
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
      if (typeof this.cnfHallazgos[codHallazgo] != "object") {
        return false;
      }
      this.fngInicializarEventoHallazgo(codHallazgo);
      parametros.evento = this.fngGenerarNuevoCodEvento();
      parametros.hallazgo = this.lc.codH;
      if (!this.fngVerificarParametrosAgregar(parametros)) {
        this.setLogError("Error validación de parámetros", parametros);
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
          parametros, this.lc.cnfH.formatoDato.datos, Object.assign({}, this.data.datos[aplicar][codH][evento])
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
          this.setLogError(
            "No se encontró datos para eliminar - individual", {aplicar: aplicar, diente: diente, codH: codH}
          );
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
          this.setLogError(
            "No se encontró datos para eliminar - grupal", {aplicar: aplicar, codH: codH, evento: evento}
          );
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
    },
    activarLog() {
      this.lc.activarLog = true;
      this.lc.logErrors = [];
      return true;
    },
    reiniciarLog() {
      this.lc.logErrors = [];
      return true;
    },
    getLogErrors() {
      return this.lc.logErrors;
    },
    setLogError(descripcion, data) {
      if (this.lc.activarLog) {
        this.lc.logErrors.push({descripcion: descripcion, data: data});
        return true;
      }
      return false;
    }
  };

  minsaOdontogramaData.Odontograma = Odontograma;
})(minsaOdontogramaData || (minsaOdontogramaData = {}));

var dOdont = new minsaOdontogramaData.Odontograma();
