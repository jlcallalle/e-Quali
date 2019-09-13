/**
 * @fileoverview ucOdontogram_manager Model&Data odontograma.
 * @version 2.0 Beta
 * @author: César Ac. <cesarunipe@gmail.com>
 * @lib: ucOdontogram
 * */
/**
 *
 * @namespace: ucOdontogram_data
 * @descriptions variable que almacena data de odontogramas,
 */
var ucOdontogram_data = {};
/**
 *
 * @namespace: ucOdontogram_model
 * @descriptions variable que almacena datos preestablecidos y las funcionalidades del odontograma,
 */
var ucOdontogram_model = {
  "opc": {
    "opc01": {
      "nombre": "Aparato ortodóntico fijo",
      "atributos": {
        "hallazgo": false,
        "afectacion": "N",
        "estado": "B",
        "txtColor": "A",
        "especificacion": "",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "afectaciones": {"N": "ninguno", "I": "Inicio", "M": "Intermedio", "F": "Fin"},
        "estados": {"B": {"nombre": "Bueno", "color": "blue"}, "M": {"nombre": "Malo", "color": "red"}}
      },
      "datosRequerido": "rango"
    },
    "opc02": {
      "nombre": "Aparato ortodóntico removible",
      "atributos": {
        "hallazgo": false,
        "afectacion": "N",
        "estado": "B",
        "especificacion": "",
      },
      "opciones": {
        "afectaciones": {"N": "ninguno", "I": "Inicio", "M": "Intermedio", "F": "Fin"},
        "estados": {"B": {"nombre": "Bueno", "color": "blue"}, "M": {"nombre": "Malo", "color": "red"}}
      },
      "datosRequerido": "rango"
    },
    "opc03": {
      "nombre": "Caries",
      "atributos": {
        "hallazgo": false,
        "tipo": "",
        "txtColor": "R",
        "superficiesXTipo": "",
        "pcv": {
          "sp00": {"estado": "N", "tipo": ""},
          "spd": {"estado": "N", "tipo": ""},
          "spc": {"estado": "N", "tipo": ""},
          "spm": {"estado": "N", "tipo": ""},
          "spsd": {"estado": "N", "tipo": ""},
          "spsm": {"estado": "N", "tipo": ""},
        },
        "pcm": {
          "sp00": {"estado": "N", "tipo": ""},
          "spv": {"estado": "N", "tipo": ""},
          "spl": {"estado": "N", "tipo": ""},
        },
        "pcl": {
          "sp00": {"estado": "N", "tipo": ""},
          "spm": {"estado": "N", "tipo": ""},
          "spc": {"estado": "N", "tipo": ""},
          "spd": {"estado": "N", "tipo": ""},
          "spsd": {"estado": "N", "tipo": ""},
          "spsc": {"estado": "N", "tipo": ""},
          "spsm": {"estado": "N", "tipo": ""},
        },
        "pcd": {
          "sp00": {"estado": "N", "tipo": ""},
          "spv": {"estado": "N", "tipo": ""},
          "spl": {"estado": "N", "tipo": ""},
        },
        "pco": {
          "sp00": {"estado": "N", "tipo": ""},
          "spvd": {"estado": "N", "tipo": ""},
          "spvc": {"estado": "N", "tipo": ""},
          "spvm": {"estado": "N", "tipo": ""},
          "splm": {"estado": "N", "tipo": ""},
          "splc": {"estado": "N", "tipo": ""},
          "spld": {"estado": "N", "tipo": ""},
          "spsvd": {"estado": "N", "tipo": ""},
          "spsvm": {"estado": "N", "tipo": ""},
          "spscd": {"estado": "N", "tipo": ""},
          "spscc": {"estado": "N", "tipo": ""},
          "spscm": {"estado": "N", "tipo": ""},
          "spsld": {"estado": "N", "tipo": ""},
          "spslm": {"estado": "N", "tipo": ""},
        }
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "tipos": {
          "MB": "Mancha Blanca",
          "CE": "Lesión de Caries dental a nivel del esmalte",
          "CD": "Lesión de Caries dental a nivel del dentina",
          "CDP": "Lesión de Caries dental a nivel de la Dentina/Pulpa",
        },
        "estados": {"N": {"nombre": "Sin caries", "color": "white"}, "S": {"nombre": "Con caries", "color": "red"}}
      },
      "datosRequerido": "unico"
    },
    "opc04": {
      "nombre": "Corona",
      "atributos": {
        "hallazgo": false,
        "tipo": "",
        "txtColor": "A",
        "especificacion": "",
        "estadoCorona": "N",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "tipos": {
          "CM": "Corona Metálica",
          "CF": "Corona Fenestrada",
          "CMC": "Corona Metal Cerámica",
          "CV": "Corona Veneer",
          "CJ": "Corona Jacket",
        },
        "estadosCorona": {"N": "Ninguno", "B": "Bueno", "M": "Malo"},
      },
      "datosRequerido": "unico"
    },
    "opc05": {
      "nombre": "Corona temporal",
      "atributos": {
        "hallazgo": false,
        "value": "N",
        "txtColor": "R",
        "especificacion": ""
      },
      "opciones": {
        "values": {"N": "Ninguno", "CT": "Corona temporal"}
      },
      "datosRequerido": "unico"
    },
    "opc06": {
      "nombre": "Diastema",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
        "afectacion": "N"
      },
      "opciones": {
        "afectaciones": {"N": "Ninguno", "D": "Derecha", "Z": "Izquierda"}
      },
      "datosRequerido": "contiguos"
    },
    "opc07": {
      "nombre": "Pieza dentaria ausente",
      "atributos": {
        "hallazgo": false,
        "tipo": "N",
        "especificacion": "",
      },
      "opciones": {
        "tipos": {
          "N": "Ninguno",
          "P": "Perdido por caries",
          "O": "Otras causas de ausencia"
        }
      },
      "datosRequerido": "unico"
    },
    "opc08": {
      "nombre": "Diente discrónico",
      "atributos": {
        "hallazgo": false,
        "value": "",
        "txtColor": "A",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {
          "DIS": "Discrónico"
        }
      },
      "datosRequerido": "unico"
    },
    "opc09": {
      "nombre": "Pieza dentaria ectópico",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
        "value": "",
        "ubicaciontxt": "",
        "txtColor": "A",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {
          "E": "Ectópico"
        }
      },
      "datosRequerido": "unico"
    },
    "opc10": {
      "nombre": "Pieza dentaria en erupción",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
      },
      "datosRequerido": "unico"
    },
    "opc11": {
      "nombre": "Pieza dentaria en clavija",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
      },
      "datosRequerido": "unico"
    },
    "opc12": {
      "nombre": "Pieza dentaria extruido",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
      },
      "datosRequerido": "unico"
    },
    "opc13": {
      "nombre": "Pieza dentaria intruido",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
      },
      "datosRequerido": "unico"
    },
    "opc14": {
      "nombre": "Edéntulo total",
      "atributos": {
        "hallazgo": false
      },
      "datosRequerido": "total"
    },
    "opc15": {
      "nombre": "Fractura",
      "atributos": {
        "hallazgo": false,
        "direccionubicacion": "N",
        "especificacion": "",
      },
      "opciones": {
        "direccionubicaciones": {
          "N": "Ninguno",
          "CSI": "Corona Sup-Inf",
          "CZD": "Corona Izq-Der",
          "CZSDI": "Corona IzqSup-DerInf",
          "CZIDS": "Corona IzqInf-DerSup",
          "CRSI": "Corona Raiz Sup-Inf",
          "CRZD": "Corona Raiz Izq-Der",
          "CRZSDI": "Corona Raiz IzqSup-DerInf",
          "CRZIDS": "Corona Raiz IzqInf-DerSup"
        }
      },
      "datosRequerido": "unico"
    },
    "opc16": {
      "nombre": "Fusión",
      "atributos": {
        "hallazgo": false,
        "afectacion": "N",
        "especificacion": "",
      },
      "opciones": {
        "afectaciones": {"N": "Ninguno", "D": "Derecha", "Z": "Izquierda"},
      },
      "datosRequerido": "contiguos"
    },
    "opc17": {
      "nombre": "Giroversión",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
        "giro": "N",
      },
      "opciones": {
        "giros": {"N": "Ninguno", "D": "Derecha", "Z": "Izquierda"}
      },
      "datosRequerido": "unico"
    },
    "opc18": {
      "nombre": "Impactación",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
        "value": "",
        "txtColor": "A",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {
          "I": "Impactación"
        }
      },
      "datosRequerido": "unico"
    },
    "opc19": {
      "nombre": "Implante dental",
      "atributos": {
        "hallazgo": false,
        "value": "",
        "txtColor": "A",
        "especificacion": "",
        "estadoImp": "N",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {
          "IMP": "Implante"
        },
        "estadosImp": {"N": "Ninguno", "B": "Bueno", "M": "Malo"},
      },
      "datosRequerido": "unico"
    },
    "opc20": {
      "nombre": "Macrodoncia",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
        "value": "",
        "txtColor": "A",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {
          "MAC": "Macrodoncia"
        }
      },
      "datosRequerido": "unico"
    },
    "opc21": {
      "nombre": "Microdoncia",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
        "value": "",
        "txtColor": "A",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {
          "MIC": "Microdoncia"
        }
      },
      "datosRequerido": "unico"
    },
    "opc22": {
      "nombre": "Migración",
      "atributos": {
        "hallazgo": false,
        "direccion": "N",
      },
      "opciones": {
        "direcciones": {"N": "Ninguno", "D": "Derecha", "Z": "Izquierda"}
      },
      "datosRequerido": "unico"
    },
    "opc23": {
      "nombre": "Movilidad",
      "atributos": {
        "hallazgo": false,
        "nivel": "N",
        "txtColor": "R",
        "especificacion": ""
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "niveles": {"N": "Ninguno", "M1": "M1", "M2": "M2", "M3": "M3"}
      },
      "datosRequerido": "unico"
    },
    "opc24": {
      "nombre": "Espigo - Muñon",
      "atributos": {
        "hallazgo": false,
        "estado": "",
        "especificacion": "",
      },
      "opciones": {
        "estados": {"B": {"nombre": "Bueno", "color": "blue"}, "M": {"nombre": "Malo", "color": "red"}}
      },
      "datosRequerido": "unico"
    },
    "opc25": {
      "nombre": "Prótesis fija",
      "atributos": {
        "hallazgo": false,
        "afectacion": "N",
        "estado": "B",
        "especificacion": "",
      },
      "opciones": {
        "afectaciones": {"N": "ninguno", "I": "Inicio", "M": "Intermedio", "F": "Fin"},
        "estados": {"B": {"nombre": "Bueno", "color": "blue"}, "M": {"nombre": "Malo", "color": "red"}}
      },
      "datosRequerido": "rango"
    },
    "opc26": {
      "nombre": "Prótesis removible",
      "atributos": {
        "hallazgo": false,
        "afectacion": "N",
        "estado": "B",
        "especificacion": "",
      },
      "opciones": {
        "afectaciones": {"N": "ninguno", "I": "Inicio", "M": "Intermedio", "F": "Fin", "especificacion": ""},
        "estados": {"B": {"nombre": "Bueno", "color": "blue"}, "M": {"nombre": "Malo", "color": "red"}},
      },
      "datosRequerido": "rango"
    },
    "opc27": {
      "nombre": "Prótesis total",
      "atributos": {
        "hallazgo": false,
        "estado": "B",
        "especificacion": "",
      },
      "opciones": {
        "estados": {"B": {"nombre": "Bueno", "color": "blue"}, "M": {"nombre": "Malo", "color": "red"}}
      },
      "datosRequerido": "total"
    },
    "opc28": {
      "nombre": "Remanente radicular",
      "atributos": {
        "hallazgo": false,
        "value": "N",
        "txtColor": "R",
        "especificacion": ""
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {"N": "Ninguna", "RR": "Remanente radicular"},
      },
      "datosRequerido": "unico"
    },
    "opc29": {//azul con relleno
      "nombre": "Restauración definitiva",
      "atributos": {
        "hallazgo": false,
        "tipoMaterial": "",
        "superficiesXTipoMat": "",
        "estado": "N",
        "txtColor": "A",
        "estadoRest": "A",
        "pcv": {
          "sp00": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spd": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spc": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spm": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spsd": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spsm": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
        },
        "pcm": {
          "sp00": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spv": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spl": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
        },
        "pcl": {
          "sp00": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spm": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spc": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spd": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spsd": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spsc": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spsm": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
        },
        "pcd": {
          "sp00": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spv": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spl": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
        },
        "pco": {
          "sp00": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spvd": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spvc": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spvm": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "splm": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "splc": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spld": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spsvd": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spsvm": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spscd": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spscc": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spscm": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spsld": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
          "spslm": {"estado": "N", "estadoRest": "N", "tipomaterial": ""},
        },
      },
      "opciones": {
        "estadosRest": {"N": "Ninguno", "B": "Bueno", "M": "Malo"},
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "tipomateriales": {
          "AM": "Amalgama", "R": "Resina", "IV": "Ionómero de vidrio",
          "IM": "Incrustación metálica", "IE": "Incrustación estética", "C": "Carilla Estética"
        },
        "estados": {"N": {"nombre": "Sin"}, "S": {"nombre": "Con"}}
      },
      "datosRequerido": "unico"
    },
    "opc30": {//rojo contorno
      "nombre": "Restauración temporal",
      "atributos": {
        "hallazgo": false,
        "pcv": {
          "sp00": {"estado": "N"},
          "spd": {"estado": "N"},
          "spc": {"estado": "N"},
          "spm": {"estado": "N"},
          "spsd": {"estado": "N"},
          "spsm": {"estado": "N"},
        },
        "pcm": {
          "sp00": {"estado": "N"},
          "spv": {"estado": "N"},
          "spl": {"estado": "N"},
        },
        "pcl": {
          "sp00": {"estado": "N"},
          "spm": {"estado": "N"},
          "spc": {"estado": "N"},
          "spd": {"estado": "N"},
          "spsd": {"estado": "N"},
          "spsc": {"estado": "N"},
          "spsm": {"estado": "N"},
        },
        "pcd": {
          "sp00": {"estado": "N"},
          "spv": {"estado": "N"},
          "spl": {"estado": "N"},
        },
        "pco": {
          "sp00": {"estado": "N"},
          "spvd": {"estado": "N"},
          "spvc": {"estado": "N"},
          "spvm": {"estado": "N"},
          "splm": {"estado": "N"},
          "splc": {"estado": "N"},
          "spld": {"estado": "N"},
          "spsvd": {"estado": "N"},
          "spsvm": {"estado": "N"},
          "spscd": {"estado": "N"},
          "spscc": {"estado": "N"},
          "spscm": {"estado": "N"},
          "spsld": {"estado": "N"},
          "spslm": {"estado": "N"},
        }
      },
      "opciones": {
        "estados": {"N": {"nombre": "Sin"}, "S": {"nombre": "Con"}}
      },
      "datosRequerido": "unico"
    },
    "opc31": {
      "nombre": "Sellantes",
      "atributos": {
        "hallazgo": false,
        "value": "N",
        "estado": "N",
        "txtColor": "A",
        "vd": {"sp00": {"estado": "N"}},
        "vm": {"sp00": {"estado": "N"}},
        "ovd": {"sp00": {"estado": "N"}},
        "ovm": {"sp00": {"estado": "N"}},
        "ocd": {"sp00": {"estado": "N"}},
        "occ": {"sp00": {"estado": "N"}},
        "ocm": {"sp00": {"estado": "N"}},
        "old": {"sp00": {"estado": "N"}},
        "olm": {"sp00": {"estado": "N"}},
        "ld": {"sp00": {"estado": "N"}},
        "lc": {"sp00": {"estado": "N"}},
        "lm": {"sp00": {"estado": "N"}},
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "estados": {
          "N": {"nombre": "Sin", "color": ""},
          "B": {"nombre": "Bueno", "color": "blue"},
          "M": {"nombre": "Malo", "color": "red"}
        },
        "values": {
          "N": "Ninguna",
          "S": "Sellante",
        }
      },
      "datosRequerido": "unico"
    },
    "opc32": {
      "nombre": "Semi-impactación",
      "atributos": {
        "hallazgo": false,
        "value": "N",
        "txtColor": "A",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {"N": "Ninguno", "SI": "SI"}
      },
      "datosRequerido": "unico"
    },
    "opc33": {
      "nombre": "Superficie desgastada",
      "atributos": {
        "hallazgo": false,
        "value": "N",
        "especificacion": "",
        "txtColor": "R",
        "desgasteVestibular": "N",
        "desgasteOclusal": "N",
        "desgasteLingual": "N",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {"N": "Ninguno", "DES": "Desgastada"},
        "desgastes": {"N": "No", "S": "Si"}
      },
      "datosRequerido": "unico"
    },
    "opc34": {
      "nombre": "Supernumerario",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
        "ubicacion": "N"
      },
      "opciones": {
        "ubicaciones": {"N": "Ninguno", "D": "Derecha", "Z": "Izquierda"}
      },
      "datosRequerido": "contiguos"
    },
    "opc35": {
      "nombre": "Transposición",
      "atributos": {
        "hallazgo": false,
        "lado": "N",
        "especificacion": "",
      },
      "opciones": {
        "lados": {"N": "ninguno", "D": "Lado derecha", "Z": "Lado izquierda"}
      },
      "datosRequerido": "contiguos"
    },
    "opc36": {
      "nombre": "Tratamiento pulpar",
      "atributos": {
        "hallazgo": false,
        "tipo": "",
        "estado": "",
        "txtColor": "A",
        "especificacion": "",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "tipos": {"TC": "Tratamiento de conducto", "PC": "Pulpectomia", "PP": "Pulpotomía"},
        "estados": {
          "B": {"nombre": "Bueno", "color": "blue"},
          "M": {"nombre": "Malo", "color": "red"}
        }
      },
      "datosRequerido": "unico"
    },
    "opc37": {
      "nombre": "Defectos de desarrollo del esmalte",
      "sigla": "DDE",
      "atributos": {
        "hallazgo": false,
        "value": "",
        "especificacion": "",
        "txtColor": "R"
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {
          "HP": "Hipoplasia",
          "HM": "Hipomineralización",
          "O": "Opacidades del Esmalte",
          "D": "Decoloración del Esmalte",
        }
      },
      "datosRequerido": "unico"
    },
    "opc38": {
      "nombre": "Fosas y Fisuras profundas",
      "atributos": {
        "hallazgo": false,
        "value": "",
        "txtColor": "A"
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {
          "FFP": "Fosas y Fisuras profundas"
        }
      },
      "datosRequerido": "unico"
    },
    "opc39": {
      "nombre": "Posición Dentaria",
      "atributos": {
        "hallazgo": false,
        "especificacion": "",
        "value": "",
        "txtColor": "A",
      },
      "opciones": {
        "txtColores": {"A": "Azul", "R": "Rojo"},
        "values": {
          "M": "Mesializado",
          "D": "Distalizado",
          "V": "Vestibulizado",
          "P": "Palatinizado",
          "L": "Lingualizado",
        }
      },
      "datosRequerido": "unico"
    },
    "opc40": {
      "nombre": "Geminación",
      "atributos": {
        "hallazgo": false,
        "especificacion": ""
      },
      "datosRequerido": "contiguos"
    },
    "opc41": {
      "nombre": "Especificaciones",
      "atributos": {
        "hallazgo": false,
        "opcgeneral": "opc41",
        "especificacion": "",
      },
      "datosRequerido": "total"
    },
    "opc42": {
      "nombre": "Observaciones",
      "atributos": {
        "hallazgo": false,
        "opcgeneral": "opc42",
        "observacion": "",
      },
      "datosRequerido": "total"
    },
  },
  "opcCodToKey": [
    "opc03",
    "opc37",
    "opc31",
    "opc15",
    "opc38",
    "opc07",
    "opc10",
    "opc29",
    "opc30",
    "opc14",
    "opc34",
    "opc12",
    "opc13",
    "opc06",
    "opc17",
    "opc39",
    "opc11",
    "opc09",
    "opc20",
    "opc21",
    "opc16",
    "opc40",
    "opc18",
    "opc33",
    "opc28",
    "opc23",
    "opc05",
    "opc04",
    "opc24",
    "opc19",
    "opc01",
    "opc02",
    "opc25",
    "opc26",
    "opc27",
    "opc36",
    "opc35",
    "opc41",
    "opc42",
  ],
  "data": {
    1: {"cod": "18", "tipo": "S5", "ubic": "SZP", "model": "sz4", "position": "SP", "opc": {}},
    2: {"cod": "17", "tipo": "S5", "ubic": "SZP", "model": "sz4", "position": "SP", "opc": {}},
    3: {"cod": "16", "tipo": "S5", "ubic": "SZP", "model": "sz4", "position": "SP", "opc": {}},
    4: {"cod": "15", "tipo": "S4", "ubic": "SZP", "model": "sz3", "position": "SP", "opc": {}},
    5: {"cod": "14", "tipo": "S2", "ubic": "SZP", "model": "sz2", "position": "SP", "opc": {}},
    6: {"cod": "13", "tipo": "S1", "ubic": "SZP", "model": "sz1", "position": "SP", "opc": {}},
    7: {"cod": "12", "tipo": "S1", "ubic": "SZP", "model": "sz1", "position": "SP", "opc": {}},
    8: {"cod": "11", "tipo": "S1", "ubic": "SZP", "model": "sz1", "position": "SP", "opc": {}},
    9: {"cod": "21", "tipo": "S1", "ubic": "SDP", "model": "sz1", "position": "SP", "opc": {}},
    10: {"cod": "22", "tipo": "S1", "ubic": "SDP", "model": "sd1", "position": "SP", "opc": {}},
    11: {"cod": "23", "tipo": "S1", "ubic": "SDP", "model": "sd1", "position": "SP", "opc": {}},
    12: {"cod": "24", "tipo": "S3", "ubic": "SDP", "model": "sd2", "position": "SP", "opc": {}},
    13: {"cod": "25", "tipo": "S4", "ubic": "SDP", "model": "sd3", "position": "SP", "opc": {}},
    14: {"cod": "26", "tipo": "S5", "ubic": "SDP", "model": "sd4", "position": "SP", "opc": {}},
    15: {"cod": "27", "tipo": "S5", "ubic": "SDP", "model": "sd4", "position": "SP", "opc": {}},
    16: {"cod": "28", "tipo": "S5", "ubic": "SDP", "model": "sd4", "position": "SP", "opc": {}},
    31: {"cod": "48", "tipo": "I3", "ubic": "IZP", "model": "iz3", "position": "IP", "opc": {}},
    32: {"cod": "47", "tipo": "I3", "ubic": "IZP", "model": "iz3", "position": "IP", "opc": {}},
    33: {"cod": "46", "tipo": "I3", "ubic": "IZP", "model": "iz3", "position": "IP", "opc": {}},
    34: {"cod": "45", "tipo": "I2", "ubic": "IZP", "model": "iz2", "position": "IP", "opc": {}},
    35: {"cod": "44", "tipo": "I2", "ubic": "IZP", "model": "iz2", "position": "IP", "opc": {}},
    36: {"cod": "43", "tipo": "I1", "ubic": "IZP", "model": "iz1", "position": "IP", "opc": {}},
    37: {"cod": "42", "tipo": "I1", "ubic": "IZP", "model": "iz1", "position": "IP", "opc": {}},
    38: {"cod": "41", "tipo": "I1", "ubic": "IZP", "model": "iz1", "position": "IP", "opc": {}},
    39: {"cod": "31", "tipo": "I1", "ubic": "IDP", "model": "id1", "position": "IP", "opc": {}},
    40: {"cod": "32", "tipo": "I1", "ubic": "IDP", "model": "id1", "position": "IP", "opc": {}},
    41: {"cod": "33", "tipo": "I1", "ubic": "IDP", "model": "id1", "position": "IP", "opc": {}},
    42: {"cod": "34", "tipo": "I2", "ubic": "IDP", "model": "id2", "position": "IP", "opc": {}},
    43: {"cod": "35", "tipo": "I2", "ubic": "IDP", "model": "id2", "position": "IP", "opc": {}},
    44: {"cod": "36", "tipo": "I3", "ubic": "IDP", "model": "id3", "position": "IP", "opc": {}},
    45: {"cod": "37", "tipo": "I3", "ubic": "IDP", "model": "id3", "position": "IP", "opc": {}},
    46: {"cod": "38", "tipo": "I3", "ubic": "IDP", "model": "id3", "position": "IP", "opc": {}},
    51: {"cod": "55", "tipo": "S5", "ubic": "SZT", "model": "sz4", "position": "ST", "opc": {}},
    52: {"cod": "54", "tipo": "S5", "ubic": "SZT", "model": "sz4", "position": "ST", "opc": {}},
    53: {"cod": "53", "tipo": "S1", "ubic": "SZT", "model": "sz1", "position": "ST", "opc": {}},
    54: {"cod": "52", "tipo": "S1", "ubic": "SZT", "model": "sz1", "position": "ST", "opc": {}},
    55: {"cod": "51", "tipo": "S1", "ubic": "SZT", "model": "sz1", "position": "ST", "opc": {}},
    56: {"cod": "61", "tipo": "S1", "ubic": "SDT", "model": "sd1", "position": "ST", "opc": {}},
    57: {"cod": "62", "tipo": "S1", "ubic": "SDT", "model": "sd1", "position": "ST", "opc": {}},
    58: {"cod": "63", "tipo": "S1", "ubic": "SDT", "model": "sd1", "position": "ST", "opc": {}},
    59: {"cod": "64", "tipo": "S5", "ubic": "SDT", "model": "sd4", "position": "ST", "opc": {}},
    60: {"cod": "65", "tipo": "S5", "ubic": "SDT", "model": "sd4", "position": "ST", "opc": {}},
    71: {"cod": "85", "tipo": "I3", "ubic": "IZT", "model": "iz3", "position": "IT", "opc": {}},
    72: {"cod": "84", "tipo": "I3", "ubic": "IZT", "model": "iz3", "position": "IT", "opc": {}},
    73: {"cod": "83", "tipo": "I1", "ubic": "IZT", "model": "iz1", "position": "IT", "opc": {}},
    74: {"cod": "82", "tipo": "I1", "ubic": "IZT", "model": "iz1", "position": "IT", "opc": {}},
    75: {"cod": "81", "tipo": "I1", "ubic": "IZT", "model": "iz1", "position": "IT", "opc": {}},
    76: {"cod": "71", "tipo": "I1", "ubic": "IDT", "model": "id1", "position": "IT", "opc": {}},
    77: {"cod": "72", "tipo": "I1", "ubic": "IDT", "model": "id1", "position": "IT", "opc": {}},
    78: {"cod": "73", "tipo": "I1", "ubic": "IDT", "model": "id1", "position": "IT", "opc": {}},
    79: {"cod": "74", "tipo": "I3", "ubic": "IDT", "model": "id3", "position": "IT", "opc": {}},
    80: {"cod": "75", "tipo": "I3", "ubic": "IDT", "model": "id3", "position": "IT", "opc": {}}
  },
  "dataCodToKey": {},
  "config": {
    "sec": {
      "S0": {
        "opciones": [
          "opc03", "opc04", "opc08", "opc09",
          "opc18", "opc19", "opc20",
          "opc21", "opc23",
          "opc32", "opc33", "opc37", "opc38", "opc39"],
        "dimension": {"w": 150, "h": 120},
        "ubic": {
          "SP": {"x": 15, "y": 0},
          "ST": {"x": 15, "y": 0},
          "IT": {"x": 15, "y": 570},
          "IP": {"x": 15, "y": 570}
        }
      },
      "S1": {
        "opciones": ["opc35"],
        "dimension": {"w": 180, "h": 30},
        "ubic": {
          "SP": {"x": 0, "y": 180},
          "ST": {"x": 0, "y": 180},
          "IT": {"x": 0, "y": 480},
          "IP": {"x": 0, "y": 480}
        }
      },
      "S2": {
        "opciones": ["opc25"],
        "dimension": {"w": 180, "h": 30},
        "ubic": {
          "SP": {"x": 0, "y": 210},
          "ST": {"x": 0, "y": 210},
          "IT": {"x": 0, "y": 450},
          "IP": {"x": 0, "y": 450}
        }
      },
      "S3": {
        "opciones": ["opc26"],
        "dimension": {"w": 180, "h": 30},
        "ubic": {
          "SP": {"x": 0, "y": 240},
          "ST": {"x": 0, "y": 240},
          "IT": {"x": 0, "y": 420},
          "IP": {"x": 0, "y": 420}
        }
      },
      "S4": {
        "opciones": ["opc01"],
        "dimension": {"w": 180, "h": 30},
        "ubic": {
          "SP": {"x": 0, "y": 270},
          "ST": {"x": 0, "y": 270},
          "IT": {"x": 0, "y": 390},
          "IP": {"x": 0, "y": 390}
        }
      },
      "S5": {
        "opciones": ["opc02"],
        "dimension": {"w": 180, "h": 30},
        "ubic": {
          "SP": {"x": 0, "y": 300},
          "ST": {"x": 0, "y": 300},
          "IT": {"x": 0, "y": 360},
          "IP": {"x": 0, "y": 360}
        }
      },
      "S6": {
        "opciones": ["opc11", "opc16", "opc40"],
        "dimension": {"w": 180, "h": 60},
        "ubic": {
          "SP": {"x": 0, "y": 120},
          "ST": {"x": 0, "y": 120},
          "IT": {"x": 0, "y": 510},
          "IP": {"x": 0, "y": 510}
        }
      },
      "S7": {
        "opciones": [
          "opc03", "opc04", "opc05", "opc06",
          "opc07", "opc10", "opc14", "opc15",
          "opc24", "opc27", "opc28", "opc29",
          "opc30", "opc31", "opc34", "opc36"],
        "dimension": {"w": 180, "h": 240},
        "ubic": {
          "SP": {"x": 0, "y": 330},
          "ST": {"x": 0, "y": 330},
          "IT": {"x": 0, "y": 120},
          "IP": {"x": 0, "y": 120}
        }
      },
      "S8": {
        "opciones": ["opc12", "opc13", "opc17", "opc22"],
        "dimension": {"w": 180, "h": 120},
        "ubic": {
          "SP": {"x": 0, "y": 570},
          "ST": {"x": 0, "y": 570},
          "IT": {"x": 0, "y": 0},
          "IP": {"x": 0, "y": 0}
        }
      }
    },
    "defaulData": {}
  },
  "action": {
    "load": {
      "loadData": function (dataUserDientes) {
      },
      "listOpcHallazgos": function () {
      },
      "resetGlVars": function () {
      }
    },
    "hallazgo": {
      "act01": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act02": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act03": {
        "addFnLsUserButtonDet": function () {
        },
        "addFnLsUserExecDet": function () {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        },
        "addRemoveSave": function (datDientes, param) {
        }
      },
      "act04": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act05": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act06": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act07": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act08": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act09": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act10": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act11": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act12": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act13": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act14": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act15": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act16": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act17": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act18": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act19": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act20": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act21": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act22": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act23": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act24": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act25": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act26": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act27": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act28": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act29": {
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        },
        "addRemoveSave": function (datDientes, param) {
        }
      },
      "act30": {
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        },
        "addRemoveSave": function (datDientes, param) {
        }
      },
      "act31": {
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        },
        "addRemoveSave": function (datDientes, param) {
        }
      },
      "act32": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act33": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act34": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act35": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act36": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act37": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act38": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act39": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act40": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act41": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
      "act42": {
        "addFnLsUserButton": function () {
        },
        "addFnLsUserExec": function () {
        },
        "addView": function (param) {
        },
        "addSave": function (datDientes, param) {
        },
        "removeSave": function (datDientes, param) {
        }
      },
    },
    "select": {
      "fnselect0": function () {
      },
      "fnselect1": function () {
      },
      "fnselect2": function () {
      }
    },
    "resumen": {
      "sumCariados": function () {
      },
      "sumCurados": function () {
      },
    },
    "conn": {
      "data": {
        "dientesini": {},
        "dientesactual": {},
        "hashini": "",
        "hashactual": "",
        "pkid": ""
      },
      "local": {
        "getdata": function () {
        },
        "getdataJSON": function () {
        },
        "setdata": function () {
        }
      },
      "server": {
        "getdata": function () {
        },
        "setdata": function () {
        },
        "getdatreset": function () {
        }
      }
    }
  },
  "glvar": {
    "select": {
      "opc": "",
      "det": "",
      "cod1": "",
      "cod2": "",
      "msg1": "",
      "msg2": "",
      "fnselect0": "",
      "fnselect1": "",
      "fnselect2": "",
      "fnexec": ""
    }
  },
  "decoraciones": {
    "fnCarasSurcosAgregarAdornos": function (opcAct) {
    },
    "fnCarasSurcosQuitarAdornos": function (opcAct) {
    },
  }
};
/**
 * @file
 * Provee, eventos aplicables al odontograma.
 *
 */

$(document).ready(function () {
  $("body").on("click", ".ucOdontogramElemTextCodDiente", function () {
    var obj = this;
    if (ucOdontogram_model.glvar.select.fnselect1.length > 2) {
      $(this).attr("fill", "red");
      $(this).attr("stroke", "red");
      eval(ucOdontogram_model.glvar.select.fnselect1);
    } else if (ucOdontogram_model.glvar.select.fnselect2.length > 2) {
      $(this).attr("fill", "red");
      $(this).attr("stroke", "red");
      eval(ucOdontogram_model.glvar.select.fnselect2);
    } else if (ucOdontogram_model.glvar.select.fnselect0.length > 2) {
      $(".ucOdontogramElemTextCodDiente").attr("fill", "white");
      $(".ucOdontogramElemTextCodDiente").attr("stroke", "white");
      $(this).attr("fill", "red");
      $(this).attr("stroke", "red");
      eval(ucOdontogram_model.glvar.select.fnselect0);
    }
  });
  $("body").on("click", ".ucOdontogramButtonDelete", function () {
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    var _elemEventPkOpcDelete = $(this).data("pkopc");
    var _elemEventPkIdDelete = parseInt($(this).data("pkid"));
    var eventObjDelete = misDientes.eventos[_elemEventPkOpcDelete][_elemEventPkIdDelete];
    delete misDientes.eventos[_elemEventPkOpcDelete][_elemEventPkIdDelete];
    var _param = eventObjDelete.param;
    eval("ucOdontogram_model.action.hallazgo.act" + (eventObjDelete.option.substring(3, 5)) +
      ".removeSave(misDientes,_param)");
    $("#" + dataKey).ucOdontogram(misDientes);
  });
  $("body").on("click", ".ucOdontogramButtonSaveAll", function () {
    ucOdontogram_model.action.conn.server.setdata();
  });
  $("body").on("click", ".ucOdontogramButtonRefresh", function () {
    ucOdontogram_model.action.conn.server.getdata();
  });
  $("body").on("click", ".ucOdontogramButtonReset", function () {
    ucOdontogram_model.action.conn.server.getdatreset();
  });
  $("body").on("dblclick", ".ucOdontogramElemCaraDientDeco", function () {
    var _param = {
      "cod": $(this).data("cod").toString(),
      "cara": $(this).data("cara"),
      "parte": $(this).data("parte"),
      "estado": "",
      "estViewDetalle": ucOdontogram_model.glvar.select.det,
    };
    if (ucOdontogram_model.glvar.select.opc === "act03") {
      _param["estado"] = $(this).data("est03");
      ucOdontogram_model.action.hallazgo.act03.addRemoveSave(_param);
      ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos(ucOdontogram_model.glvar.select.opc);
    }
    if (ucOdontogram_model.glvar.select.opc === "act29") {
      _param["estado"] = $(this).data("est29");
      ucOdontogram_model.action.hallazgo.act29.addRemoveSave(_param);
      ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos(ucOdontogram_model.glvar.select.opc);
    }
    if (ucOdontogram_model.glvar.select.opc === "act30") {
      _param["estado"] = $(this).data("est30");
      ucOdontogram_model.action.hallazgo.act30.addRemoveSave(_param);
      ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos(ucOdontogram_model.glvar.select.opc);
    }
  });
  $("body").on("dblclick", ".ucOdontogramElemSurcoDientDeco", function () {
    var _param = {
      "cod": $(this).data("cod").toString(),
      "cara": $(this).data("cara"),
      "parte": $(this).data("parte"),
      "estado": "",
      "estViewDetalle": ucOdontogram_model.glvar.select.det,
    };
    if (ucOdontogram_model.glvar.select.opc === "act31") {
      _param["estado"] = $(this).data("est31");
      ucOdontogram_model.action.hallazgo.act31.addRemoveSave(_param);
      ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos(ucOdontogram_model.glvar.select.opc);
    }
  });
  $("body").on("click", ".ucOdontogramButtonItemHallazgosOpc", function () {
    var opcAct = $(this).data("opc");
    var opcDet = $(this).data("det");
    if ((ucOdontogram_model.glvar.select.opc === opcAct) && (ucOdontogram_model.glvar.select.det === opcDet)) {
      ucOdontogram_model.glvar.select.opc = "";
      ucOdontogram_model.glvar.select.det = "";
      $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      ucOdontogram_model.action.load.resetGlVars();
      return false;
    }
    ucOdontogram_model.glvar.select.opc = opcAct;
    ucOdontogram_model.glvar.select.det = opcDet;
    if ((typeof ucOdontogram_model.action.hallazgo[opcAct] === "object") &&
      (typeof ucOdontogram_model.action.hallazgo[opcAct].addFnLsUserButton !== "undefined")) {
      ucOdontogram_model.action.hallazgo[opcAct].addFnLsUserButton(this);
    } else {
      var dataKey = ucOdontogram_manager("getactive");
      var misDientes = ucOdontogram_manager("get", dataKey);
      if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
        $("#" + misDientes.config.idMsgEvento).html("Haga click sobre la cara de la Pieza Dentaria");
      }
    }
    $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
    $(".ucOdontogramButtonItemHallazgosDetOpc").removeClass("select");
    $(this).addClass("select");
    return true;
  });
  $("body").on("click", ".ucOdontogramButtonItemHallazgosDetOpc", function () {
    var opcAct = $(this).data("opc");
    var opcDet = $(this).data("det");
    if ((ucOdontogram_model.glvar.select.opc === opcAct) && (ucOdontogram_model.glvar.select.det === opcDet)) {
      ucOdontogram_model.decoraciones.fnCarasSurcosQuitarAdornos(opcAct);
      if (opcDet === "SI") {
        $(".ucOdontogramHallazgoEventosDetViewCerrar").click();
      } else {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
        $(".ucOdontogramButtonItemHallazgosDetOpc").removeClass("select");
        ucOdontogram_model.action.load.resetGlVars();
      }
      return false;
    }
    ucOdontogram_model.glvar.select.opc = opcAct;
    ucOdontogram_model.glvar.select.det = opcDet;
    ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos(opcAct);
    if ((typeof ucOdontogram_model.action.hallazgo[opcAct] === "object") &&
      (typeof ucOdontogram_model.action.hallazgo[opcAct].addFnLsUserButtonDet !== "undefined")) {
      ucOdontogram_model.action.hallazgo[opcAct].addFnLsUserButtonDet(this);
    } else {
      var dataKey = ucOdontogram_manager("getactive");
      var misDientes = ucOdontogram_manager("get", dataKey);
      if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
        $("#" + misDientes.config.idMsgEvento).html("Haga click sobre la cara de la Pieza Dentaria");
      }
    }
    $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
    $(".ucOdontogramButtonItemHallazgosDetOpc").removeClass("select");
    $(this).addClass("select");
    return true;
  });
  $("body").on("click", ".ucOdontogramViewPiezaDentariaViewClose", function () {
    $("#ucOdontogramViewPiezaDentariaView").css("display", "none");
  });
  $("body").on("click", ".ucOdontogramHallazgoEventosDetViewCerrar", function () {
    $(".ucOdontogramViewPiezaDentariaViewClose").click();
    $("#ucOdontogramHallazgoEventosDetFormView").css("display", "none");
    $("#ucOdontogramHallazgoEventosDetView").html("");
    ucOdontogram_model.decoraciones.fnCarasSurcosQuitarAdornos(ucOdontogram_model.glvar.select.opc);
    ucOdontogram_model.glvar.select.opc = "";
    ucOdontogram_model.glvar.select.det = "";
    $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
    $(".ucOdontogramButtonItemHallazgosDetOpc").removeClass("select");
    ucOdontogram_model.action.load.resetGlVars();
  });
  $("body").on("click", "#ucOdontogramDocumentPNGdownload", function () {
    var dataKey = ucOdontogram_manager("getactive");
    var objSvg = $("#" + dataKey + " > svg")[0];
    var svgWidth = parseInt(objSvg.getAttribute("width").replace("px", ""));
    var svgHeight = parseInt(objSvg.getAttribute("height").replace("px", ""));
    var html = document.querySelector("svg").parentNode.innerHTML;
    var imgsrc = "data:image/svg+xml;charset=utf-8;base64," + Base64.encode(html);
    var canvas = document.createElement("canvas"), context = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.setAttribute("width", svgWidth);
    canvas.setAttribute("height", svgHeight);
    var image = new Image;
    image.src = imgsrc;
    image.onload = function () {
      context.drawImage(image, 0, 0);
      var canvasdata = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      var a = document.getElementById("ucOdontogramDocumentPNGdownlLink");
      a.textContent = "Descargar";
      a.download = "export_" + Date.now() + ".png";
      a.href = canvasdata;
      canvas.parentNode.removeChild(canvas);
    };
  });
});

function ucOdontogram_manager(action, keyval, val_data) {
//keyval: valor de key - ID de odontograma,
//action: add:data,delete,update:data,active|actionAllData
  var _actionsAllData = ["getactive", "clean", "inactive"];
  var _opcActions = ["add", "delete", "update", "active", "get", "exist", "actionAllData"];
  var _opcval = false;
  if ((typeof action === "string") && (typeof keyval === "undefined")) {
    for (var i in _actionsAllData) {
      if (_actionsAllData[i] === action) {
        _opcval = true;
      }
    }
    if (_opcval) {
      keyval = action;
      action = "actionAllData";
    }
    _opcval = false;
  }
  if (!(typeof keyval === "string") || !(typeof action === "string")) {
    return false;
  }
  for (var i in _opcActions) {
    if (_opcActions[i] === action) {
      _opcval = true;
    }
  }
  if (_opcval === false) {
    alert("ERROR-modelManager: opcion no valida");
    return false;
  }
  var funExistKey = function (keyval) {
    if (typeof ucOdontogram_data[keyval] === "object") {
      return true;
    } else {
      return false;
    }
  };
  var funAdd = function (_keyval, _val_data) {
    if (funExistKey(_keyval) === true) {
      return false;
    }
    ucOdontogram_data[_keyval] = {};
    ucOdontogram_data[_keyval]["datamodel"] = _val_data;
    funActive(_keyval);
    return true;
  };
  var funGet = function (_keyval) {
    if (funExistKey(_keyval) === false) {
      return false;
    }
    return ucOdontogram_data[_keyval]["datamodel"];
  };
  var funUpdate = function (_keyval, _val_data) {
    if (funExistKey(_keyval) === false) {
      return false;
    }
    ucOdontogram_data[_keyval]["datamodel"] = _val_data;
    return true;
  };
  var funDelete = function (_keyval) {
    var _active = "";
    var _logActive = "";
    if (funExistKey(_keyval) === false) {
      return false;
    }
    if (ucOdontogram_data[_keyval]["active"] === true) {
      _logActive = true;
    }
    delete ucOdontogram_data[_keyval];
    if (_logActive) {
      for (var i in ucOdontogram_data) {
        _active = i;
      }
      funActive(_active);
    }
    return true;
  };
  var funActive = function (_keyval) {
    var _tmpobjConf = {};
    if (funExistKey(_keyval) === false) {
      return false;
    }
    var _logActive = ucOdontogram_data[_keyval]["active"];
    if (!_logActive) {
      for (var i in ucOdontogram_data) {
        if (_keyval === i) {
          ucOdontogram_data[i]["active"] = true;
          _tmpobjConf = ucOdontogram_data[i];
          delete ucOdontogram_data[i];
          ucOdontogram_data[i] = {};
          ucOdontogram_data[i] = _tmpobjConf;
        } else {
          ucOdontogram_data[i]["active"] = false;
        }
      }
    }
    return true;
  };
  var funInactive = function () {
    for (var i in ucOdontogram_data) {
      ucOdontogram_data[i]["active"] = false;
    }
    return true;
  };
  var funGetActive = function () {
    for (var i in ucOdontogram_data) {
      if (ucOdontogram_data[i]["active"] === true) {
        return i;
      }
    }
    return false;
  };
  var funClean = function () {
    for (var i in ucOdontogram_data) {
      if (!($("#" + i).length > 0)) {
        delete ucOdontogram_data[i];
      }
    }
    var _keyLast = "";
    if (!funGetActive()) {
      for (var i in ucOdontogram_data) {
        _keyLast = i;
      }
      if (typeof _keyLast === "string") {
        funActive(_keyLast);
      }
    }
    return true;
  };
  switch (action) {
    case "add":
      if (!(typeof val_data === "object")) {
        return false;
      }
      funAdd(keyval, val_data);
      return true;
      break;
    case "update":
      funUpdate(keyval, val_data);
      return true;
      break;
    case "delete":
      funDelete(keyval);
      return true;
      break;
    case "active":
      funActive(keyval);
      return true;
      break;
    case "get":
      return funGet(keyval);
      break;
    case "exist":
      return funExistKey(keyval);
      break;
    case "actionAllData":
      switch (keyval) {
        case "getactive":
          return funGetActive();
          break;
        case "clean":
          return funClean();
          break;
        case "inactive":
          return funInactive();
          break;
        default:
          return false;
      }
      break;
    default:
      return false;
  }
  return false;
}

function ucOdontogram_loadAction() {
  var fnViewEventos = function (datDientes) {
    var eventos = datDientes.eventos;
    var _html = "";
    var _count = 0;
    for (var opc in eventos) {
      for (var i in eventos[opc]) {
        _count++;
        _html += "<div class='ucOdontogramEvent'>";
        _html += _count.toString() + ": ";
        _html += eval("ucOdontogram_model.opc.opc" + eventos[opc][i].option.substring(3, 5) + ".nombre");
        _html += " <span style='font-weight: bold;'>" + eventos[opc][i].title + "</span> ";
        if (datDientes.config.id_list_event_opc !== "view") {
          _html += "<span data-pkopc='" + opc + "' data-pkid='" + i +
            "' class='ucOdontogramButtonDelete'>&nbsp;X&nbsp;</span>";
        }
        _html += "</div>";
      }
    }
    if ((datDientes.config.idListEventos.length > 2) && ($("#" + datDientes.config.idListEventos).length > 0)) {
      $("#" + datDientes.config.idListEventos).html(_html);
    }
    if ((ucOdontogram_model.glvar.select.opc === "act03") ||
      (ucOdontogram_model.glvar.select.opc === "act29") ||
      (ucOdontogram_model.glvar.select.opc === "act30") ||
      (ucOdontogram_model.glvar.select.opc === "act31")) {
      return false;
    }
    ucOdontogram_model.glvar.select.opc = "";
    ucOdontogram_model.glvar.select.det = "";
    $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
    return true;
  };
  var fnAddEventos = function (datDientes, action, params, option, title) {
    var eventos = datDientes.eventos;
    if (!ucOdontogram_model.opcCodToKey.includes(option)) {
      return false;
    }
    if (typeof eventos[option] === "undefined") {
      eventos[option] = {};
    }
    var _datEventKeys = Object.keys(eventos[option]);
    var _keyRegistrar = 0;
    if (typeof _datEventKeys.length === "undefined" || _datEventKeys.length === 0) {
      _datEventKeys = {};
      _keyRegistrar = 1;
    } else {
      _keyRegistrar = parseInt(_datEventKeys[(_datEventKeys.length - 1)]) + 1;
    }
    if (typeof option === "undefined") {
      option = "default Option";
    }
    if (typeof title === "undefined") {
      title = "default Title";
    }
    eventos[option][_keyRegistrar] = {"action": action, "param": params, "option": option, "title": title};
    fnViewEventos(datDientes);
    return eventos;
  };
  //----------------CONN - Local - Server
  ucOdontogram_model.action.conn.local.getdata = function () {
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    return {"data": misDientes.data, "eventos": misDientes.eventos};
  };
  ucOdontogram_model.action.conn.local.getdataJSON = function () {
    var misDientes = ucOdontogram_model.action.conn.local.getdata();
    return JSON.stringify(misDientes);
  };
  ucOdontogram_model.action.conn.local.getdataJSONEncodeBase64 = function () {
    var misDientesJSON = ucOdontogram_model.action.conn.local.getdataJSON();
    var MisDientesJSONBase64 = Base64.encode(misDientesJSON)
    var csrfmiddlewaretoken = $("[name=csrfmiddlewaretoken]").val();
    csrftoken = $("[name=csrfmiddlewaretoken]").val();
    var val_egreso = ""
    if ($("#id_egreso_odontograma").is(":checked")) {
      val_egreso = $("#id_egreso_odontograma").val()
    }
    return {
      "misdientesjsonbase64": MisDientesJSONBase64,
      "csrfmiddlewaretoken": csrfmiddlewaretoken,
      "length": MisDientesJSONBase64.length,
      "hashmd5": md5(MisDientesJSONBase64),
      "egreso": val_egreso,
      "observaciones": $("#id_observaciones_odontograma").val()
    };
  };
  ucOdontogram_model.action.conn.local.setdata = function (misDientes) {
    var dataKey = ucOdontogram_manager("getactive");
    $("#" + dataKey).ucOdontogram(misDientes);
    return misDientes;
  };
  ucOdontogram_model.action.conn.local.setdataJSON = function (misDientesJSON) {
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = JSON.parse(misDientesJSON);
    ucOdontogram_model.action.conn.local.setdata(misDientes);
    return misDientes;
  };
  ucOdontogram_model.action.conn.server.getdata = function () {
    var _data = {};
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    $.ajax({
      url: misDientes.config.urlwsSave,
      data: _data,
      type: "GET",
      beforeSend: function () {
        if ((misDientes.config.idSaveMsg.length > 2) && ($("#" + misDientes.config.idSaveMsg).length > 0)) {
          $("#" + misDientes.config.idSaveMsg).html("....guardando");
        }
      },
      success: function (misDientesJSONBase64data) {
        var misDientAll = {};
        if ((typeof misDientesJSONBase64data["misdientesjsonbase64"] === "string") &&
          (misDientesJSONBase64data["misdientesjsonbase64"].length > 10)) {
          misDientAll = JSON.parse(Base64.decode(misDientesJSONBase64data["misdientesjsonbase64"]));
        } else {
          misDientAll = ucOdontogram_model.config.defaulData;
        }
        if (typeof misDientAll["eventos"] === "object") {
          misDientes.eventos = misDientAll.eventos;
        }
        if (typeof misDientAll["data"] === "object") {
          misDientes.data = Object.assign({}, misDientAll.data);
        }
        if (typeof misDientesJSONBase64data["egreso"] === "string") {
          if ((misDientesJSONBase64data["egreso"] == "FIN") && !($("#id_egreso_odontograma").is(":checked"))) {
            $("#id_egreso_odontograma").click();
          }
        }
        if (typeof misDientesJSONBase64data["observaciones"] === "string") {
          $("#id_observaciones_odontograma").val(misDientesJSONBase64data["observaciones"]);
        }
        $(document).ready(function () {
          $("#" + dataKey).ucOdontogram(misDientes);
          fnViewEventos(misDientes);
        });
        if ((misDientes.config.idSaveMsg.length > 2) && ($("#" + misDientes.config.idSaveMsg).length > 0)) {
          $("#" + misDientes.config.idSaveMsg).html("...");
        }
      },
      error: function (result) {
        if ((misDientes.config.idSaveMsg.length > 2) && ($("#" + misDientes.config.idSaveMsg).length > 0)) {
          $("#" + misDientes.config.idSaveMsg).html("<span style='color:red;'>ocurrio un error</span>");
        }
      }
    });
  };
  ucOdontogram_model.action.conn.server.getdatreset = function () {
    var _data = {"reset": "ok"};
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    $.ajax({
      url: misDientes.config.urlwsSave,
      data: _data,
      type: "GET",
      beforeSend: function () {
        if ((misDientes.config.idSaveMsg.length > 2) && ($("#" + misDientes.config.idSaveMsg).length > 0)) {
          $("#" + misDientes.config.idSaveMsg).html("....guardando");
        }
      },
      success: function (misDientesJSONBase64data) {
        var misDientAll = {};
        if ((typeof misDientesJSONBase64data["misdientesjsonbase64"] === "string") &&
          (misDientesJSONBase64data["misdientesjsonbase64"].length > 10)) {
          misDientAll = JSON.parse(Base64.decode(misDientesJSONBase64data["misdientesjsonbase64"]));
        } else {
          misDientAll = ucOdontogram_model.config.defaulData;
        }
        if (typeof misDientAll["eventos"] === "object") {
          misDientes.eventos = misDientAll.eventos;
        }
        if (typeof misDientAll["data"] === "object") {
          misDientes.data = Object.assign({}, misDientAll.data);
        }
        if (typeof misDientesJSONBase64data["egreso"] === "string") {
          if ((misDientesJSONBase64data["egreso"] == "FIN") && !($("#id_egreso_odontograma").is(":checked"))) {
            $("#id_egreso_odontograma").click();
          }
        }
        if (typeof misDientesJSONBase64data["observaciones"] === "string") {
          $("#id_observaciones_odontograma").val(misDientesJSONBase64data["observaciones"]);
        }
        $(document).ready(function () {
          $("#" + dataKey).ucOdontogram(misDientes);
          fnViewEventos(misDientes);
        });
        if ((misDientes.config.idSaveMsg.length > 2) && ($("#" + misDientes.config.idSaveMsg).length > 0)) {
          $("#" + misDientes.config.idSaveMsg).html("...");
        }
      },
      error: function (result) {
        if ((misDientes.config.idSaveMsg.length > 2) && ($("#" + misDientes.config.idSaveMsg).length > 0)) {
          $("#" + misDientes.config.idSaveMsg).html("<span style='color:red;'>ocurrio un error</span>");
        }
      }
    });
  };
  ucOdontogram_model.action.conn.server.setdata = function () {
    var dataLocal = ucOdontogram_model.action.conn.local.getdataJSONEncodeBase64();
    var _data = dataLocal;
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);

    $.ajax({
      url: misDientes.config.urlwsSave,
      data: _data,
      type: "POST",
      beforeSend: function () {
        if ((misDientes.config.idSaveMsg.length > 2) && ($("#" + misDientes.config.idSaveMsg).length > 0)) {
          $("#" + misDientes.config.idSaveMsg).html("....guardando");
        }
      },
      success: function (result) {
        if ((misDientes.config.idSaveMsg.length > 2) && ($("#" + misDientes.config.idSaveMsg).length > 0)) {
          $("#" + misDientes.config.idSaveMsg).html("...");
        }
      },
      error: function (result) {
        if ((misDientes.config.idSaveMsg.length > 2) && ($("#" + misDientes.config.idSaveMsg).length > 0)) {
          $("#" + misDientes.config.idSaveMsg).html("<span style='color:red;'>ocurrio un error</span>");
        }
      }
    });
  };
  //----- Load model Actions: Hallazgos - INI ----------------------------------
  ucOdontogram_model.action.select.fnselect0 = function (obj) {
    ucOdontogram_model.glvar.select.cod1 = $(obj).data("cod");
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((typeof ucOdontogram_model.glvar.select.fnexec === "string") &&
      (ucOdontogram_model.glvar.select.fnexec.length > 2)) {
      if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
        $("#" + misDientes.config.idMsgEvento).html("");
      }
      eval(ucOdontogram_model.glvar.select.fnexec);
    }
  };
  ucOdontogram_model.action.select.fnselect1 = function (obj) {
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.cod1 = $(obj).data("cod");
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((typeof ucOdontogram_model.glvar.select.fnselect2 === "string") &&
      (ucOdontogram_model.glvar.select.fnselect2.length > 2)) {
      if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
        $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg2);
      }
    } else if ((typeof ucOdontogram_model.glvar.select.fnexec === "string") &&
      (ucOdontogram_model.glvar.select.fnexec.length > 2)) {
      if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
        $("#" + misDientes.config.idMsgEvento).html("");
      }
      eval(ucOdontogram_model.glvar.select.fnexec);
    }
  };
  ucOdontogram_model.action.select.fnselect2 = function (obj) {
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.cod2 = $(obj).data("cod");
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((typeof ucOdontogram_model.glvar.select.fnexec === "string") &&
      (ucOdontogram_model.glvar.select.fnexec.length > 2)) {
      if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
        $("#" + misDientes.config.idMsgEvento).html("");
      }
      eval(ucOdontogram_model.glvar.select.fnexec);
    }
  };
  //----- load decoraciones - INI ----------------------------------
  ucOdontogram_model.decoraciones.fnCarasSurcosQuitarAdornos = function (opcAct) {
    if (opcAct === "act03") {
      $(".ucOdontogramElemSurcoDiente").removeClass("ucOdontogramElemSurcoDientDeco");
      $(".ucOdontogramElemCaraDiente").removeClass("ucOdontogramElemCaraDientDeco");
    }
    if (opcAct === "act29") {
      $(".ucOdontogramElemSurcoDiente").removeClass("ucOdontogramElemSurcoDientDeco");
      $(".ucOdontogramElemCaraDiente").removeClass("ucOdontogramElemCaraDientDeco");
    }
    if (opcAct === "act30") {
      $(".ucOdontogramElemSurcoDiente").removeClass("ucOdontogramElemSurcoDientDeco");
      $(".ucOdontogramElemCaraDiente").removeClass("ucOdontogramElemCaraDientDeco");
    }
    if (opcAct === "act31") {
      $(".ucOdontogramElemSurcoDiente").removeClass("ucOdontogramElemSurcoDientDeco");
      $(".ucOdontogramElemCaraDiente").removeClass("ucOdontogramElemCaraDientDeco");
    }
  };
  ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos = function (opcAct) {
    if (opcAct === "act03") {
      $(".ucOdontogramElemSurcoDiente").removeClass("ucOdontogramElemSurcoDientDeco");
      $(".ucOdontogramElemCaraDiente").addClass("ucOdontogramElemCaraDientDeco");
    }
    if (opcAct === "act29") {
      $(".ucOdontogramElemSurcoDiente").removeClass("ucOdontogramElemSurcoDientDeco");
      $(".ucOdontogramElemCaraDiente").addClass("ucOdontogramElemCaraDientDeco");
    }
    if (opcAct === "act30") {
      $(".ucOdontogramElemSurcoDiente").removeClass("ucOdontogramElemSurcoDientDeco");
      $(".ucOdontogramElemCaraDiente").addClass("ucOdontogramElemCaraDientDeco");
    }
    if (opcAct === "act31") {
      $(".ucOdontogramElemCaraDiente").removeClass("ucOdontogramElemCaraDientDeco");
      $(".ucOdontogramElemSurcoDiente").addClass("ucOdontogramElemSurcoDientDeco");
    }
  };
  //----- load decoraciones - FIN ----------------------------------
  //----- ACT01
  ucOdontogram_model.action.hallazgo.act01.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria Inicial";
    ucOdontogram_model.glvar.select.msg2 = "Seleccione Pieza Dentaria Final";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "ucOdontogram_model.action.select.fnselect2(obj)";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act01.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act01.addFnLsUserExec = function () {
    var param = {
      "codini": ucOdontogram_model.glvar.select.cod1,
      "codfin": ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act01.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act01.addView = function (param) {
    var _template = $("#template_form_01").html();
    var _nameTemplate = "_FORM01_";
    var _nameValue = "01";
    var codDienteIni = "", codDienteFin = "";
    if (typeof param === "object") {
      if (typeof param["codini"] === "number" || typeof param["codini"] === "string") {
        codDienteIni = param["codini"].toString();
      }
      if (typeof param["codfin"] === "number" || typeof param["codfin"] === "string") {
        codDienteFin = param["codfin"].toString();
      }
    }
    _template = _template.replace("_CODINI_VALUE_", codDienteIni);
    _template = _template.replace("_CODFIN_VALUE_", codDienteFin);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act01.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act01.addSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"],
      estado = param["estado"], especificacion = param["especificacion"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc01.hallazgo = true;
      if (i === _keyini) {
        datDientes.data[i].opc.opc01.afectacion = "I";
      } else if (i === _keyfin) {
        datDientes.data[i].opc.opc01.afectacion = "F";
      } else {
        datDientes.data[i].opc.opc01.afectacion = "M";
      }
      datDientes.data[i].opc.opc01.estado = estado;
      datDientes.data[i].opc.opc01.especificacion = especificacion;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "estado": estado,
      "especificacion": especificacion,
    };
    datDientes.eventos = fnAddEventos(datDientes, "act01.addSave", params, "opc01",
      "[" + codDienteIni + "-" + codDienteFin + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act01.removeSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "estado": ucOdontogram_model.opc.opc01.atributos.estado,
      "especificacion": ucOdontogram_model.opc.opc01.atributos.especificacion,
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc01.hallazgo = false;
      datDientes.data[i].opc.opc01.afectacion = params.afectacion;
      datDientes.data[i].opc.opc01.estado = params.estado;
      datDientes.data[i].opc.opc01.especificacion = params.especificacion;
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT02
  ucOdontogram_model.action.hallazgo.act02.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria Inicial";
    ucOdontogram_model.glvar.select.msg2 = "Seleccione Pieza Dentaria Final";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "ucOdontogram_model.action.select.fnselect2(obj)";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act02.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act02.addFnLsUserExec = function () {
    var param = {
      "codini": ucOdontogram_model.glvar.select.cod1,
      "codfin": ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act02.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act02.addView = function (param) {
    var _template = $("#template_form_02").html();
    var _nameTemplate = "_FORM02_";
    var _nameValue = "02";
    var codDienteIni = "", codDienteFin = "";
    if (typeof param === "object") {
      if (typeof param["codini"] === "number" || typeof param["codini"] === "string") {
        codDienteIni = param["codini"].toString();
      }
      if (typeof param["codfin"] === "number" || typeof param["codfin"] === "string") {
        codDienteFin = param["codfin"].toString();
      }
    }
    _template = _template.replace("_CODINI_VALUE_", codDienteIni);
    _template = _template.replace("_CODFIN_VALUE_", codDienteFin);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act02.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act02.addSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"],
      estado = param["estado"], especificacion = param["especificacion"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc02.hallazgo = true;
      if (i === _keyini) {
        datDientes.data[i].opc.opc02.afectacion = "I";
      } else if (i === _keyfin) {
        datDientes.data[i].opc.opc02.afectacion = "F";
      } else {
        datDientes.data[i].opc.opc02.afectacion = "M";
      }
      datDientes.data[i].opc.opc02.estado = estado;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "estado": estado,
      "especificacion": especificacion,
    };
    datDientes.eventos = fnAddEventos(datDientes, "act02.addSave", params, "opc02",
      "[" + codDienteIni + "-" + codDienteFin + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act02.removeSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "estado": ucOdontogram_model.opc.opc02.atributos.estado,
      "especificacion": ucOdontogram_model.opc.opc02.atributos.especificacion,
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc02.hallazgo = false;
      datDientes.data[i].opc.opc02.afectacion = params.afectacion;
      datDientes.data[i].opc.opc02.estado = params.estado;
      datDientes.data[i].opc.opc02.especificacion = params.especificacion;
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT03
  ucOdontogram_model.action.hallazgo.act03.addFnLsUserButtonDet = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect0 = "ucOdontogram_model.action.select.fnselect0(obj)";
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act03.addFnLsUserExecDet()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
    ucOdontogram_model.action.hallazgo.act03.addViewDet();
  };//solo para el detalle
  ucOdontogram_model.action.hallazgo.act03.addFnLsUserExecDet = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogramViewPiezaDetariaDet(param.cod, "opc03");
    $("#ucOdontogramViewPiezaDentariaView").css("display", "block");
    ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos(ucOdontogram_model.glvar.select.opc);
  };//solo para el detalle
  ucOdontogram_model.action.hallazgo.act03.addRemoveSave = function (_param) {
    var codDiente = _param["cod"].toString(), cara = _param["cara"], parte = _param["parte"],
      estado = _param["estado"], estViewDetalle = _param["estViewDetalle"];
    var dataKey = ucOdontogram_manager("getactive");
    var datDientes = ucOdontogram_manager("get", dataKey);
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    if ((typeof datDientes.data[_key].opc.opc03[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc03[cara][parte] !== "undefined")) {
      if (estado === "N") { //add
        _param.estado = "S";
        _param["tipo"] = "";
        if (estViewDetalle === "SI") {
          var _count = 0;
          for (var i in ucOdontogram_model.opc.opc03.opciones.tipos) {
            _count++;
            if ($("#id_tipo_det03_" + _count).is(":checked")) {
              _param.tipo = $("#id_tipo_det03_" + _count).val();
              break;
            }
          }
          datDientes = ucOdontogram_model.action.hallazgo.act03.addSave(datDientes, _param);
          ucOdontogramViewPiezaDetariaDet(codDiente, "opc03");
        } else if (estViewDetalle === "NO") {
          datDientes = ucOdontogram_model.action.hallazgo.act03.addView(_param);
        }
        $("#" + dataKey).ucOdontogram(datDientes);
      }
      if (estado === "S") { //delete
        var _elemEventPkIdDelete = null;
        var _auxEventos = datDientes.eventos;
        for (var i in _auxEventos["opc03"]) {
          if ((_auxEventos["opc03"][i].param.cod === codDiente) &&
            (_auxEventos["opc03"][i].param.cara === cara) &&
            (_auxEventos["opc03"][i].param.parte === parte) &&
            (_auxEventos["opc03"][i].param.estado === "S")) {
            _elemEventPkIdDelete = i;
            break;
          }
        }
        if (typeof _auxEventos["opc03"][_elemEventPkIdDelete] === "object") {
          delete _auxEventos["opc03"][_elemEventPkIdDelete];
        }
        _param.estado = "N";
        datDientes = ucOdontogram_model.action.hallazgo.act03.removeSave(datDientes, _param);
        $("#" + dataKey).ucOdontogram(datDientes);
        if (estViewDetalle === "SI") {
          ucOdontogramViewPiezaDetariaDet(codDiente, "opc03");
        }
      }
      return datDientes;
    } else {
      return datDientes;
    }
  };
  ucOdontogram_model.action.hallazgo.act03.addView = function (param) {
    var _template = $("#template_form_03").html();
    var _nameTemplate = "_FORM03_";
    var _nameValue = "03";
    var codDiente = "", cara = "", parte = "", estado = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
      if (typeof param["cara"] === "number" || typeof param["cara"] === "string") {
        cara = param["cara"].toString();
      }
      if (typeof param["parte"] === "number" || typeof param["parte"] === "string") {
        parte = param["parte"].toString();
      }
      if (typeof param["estado"] === "number" || typeof param["estado"] === "string") {
        estado = param["estado"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    _template = _template.replace("_CARA_VALUE_", cara);
    _template = _template.replace("_PARTE_VALUE_", parte);
    _template = _template.replace("_ESTADO_VALUE_", estado);
    var _option_html = "";
    for (var i in ucOdontogram_model.opc.opc03.opciones.tipos) {
      _option_html += "<option value='" + i + "'>" + ucOdontogram_model.opc.opc03.opciones.tipos[i] + "</option>";
    }
    _template = _template.replace("__TIPO_OPCIONES__", _option_html);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act03.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act03.addViewDet = function () {
    var _template = $("#template_form_det_03").html();
    var _nameTemplate = "_FORMDET03_";
    var _nameValue = "det03";
    var _radiooptions_html = "";
    var _count = 0;
    for (var i in ucOdontogram_model.opc.opc03.opciones.tipos) {
      _count++;
      _radiooptions_html += "<label>";
      if (_count === 1) {
        _radiooptions_html += "<input type='radio' name='tipo' value='" + i +
          "' id='id_tipo__FORMDET03__" + _count + "' checked=''/>";
      } else {
        _radiooptions_html += "<input type='radio' name='tipo' value='" + i +
          "' id='id_tipo__FORMDET03__" + _count + "'/>";
      }
      _radiooptions_html += "<span class='text-primary'>" + ucOdontogram_model.opc.opc03.opciones.tipos[i] + "</span>";
      _radiooptions_html += "</label>";
      _radiooptions_html += "<br />";
    }
    _template = _template.replace("__TIPO_OPCIONES__", _radiooptions_html);
    _template = _template.split(_nameTemplate).join(_nameValue);
    $("#ucOdontogramHallazgoEventosDetView").html(_template);
    $("#ucOdontogramHallazgoEventosDetFormView").css("display", "block");
  };
  ucOdontogram_model.action.hallazgo.act03.addSave = function (datDientes, param) {
    var codDiente = param["cod"], cara = param["cara"], parte = param["parte"], estado = param["estado"],
      tipo = param["tipo"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    if ((typeof datDientes.data[_key].opc.opc03[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc03[cara][parte] !== "undefined")) {
      var params = {
        "cod": codDiente,
        "cara": cara,
        "parte": parte,
        "estado": estado,
        "tipo": tipo
      };
      datDientes.data[_key].opc.opc03[cara][parte].estado = estado;
      datDientes.data[_key].opc.opc03[cara][parte].tipo = tipo;
      datDientes.data[_key].opc.opc03.hallazgo = true;
      //Actualizar estado de caras
      var caraTieneCaries = false;
      for (var i in datDientes.data[_key].opc.opc03[cara]) {
        if (i !== "sp00" && datDientes.data[_key].opc.opc03[cara][i].estado === "S") {
          caraTieneCaries = true;
          break;
        }
      }
      if (caraTieneCaries === true) {
        datDientes.data[_key].opc.opc03[cara].sp00.estado = "S";
        // obtiene el valor Tipo con mayor frecuencia por superficie (auxTipoMax)
        var auxDetCaras = datDientes.data[_key].opc.opc03;
        var auxCalTipos = {};
        var auxTipoMax = "";
        var auxMax = 0;
        var auxSuperficiesXTipo = [];
        for (var i in auxDetCaras) {
          if (typeof auxDetCaras[i] === "object") {
            for (var j in auxDetCaras[i]) {
              if ((j !== "sp00") && (typeof auxDetCaras[i][j] === "object")) {
                if ((auxDetCaras[i][j].tipo !== "") && (typeof auxCalTipos[(auxDetCaras[i][j].tipo)] === "undefined")) {
                  auxCalTipos[(auxDetCaras[i][j].tipo)] = 1;
                } else if ((auxDetCaras[i][j].tipo !== "") && (typeof auxCalTipos[(auxDetCaras[i][j].tipo)] === "number")) {
                  auxCalTipos[(auxDetCaras[i][j].tipo)]++;
                }
              }
            }
          }
        }
        for (var i in auxCalTipos) {
          auxSuperficiesXTipo.push(i + ": " + auxCalTipos[i]);
          if (auxMax < auxCalTipos[i]) {
            auxTipoMax = i;
            auxMax = auxCalTipos[i];
          }
        }
        datDientes.data[_key].opc.opc03.tipo = auxTipoMax;
        datDientes.data[_key].opc.opc03.superficiesXTipo = auxSuperficiesXTipo.join(", ");
      }
      //--
      datDientes.eventos = fnAddEventos(datDientes, "act03.addSave", params, "opc03",
        "[" + codDiente + "]&DDotrahd;{" + cara + "}");
      return datDientes;
    }
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act03.removeSave = function (datDientes, param) {
    var codDiente = param["cod"], cara = param["cara"], parte = param["parte"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "cara": cara,
      "parte": parte,
      "estado": ucOdontogram_model.opc.opc03.atributos[cara][parte].estado,
      "tipo": ucOdontogram_model.opc.opc03.atributos[cara][parte].tipo
    };
    var _estados = false;
    if ((typeof datDientes.data[_key].opc.opc03[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc03[cara][parte] !== "undefined")) {
      datDientes.data[_key].opc.opc03[cara][parte].estado = params.estado;
      datDientes.data[_key].opc.opc03[cara][parte].tipo = params.tipo;
      //Actualizar estado de caras
      var caraTieneCaries = false;
      for (var i in datDientes.data[_key].opc.opc03[cara]) {
        if (i !== "sp00" && datDientes.data[_key].opc.opc03[cara][i].estado === "S") {
          caraTieneCaries = true;
          break;
        }
      }
      if (caraTieneCaries === true) {
        datDientes.data[_key].opc.opc03[cara].sp00.estado = "S";
      } else {
        datDientes.data[_key].opc.opc03[cara].sp00.estado = "N";
      }
      //--
      for (var i in datDientes.data[_key].opc.opc03) {
        if ((typeof datDientes.data[_key].opc.opc03[i] === "object") &&
          (typeof datDientes.data[_key].opc.opc03[i].sp00 === "object") &&
          (datDientes.data[_key].opc.opc03[i].sp00.estado === "S")) {
          _estados = true;
          break;
        }
      }
      datDientes.data[_key].opc.opc03.hallazgo = _estados;
      fnViewEventos(datDientes);
    }
    return datDientes;
  };
  //----- ACT04
  ucOdontogram_model.action.hallazgo.act04.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act04.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act04.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act04.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act04.addView = function (param) {
    var _template = $("#template_form_04").html();
    var _nameTemplate = "_FORM04_";
    var _nameValue = "04";
    var _option_html = "";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    for (var i in ucOdontogram_model.opc.opc04.opciones.tipos) {
      if (typeof ucOdontogram_model.opc.opc04.opciones.tipos[i] === "object" &&
        typeof ucOdontogram_model.opc.opc04.opciones.tipos[i]["opciones"] === "object") {
        _option_html += "<optgroup label='" + ucOdontogram_model.opc.opc04.opciones.tipos[i].nombre + "'>";
        for (var j in ucOdontogram_model.opc.opc04.opciones.tipos[i]["opciones"]) {
          _option_html += "<option value='" + j + "'>" + ucOdontogram_model.opc.opc04.opciones.tipos[i].opciones[j] +
            "</option>";
        }
        _option_html += "</optgroup>";
      } else {
        _option_html += "<option value='" + i + "'>" + ucOdontogram_model.opc.opc04.opciones.tipos[i] + "</option>";
      }
    }
    _template = _template.replace("__TIPO_OPCIONES__", _option_html);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act04.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act04.addSave = function (datDientes, param) {
    var codDiente = param["cod"], tipo = param["tipo"],
      especificacion = param["especificacion"], estadoCorona = param["estadoCorona"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "tipo": tipo,
      "especificacion": especificacion,
      "estadoCorona": estadoCorona,
    };
    datDientes.data[_key].opc.opc04.hallazgo = true;
    datDientes.data[_key].opc.opc04.tipo = tipo;
    datDientes.data[_key].opc.opc04.especificacion = especificacion;
    datDientes.data[_key].opc.opc04.estadoCorona = estadoCorona;
    datDientes.eventos = fnAddEventos(datDientes, "act04.addSave", params, "opc04", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act04.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "tipo": ucOdontogram_model.opc.opc04.atributos.tipo,
      "especificacion": ucOdontogram_model.opc.opc04.atributos.especificacion,
      "estadoCorona": ucOdontogram_model.opc.opc04.atributos.estadoCorona,
    };
    datDientes.data[_key].opc.opc04.hallazgo = false;
    datDientes.data[_key].opc.opc04.tipo = params.tipo;
    datDientes.data[_key].opc.opc04.especificacion = params.especificacion;
    datDientes.data[_key].opc.opc04.estadoCorona = params.estadoCorona;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT05
  ucOdontogram_model.action.hallazgo.act05.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act05.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act05.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act05.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act05.addView = function (param) {
    var _template = $("#template_form_05").html();
    var _nameTemplate = "_FORM05_";
    var _nameValue = "05";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act05.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act05.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": "CT",
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc05.hallazgo = true;
    datDientes.data[_key].opc.opc05.value = params.value;
    datDientes.data[_key].opc.opc05.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act05.addSave", params, "opc05", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act05.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": ucOdontogram_model.opc.opc05.atributos.value,
      "especificacion": ucOdontogram_model.opc.opc05.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc05.hallazgo = false;
    datDientes.data[_key].opc.opc05.value = params.value;
    datDientes.data[_key].opc.opc05.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT06
  ucOdontogram_model.action.hallazgo.act06.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria Anterior";
    ucOdontogram_model.glvar.select.msg2 = "Seleccione Pieza Dentaria Posterior";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "ucOdontogram_model.action.select.fnselect2(obj)";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act06.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act06.addFnLsUserExec = function () {
    var param = {
      "codini": ucOdontogram_model.glvar.select.cod1,
      "codfin": ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act06.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act06.addView = function (param) {
    var _template = $("#template_form_06").html();
    var _nameTemplate = "_FORM06_";
    var _nameValue = "06";
    var codDienteIni = "", codDienteFin = "";
    if (typeof param === "object") {
      if (typeof param["codini"] === "number" || typeof param["codini"] === "string") {
        codDienteIni = param["codini"].toString();
      }
      if (typeof param["codfin"] === "number" || typeof param["codfin"] === "string") {
        codDienteFin = param["codfin"].toString();
      }
    }
    _template = _template.replace("_CODINI_VALUE_", codDienteIni);
    _template = _template.replace("_CODFIN_VALUE_", codDienteFin);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act06.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act06.addSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"], especificacion = param["especificacion"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (Math.abs(_keyini - _keyfin) !== 1) {
      _keyfin = _keyini + 1;
    }
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    if ((_keyfin === 17) || (_keyfin === 47) || (_keyfin === 61) || (_keyfin === 81)) {
      _aux = _keyini;
      _keyini = _aux - 1;
      _keyfin = _aux;
    }
    var params = {
      "codini": datDientes.data[_keyini].cod,
      "codfin": datDientes.data[_keyfin].cod,
      "especificacion": especificacion,
    };
    datDientes.data[_keyini].opc.opc06.hallazgo = true;
    datDientes.data[_keyini].opc.opc06.afectacion = "D";
    datDientes.data[_keyini].opc.opc06.especificacion = especificacion;
    datDientes.data[_keyfin].opc.opc06.hallazgo = true;
    datDientes.data[_keyfin].opc.opc06.afectacion = "Z";
    datDientes.data[_keyfin].opc.opc06.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act06.addSave", params, "opc06",
      "[" + params.codini + "-" + params.codfin + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act06.removeSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "afectacion": ucOdontogram_model.opc.opc06.atributos.afectacion,
      "especificacion": ucOdontogram_model.opc.opc06.atributos.especificacion,
    };
    datDientes.data[_keyini].opc.opc06.hallazgo = false;
    datDientes.data[_keyini].opc.opc06.afectacion = params.afectacion;
    datDientes.data[_keyini].opc.opc06.especificacion = params.especificacion;
    datDientes.data[_keyfin].opc.opc06.hallazgo = false;
    datDientes.data[_keyfin].opc.opc06.afectacion = params.afectacion;
    datDientes.data[_keyfin].opc.opc06.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT07
  ucOdontogram_model.action.hallazgo.act07.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria que nose observa";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act07.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act07.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act07.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act07.addView = function (param) {
    var _template = $("#template_form_07").html();
    var _nameTemplate = "_FORM07_";
    var _nameValue = "07";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act07.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act07.addSave = function (datDientes, param) {
    var codDiente = param["cod"], tipo = param["tipo"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "tipo": tipo,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc07.hallazgo = true;
    datDientes.data[_key].opc.opc07.tipo = tipo;
    datDientes.data[_key].opc.opc07.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act07.addSave", params, "opc07", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act07.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "tipo": ucOdontogram_model.opc.opc07.atributos.tipo,
      "especificacion": ucOdontogram_model.opc.opc07.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc07.hallazgo = false;
    datDientes.data[_key].opc.opc17.tipo = params.tipo;
    datDientes.data[_key].opc.opc17.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT08
  ucOdontogram_model.action.hallazgo.act08.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act08.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act08.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act08.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act08.addView = function (param) {
    var _template = $("#template_form_08").html();
    var _nameTemplate = "_FORM08_";
    var _nameValue = "08";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act08.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act08.addSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": "DIS",
    };
    datDientes.data[_key].opc.opc08.hallazgo = true;
    datDientes.data[_key].opc.opc08.value = params.value;
    datDientes.eventos = fnAddEventos(datDientes, "act08.addSave", params, "opc08", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act08.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {"cod": codDiente};
    datDientes.data[_key].opc.opc08.hallazgo = false;
    datDientes.data[_key].opc.opc08.value = ucOdontogram_model.opc.opc04.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT09
  ucOdontogram_model.action.hallazgo.act09.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act09.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act09.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act09.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act09.addView = function (param) {
    var _template = $("#template_form_09").html();
    var _nameTemplate = "_FORM09_";
    var _nameValue = "09";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act09.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act09.addSave = function (datDientes, param) {
    var codDiente = param["cod"], ubicaciontxt = param["ubicaciontxt"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": "E",
      "ubicaciontxt": ubicaciontxt,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc09.hallazgo = true;
    datDientes.data[_key].opc.opc09.value = params.value;
    datDientes.data[_key].opc.opc09.ubicaciontxt = ubicaciontxt;
    datDientes.data[_key].opc.opc09.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act09.addSave", params, "opc09", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act09.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "ubicaciontxt": ucOdontogram_model.opc.opc09.atributos.ubicaciontxt,
      "especificacion": ucOdontogram_model.opc.opc09.atributos.especificacion
    };
    datDientes.data[_key].opc.opc09.hallazgo = false;
    datDientes.data[_key].opc.opc09.value = params.value;
    datDientes.data[_key].opc.opc09.ubicaciontxt = params.ubicaciontxt;
    datDientes.data[_key].opc.opc09.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT10
  ucOdontogram_model.action.hallazgo.act10.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act10.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act10.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act10.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act10.addView = function (param) {
    var _template = $("#template_form_10").html();
    var _nameTemplate = "_FORM10_";
    var _nameValue = "10";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act10.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act10.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key1 = ucOdontogram_model.dataCodToKey[(parseInt(codDiente))];
    var params = {
      "cod": codDiente,
      "especificacion": especificacion,
    };
    datDientes.data[_key1].opc.opc10.hallazgo = true;
    datDientes.data[_key1].opc.opc10.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act10.addSave", params, "opc10", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act10.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key1 = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "especificacion": ucOdontogram_model.opc.opc10.atributos.especificacion,
    };
    datDientes.data[_key1].opc.opc10.hallazgo = false;
    datDientes.data[_key1].opc.opc10.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT11
  ucOdontogram_model.action.hallazgo.act11.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act11.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act11.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act11.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act11.addView = function (param) {
    var _template = $("#template_form_11").html();
    var _nameTemplate = "_FORM11_";
    var _nameValue = "11";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act11.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act11.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc11.hallazgo = true;
    datDientes.data[_key].opc.opc11.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act11.addSave", params, "opc11", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act11.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "especificacion": ucOdontogram_model.opc.opc11.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc11.hallazgo = false;
    datDientes.data[_key].opc.opc11.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT12
  ucOdontogram_model.action.hallazgo.act12.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act12.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act12.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act12.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act12.addView = function (param) {
    var _template = $("#template_form_12").html();
    var _nameTemplate = "_FORM12_";
    var _nameValue = "12";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act12.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act12.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc12.hallazgo = true;
    datDientes.data[_key].opc.opc12.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act12.addSave", params, "opc12", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act12.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "especificacion": ucOdontogram_model.opc.opc12.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc12.hallazgo = false;
    datDientes.data[_key].opc.opc12.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT13
  ucOdontogram_model.action.hallazgo.act13.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act13.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act13.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act13.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act13.addView = function (param) {
    var _template = $("#template_form_13").html();
    var _nameTemplate = "_FORM13_";
    var _nameValue = "13";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act13.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act13.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc13.hallazgo = true;
    datDientes.data[_key].opc.opc13.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act13.addSave", params, "opc13", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act13.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "especificacion": ucOdontogram_model.opc.opc13.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc13.hallazgo = false;
    datDientes.data[_key].opc.opc13.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT14
  ucOdontogram_model.action.hallazgo.act14.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act14.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
    eval(ucOdontogram_model.glvar.select.fnexec);
  };
  ucOdontogram_model.action.hallazgo.act14.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act14.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act14.addView = function (param) {
    var _template = $("#template_form_14").html();
    var _nameTemplate = "_FORM14_";
    var _nameValue = "14";
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act14.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act14.addSave = function (datDientes, param) {
    var ubicDientes = param["ubic"];
    if ((typeof ubicDientes !== "string") || !(ubicDientes === "DS" || ubicDientes === "DI")) {
      return false;
    }
    var params = {
      "ubic": ubicDientes
    };
    for (var i in datDientes.data) {
      if ((ubicDientes === "DS") && ((datDientes.data[i].position === "SP") ||
        (datDientes.data[i].position === "ST"))) {
        datDientes.data[i].opc.opc14.hallazgo = true;
      } else if ((ubicDientes === "DI") && ((datDientes.data[i].position === "IP") ||
        (datDientes.data[i].position === "IT"))) {
        datDientes.data[i].opc.opc14.hallazgo = true;
      }
    }
    datDientes.eventos = fnAddEventos(datDientes, "act14.addSave", params, "opc14", "{" + ubicDientes + "}");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act14.removeSave = function (datDientes, param) {
    var ubicDientes = param["ubic"];
    if ((typeof ubicDientes !== "string") || !(ubicDientes === "DS" || ubicDientes === "DI")) {
      return false;
    }
    for (var i in datDientes.data) {
      if ((ubicDientes === "DS") && ((datDientes.data[i].position === "SP") ||
        (datDientes.data[i].position === "ST"))) {
        datDientes.data[i].opc.opc14.hallazgo = false;
      } else if ((ubicDientes === "DI") && ((datDientes.data[i].position === "IP") ||
        (datDientes.data[i].position === "IT"))) {
        datDientes.data[i].opc.opc14.hallazgo = false;
      }
    }
    var params = {"ubic": ubicDientes};
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT15
  ucOdontogram_model.action.hallazgo.act15.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act15.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act15.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act15.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act15.addView = function (param) {
    var _template = $("#template_form_15").html();
    var _nameTemplate = "_FORM15_";
    var _nameValue = "15";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        _param["direccionubicacion"] = _param["ubicacion"] + _param["direccion"];
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act15.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act15.addSave = function (datDientes, param) {
    var codDiente = param["cod"], direccionubicacion = param["direccionubicacion"],
      especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "direccionubicacion": direccionubicacion,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc15.hallazgo = true;
    datDientes.data[_key].opc.opc15.direccionubicacion = direccionubicacion;
    datDientes.data[_key].opc.opc15.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act15.addSave", params, "opc15", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act15.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "direccionubicacion": ucOdontogram_model.opc.opc15.atributos.direccionubicacion,
      "especificacion": ucOdontogram_model.opc.opc15.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc15.hallazgo = false;
    datDientes.data[_key].opc.opc15.direccionubicacion = ucOdontogram_model.opc.opc15.atributos.direccionubicacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT16
  ucOdontogram_model.action.hallazgo.act16.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria Inicial";
    ucOdontogram_model.glvar.select.msg2 = "Seleccione Pieza Dentaria Final";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "ucOdontogram_model.action.select.fnselect2(obj)";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act16.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act16.addFnLsUserExec = function () {
    var param = {
      "codini": ucOdontogram_model.glvar.select.cod1,
      "codfin": ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act16.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act16.addView = function (param) {
    var _template = $("#template_form_16").html();
    var _nameTemplate = "_FORM16_";
    var _nameValue = "16";
    var codDienteIni = "", codDienteFin = "";
    if (typeof param === "object") {
      if (typeof param["codini"] === "number" || typeof param["codini"] === "string") {
        codDienteIni = param["codini"].toString();
      }
      if (typeof param["codfin"] === "number" || typeof param["codfin"] === "string") {
        codDienteFin = param["codfin"].toString();
      }
    }
    _template = _template.replace("_CODINI_VALUE_", codDienteIni);
    _template = _template.replace("_CODFIN_VALUE_", codDienteFin);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act16.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act16.addSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"],
      especificacion = param["especificacion"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (Math.abs(_keyini - _keyfin) !== 1) {
      _keyfin = _keyini + 1;
    }
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": datDientes.data[_keyini].cod,
      "codfin": datDientes.data[_keyfin].cod,
      "especificacion": especificacion
    };
    datDientes.data[_keyini].opc.opc16.hallazgo = true;
    datDientes.data[_keyini].opc.opc16.afectacion = "D";
    datDientes.data[_keyini].opc.opc16.especificacion = especificacion;
    datDientes.data[_keyfin].opc.opc16.hallazgo = true;
    datDientes.data[_keyfin].opc.opc16.afectacion = "Z";
    datDientes.data[_keyfin].opc.opc16.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act16.addSave", params, "opc16",
      "[" + datDientes.data[_keyini].cod + "-" + datDientes.data[_keyfin].cod + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act16.removeSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "especificacion": ucOdontogram_model.opc.opc16.atributos.especificacion
    };
    datDientes.data[_keyini].opc.opc16.hallazgo = false;
    datDientes.data[_keyini].opc.opc16.afectacion = ucOdontogram_model.opc.opc16.atributos.afectacion;
    datDientes.data[_keyfin].opc.opc16.especificacion = ucOdontogram_model.opc.opc16.atributos.especificacion;
    datDientes.data[_keyini].opc.opc16.hallazgo = false;
    datDientes.data[_keyfin].opc.opc16.afectacion = ucOdontogram_model.opc.opc16.atributos.afectacion;
    datDientes.data[_keyfin].opc.opc16.especificacion = ucOdontogram_model.opc.opc16.atributos.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT17
  ucOdontogram_model.action.hallazgo.act17.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act17.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act17.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act17.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act17.addView = function (param) {
    var _template = $("#template_form_17").html();
    var _nameTemplate = "_FORM17_";
    var _nameValue = "17";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act17.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act17.addSave = function (datDientes, param) {
    var codDiente = param["cod"], giro = param["giro"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "giro": giro,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc17.hallazgo = true;
    datDientes.data[_key].opc.opc17.giro = giro;
    datDientes.data[_key].opc.opc17.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act17.addSave", params, "opc17", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act17.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = ucOdontogram_model.dataCodToKey[(parseInt(codDiente))];
    var params = {
      "cod": codDiente,
      "giro": ucOdontogram_model.opc.opc17.atributos.giro,
      "especificacion": ucOdontogram_model.opc.opc17.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc17.hallazgo = false;
    datDientes.data[_key].opc.opc17.giro = params.giro;
    datDientes.data[_key].opc.opc17.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT18
  ucOdontogram_model.action.hallazgo.act18.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act18.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act18.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act18.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act18.addView = function (param) {
    var _template = $("#template_form_18").html();
    var _nameTemplate = "_FORM18_";
    var _nameValue = "18";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act18.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act18.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": "I",
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc18.hallazgo = true;
    datDientes.data[_key].opc.opc18.value = params.value;
    datDientes.data[_key].opc.opc18.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act18.addSave", params, "opc18", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act18.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": ucOdontogram_model.opc.opc18.atributos.value,
      "especificacion": ucOdontogram_model.opc.opc18.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc18.hallazgo = false;
    datDientes.data[_key].opc.opc18.value = params.value;
    datDientes.data[_key].opc.opc18.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT19
  ucOdontogram_model.action.hallazgo.act19.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act19.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act19.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act19.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act19.addView = function (param) {
    var _template = $("#template_form_19").html();
    var _nameTemplate = "_FORM19_";
    var _nameValue = "19";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act19.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act19.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"],
      estadoImp = param["estadoImp"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    if (datDientes.data[_key].opc.opc07.hallazgo === false) {
      var dataKey = ucOdontogram_manager("getactive");
      var misDientes = ucOdontogram_manager("get", dataKey);
      if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
        $("#" + misDientes.config.idMsgEvento).html("Error en selecionar pieza dentaria");
      }
      return true;
    }
    var params = {
      "cod": codDiente,
      "value": "IMP",
      "especificacion": especificacion,
      "estadoImp": estadoImp,
    };
    datDientes.data[_key].opc.opc19.hallazgo = true;
    datDientes.data[_key].opc.opc19.value = params.value;
    datDientes.data[_key].opc.opc19.especificacion = params.especificacion;
    datDientes.data[_key].opc.opc19.estadoImp = params.estadoImp;
    datDientes.eventos = fnAddEventos(datDientes, "act19.addSave", params, "opc19", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act19.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = ucOdontogram_model.dataCodToKey[(parseInt(codDiente))];
    var params = {
      "cod": codDiente,
      "value": ucOdontogram_model.opc.opc19.atributos.value,
      "especificacion": ucOdontogram_model.opc.opc19.atributos.especificacion,
      "estadoImp": ucOdontogram_model.opc.opc19.atributos.estadoImp,
    };
    datDientes.data[_key].opc.opc19.hallazgo = false;
    datDientes.data[_key].opc.opc19.value = params.value;
    datDientes.data[_key].opc.opc19.especificacion = params.especificacion;
    datDientes.data[_key].opc.opc19.estadoImp = params.estadoImp;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT20
  ucOdontogram_model.action.hallazgo.act20.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act20.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act20.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act20.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act20.addView = function (param) {
    var _template = $("#template_form_20").html();
    var _nameTemplate = "_FORM20_";
    var _nameValue = "20";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act20.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act20.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": "MAC",
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc20.hallazgo = true;
    datDientes.data[_key].opc.opc20.value = params.value;
    datDientes.data[_key].opc.opc20.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act20.addSave", params, "opc20", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act20.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": ucOdontogram_model.opc.opc20.atributos.value,
      "especificacion": ucOdontogram_model.opc.opc20.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc20.hallazgo = false;
    datDientes.data[_key].opc.opc20.value = params.value;
    datDientes.data[_key].opc.opc20.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT21
  ucOdontogram_model.action.hallazgo.act21.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act21.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act21.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act21.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act21.addView = function (param) {
    var _template = $("#template_form_21").html();
    var _nameTemplate = "_FORM21_";
    var _nameValue = "21";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act21.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act21.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": "MIC",
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc21.hallazgo = true;
    datDientes.data[_key].opc.opc21.value = params.value;
    datDientes.data[_key].opc.opc21.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act21.addSave", params, "opc21", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act21.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": ucOdontogram_model.opc.opc21.atributos.value,
      "especificacion": ucOdontogram_model.opc.opc21.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc21.hallazgo = false;
    datDientes.data[_key].opc.opc21.value = params.value;
    datDientes.data[_key].opc.opc21.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT22
  ucOdontogram_model.action.hallazgo.act22.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act22.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act22.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act22.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act22.addView = function (param) {
    var _template = $("#template_form_22").html();
    var _nameTemplate = "_FORM22_";
    var _nameValue = "22";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act22.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act22.addSave = function (datDientes, param) {
    var codDiente = param["cod"], direccion = param["direccion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "direccion": direccion,
    };
    datDientes.data[_key].opc.opc22.hallazgo = true;
    datDientes.data[_key].opc.opc22.direccion = direccion;
    datDientes.eventos = fnAddEventos(datDientes, "act22.addSave", params, "opc22", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act22.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {"cod": codDiente, "direccion": ucOdontogram_model.opc.opc22.atributos.direccion};
    datDientes.data[_key].opc.opc22.hallazgo = false;
    datDientes.data[_key].opc.opc22.direccion = ucOdontogram_model.opc.opc22.atributos.direccion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT23
  ucOdontogram_model.action.hallazgo.act23.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act23.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act23.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act23.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act23.addView = function (param) {
    var _template = $("#template_form_23").html();
    var _nameTemplate = "_FORM23_";
    var _nameValue = "23";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    var _option_html = "";
    for (var i in ucOdontogram_model.opc.opc23.opciones.niveles) {
      if (i !== "N") {
        _option_html += "<option value='" + i + "'>" + ucOdontogram_model.opc.opc23.opciones.niveles[i] + "</option>";
      }
    }
    _template = _template.replace("__TIPO_OPCIONES__", _option_html);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act23.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act23.addSave = function (datDientes, param) {
    var codDiente = param["cod"], nivel = param["nivel"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "nivel": nivel,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc23.hallazgo = true;
    datDientes.data[_key].opc.opc23.nivel = nivel;
    datDientes.data[_key].opc.opc23.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act23.addSave", params, "opc23", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act23.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "nivel": ucOdontogram_model.opc.opc23.atributos.nivel,
      "especificacion": ucOdontogram_model.opc.opc23.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc23.hallazgo = false;
    datDientes.data[_key].opc.opc23.nivel = params.nivel;
    datDientes.data[_key].opc.opc23.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT24
  ucOdontogram_model.action.hallazgo.act24.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act24.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act24.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act24.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act24.addView = function (param) {
    var _template = $("#template_form_24").html();
    var _nameTemplate = "_FORM24_";
    var _nameValue = "24";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act24.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act24.addSave = function (datDientes, param) {
    var codDiente = param["cod"], estado = param["estado"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "estado": estado,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc24.hallazgo = true;
    datDientes.data[_key].opc.opc24.estado = estado;
    datDientes.data[_key].opc.opc24.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act24.addSave", params, "opc24", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act24.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "estado": ucOdontogram_model.opc.opc24.atributos.estado,
      "especificacion": ucOdontogram_model.opc.opc24.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc24.hallazgo = false;
    datDientes.data[_key].opc.opc24.estado = params.estado;
    datDientes.data[_key].opc.opc24.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT25
  ucOdontogram_model.action.hallazgo.act25.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria Inicial";
    ucOdontogram_model.glvar.select.msg2 = "Seleccione Pieza Dentaria Final";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "ucOdontogram_model.action.select.fnselect2(obj)";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act25.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act25.addFnLsUserExec = function () {
    var param = {
      "codini": ucOdontogram_model.glvar.select.cod1,
      "codfin": ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act25.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act25.addView = function (param) {
    var _template = $("#template_form_25").html();
    var _nameTemplate = "_FORM25_";
    var _nameValue = "25";
    var codDienteIni = "", codDienteFin = "";
    if (typeof param === "object") {
      if (typeof param["codini"] === "number" || typeof param["codini"] === "string") {
        codDienteIni = param["codini"].toString();
      }
      if (typeof param["codfin"] === "number" || typeof param["codfin"] === "string") {
        codDienteFin = param["codfin"].toString();
      }
    }
    _template = _template.replace("_CODINI_VALUE_", codDienteIni);
    _template = _template.replace("_CODFIN_VALUE_", codDienteFin);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act25.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act25.addSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"],
      estado = param["estado"], especificacion = param["especificacion"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "estado": estado,
      "especificacion": especificacion,
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc25.hallazgo = true;
      if (i === _keyini) {
        datDientes.data[i].opc.opc25.afectacion = "I";
      } else if (i === _keyfin) {
        datDientes.data[i].opc.opc25.afectacion = "F";
      } else {
        datDientes.data[i].opc.opc25.afectacion = "M";
      }
      datDientes.data[i].opc.opc25.estado = estado;
      datDientes.data[i].opc.opc25.especificacion = especificacion;
    }
    datDientes.eventos = fnAddEventos(datDientes, "act25.addSave", params, "opc25",
      "[" + codDienteIni + "-" + codDienteFin + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act25.removeSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "afectacion": ucOdontogram_model.opc.opc25.atributos.afectacion,
      "estado": ucOdontogram_model.opc.opc25.atributos.estado,
      "especificacion": ucOdontogram_model.opc.opc25.atributos.especificacion,
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc25.hallazgo = false;
      datDientes.data[i].opc.opc25.afectacion = params.afectacion;
      datDientes.data[i].opc.opc25.estado = params.estado;
      datDientes.data[i].opc.opc25.especificacion = params.especificacion;
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT26
  ucOdontogram_model.action.hallazgo.act26.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria Inicial";
    ucOdontogram_model.glvar.select.msg2 = "Seleccione Pieza Dentaria Final";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "ucOdontogram_model.action.select.fnselect2(obj)";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act26.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act26.addFnLsUserExec = function () {
    var param = {
      "codini": ucOdontogram_model.glvar.select.cod1,
      "codfin": ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act26.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act26.addView = function (param) {
    var _template = $("#template_form_26").html();
    var _nameTemplate = "_FORM26_";
    var _nameValue = "26";
    var codDienteIni = "", codDienteFin = "";
    if (typeof param === "object") {
      if (typeof param["codini"] === "number" || typeof param["codini"] === "string") {
        codDienteIni = param["codini"].toString();
      }
      if (typeof param["codfin"] === "number" || typeof param["codfin"] === "string") {
        codDienteFin = param["codfin"].toString();
      }
    }
    _template = _template.replace("_CODINI_VALUE_", codDienteIni);
    _template = _template.replace("_CODFIN_VALUE_", codDienteFin);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act26.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act26.addSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"],
      especificacion = param["especificacion"], estado = param["estado"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "especificacion": especificacion,
      "estado": estado,
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc26.hallazgo = true;
      datDientes.data[i].opc.opc26.especificacion = especificacion;
      if (i === _keyini) {
        datDientes.data[i].opc.opc26.afectacion = "I";
      } else if (i === _keyfin) {
        datDientes.data[i].opc.opc26.afectacion = "F";
      } else {
        datDientes.data[i].opc.opc26.afectacion = "M";
      }
      datDientes.data[i].opc.opc26.estado = estado;
      datDientes.data[i].opc.opc26.especificacion = especificacion;
    }
    datDientes.eventos = fnAddEventos(datDientes, "act26.addSave", params, "opc26",
      "[" + codDienteIni + "-" + codDienteFin + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act26.removeSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "afectacion": ucOdontogram_model.opc.opc26.atributos.afectacion,
      "estado": ucOdontogram_model.opc.opc26.atributos.estado,
      "especificacion": ucOdontogram_model.opc.opc26.atributos.especificacion
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc26.hallazgo = false;
      datDientes.data[i].opc.opc26.afectacion = params.afectacion;
      datDientes.data[i].opc.opc26.estado = params.estado;
      datDientes.data[i].opc.opc26.especificacion = params.especificacion;
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT27
  ucOdontogram_model.action.hallazgo.act27.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act27.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
    eval(ucOdontogram_model.glvar.select.fnexec);
  };
  ucOdontogram_model.action.hallazgo.act27.addFnLsUserExec = function () {
    var param = {};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act27.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act27.addView = function (param) {
    var _template = $("#template_form_27").html();
    var _nameTemplate = "_FORM27_";
    var _nameValue = "27";
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act27.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        ;
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act27.addSave = function (datDientes, param) {
    var ubicacion = param["ubicacion"], especificacion = param["especificacion"], estado = param["estado"];
    var params = {
      "ubicacion": ubicacion,
      "especificacion": especificacion,
      "estado": estado
    };
    for (var i in datDientes.data) {
      if ((ubicacion === "superior") && (datDientes.data[i].position === "SP" ||
        datDientes.data[i].position === "ST")) {
        datDientes.data[i].opc.opc27.hallazgo = true;
        datDientes.data[i].opc.opc27.especificacion = especificacion;
        datDientes.data[i].opc.opc27.estado = estado;
      } else if ((ubicacion === "inferior") && (datDientes.data[i].position === "IP" ||
        datDientes.data[i].position === "IT")) {
        datDientes.data[i].opc.opc27.hallazgo = true;
        datDientes.data[i].opc.opc27.especificacion = especificacion;
        datDientes.data[i].opc.opc27.estado = estado;
      }
    }
    datDientes.eventos = fnAddEventos(datDientes, "act27.addSave", params, "opc27", "(" + ubicacion + ")");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act27.removeSave = function (datDientes, param) {
    var ubicacion = param["ubicacion"];
    var params = {
      "ubicacion": ubicacion,
      "especificacion": ucOdontogram_model.opc.opc27.atributos.especificacion,
      "estado": ucOdontogram_model.opc.opc27.atributos.estado
    };
    for (var i in datDientes.data) {
      if ((ubicacion === "superior") && (datDientes.data[i].position === "SP" ||
        datDientes.data[i].position === "ST")) {
        datDientes.data[i].opc.opc27.hallazgo = false;
        datDientes.data[i].opc.opc27.especificacion = params.especificacion;
        datDientes.data[i].opc.opc27.estado = params.estado;
      } else if ((ubicacion === "inferior") && (datDientes.data[i].position === "IP" ||
        datDientes.data[i].position === "IT")) {
        datDientes.data[i].opc.opc27.hallazgo = false;
        datDientes.data[i].opc.opc27.especificacion = params.especificacion;
        datDientes.data[i].opc.opc27.estado = params.estado;
      }
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT28
  ucOdontogram_model.action.hallazgo.act28.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act28.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act28.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act28.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act28.addView = function (param) {
    var _template = $("#template_form_28").html();
    var _nameTemplate = "_FORM28_";
    var _nameValue = "28";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act28.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act28.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key = ucOdontogram_model.dataCodToKey[(parseInt(codDiente))];
    var params = {
      "cod": codDiente,
      "value": "RR",
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc28.hallazgo = true;
    datDientes.data[_key].opc.opc28.value = params.value;
    datDientes.data[_key].opc.opc28.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act28.addSave", params, "opc28", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act28.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": ucOdontogram_model.opc.opc28.atributos.value,
      "especificacion": ucOdontogram_model.opc.opc28.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc28.hallazgo = false;
    datDientes.data[_key].opc.opc28.value = params.value;
    datDientes.data[_key].opc.opc28.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT29
  ucOdontogram_model.action.hallazgo.act29.addFnLsUserButtonDet = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect0 = "ucOdontogram_model.action.select.fnselect0(obj)";
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act29.addFnLsUserExecDet()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
    ucOdontogram_model.action.hallazgo.act29.addViewDet();
  };//solo para el detalle
  ucOdontogram_model.action.hallazgo.act29.addFnLsUserExecDet = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogramViewPiezaDetariaDet(param.cod, "opc29");
    $("#ucOdontogramViewPiezaDentariaView").css("display", "block");
    ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos(ucOdontogram_model.glvar.select.opc);
  };//solo para el detalle
  ucOdontogram_model.action.hallazgo.act29.addRemoveSave = function (_param) {
    var codDiente = _param["cod"].toString(), cara = _param["cara"], parte = _param["parte"],
      estado = _param["estado"], estViewDetalle = _param["estViewDetalle"];
    var dataKey = ucOdontogram_manager("getactive");
    var datDientes = ucOdontogram_manager("get", dataKey);
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    if ((typeof datDientes.data[_key].opc.opc29[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc29[cara][parte] !== "undefined")) {
      if (estado === "N") { //add
        _param.estado = "S";
        _param["estadoRest"] = "N";
        if (estViewDetalle === "SI") {
          var _count = 0;
          for (var i in ucOdontogram_model.opc.opc29.opciones.tipomateriales) {
            _count++;
            if ($("#id_tipomaterialdet29_" + _count).is(":checked")) {
              _param["tipomaterial"] = $("#id_tipomaterialdet29_" + _count).val();
              break;
            }
          }
          _count = 0;
          for (var i in ucOdontogram_model.opc.opc29.opciones.estadosRest) {
            _count++;
            if ($("#id_estadoRestdet29_" + _count).is(":checked")) {
              _param["estadoRest"] = $("#id_estadoRestdet29_" + _count).val();
              break;
            }
          }
          datDientes = ucOdontogram_model.action.hallazgo.act29.addSave(datDientes, _param);
          ucOdontogramViewPiezaDetariaDet(codDiente, "opc29");
        } else if (estViewDetalle === "NO") {
          datDientes = ucOdontogram_model.action.hallazgo.act29.addView(_param);
        }
        $("#" + dataKey).ucOdontogram(datDientes);
      }
      if (estado === "S") { //delete
        var _elemEventPkIdDelete = null;
        var _auxEventos = datDientes.eventos;
        for (var i in _auxEventos["opc29"]) {
          if ((_auxEventos["opc29"][i].param.cod === codDiente) &&
            (_auxEventos["opc29"][i].param.cara === cara) &&
            (_auxEventos["opc29"][i].param.parte === parte) &&
            (_auxEventos["opc29"][i].param.estado === "S")) {
            _elemEventPkIdDelete = i;
            break;
          }
        }
        if (typeof _auxEventos["opc29"][_elemEventPkIdDelete] === "object") {
          delete _auxEventos["opc29"][_elemEventPkIdDelete];
        }
        _param.estado = "N";
        _param.estadosRest = "N";
        datDientes = ucOdontogram_model.action.hallazgo.act29.removeSave(datDientes, _param);
        if (estViewDetalle === "SI") {
          ucOdontogramViewPiezaDetariaDet(codDiente, "opc29");
        }
        $("#" + dataKey).ucOdontogram(datDientes);
      }
      return datDientes;
    } else {
      return datDientes;
    }
  };
  ucOdontogram_model.action.hallazgo.act29.addView = function (param) {
    var _template = $("#template_form_29").html();
    var _nameTemplate = "_FORM29_";
    var _nameValue = "29";
    var codDiente = "", cara = "", parte = "", estado = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
      if (typeof param["cara"] === "number" || typeof param["cara"] === "string") {
        cara = param["cara"].toString();
      }
      if (typeof param["parte"] === "number" || typeof param["parte"] === "string") {
        parte = param["parte"].toString();
      }
      if (typeof param["estado"] === "number" || typeof param["estado"] === "string") {
        estado = param["estado"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    _template = _template.replace("_CARA_VALUE_", cara);
    _template = _template.replace("_PARTE_VALUE_", parte);
    _template = _template.replace("_ESTADO_VALUE_", estado);
    var _option_html = "";
    for (var i in ucOdontogram_model.opc.opc29.opciones.tipomateriales) {
      _option_html += "<option value='" + i + "'>" + ucOdontogram_model.opc.opc29.opciones.tipomateriales[i] +
        "</option>";
    }
    _template = _template.replace("__TIPOMATERIAL_OPCIONES__", _option_html);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act29.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act29.addViewDet = function () {
    var _template = $("#template_form_det_29").html();
    var _nameTemplate = "_FORMDET29_";
    var _nameValue = "det29";
    var _radiooptions_html = "";
    var _count = 0;
    for (var i in ucOdontogram_model.opc.opc29.opciones.tipomateriales) {
      _count++;
      _radiooptions_html += "<label>";
      if (_count === 1) {
        _radiooptions_html += "<input type='radio' name='tipomaterial' value='" + i +
          "' id='id_tipomaterial_FORMDET29__" + _count + "' checked=''/>";
      } else {
        _radiooptions_html += "<input type='radio' name='tipomaterial' value='" + i +
          "' id='id_tipomaterial_FORMDET29__" + _count + "'/>";
      }
      _radiooptions_html += "<span class='text-primary'>" + ucOdontogram_model.opc.opc29.opciones.tipomateriales[i] +
        "</span>";
      _radiooptions_html += "</label>";
      _radiooptions_html += "<br />";
    }
    _template = _template.replace("__TIPOMATERIAL_OPCIONES__", _radiooptions_html);
    _template = _template.split(_nameTemplate).join(_nameValue);
    $("#ucOdontogramHallazgoEventosDetView").html(_template);
    $("#ucOdontogramHallazgoEventosDetFormView").css("display", "block");
  };
  ucOdontogram_model.action.hallazgo.act29.addSave = function (datDientes, param) {
    var codDiente = param["cod"], cara = param["cara"], parte = param["parte"],
      estado = param["estado"], estadoRest = param["estadoRest"],
      tipomaterial = param["tipomaterial"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    if ((typeof datDientes.data[_key].opc.opc29[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc29[cara][parte] !== "undefined")) {
      datDientes.data[_key].opc.opc29[cara][parte].estadoRest = estadoRest;
      datDientes.data[_key].opc.opc29[cara][parte].estado = estado;
      datDientes.data[_key].opc.opc29[cara][parte].tipomaterial = tipomaterial;
      datDientes.data[_key].opc.opc29.hallazgo = true;
      var params = {
        "cod": codDiente, "cara": cara,
        "parte": parte,
        "estado": estado,
        "estadoRest": estadoRest,
        "estadoResPD": estadoRest,
        "tipomaterial": tipomaterial
      };
      //Actualizar estado de caras
      var caraTieneRestauracion = false, caraEstadoRest = "N";
      for (var i in datDientes.data[_key].opc.opc29[cara]) {
        if (i !== "sp00") {
          if (datDientes.data[_key].opc.opc29[cara][i].estado === "S") {
            caraTieneRestauracion = true;
          }
          if (datDientes.data[_key].opc.opc29[cara][i].estadoRest === "M") {
            caraEstadoRest = datDientes.data[_key].opc.opc29[cara][i].estadoRest;
          }
        }
      }
      if (caraTieneRestauracion === true) {
        datDientes.data[_key].opc.opc29[cara].sp00.estado = "S";
        // obtiene el valor Tipo con mayor frecuencia por superficie (auxTipoMax)
        var auxDetCaras = datDientes.data[_key].opc.opc29;
        var auxCalTipos = {};
        var auxTipoMax = "";
        var auxMax = 0;
        var auxEstadoRest = "B";
        var auxSuperficiesXTipo = [];
        for (var i in auxDetCaras) {
          if (typeof auxDetCaras[i] === "object") {
            for (var j in auxDetCaras[i]) {
              if ((j !== "sp00") && (typeof auxDetCaras[i][j] === "object")) {
                // obtener material mas frecuente usado
                if ((auxDetCaras[i][j].tipomaterial !== "") &&
                  (typeof auxCalTipos[(auxDetCaras[i][j].tipomaterial)] === "undefined")) {
                  auxCalTipos[(auxDetCaras[i][j].tipomaterial)] = 1;
                } else if ((auxDetCaras[i][j].tipomaterial !== "") &&
                  (typeof auxCalTipos[(auxDetCaras[i][j].tipomaterial)] === "number")) {
                  auxCalTipos[(auxDetCaras[i][j].tipomaterial)]++;
                }
                //obtener estado de restauración
                if (auxDetCaras[i][j].estadoRest === "M") {
                  auxEstadoRest = "M";
                }
              }
            }
          }
        }
        for (var i in auxCalTipos) {
          auxSuperficiesXTipo.push(i + ": " + auxCalTipos[i]);
          if (auxMax < auxCalTipos[i]) {
            auxTipoMax = i;
            auxMax = auxCalTipos[i];
          }
        }
        datDientes.data[_key].opc.opc29.estadoRest = auxEstadoRest;
        datDientes.data[_key].opc.opc29[cara].sp00.estadoRest = caraEstadoRest;
        datDientes.data[_key].opc.opc29.tipoMaterial = auxTipoMax;
        datDientes.data[_key].opc.opc29.superficiesXTipoMat = auxSuperficiesXTipo.join(", ");
        params.estadoRest = auxEstadoRest;
      }
      //--
      datDientes.eventos = fnAddEventos(datDientes, "act29.addSave", params, "opc29",
        "[" + codDiente + "]&DDotrahd;{" + cara + "}");
      return datDientes;
    }
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act29.removeSave = function (datDientes, param) {
    var codDiente = param["cod"], cara = param["cara"], parte = param["parte"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "cara": cara,
      "parte": parte,
      "estado": ucOdontogram_model.opc.opc29.atributos[cara][parte].estado,
      "estadoRest": ucOdontogram_model.opc.opc29.atributos[cara][parte].estadoRest,
      "estadoResPD": ucOdontogram_model.opc.opc29.atributos[cara][parte].estadoRest,
      "tipomaterial": ucOdontogram_model.opc.opc29.atributos[cara][parte].tipomaterial
    };
    var _estados = false, _estadoRest = "N";
    if ((typeof datDientes.data[_key].opc.opc29[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc29[cara][parte] !== "undefined")) {
      datDientes.data[_key].opc.opc29[cara][parte].estado = params.estado;
      datDientes.data[_key].opc.opc29[cara][parte].estadoRest = params.estadoRest;
      datDientes.data[_key].opc.opc29[cara][parte].tipomaterial = params.tipomaterial;
      //Actualizar estado de caras
      var caraTieneRestauracion = false, caraEstadoRest = "N";
      for (var i in datDientes.data[_key].opc.opc29[cara]) {
        if (i !== "sp00" && datDientes.data[_key].opc.opc29[cara][i].estado === "S") {
          if (datDientes.data[_key].opc.opc29[cara][i].estado === "S") {
            caraTieneRestauracion = true;
          }
          if (datDientes.data[_key].opc.opc29[cara][i].estadoRest === "M") {
            caraEstadoRest = datDientes.data[_key].opc.opc29[cara][i].estadoRest;
          }
        }
      }
      if (caraTieneRestauracion === true) {
        datDientes.data[_key].opc.opc29[cara].sp00.estado = "S";
        if (caraEstadoRest === "M") {
          datDientes.data[_key].opc.opc29[cara].sp00.estadoRest = "M";
        } else {
          datDientes.data[_key].opc.opc29[cara].sp00.estadoRest = "B";
        }
      } else {
        datDientes.data[_key].opc.opc29[cara].sp00.estado = "N";
        datDientes.data[_key].opc.opc29[cara].sp00.estadoRest = "N";
      }
      //--
      for (var i in datDientes.data[_key].opc.opc29) {
        if ((typeof datDientes.data[_key].opc.opc29[i] === "object") &&
          (typeof datDientes.data[_key].opc.opc29[i].sp00 === "object")) {
          if (datDientes.data[_key].opc.opc29[i].sp00.estado === "S") {
            _estados = true;
            if (datDientes.data[_key].opc.opc29[i].sp00.estadoRest === "M") {
              _estadoRest = "M";
            }
          }
        }
      }
      if (_estados === "S") {
        if (_estadoRest === "N") {
          _estadoRest = "B";
        }
      }
      datDientes.data[_key].opc.opc29.hallazgo = _estados;
      datDientes.data[_key].opc.opc29.estadoRest = _estadoRest;
      fnViewEventos(datDientes);
    }
    return datDientes;
  };
  //----- ACT30
  ucOdontogram_model.action.hallazgo.act30.addFnLsUserButtonDet = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect0 = "ucOdontogram_model.action.select.fnselect0(obj)";
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act30.addFnLsUserExecDet()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };//solo para el detalle
  ucOdontogram_model.action.hallazgo.act30.addFnLsUserExecDet = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogramViewPiezaDetariaDet(param.cod, "opc30");
    $("#ucOdontogramViewPiezaDentariaView").css("display", "block");
    ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos(ucOdontogram_model.glvar.select.opc);
  };//solo para el detalle
  ucOdontogram_model.action.hallazgo.act30.addRemoveSave = function (_param) {
    var codDiente = _param["cod"].toString(), cara = _param["cara"], parte = _param["parte"], estado = _param["estado"],
      estViewDetalle = _param["estViewDetalle"];
    var dataKey = ucOdontogram_manager("getactive");
    var datDientes = ucOdontogram_manager("get", dataKey);
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    if ((typeof datDientes.data[_key].opc.opc30[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc30[cara][parte] !== "undefined")) {
      if (estado === "N") { //add
        _param.estado = "S";
        if (estViewDetalle === "SI") {
          _param["tipo"] = $("#id_tipodet30").val();
          datDientes = ucOdontogram_model.action.hallazgo.act30.addSave(datDientes, _param);
          ucOdontogramViewPiezaDetariaDet(codDiente, "opc30");
        } else if (estViewDetalle === "NO") {
          //datDientes = ucOdontogram_model.action.hallazgo.act30.addView(_param);
          datDientes = ucOdontogram_model.action.hallazgo.act30.addSave(datDientes, _param);
        }
        $("#" + dataKey).ucOdontogram(datDientes);
      }
      if (estado === "S") { //delete
        var _elemEventPkIdDelete = null;
        var _auxEventos = datDientes.eventos;
        for (var i in _auxEventos["opc30"]) {
          if ((_auxEventos["opc30"][i].option === "opc30") &&
            (_auxEventos["opc30"][i].param.cod === codDiente) &&
            (_auxEventos["opc30"][i].param.cara === cara) &&
            (_auxEventos["opc30"][i].param.parte === parte) &&
            (_auxEventos["opc30"][i].param.estado === "S")) {
            _elemEventPkIdDelete = i;
            break;
          }
        }
        if (typeof _auxEventos["opc30"][_elemEventPkIdDelete] === "object") {
          delete _auxEventos["opc30"][_elemEventPkIdDelete];
        }
        _param.estado = "N";
        datDientes = ucOdontogram_model.action.hallazgo.act30.removeSave(datDientes, _param);
        if (estViewDetalle === "SI") {
          ucOdontogramViewPiezaDetariaDet(codDiente, "opc30");
        }
        $("#" + dataKey).ucOdontogram(datDientes);
      }
      return datDientes;
    } else {
      return datDientes;
    }
  };
  ucOdontogram_model.action.hallazgo.act30.addSave = function (datDientes, param) {
    var codDiente = param["cod"], cara = param["cara"], parte = param["parte"], estado = param["estado"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    if ((typeof datDientes.data[_key].opc.opc30[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc30[cara][parte] !== "undefined")) {
      datDientes.data[_key].opc.opc30[cara][parte].estado = estado;
      datDientes.data[_key].opc.opc30.hallazgo = true;
      var params = {
        "cod": codDiente,
        "cara": cara,
        "parte": parte,
        "estado": estado
      };
      //Actualizar estado de caras
      var caraTieneRestauraTemp = false;
      for (var i in datDientes.data[_key].opc.opc30[cara]) {
        if (i !== "sp00" && datDientes.data[_key].opc.opc30[cara][i].estado === "S") {
          caraTieneRestauraTemp = true;
          break;
        }
      }
      if (caraTieneRestauraTemp === true) {
        datDientes.data[_key].opc.opc30[cara].sp00.estado = "S";
      }
      //--
      datDientes.eventos = fnAddEventos(datDientes, "act30.addSave", params, "opc30",
        "[" + codDiente + "]&DDotrahd;{" + cara + "}");
      return datDientes;
    }
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act30.removeSave = function (datDientes, param) {
    var codDiente = param["cod"], cara = param["cara"], parte = param["parte"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "cara": cara,
      "parte": parte,
      "estado": ucOdontogram_model.opc.opc30.atributos[cara][parte].estado
    };
    var _estados = false;
    if ((typeof datDientes.data[_key].opc.opc30[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc30[cara][parte] !== "undefined")) {
      datDientes.data[_key].opc.opc30[cara][parte].estado = params.estado;
      //Actualizar estado de caras
      var caraTieneRestauraTemp = false;
      for (var i in datDientes.data[_key].opc.opc30[cara]) {
        if (i !== "sp00" && datDientes.data[_key].opc.opc30[cara][i].estado === "S") {
          caraTieneRestauraTemp = true;
          break;
        }
      }
      if (caraTieneRestauraTemp === true) {
        datDientes.data[_key].opc.opc30[cara].sp00.estado = "S";
      } else {
        datDientes.data[_key].opc.opc30[cara].sp00.estado = "N";
      }
      //--
      for (var i in datDientes.data[_key].opc.opc30) {
        if ((typeof datDientes.data[_key].opc.opc30[i] === "object") &&
          (typeof datDientes.data[_key].opc.opc30[i].sp00 === "object") &&
          (datDientes.data[_key].opc.opc30[i].sp00.estado === "S")) {
          _estados = true;
        }
      }
      datDientes.data[_key].opc.opc30.hallazgo = _estados;
      fnViewEventos(datDientes);
    }
    return datDientes;
  };
  //----- ACT31
  ucOdontogram_model.action.hallazgo.act31.addFnLsUserButtonDet = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect0 = "ucOdontogram_model.action.select.fnselect0(obj)";
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act31.addFnLsUserExecDet()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
    ucOdontogram_model.action.hallazgo.act31.addViewDet();
  };//solo para el detalle
  ucOdontogram_model.action.hallazgo.act31.addFnLsUserExecDet = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogramViewPiezaDetariaDet(param.cod, "opc31");
    $("#ucOdontogramViewPiezaDentariaView").css("display", "block");
    ucOdontogram_model.decoraciones.fnCarasSurcosAgregarAdornos(ucOdontogram_model.glvar.select.opc);
  };//solo para el detalle
  ucOdontogram_model.action.hallazgo.act31.addRemoveSave = function (_param) {
    var codDiente = _param["cod"].toString(), cara = _param["cara"], parte = _param["parte"], estado = _param["estado"],
      estViewDetalle = _param["estViewDetalle"];
    var dataKey = ucOdontogram_manager("getactive");
    var datDientes = ucOdontogram_manager("get", dataKey);
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    if ((typeof datDientes.data[_key].opc.opc31[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc31[cara][parte] !== "undefined")) {
      if (estado === "N") { //add
        if ($("#id_estadodet31_01").is(":checked")) {
          _param["estado"] = $("#id_estadodet31_01").val();
        } else if ($("#id_estadodet31_02").is(":checked")) {
          _param["estado"] = $("#id_estadodet31_02").val();
        } else {
          _param["estado"] = "N";
        }
        var _txtColor = "A";
        if (_param["estado"] === "B") {
          for (var i in datDientes.data[_key].opc.opc31) {
            if ((typeof datDientes.data[_key].opc.opc31[i] === "object") &&
              (typeof datDientes.data[_key].opc.opc31[i].sp00 === "object") &&
              (datDientes.data[_key].opc.opc31[i].sp00.estado === "M")) {
              _txtColor = "R";
              break
            }
          }
        } else if (_param["estado"] === "M") {
          _txtColor = "R";
        }
        _param["txtColor"] = _txtColor;
        if (estViewDetalle === "SI") {
          datDientes = ucOdontogram_model.action.hallazgo.act31.addSave(datDientes, _param);
          ucOdontogramViewPiezaDetariaDet(codDiente, "opc31");
        } else if (estViewDetalle === "NO") {
          datDientes = ucOdontogram_model.action.hallazgo.act31.addView(_param);
        }
        //datDientes = ucOdontogram_model.action.hallazgo.act31.addView(_param);
        $("#" + dataKey).ucOdontogram(datDientes);
        return datDientes;
      }
      if (estado === "B" || estado === "M") { //delete
        var _elemEventPkIdDelete = null;
        var _auxEventos = datDientes.eventos;
        for (var i in _auxEventos["opc31"]) {
          if ((_auxEventos["opc31"][i].param.cod === codDiente) &&
            (_auxEventos["opc31"][i].param.cara === cara) &&
            (_auxEventos["opc31"][i].param.parte === parte) &&
            ((_auxEventos["opc31"][i].param.estado === "B") ||
              (_auxEventos["opc31"][i].param.estado === "M"))) {
            _elemEventPkIdDelete = i;
            break;
          }
        }
        if (typeof _auxEventos["opc31"][_elemEventPkIdDelete] === "object") {
          delete _auxEventos["opc31"][_elemEventPkIdDelete];
        }
        _param.estado = "N";
        datDientes = ucOdontogram_model.action.hallazgo.act31.removeSave(datDientes, _param);
        if (estViewDetalle === "SI") {
          ucOdontogramViewPiezaDetariaDet(codDiente, "opc31");
        }
        $("#" + dataKey).ucOdontogram(datDientes);
      }
      return datDientes;
    } else {
      return datDientes;
    }
  };
  ucOdontogram_model.action.hallazgo.act31.addView = function (param) {
    var _template = $("#template_form_31").html();
    var _nameTemplate = "_FORM31_";
    var _nameValue = "31";
    var codDiente = "", cara = "", parte = "", estado = "", txtColor = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
      if (typeof param["cara"] === "number" || typeof param["cara"] === "string") {
        cara = param["cara"].toString();
      }
      if (typeof param["parte"] === "number" || typeof param["parte"] === "string") {
        parte = param["parte"].toString();
      }
      if (typeof param["estado"] === "number" || typeof param["estado"] === "string") {
        estado = param["estado"].toString();
      }
      if (typeof param["txtColor"] === "string") {
        estado = param["txtColor"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    _template = _template.replace("_CARA_VALUE_", cara);
    _template = _template.replace("_PARTE_VALUE_", parte);
    _template = _template.replace("_ESTADO_VALUE_", estado);
    _template = _template.replace("_TXTCOLOR_VALUE_", txtColor);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act31.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act31.addViewDet = function () {
    var _template = $("#template_form_det_31").html();
    var _nameTemplate = "_FORMDET31_";
    var _nameValue = "det31";
    var _option_html = "";
    _template = _template.split(_nameTemplate).join(_nameValue);
    $("#ucOdontogramHallazgoEventosDetView").html(_template);
    $("#ucOdontogramHallazgoEventosDetFormView").css("display", "block");
  };
  ucOdontogram_model.action.hallazgo.act31.addSave = function (datDientes, param) {
    var codDiente = param["cod"], cara = param["cara"], parte = param["parte"],
      estado = param["estado"], txtColor = param["txtColor"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    if ((typeof datDientes.data[_key].opc.opc31[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc31[cara][parte] !== "undefined")) {
      datDientes.data[_key].opc.opc31[cara][parte].estado = estado;
      datDientes.data[_key].opc.opc31.hallazgo = true;
      datDientes.data[_key].opc.opc31.value = "S";
      datDientes.data[_key].opc.opc31.txtColor = txtColor;
      var params = {
        "cod": codDiente,
        "cara": cara,
        "parte": parte,
        "estado": estado,
        "txtColor": txtColor
      };
      datDientes.eventos = fnAddEventos(datDientes, "act31.addSave", params, "opc31",
        "[" + codDiente + "]&DDotrahd;{" + cara + "}");
      return datDientes;
    }
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act31.removeSave = function (datDientes, param) {
    var codDiente = param["cod"], cara = param["cara"], parte = param["parte"], txtColor = param["txtColor"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "cara": cara,
      "parte": parte,
      "txtColor": txtColor,
      "estado": ucOdontogram_model.opc.opc31.atributos[cara][parte].estado
    };
    var _estados = false, _value = "N", _txtColor = "A";
    if ((typeof datDientes.data[_key].opc.opc31[cara] !== "undefined") &&
      (typeof datDientes.data[_key].opc.opc31[cara][parte] !== "undefined")) {
      datDientes.data[_key].opc.opc31[cara][parte].estado = params.estado;
      for (var i in datDientes.data[_key].opc.opc31) {
        if ((typeof datDientes.data[_key].opc.opc31[i] === "object") &&
          (typeof datDientes.data[_key].opc.opc31[i].sp00 === "object") &&
          (datDientes.data[_key].opc.opc31[i].sp00.estado !== "N")) {
          _estados = true;
          _value = "S";
          if (datDientes.data[_key].opc.opc31[i].sp00.estado === "M") {
            _txtColor = "R";
          }
        }
      }
      datDientes.data[_key].opc.opc31.hallazgo = _estados;
      datDientes.data[_key].opc.opc31.value = _value;
      datDientes.data[_key].opc.opc31.txtColor = _txtColor;
      fnViewEventos(datDientes);
    }
    return datDientes;
  };
  //----- ACT32
  ucOdontogram_model.action.hallazgo.act32.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act32.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act32.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act32.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act32.addView = function (param) {
    var _template = $("#template_form_32").html();
    var _nameTemplate = "_FORM32_";
    var _nameValue = "32";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act32.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act32.addSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": "SI"
    };
    datDientes.data[_key].opc.opc32.hallazgo = true;
    datDientes.data[_key].opc.opc32.value = params.value;
    datDientes.eventos = fnAddEventos(datDientes, "act32.addSave", params, "opc32", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act32.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {"cod": codDiente, "value": ucOdontogram_model.opc.opc32.atributos.value};
    datDientes.data[_key].opc.opc32.hallazgo = false;
    datDientes.data[_key].opc.opc32.value = ucOdontogram_model.opc.opc32.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT33
  ucOdontogram_model.action.hallazgo.act33.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act33.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act33.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act33.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act33.addView = function (param) {
    var _template = $("#template_form_33").html();
    var _nameTemplate = "_FORM33_";
    var _nameValue = "33";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act33.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act33.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"],
      desgasteVestibular = (typeof param["desgasteVestibular"] === "string") ? param["desgasteVestibular"] : "N",
      desgasteOclusal = (typeof param["desgasteOclusal"] === "string") ? param["desgasteOclusal"] : "N",
      desgasteLingual = (typeof param["desgasteLingual"] === "string") ? param["desgasteLingual"] : "N";
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": "DES",
      "especificacion": especificacion,
      "desgasteVestibular": desgasteVestibular,
      "desgasteOclusal": desgasteOclusal,
      "desgasteLingual": desgasteLingual,
    };
    datDientes.data[_key].opc.opc33.hallazgo = true;
    datDientes.data[_key].opc.opc33.especificacion = especificacion;
    datDientes.data[_key].opc.opc33.value = params.value;
    datDientes.data[_key].opc.opc33.desgasteVestibular = desgasteVestibular;
    datDientes.data[_key].opc.opc33.desgasteOclusal = desgasteOclusal;
    datDientes.data[_key].opc.opc33.desgasteLingual = desgasteLingual;
    datDientes.eventos = fnAddEventos(datDientes, "act33.addSave", params, "opc33", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act33.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": ucOdontogram_model.opc.opc33.atributos.value,
      "especificacion": ucOdontogram_model.opc.opc33.atributos.especificacion,
      "desgasteVestibular": ucOdontogram_model.opc.opc33.atributos.desgasteVestibular,
      "desgasteOclusal": ucOdontogram_model.opc.opc33.atributos.desgasteOclusal,
      "desgasteLingual": ucOdontogram_model.opc.opc33.atributos.desgasteLingual,
    };
    datDientes.data[_key].opc.opc33.hallazgo = false;
    datDientes.data[_key].opc.opc33.value = params.value;
    datDientes.data[_key].opc.opc33.especificacion = params.especificacion;
    datDientes.data[_key].opc.opc33.desgasteVestibular = params.desgasteVestibular;
    datDientes.data[_key].opc.opc33.desgasteOclusal = params.desgasteOclusal;
    datDientes.data[_key].opc.opc33.desgasteLingual = params.desgasteLingual;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT34
  ucOdontogram_model.action.hallazgo.act34.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria Anterior";
    ucOdontogram_model.glvar.select.msg2 = "Seleccione Pieza Dentaria Posterios";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "ucOdontogram_model.action.select.fnselect2(obj)";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act34.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act34.addFnLsUserExec = function () {
    var param = {
      "codini": ucOdontogram_model.glvar.select.cod1,
      "codfin": ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act34.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act34.addView = function (param) {
    var _template = $("#template_form_34").html();
    var _nameTemplate = "_FORM34_";
    var _nameValue = "34";
    var codDienteIni = "", codDienteFin = "";
    if (typeof param === "object") {
      if (typeof param["codini"] === "number" || typeof param["codini"] === "string") {
        codDienteIni = param["codini"].toString();
      }
      if (typeof param["codfin"] === "number" || typeof param["codfin"] === "string") {
        codDienteFin = param["codfin"].toString();
      }
    }
    _template = _template.replace("_CODINI_VALUE_", codDienteIni);
    _template = _template.replace("_CODFIN_VALUE_", codDienteFin);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act34.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act34.addSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"],
      especificacion = param["especificacion"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (Math.abs(_keyini - _keyfin) !== 1) {
      _keyfin = _keyini + 1;
    }
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    if ((_keyfin === 17) || (_keyfin === 47) || (_keyfin === 61) || (_keyfin === 81)) {
      _aux = _keyini;
      _keyini = _aux - 1;
      _keyfin = _aux;
    }
    var params = {
      "codini": datDientes.data[_keyini].cod,
      "codfin": datDientes.data[_keyfin].cod,
      "especificacion": especificacion
    };
    datDientes.data[_keyini].opc.opc34.hallazgo = true;
    datDientes.data[_keyini].opc.opc34.ubicacion = "D";
    datDientes.data[_keyini].opc.opc34.especificacion = especificacion;
    datDientes.data[_keyfin].opc.opc34.hallazgo = true;
    datDientes.data[_keyfin].opc.opc34.ubicacion = "Z";
    datDientes.data[_keyfin].opc.opc34.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act34.addSave", params, "opc34",
      "[" + params.codini + "-" + params.codfin + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act34.removeSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "ubicacion": ucOdontogram_model.opc.opc34.atributos.ubicacion,
      "especificacion": ucOdontogram_model.opc.opc34.atributos.especificacion
    };
    datDientes.data[_keyini].opc.opc34.hallazgo = false;
    datDientes.data[_keyini].opc.opc34.ubicacion = params.ubicacion;
    datDientes.data[_keyini].opc.opc34.especificacion = params.especificacion;
    datDientes.data[_keyfin].opc.opc34.hallazgo = false;
    datDientes.data[_keyfin].opc.opc34.ubicacion = params.ubicacion;
    datDientes.data[_keyfin].opc.opc34.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT35
  ucOdontogram_model.action.hallazgo.act35.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria Anterior";
    ucOdontogram_model.glvar.select.msg2 = "Seleccione Pieza Dentaria Posterios";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "ucOdontogram_model.action.select.fnselect2(obj)";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act35.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act35.addFnLsUserExec = function () {
    var param = {
      "codini": ucOdontogram_model.glvar.select.cod1,
      "codfin": ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act35.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act35.addView = function (param) {
    var _template = $("#template_form_35").html();
    var _nameTemplate = "_FORM35_";
    var _nameValue = "35";
    var codDienteIni = "", codDienteFin = "";
    if (typeof param === "object") {
      if (typeof param["codini"] === "number" || typeof param["codini"] === "string") {
        codDienteIni = param["codini"].toString();
      }
      if (typeof param["codfin"] === "number" || typeof param["codfin"] === "string") {
        codDienteFin = param["codfin"].toString();
      }
    }
    _template = _template.replace("_CODINI_VALUE_", codDienteIni);
    _template = _template.replace("_CODFIN_VALUE_", codDienteFin);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act35.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act35.addSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"], especificacion = param["especificacion"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (Math.abs(_keyini - _keyfin) !== 1) {
      _keyfin = _keyini + 1;
    }
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": datDientes.data[_keyini].cod,
      "codfin": datDientes.data[_keyfin].cod,
      "especificacion": especificacion,
    };
    datDientes.data[_keyini].opc.opc35.hallazgo = true;
    datDientes.data[_keyini].opc.opc35.lado = "D";
    datDientes.data[_keyini].opc.opc35.especificacion = especificacion;
    datDientes.data[_keyfin].opc.opc35.hallazgo = true;
    datDientes.data[_keyfin].opc.opc35.lado = "Z";
    datDientes.data[_keyfin].opc.opc35.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act35.addSave", params, "opc35",
      "[" + params.codini + "-" + params.codfin + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act35.removeSave = function (datDientes, param) {
    var codDienteIni = param["codini"], codDienteFin = param["codfin"];
    var _keyini = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      "codini": codDienteIni,
      "codfin": codDienteFin,
      "lado": ucOdontogram_model.opc.opc35.atributos.lado,
      "especificacion": ucOdontogram_model.opc.opc35.atributos.codDienteFin,
    };
    datDientes.data[_keyini].opc.opc35.hallazgo = false;
    datDientes.data[_keyini].opc.opc35.lado = params.lado;
    datDientes.data[_keyini].opc.opc35.especificacion = params.especificacion;
    datDientes.data[_keyfin].opc.opc35.hallazgo = false;
    datDientes.data[_keyfin].opc.opc35.lado = params.lado;
    datDientes.data[_keyfin].opc.opc35.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT36
  ucOdontogram_model.action.hallazgo.act36.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act36.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act36.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act36.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act36.addView = function (param) {
    var _template = $("#template_form_36").html();
    var _nameTemplate = "_FORM36_";
    var _nameValue = "36";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    var _option_html = "";
    for (var i in ucOdontogram_model.opc.opc36.opciones.tipos) {
      _option_html += "<option value='" + i + "'>" + ucOdontogram_model.opc.opc36.opciones.tipos[i] + "</option>";
    }
    _template = _template.replace("__TIPO_OPCIONES__", _option_html);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act36.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act36.addSave = function (datDientes, param) {
    var codDiente = param["cod"], tipo = param["tipo"],
      estado = param["estado"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "tipo": tipo,
      "estado": estado,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc36.hallazgo = true;
    datDientes.data[_key].opc.opc36.tipo = tipo;
    datDientes.data[_key].opc.opc36.estado = estado;
    datDientes.data[_key].opc.opc36.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act36.addSave", params, "opc36", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act36.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "tipo": ucOdontogram_model.opc.opc36.atributos.tipo,
      "estado": ucOdontogram_model.opc.opc36.atributos.estado,
      "especificacion": ucOdontogram_model.opc.opc36.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc36.hallazgo = false;
    datDientes.data[_key].opc.opc36.tipo = params.tipo;
    datDientes.data[_key].opc.opc36.estado = params.estado;
    datDientes.data[_key].opc.opc36.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT37
  ucOdontogram_model.action.hallazgo.act37.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act37.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act37.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act37.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act37.addView = function (param) {
    var _template = $("#template_form_37").html();
    var _nameTemplate = "_FORM37_";
    var _nameValue = "37";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function () {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act37.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act37.addSave = function (datDientes, param) {
    var codDiente = param["cod"], value = param["value"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": value,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc37.hallazgo = true;
    datDientes.data[_key].opc.opc37.value = value;
    datDientes.data[_key].opc.opc37.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act37.addSave", params, "opc37", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act37.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": ucOdontogram_model.opc.opc37.atributos.value,
      "especificacion": ucOdontogram_model.opc.opc37.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc37.hallazgo = false;
    datDientes.data[_key].opc.opc37.value = params.value;
    datDientes.data[_key].opc.opc37.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT38
  ucOdontogram_model.action.hallazgo.act38.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act38.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act38.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act38.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act38.addView = function (param) {
    var _template = $("#template_form_38").html();
    var _nameTemplate = "_FORM38_";
    var _nameValue = "38";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act38.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act38.addSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var opcValue = "FFP";
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": opcValue
    };
    datDientes.data[_key].opc.opc38.hallazgo = true;
    datDientes.data[_key].opc.opc38.value = opcValue;
    datDientes.eventos = fnAddEventos(datDientes, "act38.addSave", params, "opc38", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act38.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {"cod": codDiente, "value": ucOdontogram_model.opc.opc38.atributos.value};
    datDientes.data[_key].opc.opc38.hallazgo = false;
    datDientes.data[_key].opc.opc38.value = ucOdontogram_model.opc.opc38.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
//----- ACT39
  ucOdontogram_model.action.hallazgo.act39.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act39.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act39.addFnLsUserExec = function () {
    var param = {"cod": ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act39.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act39.addView = function (param) {
    var _template = $("#template_form_39").html();
    var _nameTemplate = "_FORM39_";
    var _nameValue = "39";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    var _option_html = "";
    for (var i in ucOdontogram_model.opc.opc39.opciones.values) {
      _option_html += "<option value='" + i + "'>" + ucOdontogram_model.opc.opc39.opciones.values[i] + "</option>";
    }
    _template = _template.replace("__TIPO_OPCIONES__", _option_html);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act39.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act39.addSave = function (datDientes, param) {
    var codDiente = param["cod"], value = param["value"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": value,
      "especificacion": especificacion,
    };
    datDientes.data[_key].opc.opc39.hallazgo = true;
    datDientes.data[_key].opc.opc39.value = value;
    datDientes.data[_key].opc.opc39.especificacion = especificacion;
    datDientes.eventos = fnAddEventos(datDientes, "act39.addSave", params, "opc39", "[" + codDiente + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act39.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "value": ucOdontogram_model.opc.opc39.atributos.value,
      "especificacion": ucOdontogram_model.opc.opc39.atributos.especificacion,
    };
    datDientes.data[_key].opc.opc39.hallazgo = false;
    datDientes.data[_key].opc.opc39.value = params.value;
    datDientes.data[_key].opc.opc39.especificacion = params.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT40
  ucOdontogram_model.action.hallazgo.act40.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "Seleccione Pieza Dentaria";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "ucOdontogram_model.action.select.fnselect1(obj)";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act40.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act40.addFnLsUserExec = function () {
    var param = {
      "cod": ucOdontogram_model.glvar.select.cod1,
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act40.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act40.addView = function (param) {
    var _template = $("#template_form_40").html();
    var _nameTemplate = "_FORM40_";
    var _nameValue = "40";
    var codDiente = "";
    if (typeof param === "object") {
      if (typeof param["cod"] === "number" || typeof param["cod"] === "string") {
        codDiente = param["cod"].toString();
      }
    }
    _template = _template.replace("_COD_VALUE_", codDiente);
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act40.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act40.addSave = function (datDientes, param) {
    var codDiente = param["cod"], especificacion = param["especificacion"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc40.hallazgo = true;
    datDientes.data[_key].opc.opc40.especificacion = especificacion;
    var params = {
      "cod": datDientes.data[_key].cod,
      "especificacion": especificacion
    };
    datDientes.eventos = fnAddEventos(datDientes, "act40.addSave", params, "opc40",
      "[" + datDientes.data[_key].cod + "]");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act40.removeSave = function (datDientes, param) {
    var codDiente = param["cod"];
    var _key = parseInt(ucOdontogram_model.dataCodToKey[(parseInt(codDiente))]);
    var params = {
      "cod": codDiente,
      "especificacion": ucOdontogram_model.opc.opc40.atributos.especificacion
    };
    datDientes.data[_key].opc.opc40.hallazgo = false;
    datDientes.data[_key].opc.opc40.afectacion = ucOdontogram_model.opc.opc40.atributos.afectacion;
    datDientes.data[_key].opc.opc40.especificacion = ucOdontogram_model.opc.opc40.atributos.especificacion;
    fnViewEventos(datDientes);
    return datDientes;
  };

  //----- ACT41
  ucOdontogram_model.action.hallazgo.act41.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act41.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
    eval(ucOdontogram_model.glvar.select.fnexec);
  };
  ucOdontogram_model.action.hallazgo.act41.addFnLsUserExec = function () {
    var param = {};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act41.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act41.addView = function (param) {
    var _template = $("#template_form_41").html();
    var _nameTemplate = "_FORM41_";
    var _nameValue = "41";
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act41.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act41.addSave = function (datDientes, param) {
    var especificacion = param["especificacion"];
    var params = {
      "hallazgo": true,
      "opcgeneral": ucOdontogram_model.opc.opc41.atributos.opcgeneral,
      "especificacion": especificacion,
    };
    datDientes.eventos = fnAddEventos(datDientes, "act41.addSave", params, "opc41", "(" + params.opcgeneral + ")");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act41.removeSave = function (datDientes, param) {
    var params = {
      "hallazgo": false,
      "opcgeneral": ucOdontogram_model.opc.opc41.atributos.opcgeneral,
      "especificacion": ucOdontogram_model.opc.opc41.atributos.especificacion,
    };
    fnViewEventos(datDientes);
    return datDientes;
  };

  //----- ACT42
  ucOdontogram_model.action.hallazgo.act42.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "ucOdontogram_model.action.hallazgo.act42.addFnLsUserExec()";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html(ucOdontogram_model.glvar.select.msg1);
    }
    eval(ucOdontogram_model.glvar.select.fnexec);
  };
  ucOdontogram_model.action.hallazgo.act42.addFnLsUserExec = function () {
    var param = {};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act42.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act42.addView = function (param) {
    var _template = $("#template_form_42").html();
    var _nameTemplate = "_FORM42_";
    var _nameValue = "42";
    swal({
      title: (eval("ucOdontogram_model.opc.opc" + _nameValue + ".nombre")),
      confirmButtonText: "Aplicar",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function () {
        var _param = {};
        $.each($("#id_form" + _nameValue).serializeArray(), function () {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager("getactive");
        var misDientes = ucOdontogram_manager("get", dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act42.addSave(misDientes, _param);
        $("#" + dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function () {
        ucOdontogram_model.glvar.select.opc = "";
        ucOdontogram_model.glvar.select.det = "";
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act42.addSave = function (datDientes, param) {
    var observacion = param["observacion"];
    var params = {
      "hallazgo": true,
      "opcgeneral": ucOdontogram_model.opc.opc42.atributos.opcgeneral,
      "observacion": observacion,
    };
    datDientes.eventos = fnAddEventos(datDientes, "act42.addSave", params, "opc42", "(" + params.opcgeneral + ")");
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act42.removeSave = function (datDientes, param) {
    var params = {
      "hallazgo": false,
      "opcgeneral": ucOdontogram_model.opc.opc42.atributos.opcgeneral,
      "observacion": ucOdontogram_model.opc.opc42.atributos.observacion,
    };
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- Load model Actions: Hallazgos - FIN ----------------------------------
  //----- Load Data codDiente to Key - INI -------------------------------------
  var fnLoadDataCodKey = function () {
    var _cod = null;
    for (var i in ucOdontogram_model["data"]) {
      _cod = ucOdontogram_model["data"][i]["cod"];
      ucOdontogram_model["dataCodToKey"][_cod] = i;
    }
    return ucOdontogram_model["dataCodToKey"];
  };
  fnLoadDataCodKey();
  //----- Load Data codDiente to Key - FIN -------------------------------------
  //----- Load Data User - INI -------------------------------------------------
  ucOdontogram_model.action.load.loadData = function (dataUserDientes) {
    var ucOdnt_config_default = {
      "idListHallazgos": "ucOdontogramHallazgoEventosView",
      "idMsgEvento": "ucOdontogramMsgEventosView",
      "idListEventos": "ucOdontogramListEventosView",
      "id_list_event_opc": "view",
      "idTemplate": "ucOdontogramTemplateHtml",
      "idSave": "ucOdontogramListEventosSave",
      "idSaveMsg": "ucOdontogramListEventosSaveMsg",
      "idResumen": "ucOdontogramResumenView",
      "urlwsSave": "http://localhost/"
    };
    var ucOdnt_data = {};
    var ucOdnt_eventos = {};
    var ucOdnt_config = {};
    var ucOdnt_conn = {};
    if (typeof (dataUserDientes) === "object" && typeof (dataUserDientes["eventos"]) === "object") {
      ucOdnt_eventos = dataUserDientes["eventos"];
    }
    if (typeof (dataUserDientes) === "object" && typeof (dataUserDientes["config"]) === "object") {
      for (var i in ucOdnt_config_default) {
        if (typeof dataUserDientes["config"][i] === "string") {
          ucOdnt_config[i] = dataUserDientes["config"][i];
        } else {
          ucOdnt_config[i] = "error_" + i;
        }
      }
    }
    if (typeof (dataUserDientes) === "object" && typeof (dataUserDientes["conn"]) === "object") {
      for (var i in ucOdontogram_model.action.conn.data) {
        if (typeof dataUserDientes["conn"][i] === "string") {
          ucOdnt_conn[i] = dataUserDientes["conn"][i];
        } else {
          ucOdnt_conn[i] = ucOdontogram_model.action.conn.data[i];
        }
      }
    }
    if (typeof (dataUserDientes) === "object" && typeof (dataUserDientes["data"]) === "object") {
      var data_user = dataUserDientes["data"];
      for (var i in ucOdontogram_model["data"]) {
        ucOdnt_data[i] = {};
        for (var j in ucOdontogram_model["data"][i]) {
          if (j !== "opc") {
            ucOdnt_data[i][j] = ucOdontogram_model["data"][i][j];
          }
        }
        ucOdnt_data[i]["opc"] = {};
        if (typeof (data_user[i]) === "object") {
          for (var j in ucOdontogram_model["opc"]) {
            if (typeof (data_user[i]["opc"][j]) === "object") {
              ucOdnt_data[i]["opc"][j] = {};
              for (var k in ucOdontogram_model["opc"][j]["atributos"]) {
                if (typeof (data_user[i]["opc"][j][k]) === "object") {
                  ucOdnt_data[i]["opc"][j][k] = {};
                  for (var l in ucOdontogram_model["opc"][j]["atributos"][k]) {
                    if (typeof (data_user[i]["opc"][j][k][l]) === "object") {
                      ucOdnt_data[i]["opc"][j][k][l] = {};
                      for (var m in ucOdontogram_model["opc"][j]["atributos"][k][l]) {
                        if (typeof (data_user[i]["opc"][j][k][l][m]) === "object") {
                          ucOdnt_data[i]["opc"][j][k][l][m] = {};
                          for (var n in ucOdontogram_model["opc"][j]["atributos"][k][l][m]) {
                            if (typeof (data_user[i]["opc"][j][k][l][m][n]) === "object") {
                              ucOdnt_data[i]["opc"][j][k][m][l][n] = {};
                              for (var o in ucOdontogram_model["opc"][j]["atributos"][k][l][m][n]) {
                                if (typeof (data_user[i]["opc"][j][k][l][m][n][o]) === typeof (ucOdontogram_model["opc"][j]["atributos"][k][l][m][n][o])) {
                                  ucOdnt_data[i]["opc"][j][k][l][m][n][o] = data_user[i]["opc"][j][k][l][m][n][o];
                                }
                              }
                            } else if (typeof (data_user[i]["opc"][j][k][l][m][n]) === typeof (ucOdontogram_model["opc"][j]["atributos"][k][l][m][n])) {
                              ucOdnt_data[i]["opc"][j][k][l][m][n] = data_user[i]["opc"][j][k][l][m][n];
                            }
                          }
                        } else if (typeof (data_user[i]["opc"][j][k][l][m]) === typeof (ucOdontogram_model["opc"][j]["atributos"][k][l][m])) {
                          ucOdnt_data[i]["opc"][j][k][l][m] = data_user[i]["opc"][j][k][l][m];
                        }
                      }
                    } else if (typeof (data_user[i]["opc"][j][k][l]) === typeof (ucOdontogram_model["opc"][j]["atributos"][k][l])) {
                      ucOdnt_data[i]["opc"][j][k][l] = data_user[i]["opc"][j][k][l];
                    }
                  }
                } else if (typeof (data_user[i]["opc"][j][k]) === typeof (ucOdontogram_model["opc"][j]["atributos"][k])) {
                  ucOdnt_data[i]["opc"][j][k] = data_user[i]["opc"][j][k];
                }
              }
            } else {
              ucOdnt_data[i]["opc"][j] = ucOdontogram_model["opc"][j]["atributos"];
            }
          }
        } else {
          for (var j in ucOdontogram_model["opc"]) {
            ucOdnt_data[i]["opc"][j] = ucOdontogram_model["opc"][j]["atributos"];
          }
        }
      }
    } else {
      if (typeof ucOdontogram_model.config.defaulData[1] === "object") {
        ucOdnt_data = Object.assign({}, ucOdontogram_model.config.defaulData.data);
        ucOdnt_eventos = Object.assign({}, ucOdontogram_model.config.defaulData.eventos);
      } else {
        for (var i in ucOdontogram_model["data"]) {
          ucOdnt_data[i] = {};
          for (var j in ucOdontogram_model["data"][i]) {
            if (j !== "opc") {
              ucOdnt_data[i][j] = Object.assign({}, ucOdontogram_model["data"][i][j]);
            }
          }
          ucOdnt_data[i]["opc"] = {};
          for (var j in ucOdontogram_model["opc"]) {
            ucOdnt_data[i]["opc"][j] = Object.assign({}, ucOdontogram_model["opc"][j]["atributos"]);
          }
        }
      }
    }
    return {"eventos": ucOdnt_eventos, "data": ucOdnt_data, "config": ucOdnt_config, "conn": ucOdnt_conn};
  };
  ucOdontogram_model.action.load.listOpcHallazgos = function () {
    const CONS_LONGITUD_TITULO_HALLAZGO = 27;
    var fnCortarCadena = function (cadena) {
      var listaPartes = cadena.split(" "), listaMostrar = [], longitudCadena = 0, mostrarCadena = "";
      for (var i in listaPartes) {
        longitudCadena += listaPartes[i].length;
        if (longitudCadena < CONS_LONGITUD_TITULO_HALLAZGO) {
          listaMostrar.push(listaPartes[i]);
        } else {
          break;
        }
      }
      mostrarCadena = listaMostrar.join(" ");
      if (mostrarCadena.length < cadena.length) {
        return mostrarCadena + "...";
      }
      return cadena;
    };
    var _html_hallazgos = "";
    var _count = 0;
    var _nombre = "";
    var _opcKey = ucOdontogram_model.opcCodToKey;
    var _opcKeyDetalles = ["03", "29", "30", "31"];
    for (var i in _opcKey) {
      _count++;
      _html_hallazgos += "<div class='ucOdontogramButtonHallazgos'>" + _count.toString() + ".-&nbsp;";
      if (_opcKeyDetalles.includes(_opcKey[i].substring(3, 5))) {
        _html_hallazgos += "<span data-opc='act" + _opcKey[i].substring(3, 5) + "' data-det='SI' " +
          "class='ucOdontogramButtonItemHallazgosDetOpc' title='" + (_opcKey[i].toString()) + "'>elegir &equiv;</span>";
      } else {
        _html_hallazgos += "<span data-opc='act" + _opcKey[i].substring(3, 5) + "' data-det='NO' " +
          "class='ucOdontogramButtonItemHallazgosOpc' title='" + (_opcKey[i].toString()) + "'>elegir &loz;</span>";
      }
      _nombre = eval("ucOdontogram_model.opc." + (_opcKey[i].toString()) + ".nombre");
      _html_hallazgos += "<span title='" + _nombre + "'> " + fnCortarCadena(_nombre) + "</span>";
      _html_hallazgos += "</div>";
    }
    _html_hallazgos += "<br />";
    return _html_hallazgos;
  };
  ucOdontogram_model.action.load.resetGlVars = function () {
    ucOdontogram_model.glvar.select.opc = "";
    ucOdontogram_model.glvar.select.det = "";
    ucOdontogram_model.glvar.select.cod1 = "";
    ucOdontogram_model.glvar.select.cod2 = "";
    ucOdontogram_model.glvar.select.msg1 = "";
    ucOdontogram_model.glvar.select.msg2 = "";
    ucOdontogram_model.glvar.select.fnselect1 = "";
    ucOdontogram_model.glvar.select.fnselect2 = "";
    ucOdontogram_model.glvar.select.fnexec = "";
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    if ((misDientes.config.idMsgEvento.length > 2) && ($("#" + misDientes.config.idMsgEvento).length > 0)) {
      $("#" + misDientes.config.idMsgEvento).html("");
    }
    $("#" + dataKey).ucOdontogram(misDientes);
  };
  ucOdontogram_model.config.defaulData = ucOdontogram_model.action.load.loadData({});
  //----- Load Data User - FIN -------------------------------------------------
  //------ calculo de resumen - INI -----
  ucOdontogram_model.action.resumen.sumCariados = function () {
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    //--- contar numero de dientes cariados
    var _countDientesCariados = 0;
    var _countCarasCariados = 0;
    var _countDientesTotal = 0;
    var _countDientesAusentes = 0;
    var _countDientesAusenteCariados = 0;
    if (typeof misDientes.data === "object") {
      for (var i in misDientes.data) {
        _countDientesTotal++;
        if (misDientes.data[i].opc.opc03.hallazgo === true) {
          _countDientesCariados++;
          if (misDientes.data[i].opc.opc03.pcv.sp00.estado === "S") {
            _countCarasCariados++;
          }
          if (misDientes.data[i].opc.opc03.pcm.sp00.estado === "S") {
            _countCarasCariados++;
          }
          if (misDientes.data[i].opc.opc03.pcl.sp00.estado === "S") {
            _countCarasCariados++;
          }
          if (misDientes.data[i].opc.opc03.pcd.sp00.estado === "S") {
            _countCarasCariados++;
          }
          if (misDientes.data[i].opc.opc03.pco.sp00.estado === "S") {
            _countCarasCariados++;
          }
        }
        if (misDientes.data[i].opc.opc07.hallazgo === true) {
          _countDientesAusentes++;
          if (misDientes.data[i].opc.opc07.tipo === "P") {
            _countDientesAusenteCariados++;
          }
        }
      }
    }
    return {
      "dientesCariado": _countDientesCariados,
      "carasCariados": _countCarasCariados,
      "dientesTotal": _countDientesTotal,
      "dientesAusentes": _countDientesAusentes,
      "dientesAusenteCariados": _countDientesAusenteCariados,
    };
  };
  ucOdontogram_model.action.resumen.sumCurados = function () {
    var dataKey = ucOdontogram_manager("getactive");
    var misDientes = ucOdontogram_manager("get", dataKey);
    //--- contar numero de dientes curados
    var _countAll = 0;
    var _countOpc29DienteCariado = 0; // restauracion definitiva
    var _countOpc29CarasCariado = 0; // restauracion definitiva
    var _countOpc30DienteCariado = 0; // restauracion temporal
    var _countOpc30CarasCariado = 0; // restauracion temporal
    var _countOpc31DienteCariado = 0; // sellante
    var _countOpc31CarasCariado = 0; // sellante
    var _auxCurdado = false;
    if (typeof misDientes.data === "object") {
      for (var i in misDientes.data) {
        _auxCurdado = false;
        if (misDientes.data[i].opc.opc29.hallazgo === true) {
          _countOpc29DienteCariado++;
          _auxCurdado = true;
          if (misDientes.data[i].opc.opc29.pcv.sp00.estado === "S") {
            _countOpc29CarasCariado++;
          }
          if (misDientes.data[i].opc.opc29.pcm.sp00.estado === "S") {
            _countOpc29CarasCariado++;
          }
          if (misDientes.data[i].opc.opc29.pcl.sp00.estado === "S") {
            _countOpc29CarasCariado++;
          }
          if (misDientes.data[i].opc.opc29.pcd.sp00.estado === "S") {
            _countOpc29CarasCariado++;
          }
          if (misDientes.data[i].opc.opc29.pco.sp00.estado === "S") {
            _countOpc29CarasCariado++;
          }
        }
        if (misDientes.data[i].opc.opc30.hallazgo === true) {
          _countOpc30DienteCariado++;
          _auxCurdado = true;
          if (misDientes.data[i].opc.opc30.pcv.sp00.estado === "S") {
            _countOpc30CarasCariado++;
          }
          if (misDientes.data[i].opc.opc30.pcm.sp00.estado === "S") {
            _countOpc30CarasCariado++;
          }
          if (misDientes.data[i].opc.opc30.pcl.sp00.estado === "S") {
            _countOpc30CarasCariado++;
          }
          if (misDientes.data[i].opc.opc30.pcd.sp00.estado === "S") {
            _countOpc30CarasCariado++;
          }
          if (misDientes.data[i].opc.opc30.pco.sp00.estado === "S") {
            _countOpc30CarasCariado++;
          }
        }
        if (misDientes.data[i].opc.opc31.hallazgo === true) {
          _countOpc31DienteCariado++;
          _auxCurdado = true;
          for (var j in misDientes.data[i].opc.opc31) {
            if ((typeof misDientes.data[i].opc.opc31[j] === "object" &&
              typeof misDientes.data[i].opc.opc31[j].sp00 == "object") &&
              (misDientes.data[i].opc.opc31[j].sp00.estado === "B" ||
                misDientes.data[i].opc.opc31[j].sp00.estado === "M")) {
              _countOpc31CarasCariado++;
            }
          }
        }
        if (_auxCurdado === true) {
          _countAll++;
        }
      }
    }
    return {
      "allDientes": _countAll,
      "curDefinDientes": _countOpc29DienteCariado,
      "curTempDientes": _countOpc30DienteCariado,
      "sellanteDientes": _countOpc31DienteCariado,
      "curDefinCaras": _countOpc29CarasCariado,
      "curTempCaras": _countOpc30CarasCariado,
      "sellanteCaras": _countOpc31CarasCariado
    };
  };
  //------ calculo de resumen - INI -----

}

ucOdontogram_loadAction();

function ucOdontogram_view(obj_dom, pkid_key) {
  var uc_odontogram_scale = "0.350";//0.38//0.286//0.304//
  var dataCodKey = ucOdontogram_model.dataCodToKey;
  var dataConfig = {};
  var dataEventos = {};
  var dataDientes = {};
  if (ucOdontogram_manager("exist", pkid_key)) {
    var _aux = ucOdontogram_manager("get", pkid_key);
    dataConfig = _aux["config"];
    dataEventos = _aux["eventos"];
    dataDientes = _aux["data"];
  } else {
    $(obj_dom).append("-ERROR:DATA-");
    return false;
  }
  $(obj_dom).svg({
    settings: {
      width: "1240px", height: "1754px",
      "xmlns": "http://www.w3.org/2000/svg",
      transform: "translate(0,0)", "style": "background:white;z-index:100;border:1px solid #dedede;"
    }
    //150 DPI --> 1240 x 1754
  });
  var fnViewUcOdontogram = function () {
    var _key = 0;
    var svg = $(obj_dom).svg("get").clear();
    var parentGroup = svg.group({transform: "scale(" + uc_odontogram_scale + ")"});
    parentGroup = svg.group({transform: "scale(" + uc_odontogram_scale + ")"});
    parentGroup = svg.group(parentGroup, {transform: "translate(" + 300 + "," + 600 + ")"});
    for (var i in dataDientes) {
      _key = parseInt(i);
      if (_key === 1) {
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
      } else if (1 < _key && _key < 16) {
        parentGroup = svg.group(parentGroup, {transform: "translate(" + 180 + "," + 0 + ")"});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
      } else if (_key === 16) {
        parentGroup = svg.group(parentGroup, {transform: "translate(" + 180 + "," + 0 + ")"});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
        break;
      }
    }
    parentGroup = svg.group({transform: "scale(" + uc_odontogram_scale + ")"});
    parentGroup = svg.group(parentGroup, {transform: "translate(" + 840 + "," + 1200 + ")"});
    for (var i in dataDientes) {
      _key = parseInt(i);
      if (_key === 51) {
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
      } else if (51 < _key && _key < 60) {
        parentGroup = svg.group(parentGroup, {transform: "translate(" + 180 + "," + 0 + ")"});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
      } else if (_key === 60) {
        parentGroup = svg.group(parentGroup, {transform: "translate(" + 180 + "," + 0 + ")"});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
        break;
      }
    }
    parentGroup = svg.group({transform: "scale(" + uc_odontogram_scale + ")"});
    parentGroup = svg.group(parentGroup, {transform: "translate(" + 840 + "," + 1900 + ")"});
    for (var i in dataDientes) {
      _key = parseInt(i);
      if (_key === 71) {
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
      } else if (71 < _key && _key < 80) {
        parentGroup = svg.group(parentGroup, {transform: "translate(" + 180 + "," + 0 + ")"});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
      } else if (_key === 80) {
        parentGroup = svg.group(parentGroup, {transform: "translate(" + 180 + "," + 0 + ")"});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
        break;
      }
    }
    parentGroup = svg.group({transform: "scale(" + uc_odontogram_scale + ")"});
    parentGroup = svg.group(parentGroup, {transform: "translate(" + 300 + "," + 2600 + ")"});
    for (var i in dataDientes) {
      _key = parseInt(i);
      if (_key === 31) {
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
      } else if (31 < _key && _key < 46) {
        parentGroup = svg.group(parentGroup, {transform: "translate(" + 180 + "," + 0 + ")"});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
      } else if (_key === 46) {
        parentGroup = svg.group(parentGroup, {transform: "translate(" + 180 + "," + 0 + ")"});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]["cod"]);
        break;
      }
    }
    //----- TEXT ---
    var txtEspecificacion = new Array();
    var txtEspecificGen = new Array();
    var txtObservaciones = new Array();
    var auxArrayText = [];
    var auxText = "";
    var flagTextObser = false;
    var flagTextEspec = false;
    var _datEventKeys = Object.keys(dataEventos);
    if (_datEventKeys.length > 0) {
      for (var opc in dataEventos) {
        for (var i in dataEventos[opc]) {
          auxText = "";
          if (dataEventos[opc][i]["option"] === "opc01") {
            auxText += ucOdontogram_model.opc.opc01.nombre;
            auxText += " [" + dataEventos[opc][i].param.codini + "-" + dataEventos[opc][i].param.codfin + "]";
            auxText += " estado " + dataEventos[opc][i].param.estado;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc02") {
            auxText += ucOdontogram_model.opc.opc02.nombre;
            auxText += " [" + dataEventos[opc][i].param.codini + "-" + dataEventos[opc][i].param.codfin + "]";
            auxText += " estado " + dataEventos[opc][i].param.estado;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc03") {
            auxText += ucOdontogram_model.opc.opc03.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "." +
              dataEventos[opc][i].param.cara.substring(2).toUpperCase() + "." +
              dataEventos[opc][i].param.parte.substring(2).toUpperCase() + "]";
            auxText += " tipo " + dataEventos[opc][i].param.tipo;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc04") {
            auxText += ucOdontogram_model.opc.opc04.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " Tipo " + ucOdontogram_model.opc.opc04.opciones.tipos[(dataEventos[opc][i].param.tipo)];
            auxText += " estado " + dataEventos[opc][i].param.estadoCorona;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc05") {
            auxText += ucOdontogram_model.opc.opc05.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc06") {
            auxText += ucOdontogram_model.opc.opc06.nombre;
            auxText += " [" + dataEventos[opc][i].param.codini + "-" + dataEventos[opc][i].param.codfin + "]";
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc07") {
            auxText += ucOdontogram_model.opc.opc07.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " " + ucOdontogram_model.opc.opc07.opciones.tipos[(dataEventos[opc][i].param.tipo)];
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc09") {
            auxText += ucOdontogram_model.opc.opc09.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            auxText += " Ubicación " + dataEventos[opc][i].param.ubicaciontxt;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc10") {
            auxText += ucOdontogram_model.opc.opc10.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc11") {
            auxText += ucOdontogram_model.opc.opc11.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc12") {
            auxText += ucOdontogram_model.opc.opc12.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc13") {
            auxText += ucOdontogram_model.opc.opc13.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc14") {
            auxText += ucOdontogram_model.opc.opc14.nombre;
            auxText += " " + dataEventos[opc][i].param.ubic;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc15") {
            auxText += ucOdontogram_model.opc.opc15.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " dirección " + dataEventos[opc][i].param.direccionubicacion;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc16") {
            auxText += ucOdontogram_model.opc.opc16.nombre;
            auxText += " [" + dataEventos[opc][i].param.codini + "-" + dataEventos[opc][i].param.codfin + "]";
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc17") {
            auxText += ucOdontogram_model.opc.opc17.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " giro " + dataEventos[opc][i].param.giro;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc18") {
            auxText += ucOdontogram_model.opc.opc18.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc19") {
            auxText += ucOdontogram_model.opc.opc19.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            auxText += ", estado " + dataEventos[opc][i].param.estadoImp;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc20") {
            auxText += ucOdontogram_model.opc.opc20.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc21") {
            auxText += ucOdontogram_model.opc.opc21.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc23") {
            auxText += ucOdontogram_model.opc.opc23.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " nivel " + dataEventos[opc][i].param.nivel;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc24") {
            auxText += ucOdontogram_model.opc.opc24.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " estado " + dataEventos[opc][i].param.estado;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc25") {
            auxText += ucOdontogram_model.opc.opc25.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " estado " + dataEventos[opc][i].param.estado;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc26") {
            auxText += ucOdontogram_model.opc.opc26.nombre;
            auxText += " [" + dataEventos[opc][i].param.codini + "-" + dataEventos[opc][i].param.codfin + "]";
            auxText += " estado " + dataEventos[opc][i].param.estado;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc27") {
            auxText += ucOdontogram_model.opc.opc27.nombre;
            auxText += " [" + dataEventos[opc][i].param.ubicacion + "]";
            auxText += " estado " + dataEventos[opc][i].param.estado;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc28") {
            auxText += ucOdontogram_model.opc.opc28.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc29") {
            auxText += ucOdontogram_model.opc.opc29.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "." +
              dataEventos[opc][i].param.cara.substring(2).toUpperCase() + "." +
              dataEventos[opc][i].param.parte.substring(2).toUpperCase() + "]";
            auxText += " tipo " + dataEventos[opc][i].param.tipomaterial;
            auxText += ", estado " + dataEventos[opc][i].param.estadoResPD;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc30") {
            auxText += ucOdontogram_model.opc.opc30.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "." +
              dataEventos[opc][i].param.cara.substring(2).toUpperCase() +
              dataEventos[opc][i].param.parte.substring(2).toUpperCase() + "]";
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc31") {
            auxText += ucOdontogram_model.opc.opc31.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "." +
              dataEventos[opc][i].param.cara.toUpperCase() + "]";
            auxText += " estado " + dataEventos[opc][i].param.estado;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc33") {
            auxText += ucOdontogram_model.opc.opc33.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            if (dataEventos[opc][i].param.desgasteVestibular === "S") {
              auxArrayText.push("vestibular");
            }
            if (dataEventos[opc][i].param.desgasteOclusal === "S") {
              auxArrayText.push("oclusal");
            }
            if (dataEventos[opc][i].param.desgasteLingual === "S") {
              auxArrayText.push("lingual");
            }
            auxText += " en " + auxArrayText.join("-");
            auxArrayText.splice(0);
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc34") {
            auxText += ucOdontogram_model.opc.opc34.nombre;
            auxText += " [" + dataEventos[opc][i].param.codini + "-" + dataEventos[opc][i].param.codfin + "]";
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc35") {
            auxText += ucOdontogram_model.opc.opc35.nombre;
            auxText += " [" + dataEventos[opc][i].param.codini + "-" + dataEventos[opc][i].param.codfin + "]";
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc36") {
            auxText += ucOdontogram_model.opc.opc36.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.tipo;
            auxText += ", estado " + dataEventos[opc][i].param.estado;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc37") {
            auxText += ucOdontogram_model.opc.opc37.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " hallazgo " + dataEventos[opc][i].param.value;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc38") {
            auxText += ucOdontogram_model.opc.opc38.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc39") {
            auxText += ucOdontogram_model.opc.opc39.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " tipo " + dataEventos[opc][i].param.value;
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc40") {
            auxText += ucOdontogram_model.opc.opc40.nombre;
            auxText += " [" + dataEventos[opc][i].param.cod + "]";
            auxText += " » " + dataEventos[opc][i].param.especificacion;
            txtEspecificacion.push({"htxt": auxText, "length": auxText.length});
          } else if (dataEventos[opc][i]["option"] === "opc41") {
            flagTextEspec = true;
            var arrayTexEsp = dataEventos[opc][i].param.especificacion.split(" ");
            for (var j in arrayTexEsp) {
              txtEspecificGen.push({"htxt": arrayTexEsp[j], "length": arrayTexEsp[j].length});
            }
          } else if (dataEventos[opc][i]["option"] === "opc42") {
            flagTextObser = true;
            var arrayTexObs = dataEventos[opc][i].param.observacion.split(" ");
            for (var j in arrayTexObs) {
              txtObservaciones.push({"htxt": arrayTexObs[j], "length": arrayTexObs[j].length});
            }
          }
        }
      }
    }
    //print
    var defaultPolygon = {fill: "white", stroke: "navy", strokeWidth: "0.5"};
    var max_lengthLineEspDet = 180;
    var max_lengthLineEspGen = 260;
    var max_lengthLineObsGen = 260;
    var defaultTextTitle = {
      fill: "navy", stroke: "none", strokeWidth: 0.8,
      "fill-opacity": "1", "stroke-opacity": "1",
      "style": "font-size: 44px;font-weight:normal;font-family: Arial;text-decoration: underline;"
    };
    var defaultTextCont = {
      fill: "navy", stroke: "none", strokeWidth: 0.8,
      "fill-opacity": "1", "stroke-opacity": "1", "alignment-baseline": "text-before-edge",
      style: "font-size: 30px;font-weight:normal;font-family: Arial;text-align: justify;"
    };
    var texts = svg.createText();
    var descripcion = {"titulo": "", "especificaciones": "", "observaciones": ""};
    //titulo
    var indicacionTituloOdontograma = Object.assign({}, defaultTextTitle);
    //especificaciones
    parentGroup = svg.group({transform: "scale(" + uc_odontogram_scale + ")"});
    parentGroup = svg.group(parentGroup, {transform: "translate(" + 300 + "," + 3360 + ")"});
    descripcion.especificaciones = svg.polygon(parentGroup, [[15, 0], [2865, 0], [2865, 980], [15, 980]],
      defaultPolygon);
    descripcion.especificaciones = svg.text(parentGroup, 20, 40, "Especificaciones: ", defaultTextTitle);
    var auxLength = 0;
    if (_datEventKeys.length > 0) {
      var _countrow = 0;
      var _printNext = false;
      for (var i in txtEspecificacion) {
        if ((auxLength + parseInt(txtEspecificacion[i].length)) > max_lengthLineEspDet) {
          descripcion.especificaciones = svg.text(parentGroup, 30, (80 + (_countrow) * 40), texts, defaultTextCont);
          texts = svg.createText();
          texts = texts.span(((parseInt(i) + 1) + ") " + txtEspecificacion[i].htxt + ";  "));
          auxLength = parseInt(txtEspecificacion[i].length) + 3;
          _countrow++;
          _printNext = true;
        } else {
          auxLength += parseInt(txtEspecificacion[i].length) + 3;
          texts = texts.span(((parseInt(i) + 1) + ") " + txtEspecificacion[i].htxt + ";  "));
          _printNext = true;
        }
      }
      if (_printNext === true) {
        descripcion.especificaciones = svg.text(parentGroup, 30, (80 + (_countrow) * 40), texts, defaultTextCont);
      }
      //---esp
      if (flagTextEspec === true) {
        texts = svg.createText();
        auxLength = 0;
        _printNext = false;
        _countrow = _countrow + 2;
        for (var i in txtEspecificGen) {
          if ((auxLength + parseInt(txtEspecificGen[i].length)) > max_lengthLineEspGen) {
            descripcion.especificaciones = svg.text(parentGroup, 30, (100 + (_countrow) * 40), texts, defaultTextCont);
            texts = svg.createText();
            texts = texts.span(txtEspecificGen[i].htxt + " ");
            auxLength = parseInt(txtEspecificGen[i].length) + 3;
            _countrow++;
            _printNext = true;
          } else {
            auxLength += parseInt(txtEspecificGen[i].length) + 3;
            texts = texts.span(txtEspecificGen[i].htxt + " ");
            _printNext = true;
          }
        }
        if (_printNext === true) {
          descripcion.especificaciones = svg.text(parentGroup, 30, (100 + (_countrow) * 40), texts, defaultTextCont);
        }
      }
    }
    //observaciones
    descripcion.observaciones = svg.polygon(parentGroup, [[15, 1000], [2865, 1000], [2865, 1440], [15, 1440]],
      defaultPolygon);
    descripcion.observaciones = svg.text(parentGroup, 20, 1040, "Observaciones: ", defaultTextTitle);
    if (flagTextObser === true) {
      var _countrow = 0;
      auxLength = 0;
      texts = svg.createText();
      for (var i in txtObservaciones) {
        if ((auxLength + parseInt(txtObservaciones[i].length)) > max_lengthLineObsGen) {
          descripcion.observaciones = svg.text(parentGroup, 30, (1080 + (_countrow) * 40), texts, defaultTextCont);
          texts = svg.createText();
          texts = texts.span(txtObservaciones[i].htxt + " ");
          auxLength = parseInt(txtObservaciones[i].length) + 3;
          _countrow++;
          _printNext = true;
        } else {
          auxLength += parseInt(txtObservaciones[i].length) + 3;
          texts = texts.span(txtObservaciones[i].htxt + " ");
          _printNext = true;
        }
      }
      if (_printNext === true) {
        descripcion.observaciones = svg.text(parentGroup, 30, (1080 + (_countrow) * 40), texts, defaultTextCont);
      }
    }
    $("#ucOdontogramDocumentPNGdownload").click();//crea enlace para download del odontograma
    //print resumen
    var datCariados = ucOdontogram_model.action.resumen.sumCariados();
    var datCurados = ucOdontogram_model.action.resumen.sumCurados();
    var htmlResumen = "";
    htmlResumen += "<div class='table-responsive'>";
    htmlResumen += "<table class='table table-striped ucOdontogramResumenView'>";
    htmlResumen += "<caption>RESUMEN</caption>";
    htmlResumen += "<thead>";
    htmlResumen += "<tr>";
    htmlResumen += "<td colspan='3' class='ucOdontogramResumenViewTitle'>PIEZAS DENTARIAS y SUPERFICIES</td>";
    htmlResumen += "</tr>";
    htmlResumen += "<th>_</th>";
    htmlResumen += "<th>Piezas dientarias</th>";
    htmlResumen += "<th>Superficies</th>";
    htmlResumen += "</thead>";
    htmlResumen += "<tbody>";
    htmlResumen += "<tr>";
    htmlResumen += "<td>Cariados</td>";
    htmlResumen += "<td>" + datCariados.dientesCariado + "</td>";
    htmlResumen += "<td>" + datCariados.carasCariados + "</td>";
    htmlResumen += "</tr>";
    htmlResumen += "<tr>";
    htmlResumen += "<td>Restauración definitiva</td>";
    htmlResumen += "<td>" + datCurados.curDefinDientes + "</td>";
    htmlResumen += "<td>" + datCurados.curDefinCaras + "</td>";
    htmlResumen += "</tr>";
    htmlResumen += "<tr>";
    htmlResumen += "<td>Restauración temporal</td>";
    htmlResumen += "<td>" + datCurados.curTempDientes + "</td>";
    htmlResumen += "<td>" + datCurados.curTempCaras + "</td>";
    htmlResumen += "</tr>";
    htmlResumen += "<tr>";
    htmlResumen += "<td>Sellantes</td>";
    htmlResumen += "<td>" + datCurados.sellanteDientes + "</td>";
    htmlResumen += "<td>" + datCurados.sellanteCaras + "</td>";
    htmlResumen += "</tr>";
    htmlResumen += "</tbody>";
    htmlResumen += "<tfoot>";
    htmlResumen += "<tr>";
    htmlResumen += "<td colspan='3' class='ucOdontogramResumenViewTitle'>PIEZAS DENTARIAS EXISTENTES y AUSENTES</td>";
    htmlResumen += "</tr>";
    htmlResumen += "<tr>";
    htmlResumen += "<th>_</th>";
    htmlResumen += "<th>Existentes</th>";
    htmlResumen += "<th>Ausentes por Cariados</th>";
    htmlResumen += "</tr>";
    htmlResumen += "<tr>";
    htmlResumen += "<td>Total</td>";
    htmlResumen += "<td>" + (datCariados.dientesTotal - datCariados.dientesAusentes) + "</td>";
    htmlResumen += "<td>" + datCariados.dientesAusenteCariados + "</td>";
    htmlResumen += "</tr>";
    htmlResumen += "<tfoot>";
    htmlResumen += "</table>";
    htmlResumen += "</div>";
    $("#" + dataConfig.idResumen).html(htmlResumen);

  };
  var fnGraficarDiente = function (svg, parentGroup, CodDiente) {
    var keyDiente = dataCodKey[CodDiente.toString()];
    if (typeof (dataDientes[keyDiente]) === "undefined") {
      $(obj_dom).append("-ERROR:DIENTE-");
      return false;
    }
    var propDent = dataDientes[keyDiente];
    var defaultPolygon = {
      fill: "white",
      stroke: "navy",
      strokeWidth: 0.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    };
    var defaultCuadrante = {fill: "none", stroke: "navy", strokeWidth: 0.3, "stroke-dasharray": "1,2"};
    var defaultLineBlue = {
      fill: "none",
      stroke: "blue",
      strokeWidth: 4.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    };
    var defaultIndicacionlineBlue = Object.assign({}, defaultLineBlue);
    defaultIndicacionlineBlue["strokeWidth"] = "6.5";
    var defaultIndicacionDienteAusente = Object.assign({}, defaultIndicacionlineBlue);
    defaultIndicacionDienteAusente["stroke-opacity"] = "0.7";
    defaultIndicacionDienteAusente["stroke-dasharray"] = "12 6";
    var indicacionTratmientoPulparBueno = Object.assign({}, defaultIndicacionlineBlue);
    indicacionTratmientoPulparBueno["strokeWidth"] = "8.5";
    var indicacionTratmientoPulparPPBueno = Object.assign({}, indicacionTratmientoPulparBueno);
    indicacionTratmientoPulparPPBueno["fill"] = "blue";
    var indicacionTratmientoPulparMalo = Object.assign({}, indicacionTratmientoPulparBueno);
    indicacionTratmientoPulparMalo["stroke"] = "red";
    var indicacionTratmientoPulparPPMalo = Object.assign({}, indicacionTratmientoPulparMalo);
    indicacionTratmientoPulparPPMalo["fill"] = "red";
    var defaultLineRed = {
      fill: "none",
      stroke: "red",
      strokeWidth: 4.0,
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    };

    var defaultAparatoOdontologicoBueno = Object.assign({}, defaultLineBlue);
    defaultAparatoOdontologicoBueno["strokeWidth"] = "4";
    var defaultAparatoOdontologicoMalo = Object.assign({}, defaultLineRed);
    defaultAparatoOdontologicoMalo["strokeWidth"] = "4";

    var defaultIndicacionlineRed = Object.assign({}, defaultLineRed);
    defaultIndicacionlineRed["strokeWidth"] = "6.5";
    var defaultIndicacionPolygonBlue = Object.assign({}, defaultPolygon);
    defaultIndicacionPolygonBlue["fill"] = "blue";
    defaultIndicacionPolygonBlue["stroke"] = "blue";
    defaultIndicacionPolygonBlue["strokeWidth"] = "5";

    var defaultPolygonBlue = {fill: "none", stroke: "blue", strokeWidth: 1.5, "stroke-linecap": "round"};
    var defaultCuadranText = {
      fill: "navy", stroke: "navy", strokeWidth: 0.1,
      style: "font-size: 15pt;font-weight:normal;font-family: Arial;"
    };
    var textS0DienteAnotacionBlue = Object.assign({}, defaultCuadranText);
    textS0DienteAnotacionBlue["style"] = "font-size: 24pt;font-weight:normal;font-family: Arial;text-anchor: middle; color:blue;";
    textS0DienteAnotacionBlue["fill"] = "blue";
    var textS0DienteAnotacionRed = Object.assign({}, defaultCuadranText);
    textS0DienteAnotacionRed["style"] = "font-size: 24pt;font-weight:normal;font-family: Arial;text-anchor: middle; color:red;";
    textS0DienteAnotacionRed["fill"] = "red";
    var auxCuadranteCodDiente = Object.assign({}, defaultCuadrante);
    var defaultTextS0DienteAnota_count = 0;
    var defaultTextS0DienteAnota_txt = {};
    var textS0DienteAnotacion = svg.createText();
    var borderPolygonDiente = {
      fill: "white", stroke: "#1C1C1C",
      strokeWidth: 1.4, "fill-opacity": "0.8", "stroke-opacity": "0.9",
      "stroke-linecap": "round"
    };
    var auxborderPolygonDiente = Object.assign({}, borderPolygonDiente);
    var defaultTextSuperNumerario = {
      fill: "navy", stroke: "navy", strokeWidth: 1.2,
      style: "font-size: 26px;font-weight:normal;font-family: Arial;",
      "fill-opacity": "1", "stroke-opacity": "0.8"
    };
    var defaultSuperNumerarioPolygon = {
      fill: "white", stroke: "blue", strokeWidth: 4.6,
      "fill-opacity": "0.6", "stroke-opacity": "0.9", "stroke-linecap": "round"
    };
    var defaultCodDienteText = {
      fill: "navy", stroke: "navy", strokeWidth: 0.9,
      style: "font-size: 32px;font-weight:normal;font-family: Arial;",
      "fill-opacity": "0.8", "stroke-opacity": "0.9"
    };
    var auxFormatTxt = Object.assign({}, defaultCodDienteText);
    auxFormatTxt["style"] = "font-size: 38px;font-family: Arial;text-anchor:middle;letter-spacing:2px";
    auxFormatTxt["stroke"] = "navy";
    var defaultFormatDienteCaras = {
      fill: "white", stroke: "#1C1C1C", strokeWidth: 1.4,
      "fill-opacity": "0.8", "stroke-opacity": "0.9",
      "class": "ucOdontogramElemCaraDiente", "stroke-linecap": "round",
      "stroke-linejoin": "round"
    };
    var auxFormatDienteCaras = Object.assign({}, defaultFormatDienteCaras);
    var defaultRRLine = {
      fill: "white",
      stroke: "red",
      strokeWidth: 1.0,
      "stroke-dasharray": "5,3",
      "fill-opacity": "0.6",
      "stroke-opacity": "0.9"
    };
    var defaultRRText = {
      fill: "red", stroke: "red", strokeWidth: 1.2,
      "fill-opacity": "1", "stroke-opacity": "0.8",
      style: "font-size: 28px;font-weight:normal;font-family: Arial;"
    };
    var dienteGroup = parentGroup;
    var cfgSec = ucOdontogram_model["config"]["sec"];
    var objData = {};
    //inicializar Objetos
    var fnLoadData = function () {
      for (var i in cfgSec) {
        objData[i] = {};
        objData[i]["base"] = {};
        for (var j in cfgSec[i]["opciones"]) {
          objData[i][j] = null;
        }
      }
    };
    fnLoadData();
    //---->("S0")
    dienteGroup = svg.group(parentGroup, {transform: "translate(" + cfgSec.S0.ubic[(propDent.position)].x + "," + cfgSec.S0.ubic[(propDent.position)].y + ")"});
    objData.S0.base = svg.polygon(dienteGroup, [[0, 0], [150, 0], [150, 120], [0, 120]], defaultPolygon);
    if (propDent.opc.opc03.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc03.tipo,
        "txtColor": propDent.opc.opc03.txtColor
      };
    }
    if (propDent.opc.opc04.hallazgo) {
      defaultTextS0DienteAnota_count++;
      if (propDent.opc.opc04.estadoCorona === "M") {
        propDent.opc.opc04.txtColor = "R";
      } else {
        propDent.opc.opc04.txtColor = "A";
      }
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc04.tipo,
        "txtColor": propDent.opc.opc04.txtColor
      };
    }
    if (propDent.opc.opc05.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc05.value,
        "txtColor": propDent.opc.opc05.txtColor
      };
    }
    if (propDent.opc.opc08.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc08.value,
        "txtColor": propDent.opc.opc08.txtColor
      };
    }
    if (propDent.opc.opc09.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc09.value,
        "txtColor": propDent.opc.opc09.txtColor
      };
    }
    if (propDent.opc.opc18.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc18.value,
        "txtColor": propDent.opc.opc18.txtColor,
      };
    }
    if (propDent.opc.opc19.hallazgo) {
      defaultTextS0DienteAnota_count++;
      if (propDent.opc.opc19.estadoImp === "M") {
        propDent.opc.opc19.txtColor = "R";
      } else {
        propDent.opc.opc19.txtColor = "A";
      }
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc19.value,
        "txtColor": propDent.opc.opc19.txtColor,
      };
    }
    if (propDent.opc.opc20.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc20.value,
        "txtColor": propDent.opc.opc20.txtColor,
      };
    }
    if (propDent.opc.opc21.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc21.value,
        "txtColor": propDent.opc.opc21.txtColor,
      };
    }
    if (propDent.opc.opc23.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc23.nivel,
        "txtColor": propDent.opc.opc23.txtColor,
      };
    }
    if (propDent.opc.opc28.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc28.value,
        "txtColor": propDent.opc.opc28.txtColor,
      };
    }
    if (propDent.opc.opc29.hallazgo) {
      defaultTextS0DienteAnota_count++;
      if (propDent.opc.opc29.estadoRest === "M") {
        propDent.opc.opc29.txtColor = "R";
      } else {
        propDent.opc.opc29.txtColor = "A";
      }
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc29.tipoMaterial,
        "txtColor": propDent.opc.opc29.txtColor,
      };
    }
    if (propDent.opc.opc31.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc31.value,
        "txtColor": propDent.opc.opc31.txtColor,
      };
    }
    if (propDent.opc.opc32.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc32.value,
        "txtColor": propDent.opc.opc32.txtColor,
      };
    }
    if (propDent.opc.opc33.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc33.value,
        "txtColor": propDent.opc.opc33.txtColor,
      };
    }
    if (propDent.opc.opc36.hallazgo) {
      defaultTextS0DienteAnota_count++;
      if (typeof propDent.opc.opc36.estado === "string" && propDent.opc.opc36.estado === "M") {
        propDent.opc.opc36.txtColor = "R";
      } else {
        propDent.opc.opc36.txtColor = "A";
      }
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc36.tipo,
        "txtColor": propDent.opc.opc36.txtColor,
      };
    }
    if (propDent.opc.opc37.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc37.value,
        "txtColor": propDent.opc.opc37.txtColor,
      };
    }
    if (propDent.opc.opc38.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc38.value,
        "txtColor": propDent.opc.opc38.txtColor,
      };
    }
    if (propDent.opc.opc39.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = {
        "valor": propDent.opc.opc39.value,
        "txtColor": propDent.opc.opc39.txtColor,
      };
    }
    //escribir texto
    if (defaultTextS0DienteAnota_count > 0) {
      for (var i in defaultTextS0DienteAnota_txt) {
        var colorText = {};
        if (defaultTextS0DienteAnota_txt[i]["txtColor"] === "A") {
          colorText = textS0DienteAnotacionBlue;
        } else {
          colorText = textS0DienteAnotacionRed;
        }
        if (i.toString() === "1") {
          textS0DienteAnotacion = textS0DienteAnotacion.span(defaultTextS0DienteAnota_txt[i]["valor"], colorText);
        } else if ((i % 2) === 1) {
          textS0DienteAnotacion = textS0DienteAnotacion.span(defaultTextS0DienteAnota_txt[i]["valor"], colorText);
        } else {
          textS0DienteAnotacion = textS0DienteAnotacion.span(", " + defaultTextS0DienteAnota_txt[i]["valor"],
            colorText);
          objData.S0 = svg.text(dienteGroup, 75, (Math.floor((i / 2)) * 35), textS0DienteAnotacion,
            textS0DienteAnotacionBlue);
          textS0DienteAnotacion = svg.createText();
        }
      }
      objData.S0 = svg.text(
        dienteGroup, 75,
        (Math.ceil(defaultTextS0DienteAnota_count / 2) * 35),
        textS0DienteAnotacion, textS0DienteAnotacionBlue
      );
    }
    //---->("S1")
    dienteGroup = svg.group(parentGroup, {transform: "translate(" + cfgSec.S1.ubic[(propDent.position)].x + "," +
        cfgSec.S1.ubic[(propDent.position)].y + ")"});
    objData.S1.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc35.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        if (propDent.opc.opc35.lado === "D") {
          objData.S1.opc35 = svg.path(dienteGroup, "M30 30 C 70 0, 220 0, 240 30", defaultIndicacionlineBlue);
          objData.S1.opc35 = svg.polyline(dienteGroup, [[218, 30], [240, 30], [229, 14]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc35.lado === "Z") {
          objData.S1.opc35 = svg.path(dienteGroup, "M-90 30 C -50 0, 100 0, 120 30", defaultIndicacionlineBlue);
          objData.S1.opc35 = svg.polyline(dienteGroup, [[-68, 30], [-90, 30], [-79, 14]], defaultIndicacionlineBlue);
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        if (propDent.opc.opc35.lado === "D") {
          objData.S1.opc35 = svg.path(dienteGroup, "M30 0 C 70 30, 220 30, 240 0", defaultIndicacionlineBlue);
          objData.S1.opc35 = svg.polyline(dienteGroup, [[218, 0], [240, 0], [229, 16]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc35.lado === "Z") {
          objData.S1.opc35 = svg.path(dienteGroup, "M-90 0 C -50 30, 100 30, 120 0", defaultIndicacionlineBlue);
          objData.S1.opc35 = svg.polyline(dienteGroup, [[-68, 0], [-90, 0], [-79, 16]], defaultIndicacionlineBlue);
        }
      }
    }
    //---->("S2")
    dienteGroup = svg.group(parentGroup, {transform: "translate(" + cfgSec.S2.ubic[(propDent.position)].x + "," +
        cfgSec.S2.ubic[(propDent.position)].y + ")"});
    objData.S2.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc25.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        if (propDent.opc.opc25.afectacion === "I") {
          if (propDent.opc.opc25.estado === "B") {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[90, 30], [90, 15], [180, 15]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[90, 30], [90, 15], [180, 15]], defaultLineRed);
          }
        } else if (propDent.opc.opc25.afectacion === "M") {
          if (propDent.opc.opc25.estado === "B") {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultLineRed);
          }
        } else if (propDent.opc.opc25.afectacion === "F") {
          if (propDent.opc.opc25.estado === "B") {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [90, 15], [90, 30]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [90, 15], [90, 30]], defaultLineRed);
          }
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        if (propDent.opc.opc25.afectacion === "I") {
          if (propDent.opc.opc25.estado === "B") {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[90, 0], [90, 15], [180, 15]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[90, 0], [90, 15], [180, 15]], defaultLineRed);
          }
        } else if (propDent.opc.opc25.afectacion === "M") {
          if (propDent.opc.opc25.estado === "B") {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultLineRed);
          }
        } else if (propDent.opc.opc25.afectacion === "F") {
          if (propDent.opc.opc25.estado === "B") {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [90, 15], [90, 0]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [90, 15], [90, 0]], defaultLineRed);
          }
        }
      }
    }
    //---->("S3")
    dienteGroup = svg.group(parentGroup, {transform: "translate(" + cfgSec.S3.ubic[(propDent.position)].x + "," +
        cfgSec.S3.ubic[(propDent.position)].y + ")"});
    objData.S3.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc26.hallazgo) {
      if (propDent.opc.opc26.afectacion === "I") {
        if (propDent.opc.opc26.estado === "B") {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[30, 10], [180, 10]], defaultLineBlue);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[30, 20], [180, 20]], defaultLineBlue);
        } else {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[30, 10], [180, 10]], defaultLineRed);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[30, 20], [180, 20]], defaultLineRed);
        }
      } else if (propDent.opc.opc26.afectacion === "M") {
        if (propDent.opc.opc26.estado === "B") {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 10], [180, 10]], defaultLineBlue);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 20], [180, 20]], defaultLineBlue);
        } else {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 10], [180, 10]], defaultLineRed);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 20], [180, 20]], defaultLineRed);
        }
      } else if (propDent.opc.opc26.afectacion === "F") {
        if (propDent.opc.opc26.estado === "B") {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 10], [150, 10]], defaultLineBlue);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 20], [150, 20]], defaultLineBlue);
        } else {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 10], [150, 10]], defaultLineRed);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 20], [150, 20]], defaultLineRed);
        }
      }
    }
    //---->("S4")
    dienteGroup = svg.group(parentGroup, {transform: "translate(" + cfgSec.S4.ubic[(propDent.position)].x + "," +
        cfgSec.S4.ubic[(propDent.position)].y + ")"});
    objData.S4.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc01.hallazgo) {
      if (propDent.opc.opc01.afectacion === "I") {
        if (propDent.opc.opc01.estado === "B") {
          objData.S4.opc01 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]],
            defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[82, 15], [98, 15]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[90, 7], [90, 23]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[105, 15], [180, 15]], defaultAparatoOdontologicoBueno);
        } else {
          objData.S4.opc01 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]],
            defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[82, 15], [98, 15]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[90, 7], [90, 23]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[105, 15], [180, 15]], defaultAparatoOdontologicoMalo);
        }
      } else if (propDent.opc.opc01.afectacion === "M") {
        if (propDent.opc.opc01.estado === "B") {
          objData.S4.opc01 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultAparatoOdontologicoBueno);
        } else {
          objData.S4.opc01 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultAparatoOdontologicoMalo);
        }
      } else if (propDent.opc.opc01.afectacion === "F") {
        if (propDent.opc.opc01.estado === "B") {
          objData.S4.opc01 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]],
            defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[82, 15], [98, 15]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[90, 7], [90, 23]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[0, 15], [75, 15]], defaultAparatoOdontologicoBueno);
        } else {
          objData.S4.opc01 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]],
            defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[82, 15], [98, 15]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[90, 7], [90, 23]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[0, 15], [75, 15]], defaultAparatoOdontologicoMalo);
        }
      }
    }
    //---->("S5")
    dienteGroup = svg.group(parentGroup, {transform: "translate(" + cfgSec.S5.ubic[(propDent.position)].x + "," +
        cfgSec.S5.ubic[(propDent.position)].y + ")"});
    objData.S5.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc02.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        if (propDent.opc.opc02.afectacion === "I") {
          if (propDent.opc.opc02.estado === "B") {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]],
              defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]],
              defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === "M") {
          if (propDent.opc.opc02.estado === "B") {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === "F") {
          if (propDent.opc.opc02.estado === "B") {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30]], defaultAparatoOdontologicoMalo);
          }
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        if (propDent.opc.opc02.afectacion === "I") {
          if (propDent.opc.opc02.estado === "B") {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[30, 0], [60, 30], [90, 0], [120, 30], [150, 0], [180, 30]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[30, 0], [60, 30], [90, 0], [120, 30], [150, 0], [180, 30]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === "M") {
          if (propDent.opc.opc02.estado === "B") {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 30], [30, 0], [60, 30], [90, 0], [120, 30], [150, 0], [180, 30]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 30], [30, 0], [60, 30], [90, 0], [120, 30], [150, 0], [180, 30]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === "F") {
          if (propDent.opc.opc02.estado === "B") {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 30], [30, 0], [60, 30], [90, 0], [120, 30], [150, 0]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 30], [30, 0], [60, 30], [90, 0], [120, 30], [150, 0]], defaultAparatoOdontologicoMalo);
          }
        }
      } else {
        if (propDent.opc.opc02.afectacion === "I") {
          if (propDent.opc.opc02.estado === "B") {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === "M") {
          if (propDent.opc.opc02.estado === "B") {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === "F") {
          if (propDent.opc.opc02.estado === "B") {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup,
              [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30]], defaultAparatoOdontologicoMalo);
          }
        }
      }
    }
    //---->("S6")///preguntar si puede haber 3 consecutivos
    dienteGroup = svg.group(parentGroup, {transform: "translate(" + cfgSec.S6.ubic[(propDent.position)].x + "," +
        cfgSec.S6.ubic[(propDent.position)].y + ")"});
    objData.S6.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 60], [0, 60]], defaultCuadrante);
    if (propDent.opc.opc16.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        if (propDent.opc.opc16.afectacion === "D") {
          objData.S6.opc16 = svg.ellipse(dienteGroup, 120, 30, 74, 30, defaultIndicacionlineBlue);
        } else if (propDent.opc.opc16.afectacion === "Z") {
          objData.S6.opc16 = svg.ellipse(dienteGroup, 60, 30, 74, 30, defaultIndicacionlineBlue);
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        if (propDent.opc.opc16.afectacion === "D") {
          objData.S6.opc16 = svg.ellipse(dienteGroup, 120, 30, 74, 30, defaultIndicacionlineBlue);
        } else if (propDent.opc.opc16.afectacion === "Z") {
          objData.S6.opc16 = svg.ellipse(dienteGroup, 60, 30, 74, 30, defaultIndicacionlineBlue);
        }
      }
    }
    if (propDent.opc.opc40.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S6.opc40 = svg.circle(dienteGroup, 90, 30, 40, defaultIndicacionlineBlue);
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S6.opc40 = svg.circle(dienteGroup, 90, 30, 40, defaultIndicacionlineBlue);
      }
    }
    if (propDent.opc.opc11.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S6.opc11 = svg.polygon(dienteGroup, [[30, 50], [90, -10], [150, 50]], defaultIndicacionlineBlue);
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S6.opc11 = svg.polygon(dienteGroup, [[30, 10], [90, 70], [150, 10]], defaultIndicacionlineBlue);
      } else {
        objData.S6.opc11 = svg.polygon(dienteGroup, [[30, 50], [90, -10], [150, 50]], defaultIndicacionlineBlue);
      }
    }
    objData.S6.base = svg.text(dienteGroup, 90, 45, (" " + CodDiente.toString() + " "), auxFormatTxt);
    auxCuadranteCodDiente["data-cod"] = CodDiente.toString();
    auxCuadranteCodDiente["class"] = "ucOdontogramElemTextCodDiente";
    auxCuadranteCodDiente["fill"] = "white";
    auxCuadranteCodDiente["fill-opacity"] = "0.1";
    auxCuadranteCodDiente["stroke"] = "white";
    auxCuadranteCodDiente["stroke-opacity"] = "0.1";
    objData.S6.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 60], [0, 60]], auxCuadranteCodDiente);
    //---->("S7")
    ///- INI_new ---------------------------------------------------------------------------------
    var fnDibujarRaizCaras = function (_parentGroup, _dienteGroup, _propDent, _cfgSec, _objData, _svg, _model,
                                       _atributos) {
      var _tmp = _propDent.model.split("");
      var codDiente = _propDent.cod;
      var model_ub = _tmp[0] + _tmp[1];
      var model_key = _tmp[2];
      var _grafRaiz = _model[model_ub][model_key].r.graf;
      var _grafCarP = _model[model_ub][model_key].c.posiciones;
      var _grafCarSP = null;
      if ((typeof _model[model_ub][model_key]["s"] === "object") &&
        (typeof _model[model_ub][model_key].s["posiciones"] === "object")) {
        _grafCarSP = _model[model_ub][model_key].s.posiciones;
      }
      var _auxFormatoObjetoPintar = {};
      var i = null;
      var fnLlenarAtributos = function (attr, _auxAttr) {
        if (Object.keys(attr).length > 0) {
          for (var i in attr) {
            _auxAttr[i] = attr[i];
          }
        }
      }
      for (i in _grafRaiz) {
        _auxFormatoObjetoPintar = Object.assign({}, _atributos.raiz);
        if (typeof _grafRaiz[i].attr === "object") {
          fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
        }
        _objData.S7.base = _svg.polygon(_dienteGroup, _grafRaiz[i].coordenadas, _auxFormatoObjetoPintar);
      }
      //las caras del diente

      _objData.S7.opc03 = {
        "pcv": {
          "sp00": null,
          "spd": null,
          "spc": null,
          "spm": null,
          "spsd": null,
          "spsm": null,
        },
        "pcm": {
          "sp00": null,
          "spv": null,
          "spl": null,
        },
        "pcl": {
          "sp00": null,
          "spm": null,
          "spc": null,
          "spd": null,
          "spsd": null,
          "spsc": null,
          "spsm": null,
        },
        "pcd": {
          "sp00": null,
          "spv": null,
          "spl": null,
        },
        "pco": {
          "sp00": null,
          "spvd": null,
          "spvc": null,
          "spvm": null,
          "splm": null,
          "splc": null,
          "spld": null,
          "spsvd": null,
          "spsvm": null,
          "spscd": null,
          "spscc": null,
          "spscm": null,
          "spsld": null,
          "spslm": null,
        }
      };
      _objData.S7.opc29 = {
        "pcv": {
          "sp00": null,
          "spd": null,
          "spc": null,
          "spm": null,
          "spsd": null,
          "spsm": null,
        },
        "pcm": {
          "sp00": null,
          "spv": null,
          "spl": null,
        },
        "pcl": {
          "sp00": null,
          "spm": null,
          "spc": null,
          "spd": null,
          "spsd": null,
          "spsc": null,
          "spsm": null,
        },
        "pcd": {
          "sp00": null,
          "spv": null,
          "spl": null,
        },
        "pco": {
          "sp00": null,
          "spvd": null,
          "spvc": null,
          "spvm": null,
          "splm": null,
          "splc": null,
          "spld": null,
          "spsvd": null,
          "spsvm": null,
          "spscd": null,
          "spscc": null,
          "spscm": null,
          "spsld": null,
          "spslm": null,
        }
      };
      _objData.S7.opc30 = {
        "pcv": {
          "sp00": null,
          "spd": null,
          "spc": null,
          "spm": null,
          "spsd": null,
          "spsm": null,
        },
        "pcm": {
          "sp00": null,
          "spv": null,
          "spl": null,
        },
        "pcl": {
          "sp00": null,
          "spm": null,
          "spc": null,
          "spd": null,
          "spsd": null,
          "spsc": null,
          "spsm": null,
        },
        "pcd": {
          "sp00": null,
          "spv": null,
          "spl": null,
        },
        "pco": {
          "sp00": null,
          "spvd": null,
          "spvc": null,
          "spvm": null,
          "splm": null,
          "splc": null,
          "spld": null,
          "spsvd": null,
          "spsvm": null,
          "spscd": null,
          "spscc": null,
          "spscm": null,
          "spsld": null,
          "spslm": null,
        }
      };
      var auxCuadranteCodDiente = _atributos.cara.cuadrante;
      var auxFormatDienteCaras = _atributos.cara.format_diente_cara;
      var defaultFormatDienteCaras = _atributos.cara.format_diente_cara_default;

      auxFormatDienteCaras["class"] = "";
      auxFormatDienteCaras["data-cod"] = codDiente.toString();
      var auxPD = null; // posicion dde cara
      var auxPDS = null; // posicion sector
      //---------------------------------------------------- opc03-INI - caries --------------------------------------
      auxFormatDienteCaras["fill-opacity"] = defaultFormatDienteCaras["fill-opacity"];
      for (var _p in _grafCarP) {
        auxFormatDienteCaras["stroke"] = defaultFormatDienteCaras["stroke"];
        auxFormatDienteCaras["fill"] = "white";
        auxPD = "pc" + _p;
        //graficar por caras
        for (i in _grafCarP[_p].graf) {
          _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
          if (typeof _grafRaiz[i].attr === "object") {
            fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
          }
          _objData.S7.opc03[auxPD].sp00 = _svg.polygon(_dienteGroup, _grafCarP[_p].graf[i].coordenadas,
            _auxFormatoObjetoPintar);
        }
        auxFormatDienteCaras["stroke"] = "none";
        auxFormatDienteCaras["stroke-width"] = "1";
        //graficar sectors de caras
        for (var _s in _grafCarP[_p].sectores) {
          auxPDS = "sp" + _s;
          if (_propDent.opc.opc03[auxPD][auxPDS].estado === "S") {
            auxFormatDienteCaras["fill"] = "red";
          } else {
            auxFormatDienteCaras["fill"] = "white";
          }
          //graficar por sector
          for (i in _grafCarP[_p].sectores[_s].graf) {
            _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
            if (typeof _grafRaiz[i].attr === "object") {
              fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
            }
            _objData.S7.opc03[auxPD][auxPDS] = _svg.polygon(_dienteGroup,
              _grafCarP[_p].sectores[_s].graf[i].coordenadas, _auxFormatoObjetoPintar);
          }
        }
      }
      //---------------------------------------------------- opc03-FIN - caries --------------------------------------
      //---------------------------------------------------- opc29-INI - caries --------------------------------------
      auxFormatDienteCaras["fill-opacity"] = defaultFormatDienteCaras["fill-opacity"];
      auxFormatDienteCaras["stroke-width"] = "6";
      for (var _p in _grafCarP) {
        //graficar sectors de caras
        auxPD = "pc" + _p;
        for (var _s in _grafCarP[_p].sectores) {
          auxPDS = "sp" + _s;
          if (_propDent.opc.opc29[auxPD][auxPDS].estado === "S") {
            if (_propDent.opc.opc29[auxPD][auxPDS].estadoRest === "M") {
              auxFormatDienteCaras["fill"] = "red";
            } else {
              auxFormatDienteCaras["fill"] = "blue";
            }
            auxFormatDienteCaras["stroke"] = "none";//none//white
          } else {
            auxFormatDienteCaras["fill"] = "none";
            auxFormatDienteCaras["stroke"] = "none";
          }
          //graficar por sector
          for (i in _grafCarP[_p].sectores[_s].graf) {
            _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
            if (typeof _grafRaiz[i].attr === "object") {
              fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
            }
            _objData.S7.opc29[auxPD][auxPDS] = _svg.polygon(_dienteGroup,
              _grafCarP[_p].sectores[_s].graf[i].coordenadas, _auxFormatoObjetoPintar);
          }
        }
      }
      //---------------------------------------------------- opc29-FIN - caries --------------------------------------
      //---------------------------------------------------- opc30-INI - caries --------------------------------------
      auxFormatDienteCaras["fill-opacity"] = "0.95";
      auxFormatDienteCaras["stroke-width"] = "4";
      auxFormatDienteCaras["stroke-linejoin"] = "round";
      //auxFormatDienteCaras["stroke-dasharray"] = "6 4";
      for (var _p in _grafCarP) {
        //graficar sectors de caras
        auxPD = "pc" + _p;
        for (var _s in _grafCarP[_p].sectores) {
          auxPDS = "sp" + _s;
          if (_propDent.opc.opc30[auxPD][auxPDS].estado === "S") {
            auxFormatDienteCaras["fill"] = "white";
            auxFormatDienteCaras["stroke-opacity"] = "0.95";
            auxFormatDienteCaras["stroke"] = "red";
          } else {
            auxFormatDienteCaras["fill"] = "none";
            auxFormatDienteCaras["stroke"] = "none";
          }
          //graficar por sector
          for (i in _grafCarP[_p].sectores[_s].graf) {
            _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
            if (typeof _grafRaiz[i].attr === "object") {
              fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
            }
            _objData.S7.opc30[auxPD][auxPDS] = _svg.polygon(_dienteGroup,
              _grafCarP[_p].sectores[_s].graf[i].coordenadas, _auxFormatoObjetoPintar);
          }
        }
      }
      //---------------------------------------------------- opc30-FIN - caries --------------------------------------
      //---------------------------------------------------- opc31-INI - sellantes --------------------------------------
      _objData.S7.opc31 = {
        "vd": {"sp00": null},
        "vm": {"sp00": null},
        "ovd": {"sp00": null},
        "ovm": {"sp00": null},
        "ocd": {"sp00": null},
        "occ": {"sp00": null},
        "ocm": {"sp00": null},
        "old": {"sp00": null},
        "olm": {"sp00": null},
        "ld": {"sp00": null},
        "lc": {"sp00": null},
        "lm": {"sp00": null},
      };
      auxFormatDienteCaras["fill-opacity"] = "0.64";
      auxFormatDienteCaras["stroke-width"] = "0.4";
      auxFormatDienteCaras["stroke-linejoin"] = "round";
      auxFormatDienteCaras["stroke-dasharray"] = "2 1";
      if (typeof _grafCarSP === "object") {
        for (var _p in _grafCarSP) {
          //graficar surcos
          if (_propDent.opc.opc31[_p]["sp00"].estado === "B") {
            auxFormatDienteCaras["fill"] = "#0000ff";
            auxFormatDienteCaras["stroke"] = "#b3b3ff";
          } else if (_propDent.opc.opc31[_p]["sp00"].estado === "M") {
            auxFormatDienteCaras["fill"] = "#ff0000";
            auxFormatDienteCaras["stroke"] = "#ff8080";
          } else {
            auxFormatDienteCaras["fill"] = "none";
            auxFormatDienteCaras["stroke"] = "none";
          }
          for (i in _grafCarSP[_p].graf) {
            _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
            if (typeof _grafCarSP[_p].graf[i].attr === "object") {
              fnLlenarAtributos(_grafCarSP[_p].graf[i].attr, _auxFormatoObjetoPintar);
            }
            _objData.S7.opc31[_p] = _svg.polygon(_dienteGroup, _grafCarSP[_p].graf[i].coordenadas,
              _auxFormatoObjetoPintar);
          }
        }
      }
      //---------------------------------------------------- opc31-FIN - sellantes -------------------------------------
      //---------------------------------------------------- SELECT-INI - ALL-OBJ-CARA ---------------------------------
      auxFormatDienteCaras["class"] = defaultFormatDienteCaras["class"];
      auxFormatDienteCaras["fill"] = "white";
      auxFormatDienteCaras["stroke"] = "white";
      auxFormatDienteCaras["stroke-width"] = "4";
      auxFormatDienteCaras["fill-opacity"] = "0.1";
      auxFormatDienteCaras["stroke-opacity"] = "0.1";
      //cara: posiciones y sectores
      for (var _p in _grafCarP) {
        //graficar sectors de caras
        auxPD = "pc" + _p;
        auxFormatDienteCaras["data-cara"] = auxPD;
        for (var _s in _grafCarP[_p].sectores) {
          auxPDS = "sp" + _s;
          auxFormatDienteCaras["data-parte"] = auxPDS;
          auxFormatDienteCaras["data-est03"] = _propDent.opc.opc03[auxPD][auxPDS].estado;
          auxFormatDienteCaras["data-est29"] = _propDent.opc.opc29[auxPD][auxPDS].estado;
          auxFormatDienteCaras["data-est30"] = _propDent.opc.opc30[auxPD][auxPDS].estado;
          //graficar por sector
          for (i in _grafCarP[_p].sectores[_s].graf) {
            _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
            _objData.S7.base = _svg.polygon(_dienteGroup, _grafCarP[_p].sectores[_s].graf[i].coordenadas,
              _auxFormatoObjetoPintar);
          }
        }
      }
      //surcos: posiciones y sectores
      auxFormatDienteCaras["class"] = "ucOdontogramElemSurcoDiente";
      if (typeof _grafCarSP === "object" && ucOdontogram_model.glvar.select.opc === "act31") {
        for (var _p in _grafCarSP) {
          var _s = "sp00";
          auxFormatDienteCaras["data-cara"] = _p;
          auxFormatDienteCaras["data-parte"] = _s;
          auxFormatDienteCaras["data-est31"] = _propDent.opc.opc31[_p][_s].estado;
          //graficar por sector
          for (i in _grafCarSP[_p].graf) {
            _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
            _objData.S7.base = _svg.polygon(_dienteGroup, _grafCarSP[_p].graf[i].coordenadas, _auxFormatoObjetoPintar);
          }
        }
      }
      //---------------------------------------------------- SELECT-FIN - ALL-OBJ-CARA ---------------------------------
    };
    var s7_atributos = {
      "raiz": borderPolygonDiente,
      "cara": {
        "cuadrante": auxCuadranteCodDiente,
        "format_diente_cara": auxFormatDienteCaras,
        "format_diente_cara_default": defaultFormatDienteCaras,
      }
    };
    ///- FIN_new ---------------------------------------------------------------------------------
    dienteGroup = svg.group(
      parentGroup,
      {transform: "translate(" + cfgSec.S7.ubic[(propDent.position)].x + "," +
          cfgSec.S7.ubic[(propDent.position)].y + ")"}
    );
    objData.S7.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 240], [0, 240]], defaultCuadrante);

    //permite dibujar la raiz
    fnDibujarRaizCaras(
      parentGroup,
      dienteGroup,
      propDent,
      cfgSec,
      objData,
      svg,
      ucOdontgramDienteGrafModel,
      s7_atributos
    );
    //S
    if (propDent.opc.opc34.hallazgo) {
      if (propDent.opc.opc34.ubicacion === "D") {
        if ((propDent.position === "SP") || (propDent.position === "ST")) {
          objData.S7.opc34 = svg.ellipse(dienteGroup, 180, 30, 36, 26, defaultSuperNumerarioPolygon);
          objData.S7.opc34 = svg.text(dienteGroup, 172, 38, "S", defaultTextSuperNumerario);
        } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
          objData.S7.opc34 = svg.ellipse(dienteGroup, 180, 210, 36, 26, defaultSuperNumerarioPolygon);
          objData.S7.opc34 = svg.text(dienteGroup, 172, 218, "S", defaultTextSuperNumerario);
        }
      }
    }
    //Erupcion
    if (propDent.opc.opc10.hallazgo) {
      indicacionPDEnErupcion = Object.assign({}, defaultIndicacionlineBlue);
      indicacionPDEnErupcion["stroke-dasharray"] = "12 6";
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S7.opc10 = svg.polyline(dienteGroup,
          [[120, 0], [60, 37.5], [120, 75], [60, 112.5], [120, 150], [60, 187.5], [90, 206.25], [90, 255]],
          indicacionPDEnErupcion);
        objData.S8.opc10 = svg.polyline(dienteGroup, [[50, 230], [90, 255], [130, 230]], defaultIndicacionlineBlue);
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S7.opc10 = svg.polyline(dienteGroup,
          [[90, -15], [90, 33.75], [60, 52.5], [120, 90], [60, 127.5], [120, 165], [60, 202.5], [120, 240]],
          indicacionPDEnErupcion);
        objData.S8.opc10 = svg.polyline(dienteGroup, [[50, 10], [90, -15], [130, 10]], defaultIndicacionlineBlue);
      } else {
        objData.S7.opc10 = svg.polyline(dienteGroup,
          [[120, 0], [60, 37.5], [120, 75], [60, 112.5], [120, 150], [60, 187.5], [90, 206.25], [90, 255]],
          indicacionPDEnErupcion);
        objData.S8.opc10 = svg.polyline(dienteGroup, [[50, 230], [90, 255], [130, 230]], defaultIndicacionlineBlue);
      }
    }
    //Diastema
    if (propDent.opc.opc06.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        if (propDent.opc.opc06.afectacion === "D") {
          objData.S7.opc06 = svg.path(dienteGroup, "M150 45 C 180 90, 180 210, 150 255", defaultIndicacionlineBlue);
        } else if (propDent.opc.opc06.afectacion === "Z") {
          objData.S7.opc06 = svg.path(dienteGroup, "M30 45 C 0 90, 0 210, 30 255", defaultIndicacionlineBlue);
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        if (propDent.opc.opc06.afectacion === "D") {
          objData.S7.opc06 = svg.path(dienteGroup, "M150 -15 C 180 30, 180 150, 150 195", defaultIndicacionlineBlue);
        } else if (propDent.opc.opc06.afectacion === "Z") {
          objData.S7.opc06 = svg.path(dienteGroup, "M30 -15 C 0 30, 0 150, 30 195", defaultIndicacionlineBlue);
        }
      }
    }
    //Perno/Espigo
    if (propDent.opc.opc24.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        if (propDent.opc.opc24.estado === "B") {
          objData.S7.opc24 = svg.polyline(dienteGroup, [[90, 15], [90, 135]], defaultIndicacionlineBlue);
          objData.S7.opc24 = svg.rect(dienteGroup, 45, 135, 90, 90, 2, 2, defaultIndicacionlineBlue);
        } else if (propDent.opc.opc24.estado === "M") {
          objData.S7.opc24 = svg.polyline(dienteGroup, [[90, 15], [90, 135]], defaultIndicacionlineRed);
          objData.S7.opc24 = svg.rect(dienteGroup, 45, 135, 90, 90, 2, 2, defaultIndicacionlineRed);
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        if (propDent.opc.opc24.estado === "B") {
          objData.S7.opc24 = svg.polyline(dienteGroup, [[90, 105], [90, 225]], defaultIndicacionlineBlue);
          objData.S7.opc24 = svg.rect(dienteGroup, 45, 15, 90, 90, 2, 2, defaultIndicacionlineBlue);
        } else if (propDent.opc.opc24.estado === "M") {
          objData.S7.opc24 = svg.polyline(dienteGroup, [[90, 105], [90, 225]], defaultIndicacionlineRed);
          objData.S7.opc24 = svg.rect(dienteGroup, 45, 15, 90, 90, 2, 2, defaultIndicacionlineRed);
        }
      }
    }
    //Ausente
    if (propDent.opc.opc07.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S7.opc07 = svg.polyline(dienteGroup, [[15, 0], [165, 255]], defaultIndicacionDienteAusente);
        objData.S8.opc07 = svg.polyline(dienteGroup, [[165, 0], [15, 255]], defaultIndicacionDienteAusente);
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S7.opc07 = svg.polyline(dienteGroup, [[15, -15], [165, 240]], defaultIndicacionDienteAusente);
        objData.S8.opc07 = svg.polyline(dienteGroup, [[165, -15], [15, 240]], defaultIndicacionDienteAusente);
      } else {
        objData.S7.opc07 = svg.polyline(dienteGroup, [[15, 0], [165, 255]], defaultIndicacionDienteAusente);
        objData.S8.opc07 = svg.polyline(dienteGroup, [[165, 0], [15, 255]], defaultIndicacionDienteAusente);
      }
    }
    //tratamiento pulpar
    if (propDent.opc.opc36.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        if (propDent.opc.opc36.estado === "B") {
          if (propDent.opc.opc36.tipo === "PP") {
            objData.S7.opc36 = svg.polygon(dienteGroup, [[60, 150], [120, 150], [120, 205], [60, 205]],
              indicacionTratmientoPulparPPBueno);
          } else {
            objData.S7.opc36 = svg.polyline(dienteGroup, [[90, 15], [90, 135]], indicacionTratmientoPulparBueno);
          }
        } else if (propDent.opc.opc36.estado === "M") {
          if (propDent.opc.opc36.tipo === "PP") {
            objData.S7.opc36 = svg.polygon(dienteGroup, [[60, 150], [120, 150], [120, 205], [60, 205]],
              indicacionTratmientoPulparPPMalo);
          } else {
            objData.S7.opc36 = svg.polyline(dienteGroup, [[90, 15], [90, 135]], indicacionTratmientoPulparMalo);
          }
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        if (propDent.opc.opc36.estado === "B") {
          if (propDent.opc.opc36.tipo === "PP") {
            objData.S7.opc36 = svg.polygon(dienteGroup, [[60, 30], [120, 30], [120, 85], [60, 85]],
              indicacionTratmientoPulparPPBueno);
          } else {
            objData.S7.opc36 = svg.polyline(dienteGroup, [[90, 225], [90, 105]], indicacionTratmientoPulparBueno);
          }
        } else if (propDent.opc.opc36.estado === "M") {
          if (propDent.opc.opc36.tipo === "PP") {
            objData.S7.opc36 = svg.polygon(dienteGroup, [[60, 30], [120, 30], [120, 85], [60, 85]],
              indicacionTratmientoPulparPPMalo);
          } else {
            objData.S7.opc36 = svg.polyline(dienteGroup, [[90, 225], [90, 105]], indicacionTratmientoPulparMalo);
          }
        }
      }
    }
    //Corona Definitiva
    if (propDent.opc.opc04.hallazgo) {
      var indicacionCoronaDefinitiva = {};
      if (propDent.opc.opc04.estadoCorona === "M") {
        indicacionCoronaDefinitiva = Object.assign({}, defaultIndicacionlineRed);
      } else {
        indicacionCoronaDefinitiva = Object.assign({}, defaultIndicacionlineBlue);
      }
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S7.opc04 = svg.polygon(dienteGroup, [[26, 116], [154, 116], [154, 244], [26, 244]],
          indicacionCoronaDefinitiva);
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S7.opc04 = svg.polygon(dienteGroup, [[26, -4], [154, -4], [154, 124], [26, 124]],
          indicacionCoronaDefinitiva);
      } else {
        objData.S7.opc04 = svg.polygon(dienteGroup, [[26, 116], [154, 116], [154, 244], [26, 244]],
          indicacionCoronaDefinitiva);
      }
    }
    //Corona Temporal
    if (propDent.opc.opc05.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S7.opc05 = svg.polygon(dienteGroup, [[26, 116], [154, 116], [154, 244], [26, 244]],
          defaultIndicacionlineRed);
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S7.opc05 = svg.polygon(dienteGroup, [[26, -4], [154, -4], [154, 124], [26, 124]],
          defaultIndicacionlineRed);
      } else {
        objData.S7.opc05 = svg.polygon(dienteGroup, [[26, 116], [154, 116], [154, 244], [26, 244]],
          defaultIndicacionlineRed);
      }
    }
    //Edéntulo Total
    if (propDent.opc.opc14.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S7.opc14 = svg.polyline(dienteGroup, [[0, 180], [180, 180]], defaultLineBlue);
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S7.opc14 = svg.polyline(dienteGroup, [[0, 60], [180, 60]], defaultLineBlue);
      }
    }
    //Fractura
    var indicacionFractura = Object.assign({}, defaultIndicacionlineRed);
    indicacionFractura["stroke-dasharray"] = "8 4";
    indicacionFractura["stroke-opacity"] = "1";
    if (propDent.opc.opc15.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        if (propDent.opc.opc15.direccionubicacion === "CSI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[90, 135], [90, 225]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CZD") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 180], [165, 180]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CZSDI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 135], [165, 225]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CZIDS") {
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 225], [165, 135]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CRSI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[90, 15], [90, 225]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CRZD") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 120], [165, 120]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CRZSDI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 15], [165, 225]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CRZIDS") {
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 225], [165, 15]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "RSI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[90, 15], [90, 105]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "RZD") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 60], [165, 60]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "RZSDI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 15], [165, 105]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "RZIDS") {
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 105], [165, 15]], indicacionFractura);
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        if (propDent.opc.opc15.direccionubicacion === "CSI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[90, 15], [90, 105]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CZD") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 60], [165, 60]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CZSDI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 15], [165, 105]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CZIDS") {
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 105], [165, 15]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CRSI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[90, 15], [90, 225]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CRZD") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 120], [165, 120]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CRZSDI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 15], [165, 225]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "CRZIDS") {
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 225], [165, 15]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "RSI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[90, 105], [90, 225]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "RZD") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 165], [165, 165]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "RZSDI") {
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 105], [165, 225]], indicacionFractura);
        } else if (propDent.opc.opc15.direccionubicacion === "RZIDS") {
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 225], [165, 105]], indicacionFractura);
        }
      }
    }
    //Prótesis Total
    if (propDent.opc.opc27.hallazgo) {
      if (propDent.opc.opc27.estado === "B") {
        objData.S7.opc27 = svg.polyline(dienteGroup, [[0, 172], [180, 172]], defaultLineBlue);
        objData.S7.opc27 = svg.polyline(dienteGroup, [[0, 188], [180, 188]], defaultLineBlue);
      } else if (propDent.opc.opc27.estado === "M") {
        objData.S7.opc27 = svg.polyline(dienteGroup, [[0, 172], [180, 172]], defaultLineRed);
        objData.S7.opc27 = svg.polyline(dienteGroup, [[0, 188], [180, 188]], defaultLineRed);
      }
    }
    //Superficie desgastada opc33
    if (propDent.opc.opc33.hallazgo) {
      var grafClasifOpc33Model = {
        "sup1": ["sz4", "sz3", "sz2", "sd2", "sd3", "sd4"],
        "sup2": ["sz1", "sd1"],
        "inf1": ["iz3", "iz2", "id2", "id3"],
        "inf2": ["iz1", "id1"],
      };
      var indicacionPolygonDesgaste = Object.assign({}, defaultLineRed);
      indicacionPolygonDesgaste["fill-opacity"] = "0.92";
      indicacionPolygonDesgaste["stroke-width"] = "5";
      indicacionPolygonDesgaste["stroke-linejoin"] = "miter";
      if (grafClasifOpc33Model.sup1.includes(propDent.model)) {
        if (propDent.opc.opc33.desgasteVestibular === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[25, 120], [155, 120]], indicacionPolygonDesgaste);
        }
        if (propDent.opc.opc33.desgasteOclusal === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[55, 150], [125, 150]], indicacionPolygonDesgaste);
          objData.S7.opc27 = svg.polyline(dienteGroup, [[55, 210], [125, 210]], indicacionPolygonDesgaste);
        }
        if (propDent.opc.opc33.desgasteLingual === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[25, 240], [155, 240]], indicacionPolygonDesgaste);
        }
      } else if (grafClasifOpc33Model.sup2.includes(propDent.model)) {
        if (propDent.opc.opc33.desgasteVestibular === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[25, 120], [155, 120]], indicacionPolygonDesgaste);
        }
        if (propDent.opc.opc33.desgasteOclusal === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[55, 180], [125, 180]], indicacionPolygonDesgaste);
        }
        if (propDent.opc.opc33.desgasteLingual === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[25, 240], [155, 240]], indicacionPolygonDesgaste);
        }
      } else if (grafClasifOpc33Model.inf1.includes(propDent.model)) {
        if (propDent.opc.opc33.desgasteVestibular === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[25, 120], [155, 120]], indicacionPolygonDesgaste);
        }
        if (propDent.opc.opc33.desgasteOclusal === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[55, 30], [125, 30]], indicacionPolygonDesgaste);
          objData.S7.opc27 = svg.polyline(dienteGroup, [[55, 90], [125, 90]], indicacionPolygonDesgaste);
        }
        if (propDent.opc.opc33.desgasteLingual === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[25, 0], [155, 0]], indicacionPolygonDesgaste);
        }
      } else if (grafClasifOpc33Model.inf2.includes(propDent.model)) {
        if (propDent.opc.opc33.desgasteVestibular === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[25, 120], [155, 120]], indicacionPolygonDesgaste);
        }
        if (propDent.opc.opc33.desgasteOclusal === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[55, 60], [125, 60]], indicacionPolygonDesgaste);
        }
        if (propDent.opc.opc33.desgasteLingual === "S") {
          objData.S7.opc27 = svg.polyline(dienteGroup, [[25, 0], [155, 0]], indicacionPolygonDesgaste);
        }
      }
    }
    //---->("S8")
    dienteGroup = svg.group(parentGroup, {transform: "translate(" + cfgSec.S8.ubic[(propDent.position)].x + "," +
        cfgSec.S8.ubic[(propDent.position)].y + ")"});
    objData.S8.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 120], [0, 120]], defaultCuadrante);
    if (propDent.opc.opc12.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S8.opc12 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc12 = svg.polygon(dienteGroup, [[75, 80], [90, 90], [105, 80]], defaultIndicacionPolygonBlue);
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S8.opc12 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc12 = svg.polygon(dienteGroup, [[75, 40], [90, 30], [105, 40]], defaultIndicacionPolygonBlue);
      } else {
        objData.S8.opc12 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc12 = svg.polygon(dienteGroup, [[75, 80], [90, 90], [105, 80]], defaultIndicacionPolygonBlue);
      }
    }
    if (propDent.opc.opc13.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S8.opc13 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc13 = svg.polygon(dienteGroup, [[75, 40], [90, 30], [105, 40]], defaultIndicacionPolygonBlue);
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S8.opc13 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc13 = svg.polygon(dienteGroup, [[75, 80], [90, 90], [105, 80]], defaultIndicacionPolygonBlue);
      } else {
        objData.S8.opc13 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc13 = svg.polygon(dienteGroup, [[75, 40], [90, 30], [105, 40]], defaultIndicacionPolygonBlue);
      }
    }
    if (propDent.opc.opc17.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S8.opc17 = svg.path(dienteGroup, "M30 80 C 60 105, 120 105, 150 80", defaultIndicacionlineBlue);
        if (propDent.opc.opc17.giro === "D") {
          objData.S8.opc17 = svg.polyline(dienteGroup, [[127, 79], [150, 80], [138, 101]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc17.giro === "Z") {
          objData.S8.opc17 = svg.polyline(dienteGroup, [[53, 79], [30, 80], [42, 101]], defaultIndicacionlineBlue);
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S8.opc17 = svg.path(dienteGroup, "M30 40 C 60 15, 120 15, 150 40", defaultIndicacionlineBlue);
        if (propDent.opc.opc17.giro === "D") {
          objData.S8.opc17 = svg.polyline(dienteGroup, [[127, 41], [150, 40], [138, 19]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc17.giro === "Z") {
          objData.S8.opc17 = svg.polyline(dienteGroup, [[53, 41], [30, 40], [42, 19]], defaultIndicacionlineBlue);
        }
      }
    }
    if (propDent.opc.opc22.hallazgo) {
      if ((propDent.position === "SP") || (propDent.position === "ST")) {
        objData.S8.opc22 = svg.polyline(dienteGroup, [[30, 20], [150, 20]], defaultIndicacionlineBlue);
        if (propDent.opc.opc22.direccion === "D") {
          objData.S8.opc22 = svg.polyline(dienteGroup, [[135, 5], [150, 20], [135, 35]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc22.direccion === "Z") {
          objData.S8.opc22 = svg.polyline(dienteGroup, [[45, 5], [30, 20], [45, 35]], defaultIndicacionlineBlue);
        }
      } else if ((propDent.position === "IP") || (propDent.position === "IT")) {
        objData.S8.opc22 = svg.polyline(dienteGroup, [[30, 100], [150, 100]], defaultLineBlue);
        if (propDent.opc.opc22.direccion === "D") {
          objData.S8.opc22 = svg.polyline(dienteGroup, [[135, 85], [150, 100], [135, 115]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc22.direccion === "Z") {
          objData.S8.opc22 = svg.polyline(dienteGroup, [[45, 85], [30, 100], [45, 115]], defaultIndicacionlineBlue);
        }
      }
    }
  };
  fnViewUcOdontogram();
}

//permite dibujar la raiz
function ucOdontogramViewPiezaDetariaDet(_codDiente, _opc_exec) {
  $("#ucOdontogramViewPiezaDentaria").svg({
    settings: {
      width: "410px",
      height: "560px",
      xmlns: "http://www.w3.org/2000/svg",
      transform: "translate(10,10)",
      "style": "background:white;z-index:100;"
    }
  });
  var svg_dc = $("#ucOdontogramViewPiezaDentaria").svg("get").clear();
  var parentGroup = svg_dc.group({transform: "scale(2.3)"}); //0.286
  var dataCodKey = ucOdontogram_model.dataCodToKey;
  var dienteGroup = parentGroup;
  var CodDiente = _codDiente;
  var keyDiente = dataCodKey[CodDiente.toString()];
  var dataKey = ucOdontogram_manager("getactive");
  var misDientes = ucOdontogram_manager("get", dataKey);
  var dataDientes = misDientes["data"];
  $("#ucOdontogramViewPiezaDentariaViewTitulo").html("Pieza dentaria " + CodDiente.toString());
  if (typeof (dataDientes[keyDiente]) === "undefined") {
    $(obj_dom).append("-ERROR:DIENTE-");
    return false;
  }
  var propDent = dataDientes[keyDiente];
  var cfgSec = ucOdontogram_model["config"]["sec"];
  //...
  var objData = {};
  //inicializar Objetos
  var fnLoadData = function () {
    for (var i in cfgSec) {
      objData[i] = {};
      objData[i]["base"] = {};
      for (var j in cfgSec[i]["opciones"]) {
        objData[i][j] = null;
      }
    }
  };
  fnLoadData();
  var borderPolygonDiente = {
    fill: "white", stroke: "#1C1C1C",
    strokeWidth: 1.4, "fill-opacity": "0.8", "stroke-opacity": "0.9",
    "stroke-linecap": "round"
  };
  var defaultCuadrante = {fill: "none", stroke: "navy", strokeWidth: 0.3, "stroke-dasharray": "1,2"};
  var auxCuadranteCodDiente = Object.assign({}, defaultCuadrante);
  auxCuadranteCodDiente["data-cod"] = CodDiente.toString();
  auxCuadranteCodDiente["class"] = "ucOdontogramElemTextCodDiente";
  auxCuadranteCodDiente["fill"] = "white";
  auxCuadranteCodDiente["fill-opacity"] = "0.1";
  auxCuadranteCodDiente["stroke"] = "white";
  auxCuadranteCodDiente["stroke-opacity"] = "0.1";
  var defaultFormatDienteCaras = {
    fill: "white", stroke: "#1C1C1C", strokeWidth: 1.4,
    "fill-opacity": "0.8", "stroke-opacity": "0.9",
    "class": "ucOdontogramElemCaraDiente", "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };
  var auxFormatDienteCaras = Object.assign({}, defaultFormatDienteCaras);
  var s7_atributos = {
    "raiz": borderPolygonDiente,
    "cara": {
      "cuadrante": auxCuadranteCodDiente,
      "format_diente_cara": auxFormatDienteCaras,
      "format_diente_cara_default": defaultFormatDienteCaras,
    }
  };
  //permite dibujar la raiz
  ucOdontogramViewPiezaDetariaFnDibujarRaizCaras(
    parentGroup,
    dienteGroup,
    propDent,
    cfgSec,
    objData,
    svg_dc,
    ucOdontgramDienteGrafModel,
    s7_atributos,
    _opc_exec
  );
}

function ucOdontogramViewPiezaDetariaFnDibujarRaizCaras(
  _parentGroup, _dienteGroup, _propDent,
  _cfgSec, _objData, _svg, _model, _atributos, opc_exec) {
  var _tmp = _propDent.model.split("");
  var codDiente = _propDent.cod;
  var model_ub = _tmp[0] + _tmp[1];
  var model_key = _tmp[2];
  var _grafRaiz = _model[model_ub][model_key].r.graf;
  var _grafCarP = _model[model_ub][model_key].c.posiciones;
  var _grafCarSP = null;
  if ((typeof _model[model_ub][model_key]["s"] === "object") &&
    (typeof _model[model_ub][model_key].s["posiciones"] === "object")) {
    _grafCarSP = _model[model_ub][model_key].s.posiciones;
  }
  var _auxFormatoObjetoPintar = {};
  var i = null;
  var fnLlenarAtributos = function (attr, _auxAttr) {
    if (Object.keys(attr).length > 0) {
      for (var i in attr) {
        _auxAttr[i] = attr[i];
      }
    }
  }
  for (i in _grafRaiz) {
    _auxFormatoObjetoPintar = Object.assign({}, _atributos.raiz);
    if (typeof _grafRaiz[i].attr === "object") {
      fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
    }
    _objData.S7.base = _svg.polygon(_dienteGroup, _grafRaiz[i].coordenadas, _auxFormatoObjetoPintar);
  }
  //las caras del diente
  _objData.S7.opc03 = {
    "pcv": {
      "sp00": null,
      "spd": null,
      "spc": null,
      "spm": null,
      "spsd": null,
      "spsm": null,
    },
    "pcm": {
      "sp00": null,
      "spv": null,
      "spl": null,
    },
    "pcl": {
      "sp00": null,
      "spm": null,
      "spc": null,
      "spd": null,
      "spsd": null,
      "spsc": null,
      "spsm": null,
    },
    "pcd": {
      "sp00": null,
      "spv": null,
      "spl": null,
    },
    "pco": {
      "sp00": null,
      "spvd": null,
      "spvc": null,
      "spvm": null,
      "splm": null,
      "splc": null,
      "spld": null,
      "spsvd": null,
      "spsvm": null,
      "spscd": null,
      "spscc": null,
      "spscm": null,
      "spsld": null,
      "spslm": null,
    }
  };
  _objData.S7.opc29 = {
    "pcv": {
      "sp00": null,
      "spd": null,
      "spc": null,
      "spm": null,
    },
    "pcm": {
      "sp00": null,
      "spv": null,
      "spl": null,
    },
    "pcl": {
      "sp00": null,
      "spm": null,
      "spc": null,
      "spd": null,
      "spsd": null,
      "spsc": null,
      "spsm": null,
    },
    "pcd": {
      "sp00": null,
      "spv": null,
      "spl": null,
    },
    "pco": {
      "sp00": null,
      "spvd": null,
      "spvc": null,
      "spvm": null,
      "splm": null,
      "splc": null,
      "spld": null,
      "spsvd": null,
      "spsvm": null,
      "spscd": null,
      "spscc": null,
      "spscm": null,
      "spsld": null,
      "spslm": null,
    }
  };
  _objData.S7.opc30 = {
    "pcv": {
      "sp00": null,
      "spd": null,
      "spc": null,
      "spm": null,
    },
    "pcm": {
      "sp00": null,
      "spv": null,
      "spl": null,
    },
    "pcl": {
      "sp00": null,
      "spm": null,
      "spc": null,
      "spd": null,
      "spsd": null,
      "spsc": null,
      "spsm": null,
    },
    "pcd": {
      "sp00": null,
      "spv": null,
      "spl": null,
    },
    "pco": {
      "sp00": null,
      "spvd": null,
      "spvc": null,
      "spvm": null,
      "splm": null,
      "splc": null,
      "spld": null,
      "spsvd": null,
      "spsvm": null,
      "spscd": null,
      "spscc": null,
      "spscm": null,
      "spsld": null,
      "spslm": null,
    }
  };
  //Surco de los dientes
  _objData.S7.opc31 = {
    "vd": {"sp00": null},
    "vm": {"sp00": null},
    "ovd": {"sp00": null},
    "ovm": {"sp00": null},
    "ocd": {"sp00": null},
    "occ": {"sp00": null},
    "ocm": {"sp00": null},
    "old": {"sp00": null},
    "olm": {"sp00": null},
    "ld": {"sp00": null},
    "lc": {"sp00": null},
    "lm": {"sp00": null},
  };
  var auxCuadranteCodDiente = _atributos.cara.cuadrante;
  var auxFormatDienteCaras = _atributos.cara.format_diente_cara;
  var defaultFormatDienteCaras = _atributos.cara.format_diente_cara_default;
  auxFormatDienteCaras["class"] = "";
  auxFormatDienteCaras["data-cod"] = codDiente.toString();
  var auxPD = null; // posicion dde cara
  var auxPDS = null; // posicion sector
  //----
  for (var _p in _grafCarP) {
    auxFormatDienteCaras["stroke"] = defaultFormatDienteCaras["stroke"];
    auxFormatDienteCaras["fill"] = "white";
    auxPD = "pc" + _p;
    //graficar por caras
    for (i in _grafCarP[_p].graf) {
      _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
      if (typeof _grafRaiz[i].attr === "object") {
        fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
      }
      _objData.S7.opc03[auxPD].sp00 = _svg.polygon(_dienteGroup, _grafCarP[_p].graf[i].coordenadas,
        _auxFormatoObjetoPintar);
    }
  }
  //----
  if (opc_exec === "opc03") {
    //---------------------------------------------------- opc03-INI - caries --------------------------------------
    auxFormatDienteCaras["fill-opacity"] = defaultFormatDienteCaras["fill-opacity"];
    for (var _p in _grafCarP) {
      auxFormatDienteCaras["stroke"] = defaultFormatDienteCaras["stroke"];
      auxFormatDienteCaras["fill"] = "white";
      auxPD = "pc" + _p;
      auxFormatDienteCaras["stroke"] = "none";
      auxFormatDienteCaras["stroke-width"] = "1";
      //graficar sectors de caras
      for (var _s in _grafCarP[_p].sectores) {
        auxPDS = "sp" + _s;
        if (_propDent.opc.opc03[auxPD][auxPDS].estado === "S") {
          auxFormatDienteCaras["fill"] = "red";
        } else {
          auxFormatDienteCaras["fill"] = "white";
        }
        //graficar por sector
        for (i in _grafCarP[_p].sectores[_s].graf) {
          _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
          if (typeof _grafRaiz[i].attr === "object") {
            fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
          }
          _objData.S7.opc03[auxPD][auxPDS] = _svg.polygon(_dienteGroup, _grafCarP[_p].sectores[_s].graf[i].coordenadas,
            _auxFormatoObjetoPintar);
        }
      }
    }
    //---------------------------------------------------- opc03-FIN - caries --------------------------------------
  }
  if (opc_exec === "opc29") {
    //---------------------------------------------------- opc29-INI - caries --------------------------------------
    auxFormatDienteCaras["fill-opacity"] = defaultFormatDienteCaras["fill-opacity"];
    auxFormatDienteCaras["stroke-width"] = "6";
    for (var _p in _grafCarP) {
      //graficar sectors de caras
      auxPD = "pc" + _p;
      for (var _s in _grafCarP[_p].sectores) {
        auxPDS = "sp" + _s;
        if (_propDent.opc.opc29[auxPD][auxPDS].estado === "S") {
          if (_propDent.opc.opc29[auxPD][auxPDS].estadoRest === "M") {
            auxFormatDienteCaras["fill"] = "red";
          } else {
            auxFormatDienteCaras["fill"] = "blue";
          }
          auxFormatDienteCaras["stroke"] = "none";
        } else {
          auxFormatDienteCaras["fill"] = "none";
          auxFormatDienteCaras["stroke"] = "none";
        }
        //graficar por sector
        for (i in _grafCarP[_p].sectores[_s].graf) {
          _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
          if (typeof _grafRaiz[i].attr === "object") {
            fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
          }
          _objData.S7.opc29[auxPD][auxPDS] = _svg.polygon(_dienteGroup, _grafCarP[_p].sectores[_s].graf[i].coordenadas,
            _auxFormatoObjetoPintar);
        }
      }
    }
    //---------------------------------------------------- opc29-FIN - caries --------------------------------------
  }
  if (opc_exec === "opc30") {
    //---------------------------------------------------- opc30-INI - caries --------------------------------------
    auxFormatDienteCaras["fill-opacity"] = "0.95";
    auxFormatDienteCaras["stroke-width"] = "4";
    auxFormatDienteCaras["stroke-linejoin"] = "round";
    //auxFormatDienteCaras["stroke-dasharray"] = "6 4";
    for (var _p in _grafCarP) {
      //graficar sectors de caras
      auxPD = "pc" + _p;
      for (var _s in _grafCarP[_p].sectores) {
        auxPDS = "sp" + _s;
        if (_propDent.opc.opc30[auxPD][auxPDS].estado === "S") {
          auxFormatDienteCaras["fill"] = "white";
          auxFormatDienteCaras["stroke-opacity"] = "0.95";
          auxFormatDienteCaras["stroke"] = "red";
        } else {
          auxFormatDienteCaras["fill"] = "none";
          auxFormatDienteCaras["stroke"] = "none";
        }
        //graficar por sector
        for (i in _grafCarP[_p].sectores[_s].graf) {
          _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
          if (typeof _grafRaiz[i].attr === "object") {
            fnLlenarAtributos(_grafRaiz[i].attr, _auxFormatoObjetoPintar);
          }
          _objData.S7.opc30[auxPD][auxPDS] = _svg.polygon(_dienteGroup, _grafCarP[_p].sectores[_s].graf[i].coordenadas,
            _auxFormatoObjetoPintar);
        }
      }
    }
    //---------------------------------------------------- opc30-FIN - caries --------------------------------------
  }
  if (opc_exec === "opc31") {
    //---------------------------------------------------- opc31-INI - sellantes --------------------------------------
    auxFormatDienteCaras["fill-opacity"] = "0.85";
    auxFormatDienteCaras["stroke-width"] = "0.5";
    auxFormatDienteCaras["stroke-linejoin"] = "round";
    auxFormatDienteCaras["stroke-dasharray"] = "2 1";
    if (typeof _grafCarSP === "object") {
      for (var _p in _grafCarSP) {
        //graficar surcos
        if (_propDent.opc.opc31[_p]["sp00"].estado === "B") {
          auxFormatDienteCaras["fill"] = "#0000ff";
          auxFormatDienteCaras["stroke"] = "#b3b3ff";
        } else if (_propDent.opc.opc31[_p]["sp00"].estado === "M") {
          auxFormatDienteCaras["fill"] = "#ff0000";
          auxFormatDienteCaras["stroke"] = "#ff8080";
        } else {
          auxFormatDienteCaras["fill"] = "none";
          auxFormatDienteCaras["stroke"] = "none";
        }
        for (i in _grafCarSP[_p].graf) {
          _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
          if (typeof _grafCarSP[_p].graf[i].attr === "object") {
            fnLlenarAtributos(_grafCarSP[_p].graf[i].attr, _auxFormatoObjetoPintar);
          }
          _objData.S7.opc31[_p] = _svg.polygon(_dienteGroup, _grafCarSP[_p].graf[i].coordenadas,
            _auxFormatoObjetoPintar);
        }
      }
    }
    //---------------------------------------------------- opc31-FIN - sellantes --------------------------------------
  }
  //---------------------------------------------------- SELECT-INI - ALL-OBJ-CARA ------------------------------------
  auxFormatDienteCaras["class"] = defaultFormatDienteCaras["class"];
  auxFormatDienteCaras["fill"] = "white";
  auxFormatDienteCaras["stroke"] = "white";
  auxFormatDienteCaras["stroke-width"] = "4";
  auxFormatDienteCaras["fill-opacity"] = "0.1";
  auxFormatDienteCaras["stroke-opacity"] = "0.1";
  //cara: posiciones y sectores
  for (var _p in _grafCarP) {
    //graficar sectors de caras
    auxPD = "pc" + _p;
    auxFormatDienteCaras["data-cara"] = auxPD;
    for (var _s in _grafCarP[_p].sectores) {
      auxPDS = "sp" + _s;
      auxFormatDienteCaras["data-parte"] = auxPDS;
      auxFormatDienteCaras["data-est03"] = _propDent.opc.opc03[auxPD][auxPDS].estado;
      auxFormatDienteCaras["data-est29"] = _propDent.opc.opc29[auxPD][auxPDS].estado;
      auxFormatDienteCaras["data-est30"] = _propDent.opc.opc30[auxPD][auxPDS].estado;
      //graficar por sector
      for (i in _grafCarP[_p].sectores[_s].graf) {
        _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
        _objData.S7.base = _svg.polygon(_dienteGroup, _grafCarP[_p].sectores[_s].graf[i].coordenadas,
          _auxFormatoObjetoPintar);
      }
    }
  }
  //surcos: posiciones y sectores
  auxFormatDienteCaras["class"] = "ucOdontogramElemSurcoDiente";
  auxFormatDienteCaras["stroke-width"] = "0.4";
  auxFormatDienteCaras["fill-opacity"] = "0.1";
  auxFormatDienteCaras["stroke-opacity"] = "0.1";
  if (typeof _grafCarSP === "object" && ucOdontogram_model.glvar.select.opc === "act31") {
    for (var _p in _grafCarSP) {
      var _s = "sp00";
      auxFormatDienteCaras["data-cara"] = _p;
      auxFormatDienteCaras["data-parte"] = _s;
      auxFormatDienteCaras["data-est31"] = _propDent.opc.opc31[_p][_s].estado;
      //graficar por sector
      for (i in _grafCarSP[_p].graf) {
        _auxFormatoObjetoPintar = Object.assign({}, auxFormatDienteCaras);
        _objData.S7.base = _svg.polygon(_dienteGroup, _grafCarSP[_p].graf[i].coordenadas, _auxFormatoObjetoPintar);
      }
    }
  }
  //---------------------------------------------------- SELECT-FIN - ALL-OBJ-CARA ------------------------------------
}
