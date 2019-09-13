/**
 * @fileoverview ucOdontgramDienteGrafModel Modelo: representación gráfica del modelo piezas denatarias (imagen) de para generar
 * odontograma (para formato de imagen svg)
 *
 * @author Cesar Ac <cesarunipe@gmail.com>
 * @version 0.1
 */

/*
@dict  de variables <gl>_<gdr>_<sz4>_<z>
<gl>: variables (GL) globales, otros valores admisibles son (lc)
<gdr>: variable que se refiere a lo (G)gráfico (D)diente (R)raiz
<sz4>:
<z>:
Notaciones para posiciones:
Z: izquierda
D: Derecha
S: Superior
I: Inferior
Notación de modelo de diente:
1: modelo 1. Aplica para piezas dentarias inferiores como superiores (incisivos y canino)
2: modelo 2. Aplica para piezas dentarias inferior (premolares) y superior (primer premolar) 
3: modelo 3. Aplica para piezas dentarias superior (segundo premolar), para inferior (los molares)
4: modelo 4. Aplica para piezas dentarias superior molares.
Notación para sectores de caras:
Z: izquierda
D: derecha
U: única
*/
var ucOdontgramDienteGrafModel = {
  "sz": {
    "1": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [90, 0], [150, 120]],
            "detalle": "Única"
          }
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [150, 120], [120, 180], [60, 180]],
                "detalle": "contorno completo",
              },
            },
            "sectores": {
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [70, 120], [70, 180], [60, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 120], [110, 120], [110, 180], [70, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 120], [150, 120], [120, 180], [110, 180]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 180], [150, 120], [150, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 120], [150, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 180], [150, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 180], [120, 180], [150, 240], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 180], [120, 180], [150, 240], [110, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 180], [110, 180], [110, 240], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 240], [60, 180], [70, 180], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "sc": {
                "nombre": "surco central",
                "codigo": "lsc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[86, 182], [94, 182], [94, 238], [86, 238]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [60, 180], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [60, 180], [30, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dl",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 180], [60, 180], [30, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "lc": {
            "nombre": "lingual central",
            "codigo": "lc",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[86, 182], [94, 182], [94, 238], [86, 238]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
    "2": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [60, 0], [105, 120]],
            "detalle": "lado Izquierda"
          },
          2: {
            "tipo": "polygon",
            "coordenadas": [[75, 120], [120, 0], [150, 120]],
            "detalle": "lado Derecha",
            "attr": {
              "stroke-dasharray": "6,6",
            },
          }
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [150, 120], [120, 150], [60, 150]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [70, 120], [70, 150], [60, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 120], [110, 120], [110, 150], [70, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 120], [150, 120], [120, 150], [110, 150]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 150], [150, 120], [150, 240], [120, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 150], [150, 120], [150, 180], [120, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 180], [150, 240], [120, 210]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 210], [120, 210], [150, 240], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 210], [120, 210], [150, 240], [110, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 210], [110, 210], [110, 240], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 240], [60, 210], [70, 210], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [60, 150], [60, 210], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [60, 150], [60, 180], [30, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 180], [60, 180], [60, 210], [30, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 150], [120, 150], [120, 210], [60, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 150], [90, 150], [90, 180], [60, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 150], [120, 150], [120, 180], [90, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 180], [120, 180], [120, 210], [90, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 180], [90, 180], [90, 210], [60, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 178], [88, 178], [88, 182], [62, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[92, 178], [118, 178], [118, 182], [92, 182]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 178], [88, 178], [88, 182], [62, 182]],
                "detalle": "sector"
              },
            },
          },
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[92, 178], [118, 178], [118, 182], [92, 182]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
    "3": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [90, 0], [150, 120]],
            "detalle": "Única"
          }
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [150, 120], [120, 150], [60, 150]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [70, 120], [70, 150], [60, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 120], [110, 120], [110, 150], [70, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 120], [150, 120], [120, 150], [110, 150]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 150], [150, 120], [150, 240], [120, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 150], [150, 120], [150, 180], [120, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 180], [150, 240], [120, 210]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 210], [120, 210], [150, 240], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 210], [120, 210], [150, 240], [110, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 210], [110, 210], [110, 240], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 240], [60, 210], [70, 210], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [60, 150], [60, 210], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [60, 150], [60, 180], [30, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 180], [60, 180], [60, 210], [30, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 150], [120, 150], [120, 210], [60, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 150], [90, 150], [90, 180], [60, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 150], [120, 150], [120, 180], [90, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 180], [120, 180], [120, 210], [90, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 180], [90, 180], [90, 210], [60, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 178], [88, 178], [88, 182], [62, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[92, 178], [118, 178], [118, 182], [92, 182]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 178], [88, 178], [88, 182], [62, 182]],
                "detalle": "sector"
              },
            },
          },
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[92, 178], [118, 178], [118, 182], [92, 182]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
    "4": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [50, 0], [80, 120]],
            "detalle": "Lado izquierdo"
          },
          2: {
            "tipo": "polygon",
            "coordenadas": [[100, 120], [130, 0], [150, 120]],
            "detalle": "Lado derecho"
          },
          3: {
            "tipo": "polygon",
            "coordenadas": [[65, 120], [90, 0], [115, 120]],
            "detalle": "Lado central"
          },
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [150, 120], [120, 150], [60, 150]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [70, 120], [70, 150], [60, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 120], [110, 120], [110, 150], [70, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 120], [150, 120], [120, 150], [110, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "sd": {
                "nombre": "surco distal",
                "codigo": "sd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[68, 122], [72, 122], [72, 148], [68, 148]],
                    "detalle": "sector"
                  }
                }
              },
              "sm": {
                "nombre": "surco mesial",
                "codigo": "sm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[108, 122], [112, 122], [112, 148], [108, 148]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 150], [150, 120], [150, 240], [120, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 150], [150, 120], [150, 180], [120, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 180], [150, 240], [120, 210]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 210], [120, 210], [150, 240], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 210], [120, 210], [150, 240], [110, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 210], [110, 210], [110, 240], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 240], [60, 210], [70, 210], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "sd": {
                "nombre": "surco distal",
                "codigo": "lsd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[68, 212], [72, 212], [72, 238], [68, 238]],
                    "detalle": "sector"
                  }
                }
              },
              "sm": {
                "nombre": "surco mesial",
                "codigo": "lsm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[108, 212], [112, 212], [112, 238], [108, 238]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [60, 150], [60, 210], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [60, 150], [60, 180], [30, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 180], [60, 180], [60, 210], [30, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 150], [120, 150], [120, 210], [60, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 150], [80, 150], [80, 180], [60, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "vc": {
                "nombre": "oclusal vestibular central",
                "codigo": "ovc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[80, 150], [100, 150], [100, 180], [80, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[100, 150], [120, 150], [120, 180], [100, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[100, 180], [120, 180], [120, 210], [100, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "lc": {
                "nombre": "oclusal lingual central",
                "codigo": "olc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[80, 180], [100, 180], [100, 210], [80, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 180], [80, 180], [80, 210], [60, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "svd": {
                "nombre": "surco vestibular distal",
                "codigo": "osvd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[78, 152], [82, 152], [82, 176], [78, 176]],
                    "detalle": "sector"
                  }
                }
              },
              "svm": {
                "nombre": "surco vestibular distal",
                "codigo": "osvm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[98, 152], [102, 152], [102, 176], [98, 176]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 178], [78, 178], [78, 182], [62, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "scc": {
                "nombre": "surco central central",
                "codigo": "oscc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[82, 178], [98, 178], [98, 182], [82, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[102, 178], [118, 178], [118, 182], [102, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "sld": {
                "nombre": "surco lingual distal",
                "codigo": "osld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[78, 184], [82, 184], [82, 208], [78, 208]],
                    "detalle": "sector"
                  }
                }
              },
              "slm": {
                "nombre": "surco lingual mesial",
                "codigo": "oslm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[98, 182], [102, 182], [102, 208], [98, 208]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "vd": {
            "nombre": "vestibular distal",
            "codigo": "vd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[68, 122], [72, 122], [72, 148], [68, 148]],
                "detalle": "sector"
              },
            },
          },
          "vm": {
            "nombre": "vestibular mesial",
            "codigo": "vm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[108, 122], [112, 122], [112, 148], [108, 148]],
                "detalle": "sector"
              },
            },
          },
          "ovd": {
            "nombre": "oclusal vestibular distal",
            "codigo": "ovd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[78, 152], [82, 152], [82, 176], [78, 176]],
                "detalle": "sector"
              },
            },
          },
          "ovm": {
            "nombre": "oclusal vestibular mesial",
            "codigo": "ovm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[98, 152], [102, 152], [102, 176], [98, 176]],
                "detalle": "sector"
              },
            },
          },
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 178], [78, 178], [78, 182], [62, 182]],
                "detalle": "sector"
              },
            },
          },
          "occ": {
            "nombre": "oclusal central central",
            "codigo": "occ",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[82, 178], [98, 178], [98, 182], [82, 182]],
                "detalle": "sector"
              },
            },
          },
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[102, 178], [118, 178], [118, 182], [102, 182]],
                "detalle": "sector"
              },
            },
          },
          "old": {
            "nombre": "oclusal lingual distal",
            "codigo": "old",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[78, 184], [82, 184], [82, 208], [78, 208]],
                "detalle": "sector"
              },
            },
          },
          "olm": {
            "nombre": "oclusal lingual mesial",
            "codigo": "olm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[98, 182], [102, 182], [102, 208], [98, 208]],
                "detalle": "sector"
              },
            },
          },
          "ld": {
            "nombre": "lingual distal",
            "codigo": "ld",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[68, 212], [72, 212], [72, 238], [68, 238]],
                "detalle": "sector"
              },
            },
          },
          "lm": {
            "nombre": "lingual mesial",
            "codigo": "lm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[108, 212], [112, 212], [112, 238], [108, 238]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
  },
  "sd": {
    "1": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [90, 0], [150, 120]],
            "detalle": "Única"
          }
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [150, 120], [120, 180], [60, 180]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [70, 120], [70, 180], [60, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 120], [110, 120], [110, 180], [70, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 120], [150, 120], [120, 180], [110, 180]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 180], [150, 120], [150, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 120], [150, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 180], [150, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 180], [120, 180], [150, 240], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "lingual distal",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 180], [120, 180], [150, 240], [110, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 180], [110, 180], [110, 240], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "lingual mesial",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 240], [60, 180], [70, 180], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "sc": {
                "nombre": "surco central",
                "codigo": "lsc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[86, 182], [94, 182], [94, 238], [86, 238]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [60, 180], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [60, 180], [30, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 180], [60, 180], [30, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "lc": {
            "nombre": "lingual central",
            "codigo": "lc",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[86, 182], [94, 182], [94, 238], [86, 238]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
    "2": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[75, 120], [120, 0], [150, 120]],
            "detalle": "lado Derecha"
          },
          2: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [60, 0], [105, 120]],
            "detalle": "lado Izquierda",
            "attr": {
              "stroke-dasharray": "6,6",
            },
          },
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [150, 120], [120, 150], [60, 150]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [70, 120], [70, 150], [60, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 120], [110, 120], [110, 150], [70, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 120], [150, 120], [120, 150], [110, 150]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 150], [150, 120], [150, 240], [120, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 150], [150, 120], [150, 180], [120, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 180], [150, 240], [120, 210]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 210], [120, 210], [150, 240], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "lingual distal",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 210], [120, 210], [150, 240], [110, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 210], [110, 210], [110, 240], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "lingual mesial",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 240], [60, 210], [70, 210], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [60, 150], [60, 210], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [60, 150], [60, 180], [30, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 180], [60, 180], [60, 210], [30, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 150], [120, 150], [120, 210], [60, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 150], [90, 150], [90, 180], [60, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 150], [120, 150], [120, 180], [90, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 180], [120, 180], [120, 210], [90, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 180], [90, 180], [90, 210], [60, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[92, 178], [118, 178], [118, 182], [92, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 178], [88, 178], [88, 182], [62, 182]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 178], [88, 178], [88, 182], [62, 182]],
                "detalle": "sector"
              },
            },
          },
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[92, 178], [118, 178], [118, 182], [92, 182]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
    "3": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [90, 0], [150, 120]],
            "detalle": "Única"
          },
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [150, 120], [120, 150], [60, 150]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [70, 120], [70, 150], [60, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 120], [110, 120], [110, 150], [70, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 120], [150, 120], [120, 150], [110, 150]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 150], [150, 120], [150, 240], [120, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 150], [150, 120], [150, 180], [120, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 180], [150, 240], [120, 210]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 210], [120, 210], [150, 240], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "lingual distal",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 210], [120, 210], [150, 240], [110, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 210], [110, 210], [110, 240], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "lingual mesial",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 240], [60, 210], [70, 210], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [60, 150], [60, 210], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [60, 150], [60, 180], [30, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 180], [60, 180], [60, 210], [30, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 150], [120, 150], [120, 210], [60, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 150], [90, 150], [90, 180], [60, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 150], [120, 150], [120, 180], [90, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 180], [120, 180], [120, 210], [90, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 180], [90, 180], [90, 210], [60, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[92, 178], [118, 178], [118, 182], [92, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 178], [88, 178], [88, 182], [62, 182]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 178], [88, 178], [88, 182], [62, 182]],
                "detalle": "sector"
              },
            },
          },
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[92, 178], [118, 178], [118, 182], [92, 182]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
    "4": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [50, 0], [80, 120]],
            "detalle": "Lado izquierdo"
          },
          2: {
            "tipo": "polygon",
            "coordenadas": [[100, 120], [130, 0], [150, 120]],
            "detalle": "Lado derecho"
          },
          3: {
            "tipo": "polygon",
            "coordenadas": [[65, 120], [90, 0], [115, 120]],
            "detalle": "Lado central"
          },
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [150, 120], [120, 150], [60, 150]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [70, 120], [70, 150], [60, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 120], [110, 120], [110, 150], [70, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 120], [150, 120], [120, 150], [110, 150]],
                    "detalle": "sector"
                  }
                }
              },
              "sd": {
                "nombre": "surco distal",
                "codigo": "sd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[108, 122], [112, 122], [112, 148], [108, 148]],
                    "detalle": "sector"
                  }
                }
              },
              "sm": {
                "nombre": "surco mesial",
                "codigo": "sm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[68, 122], [72, 122], [72, 148], [68, 148]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 150], [150, 120], [150, 240], [120, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 150], [150, 120], [150, 180], [120, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 180], [150, 180], [150, 240], [120, 210]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 210], [120, 210], [150, 240], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "lingual distal",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 210], [120, 210], [150, 240], [110, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 210], [110, 210], [110, 240], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "lingual mesial",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 240], [60, 210], [70, 210], [70, 240]],
                    "detalle": "sector"
                  }
                }
              },
              "sd": {
                "nombre": "surco distal",
                "codigo": "lsd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[108, 212], [112, 212], [112, 238], [108, 238]],
                    "detalle": "sector"
                  }
                }
              },
              "sm": {
                "nombre": "surco mesial",
                "codigo": "lsm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[68, 212], [72, 212], [72, 238], [68, 238]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 120], [60, 150], [60, 210], [30, 240]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 120], [60, 150], [60, 180], [30, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 180], [60, 180], [60, 210], [30, 240]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 150], [120, 150], [120, 210], [60, 210]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 150], [80, 150], [80, 180], [60, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "vc": {
                "nombre": "oclusal vestibular central",
                "codigo": "ovc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[80, 150], [100, 150], [100, 180], [80, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[100, 150], [120, 150], [120, 180], [100, 180]],
                    "detalle": "sector"
                  }
                }
              },
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[100, 180], [120, 180], [120, 210], [100, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "lc": {
                "nombre": "oclusal lingual central",
                "codigo": "olc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[80, 180], [100, 180], [100, 210], [80, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 180], [80, 180], [80, 210], [60, 210]],
                    "detalle": "sector"
                  }
                }
              },
              "svd": {
                "nombre": "surco vestibular distal",
                "codigo": "osvd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[98, 152], [102, 152], [102, 176], [98, 176]],
                    "detalle": "sector"
                  }
                }
              },
              "svm": {
                "nombre": "surco vestibular distal",
                "codigo": "osvm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[78, 152], [82, 152], [82, 176], [78, 176]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[102, 178], [118, 178], [118, 182], [102, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "scc": {
                "nombre": "surco central central",
                "codigo": "oscc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[82, 178], [98, 178], [98, 182], [82, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 178], [78, 178], [78, 182], [62, 182]],
                    "detalle": "sector"
                  }
                }
              },
              "sld": {
                "nombre": "surco lingual distal",
                "codigo": "osld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[98, 182], [102, 182], [102, 208], [98, 208]],
                    "detalle": "sector"
                  }
                }
              },
              "slm": {
                "nombre": "surco lingual mesial",
                "codigo": "oslm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[78, 184], [82, 184], [82, 208], [78, 208]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "vm": {
            "nombre": "vestibular mesial",
            "codigo": "vm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[68, 122], [72, 122], [72, 148], [68, 148]],
                "detalle": "sector"
              },
            },
          },
          "vd": {
            "nombre": "vestibular distal",
            "codigo": "vd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[108, 122], [112, 122], [112, 148], [108, 148]],
                "detalle": "sector"
              },
            },
          },
          "ovm": {
            "nombre": "oclusal vestibular mesial",
            "codigo": "ovm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[78, 152], [82, 152], [82, 176], [78, 176]],
                "detalle": "sector"
              },
            },
          },
          "ovd": {
            "nombre": "oclusal vestibular distal",
            "codigo": "ovd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[98, 152], [102, 152], [102, 176], [98, 176]],
                "detalle": "sector"
              },
            },
          },
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 178], [78, 178], [78, 182], [62, 182]],
                "detalle": "sector"
              },
            },
          },
          "occ": {
            "nombre": "oclusal central central",
            "codigo": "occ",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[82, 178], [98, 178], [98, 182], [82, 182]],
                "detalle": "sector"
              },
            },
          },
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[102, 178], [118, 178], [118, 182], [102, 182]],
                "detalle": "sector"
              },
            },
          },
          "olm": {
            "nombre": "oclusal lingual mesial",
            "codigo": "olm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[78, 184], [82, 184], [82, 208], [78, 208]],
                "detalle": "sector"
              },
            },
          },
          "old": {
            "nombre": "oclusal lingual distal",
            "codigo": "old",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[98, 184], [102, 184], [102, 208], [98, 208]],
                "detalle": "sector"
              },
            },
          },
          "lm": {
            "nombre": "lingual mesial",
            "codigo": "lm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[68, 212], [72, 212], [72, 238], [68, 238]],
                "detalle": "sector"
              },
            },
          },
          "ld": {
            "nombre": "lingual distal",
            "codigo": "ld",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[108, 212], [112, 212], [112, 238], [108, 238]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
  },
  "iz": {
    "1": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [150, 120], [90, 240]],
            "detalle": "Única"
          }
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [150, 0], [120, 60], [60, 60]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [70, 0], [70, 60], [60, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 0], [110, 0], [110, 60], [70, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 0], [150, 0], [120, 60], [110, 60]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 60], [150, 0], [150, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 60], [150, 0], [150, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 60], [150, 60], [150, 120]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 60], [120, 60], [150, 120], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 60], [120, 60], [150, 120], [110, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 60], [110, 60], [110, 120], [70, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 60], [70, 60], [70, 120], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [60, 60], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 60], [60, 60], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [60, 60], [30, 60]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
    },
    "2": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [150, 120], [90, 240]],
            "detalle": "Única"
          },
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [150, 0], [120, 30], [60, 30]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [70, 0], [70, 30], [60, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 0], [110, 0], [110, 30], [70, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 0], [150, 0], [120, 30], [110, 30]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 30], [150, 0], [150, 120], [120, 90]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 30], [150, 0], [150, 60], [120, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 60], [150, 60], [150, 120], [120, 90]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 90], [120, 90], [150, 120], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 90], [120, 90], [150, 120], [110, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 90], [110, 90], [110, 120], [70, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 90], [70, 90], [70, 120], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [60, 30], [60, 90], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 60], [60, 60], [60, 90], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [60, 30], [60, 60], [30, 60]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 30], [120, 30], [120, 90], [60, 90]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 30], [90, 30], [90, 60], [60, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 30], [120, 30], [120, 60], [90, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 60], [120, 60], [120, 90], [90, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 60], [90, 60], [90, 90], [60, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 58], [88, 58], [88, 62], [62, 62]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[92, 58], [118, 58], [118, 62], [92, 62]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 58], [88, 58], [88, 62], [62, 62]],
                "detalle": "sector"
              },
            },
          },
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[92, 58], [118, 58], [118, 62], [92, 62]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
    "3": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [60, 240], [105, 120]],
            "detalle": "Lado izquierdo"
          },
          2: {
            "tipo": "polygon",
            "coordenadas": [[75, 120], [150, 120], [120, 240]],
            "detalle": "Lado derecho"
          },
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [150, 0], [120, 30], [60, 30]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [70, 0], [70, 30], [60, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 0], [110, 0], [110, 30], [70, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 0], [150, 0], [120, 30], [110, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "sd": {
                "nombre": "surco distal",
                "codigo": "lsd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[68, 2], [72, 2], [72, 28], [68, 28]],
                    "detalle": "sector"
                  }
                }
              },
              "sm": {
                "nombre": "surco mesial",
                "codigo": "lsm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[108, 2], [112, 2], [112, 28], [108, 28]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 30], [150, 0], [150, 120], [120, 90]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 30], [150, 0], [150, 60], [120, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 60], [150, 60], [150, 120], [120, 90]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 90], [120, 90], [150, 120], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 90], [120, 90], [150, 120], [110, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 90], [110, 90], [110, 120], [70, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 90], [70, 90], [70, 120], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "sd": {
                "nombre": "surco distal",
                "codigo": "sd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[68, 92], [72, 92], [72, 118], [68, 118]],
                    "detalle": "sector"
                  }
                }
              },
              "sm": {
                "nombre": "surco mesial",
                "codigo": "sm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[108, 92], [112, 92], [112, 118], [108, 118]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [60, 30], [60, 90], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 60], [60, 60], [60, 90], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [60, 30], [60, 60], [30, 60]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 30], [120, 30], [120, 90], [60, 90]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 30], [80, 30], [80, 60], [60, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "lc": {
                "nombre": "oclusal lingual central",
                "codigo": "olc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[80, 30], [100, 30], [100, 60], [80, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[100, 30], [120, 30], [120, 60], [100, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[100, 60], [120, 60], [120, 90], [100, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "vc": {
                "nombre": "oclusal vestibular central",
                "codigo": "ovc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[80, 60], [100, 60], [100, 90], [80, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 60], [80, 60], [80, 90], [60, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "sld": {
                "nombre": "surco lingual distal",
                "codigo": "osld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[78, 32], [82, 32], [82, 56], [78, 56]],
                    "detalle": "sector"
                  }
                }
              },
              "slm": {
                "nombre": "surco lingual mesial",
                "codigo": "oslm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[98, 32], [102, 32], [102, 56], [98, 56]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[102, 58], [118, 58], [118, 62], [102, 62]],
                    "detalle": "sector"
                  }
                }
              },
              "scc": {
                "nombre": "surco central central",
                "codigo": "oscc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[82, 58], [98, 58], [98, 62], [82, 62]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 58], [78, 58], [78, 62], [62, 62]],
                    "detalle": "sector"
                  }
                }
              },
              "svm": {
                "nombre": "surco vestibular distal",
                "codigo": "osvm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[98, 64], [102, 64], [102, 88], [98, 88]],
                    "detalle": "sector"
                  }
                }
              },
              "svd": {
                "nombre": "surco vestibular distal",
                "codigo": "osvd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[78, 64], [82, 64], [82, 88], [78, 88]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "ld": {
            "nombre": "lingual distal",
            "codigo": "ld",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[68, 2], [72, 2], [72, 28], [68, 28]],
                "detalle": "sector"
              },
            },
          },
          "lm": {
            "nombre": "lingual mesial",
            "codigo": "lm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[108, 2], [112, 2], [112, 28], [108, 28]],
                "detalle": "sector"
              },
            },
          },
          "old": {
            "nombre": "oclusal lingual distal",
            "codigo": "old",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[78, 32], [82, 32], [82, 56], [78, 56]],
                "detalle": "sector"
              },
            },
          },
          "olm": {
            "nombre": "oclusal lingual mesial",
            "codigo": "olm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[98, 32], [102, 32], [102, 56], [98, 56]],
                "detalle": "sector"
              },
            },
          },
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 58], [78, 58], [78, 62], [62, 62]],
                "detalle": "sector"
              },
            },
          },
          "occ": {
            "nombre": "oclusal central central",
            "codigo": "occ",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[82, 58], [98, 58], [98, 62], [82, 62]],
                "detalle": "sector"
              },
            },
          },
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[102, 58], [118, 58], [118, 62], [102, 62]],
                "detalle": "sector"
              },
            },
          },
          "ovd": {
            "nombre": "oclusal vestibular distal",
            "codigo": "ovd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[78, 64], [82, 64], [82, 88], [78, 88]],
                "detalle": "sector"
              },
            },
          },
          "ovm": {
            "nombre": "oclusal vestibular mesial",
            "codigo": "ovm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[98, 64], [102, 64], [102, 88], [98, 88]],
                "detalle": "sector"
              },
            },
          },
          "vd": {
            "nombre": "vestibular distal",
            "codigo": "vd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[68, 92], [72, 92], [72, 118], [68, 118]],
                "detalle": "sector"
              },
            },
          },
          "vm": {
            "nombre": "vestibular mesial",
            "codigo": "vm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[108, 92], [112, 92], [112, 118], [108, 118]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
  },
  "id": {
    "1": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [150, 120], [90, 240]],
            "detalle": "Única"
          }
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [150, 0], [120, 60], [60, 60]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [70, 0], [70, 60], [60, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 0], [110, 0], [110, 60], [70, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 0], [150, 0], [120, 60], [110, 60]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 60], [150, 0], [150, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "l": {
                "nombre": "distal lingual",
                "codigo": "dl",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 60], [150, 0], [150, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "v": {
                "nombre": "distal vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 60], [150, 60], [150, 120]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 60], [120, 60], [150, 120], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 60], [120, 60], [150, 120], [110, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 60], [110, 60], [110, 120], [70, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 60], [70, 60], [70, 120], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [60, 60], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 60], [60, 60], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "mesial lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [60, 60], [30, 60]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
    },
    "2": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [150, 120], [90, 240]],
            "detalle": "Única"
          },
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [150, 0], [120, 30], [60, 30]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [70, 0], [70, 30], [60, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 0], [110, 0], [110, 30], [70, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 0], [150, 0], [120, 30], [110, 30]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 30], [150, 0], [150, 120], [120, 90]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "l": {
                "nombre": "mesial lingual",
                "codigo": "dl",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 30], [150, 0], [150, 60], [120, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 60], [150, 60], [150, 120], [120, 90]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 90], [120, 90], [150, 120], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 90], [120, 90], [150, 120], [110, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 90], [110, 90], [110, 120], [70, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 90], [70, 90], [70, 120], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [60, 30], [60, 90], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 60], [60, 60], [60, 90], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [60, 30], [60, 60], [30, 60]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 30], [120, 30], [120, 90], [60, 90]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 30], [90, 30], [90, 60], [60, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 30], [120, 30], [120, 60], [90, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[90, 60], [120, 60], [120, 90], [90, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 60], [90, 60], [90, 90], [60, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[92, 58], [118, 58], [118, 62], [92, 62]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 58], [88, 58], [88, 62], [62, 62]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 58], [88, 58], [88, 62], [62, 62]],
                "detalle": "sector"
              },
            },
          },
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[92, 58], [118, 58], [118, 62], [92, 62]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
    "3": {
      "r": {
        "nombre": "raiz",
        "graf": {
          1: {
            "tipo": "polygon",
            "coordenadas": [[75, 120], [150, 120], [120, 240]],
            "detalle": "Lado derecho"
          },
          2: {
            "tipo": "polygon",
            "coordenadas": [[30, 120], [60, 240], [105, 120]],
            "detalle": "Lado izquierdo"
          }
        }
      },
      "c": {
        "nombre": "caras",
        "posiciones": {
          "l": {
            "nombre": "lingual",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [150, 0], [120, 30], [60, 30]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "m": {
                "nombre": "lingual mesial",
                "codigo": "lm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [70, 0], [70, 30], [60, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "lingual central",
                "codigo": "lc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 0], [110, 0], [110, 30], [70, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "d": {
                "nombre": "lingual distal",
                "codigo": "ld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 0], [150, 0], [120, 30], [110, 30]],
                    "detalle": "sector"
                  }
                }
              },
              "sd": {
                "nombre": "surco distal",
                "codigo": "lsd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[108, 2], [112, 2], [112, 28], [108, 28]],
                    "detalle": "sector"
                  }
                }
              },
              "sm": {
                "nombre": "surco mesial",
                "codigo": "lsm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[68, 2], [72, 2], [72, 28], [68, 28]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "d": {
            "nombre": "distal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[120, 30], [150, 0], [150, 120], [120, 90]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "l": {
                "nombre": "mesial lingual",
                "codigo": "dl",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 30], [150, 0], [150, 60], [120, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "v": {
                "nombre": "mesial vestibular",
                "codigo": "dv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[120, 60], [150, 60], [150, 120], [120, 90]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "v": {
            "nombre": "vestibular",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 90], [120, 90], [150, 120], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "d": {
                "nombre": "vestibular distal",
                "codigo": "vd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[110, 90], [120, 90], [150, 120], [110, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "c": {
                "nombre": "vestibular central",
                "codigo": "vc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[70, 90], [110, 90], [110, 120], [70, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "m": {
                "nombre": "vestibular mesial",
                "codigo": "vm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 90], [70, 90], [70, 120], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "sd": {
                "nombre": "surco distal",
                "codigo": "sd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[108, 92], [112, 92], [112, 118], [108, 118]],
                    "detalle": "sector"
                  }
                }
              },
              "sm": {
                "nombre": "surco mesial",
                "codigo": "sm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[68, 92], [72, 92], [72, 118], [68, 118]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "m": {
            "nombre": "mesial",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[30, 0], [60, 30], [60, 90], [30, 120]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "v": {
                "nombre": "distal vestibular",
                "codigo": "mv",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 60], [60, 60], [60, 90], [30, 120]],
                    "detalle": "sector"
                  }
                }
              },
              "l": {
                "nombre": "distal lingual",
                "codigo": "ml",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[30, 0], [60, 30], [60, 60], [30, 60]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
          "o": {
            "nombre": "oclusal",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[60, 30], [120, 30], [120, 90], [60, 90]],
                "detalle": "contorno completo"
              }
            },
            "sectores": {
              "lm": {
                "nombre": "oclusal lingual mesial",
                "codigo": "olm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 30], [80, 30], [80, 60], [60, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "lc": {
                "nombre": "oclusal lingual central",
                "codigo": "olc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[80, 30], [100, 30], [100, 60], [80, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "ld": {
                "nombre": "oclusal lingual distal",
                "codigo": "old",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[100, 30], [120, 30], [120, 60], [100, 60]],
                    "detalle": "sector"
                  }
                }
              },
              "vd": {
                "nombre": "oclusal vestibular distal",
                "codigo": "ovd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[100, 60], [120, 60], [120, 90], [100, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "vc": {
                "nombre": "oclusal vestibular central",
                "codigo": "ovc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[80, 60], [100, 60], [100, 90], [80, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "vm": {
                "nombre": "oclusal vestibular mesial",
                "codigo": "ovm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[60, 60], [80, 60], [80, 90], [60, 90]],
                    "detalle": "sector"
                  }
                }
              },
              "sld": {
                "nombre": "surco lingual distal",
                "codigo": "osld",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[98, 32], [102, 32], [102, 56], [98, 56]],
                    "detalle": "sector"
                  }
                }
              },
              "slm": {
                "nombre": "surco lingual mesial",
                "codigo": "oslm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[78, 32], [82, 32], [82, 56], [78, 56]],
                    "detalle": "sector"
                  }
                }
              },
              "scm": {
                "nombre": "surco central mesial",
                "codigo": "oscm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[62, 58], [78, 58], [78, 62], [62, 62]],
                    "detalle": "sector"
                  }
                }
              },
              "scc": {
                "nombre": "surco central central",
                "codigo": "oscc",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[82, 58], [98, 58], [98, 62], [82, 62]],
                    "detalle": "sector"
                  }
                }
              },
              "scd": {
                "nombre": "surco central distal",
                "codigo": "oscd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[102, 58], [118, 58], [118, 62], [102, 62]],
                    "detalle": "sector"
                  }
                }
              },
              "svm": {
                "nombre": "surco vestibular distal",
                "codigo": "osvm",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[78, 64], [82, 64], [82, 88], [78, 88]],
                    "detalle": "sector"
                  }
                }
              },
              "svd": {
                "nombre": "surco vestibular distal",
                "codigo": "osvd",
                "graf": {
                  1: {
                    "tipo": "polygon",
                    "coordenadas": [[98, 64], [102, 64], [102, 88], [98, 88]],
                    "detalle": "sector"
                  }
                }
              },
            }
          },
        },
      },
      "s":{
        "nombre": "surcos",
        "posiciones": {
          "lm": {
            "nombre": "lingual mesial",
            "codigo": "lm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[68, 2], [72, 2], [72, 28], [68, 28]],
                "detalle": "sector"
              },
            },
          },
          "ld": {
            "nombre": "lingual distal",
            "codigo": "ld",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[108, 2], [112, 2], [112, 28], [108, 28]],
                "detalle": "sector"
              },
            },
          },
          "olm": {
            "nombre": "oclusal lingual mesial",
            "codigo": "olm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[78, 32], [82, 32], [82, 56], [78, 56]],
                "detalle": "sector"
              },
            },
          },
          "old": {
            "nombre": "oclusal lingual distal",
            "codigo": "old",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[98, 32], [102, 32], [102, 56], [98, 56]],
                "detalle": "sector"
              },
            },
          },
          "ocm": {
            "nombre": "oclusal central mesial",
            "codigo": "ocm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[62, 58], [78, 58], [78, 62], [62, 62]],
                "detalle": "sector"
              },
            },
          },
          "occ": {
            "nombre": "oclusal central central",
            "codigo": "occ",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[82, 58], [98, 58], [98, 62], [82, 62]],
                "detalle": "sector"
              },
            },
          },
          "ocd": {
            "nombre": "oclusal central distal",
            "codigo": "ocd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[102, 58], [118, 58], [118, 62], [102, 62]],
                "detalle": "sector"
              },
            },
          },
          "ovm": {
            "nombre": "oclusal vestibular mesial",
            "codigo": "ovm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[78, 64], [82, 64], [82, 88], [78, 88]],
                "detalle": "sector"
              },
            },
          },
          "ovd": {
            "nombre": "oclusal vestibular distal",
            "codigo": "ovd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[98, 64], [102, 64], [102, 88], [98, 88]],
                "detalle": "sector"
              },
            },
          },
          "vm": {
            "nombre": "vestibular mesial",
            "codigo": "vm",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[68, 92], [72, 92], [72, 118], [68, 118]],
                "detalle": "sector"
              },
            },
          },
          "vd": {
            "nombre": "vestibular distal",
            "codigo": "vd",
            "graf": {
              1: {
                "tipo": "polygon",
                "coordenadas": [[108, 92], [112, 92], [112, 118], [108, 118]],
                "detalle": "sector"
              },
            },
          },
        }
      },
    },
  },
};
