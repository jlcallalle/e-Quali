/*
 * Versión: 1.0 Beta
 * Autor: César Ac.
 * lib: ucOdontogram_manager
 * */
var ucOdontogram_data = {}; //variable que almacena data de odontogramas //cambia --> ucOdontogram_varopc
//datorequerido: //rango//unico//contiguos//total
var ucOdontogram_model = {
  'opc': {
    'opc01': {
      'nombre': 'Aparato ortodóntico fijo',
      'atributos': {'hallazgo': false, 'afectacion': 'N', 'tipo': '', 'estado': 'B'},
      'opciones': {
        'afectaciones': {'N': 'ninguno', 'I': 'Inicio', 'M': 'Intermedio', 'F': 'Fin'},
        'tipos': {'T01': 'Nombre tipo 1', 'T02': 'Nombre tipo 2', 'T03': 'Nombre tipo 3'},
        'estados': {'B': {'nombre': 'Bueno', 'color': 'blue'}, 'M': {'nombre': 'Malo', 'color': 'red'}}
      },
      'datosRequerido': 'rango'
    },
    'opc02': {
      'nombre': 'Aparato ortodóntico removible',
      'atributos': {'hallazgo': false, 'afectacion': 'N', 'tipo': '', 'estado': 'B'},
      'opciones': {
        'afectaciones': {'N': 'ninguno', 'I': 'Inicio', 'M': 'Intermedio', 'F': 'Fin'},
        'tipos': {'T01': 'Nombre tipo 1', 'T02': 'Nombre tipo 2', 'T03': 'Nombre tipo 3'},
        'estados': {'B': {'nombre': 'Bueno', 'color': 'blue'}, 'M': {'nombre': 'Malo', 'color': 'red'}}
      },
      'datosRequerido': 'rango'
    },
    'opc03': {
      'nombre': 'Caries',
      'atributos': {
        'hallazgo': false,
        'pcs': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          'sp03': {'estado': 'N'},
          },
        'pcd': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          },
        'pci': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          'sp03': {'estado': 'N'},
          },
        'pcz': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          },
        'pcc': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          'sp03': {'estado': 'N'},
          'sp04': {'estado': 'N'},
          'sp05': {'estado': 'N'},
          'sp06': {'estado': 'N'},
        }
      },
      'opciones': {
        'estados': {'N': {'nombre': 'Sin caries', 'color': 'white'}, 'S': {'nombre': 'Con caries', 'color': 'red'}}
      },
      'datosRequerido': 'unico'
    },
    'opc04': {
      'nombre': 'Corona definitiva',
      'atributos': {'hallazgo': false, 'colormetal': 'N', 'tipo': ''},
      'opciones': {
        'colormetales': {'N': 'ninguno', 'D': 'Dorado', 'P': 'Plateado'},
        'tipos': {
          'CC': 'Corona completa', 'CF': 'Corona fenestrada', 'CMC': 'Corona metal cerámica',
          'CP': {'nombre': 'Corona parcial', 'opciones': {'3/4': '3/4', '4/5': '4/5', '7/8': '7/8'}},
          'CV': 'Corona Veneer', 'CJ': 'Corona Jocket'
        }
      },
      'datosRequerido': 'unico'
    },
    'opc05': {
      'nombre': 'Corona temporal',
      'atributos': {'hallazgo': false},
      'datosRequerido': 'unico'
    },
    'opc06': {
      'nombre': 'Diastema',
      'atributos': {'hallazgo': false, 'afectacion': 'N'},
      'opciones': {
        'afectaciones': {'N': 'Ninguno', 'D': 'Derecha', 'Z': 'Izquierda'}
      },
      'datosRequerido': 'contiguos'
    },
    'opc07': {
      'nombre': 'Diente ausente',
      'atributos': {'hallazgo': false},
      'datosRequerido': 'unico'
    },
    'opc08': {
      'nombre': 'Diente discrónico',
      'atributos': {'hallazgo': false, 'value': ''},
      'opciones': {
        'values': {
          'DIS': 'Discrónico'
        }
      },
      'datosRequerido': 'unico'
    },
    'opc09': {
      'nombre': 'Diente ectópico',
      'atributos': {'hallazgo': false, 'value': '', 'ubicaciontxt': ''},
      'opciones': {
        'values': {
          'E': 'Ectópico'
        }
      },
      'datosRequerido': 'unico'
    },
    'opc10': {
      'nombre': 'Diente en erupción',
      'atributos': {'hallazgo': false},
      'datosRequerido': 'unico'
    },
    'opc11': {
      'nombre': 'Diente en clavija',
      'atributos': {'hallazgo': false},
      'datosRequerido': 'unico'
    },
    'opc12': {
      'nombre': 'Diente extruido',
      'atributos': {'hallazgo': false},
      'datosRequerido': 'unico'
    },
    'opc13': {
      'nombre': 'Diente intruido',
      'atributos': {'hallazgo': false},
      'datosRequerido': 'unico'
    },
    'opc14': {
      'nombre': 'Edéntulo total',
      'atributos': {'hallazgo': false},
      'datosRequerido': 'total'
    },
    'opc15': {
      'nombre': 'Fractura',
      'atributos': {'hallazgo': false, 'direccionubicacion': 'N'},
      'opciones': {
        'direccionubicaciones': {
          'N': 'Ninguno', 'CZSDI': 'Cara IzqSup-DerInf', 'CZIDS': 'Cara IzqInf-DerSup',
          'CRZSDI': 'Cara Raiz IzqSup-DerInf', 'CRZIDS': 'Cara Raiz IzqInf-DerSup'
        }
      },
      'datosRequerido': 'unico'
    },
    'opc16': {
      'nombre': 'Geminación/fusión',
      'atributos': {'hallazgo': false, 'afectacion': 'N', 'tipo': 'N'},
      'opciones': {
        'afectaciones': {'N': 'Ninguno', 'D': 'Derecha', 'Z': 'Izquierda'},
        'tipos': {'N': 'Ninguno', 'G': 'Geminación', 'F': 'Fusión'}
      },
      'datosRequerido': 'contiguos'
    },
    'opc17': {
      'nombre': 'Giroversión',
      'atributos': {'hallazgo': false, 'giro': 'N'},
      'opciones': {
        'giros': {'N': 'Ninguno', 'D': 'Derecha', 'Z': 'Izquierda'}
      },
      'datosRequerido': 'unico'
    },
    'opc18': {
      'nombre': 'Impactación',
      'atributos': {'hallazgo': false, 'value': ''},
      'opciones': {
        'values': {
          'I': 'Impactación'
        }
      },
      'datosRequerido': 'unico'
    },
    'opc19': {
      'nombre': 'Implante',
      'atributos': {'hallazgo': false, 'value': ''},
      'opciones': {
        'values': {
          'IMP': 'Implante'
        }
      },
      'datosRequerido': 'unico'
    },
    'opc20': {
      'nombre': 'Macrodoncia',
      'atributos': {'hallazgo': false, 'value': ''},
      'opciones': {
        'values': {
          'MAC': 'Macrodoncia'
        }
      },
      'datosRequerido': 'unico'
    },
    'opc21': {
      'nombre': 'Microdoncia',
      'atributos': {'hallazgo': false, 'value': ''},
      'opciones': {
        'values': {
          'MIC': 'Microdoncia'
        }
      },
      'datosRequerido': 'unico'
    },
    'opc22': {
      'nombre': 'Migración',
      'atributos': {'hallazgo': false, 'direccion': 'N'},
      'opciones': {
        'direcciones': {'N': 'Ninguno', 'D': 'Derecha', 'Z': 'Izquierda'}
      },
      'datosRequerido': 'unico'
    },
    'opc23': {
      'nombre': 'Movilidad',
      'atributos': {'hallazgo': false, 'nivel': 'N'},
      'opciones': {
        'niveles': {'N': 'Ninguno', 'M1': 'M1', 'M2': 'M2', 'M3': 'M3'}
      },
      'datosRequerido': 'unico'
    },
    'opc24': {
      'nombre': 'Perno muñon/espigo muñon',
      'atributos': {'hallazgo': false, estado: ''},
      'opciones': {
        'estados': {'B': {'nombre': 'Bueno', 'color': 'blue'}, 'M': {'nombre': 'Malo', 'color': 'red'}}
      },
      'datosRequerido': 'unico'
    },
    'opc25': {
      'nombre': 'Prótesis fija',
      'atributos': {'hallazgo': false, 'afectacion': 'N', 'estado': 'B'},
      'opciones': {
        'afectaciones': {'N': 'ninguno', 'I': 'Inicio', 'M': 'Intermedio', 'F': 'Fin'},
        'estados': {'B': {'nombre': 'Bueno', 'color': 'blue'}, 'M': {'nombre': 'Malo', 'color': 'red'}}
      },
      'datosRequerido': 'rango'
    },
    'opc26': {
      'nombre': 'Prótesis removible',
      'atributos': {'hallazgo': false, 'afectacion': 'N', 'estado': 'B'},
      'opciones': {
        'afectaciones': {'N': 'ninguno', 'I': 'Inicio', 'M': 'Intermedio', 'F': 'Fin', 'tipomaterial': 'M00'},
        'estados': {'B': {'nombre': 'Bueno', 'color': 'blue'}, 'M': {'nombre': 'Malo', 'color': 'red'}},
        'tipomateriales': {'M00': 'Ninguno', 'M01': 'Material M01', 'M02': 'Material M02', 'M03': 'Material M03', 'M04': 'Material M04'}
      },
      'datosRequerido': 'rango'
    },
    'opc27': {
      'nombre': 'Prótesis total',
      'atributos': {'hallazgo': false, 'tipo': '', 'estado': 'B'},
      'opciones': {
        'tipos': {'T01': 'Nombre tipo 1', 'T02': 'Nombre tipo 2', 'T03': 'Nombre tipo 3'},
        'estados': {'B': {'nombre': 'Bueno', 'color': 'blue'}, 'M': {'nombre': 'Malo', 'color': 'red'}}
      },
      'datosRequerido': 'total'
    },
    'opc28': {
      'nombre': 'Remanente radicular',
      'atributos': {'hallazgo': false},
      'datosRequerido': 'unico'
    },
    'opc29': {//azul con relleno
      'nombre': 'Restauración definitiva',
      'atributos': {
        'hallazgo': false,
        'tipo': '',
        'pcs': {
          'sp00': {'estado': 'N', 'tipomaterial': ''},
          'sp01': {'estado': 'N', 'tipomaterial': ''},
          'sp02': {'estado': 'N', 'tipomaterial': ''},
          'sp03': {'estado': 'N', 'tipomaterial': ''},
          },
        'pcd': {
          'sp00': {'estado': 'N', 'tipomaterial': ''},
          'sp01': {'estado': 'N', 'tipomaterial': ''},
          'sp02': {'estado': 'N', 'tipomaterial': ''},
          },
        'pci': {
          'sp00': {'estado': 'N', 'tipomaterial': ''},
          'sp01': {'estado': 'N', 'tipomaterial': ''},
          'sp02': {'estado': 'N', 'tipomaterial': ''},
          'sp03': {'estado': 'N', 'tipomaterial': ''},
          },
        'pcz': {
          'sp00': {'estado': 'N', 'tipomaterial': ''},
          'sp01': {'estado': 'N', 'tipomaterial': ''},
          'sp02': {'estado': 'N', 'tipomaterial': ''},
          },
        'pcc': {
          'sp00': {'estado': 'N', 'tipomaterial': ''},
          'sp01': {'estado': 'N', 'tipomaterial': ''},
          'sp02': {'estado': 'N', 'tipomaterial': ''},
          'sp03': {'estado': 'N', 'tipomaterial': ''},
          'sp04': {'estado': 'N', 'tipomaterial': ''},
          'sp05': {'estado': 'N', 'tipomaterial': ''},
          'sp06': {'estado': 'N', 'tipomaterial': ''},
        }
      },
      'opciones': {
        'tipomateriales': {
          'AM': 'Amalgama', 'R': 'Resina', 'IV': 'Ionómerode vidrio',
          'IM': 'Incrustación metálica', 'IE': 'Incrustación estética', 'CP': 'Carilla de porcelana'
        },
        'estados': {'N': {'nombre': 'Sin'}, 'S': {'nombre': 'Con'}}
      },
      'datosRequerido': 'unico'
    },
    'opc30': {//rojo contorno
      'nombre': 'Restauración temporal',
      'atributos': {
        'hallazgo': false,
        'pcs': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          'sp03': {'estado': 'N'},
          },
        'pcd': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          },
        'pci': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          'sp03': {'estado': 'N'},
          },
        'pcz': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          },
        'pcc': {
          'sp00': {'estado': 'N'},
          'sp01': {'estado': 'N'},
          'sp02': {'estado': 'N'},
          'sp03': {'estado': 'N'},
          'sp04': {'estado': 'N'},
          'sp05': {'estado': 'N'},
          'sp06': {'estado': 'N'},
        }
      },
      'opciones': {
        'estados': {'N': {'nombre': 'Sin'}, 'S': {'nombre': 'Con'}}
      },
      'datosRequerido': 'unico'
    },
    'opc31': {//contorno azul
      'nombre': 'Sellantes',
      'atributos': {
        'hallazgo': false,
        'pcs': {'sp00': {'estado': 'N'}},
        'pcd': {'sp00': {'estado': 'N'}},
        'pci': {'sp00': {'estado': 'N'}},
        'pcz': {'sp00': {'estado': 'N'}},
        'pcc': {'sp00': {'estado': 'N'}}
      },
      'opciones': {
        'estados': {'N': {'nombre': 'Sin'}, 'S': {'nombre': 'Con'}}
      },
      'datosRequerido': 'unico'
    },
    'opc32': {
      'nombre': 'Semi-impactación',
      'atributos': {'hallazgo': false, 'value': 'N'},
      'opciones': {
        'values': {'N': 'Ninguno', 'SI': 'SI'}
      },
      'datosRequerido': 'unico'
    },
    'opc33': {
      'nombre': 'Superficie desgastada',
      'atributos': {'hallazgo': false, 'value': 'N'},
      'opciones': {
        'values': {'N': 'Ninguno', 'DES': 'Desgastada'}
      },
      'datosRequerido': 'unico'
    },
    'opc34': {
      'nombre': 'Supernumerario',
      'atributos': {'hallazgo': false, 'ubicacion': 'N'},
      'opciones': {
        'ubicaciones': {'N': 'Ninguno', 'D': 'Derecha', 'Z': 'Izquierda'}
      },
      'datosRequerido': 'contiguos'
    },
    'opc35': {
      'nombre': 'Transposición',
      'atributos': {'hallazgo': false, 'lado': 'N'},
      'opciones': {
        'lados': {'N': 'ninguno', 'D': 'Lado derecha', 'Z': 'Lado izquierda'}
      },
      'datosRequerido': 'contiguos'
    },
    'opc36': {//color azul
      'nombre': 'Tratamiento pulpar',
      'atributos': {'hallazgo': false, 'tipo': ''},
      'opciones': {
        'tipos': {'TC': 'Tratamiento de conducto', 'PC': 'Pulpectomia', 'PP': 'Pulpotomía'}
      },
      'datosRequerido': 'unico'
    }
  },
  'data': {
    1: {'cod': '18', 'tipo': 'S5', 'ubic': 'SZP', 'position': 'SP', 'opc': {}},
    2: {'cod': '17', 'tipo': 'S5', 'ubic': 'SZP', 'position': 'SP', 'opc': {}},
    3: {'cod': '16', 'tipo': 'S5', 'ubic': 'SZP', 'position': 'SP', 'opc': {}},
    4: {'cod': '15', 'tipo': 'S4', 'ubic': 'SZP', 'position': 'SP', 'opc': {}},
    5: {'cod': '14', 'tipo': 'S2', 'ubic': 'SZP', 'position': 'SP', 'opc': {}},
    6: {'cod': '13', 'tipo': 'S1', 'ubic': 'SZP', 'position': 'SP', 'opc': {}},
    7: {'cod': '12', 'tipo': 'S1', 'ubic': 'SZP', 'position': 'SP', 'opc': {}},
    8: {'cod': '11', 'tipo': 'S1', 'ubic': 'SZP', 'position': 'SP', 'opc': {}},
    9: {'cod': '21', 'tipo': 'S1', 'ubic': 'SDP', 'position': 'SP', 'opc': {}},
    10: {'cod': '22', 'tipo': 'S1', 'ubic': 'SDP', 'position': 'SP', 'opc': {}},
    11: {'cod': '23', 'tipo': 'S1', 'ubic': 'SDP', 'position': 'SP', 'opc': {}},
    12: {'cod': '24', 'tipo': 'S3', 'ubic': 'SDP', 'position': 'SP', 'opc': {}},
    13: {'cod': '25', 'tipo': 'S4', 'ubic': 'SDP', 'position': 'SP', 'opc': {}},
    14: {'cod': '26', 'tipo': 'S5', 'ubic': 'SDP', 'position': 'SP', 'opc': {}},
    15: {'cod': '27', 'tipo': 'S5', 'ubic': 'SDP', 'position': 'SP', 'opc': {}},
    16: {'cod': '28', 'tipo': 'S5', 'ubic': 'SDP', 'position': 'SP', 'opc': {}},
    31: {'cod': '48', 'tipo': 'I3', 'ubic': 'IZP', 'position': 'IP', 'opc': {}},
    32: {'cod': '47', 'tipo': 'I3', 'ubic': 'IZP', 'position': 'IP', 'opc': {}},
    33: {'cod': '46', 'tipo': 'I3', 'ubic': 'IZP', 'position': 'IP', 'opc': {}},
    34: {'cod': '45', 'tipo': 'I2', 'ubic': 'IZP', 'position': 'IP', 'opc': {}},
    35: {'cod': '44', 'tipo': 'I2', 'ubic': 'IZP', 'position': 'IP', 'opc': {}},
    36: {'cod': '43', 'tipo': 'I1', 'ubic': 'IZP', 'position': 'IP', 'opc': {}},
    37: {'cod': '42', 'tipo': 'I1', 'ubic': 'IZP', 'position': 'IP', 'opc': {}},
    38: {'cod': '41', 'tipo': 'I1', 'ubic': 'IZP', 'position': 'IP', 'opc': {}},
    39: {'cod': '31', 'tipo': 'I1', 'ubic': 'IDP', 'position': 'IP', 'opc': {}},
    40: {'cod': '32', 'tipo': 'I1', 'ubic': 'IDP', 'position': 'IP', 'opc': {}},
    41: {'cod': '33', 'tipo': 'I1', 'ubic': 'IDP', 'position': 'IP', 'opc': {}},
    42: {'cod': '34', 'tipo': 'I2', 'ubic': 'IDP', 'position': 'IP', 'opc': {}},
    43: {'cod': '35', 'tipo': 'I2', 'ubic': 'IDP', 'position': 'IP', 'opc': {}},
    44: {'cod': '36', 'tipo': 'I3', 'ubic': 'IDP', 'position': 'IP', 'opc': {}},
    45: {'cod': '37', 'tipo': 'I3', 'ubic': 'IDP', 'position': 'IP', 'opc': {}},
    46: {'cod': '38', 'tipo': 'I3', 'ubic': 'IDP', 'position': 'IP', 'opc': {}},
    51: {'cod': '55', 'tipo': 'S5', 'ubic': 'SZT', 'position': 'ST', 'opc': {}},
    52: {'cod': '54', 'tipo': 'S5', 'ubic': 'SZT', 'position': 'ST', 'opc': {}},
    53: {'cod': '53', 'tipo': 'S1', 'ubic': 'SZT', 'position': 'ST', 'opc': {}},
    54: {'cod': '52', 'tipo': 'S1', 'ubic': 'SZT', 'position': 'ST', 'opc': {}},
    55: {'cod': '51', 'tipo': 'S1', 'ubic': 'SZT', 'position': 'ST', 'opc': {}},
    56: {'cod': '61', 'tipo': 'S1', 'ubic': 'SDT', 'position': 'ST', 'opc': {}},
    57: {'cod': '62', 'tipo': 'S1', 'ubic': 'SDT', 'position': 'ST', 'opc': {}},
    58: {'cod': '63', 'tipo': 'S1', 'ubic': 'SDT', 'position': 'ST', 'opc': {}},
    59: {'cod': '64', 'tipo': 'S5', 'ubic': 'SDT', 'position': 'ST', 'opc': {}},
    60: {'cod': '65', 'tipo': 'S5', 'ubic': 'SDT', 'position': 'ST', 'opc': {}},
    71: {'cod': '85', 'tipo': 'I3', 'ubic': 'IZT', 'position': 'IT', 'opc': {}},
    72: {'cod': '84', 'tipo': 'I3', 'ubic': 'IZT', 'position': 'IT', 'opc': {}},
    73: {'cod': '83', 'tipo': 'I1', 'ubic': 'IZT', 'position': 'IT', 'opc': {}},
    74: {'cod': '82', 'tipo': 'I1', 'ubic': 'IZT', 'position': 'IT', 'opc': {}},
    75: {'cod': '81', 'tipo': 'I1', 'ubic': 'IZT', 'position': 'IT', 'opc': {}},
    76: {'cod': '71', 'tipo': 'I1', 'ubic': 'IDT', 'position': 'IT', 'opc': {}},
    77: {'cod': '72', 'tipo': 'I1', 'ubic': 'IDT', 'position': 'IT', 'opc': {}},
    78: {'cod': '73', 'tipo': 'I1', 'ubic': 'IDT', 'position': 'IT', 'opc': {}},
    79: {'cod': '74', 'tipo': 'I3', 'ubic': 'IDT', 'position': 'IT', 'opc': {}},
    80: {'cod': '75', 'tipo': 'I3', 'ubic': 'IDT', 'position': 'IT', 'opc': {}}
  },
  'codtokey': {},
  'config': {
    'sec': {
      'S0': {
        'opciones': [//'opc04' <-- se repiten
          'opc04', 'opc08', 'opc09',
          'opc18', 'opc19', 'opc20',
          'opc21', 'opc23',
          'opc32', 'opc33'],
        'dimension': {'w': 150, 'h': 120},
        'ubic': {
          'SP': {'x': 15, 'y': 0},
          'ST': {'x': 15, 'y': 0},
          'IT': {'x': 15, 'y': 570},
          'IP': {'x': 15, 'y': 570}
        }
      },
      'S1': {
        'opciones': ['opc35'],
        'dimension': {'w': 180, 'h': 30},
        'ubic': {
          'SP': {'x': 0, 'y': 180},
          'ST': {'x': 0, 'y': 180},
          'IT': {'x': 0, 'y': 480},
          'IP': {'x': 0, 'y': 480}
        }
      },
      'S2': {
        'opciones': ['opc25'],
        'dimension': {'w': 180, 'h': 30},
        'ubic': {
          'SP': {'x': 0, 'y': 210},
          'ST': {'x': 0, 'y': 210},
          'IT': {'x': 0, 'y': 450},
          'IP': {'x': 0, 'y': 450}
        }},
      'S3': {
        'opciones': ['opc26'],
        'dimension': {'w': 180, 'h': 30},
        'ubic': {
          'SP': {'x': 0, 'y': 240},
          'ST': {'x': 0, 'y': 240},
          'IT': {'x': 0, 'y': 420},
          'IP': {'x': 0, 'y': 420}
        }},
      'S4': {
        'opciones': ['opc01'],
        'dimension': {'w': 180, 'h': 30},
        'ubic': {
          'SP': {'x': 0, 'y': 270},
          'ST': {'x': 0, 'y': 270},
          'IT': {'x': 0, 'y': 390},
          'IP': {'x': 0, 'y': 390}
        }},
      'S5': {
        'opciones': ['opc02'],
        'dimension': {'w': 180, 'h': 30},
        'ubic': {
          'SP': {'x': 0, 'y': 300},
          'ST': {'x': 0, 'y': 300},
          'IT': {'x': 0, 'y': 360},
          'IP': {'x': 0, 'y': 360}
        }},
      'S6': {
        'opciones': ['opc11', 'opc16'],
        'dimension': {'w': 180, 'h': 60},
        'ubic': {
          'SP': {'x': 0, 'y': 120},
          'ST': {'x': 0, 'y': 120},
          'IT': {'x': 0, 'y': 510},
          'IP': {'x': 0, 'y': 510}
        }},
      'S7': {
        'opciones': [
          'opc03', 'opc04', 'opc05', 'opc06',
          'opc07', 'opc10', 'opc14', 'opc15',
          'opc24', 'opc27', 'opc28', 'opc29',
          'opc30', 'opc31', 'opc34', 'opc36'],
        'dimension': {'w': 180, 'h': 240},
        'ubic': {
          'SP': {'x': 0, 'y': 330},
          'ST': {'x': 0, 'y': 330},
          'IT': {'x': 0, 'y': 120},
          'IP': {'x': 0, 'y': 120}
        }},
      'S8': {
        'opciones': ['opc12', 'opc13', 'opc17', 'opc22'],
        'dimension': {'w': 180, 'h': 120},
        'ubic': {
          'SP': {'x': 0, 'y': 570},
          'ST': {'x': 0, 'y': 570},
          'IT': {'x': 0, 'y': 0},
          'IP': {'x': 0, 'y': 0}
        }}
    },
    'defaulData': {}
  },
  'action': {
    'load': {
      'loadData': function (dataUserDientes) {},
      'listOpcHallazgos': function(){},
      'resetGlVars': function(){}
    },
    'hallazgo': {
      'act01': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act02': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act03': {
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) { },
        'addRemoveSave': function (datDientes, param) { }
      },
      'act04': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act05': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act06': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act07': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act08': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act09': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act10': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act11': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act12': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act13': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act14': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act15': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act16': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act17': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act18': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act19': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act20': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act21': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act22': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act23': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act24': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act25': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act26': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act27': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act28': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act29': {
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) { },
        'addRemoveSave': function (datDientes, param) { }
      },
      'act30': {
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) { },
        'addRemoveSave': function (datDientes, param) { }
      },
      'act31': {
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) { },
        'addRemoveSave': function (datDientes, param) { }
      },
      'act32': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act33': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act34': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act35': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      },
      'act36': {
        'addFnLsUserButton': function () { },
        'addFnLsUserExec': function () { },
        'addView': function (param) { },
        'addSave': function (datDientes, param) { },
        'removeSave': function (datDientes, param) {}
      }
    },
    'select': {
      'fnselect1': function(){},
      'fnselect2': function(){}
    },
    'resumen':{
      'sumCariados': function(){},
      'sumCurados': function(){},
    },
    'conn': {
      'data': {
        'dientesini': {},
        'dientesactual': {},
        'hashini': '',
        'hashactual': '',
        'pkid': ''
      },
      'local': {
        'getdata': function(){},
        'getdataJSON': function(){},
        'setdata': function(){}
      },
      'server': {
        'getdata': function(){},
        'setdata': function(){},
        'getdatreset': function(){}
      }
    }
  },
  'glvar':{
    'select':{
      'opc':'',
      'cod1':'',
      'cod2':'',
      'msg1':'',
      'msg2':'',
      'fnselect1':'',
      'fnselect2':'',
      'fnexec':''
    }
  }
};

$(document).ready(function () {
  $("body").on('click', ".ucOdontogramElemTextCodDiente", function () {
    var obj = this;
    if (ucOdontogram_model.glvar.select.fnselect1.length > 2) {
      $(this).attr('fill', 'red');
      $(this).attr('stroke', 'red');
      eval(ucOdontogram_model.glvar.select.fnselect1);
    } else if (ucOdontogram_model.glvar.select.fnselect2.length > 2) {
      $(this).attr('fill', 'red');
      $(this).attr('stroke', 'red');
      eval(ucOdontogram_model.glvar.select.fnselect2);
    }
  });
  $("body").on('click', ".ucOdontogramButtonDelete", function () {
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    var _elemEventPkIdDelete = parseInt($(this).data('pkid'));
    var eventObjDelete = misDientes.eventos[_elemEventPkIdDelete];
    delete misDientes.eventos[_elemEventPkIdDelete];
    var _param = eventObjDelete.param;
    eval('ucOdontogram_model.action.hallazgo.act'+(eventObjDelete.option.substring(3,5))+'.removeSave(misDientes,_param)');
    $("#"+dataKey).ucOdontogram(misDientes);
  });
  $("body").on('click', '.ucOdontogramButtonSaveAll',function(){
    ucOdontogram_model.action.conn.server.setdata();
  });
  $("body").on('click', '.ucOdontogramButtonRefresh',function(){
    ucOdontogram_model.action.conn.server.getdata();
  });
  $("body").on('click', '.ucOdontogramButtonReset',function(){
    ucOdontogram_model.action.conn.server.getdatreset();
  });
  $('body').on('dblclick','.ucOdontogramElemCaraDiente',function(){
    var _param = {
      'cod': $(this).data('cod').toString(),
      'cara': $(this).data('cara'),
      'parte': $(this).data('parte'),
      'estado': ''};
    if(ucOdontogram_model.glvar.select.opc === 'act03'){
      _param['estado'] = $(this).data('est03');
      ucOdontogram_model.action.hallazgo.act03.addRemoveSave(_param);
    }
    if(ucOdontogram_model.glvar.select.opc === 'act29'){
      _param['estado'] = $(this).data('est29');
      ucOdontogram_model.action.hallazgo.act29.addRemoveSave(_param);
    }
    if(ucOdontogram_model.glvar.select.opc === 'act30'){
      _param['estado'] = $(this).data('est30');
      ucOdontogram_model.action.hallazgo.act30.addRemoveSave(_param);
    }
    if(ucOdontogram_model.glvar.select.opc === 'act31'){
      _param['estado'] = $(this).data('est31');
      ucOdontogram_model.action.hallazgo.act31.addRemoveSave(_param);
    }
  });
  $('body').on('click','.ucOdontogramButtonItemHallazgosOpc',function(){
    var opcAct = $(this).data('opc');
    if(ucOdontogram_model.glvar.select.opc === opcAct){
      ucOdontogram_model.glvar.select.opc = '';
      $(".ucOdontogramButtonItemHallazgosOpc").removeClass('select');
      ucOdontogram_model.action.load.resetGlVars();
      return  false;
    }
    ucOdontogram_model.glvar.select.opc = opcAct;
    if((typeof ucOdontogram_model.action.hallazgo[opcAct] === 'object') &&
            (typeof ucOdontogram_model.action.hallazgo[opcAct].addFnLsUserButton !== 'undefined')){
      ucOdontogram_model.action.hallazgo[opcAct].addFnLsUserButton(this);
    }else{
      var dataKey = ucOdontogram_manager('getactive');
      var misDientes = ucOdontogram_manager('get', dataKey);
      if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0) ){
        $("#"+misDientes.config.id_msg_evento).html('Haga click sobre la cara de la Pieza Dentaria');
      }
    }
    $(".ucOdontogramButtonItemHallazgosOpc").removeClass('select');
    $(this).addClass('select');
    return true;
  });
  $('body').on('click',"#ucOdontogramDocumentPNGdownload", function(){
    var dataKey = ucOdontogram_manager('getactive');
    var objSvg = $("#"+dataKey+" > svg")[0];
    var svgWidth = parseInt(objSvg.getAttribute('width').replace("px", ""));
    var svgHeight = parseInt(objSvg.getAttribute('height').replace("px", ""));
    var html = document.querySelector("svg").parentNode.innerHTML;
    var imgsrc = 'data:image/svg+xml;charset=utf-8;base64,' + Base64.encode(html);
    var canvas = document.createElement("canvas"), context = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.setAttribute('width', svgWidth);
    canvas.setAttribute('height', svgHeight);
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
      action = 'actionAllData';
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
    alert('ERROR-modelManager: opcion no valida');
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
    var _active = '';
    var _logActive = '';
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
    var _keyLast = '';
    if (!funGetActive()) {
      for (var i in ucOdontogram_data) {
        _keyLast = i;
      }
      if (typeof _keyLast === 'string') {
        funActive(_keyLast);
      }
    }
    return true;
  };
  switch (action) {
    case 'add':
      if (!(typeof val_data === "object")) {
        return false;
      }
      funAdd(keyval, val_data);
      return true;
      break;
    case 'update':
      funUpdate(keyval, val_data);
      return true;
      break;
    case 'delete':
      funDelete(keyval);
      return true;
      break;
    case 'active':
      funActive(keyval);
      return true;
      break;
    case 'get':
      return funGet(keyval);
      break;
    case 'exist':
      return funExistKey(keyval);
      break;
    case 'actionAllData':
      switch (keyval) {
        case 'getactive':
          return funGetActive();
          break;
        case 'clean':
          return funClean();
          break;
        case 'inactive':
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
    var _html = '';
    var _count = 0;
    for (var i in eventos) {
      _count ++;
      _html += '<div class="ucOdontogramEvent">';
      _html += _count.toString() + ': ' ;
      _html += eval('ucOdontogram_model.opc.opc'+eventos[i].option.substring(3,5)+'.nombre');
      _html += ' <span style="font-weight: bold;">' + eventos[i].title + '</span> ';
      if(datDientes.config.id_list_event_opc !== 'view'){
        _html += '<span data-pkid="' + i + '" class="ucOdontogramButtonDelete">&nbsp;X&nbsp;</span>';
      }
      _html += '</div>';
    }
    if((datDientes.config.id_list_eventos.length > 2) && ($("#"+datDientes.config.id_list_eventos).length > 0)){
      $("#"+datDientes.config.id_list_eventos).html(_html);
    }
    if((ucOdontogram_model.glvar.select.opc === 'act03') ||
            (ucOdontogram_model.glvar.select.opc === 'act29') ||
            (ucOdontogram_model.glvar.select.opc === 'act30') ||
            (ucOdontogram_model.glvar.select.opc === 'act31')){
        return false;
    }
    ucOdontogram_model.glvar.select.opc = '';
    $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
    return true;
  };
  var fnAddEventos = function (datDientes, action, params, option, title) {
    var eventos = datDientes.eventos;
    var _datEventKeys = Object.keys(eventos);
    if (typeof _datEventKeys.length === 'undefined') {
      _datEventKeys = {};
    }
    if(typeof option === 'undefined'){
      option = 'default Option';
    }
    if(typeof title === 'undefined'){
      title = 'default Title';
    }
    eventos[_datEventKeys.length] = {'action': action, 'param': params, 'option': option, 'title': title};
    fnViewEventos(datDientes);
    return eventos;
  };
  //----------------CONN - Local - Server
  ucOdontogram_model.action.conn.local.getdata = function(){
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    return {'data': misDientes.data, 'eventos': misDientes.eventos};
  };
  ucOdontogram_model.action.conn.local.getdataJSON = function(){
    var misDientes = ucOdontogram_model.action.conn.local.getdata();
    return JSON.stringify(misDientes);
  };
  ucOdontogram_model.action.conn.local.getdataJSONEncodeBase64 = function(){
    var misDientesJSON = ucOdontogram_model.action.conn.local.getdataJSON();
    var MisDientesJSONBase64 = Base64.encode(misDientesJSON)
    var csrfmiddlewaretoken = $("[name=csrfmiddlewaretoken]").val();
    csrftoken = $("[name=csrfmiddlewaretoken]").val();
    var val_egreso = ''
    if($('#id_egreso_odontograma').is(':checked')){
      val_egreso = $("#id_egreso_odontograma").val()
    }
    return {
    'misdientesjsonbase64': MisDientesJSONBase64,
    'csrfmiddlewaretoken': csrfmiddlewaretoken,
    'length': MisDientesJSONBase64.length,
    'hashmd5': md5(MisDientesJSONBase64),
    'egreso': val_egreso,
    'observaciones': $("#id_observaciones_odontograma").val()
    };
  };
  ucOdontogram_model.action.conn.local.setdata = function(misDientes){
    var dataKey = ucOdontogram_manager('getactive');
    $("#"+dataKey).ucOdontogram(misDientes);
    return misDientes;
  };
  ucOdontogram_model.action.conn.local.setdataJSON = function(misDientesJSON){
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = JSON.parse(misDientesJSON);
    ucOdontogram_model.action.conn.local.setdata(misDientes);
    return misDientes;
  };
  ucOdontogram_model.action.conn.server.getdata = function(){
    var _data = {};
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    $.ajax({
      url: misDientes.config.urlws_save,
      data: _data,
      type: 'GET',
      beforeSend: function(){
        if((misDientes.config.id_save_msg.length > 2) && ($("#"+misDientes.config.id_save_msg).length > 0) ){
          $("#"+misDientes.config.id_save_msg).html('....guardando');
        }
      },
      success: function(misDientesJSONBase64data){
        var misDientAll = {};
        if((typeof misDientesJSONBase64data['misdientesjsonbase64'] === 'string') && (misDientesJSONBase64data['misdientesjsonbase64'].length > 10)){
          misDientAll = JSON.parse(Base64.decode(misDientesJSONBase64data['misdientesjsonbase64']));
        }else{
          misDientAll = ucOdontogram_model.config.defaulData;
        }
        if(typeof misDientAll['eventos']  === 'object'){
          misDientes.eventos = misDientAll.eventos;
        }
        if(typeof misDientAll['data']  === 'object'){
          misDientes.data = Object.assign({}, misDientAll.data);
        }
        if(typeof misDientesJSONBase64data['egreso'] === 'string'){
          if((misDientesJSONBase64data['egreso'] == 'FIN') && !($('#id_egreso_odontograma').is(':checked'))){
            $("#id_egreso_odontograma").click();
          }
        }
        if(typeof misDientesJSONBase64data['observaciones'] === 'string'){
          $("#id_observaciones_odontograma").val(misDientesJSONBase64data['observaciones']);
        }
        $(document).ready(function () {
          $("#"+dataKey).ucOdontogram(misDientes);
          fnViewEventos(misDientes);
        });
        if((misDientes.config.id_save_msg.length > 2) && ($("#"+misDientes.config.id_save_msg).length > 0) ){
          $("#"+misDientes.config.id_save_msg).html('...');
        }
      },
      error: function(result){
        if((misDientes.config.id_save_msg.length > 2) && ($("#"+misDientes.config.id_save_msg).length > 0) ){
          $("#"+misDientes.config.id_save_msg).html('<span style="color:red;">ocurrio un error</span>');
        }
      }
    });
  };
  ucOdontogram_model.action.conn.server.getdatreset = function(){
    var _data = {'reset': 'ok'};
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    $.ajax({
      url: misDientes.config.urlws_save,
      data: _data,
      type: 'GET',
      beforeSend: function(){
        if((misDientes.config.id_save_msg.length > 2) && ($("#"+misDientes.config.id_save_msg).length > 0) ){
          $("#"+misDientes.config.id_save_msg).html('....guardando');
        }
      },
      success: function(misDientesJSONBase64data){
        var misDientAll = {};
        if((typeof misDientesJSONBase64data['misdientesjsonbase64'] === 'string') && (misDientesJSONBase64data['misdientesjsonbase64'].length > 10)){
          misDientAll = JSON.parse(Base64.decode(misDientesJSONBase64data['misdientesjsonbase64']));
        }else{
          misDientAll = ucOdontogram_model.config.defaulData;
        }
        if(typeof misDientAll['eventos']  === 'object'){
          misDientes.eventos = misDientAll.eventos;
        }
        if(typeof misDientAll['data']  === 'object'){
          misDientes.data = Object.assign({}, misDientAll.data);
        }
        if(typeof misDientesJSONBase64data['egreso'] === 'string'){
          if((misDientesJSONBase64data['egreso'] == 'FIN') && !($('#id_egreso_odontograma').is(':checked'))){
            $("#id_egreso_odontograma").click();
          }
        }
        if(typeof misDientesJSONBase64data['observaciones'] === 'string'){
          $("#id_observaciones_odontograma").val(misDientesJSONBase64data['observaciones']);
        }
        $(document).ready(function () {
          $("#"+dataKey).ucOdontogram(misDientes);
          fnViewEventos(misDientes);
        });
        if((misDientes.config.id_save_msg.length > 2) && ($("#"+misDientes.config.id_save_msg).length > 0) ){
          $("#"+misDientes.config.id_save_msg).html('...');
        }
      },
      error: function(result){
        if((misDientes.config.id_save_msg.length > 2) && ($("#"+misDientes.config.id_save_msg).length > 0) ){
          $("#"+misDientes.config.id_save_msg).html('<span style="color:red;">ocurrio un error</span>');
        }
      }
    });
  };
  ucOdontogram_model.action.conn.server.setdata = function(){
    var dataLocal = ucOdontogram_model.action.conn.local.getdataJSONEncodeBase64();
    var _data = dataLocal;
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);

    $.ajax({
      url: misDientes.config.urlws_save,
      data: _data,
      type: 'POST',
      beforeSend: function(){
        if((misDientes.config.id_save_msg.length > 2) && ($("#"+misDientes.config.id_save_msg).length > 0) ){
          $("#"+misDientes.config.id_save_msg).html('....guardando');
        }
      },
      success: function(result){
        if((misDientes.config.id_save_msg.length > 2) && ($("#"+misDientes.config.id_save_msg).length > 0) ){
          $("#"+misDientes.config.id_save_msg).html('...');
        }
      },
      error: function(result){
        if((misDientes.config.id_save_msg.length > 2) && ($("#"+misDientes.config.id_save_msg).length > 0) ){
          $("#"+misDientes.config.id_save_msg).html('<span style="color:red;">ocurrio un error</span>');
        }
      }
    });
  };
  //----- Load model Actions: Hallazgos - INI ----------------------------------
  ucOdontogram_model.action.select.fnselect1 = function(obj){
    ucOdontogram_model.glvar.select.fnselect1 = '';
    ucOdontogram_model.glvar.select.cod1 = $(obj).data("cod");
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if ((typeof ucOdontogram_model.glvar.select.fnselect2 === 'string') && (ucOdontogram_model.glvar.select.fnselect2.length > 2)) {
      if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0) ){
        $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg2);
      }
    } else if ((typeof ucOdontogram_model.glvar.select.fnexec === 'string') && (ucOdontogram_model.glvar.select.fnexec.length > 2)) {
      if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0) ){
        $("#"+misDientes.config.id_msg_evento).html('');
      }
      eval(ucOdontogram_model.glvar.select.fnexec);
    }
  };
  ucOdontogram_model.action.select.fnselect2 = function(obj){
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.cod2 = $(obj).data("cod");
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if ((typeof ucOdontogram_model.glvar.select.fnexec === 'string') && (ucOdontogram_model.glvar.select.fnexec.length > 2)) {
      if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0) ){
        $("#"+misDientes.config.id_msg_evento).html('');
      }
      eval(ucOdontogram_model.glvar.select.fnexec);
    }
  };
  //----- ACT01
  ucOdontogram_model.action.hallazgo.act01.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria Inicial';
    ucOdontogram_model.glvar.select.msg2 = 'Seleccione Pieza Dentaria Final';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = 'ucOdontogram_model.action.select.fnselect2(obj)';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act01.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0) ){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act01.addFnLsUserExec = function () {
    var param = {
      'codini': ucOdontogram_model.glvar.select.cod1,
      'codfin': ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act01.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act01.addView = function (param) {
    var _template = $("#template_form_01").html();
    var _nameTemplate = '_FORM01_';
    var _nameValue = '01';
    var _option_html = '';
    var codDienteIni = '', codDienteFin = '';
    if(typeof param === 'object'){
      if(typeof param['codini'] === 'number' || typeof param['codini'] === 'string'){
        codDienteIni = param['codini'].toString();
      }
      if(typeof param['codfin'] === 'number' || typeof param['codfin'] === 'string'){
        codDienteFin = param['codfin'].toString();
      }
    }
    _template = _template.replace('_CODINI_VALUE_',codDienteIni);
    _template = _template.replace('_CODFIN_VALUE_',codDienteFin);
    for(var i in ucOdontogram_model.opc.opc01.opciones.tipos){
      _option_html += '<option value="'+i+'">'+ucOdontogram_model.opc.opc01.opciones.tipos[i]+'</option>';
    }
    _template = _template.replace('__TIPO_OPCIONES__',_option_html);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act01.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act01.addSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'], tipo = param['tipo'], estado = param['estado'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc01.hallazgo = true;
      if (i === _keyini) {
        datDientes.data[i].opc.opc01.afectacion = 'I';
      } else if (i === _keyfin) {
        datDientes.data[i].opc.opc01.afectacion = 'F';
      } else {
        datDientes.data[i].opc.opc01.afectacion = 'M';
      }
      datDientes.data[i].opc.opc01.tipo = tipo;
      datDientes.data[i].opc.opc01.estado = estado;
    }
    var params = {'codini': codDienteIni, 'codfin': codDienteFin, 'tipo': tipo, 'estado': estado};
    datDientes.eventos = fnAddEventos(datDientes, 'act01.addSave', params, 'opc01', '['+codDienteIni+'-'+codDienteFin+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act01.removeSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      'codini': codDienteIni,
      'codfin': codDienteFin,
      'tipo': ucOdontogram_model.opc.opc01.atributos.tipo,
      'estado': ucOdontogram_model.opc.opc01.atributos.estado
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc01.hallazgo = false;
      datDientes.data[i].opc.opc01.afectacion = ucOdontogram_model.opc.opc01.atributos.afectacion;
      datDientes.data[i].opc.opc01.tipo = params.tipo;
      datDientes.data[i].opc.opc01.estado = params.estado;
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT02
  ucOdontogram_model.action.hallazgo.act02.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria Inicial';
    ucOdontogram_model.glvar.select.msg2 = 'Seleccione Pieza Dentaria Final';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = 'ucOdontogram_model.action.select.fnselect2(obj)';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act02.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0) ){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act02.addFnLsUserExec = function () {
    var param = {
      'codini': ucOdontogram_model.glvar.select.cod1,
      'codfin': ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act02.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act02.addView = function (param) {
    var _template = $("#template_form_02").html();
    var _nameTemplate = '_FORM02_';
    var _nameValue = '02';
    var _option_html = '';
    var codDienteIni = '', codDienteFin = '';
    if(typeof param === 'object'){
      if(typeof param['codini'] === 'number' || typeof param['codini'] === 'string'){
        codDienteIni = param['codini'].toString();
      }
      if(typeof param['codfin'] === 'number' || typeof param['codfin'] === 'string'){
        codDienteFin = param['codfin'].toString();
      }
    }
    _template = _template.replace('_CODINI_VALUE_',codDienteIni);
    _template = _template.replace('_CODFIN_VALUE_',codDienteFin);
    for(var i in ucOdontogram_model.opc.opc02.opciones.tipos){
      _option_html += '<option value="'+i+'">'+ucOdontogram_model.opc.opc02.opciones.tipos[i]+'</option>';
    }
    _template = _template.replace('__TIPO_OPCIONES__',_option_html);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act02.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act02.addSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'], tipo = param['tipo'], estado = param['estado'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc02.hallazgo = true;
      if (i === _keyini) {
        datDientes.data[i].opc.opc02.afectacion = 'I';
      } else if (i === _keyfin) {
        datDientes.data[i].opc.opc02.afectacion = 'F';
      } else {
        datDientes.data[i].opc.opc02.afectacion = 'M';
      }
      datDientes.data[i].opc.opc02.tipo = tipo;
      datDientes.data[i].opc.opc02.estado = estado;
    }
    var params = {'codini': codDienteIni, 'codfin': codDienteFin, 'tipo': tipo, 'estado': estado};
    datDientes.eventos = fnAddEventos(datDientes, 'act02.addSave', params, 'opc02', '['+codDienteIni+'-'+codDienteFin+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act02.removeSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      'codini': codDienteIni,
      'codfin': codDienteFin,
      'tipo': ucOdontogram_model.opc.opc02.atributos.tipo,
      'estado': ucOdontogram_model.opc.opc02.atributos.estado
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc02.hallazgo = false;
      datDientes.data[i].opc.opc02.afectacion = ucOdontogram_model.opc.opc02.atributos.afectacion;
      datDientes.data[i].opc.opc02.tipo = params.tipo;
      datDientes.data[i].opc.opc02.estado = params.estado;
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT03
  ucOdontogram_model.action.hallazgo.act03.addRemoveSave = function (_param) {
    var codDiente = _param['cod'].toString(), cara = _param['cara'], parte = _param['parte'], estado = _param['estado'];
    var dataKey = ucOdontogram_manager('getactive');
    var datDientes = ucOdontogram_manager('get', dataKey);
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    if((typeof datDientes.data[_key].opc.opc03[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc03[cara][parte] !== 'undefined')){
      if(estado === 'N'){ //add
        _param.estado = 'S';
        datDientes = ucOdontogram_model.action.hallazgo.act03.addSave(datDientes, _param);
        $("#"+dataKey).ucOdontogram(datDientes);
      }
      if(estado === 'S'){ //delete
        var _elemEventPkIdDelete = null;
        for(var i in datDientes.eventos){
          if((datDientes.eventos[i].option === 'opc03') &&
                  (datDientes.eventos[i].param.cod === codDiente) &&
                  (datDientes.eventos[i].param.cara === cara) &&
                  (datDientes.eventos[i].param.parte === parte) &&
                  (datDientes.eventos[i].param.estado === 'S')){
            _elemEventPkIdDelete = i;
            break;
          }
        }
        if(typeof datDientes.eventos[_elemEventPkIdDelete] === 'object'){
          delete datDientes.eventos[_elemEventPkIdDelete];
        }
        _param.estado = 'N';
        datDientes = ucOdontogram_model.action.hallazgo.act03.removeSave(datDientes, _param);
        $("#"+dataKey).ucOdontogram(datDientes);
      }
      return datDientes;
    }else{
      return datDientes;
    }
  };
  ucOdontogram_model.action.hallazgo.act03.addSave = function (datDientes, param) {
    var codDiente = param['cod'], cara = param['cara'], parte = param['parte'], estado = param['estado'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    if((typeof datDientes.data[_key].opc.opc03[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc03[cara][parte] !== 'undefined')){
      datDientes.data[_key].opc.opc03[cara][parte].estado = estado;
      datDientes.data[_key].opc.opc03.hallazgo = true;
      var params = {'cod': codDiente, 'cara': cara, 'parte': parte, 'estado': estado};
      datDientes.eventos = fnAddEventos(datDientes, 'act03.addSave', params, 'opc03', '['+codDiente+']-&DDotrahd;{'+cara+'}');
      return datDientes;
    }
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act03.removeSave = function (datDientes, param) {
    var codDiente = param['cod'], cara = param['cara'], parte = param['parte'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {
      'cod': codDiente,
      'cara': cara,
      'parte': parte,
      'estado': ucOdontogram_model.opc.opc03.atributos[cara][parte].estado
    };
    var _estados = false;
    if((typeof datDientes.data[_key].opc.opc03[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc03[cara][parte] !== 'undefined')){
      datDientes.data[_key].opc.opc03[cara][parte].estado = params.estado;
      for (var i in datDientes.data[_key].opc.opc03){
        if((typeof datDientes.data[_key].opc.opc03[i] === 'object') &&
                (typeof datDientes.data[_key].opc.opc03[i][parte] === 'string') &&
                (datDientes.data[_key].opc.opc03[i][parte].estado === 'S')){
          _estados = true;
        }
      }
      datDientes.data[_key].opc.opc03.hallazgo = _estados;
      fnViewEventos(datDientes);
    }
    return datDientes;
  };
  //----- ACT04
  ucOdontogram_model.action.hallazgo.act04.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act04.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0) ){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act04.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act04.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act04.addView = function (param) {
    var _template = $("#template_form_04").html();
    var _nameTemplate = '_FORM04_';
    var _nameValue = '04';
    var _option_html = '';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    for(var i in ucOdontogram_model.opc.opc04.opciones.tipos){
      if(typeof ucOdontogram_model.opc.opc04.opciones.tipos[i] === 'object' &&
              typeof ucOdontogram_model.opc.opc04.opciones.tipos[i]['opciones'] === 'object'){
        _option_html += '<optgroup label="'+ucOdontogram_model.opc.opc04.opciones.tipos[i].nombre+'">';
        for(var j in ucOdontogram_model.opc.opc04.opciones.tipos[i]['opciones']){
          _option_html += '<option value="'+j+'">'+ucOdontogram_model.opc.opc04.opciones.tipos[i].opciones[j]+'</option>';
        }
        _option_html += '</optgroup>';
      }else{
        _option_html += '<option value="'+i+'">'+ucOdontogram_model.opc.opc04.opciones.tipos[i]+'</option>';
      }
    }
    _template = _template.replace('__TIPO_OPCIONES__',_option_html);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act04.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act04.addSave = function (datDientes, param) {
    var codDiente = param['cod'], colorMetal = param['colormetal'], tipo = param['tipo'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc04.hallazgo = true;
    datDientes.data[_key].opc.opc04.colormetal = colorMetal;
    datDientes.data[_key].opc.opc04.tipo = tipo;
    var params = {'cod': codDiente, 'colormetal': colorMetal, 'tipo': tipo};
    datDientes.eventos = fnAddEventos(datDientes, 'act04.addSave', params, 'opc04', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act04.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {
      'cod': codDiente,
      'colormetal': ucOdontogram_model.opc.opc04.atributos.colormetal,
      'tipo': ucOdontogram_model.opc.opc04.atributos.tipo
    };
    datDientes.data[_key].opc.opc04.hallazgo = false;
    datDientes.data[_key].opc.opc04.colormetal = params.colormetal;
    datDientes.data[_key].opc.opc04.tipo = params.tipo;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT05
  ucOdontogram_model.action.hallazgo.act05.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act05.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act05.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act05.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act05.addView = function (param) {
    var _template = $("#template_form_05").html();
    var _nameTemplate = '_FORM05_';
    var _nameValue = '05';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act05.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act05.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc05.hallazgo = true;
    var params = {'cod': codDiente};
    datDientes.eventos = fnAddEventos(datDientes, 'act05.addSave', params, 'opc05', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act05.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente};
    datDientes.data[_key].opc.opc05.hallazgo = false;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT06
  ucOdontogram_model.action.hallazgo.act06.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria Anterior';
    ucOdontogram_model.glvar.select.msg2 = 'Seleccione Pieza Dentaria Posterior';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = 'ucOdontogram_model.action.select.fnselect2(obj)';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act06.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act06.addFnLsUserExec = function () {
    var param = {
      'codini': ucOdontogram_model.glvar.select.cod1,
      'codfin': ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act06.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act06.addView = function (param) {
    var _template = $("#template_form_06").html();
    var _nameTemplate = '_FORM06_';
    var _nameValue = '06';
    var codDienteIni = '', codDienteFin = '';
    if(typeof param === 'object'){
      if(typeof param['codini'] === 'number' || typeof param['codini'] === 'string'){
        codDienteIni = param['codini'].toString();
      }
      if(typeof param['codfin'] === 'number' || typeof param['codfin'] === 'string'){
        codDienteFin = param['codfin'].toString();
      }
    }
    _template = _template.replace('_CODINI_VALUE_',codDienteIni);
    _template = _template.replace('_CODFIN_VALUE_',codDienteFin);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act06.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act06.addSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (Math.abs(_keyini - _keyfin) !== 1) {
      _keyfin = _keyini + 1;
    }
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    datDientes.data[_keyini].opc.opc06.hallazgo = true;
    datDientes.data[_keyini].opc.opc06.afectacion = 'D';
    datDientes.data[_keyfin].opc.opc06.hallazgo = true;
    datDientes.data[_keyfin].opc.opc06.afectacion = 'Z';
    var params = {'codini': datDientes.data[_keyini].cod, 'codfin': datDientes.data[_keyfin].cod};
    datDientes.eventos = fnAddEventos(datDientes, 'act06.addSave', params, 'opc06', '['+params.codini+'-'+params.codfin+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act06.removeSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {'codini': codDienteIni, 'codfin': codDienteFin};
    datDientes.data[_keyini].opc.opc06.hallazgo = false;
    datDientes.data[_keyini].opc.opc06.afectacion = ucOdontogram_model.opc.opc06.atributos.afectacion;
    datDientes.data[_keyfin].opc.opc06.hallazgo = false;
    datDientes.data[_keyfin].opc.opc06.afectacion = ucOdontogram_model.opc.opc06.atributos.afectacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT07
  ucOdontogram_model.action.hallazgo.act07.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria que nose observa';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act07.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act07.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act07.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act07.addView = function (param) {
    var _template = $("#template_form_07").html();
    var _nameTemplate = '_FORM07_';
    var _nameValue = '07';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act07.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act07.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc07.hallazgo = true;
    var params = {'cod': codDiente};
    datDientes.eventos = fnAddEventos(datDientes, 'act07.addSave', params, 'opc07', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act07.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente};
    datDientes.data[_key].opc.opc07.hallazgo = false;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT08
  ucOdontogram_model.action.hallazgo.act08.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act08.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act08.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act08.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act08.addView = function (param) {
    var _template = $("#template_form_08").html();
    var _nameTemplate = '_FORM08_';
    var _nameValue = '08';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act08.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act08.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc08.hallazgo = true;
    datDientes.data[_key].opc.opc08.value = 'DIS';
    var params = {'cod': codDiente};
    datDientes.eventos = fnAddEventos(datDientes, 'act08.addSave', params, 'opc08', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act08.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente};
    datDientes.data[_key].opc.opc08.hallazgo = false;
    datDientes.data[_key].opc.opc08.value = ucOdontogram_model.opc.opc04.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT09
  ucOdontogram_model.action.hallazgo.act09.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act09.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act09.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act09.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act09.addView = function (param) {
    var _template = $("#template_form_09").html();
    var _nameTemplate = '_FORM09_';
    var _nameValue = '09';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act09.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act09.addSave = function (datDientes, param) {
    var codDiente = param['cod'], ubicaciontxt = param['ubicaciontxt'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc09.hallazgo = true;
    datDientes.data[_key].opc.opc09.value = 'E';
    datDientes.data[_key].opc.opc09.ubicaciontxt = ubicaciontxt;
    var params = {'cod': codDiente,'ubicaciontxt': ubicaciontxt};
    datDientes.eventos = fnAddEventos(datDientes, 'act09.addSave', params, 'opc09', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act09.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {
      'cod': codDiente,
      'ubicaciontxt': ucOdontogram_model.opc.opc09.atributos.ubicaciontxt
    };
    datDientes.data[_key].opc.opc09.hallazgo = false;
    datDientes.data[_key].opc.opc09.value = ucOdontogram_model.opc.opc09.atributos.value;
    datDientes.data[_key].opc.opc09.ubicaciontxt = ucOdontogram_model.opc.opc09.atributos.ubicaciontxt;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT10
  ucOdontogram_model.action.hallazgo.act10.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act10.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act10.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act10.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act10.addView = function (param) {
    var _template = $("#template_form_10").html();
    var _nameTemplate = '_FORM10_';
    var _nameValue = '10';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act10.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act10.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key1 = ucOdontogram_model.codtokey[(parseInt(codDiente))];
    datDientes.data[_key1].opc.opc10.hallazgo = true;
    var params = {'cod': codDiente};
    datDientes.eventos = fnAddEventos(datDientes, 'act10.addSave', params, 'opc10', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act10.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key1 = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key1].opc.opc10.hallazgo = false;
    var params = {'cod': codDiente};
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT11
  ucOdontogram_model.action.hallazgo.act11.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act11.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act11.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act11.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act11.addView = function (param) {
    var _template = $("#template_form_11").html();
    var _nameTemplate = '_FORM11_';
    var _nameValue = '11';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act11.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act11.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc11.hallazgo = true;
    var params = {'cod': codDiente};
    datDientes.eventos = fnAddEventos(datDientes, 'act11.addSave', params, 'opc11', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act11.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente};
    datDientes.data[_key].opc.opc11.hallazgo = false;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT12
  ucOdontogram_model.action.hallazgo.act12.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act12.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act12.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act12.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act12.addView = function (param) {
    var _template = $("#template_form_12").html();
    var _nameTemplate = '_FORM12_';
    var _nameValue = '12';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act12.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act12.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc12.hallazgo = true;
    var params = {'cod': codDiente};
    datDientes.eventos = fnAddEventos(datDientes, 'act12.addSave', params, 'opc12', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act12.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente};
    datDientes.data[_key].opc.opc12.hallazgo = false;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT13
  ucOdontogram_model.action.hallazgo.act13.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act13.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act13.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act13.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act13.addView = function (param) {
    var _template = $("#template_form_13").html();
    var _nameTemplate = '_FORM13_';
    var _nameValue = '13';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act13.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act13.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc13.hallazgo = true;
    var params = {'cod': codDiente};
    datDientes.eventos = fnAddEventos(datDientes, 'act13.addSave', params, 'opc13', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act13.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente};
    datDientes.data[_key].opc.opc13.hallazgo = false;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT14
  ucOdontogram_model.action.hallazgo.act14.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = '';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = '';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act14.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
    eval(ucOdontogram_model.glvar.select.fnexec);
  };
  ucOdontogram_model.action.hallazgo.act14.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act14.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act14.addView = function (param) {
    var _template = $("#template_form_14").html();
    var _nameTemplate = '_FORM14_';
    var _nameValue = '14';
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act14.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act14.addSave = function (datDientes, param) {
    var ubicDientes = param['ubic'];
    if ((typeof ubicDientes !== 'string') || !(ubicDientes === 'DS' || ubicDientes === 'DI')) {
      return false;
    }
    for (var i in datDientes.data) {
      if ((ubicDientes === 'DS') && ((datDientes.data[i].position === 'SP') || (datDientes.data[i].position === 'ST'))) {
        datDientes.data[i].opc.opc14.hallazgo = true;
      } else if ((ubicDientes === 'DI') && ((datDientes.data[i].position === 'IP') || (datDientes.data[i].position === 'IT'))) {
        datDientes.data[i].opc.opc14.hallazgo = true;
      }
    }
    var params = {'ubic': ubicDientes};
    datDientes.eventos = fnAddEventos(datDientes, 'act14.addSave', params, 'opc14', '{'+ubicDientes+'}');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act14.removeSave = function (datDientes, param) {
    var ubicDientes = param['ubic'];
    if ((typeof ubicDientes !== 'string') || !(ubicDientes === 'DS' || ubicDientes === 'DI')) {
      return false;
    }
    for (var i in datDientes.data) {
      if ((ubicDientes === 'DS') && ((datDientes.data[i].position === 'SP') || (datDientes.data[i].position === 'ST'))) {
        datDientes.data[i].opc.opc14.hallazgo = false;
      } else if ((ubicDientes === 'DI') && ((datDientes.data[i].position === 'IP') || (datDientes.data[i].position === 'IT'))) {
        datDientes.data[i].opc.opc14.hallazgo = false;
      }
    }
    var params = {'ubic': ubicDientes};
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT15
  ucOdontogram_model.action.hallazgo.act15.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act15.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act15.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act15.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act15.addView = function (param) {
    var _template = $("#template_form_15").html();
    var _nameTemplate = '_FORM15_';
    var _nameValue = '15';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        _param['direccionubicacion'] = _param['ubicacion']+_param['direccion'];
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act15.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act15.addSave = function (datDientes, param) {
    var codDiente = param['cod'], direccionubicacion = param['direccionubicacion'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc15.hallazgo = true;
    datDientes.data[_key].opc.opc15.direccionubicacion = direccionubicacion;
    var params = {'cod': codDiente, 'direccionubicacion': direccionubicacion};
    datDientes.eventos = fnAddEventos(datDientes, 'act15.addSave', params, 'opc15', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act15.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {
      'cod': codDiente,
      'direccionubicacion': ucOdontogram_model.opc.opc15.atributos.direccionubicacion
    };
    datDientes.data[_key].opc.opc15.hallazgo = false;
    datDientes.data[_key].opc.opc15.direccionubicacion = ucOdontogram_model.opc.opc15.atributos.direccionubicacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT16
  ucOdontogram_model.action.hallazgo.act16.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria Inicial';
    ucOdontogram_model.glvar.select.msg2 = 'Seleccione Pieza Dentaria Final';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = 'ucOdontogram_model.action.select.fnselect2(obj)';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act16.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act16.addFnLsUserExec = function () {
    var param = {
      'codini': ucOdontogram_model.glvar.select.cod1,
      'codfin': ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act16.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act16.addView = function (param) {
    var _template = $("#template_form_16").html();
    var _nameTemplate = '_FORM16_';
    var _nameValue = '16';
    var codDienteIni = '', codDienteFin = '';
    if(typeof param === 'object'){
      if(typeof param['codini'] === 'number' || typeof param['codini'] === 'string'){
        codDienteIni = param['codini'].toString();
      }
      if(typeof param['codfin'] === 'number' || typeof param['codfin'] === 'string'){
        codDienteFin = param['codfin'].toString();
      }
    }
    _template = _template.replace('_CODINI_VALUE_',codDienteIni);
    _template = _template.replace('_CODFIN_VALUE_',codDienteFin);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act16.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act16.addSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'], tipo = param['tipo'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (Math.abs(_keyini - _keyfin) !== 1) {
      _keyfin = _keyini + 1;
    }
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    datDientes.data[_keyini].opc.opc16.hallazgo = true;
    datDientes.data[_keyini].opc.opc16.afectacion = 'D';
    datDientes.data[_keyini].opc.opc16.tipo = tipo;
    datDientes.data[_keyfin].opc.opc16.hallazgo = true;
    datDientes.data[_keyfin].opc.opc16.afectacion = 'Z';
    datDientes.data[_keyfin].opc.opc16.tipo = tipo;
    var params = {'codini': datDientes.data[_keyini].cod, 'codfin': datDientes.data[_keyfin].cod, 'tipo': tipo};
    datDientes.eventos = fnAddEventos(datDientes, 'act16.addSave', params, 'opc16', '['+datDientes.data[_keyini].cod+'-'+datDientes.data[_keyfin].cod+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act16.removeSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {'codini': codDienteIni, 'codfin': codDienteFin, 'tipo': ucOdontogram_model.opc.opc16.atributos.tipo};
    datDientes.data[_keyini].opc.opc16.hallazgo = false;
    datDientes.data[_keyini].opc.opc16.afectacion = ucOdontogram_model.opc.opc16.atributos.afectacion;
    datDientes.data[_keyini].opc.opc16.tipo = ucOdontogram_model.opc.opc16.atributos.tipo;
    datDientes.data[_keyfin].opc.opc16.hallazgo = false;
    datDientes.data[_keyfin].opc.opc16.afectacion = ucOdontogram_model.opc.opc16.atributos.afectacion;
    datDientes.data[_keyfin].opc.opc16.tipo = ucOdontogram_model.opc.opc16.atributos.tipo;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT17
  ucOdontogram_model.action.hallazgo.act17.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act17.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act17.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act17.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act17.addView = function (param) {
    var _template = $("#template_form_17").html();
    var _nameTemplate = '_FORM17_';
    var _nameValue = '17';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act17.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act17.addSave = function (datDientes, param) {
    var codDiente = param['cod'], giro = param['giro'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc17.hallazgo = true;
    datDientes.data[_key].opc.opc17.giro = giro;
    var params = {'cod': codDiente, 'giro': giro};
    datDientes.eventos = fnAddEventos(datDientes, 'act17.addSave', params, 'opc17', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act17.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = ucOdontogram_model.codtokey[(parseInt(codDiente))];
    var params = {'cod': codDiente, 'giro': ucOdontogram_model.opc.opc17.atributos.giro};
    datDientes.data[_key].opc.opc17.hallazgo = false;
    datDientes.data[_key].opc.opc17.giro = ucOdontogram_model.opc.opc17.atributos.giro;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT18
  ucOdontogram_model.action.hallazgo.act18.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act18.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act18.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act18.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act18.addView = function (param) {
    var _template = $("#template_form_18").html();
    var _nameTemplate = '_FORM18_';
    var _nameValue = '18';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act18.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act18.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc18.hallazgo = true;
    datDientes.data[_key].opc.opc18.value = 'I';
    var params = {'cod': codDiente, 'value': 'I'};
    datDientes.eventos = fnAddEventos(datDientes, 'act18.addSave', params, 'opc18', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act18.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente, 'value': ucOdontogram_model.opc.opc18.atributos.value};
    datDientes.data[_key].opc.opc18.hallazgo = false;
    datDientes.data[_key].opc.opc18.value = ucOdontogram_model.opc.opc18.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT19
  ucOdontogram_model.action.hallazgo.act19.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act19.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act19.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act19.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act19.addView = function (param) {
    var _template = $("#template_form_19").html();
    var _nameTemplate = '_FORM19_';
    var _nameValue = '19';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act19.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act19.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc19.hallazgo = true;
    datDientes.data[_key].opc.opc19.value = 'IMP';
    var params = {'cod': codDiente, 'value': 'IMP'};
    datDientes.eventos = fnAddEventos(datDientes, 'act19.addSave', params, 'opc19', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act19.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = ucOdontogram_model.codtokey[(parseInt(codDiente))];
    var params = {'cod': codDiente, 'value': ucOdontogram_model.opc.opc19.atributos.value};
    datDientes.data[_key].opc.opc19.hallazgo = false;
    datDientes.data[_key].opc.opc19.value = ucOdontogram_model.opc.opc19.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT20
  ucOdontogram_model.action.hallazgo.act20.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act20.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act20.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act20.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act20.addView = function (param) {
    var _template = $("#template_form_20").html();
    var _nameTemplate = '_FORM20_';
    var _nameValue = '20';
      var codDiente = '';
      if(typeof param === 'object'){
        if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
          codDiente = param['cod'].toString();
        }
      }
      _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act20.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act20.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc20.hallazgo = true;
    datDientes.data[_key].opc.opc20.value = 'MAC';
    var params = {'cod': codDiente, 'value': 'MAC'};
    datDientes.eventos = fnAddEventos(datDientes, 'act20.addSave', params, 'opc20', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act20.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente, 'value': ucOdontogram_model.opc.opc20.atributos.value};
    datDientes.data[_key].opc.opc20.hallazgo = false;
    datDientes.data[_key].opc.opc20.value = ucOdontogram_model.opc.opc20.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT21
  ucOdontogram_model.action.hallazgo.act21.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act21.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act21.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act21.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act21.addView = function (param) {
    var _template = $("#template_form_21").html();
    var _nameTemplate = '_FORM21_';
    var _nameValue = '21';
      var codDiente = '';
      if(typeof param === 'object'){
        if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
          codDiente = param['cod'].toString();
        }
      }
      _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act21.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act21.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc21.hallazgo = true;
    datDientes.data[_key].opc.opc21.value = 'MIC';
    var params = {'cod': codDiente, 'value': 'MIC'};
    datDientes.eventos = fnAddEventos(datDientes, 'act21.addSave', params, 'opc21', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act21.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente, 'value': ucOdontogram_model.opc.opc21.atributos.value};
    datDientes.data[_key].opc.opc21.hallazgo = false;
    datDientes.data[_key].opc.opc21.value = ucOdontogram_model.opc.opc21.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT22
  ucOdontogram_model.action.hallazgo.act22.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act22.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act22.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act22.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act22.addView = function (param) {
    var _template = $("#template_form_22").html();
    var _nameTemplate = '_FORM22_';
    var _nameValue = '22';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act22.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act22.addSave = function (datDientes, param) {
    var codDiente = param['cod'], direccion = param['direccion'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc22.hallazgo = true;
    datDientes.data[_key].opc.opc22.direccion = direccion;
    var params = {'cod': codDiente, 'direccion': direccion};
    datDientes.eventos = fnAddEventos(datDientes, 'act22.addSave', params, 'opc22', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act22.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente, 'direccion': ucOdontogram_model.opc.opc22.atributos.direccion};
    datDientes.data[_key].opc.opc22.hallazgo = false;
    datDientes.data[_key].opc.opc22.direccion = ucOdontogram_model.opc.opc22.atributos.direccion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT23
  ucOdontogram_model.action.hallazgo.act23.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act23.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act23.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act23.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act23.addView = function (param) {
    var _template = $("#template_form_23").html();
    var _nameTemplate = '_FORM23_';
    var _nameValue = '23';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    var _option_html = '';
    for(var i in ucOdontogram_model.opc.opc23.opciones.niveles){
      _option_html += '<option value="'+i+'">'+ucOdontogram_model.opc.opc23.opciones.niveles[i]+'</option>';
    }
    _template = _template.replace('__TIPO_OPCIONES__',_option_html);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act23.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act23.addSave = function (datDientes, param) {
    var codDiente = param['cod'], nivel = param['nivel'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc23.hallazgo = true;
    datDientes.data[_key].opc.opc23.nivel = nivel;
    var params = {'cod': codDiente, 'nivel': nivel};
    datDientes.eventos = fnAddEventos(datDientes, 'act23.addSave', params, 'opc23', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act23.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente, 'nivel': ucOdontogram_model.opc.opc23.atributos.nivel};
    datDientes.data[_key].opc.opc23.hallazgo = false;
    datDientes.data[_key].opc.opc23.nivel = ucOdontogram_model.opc.opc23.atributos.nivel;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT24
  ucOdontogram_model.action.hallazgo.act24.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act24.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act24.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act24.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act24.addView = function (param) {
    var _template = $("#template_form_24").html();
    var _nameTemplate = '_FORM24_';
    var _nameValue = '24';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function(){
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act24.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act24.addSave = function (datDientes, param) {
    var codDiente = param['cod'], estado = param['estado'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc24.hallazgo = true;
    datDientes.data[_key].opc.opc24.estado = estado;
    var params = {'cod': codDiente, 'estado': estado};
    datDientes.eventos = fnAddEventos(datDientes, 'act24.addSave', params, 'opc24', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act24.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente, 'estado': ucOdontogram_model.opc.opc24.atributos.estado};
    datDientes.data[_key].opc.opc24.hallazgo = false;
    datDientes.data[_key].opc.opc24.estado = ucOdontogram_model.opc.opc24.atributos.estado;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT25
  ucOdontogram_model.action.hallazgo.act25.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria Inicial';
    ucOdontogram_model.glvar.select.msg2 = 'Seleccione Pieza Dentaria Final';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = 'ucOdontogram_model.action.select.fnselect2(obj)';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act25.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act25.addFnLsUserExec = function () {
    var param = {
      'codini': ucOdontogram_model.glvar.select.cod1,
      'codfin': ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act25.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act25.addView = function (param) {
    var _template = $("#template_form_25").html();
    var _nameTemplate = '_FORM25_';
    var _nameValue = '25';
    var codDienteIni = '', codDienteFin = '';
    if(typeof param === 'object'){
      if(typeof param['codini'] === 'number' || typeof param['codini'] === 'string'){
        codDienteIni = param['codini'].toString();
      }
      if(typeof param['codfin'] === 'number' || typeof param['codfin'] === 'string'){
        codDienteFin = param['codfin'].toString();
      }
    }
    _template = _template.replace('_CODINI_VALUE_',codDienteIni);
    _template = _template.replace('_CODFIN_VALUE_',codDienteFin);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act25.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act25.addSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'], estado = param['estado'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc25.hallazgo = true;
      if (i === _keyini) {
        datDientes.data[i].opc.opc25.afectacion = 'I';
      } else if (i === _keyfin) {
        datDientes.data[i].opc.opc25.afectacion = 'F';
      } else {
        datDientes.data[i].opc.opc25.afectacion = 'M';
      }
      datDientes.data[i].opc.opc25.estado = estado;
    }
    var params = {'codini': codDienteIni, 'codfin': codDienteFin, 'estado': estado};
    datDientes.eventos = fnAddEventos(datDientes, 'act25.addSave', params, 'opc25', '['+codDienteIni+'-'+codDienteFin+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act25.removeSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      'codini': codDienteIni,
      'codfin': codDienteFin,
      'afectacion': ucOdontogram_model.opc.opc25.atributos.afectacion,
      'estado': ucOdontogram_model.opc.opc25.atributos.estado
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc25.hallazgo = false;
      datDientes.data[i].opc.opc25.afectacion = ucOdontogram_model.opc.opc25.atributos.afectacion;
      datDientes.data[i].opc.opc25.estado = ucOdontogram_model.opc.opc25.atributos.estado;
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT26
  ucOdontogram_model.action.hallazgo.act26.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria Inicial';
    ucOdontogram_model.glvar.select.msg2 = 'Seleccione Pieza Dentaria Final';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = 'ucOdontogram_model.action.select.fnselect2(obj)';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act26.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act26.addFnLsUserExec = function () {
    var param = {
      'codini': ucOdontogram_model.glvar.select.cod1,
      'codfin': ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act26.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act26.addView = function (param) {
    var _template = $("#template_form_26").html();
    var _nameTemplate = '_FORM26_';
    var _nameValue = '26';
    var codDienteIni = '', codDienteFin = '';
    if(typeof param === 'object'){
      if(typeof param['codini'] === 'number' || typeof param['codini'] === 'string'){
        codDienteIni = param['codini'].toString();
      }
      if(typeof param['codfin'] === 'number' || typeof param['codfin'] === 'string'){
        codDienteFin = param['codfin'].toString();
      }
    }
    _template = _template.replace('_CODINI_VALUE_',codDienteIni);
    _template = _template.replace('_CODFIN_VALUE_',codDienteFin);
    var _option_html = '';
    for(var i in ucOdontogram_model.opc.opc26.opciones.tipomateriales){
      _option_html += '<option value="'+i+'">'+ucOdontogram_model.opc.opc26.opciones.tipomateriales[i]+'</option>';
    }
    _template = _template.replace('__TIPO_OPCIONES__',_option_html);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act26.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act26.addSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'], tipomaterial = param['tipomaterial'], estado = param['estado'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc26.hallazgo = true;
      datDientes.data[i].opc.opc26.tipomaterial = tipomaterial;
      if (i === _keyini) {
        datDientes.data[i].opc.opc26.afectacion = 'I';
      } else if (i === _keyfin) {
        datDientes.data[i].opc.opc26.afectacion = 'F';
      } else {
        datDientes.data[i].opc.opc26.afectacion = 'M';
      }
      datDientes.data[i].opc.opc26.estado = estado;
    }
    var params = {'codini': codDienteIni, 'codfin': codDienteFin, 'tipomaterial': tipomaterial, 'estado': estado};
    datDientes.eventos = fnAddEventos(datDientes, 'act26.addSave', params, 'opc26', '['+codDienteIni+'-'+codDienteFin+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act26.removeSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {
      'codini': codDienteIni,
      'codfin': codDienteFin,
      'afectacion': ucOdontogram_model.opc.opc26.atributos.afectacion,
      'estado': ucOdontogram_model.opc.opc26.atributos.estado,
      'tipomaterial': ucOdontogram_model.opc.opc26.atributos.tipomaterial
    };
    for (var i = _keyini; i <= _keyfin; i++) {
      datDientes.data[i].opc.opc26.hallazgo = false;
      datDientes.data[i].opc.opc26.afectacion = ucOdontogram_model.opc.opc26.atributos.afectacion;
      datDientes.data[i].opc.opc26.estado = ucOdontogram_model.opc.opc26.atributos.estado;
      datDientes.data[i].opc.opc26.tipomaterial = ucOdontogram_model.opc.opc26.atributos.tipomaterial;
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT27
  ucOdontogram_model.action.hallazgo.act27.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = '';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = '';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act27.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
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
    var _nameTemplate = '_FORM27_';
    var _nameValue = '27';
    var _option_html = '';
    for(var i in ucOdontogram_model.opc.opc27.opciones.tipos){
      _option_html += '<option value="'+i+'">'+ucOdontogram_model.opc.opc27.opciones.tipos[i]+'</option>';
    }
    _template = _template.replace('__TIPO_OPCIONES__',_option_html);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      onOpen: function() {
        $(".swal2-content .ucOdontrogramFielsetGroup > input").checkboxradio();
        $(".swal2-content .ucOdontrogramFielsetGroup > input").first().click();
      },
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act27.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act27.addSave = function (datDientes, param) {
    var ubicacion = param['ubicacion'], tipo = param['tipo'], estado = param['estado'];
    for (var i in datDientes.data) {
      if((ubicacion === 'superior') && (datDientes.data[i].position === 'SP' || datDientes.data[i].position === 'ST')){
        datDientes.data[i].opc.opc27.hallazgo = true;
        datDientes.data[i].opc.opc27.tipo = tipo;
        datDientes.data[i].opc.opc27.estado = estado;
      }else if((ubicacion === 'inferior') && (datDientes.data[i].position === 'IP' || datDientes.data[i].position === 'IT')){
        datDientes.data[i].opc.opc27.hallazgo = true;
        datDientes.data[i].opc.opc27.tipo = tipo;
        datDientes.data[i].opc.opc27.estado = estado;
      }
    }
    var params = {'ubicacion': ubicacion, 'tipo': tipo, 'estado': estado};
    datDientes.eventos = fnAddEventos(datDientes, 'act27.addSave', params, 'opc27', '('+ubicacion+')');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act27.removeSave = function (datDientes, param) {
    var ubicacion = param['ubicacion'];
    var params = {
      'ubicacion': ubicacion,
      'tipo': ucOdontogram_model.opc.opc27.atributos.tipo,
      'estado': ucOdontogram_model.opc.opc27.atributos.estado
    };
    for (var i in datDientes.data) {
      if((ubicacion === 'superior') && (datDientes.data[i].position === 'SP' || datDientes.data[i].position === 'ST')){
        datDientes.data[i].opc.opc27.hallazgo = false;
        datDientes.data[i].opc.opc27.tipo = params.tipo;
        datDientes.data[i].opc.opc27.estado = params.estado;
      }else if((ubicacion === 'inferior') && (datDientes.data[i].position === 'IP' || datDientes.data[i].position === 'IT')){
        datDientes.data[i].opc.opc27.hallazgo = false;
        datDientes.data[i].opc.opc27.tipo = params.tipo;
        datDientes.data[i].opc.opc27.estado = params.estado;
      }
    }
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT28
  ucOdontogram_model.action.hallazgo.act28.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act28.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act28.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act28.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act28.addView = function (param) {
    var _template = $("#template_form_28").html();
    var _nameTemplate = '_FORM28_';
    var _nameValue = '28';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act28.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act28.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = ucOdontogram_model.codtokey[(parseInt(codDiente))];
    datDientes.data[_key].opc.opc28.hallazgo = true;
    var params = {'cod': codDiente};
    datDientes.eventos = fnAddEventos(datDientes, 'act28.addSave', params, 'opc28', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act28.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc28.hallazgo = false;
    var params = {'cod': codDiente};
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT29
  ucOdontogram_model.action.hallazgo.act29.addRemoveSave = function (_param) {
    var codDiente = _param['cod'].toString(), cara = _param['cara'], parte = _param['parte'], estado = _param['estado'];
    var dataKey = ucOdontogram_manager('getactive');
    var datDientes = ucOdontogram_manager('get', dataKey);
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    if((typeof datDientes.data[_key].opc.opc29[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc29[cara][parte] !== 'undefined')){
      if(estado === 'N'){ //add
        _param.estado = 'S';
        datDientes = ucOdontogram_model.action.hallazgo.act29.addView(_param);
        $("#"+dataKey).ucOdontogram(datDientes);
      }
      if(estado === 'S'){ //delete
        var _elemEventPkIdDelete = null;
        for(var i in datDientes.eventos){
          if((datDientes.eventos[i].option === 'opc29') &&
                  (datDientes.eventos[i].param.cod === codDiente) &&
                  (datDientes.eventos[i].param.cara === cara) &&
                  (datDientes.eventos[i].param.parte === parte) &&
                  (datDientes.eventos[i].param.estado === 'S')){
            _elemEventPkIdDelete = i;
            break;
          }
        }
        if(typeof datDientes.eventos[_elemEventPkIdDelete] === 'object'){
          delete datDientes.eventos[_elemEventPkIdDelete];
        }
        _param.estado = 'N';
        datDientes = ucOdontogram_model.action.hallazgo.act29.removeSave(datDientes, _param);
        $("#"+dataKey).ucOdontogram(datDientes);
      }
      return datDientes;
    }else{
      return datDientes;
    }
  };
  ucOdontogram_model.action.hallazgo.act29.addView = function (param) {
    var _template = $("#template_form_29").html();
    var _nameTemplate = '_FORM29_';
    var _nameValue = '29';
    var codDiente = '', cara = '', parte = '', estado = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
      if(typeof param['cara'] === 'number' || typeof param['cara'] === 'string'){
        cara = param['cara'].toString();
      }
      if(typeof param['parte'] === 'number' || typeof param['parte'] === 'string'){
        parte = param['parte'].toString();
      }
      if(typeof param['estado'] === 'number' || typeof param['estado'] === 'string'){
        estado = param['estado'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    _template = _template.replace('_CARA_VALUE_',cara);
    _template = _template.replace('_PARTE_VALUE_',parte);
    _template = _template.replace('_ESTADO_VALUE_',estado);
    var _option_html = '';
    for(var i in ucOdontogram_model.opc.opc29.opciones.tipomateriales){
      _option_html += '<option value="'+i+'">'+ucOdontogram_model.opc.opc29.opciones.tipomateriales[i]+'</option>';
    }
    _template = _template.replace('__TIPOMATERIAL_OPCIONES__',_option_html);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act29.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act29.addSave = function (datDientes, param) {
    var codDiente = param['cod'], cara = param['cara'], parte = param['parte'], estado = param['estado'], tipomaterial = param['tipomaterial'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    if((typeof datDientes.data[_key].opc.opc29[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc29[cara][parte] !== 'undefined')){
      datDientes.data[_key].opc.opc29[cara][parte].estado = estado;
      datDientes.data[_key].opc.opc29[cara][parte].tipomaterial = tipomaterial;
      datDientes.data[_key].opc.opc29.hallazgo = true;
      var params = {'cod': codDiente, 'cara': cara, 'parte': parte, 'estado': estado, 'tipomaterial': tipomaterial};
      datDientes.eventos = fnAddEventos(datDientes, 'act29.addSave', params, 'opc29', '['+codDiente+']-&DDotrahd;{'+cara+'}');
      return datDientes;
    }
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act29.removeSave = function (datDientes, param) {
    var codDiente = param['cod'], cara = param['cara'], parte = param['parte'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {
      'cod': codDiente,
      'cara': cara,
      'parte': parte,
      'estado': ucOdontogram_model.opc.opc29.atributos[cara][parte].estado,
      'tipomaterial': ucOdontogram_model.opc.opc29.atributos[cara][parte].tipomaterial
    };
    var _estados = false;
    if((typeof datDientes.data[_key].opc.opc29[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc29[cara][parte] !== 'undefined')){
      datDientes.data[_key].opc.opc29[cara][parte].estado = params.estado;
      datDientes.data[_key].opc.opc29[cara][parte].tipomaterial = params.tipomaterial;
      for (var i in datDientes.data[_key].opc.opc29){
        if((typeof datDientes.data[_key].opc.opc29[i] === 'object') &&
                (typeof datDientes.data[_key].opc.opc29[i][parte] === 'string') &&
                (datDientes.data[_key].opc.opc29[i][parte].estado === 'S')){
          _estados = true;
        }
      }
      datDientes.data[_key].opc.opc29.hallazgo = _estados;
      fnViewEventos(datDientes);
    }
    return datDientes;
  };
  //----- ACT30
  ucOdontogram_model.action.hallazgo.act30.addRemoveSave = function (_param) {
    var codDiente = _param['cod'].toString(), cara = _param['cara'], parte = _param['parte'], estado = _param['estado'];
    var dataKey = ucOdontogram_manager('getactive');
    var datDientes = ucOdontogram_manager('get', dataKey);
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    if((typeof datDientes.data[_key].opc.opc30[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc30[cara][parte] !== 'undefined')){
      if(estado === 'N'){ //add
        _param.estado = 'S';
        datDientes = ucOdontogram_model.action.hallazgo.act30.addSave(datDientes, _param);
        $("#"+dataKey).ucOdontogram(datDientes);
      }
      if(estado === 'S'){ //delete
        var _elemEventPkIdDelete = null;
        for(var i in datDientes.eventos){
          if((datDientes.eventos[i].option === 'opc30') &&
                  (datDientes.eventos[i].param.cod === codDiente) &&
                  (datDientes.eventos[i].param.cara === cara) &&
                  (datDientes.eventos[i].param.parte === parte) &&
                  (datDientes.eventos[i].param.estado === 'S')){
            _elemEventPkIdDelete = i;
            break;
          }
        }
        if(typeof datDientes.eventos[_elemEventPkIdDelete] === 'object'){
          delete datDientes.eventos[_elemEventPkIdDelete];
        }
        _param.estado = 'N';
        datDientes = ucOdontogram_model.action.hallazgo.act30.removeSave(datDientes, _param);
        $("#"+dataKey).ucOdontogram(datDientes);
      }
      return datDientes;
    }else{
      return datDientes;
    }
  };
  ucOdontogram_model.action.hallazgo.act30.addSave = function (datDientes, param) {
    var codDiente = param['cod'], cara = param['cara'], parte = param['parte'], estado = param['estado'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    if((typeof datDientes.data[_key].opc.opc30[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc30[cara][parte] !== 'undefined')){
      datDientes.data[_key].opc.opc30[cara][parte].estado = estado;
      datDientes.data[_key].opc.opc30.hallazgo = true;
      var params = {'cod': codDiente, 'cara': cara, 'parte': parte, 'estado': estado};
      datDientes.eventos = fnAddEventos(datDientes, 'act30.addSave', params, 'opc30', '['+codDiente+']-&DDotrahd;{'+cara+'}');
      return datDientes;
    }
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act30.removeSave = function (datDientes, param) {
    var codDiente = param['cod'], cara = param['cara'], parte = param['parte'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {
      'cod': codDiente,
      'cara': cara,
      'parte': parte,
      'estado': ucOdontogram_model.opc.opc30.atributos[cara][parte].estado
    };
    var _estados = false;
    if((typeof datDientes.data[_key].opc.opc30[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc30[cara][parte] !== 'undefined')){
      datDientes.data[_key].opc.opc30[cara][parte].estado = params.estado;
      for (var i in datDientes.data[_key].opc.opc30){
        if((typeof datDientes.data[_key].opc.opc30[i] === 'object') &&
                (typeof datDientes.data[_key].opc.opc30[i][parte] === 'string') &&
                (datDientes.data[_key].opc.opc30[i][parte].estado === 'S')){
          _estados = true;
        }
      }
      datDientes.data[_key].opc.opc30.hallazgo = _estados;
      fnViewEventos(datDientes);
    }
    return datDientes;
  };
  //----- ACT31
  ucOdontogram_model.action.hallazgo.act31.addRemoveSave = function (_param) {
    var codDiente = _param['cod'].toString(), cara = _param['cara'], parte = _param['parte'], estado = _param['estado'];
    var dataKey = ucOdontogram_manager('getactive');
    var datDientes = ucOdontogram_manager('get', dataKey);
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    if((typeof datDientes.data[_key].opc.opc31[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc31[cara][parte] !== 'undefined')){
      if(estado === 'N'){ //add
        _param.estado = 'S';
        datDientes = ucOdontogram_model.action.hallazgo.act31.addSave(datDientes, _param);
        $("#"+dataKey).ucOdontogram(datDientes);
      }
      if(estado === 'S'){ //delete
        var _elemEventPkIdDelete = null;
        for(var i in datDientes.eventos){
          if((datDientes.eventos[i].option === 'opc31') &&
                  (datDientes.eventos[i].param.cod === codDiente) &&
                  (datDientes.eventos[i].param.cara === cara) &&
                  (datDientes.eventos[i].param.parte === parte) &&
                  (datDientes.eventos[i].param.estado === 'S')){
            _elemEventPkIdDelete = i;
            break;
          }
        }
        if(typeof datDientes.eventos[_elemEventPkIdDelete] === 'object'){
          delete datDientes.eventos[_elemEventPkIdDelete];
        }
        _param.estado = 'N';
        datDientes = ucOdontogram_model.action.hallazgo.act31.removeSave(datDientes, _param);
        $("#"+dataKey).ucOdontogram(datDientes);
      }
      return datDientes;
    }else{
      return datDientes;
    }
  };
  ucOdontogram_model.action.hallazgo.act31.addSave = function (datDientes, param) {
    var codDiente = param['cod'], cara = param['cara'], parte = param['parte'], estado = param['estado'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    if((typeof datDientes.data[_key].opc.opc31[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc31[cara][parte] !== 'undefined')){
      datDientes.data[_key].opc.opc31[cara][parte].estado = estado;
      datDientes.data[_key].opc.opc31.hallazgo = true;
      var params = {'cod': codDiente, 'cara': cara, 'parte': parte, 'estado': estado};
      datDientes.eventos = fnAddEventos(datDientes, 'act31.addSave', params, 'opc31', '['+codDiente+']-&DDotrahd;{'+cara+'}');
      return datDientes;
    }
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act31.removeSave = function (datDientes, param) {
    var codDiente = param['cod'], cara = param['cara'], parte = param['parte'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {
      'cod': codDiente,
      'cara': cara,
      'parte': parte,
      'estado': ucOdontogram_model.opc.opc31.atributos[cara][parte].estado
    };
    var _estados = false;
    if((typeof datDientes.data[_key].opc.opc31[cara] !== 'undefined') && (typeof datDientes.data[_key].opc.opc31[cara][parte] !== 'undefined')){
      datDientes.data[_key].opc.opc31[cara][parte].estado = params.estado;
      for (var i in datDientes.data[_key].opc.opc31){
        if((typeof datDientes.data[_key].opc.opc31[i] === 'object') &&
                (typeof datDientes.data[_key].opc.opc31[i][parte] === 'string') &&
                (datDientes.data[_key].opc.opc31[i][parte].estado === 'S')){
          _estados = true;
        }
      }
      datDientes.data[_key].opc.opc31.hallazgo = _estados;
      fnViewEventos(datDientes);
    }
    return datDientes;
  };
  //----- ACT32
  ucOdontogram_model.action.hallazgo.act32.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act32.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act32.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act32.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act32.addView = function (param) {
    var _template = $("#template_form_32").html();
    var _nameTemplate = '_FORM32_';
    var _nameValue = '32';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act32.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act32.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc32.hallazgo = true;
    datDientes.data[_key].opc.opc32.value = 'SI';
    var params = {'cod': codDiente, 'value': 'SI'};
    datDientes.eventos = fnAddEventos(datDientes, 'act32.addSave', params, 'opc32', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act32.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente, 'value': ucOdontogram_model.opc.opc32.atributos.value};
    datDientes.data[_key].opc.opc32.hallazgo = false;
    datDientes.data[_key].opc.opc32.value = ucOdontogram_model.opc.opc32.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT33
  ucOdontogram_model.action.hallazgo.act33.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act33.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act33.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act33.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act33.addView = function (param) {
    var _template = $("#template_form_33").html();
    var _nameTemplate = '_FORM33_';
    var _nameValue = '33';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act33.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act33.addSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc33.hallazgo = true;
    datDientes.data[_key].opc.opc33.value = 'DES';
    var params = {'cod': codDiente, 'value': 'DES'};
    datDientes.eventos = fnAddEventos(datDientes, 'act33.addSave', params, 'opc33', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act33.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente, 'value': ucOdontogram_model.opc.opc33.atributos.value};
    datDientes.data[_key].opc.opc33.hallazgo = false;
    datDientes.data[_key].opc.opc33.value = ucOdontogram_model.opc.opc33.atributos.value;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT34
  ucOdontogram_model.action.hallazgo.act34.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria Anterior';
    ucOdontogram_model.glvar.select.msg2 = 'Seleccione Pieza Dentaria Posterios';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = 'ucOdontogram_model.action.select.fnselect2(obj)';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act34.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act34.addFnLsUserExec = function () {
    var param = {
      'codini': ucOdontogram_model.glvar.select.cod1,
      'codfin': ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act34.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act34.addView = function (param) {
    var _template = $("#template_form_34").html();
    var _nameTemplate = '_FORM34_';
    var _nameValue = '34';
    var codDienteIni = '', codDienteFin = '';
    if(typeof param === 'object'){
      if(typeof param['codini'] === 'number' || typeof param['codini'] === 'string'){
        codDienteIni = param['codini'].toString();
      }
      if(typeof param['codfin'] === 'number' || typeof param['codfin'] === 'string'){
        codDienteFin = param['codfin'].toString();
      }
    }
    _template = _template.replace('_CODINI_VALUE_',codDienteIni);
    _template = _template.replace('_CODFIN_VALUE_',codDienteFin);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act34.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act34.addSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (Math.abs(_keyini - _keyfin) !== 1) {
      _keyfin = _keyini + 1;
    }
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    datDientes.data[_keyini].opc.opc34.hallazgo = true;
    datDientes.data[_keyini].opc.opc34.ubicacion = 'D';
    datDientes.data[_keyfin].opc.opc34.hallazgo = true;
    datDientes.data[_keyfin].opc.opc34.ubicacion = 'Z';
    var params = {'codini': datDientes.data[_keyini].cod, 'codfin': datDientes.data[_keyfin].cod};
    datDientes.eventos = fnAddEventos(datDientes, 'act34.addSave', params, 'opc34', '['+params.codini+'-'+params.codfin+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act34.removeSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {'codini': codDienteIni, 'codfin': codDienteFin};
    datDientes.data[_keyini].opc.opc34.hallazgo = false;
    datDientes.data[_keyini].opc.opc34.ubicacion = ucOdontogram_model.opc.opc34.atributos.ubicacion;
    datDientes.data[_keyfin].opc.opc34.hallazgo = false;
    datDientes.data[_keyfin].opc.opc34.ubicacion = ucOdontogram_model.opc.opc34.atributos.ubicacion;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT35
  ucOdontogram_model.action.hallazgo.act35.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria Anterior';
    ucOdontogram_model.glvar.select.msg2 = 'Seleccione Pieza Dentaria Posterios';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = 'ucOdontogram_model.action.select.fnselect2(obj)';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act35.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act35.addFnLsUserExec = function () {
    var param = {
      'codini': ucOdontogram_model.glvar.select.cod1,
      'codfin': ucOdontogram_model.glvar.select.cod2
    };
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act35.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act35.addView = function (param) {
    var _template = $("#template_form_35").html();
    var _nameTemplate = '_FORM35_';
    var _nameValue = '35';
    var codDienteIni = '', codDienteFin = '';
    if(typeof param === 'object'){
      if(typeof param['codini'] === 'number' || typeof param['codini'] === 'string'){
        codDienteIni = param['codini'].toString();
      }
      if(typeof param['codfin'] === 'number' || typeof param['codfin'] === 'string'){
        codDienteFin = param['codfin'].toString();
      }
    }
    _template = _template.replace('_CODINI_VALUE_',codDienteIni);
    _template = _template.replace('_CODFIN_VALUE_',codDienteFin);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function() {
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act35.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act35.addSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (Math.abs(_keyini - _keyfin) !== 1) {
      _keyfin = _keyini + 1;
    }
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    datDientes.data[_keyini].opc.opc35.hallazgo = true;
    datDientes.data[_keyini].opc.opc35.lado = 'D';
    datDientes.data[_keyfin].opc.opc35.hallazgo = true;
    datDientes.data[_keyfin].opc.opc35.lado = 'Z';
    var params = {'codini': datDientes.data[_keyini].cod, 'codfin': datDientes.data[_keyfin].cod};
    datDientes.eventos = fnAddEventos(datDientes, 'act35.addSave', params, 'opc35', '['+params.codini+'-'+params.codfin+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act35.removeSave = function (datDientes, param) {
    var codDienteIni = param['codini'], codDienteFin = param['codfin'];
    var _keyini = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteIni))]);
    var _keyfin = parseInt(ucOdontogram_model.codtokey[(parseInt(codDienteFin))]);
    var _aux = 0;
    if (_keyini > _keyfin) {
      _aux = _keyini;
      _keyini = _keyfin;
      _keyfin = _aux;
    }
    var params = {'codini': codDienteIni, 'codfin': codDienteFin};
    datDientes.data[_keyini].opc.opc35.hallazgo = false;
    datDientes.data[_keyini].opc.opc35.lado = ucOdontogram_model.opc.opc35.atributos.lado;
    datDientes.data[_keyfin].opc.opc35.hallazgo = false;
    datDientes.data[_keyfin].opc.opc35.lado = ucOdontogram_model.opc.opc35.atributos.lado;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- ACT36
  ucOdontogram_model.action.hallazgo.act36.addFnLsUserButton = function () {
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = 'Seleccione Pieza Dentaria';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = 'ucOdontogram_model.action.select.fnselect1(obj)';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = 'ucOdontogram_model.action.hallazgo.act36.addFnLsUserExec()';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0)){
      $("#"+misDientes.config.id_msg_evento).html(ucOdontogram_model.glvar.select.msg1);
    }
  };
  ucOdontogram_model.action.hallazgo.act36.addFnLsUserExec = function () {
    var param = {'cod': ucOdontogram_model.glvar.select.cod1};
    ucOdontogram_model.action.load.resetGlVars();
    ucOdontogram_model.action.hallazgo.act36.addView(param);
  };
  ucOdontogram_model.action.hallazgo.act36.addView = function (param) {
    var _template = $("#template_form_36").html();
    var _nameTemplate = '_FORM36_';
    var _nameValue = '36';
    var codDiente = '';
    if(typeof param === 'object'){
      if(typeof param['cod'] === 'number' || typeof param['cod'] === 'string'){
        codDiente = param['cod'].toString();
      }
    }
    _template = _template.replace('_COD_VALUE_',codDiente);
    var _option_html = '';
    for(var i in ucOdontogram_model.opc.opc36.opciones.tipos){
      _option_html += '<option value="'+i+'">'+ucOdontogram_model.opc.opc36.opciones.tipos[i]+'</option>';
    }
    _template = _template.replace('__TIPO_OPCIONES__',_option_html);
    swal({
      title: (eval('ucOdontogram_model.opc.opc'+_nameValue+'.nombre')),
      confirmButtonText: 'Aplicar',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      html: _template.split(_nameTemplate).join(_nameValue),
      showLoaderOnConfirm: true,
      preConfirm: function(){
        var _param = { };
        $.each($("#id_form"+_nameValue).serializeArray(), function() {
          _param[this.name] = this.value;
        });
        var dataKey = ucOdontogram_manager('getactive');
        var misDientes = ucOdontogram_manager('get', dataKey);
        misDientes = ucOdontogram_model.action.hallazgo.act36.addSave(misDientes, _param);
        $("#"+dataKey).ucOdontogram(misDientes);
        swal.close();
        return new Promise(swal.noop);
      },
      onClose: function(){
        ucOdontogram_model.glvar.select.opc = '';
        $(".ucOdontogramButtonItemHallazgosOpc").removeClass("select");
      }
    }).catch(swal.noop);
  };
  ucOdontogram_model.action.hallazgo.act36.addSave = function (datDientes, param) {
    var codDiente = param['cod'], tipo = param['tipo'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    datDientes.data[_key].opc.opc36.hallazgo = true;
    datDientes.data[_key].opc.opc36.tipo = tipo;
    var params = {'cod': codDiente, 'tipo': tipo};
    datDientes.eventos = fnAddEventos(datDientes, 'act36.addSave', params, 'opc36', '['+codDiente+']');
    return datDientes;
  };
  ucOdontogram_model.action.hallazgo.act36.removeSave = function (datDientes, param) {
    var codDiente = param['cod'];
    var _key = parseInt(ucOdontogram_model.codtokey[(parseInt(codDiente))]);
    var params = {'cod': codDiente, 'tipo': ucOdontogram_model.opc.opc36.atributos.tipo};
    datDientes.data[_key].opc.opc36.hallazgo = false;
    datDientes.data[_key].opc.opc36.tipo = ucOdontogram_model.opc.opc36.atributos.tipo;
    fnViewEventos(datDientes);
    return datDientes;
  };
  //----- Load model Actions: Hallazgos - FIN ----------------------------------
  //----- Load Data codDiente to Key - INI -------------------------------------
  var fnLoadDataCodKey = function () {
    var _cod = null;
    for (var i in ucOdontogram_model['data']) {
      _cod = ucOdontogram_model['data'][i]['cod'];
      ucOdontogram_model['codtokey'][_cod] = i;
    }
    return ucOdontogram_model['codtokey'];
  };
  fnLoadDataCodKey();
  //----- Load Data codDiente to Key - FIN -------------------------------------
  //----- Load Data User - INI -------------------------------------------------
  ucOdontogram_model.action.load.loadData = function (dataUserDientes) {
    var ucOdnt_config_default = {
      'id_list_hallazgos': 'ucOdontogramHallazgoEventosView',
      'id_msg_evento': 'ucOdontogramMsgEventosView',
      'id_list_eventos': 'ucOdontogramListEventosView',
      'id_list_event_opc': 'view',
      'id_template': 'ucOdontogramTemplateHtml',
      'id_save': 'ucOdontogramListEventosSave',
      'id_save_msg': 'ucOdontogramListEventosSaveMsg',
      'id_resumen': 'ucOdontogramResumenView',
      'urlws_save': 'http://localhost/'
    };
    var ucOdnt_data = {};
    var ucOdnt_eventos = {};
    var ucOdnt_config = {};
    var ucOdnt_conn = {};
    if (typeof (dataUserDientes) === 'object' && typeof (dataUserDientes['eventos']) === 'object') {
      ucOdnt_eventos = dataUserDientes['eventos'];
    }
    if (typeof (dataUserDientes) === 'object' && typeof (dataUserDientes['config']) === 'object') {
      for(var i in ucOdnt_config_default){
        if(typeof dataUserDientes['config'][i] === 'string'){
          ucOdnt_config[i] = dataUserDientes['config'][i];
        }else{
          ucOdnt_config[i]='error_'+i;
        }
      }
    }
    if (typeof (dataUserDientes) === 'object' && typeof (dataUserDientes['conn']) === 'object') {
      for(var i in ucOdontogram_model.action.conn.data){
        if(typeof dataUserDientes['conn'][i] === 'string'){
          ucOdnt_conn[i] = dataUserDientes['conn'][i];
        }else{
          ucOdnt_conn[i] = ucOdontogram_model.action.conn.data[i];
        }
      }
    }
    if (typeof (dataUserDientes) === 'object' && typeof (dataUserDientes['data']) === 'object') {
      var data_user = dataUserDientes['data'];
      for (var i in ucOdontogram_model['data']) {
        ucOdnt_data[i] = {};
        for (var j in ucOdontogram_model['data'][i]) {
          if (j !== 'opc') {
            ucOdnt_data[i][j] = ucOdontogram_model['data'][i][j];
          }
        }
        ucOdnt_data[i]['opc'] = {};
        if (typeof (data_user[i]) === 'object') {
          for (var j in ucOdontogram_model['opc']) {
            if (typeof (data_user[i]['opc'][j]) === 'object') {
              ucOdnt_data[i]['opc'][j] = {};
              for (var k in ucOdontogram_model['opc'][j]['atributos']) {
                if (typeof (data_user[i]['opc'][j][k]) === 'object') {
                  ucOdnt_data[i]['opc'][j][k] = {};
                  for (var l in ucOdontogram_model['opc'][j]['atributos'][k]) {
                    if (typeof (data_user[i]['opc'][j][k][l]) === 'object') {
                      ucOdnt_data[i]['opc'][j][k][l] = {};
                      for (var m in ucOdontogram_model['opc'][j]['atributos'][k][l]) {
                        if (typeof (data_user[i]['opc'][j][k][l][m]) === 'object') {
                          ucOdnt_data[i]['opc'][j][k][l][m] = {};
                          for (var n in ucOdontogram_model['opc'][j]['atributos'][k][l][m]) {
                            if (typeof (data_user[i]['opc'][j][k][l][m][n]) === 'object') {
                              ucOdnt_data[i]['opc'][j][k][m][l][n] = {};
                              for (var o in ucOdontogram_model['opc'][j]['atributos'][k][l][m][n]) {
                                if (typeof (data_user[i]['opc'][j][k][l][m][n][o]) === typeof (ucOdontogram_model['opc'][j]['atributos'][k][l][m][n][o])) {
                                  ucOdnt_data[i]['opc'][j][k][l][m][n][o] = data_user[i]['opc'][j][k][l][m][n][o];
                                }
                              }
                            } else if (typeof (data_user[i]['opc'][j][k][l][m][n]) === typeof (ucOdontogram_model['opc'][j]['atributos'][k][l][m][n])) {
                              ucOdnt_data[i]['opc'][j][k][l][m][n] = data_user[i]['opc'][j][k][l][m][n];
                            }
                          }
                        } else if (typeof (data_user[i]['opc'][j][k][l][m]) === typeof (ucOdontogram_model['opc'][j]['atributos'][k][l][m])) {
                          ucOdnt_data[i]['opc'][j][k][l][m] = data_user[i]['opc'][j][k][l][m];
                        }
                      }
                    } else if (typeof (data_user[i]['opc'][j][k][l]) === typeof (ucOdontogram_model['opc'][j]['atributos'][k][l])) {
                      ucOdnt_data[i]['opc'][j][k][l] = data_user[i]['opc'][j][k][l];
                    }
                  }
                } else if (typeof (data_user[i]['opc'][j][k]) === typeof (ucOdontogram_model['opc'][j]['atributos'][k])) {
                  ucOdnt_data[i]['opc'][j][k] = data_user[i]['opc'][j][k];
                }
              }
            } else {
              ucOdnt_data[i]['opc'][j] = ucOdontogram_model['opc'][j]['atributos'];
            }
          }
        } else {
          for (var j in ucOdontogram_model['opc']) {
            ucOdnt_data[i]['opc'][j] = ucOdontogram_model['opc'][j]['atributos'];
          }
        }
      }
    } else {
      if (typeof ucOdontogram_model.config.defaulData[1] === 'object') {
        ucOdnt_data = Object.assign({}, ucOdontogram_model.config.defaulData.data);
        ucOdnt_eventos = Object.assign({}, ucOdontogram_model.config.defaulData.eventos);
      } else {
        for (var i in ucOdontogram_model['data']) {
          ucOdnt_data[i] = {};
          for (var j in ucOdontogram_model['data'][i]) {
            if (j !== 'opc') {
              ucOdnt_data[i][j] = Object.assign({}, ucOdontogram_model['data'][i][j]);
            }
          }
          ucOdnt_data[i]['opc'] = {};
          for (var j in ucOdontogram_model['opc']) {
            ucOdnt_data[i]['opc'][j] = Object.assign({}, ucOdontogram_model['opc'][j]['atributos']);
          }
        }
      }
    }
    return {'eventos': ucOdnt_eventos, 'data': ucOdnt_data, 'config': ucOdnt_config, 'conn': ucOdnt_conn};
  };
  ucOdontogram_model.action.load.listOpcHallazgos = function () {
    var _html_hallazgos = '';
    var _count = 0;
    for(var i in ucOdontogram_model.action.hallazgo ){
      _count ++;
      _html_hallazgos += '<div class="ucOdontogramButtonHallazgos">'+_count.toString()+'.-&nbsp;&nbsp;';
      _html_hallazgos += '<span data-opc="'+i+'" class="ucOdontogramButtonItemHallazgosOpc">(opc'+(i.substring(3,5))+')</span>';
      _html_hallazgos += '<span> '+eval('ucOdontogram_model.opc.opc'+(i.substring(3,5))+'.nombre')+'</span>';
      _html_hallazgos += '</div>';
    }
    _html_hallazgos += '<br />';
    return _html_hallazgos;
  };
  ucOdontogram_model.action.load.resetGlVars = function () {
    ucOdontogram_model.glvar.select.opc = '';
    ucOdontogram_model.glvar.select.cod1 = '';
    ucOdontogram_model.glvar.select.cod2 = '';
    ucOdontogram_model.glvar.select.msg1 = '';
    ucOdontogram_model.glvar.select.msg2 = '';
    ucOdontogram_model.glvar.select.fnselect1 = '';
    ucOdontogram_model.glvar.select.fnselect2 = '';
    ucOdontogram_model.glvar.select.fnexec = '';
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    if((misDientes.config.id_msg_evento.length > 2) && ($("#"+misDientes.config.id_msg_evento).length > 0) ){
      $("#"+misDientes.config.id_msg_evento).html('');
    }
    $("#"+dataKey).ucOdontogram(misDientes);
  };
  ucOdontogram_model.config.defaulData = ucOdontogram_model.action.load.loadData({});
  //----- Load Data User - FIN -------------------------------------------------
  //------ calculo de resumen - INI -----
  ucOdontogram_model.action.resumen.sumCariados = function (){
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    //--- contar numero de dientes cariados
    var _countDientesCariados = 0;
    var _countCarasCariados = 0;
    if(typeof misDientes.data === 'object'){
      for(var i in misDientes.data){
        if(misDientes.data[i].opc.opc03.hallazgo === true){
          _countDientesCariados++;
          if(misDientes.data[i].opc.opc03.pcs.sp00.estado === 'S'){
            _countCarasCariados++;
          }
          if(misDientes.data[i].opc.opc03.pcd.sp00.estado === 'S'){
            _countCarasCariados++;
          }
          if(misDientes.data[i].opc.opc03.pci.sp00.estado === 'S'){
            _countCarasCariados++;
          }
          if(misDientes.data[i].opc.opc03.pcz.sp00.estado === 'S'){
            _countCarasCariados++;
          }
          if(misDientes.data[i].opc.opc03.pcc.sp00.estado === 'S'){
            _countCarasCariados++;
          }
        }
      }
    }
    return {'dientesCariado': _countDientesCariados, 'carasCariados': _countCarasCariados};
  };
  ucOdontogram_model.action.resumen.sumCurados = function (){
    var dataKey = ucOdontogram_manager('getactive');
    var misDientes = ucOdontogram_manager('get', dataKey);
    //--- contar numero de dientes curados
    var _countAll = 0;
    var _countOpc29DienteCariado = 0; // restauracion definitiva
    var _countOpc29CarasCariado = 0; // restauracion definitiva
    var _countOpc30DienteCariado = 0; // restauracion temporal
    var _countOpc30CarasCariado = 0; // restauracion temporal
    var _countOpc31DienteCariado = 0; // sellante
    var _countOpc31CarasCariado = 0; // sellante
    var _auxCurdado = false;
    if(typeof misDientes.data === 'object'){
      for(var i in misDientes.data){
        _auxCurdado = false;
        if(misDientes.data[i].opc.opc29.hallazgo === true){
          _countOpc29DienteCariado++;
          _auxCurdado = true;
          if(misDientes.data[i].opc.opc29.pcs.sp00.estado === 'S'){
            _countOpc29CarasCariado++;
          }
          if(misDientes.data[i].opc.opc29.pcd.sp00.estado === 'S'){
            _countOpc29CarasCariado++;
          }
          if(misDientes.data[i].opc.opc29.pci.sp00.estado === 'S'){
            _countOpc29CarasCariado++;
          }
          if(misDientes.data[i].opc.opc29.pcz.sp00.estado === 'S'){
            _countOpc29CarasCariado++;
          }
          if(misDientes.data[i].opc.opc29.pcc.sp00.estado === 'S'){
            _countOpc29CarasCariado++;
          }
        }
        if(misDientes.data[i].opc.opc30.hallazgo === true){
          _countOpc30DienteCariado++;
          _auxCurdado = true;
          if(misDientes.data[i].opc.opc30.pcs.sp00.estado === 'S'){
            _countOpc30CarasCariado++;
          }
          if(misDientes.data[i].opc.opc30.pcd.sp00.estado === 'S'){
            _countOpc30CarasCariado++;
          }
          if(misDientes.data[i].opc.opc30.pci.sp00.estado === 'S'){
            _countOpc30CarasCariado++;
          }
          if(misDientes.data[i].opc.opc30.pcz.sp00.estado === 'S'){
            _countOpc30CarasCariado++;
          }
          if(misDientes.data[i].opc.opc30.pcc.sp00.estado === 'S'){
            _countOpc30CarasCariado++;
          }
        }
        if(misDientes.data[i].opc.opc31.hallazgo === true){
          _countOpc31DienteCariado++;
          _auxCurdado = true;
          if(misDientes.data[i].opc.opc31.pcs.sp00.estado === 'S'){
            _countOpc31CarasCariado++;
          }
          if(misDientes.data[i].opc.opc31.pcd.sp00.estado === 'S'){
            _countOpc31CarasCariado++;
          }
          if(misDientes.data[i].opc.opc31.pci.sp00.estado === 'S'){
            _countOpc31CarasCariado++;
          }
          if(misDientes.data[i].opc.opc31.pcz.sp00.estado === 'S'){
            _countOpc31CarasCariado++;
          }
          if(misDientes.data[i].opc.opc31.pcc.sp00.estado === 'S'){
            _countOpc31CarasCariado++;
          }
        }
        if(_auxCurdado === true){
          _countAll ++;
        }
      }
    }
    return {
      'allDientes': _countAll,
      'curDefinDientes': _countOpc29DienteCariado,
      'curTempDientes': _countOpc30DienteCariado,
      'sellanteDientes': _countOpc31DienteCariado,
      'curDefinCaras': _countOpc29CarasCariado,
      'curTempCaras': _countOpc30CarasCariado,
      'sellanteCaras': _countOpc31CarasCariado
    };
  };
  //------ calculo de resumen - INI -----

}

ucOdontogram_loadAction();

function ucOdontogram_view(obj_dom, pkid_key) {
  var uc_odontogram_scale = '0.286';//0.38//0.304
  var dataCodKey = ucOdontogram_model.codtokey;
  var dataConfig = {};
  var dataEventos = {};
  var dataDientes = {};
  if (ucOdontogram_manager('exist', pkid_key)) {
    var _aux = ucOdontogram_manager('get', pkid_key);
    dataConfig = _aux['config'];
    dataEventos = _aux['eventos'];
    dataDientes = _aux['data'];
  } else {
    $(obj_dom).append('-ERROR:DATA-');
    return false;
  }
  $(obj_dom).svg({
    settings: {width: '900px', height: '1280px', 'xmlns': 'http://www.w3.org/2000/svg', transform: 'translate(15,15)', 'style':'background:white;z-index:100;'}
  });
  var fnViewUcOdontogram = function () {
    var _key = 0;
    var svg = $(obj_dom).svg('get').clear();
    var parentGroup = svg.group({transform: 'scale(' + uc_odontogram_scale + ')'});
    parentGroup = svg.group(parentGroup, {transform: 'translate(' + 0 + ',' + 0 + ')'});
    for (var i in dataDientes) {
      _key = parseInt(i);
      if (_key === 1) {
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (1 < _key && _key < 16) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (_key === 16) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
        break;
      }
    }
    parentGroup = svg.group({transform: 'scale(' + uc_odontogram_scale + ')'});
    parentGroup = svg.group(parentGroup, {transform: 'translate(' + 540 + ',' + 700 + ')'});
    for (var i in dataDientes) {
      _key = parseInt(i);
      if (_key === 51) {
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (51 < _key && _key < 60) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (_key === 60) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
        break;
      }
    }
    parentGroup = svg.group({transform: 'scale(' + uc_odontogram_scale + ')'});
    parentGroup = svg.group(parentGroup, {transform: 'translate(' + 540 + ',' + 700 + ')'});
    for (var i in dataDientes) {
      _key = parseInt(i);
      if (_key === 51) {
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (51 < _key && _key < 60) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (_key === 60) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
        break;
      }
    }
    parentGroup = svg.group({transform: 'scale(' + uc_odontogram_scale + ')'});
    parentGroup = svg.group(parentGroup, {transform: 'translate(' + 540 + ',' + 1400 + ')'});
    for (var i in dataDientes) {
      _key = parseInt(i);
      if (_key === 71) {
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (71 < _key && _key < 80) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (_key === 80) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
        break;
      }
    }
    parentGroup = svg.group({transform: 'scale(' + uc_odontogram_scale + ')'});
    parentGroup = svg.group(parentGroup, {transform: 'translate(' + 0 + ',' + 2100 + ')'});
    for (var i in dataDientes) {
      _key = parseInt(i);
      if (_key === 31) {
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (31 < _key && _key < 46) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
      } else if (_key === 46) {
        parentGroup = svg.group(parentGroup, {transform: 'translate(' + 180 + ',' + 0 + ')'});
        fnGraficarDiente(svg, parentGroup, dataDientes[i]['cod']);
        break;
      }
    }
    //----- TEXT ---
    var txtEspecificacion = new  Array();
    var auxText = '';
    var _datEventKeys = Object.keys(dataEventos);
    if(_datEventKeys.length > 0){
      for(var i in dataEventos){
        auxText = '';
        if(dataEventos[i]['option'] === 'opc01'){
          auxText += ucOdontogram_model.opc.opc01.nombre;
          auxText += ' ['+ dataEventos[i].param.codini + '-' + dataEventos[i].param.codfin +']';
          auxText += ' Tipo '+ucOdontogram_model.opc.opc01.opciones.tipos[(dataEventos[i].param.tipo)];
          txtEspecificacion.push({'htxt': auxText, 'length': auxText.length});
        }else if(dataEventos[i]['option'] === 'opc02'){
          auxText += ucOdontogram_model.opc.opc02.nombre;
          auxText += ' ['+ dataEventos[i].param.codini + '-' + dataEventos[i].param.codfin +']';
          auxText += ' Tipo '+ucOdontogram_model.opc.opc02.opciones.tipos[(dataEventos[i].param.tipo)];
          txtEspecificacion.push({'htxt': auxText, 'length': auxText.length});
        }else if(dataEventos[i]['option'] === 'opc04'){
          auxText += ucOdontogram_model.opc.opc04.nombre;
          auxText += ' ['+ dataEventos[i].param.cod + ']';
          auxText += ' Color '+ucOdontogram_model.opc.opc04.opciones.colormetales[(dataEventos[i].param.colormetal)];
          txtEspecificacion.push({'htxt': auxText, 'length': auxText.length});
        }else if(dataEventos[i]['option'] === 'opc09'){
          auxText += ucOdontogram_model.opc.opc09.nombre;
          auxText += ' ['+ dataEventos[i].param.cod + '],';
          auxText += ' Ubicacion pieza dentaria ' + dataEventos[i].param.ubicaciontxt;
          txtEspecificacion.push({'htxt': auxText, 'length': auxText.length});
        }else if(dataEventos[i]['option'] === 'opc26'){
          auxText += ucOdontogram_model.opc.opc26.nombre;
          auxText += ' ['+ dataEventos[i].param.codini + '-' + dataEventos[i].param.codfin +']';
          auxText += ' Tipo Material '+ucOdontogram_model.opc.opc26.opciones.tipomateriales[(dataEventos[i].param.tipomaterial)];
          txtEspecificacion.push({'htxt': auxText, 'length': auxText.length});
        }else if(dataEventos[i]['option'] === 'opc27'){
          auxText += ucOdontogram_model.opc.opc27.nombre;
          auxText += ' ['+ dataEventos[i].param.ubicacion + ']';
          auxText += ' Tipo '+ucOdontogram_model.opc.opc27.opciones.tipos[(dataEventos[i].param.tipo)];
          txtEspecificacion.push({'htxt': auxText, 'length': auxText.length});
        }else if(dataEventos[i]['option'] === 'opc29'){
          auxText += ucOdontogram_model.opc.opc29.nombre;
          auxText += ' ['+ dataEventos[i].param.cod + '-' + dataEventos[i].param.cara + '-' + dataEventos[i].param.parte + ']';
          auxText += ' Tipo Material '+ucOdontogram_model.opc.opc29.opciones.tipomateriales[(dataEventos[i].param.tipomaterial)];
          txtEspecificacion.push({'htxt': auxText, 'length': auxText.length});
        }
      }
    }
    //print
    parentGroup = svg.group({transform: 'scale(' + uc_odontogram_scale + ')'});
    parentGroup = svg.group(parentGroup, {transform: 'translate(' + 0 + ',' + 2860 + ')'});
    var defaultPolygon = {fill: 'white', stroke: 'navy', strokeWidth: '0.5'};
    var max_lengthLine = 144;
    var defaultTextTitle = {
      fill: 'navy', stroke: 'none', strokeWidth: 0.8,
      'fill-opacity': "1", 'stroke-opacity': "1",
      'style': 'font-size: 44px;font-weight:normal;font-family: Arial;text-decoration: underline;'};
    var defaultTextCont = {
      fill: 'navy', stroke: 'none', strokeWidth: 0.8,
      'fill-opacity': "1", 'stroke-opacity': "1", 'alignment-baseline':'text-before-edge',
      style: 'font-size: 36px;font-weight:normal;font-family: Arial;width:450px;text-align: justify;'};
    var descripcion = {'especificaciones': '', 'observaciones': ''};
    var texts = svg.createText();
    //especificaciones
    descripcion.especificaciones = svg.polygon(parentGroup, [[15, 0], [2865, 0], [2865, 600], [15, 600]], defaultPolygon);
    descripcion.especificaciones = svg.text(parentGroup, 20, 40, 'Especificaciones: ', defaultTextTitle);
    var auxLength = 0;
    if(_datEventKeys.length > 0){
      var _countrow = 0;
      var _txt = '';
      for(var i in txtEspecificacion){
        if((auxLength + parseInt(txtEspecificacion[i].length)) > max_lengthLine){
          descripcion.especificaciones = svg.text(parentGroup, 30, (100 + (_countrow) * 40), texts, defaultTextCont);
          texts = svg.createText();
          texts = texts.span(((parseInt(i) + 1)+') '+txtEspecificacion[i].htxt + ';  '));
          auxLength = parseInt(txtEspecificacion[i].length) + 3;
          _countrow++;
        }else{
          auxLength += parseInt(txtEspecificacion[i].length) + 3;
          texts = texts.span(((parseInt(i) + 1)+') '+txtEspecificacion[i].htxt + ';  '));
        }
      }
      descripcion.especificaciones = svg.text(parentGroup, 30, (100 + (_countrow) * 40), texts, defaultTextCont);
    }
    //observaciones
    descripcion.observaciones = svg.polygon(parentGroup, [[15, 640], [2865, 640], [2865, 1240], [15, 1240]], defaultPolygon);
    descripcion.observaciones = svg.text(parentGroup, 20, 680, 'Observaciones: ', defaultTextTitle);
    texts = svg.createText();
    texts.string(' ');
    descripcion.observaciones = svg.text(parentGroup, 30, 740, texts, defaultTextCont);
    $("#ucOdontogramDocumentPNGdownload").click();//crea enlace para download del odontograma
    //print resumen
    var datCariados = ucOdontogram_model.action.resumen.sumCariados();
    var datCurados = ucOdontogram_model.action.resumen.sumCurados();
    var htmlResumen = '';
    htmlResumen += '<div><br/>';
    htmlResumen += '<b style="font-size:13px;">RESUMEN</b> <br/><br/>';
    htmlResumen += '<span>Dientes Cariados: '+ datCariados.dientesCariado +'</span><br />';
    htmlResumen += '<span>Superficies Cariados: '+ datCariados.carasCariados +'</span><br /><br />';
    
    htmlResumen += '<span>Restauración definitiva: '+ datCurados.curDefinDientes +'</span><br />';
    htmlResumen += '<span>Restauración definitiva en Superficies: '+ datCurados.curDefinCaras +'</span><br /><br />';
    
    htmlResumen += '<span>Restauración temporal: '+ datCurados.curTempDientes +'</span><br />';
    htmlResumen += '<span>Restauración temporal en Superficies: '+ datCurados.curTempCaras +'</span><br /><br />';
    htmlResumen += '<span>Sellantes: '+ datCurados.sellanteDientes +'</span><br />';
    htmlResumen += '<span>Sellantes en Superficies: '+ datCurados.sellanteCaras +'</span><br />';
    //htmlResumen += '<span>TOTAL DE DIENTES OBTURADOS: '+ datCurados.allDientes +'</span><br />';
    htmlResumen += '</div>'
    $("#"+dataConfig['id_resumen']).html(htmlResumen);
    
  };
  var fnGraficarDiente = function (svg, parentGroup, CodDiente) {
    var keyDiente = dataCodKey[CodDiente.toString()];
    if (typeof (dataDientes[keyDiente]) === 'undefined') {
      $(obj_dom).append('-ERROR:DIENTE-');
      return false;
    }
    var propDent = dataDientes[keyDiente];
    var defaultPolygon = {fill: 'white', stroke: 'navy', strokeWidth: 0.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round'};
    var defaultCuadrante = {fill: 'none', stroke: 'navy', strokeWidth: 0.3, 'stroke-dasharray': '1,2'};
    var defaultLineBlue = {fill: 'none', stroke: 'blue', strokeWidth: 4.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round'};
    var defaultIndicacionlineBlue = Object.assign({}, defaultLineBlue);
    defaultIndicacionlineBlue['strokeWidth'] = '6.5';
    var defaultIndicacionDienteAusente = Object.assign({}, defaultIndicacionlineBlue);
    defaultIndicacionDienteAusente['stroke-opacity'] = '0.7';
    var defaultIndicacionTratmientoPulpar = Object.assign({}, defaultIndicacionlineBlue);
    defaultIndicacionTratmientoPulpar['strokeWidth'] = '8.5';
    var defaultLineRed = {fill: 'none', stroke: 'red', strokeWidth: 4.0, 'stroke-linecap': 'round', 'stroke-linejoin': 'round'};

    var defaultAparatoOdontologicoBueno = Object.assign({}, defaultLineBlue);
    defaultAparatoOdontologicoBueno['strokeWidth'] = '4';
    var defaultAparatoOdontologicoMalo = Object.assign({}, defaultLineRed);
    defaultAparatoOdontologicoMalo['strokeWidth'] = '4';

    var defaultIndicacionlineRed = Object.assign({}, defaultLineRed);
    defaultIndicacionlineRed['strokeWidth'] = '6.5';
    var defaultIndicacionPolygonBlue = Object.assign({}, defaultPolygon);
    defaultIndicacionPolygonBlue['fill'] = 'blue';
    defaultIndicacionPolygonBlue['stroke'] = 'blue';
    defaultIndicacionPolygonBlue['strokeWidth'] = '5';

    var defaultPolygonBlue = {fill: 'none', stroke: 'blue', strokeWidth: 1.5, 'stroke-linecap': 'round'};
    var defaultCuadranText = {
      fill: 'navy', stroke: 'navy', strokeWidth: 0.1,
      style: 'font-size: 15pt;font-weight:normal;font-family: Arial;'};
    var defaultTextS0DienteAnotacion = Object.assign({}, defaultCuadranText);
    defaultTextS0DienteAnotacion['style'] = 'font-size: 24pt;font-weight:normal;font-family: Arial;text-anchor: middle;';
    var auxCuadranteCodDiente = Object.assign({}, defaultCuadrante);
    var defaultTextS0DienteAnota_count = 0;
    var defaultTextS0DienteAnota_txt = {};
    var textS0DienteAnotacion = svg.createText();
    var borderPolygonDiente = {
      fill: 'white', stroke: '#1C1C1C',
      strokeWidth: 1.4, 'fill-opacity': "0.8", 'stroke-opacity': "0.9",
      'stroke-linecap': 'round'
    };
    var auxborderPolygonDiente = Object.assign({}, borderPolygonDiente);
    var defaultTextSuperNumerario = {
      fill: 'navy', stroke: 'navy', strokeWidth: 1.2,
      style: 'font-size: 26px;font-weight:normal;font-family: Arial;',
      'fill-opacity': "1", 'stroke-opacity': "0.8"
    };
    var defaultSuperNumerarioPolygon = {
      fill: 'white', stroke: 'blue', strokeWidth: 4.6,
      'fill-opacity': "0.6", 'stroke-opacity': "0.9", 'stroke-linecap': 'round'
    };
    var defaultCodDienteText = {
      fill: 'navy', stroke: 'navy', strokeWidth: 0.9,
      style: 'font-size: 32px;font-weight:normal;font-family: Arial;',
      'fill-opacity': "0.8", 'stroke-opacity': "0.9"
    };
    var auxFormatTxt = Object.assign({}, defaultCodDienteText);
    auxFormatTxt['style'] = 'font-size: 38px;font-family: Arial;text-anchor:middle;letter-spacing:2px';
    auxFormatTxt['stroke'] = 'navy';
    var defaultFormatDienteCaras = {
      fill: 'white', stroke: '#1C1C1C', strokeWidth: 1.4,
      'fill-opacity': "0.8", 'stroke-opacity': "0.9",
      'class': 'ucOdontogramElemCaraDiente', 'stroke-linecap': 'round',
      'stroke-linejoin': "round"
    };
    var auxFormatDienteCaras = Object.assign({},defaultFormatDienteCaras);
    var defaultRRLine = {fill: 'white', stroke: 'red', strokeWidth: 1.0, 'stroke-dasharray': '5,3', 'fill-opacity': "0.6", 'stroke-opacity': "0.9"};
    var defaultRRText = {
      fill: 'red', stroke: 'red', strokeWidth: 1.2,
      'fill-opacity': "1", 'stroke-opacity': "0.8",
      style: 'font-size: 28px;font-weight:normal;font-family: Arial;'};
    var dienteGroup = parentGroup;
    var cfgSec = ucOdontogram_model['config']['sec'];
    var objData = {};
    //inicializar Objetos
    var fnLoadData = function () {
      for (var i in cfgSec) {
        objData[i] = {};
        objData[i]['base'] = {};
        for (var j in cfgSec[i]['opciones']) {
          objData[i][j] = null;
        }
      }
    };
    fnLoadData();
    //---->('S0')
    dienteGroup = svg.group(parentGroup, {transform: 'translate(' + cfgSec.S0.ubic[(propDent.position)].x + ',' + cfgSec.S0.ubic[(propDent.position)].y + ')'});
    objData.S0.base = svg.polygon(dienteGroup, [[0, 0], [150, 0], [150, 120], [0, 120]], defaultPolygon);
    if (propDent.opc.opc04.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc04.tipo;
    }
    if (propDent.opc.opc08.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc08.value;
    }
    if (propDent.opc.opc09.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc09.value;
    }
    if (propDent.opc.opc18.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc18.value;
    }
    if (propDent.opc.opc19.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc19.value;
    }
    if (propDent.opc.opc20.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc20.value;
    }
    if (propDent.opc.opc21.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc21.value;
    }
    if (propDent.opc.opc23.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc23.nivel;
    }
    if (propDent.opc.opc32.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc32.value;
    }
    if (propDent.opc.opc33.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc33.value;
    }
    if (propDent.opc.opc36.hallazgo) {
      defaultTextS0DienteAnota_count++;
      defaultTextS0DienteAnota_txt[defaultTextS0DienteAnota_count] = propDent.opc.opc36.tipo;
    }
    //escribir texto
    if(defaultTextS0DienteAnota_count > 0){
      for(var i in defaultTextS0DienteAnota_txt){
        if(i.toString() === '1' ){
          textS0DienteAnotacion = textS0DienteAnotacion.span(defaultTextS0DienteAnota_txt[i]);
        }else if((i % 2) === 1){
          textS0DienteAnotacion = textS0DienteAnotacion.span(defaultTextS0DienteAnota_txt[i]);
        }else{
          textS0DienteAnotacion = textS0DienteAnotacion.span(', ' + defaultTextS0DienteAnota_txt[i]);
          objData.S0 = svg.text(dienteGroup, 75, (Math.floor((i/2))*35), textS0DienteAnotacion, defaultTextS0DienteAnotacion);
          textS0DienteAnotacion = svg.createText();
        }
      }
      objData.S0 = svg.text(dienteGroup, 75, (Math.ceil(defaultTextS0DienteAnota_count/2) * 35), textS0DienteAnotacion, defaultTextS0DienteAnotacion);
    }
    //---->('S1')
    dienteGroup = svg.group(parentGroup, {transform: 'translate(' + cfgSec.S1.ubic[(propDent.position)].x + ',' + cfgSec.S1.ubic[(propDent.position)].y + ')'});
    objData.S1.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc35.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        if (propDent.opc.opc35.lado === 'D') {
          objData.S1.opc35 = svg.path(dienteGroup, 'M30 30 C 70 0, 220 0, 240 30', defaultIndicacionlineBlue);
          objData.S1.opc35 = svg.polyline(dienteGroup, [[218, 30], [240, 30], [229, 14]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc35.lado === 'Z') {
          objData.S1.opc35 = svg.path(dienteGroup, 'M-90 30 C -50 0, 100 0, 120 30', defaultIndicacionlineBlue);
          objData.S1.opc35 = svg.polyline(dienteGroup, [[-68, 30], [-90, 30], [-79, 14]], defaultIndicacionlineBlue);
        }
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        if (propDent.opc.opc35.lado === 'D') {
          objData.S1.opc35 = svg.path(dienteGroup, 'M30 0 C 70 30, 220 30, 240 0', defaultIndicacionlineBlue);
          objData.S1.opc35 = svg.polyline(dienteGroup, [[218, 0], [240, 0], [229, 16]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc35.lado === 'Z') {
          objData.S1.opc35 = svg.path(dienteGroup, 'M-90 0 C -50 30, 100 30, 120 0', defaultIndicacionlineBlue);
          objData.S1.opc35 = svg.polyline(dienteGroup, [[-68, 0], [-90, 0], [-79, 16]], defaultIndicacionlineBlue);
        }
      }
    }
    //---->('S2')
    dienteGroup = svg.group(parentGroup, {transform: 'translate(' + cfgSec.S2.ubic[(propDent.position)].x + ',' + cfgSec.S2.ubic[(propDent.position)].y + ')'});
    objData.S2.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc25.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        if (propDent.opc.opc25.afectacion === 'I') {
          if (propDent.opc.opc25.estado === 'B') {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[90, 30], [90, 15], [180, 15]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[90, 30], [90, 15], [180, 15]], defaultLineRed);
          }
        } else if (propDent.opc.opc25.afectacion === 'M') {
          if (propDent.opc.opc25.estado === 'B') {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultLineRed);
          }
        } else if (propDent.opc.opc25.afectacion === 'F') {
          if (propDent.opc.opc25.estado === 'B') {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [90, 15], [90, 30]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [90, 15], [90, 30]], defaultLineRed);
          }
        }
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        if (propDent.opc.opc25.afectacion === 'I') {
          if (propDent.opc.opc25.estado === 'B') {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[90, 0], [90, 15], [180, 15]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[90, 0], [90, 15], [180, 15]], defaultLineRed);
          }
        } else if (propDent.opc.opc25.afectacion === 'M') {
          if (propDent.opc.opc25.estado === 'B') {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultLineRed);
          }
        } else if (propDent.opc.opc25.afectacion === 'F') {
          if (propDent.opc.opc25.estado === 'B') {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [90, 15], [90, 0]], defaultLineBlue);
          } else {
            objData.S2.opc25 = svg.polyline(dienteGroup, [[0, 15], [90, 15], [90, 0]], defaultLineRed);
          }
        }
      }
    }
    //---->('S3')
    dienteGroup = svg.group(parentGroup, {transform: 'translate(' + cfgSec.S3.ubic[(propDent.position)].x + ',' + cfgSec.S3.ubic[(propDent.position)].y + ')'});
    objData.S3.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc26.hallazgo) {
      if (propDent.opc.opc26.afectacion === 'I') {
        if (propDent.opc.opc26.estado === 'B') {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[30, 10], [180, 10]], defaultLineBlue);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[30, 20], [180, 20]], defaultLineBlue);
        } else {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[30, 10], [180, 10]], defaultLineRed);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[30, 20], [180, 20]], defaultLineRed);
        }
      } else if (propDent.opc.opc26.afectacion === 'M') {
        if (propDent.opc.opc26.estado === 'B') {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 10], [180, 10]], defaultLineBlue);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 20], [180, 20]], defaultLineBlue);
        } else {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 10], [180, 10]], defaultLineRed);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 20], [180, 20]], defaultLineRed);
        }
      } else if (propDent.opc.opc26.afectacion === 'F') {
        if (propDent.opc.opc26.estado === 'B') {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 10], [150, 10]], defaultLineBlue);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 20], [150, 20]], defaultLineBlue);
        } else {
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 10], [150, 10]], defaultLineRed);
          objData.S3.opc26 = svg.polyline(dienteGroup, [[0, 20], [150, 20]], defaultLineRed);
        }
      }
    }
    //---->('S4')
    dienteGroup = svg.group(parentGroup, {transform: 'translate(' + cfgSec.S4.ubic[(propDent.position)].x + ',' + cfgSec.S4.ubic[(propDent.position)].y + ')'});
    objData.S4.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc01.hallazgo) {
      if (propDent.opc.opc01.afectacion === 'I') {
        if (propDent.opc.opc01.estado === 'B') {
          objData.S4.opc01 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[82, 15], [98, 15]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[90, 7], [90, 23]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[105, 15], [180, 15]], defaultAparatoOdontologicoBueno);
        } else {
          objData.S4.opc01 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[82, 15], [98, 15]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[90, 7], [90, 23]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[105, 15], [180, 15]], defaultAparatoOdontologicoMalo);
        }
      } else if (propDent.opc.opc01.afectacion === 'M') {
        if (propDent.opc.opc01.estado === 'B') {
          objData.S4.opc01 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultAparatoOdontologicoBueno);
        } else {
          objData.S4.opc01 = svg.polyline(dienteGroup, [[0, 15], [180, 15]], defaultAparatoOdontologicoMalo);
        }
      } else if (propDent.opc.opc01.afectacion === 'F') {
        if (propDent.opc.opc01.estado === 'B') {
          objData.S4.opc01 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[82, 15], [98, 15]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[90, 7], [90, 23]], defaultAparatoOdontologicoBueno);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[0, 15], [75, 15]], defaultAparatoOdontologicoBueno);
        } else {
          objData.S4.opc01 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[82, 15], [98, 15]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[90, 7], [90, 23]], defaultAparatoOdontologicoMalo);
          objData.S4.opc01 = svg.polyline(dienteGroup, [[0, 15], [75, 15]], defaultAparatoOdontologicoMalo);
        }
      }
    }
    //---->('S5')
    dienteGroup = svg.group(parentGroup, {transform: 'translate(' + cfgSec.S5.ubic[(propDent.position)].x + ',' + cfgSec.S5.ubic[(propDent.position)].y + ')'});
    objData.S5.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 30], [0, 30]], defaultCuadrante);
    if (propDent.opc.opc02.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        if (propDent.opc.opc02.afectacion === 'I') {
          if (propDent.opc.opc02.estado === 'B') {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === 'M') {
          if (propDent.opc.opc02.estado === 'B') {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === 'F') {
          if (propDent.opc.opc02.estado === 'B') {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30]], defaultAparatoOdontologicoMalo);
          }
        }
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        if (propDent.opc.opc02.afectacion === 'I') {
          if (propDent.opc.opc02.estado === 'B') {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[30, 0], [60, 30], [90, 0], [120, 30], [150, 0], [180, 30]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[30, 0], [60, 30], [90, 0], [120, 30], [150, 0], [180, 30]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === 'M') {
          if (propDent.opc.opc02.estado === 'B') {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 30], [30, 0], [60, 30], [90, 0], [120, 30], [150, 0], [180, 30]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 30], [30, 0], [60, 30], [90, 0], [120, 30], [150, 0], [180, 30]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === 'F') {
          if (propDent.opc.opc02.estado === 'B') {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 30], [30, 0], [60, 30], [90, 0], [120, 30], [150, 0]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 30], [30, 0], [60, 30], [90, 0], [120, 30], [150, 0]], defaultAparatoOdontologicoMalo);
          }
        }
      } else {
        if (propDent.opc.opc02.afectacion === 'I') {
          if (propDent.opc.opc02.estado === 'B') {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === 'M') {
          if (propDent.opc.opc02.estado === 'B') {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30], [180, 0]], defaultAparatoOdontologicoMalo);
          }
        } else if (propDent.opc.opc02.afectacion === 'F') {
          if (propDent.opc.opc02.estado === 'B') {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30]], defaultAparatoOdontologicoBueno);
          } else {
            objData.S5.opc02 = svg.polyline(dienteGroup, [[0, 0], [30, 30], [60, 0], [90, 30], [120, 0], [150, 30]], defaultAparatoOdontologicoMalo);
          }
        }
      }
    }
    //---->('S6')///preguntar si puede haber 3 consecutivos
    dienteGroup = svg.group(parentGroup, {transform: 'translate(' + cfgSec.S6.ubic[(propDent.position)].x + ',' + cfgSec.S6.ubic[(propDent.position)].y + ')'});
    objData.S6.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 60], [0, 60]], defaultCuadrante);
    if (propDent.opc.opc16.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        if (propDent.opc.opc16.afectacion === 'D') {
          objData.S6.opc16 = svg.ellipse(dienteGroup, 120, 30, 74, 30, defaultIndicacionlineBlue);
        } else if (propDent.opc.opc16.afectacion === 'Z') {
          objData.S6.opc16 = svg.ellipse(dienteGroup, 60, 30, 74, 30, defaultIndicacionlineBlue);
        }
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        if (propDent.opc.opc16.afectacion === 'D') {
          objData.S6.opc16 = svg.ellipse(dienteGroup, 120, 30, 74, 30, defaultIndicacionlineBlue);
        } else if (propDent.opc.opc16.afectacion === 'Z') {
          objData.S6.opc16 = svg.ellipse(dienteGroup, 60, 30, 74, 30, defaultIndicacionlineBlue);
        }
      }
    }
    if (propDent.opc.opc11.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S6.opc11 = svg.polygon(dienteGroup, [[30, 50], [90, -10], [150, 50]], defaultIndicacionlineBlue);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S6.opc11 = svg.polygon(dienteGroup, [[30, 10], [90, 70], [150, 10]], defaultIndicacionlineBlue);
      } else {
        objData.S6.opc11 = svg.polygon(dienteGroup, [[30, 50], [90, -10], [150, 50]], defaultIndicacionlineBlue);
      }
    }
    objData.S6.base = svg.text(dienteGroup, 90, 45, (' '+CodDiente.toString()+' '), auxFormatTxt);
    auxCuadranteCodDiente['data-cod'] = CodDiente.toString();
    auxCuadranteCodDiente['class'] = "ucOdontogramElemTextCodDiente";
    auxCuadranteCodDiente['fill'] = "white";
    auxCuadranteCodDiente['fill-opacity'] = "0.1";
    auxCuadranteCodDiente['stroke'] = "white";
    auxCuadranteCodDiente['stroke-opacity'] = "0.1";
    objData.S6.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 60], [0, 60]], auxCuadranteCodDiente);
    //---->('S7')
    dienteGroup = svg.group(parentGroup, {transform: 'translate(' + cfgSec.S7.ubic[(propDent.position)].x + ',' + cfgSec.S7.ubic[(propDent.position)].y + ')'});
    objData.S7.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 240], [0, 240]], defaultCuadrante);
    //Dientes - caras raiz
    if (propDent.tipo === 'S1') {
      objData.S7.base = svg.polygon(dienteGroup, [[90, 0], [30, 120], [150, 120]], borderPolygonDiente);
    } else if (propDent.tipo === 'S2') {
      objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [50, 0], [100, 120]], borderPolygonDiente);
      auxborderPolygonDiente['stroke-dasharray'] = '6,6';
      objData.S7.base = svg.polygon(dienteGroup, [[80, 120], [130, 0], [150, 120]], auxborderPolygonDiente);
    } else if (propDent.tipo === 'S3') {
      objData.S7.base = svg.polygon(dienteGroup, [[80, 120], [130, 0], [150, 120]], borderPolygonDiente);
      auxborderPolygonDiente['stroke-dasharray'] = '6,6';
      objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [50, 0], [100, 120]], auxborderPolygonDiente);
    } else if (propDent.tipo === 'S4') {
      objData.S7.base = svg.polygon(dienteGroup, [[90, 0], [30, 120], [150, 120]], borderPolygonDiente);
    } else if (propDent.tipo === 'S5') {
      objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [50, 0], [80, 120]], borderPolygonDiente);
      objData.S7.base = svg.polygon(dienteGroup, [[100, 120], [130, 0], [150, 120]], borderPolygonDiente);
      objData.S7.base = svg.polygon(dienteGroup, [[60, 120], [90, 0], [120, 120]], borderPolygonDiente);
    } else if (propDent.tipo === 'I1') {
      objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [90, 240], [150, 120]], borderPolygonDiente);
    } else if (propDent.tipo === 'I2') {
      objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [90, 240], [150, 120]], borderPolygonDiente);
    } else if (propDent.tipo === 'I3') {
      objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [100, 120], [50, 240]], borderPolygonDiente);
      objData.S7.base = svg.polygon(dienteGroup, [[80, 120], [150, 120], [130, 240]], borderPolygonDiente);
    } else {
      objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [90, 240], [150, 120]], borderPolygonDiente);
    }
    objData.S7.opc03 = {
      'pcs': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
        'sp03': null,
      },
      'pcd': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
      },
      'pci': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
        'sp03': null,
      },
      'pcz': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
      },
      'pcc': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
        'sp03': null,
        'sp04': null,
        'sp05': null,
        'sp06': null,
      }
    };
    objData.S7.opc29 = {
      'pcs': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
        'sp03': null,
      },
      'pcd': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
      },
      'pci': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
        'sp03': null,
      },
      'pcz': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
      },
      'pcc': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
        'sp03': null,
        'sp04': null,
        'sp05': null,
        'sp06': null,
      }
    };
    objData.S7.opc30 = {
      'pcs': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
        'sp03': null,
      },
      'pcd': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
      },
      'pci': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
        'sp03': null,
      },
      'pcz': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
      },
      'pcc': {
        'sp00': null,
        'sp01': null,
        'sp02': null,
        'sp03': null,
        'sp04': null,
        'sp05': null,
        'sp06': null,
      }
    };
    auxFormatDienteCaras['class'] = "";
    auxFormatDienteCaras['data-cod'] = CodDiente.toString();
    if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
      //---------------------------------------------------- opc03 - caries --------------------------------------
      auxFormatDienteCaras['fill-opacity'] = defaultFormatDienteCaras['fill-opacity'];
      //caraSuperior
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      objData.S7.opc03.pcs.sp00 = svg.polygon(dienteGroup, [[30, 120], [150, 120], [120, 150], [60, 150]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pcs.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcs.sp01 = svg.polygon(dienteGroup, [[30, 120], [75, 120], [75, 150], [60, 150]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcs.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcs.sp02 = svg.polygon(dienteGroup, [[75, 120], [105, 120], [105, 150], [75, 150]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcs.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcs.sp03 = svg.polygon(dienteGroup, [[105, 120], [150, 120], [120, 150], [105, 150]], auxFormatDienteCaras);

      //caraInferior
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      objData.S7.opc03.pci.sp00 = svg.polygon(dienteGroup, [[60, 210], [120, 210], [150, 240], [30, 240]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pci.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pci.sp01 = svg.polygon(dienteGroup, [[60, 210], [75, 210], [75, 240], [30, 240]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pci.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pci.sp02 = svg.polygon(dienteGroup, [[75, 210], [105, 210], [105, 240], [75, 240]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pci.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pci.sp03 = svg.polygon(dienteGroup, [[105, 210], [120, 210], [150, 240], [105, 240]], auxFormatDienteCaras);

      //caraDerecha
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      auxFormatDienteCaras['fill'] = 'white';
      objData.S7.opc03.pcd.sp00 = svg.polygon(dienteGroup, [[120, 150], [150, 120], [150, 240], [120, 210]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pcd.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcd.sp01 = svg.polygon(dienteGroup, [[120, 150], [150, 120], [150, 180], [120, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcd.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcd.sp02 = svg.polygon(dienteGroup, [[120, 180], [150, 180], [150, 240], [120, 210]], auxFormatDienteCaras);

      //caraIzquierda
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      auxFormatDienteCaras['fill'] = 'white';
      objData.S7.opc03.pcz.sp00 = svg.polygon(dienteGroup, [[30, 120], [60, 150], [60, 210], [30, 240]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pcz.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcz.sp01 = svg.polygon(dienteGroup, [[30, 120], [60, 150], [60, 180], [30, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcz.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcz.sp02 = svg.polygon(dienteGroup, [[30, 180], [60, 180], [60, 210], [30, 240]], auxFormatDienteCaras);

      //caraCentral
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      objData.S7.opc03.pcc.sp00 = svg.polygon(dienteGroup, [[60, 150], [120, 150], [120, 210], [60, 210]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pcc.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp01 = svg.polygon(dienteGroup, [[60, 150], [80, 150], [80, 180], [60, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp02 = svg.polygon(dienteGroup, [[80, 150], [100, 150], [100, 180], [80, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp03 = svg.polygon(dienteGroup, [[100, 150], [120, 150], [120, 180], [100, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp04.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp04 = svg.polygon(dienteGroup, [[60, 180], [80, 180], [80, 210], [60, 210]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp05.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp05 = svg.polygon(dienteGroup, [[80, 180], [100, 180], [100, 210], [80, 210]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp06.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp06 = svg.polygon(dienteGroup, [[100, 180], [120, 180], [120, 210], [100, 210]], auxFormatDienteCaras);
      //---------------------------------------------------- opc29 - rest-definitiva --------------------------------------
      auxFormatDienteCaras['fill-opacity'] = defaultFormatDienteCaras['fill-opacity'];
      // //caraSuperior
      if(propDent.opc.opc29.pcs.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcs.sp01 = svg.polygon(dienteGroup, [[30, 120], [75, 120], [75, 150], [60, 150]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcs.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcs.sp02 = svg.polygon(dienteGroup, [[75, 120], [105, 120], [105, 150], [75, 150]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcs.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcs.sp03 = svg.polygon(dienteGroup, [[105, 120], [150, 120], [120, 150], [105, 150]], auxFormatDienteCaras);

      //caraInferior
      if(propDent.opc.opc29.pci.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pci.sp01 = svg.polygon(dienteGroup, [[60, 210], [75, 210], [75, 240], [30, 240]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pci.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pci.sp02 = svg.polygon(dienteGroup, [[75, 210], [105, 210], [105, 240], [75, 240]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pci.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pci.sp03 = svg.polygon(dienteGroup, [[105, 210], [120, 210], [150, 240], [105, 240]], auxFormatDienteCaras);

      //caraDerecha
      if(propDent.opc.opc29.pcd.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcd.sp01 = svg.polygon(dienteGroup, [[120, 150], [150, 120], [150, 180], [120, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcd.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcd.sp02 = svg.polygon(dienteGroup, [[120, 180], [150, 180], [150, 240], [120, 210]], auxFormatDienteCaras);

      //caraIzquierda
      if(propDent.opc.opc29.pcz.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcz.sp01 = svg.polygon(dienteGroup, [[30, 120], [60, 150], [60, 180], [30, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcz.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcz.sp02 = svg.polygon(dienteGroup, [[30, 180], [60, 180], [60, 210], [30, 240]], auxFormatDienteCaras);

      //caraCentral
      if(propDent.opc.opc29.pcc.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp01 = svg.polygon(dienteGroup, [[60, 150], [80, 150], [80, 180], [60, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp02 = svg.polygon(dienteGroup, [[80, 150], [100, 150], [100, 180], [80, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp03 = svg.polygon(dienteGroup, [[100, 150], [120, 150], [120, 180], [100, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp04.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp04 = svg.polygon(dienteGroup, [[60, 180], [80, 180], [80, 210], [60, 210]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp05.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp05 = svg.polygon(dienteGroup, [[80, 180], [100, 180], [100, 210], [80, 210]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp06.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp06 = svg.polygon(dienteGroup, [[100, 180], [120, 180], [120, 210], [100, 210]], auxFormatDienteCaras);
      //---------------------------------------------------- opc30 - rest-temporal --------------------------------------
      auxFormatDienteCaras['fill-opacity'] = '0.95';
      auxFormatDienteCaras['stroke-width'] = '6';
      //caraSuperior
      if(propDent.opc.opc30.pcs.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcs.sp01 = svg.polygon(dienteGroup, [[30, 120], [75, 120], [75, 150], [60, 150]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcs.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcs.sp02 = svg.polygon(dienteGroup, [[75, 120], [105, 120], [105, 150], [75, 150]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcs.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcs.sp03 = svg.polygon(dienteGroup, [[105, 120], [150, 120], [120, 150], [105, 150]], auxFormatDienteCaras);

      //caraInferior
      if(propDent.opc.opc30.pci.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pci.sp01 = svg.polygon(dienteGroup, [[60, 210], [75, 210], [75, 240], [30, 240]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pci.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pci.sp02 = svg.polygon(dienteGroup, [[75, 210], [105, 210], [105, 240], [75, 240]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pci.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pci.sp03 = svg.polygon(dienteGroup, [[105, 210], [120, 210], [150, 240], [105, 240]], auxFormatDienteCaras);

      //caraDerecha
      if(propDent.opc.opc30.pcd.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcd.sp01 = svg.polygon(dienteGroup, [[120, 150], [150, 120], [150, 180], [120, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcd.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcd.sp02 = svg.polygon(dienteGroup, [[120, 180], [150, 180], [150, 240], [120, 210]], auxFormatDienteCaras);

      //caraIzquierda
      if(propDent.opc.opc30.pcz.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcz.sp01 = svg.polygon(dienteGroup, [[30, 120], [60, 150], [60, 180], [30, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcz.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcz.sp02 = svg.polygon(dienteGroup, [[30, 180], [60, 180], [60, 210], [30, 240]], auxFormatDienteCaras);

      //caraCentral
      auxFormatDienteCaras['stroke-width'] = '8';
      if(propDent.opc.opc30.pcc.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp01 = svg.polygon(dienteGroup, [[60, 150], [80, 150], [80, 180], [60, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp02 = svg.polygon(dienteGroup, [[80, 150], [100, 150], [100, 180], [80, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp03 = svg.polygon(dienteGroup, [[100, 150], [120, 150], [120, 180], [100, 180]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp04.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp04 = svg.polygon(dienteGroup, [[60, 180], [80, 180], [80, 210], [60, 210]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp05.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp05 = svg.polygon(dienteGroup, [[80, 180], [100, 180], [100, 210], [80, 210]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp06.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp06 = svg.polygon(dienteGroup, [[100, 180], [120, 180], [120, 210], [100, 210]], auxFormatDienteCaras);

      //---------------------------------------------------- SELECT - ALL-OBJ --------------------------------------
      auxFormatDienteCaras['class'] = defaultFormatDienteCaras['class'];
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = 'white';
      auxFormatDienteCaras['stroke-width'] = '4';
      auxFormatDienteCaras['fill-opacity'] = '0.1';
      auxFormatDienteCaras['stroke-opacity'] = '0.1';
      //caraSuperior
      auxFormatDienteCaras['data-cara'] = 'pcs';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //--implementa cara superior partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcs.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcs.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcs.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [75, 120], [75, 150], [60, 150]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcs.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcs.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcs.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[75, 120], [105, 120], [105, 150], [105, 150]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp03';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcs.sp03.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcs.sp03.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcs.sp03.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[105, 120], [150, 120], [120, 150], [105, 150]], auxFormatDienteCaras);

      //caraInferior
      auxFormatDienteCaras['data-cara'] = 'pci';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //--implementa cara inferior partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pci.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pci.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pci.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[60, 210], [75, 210], [75, 240], [30, 240]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pci.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pci.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pci.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[75, 210], [105, 210], [105, 240], [75, 240]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp03';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pci.sp03.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pci.sp03.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pci.sp03.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[105, 210], [120, 210], [150, 240], [105, 240]], auxFormatDienteCaras);

      //caraDerecha
      auxFormatDienteCaras['data-cara'] = 'pcd';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //--implementa cara derecha partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcd.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcd.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcd.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[120, 150], [150, 120], [150, 180], [120, 180]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcd.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcd.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcd.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[120, 180], [150, 180], [150, 240], [120, 210]], auxFormatDienteCaras);

      //caraIzquierda
      auxFormatDienteCaras['data-cara'] = 'pcz';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //--implementa cara izquierda partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcz.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcz.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcz.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [60, 150], [60, 180], [30, 180]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcz.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcz.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcz.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[30, 180], [60, 180], [60, 210], [30, 240]], auxFormatDienteCaras);

      //caraCentral
      auxFormatDienteCaras['data-cara'] = 'pcc';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //--implementa cara central partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[60, 150], [80, 150], [80, 180], [60, 180]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[80, 150], [100, 150], [100, 180], [80, 180]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp03';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp03.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp03.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp03.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[100, 150], [120, 150], [120, 180], [100, 180]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp04';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp04.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp04.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp04.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[60, 180], [80, 180], [80, 210], [60, 210]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp05';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp05.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp05.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp05.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[80, 180], [100, 180], [100, 210], [80, 210]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp06';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp06.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp06.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp06.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[100, 180], [120, 180], [120, 210], [100, 210]], auxFormatDienteCaras);
    } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
      //---------------------------------------------------- opc03 - caries --------------------------------------
      auxFormatDienteCaras['fill-opacity'] = defaultFormatDienteCaras['fill-opacity'];
      //caraSuperior
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      auxFormatDienteCaras['fill'] = 'white';
      objData.S7.opc03.pcs.sp00 = svg.polygon(dienteGroup, [[30, 0], [150, 0], [120, 30], [60, 30]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pcs.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcs.sp01 = svg.polygon(dienteGroup, [[30, 0], [75, 0], [75, 30], [60, 30]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcs.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcs.sp02 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcs.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcs.sp03 = svg.polygon(dienteGroup, [[105, 0], [150, 0], [120, 30], [105, 30]], auxFormatDienteCaras);

      //caraInferior
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      auxFormatDienteCaras['fill'] = 'white';
      objData.S7.opc03.pci.sp00 = svg.polygon(dienteGroup, [[60, 90], [120, 90], [150, 120], [30, 120]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pci.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pci.sp01 = svg.polygon(dienteGroup, [[60, 90], [75, 90], [75, 120], [30, 120]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pci.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pci.sp02 = svg.polygon(dienteGroup, [[75, 90], [105, 90], [105, 120], [75, 120]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pci.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pci.sp03 = svg.polygon(dienteGroup, [[105, 90], [120, 90], [150, 120], [105, 120]], auxFormatDienteCaras);

      //caraDerecha
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      objData.S7.opc03.pcd.sp00 = svg.polygon(dienteGroup, [[120, 30], [150, 0], [150, 120], [120, 90]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pcd.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcd.sp01 = svg.polygon(dienteGroup, [[120, 30], [150, 0], [150, 60], [120, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcd.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcd.sp02 = svg.polygon(dienteGroup, [[120, 60], [150, 60], [150, 120], [120, 90]], auxFormatDienteCaras);

      //caraIzquierda
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      objData.S7.opc03.pcz.sp00 = svg.polygon(dienteGroup, [[30, 0], [60, 30], [60, 90], [30, 120]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pcz.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcz.sp01 = svg.polygon(dienteGroup, [[30, 0], [60, 30], [60, 60], [30, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcz.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcz.sp02 = svg.polygon(dienteGroup, [[30, 60], [60, 60], [60, 90], [30, 120]], auxFormatDienteCaras);

      //caraCentral
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      objData.S7.opc03.pcc.sp00 = svg.polygon(dienteGroup, [[60, 30], [120, 30], [120, 90], [60, 90]], auxFormatDienteCaras);
      auxFormatDienteCaras['stroke'] = 'none';
      if(propDent.opc.opc03.pcc.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp01 = svg.polygon(dienteGroup, [[60, 30], [80, 30], [80, 60], [60, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp02 = svg.polygon(dienteGroup, [[80, 30], [100, 30], [100, 60], [80, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp03 = svg.polygon(dienteGroup, [[100, 30], [120, 30], [120, 60], [100, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp04.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp04 = svg.polygon(dienteGroup, [[60, 60], [80, 60], [80, 90], [60, 90]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp05.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp05 = svg.polygon(dienteGroup, [[80, 60], [100, 60], [100, 90], [80, 90]], auxFormatDienteCaras);
      if(propDent.opc.opc03.pcc.sp06.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'white';
      }
      objData.S7.opc03.pcc.sp06 = svg.polygon(dienteGroup, [[100, 60], [120, 60], [120, 90], [100, 90]], auxFormatDienteCaras);

      //---------------------------------------------------- opc29 - rest-definitiva --------------------------------------
      auxFormatDienteCaras['fill-opacity'] = defaultFormatDienteCaras['fill-opacity'];
      //caraSuperior
      if(propDent.opc.opc29.pcs.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcs.sp01 = svg.polygon(dienteGroup, [[30, 0], [75, 0], [75, 30], [60, 30]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcs.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcs.sp02 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcs.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcs.sp03 = svg.polygon(dienteGroup, [[105, 0], [150, 0], [120, 30], [105, 30]], auxFormatDienteCaras);

      //caraInferior
      if(propDent.opc.opc29.pci.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pci.sp01 = svg.polygon(dienteGroup, [[60, 90], [75, 90], [75, 120], [30, 120]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pci.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pci.sp02 = svg.polygon(dienteGroup, [[75, 90], [105, 90], [105, 120], [75, 120]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pci.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pci.sp03 = svg.polygon(dienteGroup, [[105, 90], [120, 90], [150, 120], [105, 120]], auxFormatDienteCaras);

      //caraDerecha
      if(propDent.opc.opc29.pcd.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcd.sp01 = svg.polygon(dienteGroup, [[120, 30], [150, 0], [150, 60], [120, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcd.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcd.sp02 = svg.polygon(dienteGroup, [[120, 60], [150, 60], [150, 120], [120, 90]], auxFormatDienteCaras);

      //caraIzquierda
      if(propDent.opc.opc29.pcz.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcz.sp01 = svg.polygon(dienteGroup, [[30, 0], [60, 30], [60, 60], [30, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcz.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcz.sp02 = svg.polygon(dienteGroup, [[30, 60], [60, 60], [60, 90], [30, 120]], auxFormatDienteCaras);

      //caraCentral
      if(propDent.opc.opc29.pcc.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp01 = svg.polygon(dienteGroup, [[60, 30], [80, 30], [80, 60], [60, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp02 = svg.polygon(dienteGroup, [[80, 30], [100, 30], [100, 60], [80, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp03 = svg.polygon(dienteGroup, [[100, 30], [120, 30], [120, 60], [100, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp04.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp04 = svg.polygon(dienteGroup, [[60, 60], [80, 60], [80, 90], [60, 90]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp05.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp05 = svg.polygon(dienteGroup, [[80, 60], [100, 60], [100, 90], [80, 90]], auxFormatDienteCaras);
      if(propDent.opc.opc29.pcc.sp06.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'blue';
        auxFormatDienteCaras['stroke'] = 'white';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc29.pcc.sp06 = svg.polygon(dienteGroup, [[100, 60], [120, 60], [120, 90], [100, 90]], auxFormatDienteCaras);

      //---------------------------------------------------- opc30 - rest-temporal --------------------------------------
      auxFormatDienteCaras['fill-opacity'] = '0.95';
      auxFormatDienteCaras['stroke-width'] = '6';
      //caraSuperior
      if(propDent.opc.opc30.pcs.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcs.sp01 = svg.polygon(dienteGroup, [[30, 0], [75, 0], [75, 30], [60, 30]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcs.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcs.sp02 = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcs.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcs.sp03 = svg.polygon(dienteGroup, [[105, 0], [150, 0], [120, 30], [105, 30]], auxFormatDienteCaras);

      //caraInferior
      if(propDent.opc.opc30.pci.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pci.sp01 = svg.polygon(dienteGroup, [[60, 90], [75, 90], [75, 120], [30, 120]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pci.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pci.sp02 = svg.polygon(dienteGroup, [[75, 90], [105, 90], [105, 120], [75, 120]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pci.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pci.sp03 = svg.polygon(dienteGroup, [[105, 90], [120, 90], [150, 120], [105, 120]], auxFormatDienteCaras);

      //caraDerecha
      if(propDent.opc.opc30.pcd.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcd.sp01 = svg.polygon(dienteGroup, [[120, 30], [150, 0], [150, 60], [120, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcd.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcd.sp02 = svg.polygon(dienteGroup, [[120, 60], [150, 60], [150, 120], [120, 90]], auxFormatDienteCaras);

      //caraIzquierda
      if(propDent.opc.opc30.pcz.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcz.sp01 = svg.polygon(dienteGroup, [[30, 0], [60, 30], [60, 60], [30, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcz.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcz.sp02 = svg.polygon(dienteGroup, [[30, 60], [60, 60], [60, 90], [30, 120]], auxFormatDienteCaras);

      //caraCentral
      auxFormatDienteCaras['stroke-width'] = '8';
      if(propDent.opc.opc30.pcc.sp01.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp01 = svg.polygon(dienteGroup, [[60, 30], [80, 30], [80, 60], [60, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp02.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp02 = svg.polygon(dienteGroup, [[80, 30], [100, 30], [100, 60], [80, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp03.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp03 = svg.polygon(dienteGroup, [[100, 30], [120, 30], [120, 60], [100, 60]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp04.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp04 = svg.polygon(dienteGroup, [[60, 60], [80, 60], [80, 90], [60, 90]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp05.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp05 = svg.polygon(dienteGroup, [[80, 60], [100, 60], [100, 90], [80, 90]], auxFormatDienteCaras);
      if(propDent.opc.opc30.pcc.sp06.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'red';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc30.pcc.sp06 = svg.polygon(dienteGroup, [[100, 60], [120, 60], [120, 90], [100, 90]], auxFormatDienteCaras);

      //---------------------------------------------------- SELECT - ALL-OBJ --------------------------------------
      auxFormatDienteCaras['class'] = defaultFormatDienteCaras['class'];
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = 'white';
      auxFormatDienteCaras['stroke-width'] = '4';
      auxFormatDienteCaras['fill-opacity'] = '0.1';
      auxFormatDienteCaras['stroke-opacity'] = '0.1';
      //caraSuperior
      auxFormatDienteCaras['data-cara'] = 'pcs';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //---implementa cara superior partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcs.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcs.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcs.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[30, 0], [75, 0], [75, 30], [60, 30]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcs.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcs.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcs.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[75, 0], [105, 0], [105, 30], [75, 30]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp03';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcs.sp03.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcs.sp03.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcs.sp03.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[105, 0], [150, 0], [150, 30], [105, 30]], auxFormatDienteCaras);

      //caraInferior
      auxFormatDienteCaras['data-cara'] = 'pci';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //---implementa cara superior partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pci.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pci.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pci.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[60, 90], [75, 90], [75, 120], [30, 120]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pci.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pci.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pci.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[75, 90], [105, 90], [105, 120], [75, 120]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp03';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pci.sp03.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pci.sp03.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pci.sp03.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[105, 90], [120, 90], [150, 120], [105, 120]], auxFormatDienteCaras);

      //caraDerecha
      auxFormatDienteCaras['data-cara'] = 'pcd';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //---implementa cara superior partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcd.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcd.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcd.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[120, 30], [150, 0], [150, 60], [120, 60]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcd.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcd.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcd.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[120, 60], [150, 60], [150, 120], [120, 90]], auxFormatDienteCaras);

      //caraIzquierda
      auxFormatDienteCaras['data-cara'] = 'pcz';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //---implementa cara izquierda partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcz.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcz.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcz.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[30, 0], [60, 30], [60, 60], [30, 60]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcz.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcz.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcz.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[30, 60], [60, 60], [60, 90], [30, 120]], auxFormatDienteCaras);

      //caraCentral
      auxFormatDienteCaras['data-cara'] = 'pcc';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      //---implementa cara izquierda partes
      auxFormatDienteCaras['data-parte'] = 'sp01';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp01.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp01.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp01.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[60, 30], [80, 30], [80, 60], [60, 60]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp02';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp02.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp02.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp02.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[80, 30], [100, 30], [100, 60], [80, 60]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp03';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp03.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp03.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp03.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[100, 30], [120, 30], [120, 60], [100, 60]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp04';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp04.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp04.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp04.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[60, 60], [80, 60], [80, 90], [60, 90]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp05';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp05.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp05.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp05.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[80, 60], [100, 60], [100, 90], [80, 90]], auxFormatDienteCaras);
      auxFormatDienteCaras['data-parte'] = 'sp06';
      auxFormatDienteCaras['data-est03'] = propDent.opc.opc03.pcc.sp06.estado;
      auxFormatDienteCaras['data-est29'] = propDent.opc.opc29.pcc.sp06.estado;
      auxFormatDienteCaras['data-est30'] = propDent.opc.opc30.pcc.sp06.estado;
      objData.S7.base = svg.polygon(dienteGroup, [[100, 60], [120, 60], [120, 90], [100, 90]], auxFormatDienteCaras);
    }

    //---- --------------------------------- implementa sellanate -INI ---------------------------------------------------------------------
    objData.S7.opc31 = {
      'pcs': {'sp00': null},
      'pcd': {'sp00': null},
      'pci': {'sp00': null},
      'pcz': {'sp00': null},
      'pcc': {'sp00': null}
    };
    auxFormatDienteCaras['class'] = "";
    auxFormatDienteCaras['data-cod'] = CodDiente.toString();
    if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
      //---------------------------------------------------- opc31 - sellantes --------------------------------------
      auxFormatDienteCaras['fill-opacity'] = '0.95';
      //caraSuperior
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pcs.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '6';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pcs.sp00 = svg.polygon(dienteGroup, [[30, 120], [150, 120], [120, 150], [60, 150]], auxFormatDienteCaras);
      //caraInferior
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pci.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '6';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pci.sp00 = svg.polygon(dienteGroup, [[60, 210], [120, 210], [150, 240], [30, 240]], auxFormatDienteCaras);
      //caraDerecha
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pcd.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '6';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pcd.sp00 = svg.polygon(dienteGroup, [[120, 150], [150, 120], [150, 240], [120, 210]], auxFormatDienteCaras);
      //caraIzquierda
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pcz.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '6';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pcz.sp00 = svg.polygon(dienteGroup, [[30, 120], [60, 150], [60, 210], [30, 240]], auxFormatDienteCaras);
      //caraCentral
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pcc.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '8';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pcc.sp00 = svg.polygon(dienteGroup, [[60, 150], [120, 150], [120, 210], [60, 210]], auxFormatDienteCaras);
      //---------------------------------------------------- SELECT - ALL-OBJ --------------------------------------
      auxFormatDienteCaras['class'] = defaultFormatDienteCaras['class'];
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = 'white';
      auxFormatDienteCaras['stroke-width'] = '4';
      auxFormatDienteCaras['fill-opacity'] = '0.1';
      auxFormatDienteCaras['stroke-opacity'] = '0.1';
      //caraSuperior
      auxFormatDienteCaras['data-cara'] = 'pcs';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pcs.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [150, 120], [120, 150], [60, 150]], auxFormatDienteCaras);
      //--implementa cara superior partes

      //caraInferior
      auxFormatDienteCaras['data-cara'] = 'pci';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pci.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[60, 210], [120, 210], [150, 240], [30, 240]], auxFormatDienteCaras);
      //--implementa cara inferior partes

      //caraDerecha
      auxFormatDienteCaras['data-cara'] = 'pcd';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pcd.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[120, 150], [150, 120], [150, 240], [120, 210]], auxFormatDienteCaras);
      //--implementa cara derecha partes

      //caraIzquierda
      auxFormatDienteCaras['data-cara'] = 'pcz';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pcz.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[30, 120], [60, 150], [60, 210], [30, 240]], auxFormatDienteCaras);
      //--implementa cara izquierda partes

      //caraCentral
      auxFormatDienteCaras['data-cara'] = 'pcc';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pcc.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[60, 150], [120, 150], [120, 210], [60, 210]], auxFormatDienteCaras);
      //--implementa cara central partes

    } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
      //---------------------------------------------------- opc31 - sellantes --------------------------------------
      auxFormatDienteCaras['fill-opacity'] = '0.95';
      //caraSuperior
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pcs.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '6';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pcs.sp00 = svg.polygon(dienteGroup, [[30, 0], [150, 0], [120, 30], [60, 30]], auxFormatDienteCaras);
      //caraInferior
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pci.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '6';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pci.sp00 = svg.polygon(dienteGroup, [[60, 90], [120, 90], [150, 120], [30, 120]], auxFormatDienteCaras);
      //caraDerecha
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pcd.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '6';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pcd.sp00 = svg.polygon(dienteGroup, [[120, 30], [150, 0], [150, 120], [120, 90]], auxFormatDienteCaras);
      //caraIzquierda
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pcz.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '6';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pcz.sp00 = svg.polygon(dienteGroup, [[30, 0], [60, 30], [60, 90], [30, 120]], auxFormatDienteCaras);
      //caraCentral
      auxFormatDienteCaras['stroke'] = defaultFormatDienteCaras['stroke'];
      if(propDent.opc.opc31.pcc.sp00.estado === 'S'){
        auxFormatDienteCaras['fill'] = 'white';
        auxFormatDienteCaras['stroke'] = 'blue';
        auxFormatDienteCaras['stroke-width'] = '8';
      }else{
        auxFormatDienteCaras['fill'] = 'none';
        auxFormatDienteCaras['stroke'] = 'none';
      }
      objData.S7.opc31.pcc.sp00 = svg.polygon(dienteGroup, [[60, 30], [120, 30], [120, 90], [60, 90]], auxFormatDienteCaras);
      //---------------------------------------------------- SELECT - ALL-OBJ --------------------------------------
      auxFormatDienteCaras['class'] = defaultFormatDienteCaras['class'];
      auxFormatDienteCaras['fill'] = 'white';
      auxFormatDienteCaras['stroke'] = 'white';
      auxFormatDienteCaras['stroke-width'] = '4';
      auxFormatDienteCaras['fill-opacity'] = '0.1';
      auxFormatDienteCaras['stroke-opacity'] = '0.1';
      //caraSuperior
      auxFormatDienteCaras['data-cara'] = 'pcs';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pcs.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[30, 0], [150, 0], [120, 30], [60, 30]], auxFormatDienteCaras);
      //---implementa cara superior partes

      //caraInferior
      auxFormatDienteCaras['data-cara'] = 'pci';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pci.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[60, 90], [120, 90], [150, 120], [30, 120]], auxFormatDienteCaras);
      //---implementa cara superior partes

      //caraDerecha
      auxFormatDienteCaras['data-cara'] = 'pcd';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pcd.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[120, 30], [150, 0], [150, 120], [120, 90]], auxFormatDienteCaras);
      //---implementa cara superior partes

      //caraIzquierda
      auxFormatDienteCaras['data-cara'] = 'pcz';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pcz.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[30, 0], [60, 30], [60, 90], [30, 120]], auxFormatDienteCaras);
      //---implementa cara izquierda partes

      //caraCentral
      auxFormatDienteCaras['data-cara'] = 'pcc';
      auxFormatDienteCaras['data-parte'] = 'sp00';
      auxFormatDienteCaras['data-est31'] = propDent.opc.opc31.pcc.sp00.estado;
      //objData.S7.base = svg.polygon(dienteGroup, [[60, 30], [120, 30], [120, 90], [60, 90]], auxFormatDienteCaras);
      //---implementa cara izquierda partes

    }
    //---- --------------------------------- implementa sellanate -FIN ---------------------------------------------------------------------

    //S
    if (propDent.opc.opc34.hallazgo) {
      if (propDent.opc.opc34.ubicacion === 'D') {
        if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
          objData.S7.opc34 = svg.ellipse(dienteGroup, 180, 30, 36, 26, defaultSuperNumerarioPolygon);
          objData.S7.opc34 = svg.text(dienteGroup, 172, 38, 'S', defaultTextSuperNumerario);
        } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
          objData.S7.opc34 = svg.ellipse(dienteGroup, 180, 210, 36, 26, defaultSuperNumerarioPolygon);
          objData.S7.opc34 = svg.text(dienteGroup, 172, 218, 'S', defaultTextSuperNumerario);
        }
      }
    }
    //RR
    if (propDent.opc.opc28.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S7.opc28 = svg.rect(dienteGroup, 52.5, 22.5, 75, 45, 5, 5, defaultRRLine);
        objData.S7.opc28 = svg.text(dienteGroup, 70, 55, 'R R', defaultRRText);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S7.opc28 = svg.rect(dienteGroup, 52.5, 172.5, 75, 45, 5, 5, defaultRRLine);
        objData.S7.opc28 = svg.text(dienteGroup, 70, 205, 'R R', defaultRRText);
      }
    }
    //Erupcion
    if (propDent.opc.opc10.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S7.opc10 = svg.polyline(dienteGroup, [[120, 0], [60, 37.5], [120, 75], [60, 112.5], [120, 150], [60, 187.5], [90, 206.25], [90, 255]], defaultIndicacionlineBlue);
        objData.S8.opc10 = svg.polyline(dienteGroup, [[50, 230], [90, 255], [130, 230]], defaultIndicacionlineBlue);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S7.opc10 = svg.polyline(dienteGroup, [[90, -15], [90, 33.75], [60, 52.5], [120, 90], [60, 127.5], [120, 165], [60, 202.5], [120, 240]], defaultIndicacionlineBlue);
        objData.S8.opc10 = svg.polyline(dienteGroup, [[50, 10], [90, -15], [130, 10]], defaultIndicacionlineBlue);
      } else {
        objData.S7.opc10 = svg.polyline(dienteGroup, [[120, 0], [60, 37.5], [120, 75], [60, 112.5], [120, 150], [60, 187.5], [90, 206.25], [90, 255]], defaultIndicacionlineBlue);
        objData.S8.opc10 = svg.polyline(dienteGroup, [[50, 230], [90, 255], [130, 230]], defaultIndicacionlineBlue);
      }
    }
    //Diastema
    if (propDent.opc.opc06.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        if (propDent.opc.opc06.afectacion === 'D') {
          objData.S7.opc06 = svg.path(dienteGroup, 'M150 45 C 180 90, 180 210, 150 255', defaultIndicacionlineBlue);
        } else if (propDent.opc.opc06.afectacion === 'Z') {
          objData.S7.opc06 = svg.path(dienteGroup, 'M30 45 C 0 90, 0 210, 30 255', defaultIndicacionlineBlue);
        }
      }else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        if (propDent.opc.opc06.afectacion === 'D') {
          objData.S7.opc06 = svg.path(dienteGroup, 'M150 -15 C 180 30, 180 150, 150 195', defaultIndicacionlineBlue);
        } else if (propDent.opc.opc06.afectacion === 'Z') {
          objData.S7.opc06 = svg.path(dienteGroup, 'M30 -15 C 0 30, 0 150, 30 195', defaultIndicacionlineBlue);
        }
      }
    }
    //Perno/Espigo
    if (propDent.opc.opc24.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        if (propDent.opc.opc24.estado === 'B') {
          objData.S7.opc24 = svg.polyline(dienteGroup, [[90, 15], [90, 135]], defaultIndicacionlineBlue);
          objData.S7.opc24 = svg.rect(dienteGroup, 45, 135, 90, 90, 2, 2, defaultIndicacionlineBlue);
        } else if (propDent.opc.opc24.estado === 'M') {
          objData.S7.opc24 = svg.polyline(dienteGroup, [[90, 15], [90, 135]], defaultIndicacionlineRed);
          objData.S7.opc24 = svg.rect(dienteGroup, 45, 135, 90, 90, 2, 2, defaultIndicacionlineRed);
        }
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        if (propDent.opc.opc24.estado === 'B') {
          objData.S7.opc24 = svg.polyline(dienteGroup, [[90, 105], [90, 225]], defaultIndicacionlineBlue);
          objData.S7.opc24 = svg.rect(dienteGroup, 45, 15, 90, 90, 2, 2, defaultIndicacionlineBlue);
        } else if (propDent.opc.opc24.estado === 'M') {
          objData.S7.opc24 = svg.polyline(dienteGroup, [[90, 105], [90, 225]], defaultIndicacionlineRed);
          objData.S7.opc24 = svg.rect(dienteGroup, 45, 15, 90, 90, 2, 2, defaultIndicacionlineRed);
        }
      }
    }
    //Ausente
    if (propDent.opc.opc07.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S7.opc07 = svg.polyline(dienteGroup, [[15, 0], [165, 255]], defaultIndicacionDienteAusente);
        objData.S8.opc07 = svg.polyline(dienteGroup, [[165, 0], [15, 255]], defaultIndicacionDienteAusente);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S7.opc07 = svg.polyline(dienteGroup, [[15, -15], [165, 240]], defaultIndicacionDienteAusente);
        objData.S8.opc07 = svg.polyline(dienteGroup, [[165, -15], [15, 240]], defaultIndicacionDienteAusente);
      } else {
        objData.S7.opc07 = svg.polyline(dienteGroup, [[15, 0], [165, 255]], defaultIndicacionDienteAusente);
        objData.S8.opc07 = svg.polyline(dienteGroup, [[165, 0], [15, 255]], defaultIndicacionDienteAusente);
      }
    }
    //tratamiento pulpar
    if (propDent.opc.opc36.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S7.opc36 = svg.polyline(dienteGroup, [[90, 15], [90, 135]], defaultIndicacionTratmientoPulpar);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S7.opc36 = svg.polyline(dienteGroup, [[90, 225], [90, 105]], defaultIndicacionTratmientoPulpar);
      }
    }
    //Corona Definitiva
    if (propDent.opc.opc04.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S7.opc04 = svg.ellipse(dienteGroup, 90, 180, 88, 72, defaultIndicacionlineBlue);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S7.opc04 = svg.ellipse(dienteGroup, 90, 60, 88, 72, defaultIndicacionlineBlue);
      } else {
        objData.S7.opc04 = svg.ellipse(dienteGroup, 90, 180, 88, 72, defaultIndicacionlineBlue);
      }
    }
    //Corona Temporal
    if (propDent.opc.opc05.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S7.opc05 = svg.ellipse(dienteGroup, 90, 180, 88, 72, defaultIndicacionlineRed);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S7.opc05 = svg.ellipse(dienteGroup, 90, 60, 88, 72, defaultIndicacionlineRed);
      } else {
        objData.S7.opc05 = svg.ellipse(dienteGroup, 90, 180, 88, 72, defaultIndicacionlineRed);
      }
    }
    //Edéntulo Total
    if (propDent.opc.opc14.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S7.opc14 = svg.polyline(dienteGroup, [[0, 180], [180, 180]], defaultLineBlue);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S7.opc14 = svg.polyline(dienteGroup, [[0, 60], [180, 60]], defaultLineBlue);
      }
    }
     //Fractura
    if (propDent.opc.opc15.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        if(propDent.opc.opc15.direccionubicacion === 'CZSDI'){
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 135], [165, 225]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'CZIDS'){
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 225], [165, 135]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'CRZSDI'){
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 15], [165, 225]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'CRZIDS'){
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 225], [165, 15]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'RZSDI'){
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 15], [165, 105]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'RZIDS'){
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 105], [165, 15]], defaultIndicacionlineRed);
        }
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        if(propDent.opc.opc15.direccionubicacion === 'CZSDI'){
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 15], [165, 105]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'CZIDS'){
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 105], [165, 15]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'CRZSDI'){
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 15], [165, 225]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'CRZIDS'){
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 225], [165, 15]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'RZSDI'){
          objData.S7.opc15 = svg.polyline(dienteGroup, [[15, 105], [165, 225]], defaultIndicacionlineRed);
        }else if(propDent.opc.opc15.direccionubicacion === 'RZIDS'){
          objData.S8.opc15 = svg.polyline(dienteGroup, [[15, 225], [165, 105]], defaultIndicacionlineRed);
        }
      }
    }
    //Prótesis Total
    if (propDent.opc.opc27.hallazgo) {
      if (propDent.opc.opc27.estado === 'B') {
        objData.S7.opc27 = svg.polyline(dienteGroup, [[0, 172], [180, 172]], defaultLineBlue);
        objData.S7.opc27 = svg.polyline(dienteGroup, [[0, 188], [180, 188]], defaultLineBlue);
      } else if (propDent.opc.opc27.estado === 'M') {
        objData.S7.opc27 = svg.polyline(dienteGroup, [[0, 172], [180, 172]], defaultLineRed);
        objData.S7.opc27 = svg.polyline(dienteGroup, [[0, 188], [180, 188]], defaultLineRed);
      }
    }
    //---->('S8')
    dienteGroup = svg.group(parentGroup, {transform: 'translate(' + cfgSec.S8.ubic[(propDent.position)].x + ',' + cfgSec.S8.ubic[(propDent.position)].y + ')'});
    objData.S8.base = svg.polygon(dienteGroup, [[0, 0], [180, 0], [180, 120], [0, 120]], defaultCuadrante);
    if (propDent.opc.opc12.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S8.opc12 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc12 = svg.polygon(dienteGroup, [[75, 80], [90, 90], [105, 80]], defaultIndicacionPolygonBlue);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S8.opc12 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc12 = svg.polygon(dienteGroup, [[75, 40], [90, 30], [105, 40]], defaultIndicacionPolygonBlue);
      } else {
        objData.S8.opc12 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc12 = svg.polygon(dienteGroup, [[75, 80], [90, 90], [105, 80]], defaultIndicacionPolygonBlue);
      }
    }
    if (propDent.opc.opc13.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S8.opc13 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc13 = svg.polygon(dienteGroup, [[75, 40], [90, 30], [105, 40]], defaultIndicacionPolygonBlue);
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S8.opc13 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc13 = svg.polygon(dienteGroup, [[75, 80], [90, 90], [105, 80]], defaultIndicacionPolygonBlue);
      } else {
        objData.S8.opc13 = svg.polyline(dienteGroup, [[90, 30], [90, 90]], defaultIndicacionlineBlue);
        objData.S8.opc13 = svg.polygon(dienteGroup, [[75, 40], [90, 30], [105, 40]], defaultIndicacionPolygonBlue);
      }
    }
    if (propDent.opc.opc17.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S8.opc17 = svg.path(dienteGroup, 'M30 80 C 60 105, 120 105, 150 80', defaultIndicacionlineBlue);
        if (propDent.opc.opc17.giro === 'D') {
          objData.S8.opc17 = svg.polyline(dienteGroup, [[127, 79], [150, 80], [138, 101]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc17.giro === 'Z') {
          objData.S8.opc17 = svg.polyline(dienteGroup, [[53, 79], [30, 80], [42, 101]], defaultIndicacionlineBlue);
        }
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S8.opc17 = svg.path(dienteGroup, 'M30 40 C 60 15, 120 15, 150 40', defaultIndicacionlineBlue);
        if (propDent.opc.opc17.giro === 'D') {
          objData.S8.opc17 = svg.polyline(dienteGroup, [[127, 41], [150, 40], [138, 19]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc17.giro === 'Z') {
          objData.S8.opc17 = svg.polyline(dienteGroup, [[53, 41], [30, 40], [42, 19]], defaultIndicacionlineBlue);
        }
      }
    }
    if (propDent.opc.opc22.hallazgo) {
      if ((propDent.position === 'SP') || (propDent.position === 'ST')) {
        objData.S8.opc22 = svg.polyline(dienteGroup, [[30, 20], [150, 20]], defaultIndicacionlineBlue);
        if (propDent.opc.opc22.direccion === 'D') {
          objData.S8.opc22 = svg.polyline(dienteGroup, [[135, 5], [150, 20], [135, 35]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc22.direccion === 'Z') {
          objData.S8.opc22 = svg.polyline(dienteGroup, [[45, 5], [30, 20], [45, 35]], defaultIndicacionlineBlue);
        }
      } else if ((propDent.position === 'IP') || (propDent.position === 'IT')) {
        objData.S8.opc22 = svg.polyline(dienteGroup, [[30, 100], [150, 100]], defaultLineBlue);
        if (propDent.opc.opc22.direccion === 'D') {
          objData.S8.opc22 = svg.polyline(dienteGroup, [[135, 85], [150, 100], [135, 115]], defaultIndicacionlineBlue);
        } else if (propDent.opc.opc22.direccion === 'Z') {
          objData.S8.opc22 = svg.polyline(dienteGroup, [[45, 85], [30, 100], [45, 115]], defaultIndicacionlineBlue);
        }
      }
    }
  };
  fnViewUcOdontogram();
}
