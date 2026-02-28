// CICLO REGULAR
export const tipo_material = [
  {
    "id": 16,
    "id_tipo": 1,
    "id_padre": null,
    "material_id": [1, 2, 3, 4, 5, 6, 7, 8, 19],
    "nombre": "CARPETA HELICOIDAL"
  },
  {
    "id": 48,
    "id_tipo": 1,
    "id_padre": null,
    "material_id": [1, 2, 3, 4, 5, 6, 7, 8, 19],
    "nombre": "SYLLABUS"
  },
  {
    "id": 49,
    "id_tipo": 1,
    "id_padre": null,
    "material_id": [1, 2, 3, 4, 5, 6, 7, 8, 19],
    "nombre": "CALENDARIZACIÓN"
  },
  { "id": 3326, "id_tipo": 2, "id_padre": [16, 48, 49], "material_id": [1, 2, 3, 4, 5, 6, 7, 8, 19], "nombre": "SIN PERIODO" }
];

// PSICOLOGIA
export const tipo_material_psicologia = [
  {"id" : 51, "id_tipo" : 1, "id_padre" : null, "material_id" : 27, "nombre" : "ANSIEDAD"},
  {"id" : 52, "id_tipo" : 1, "id_padre" : null, "material_id" : 27, "nombre" : "ASPEREGER"},
  {"id" : 53, "id_tipo" : 1, "id_padre" : null, "material_id" : 27, "nombre" : "DEFICIT DE ATENCIÓN E HIPERACTIVIDAD"},
  {"id" : 54, "id_tipo" : 1, "id_padre" : null, "material_id" : 27, "nombre" : "DEPRESIÓN"},
  {"id" : 55, "id_tipo" : 1, "id_padre" : null, "material_id" : 27, "nombre" : "INFOGRAFIAS"},
  {"id" : 56, "id_tipo" : 1, "id_padre" : null, "material_id" : 27, "nombre" : "VIDEOS SOBRE NEURODIVERSIDAD"},
  {
    "id": 3146,
    "id_tipo": 2,
    "id_padre": [51, 52, 53, 54, 55, 56],
    "material_id": [27],
    "nombre": "TOMO 1"
  },
  {
    "id": 3147,
    "id_tipo": 2,
    "id_padre": [51, 52, 53, 54, 55, 56],
    "material_id": [27],
    "nombre": "TOMO 2"
  }
];

export const curso_grupos = [
  { group_id: 6, id: 6, text: "ARITMÉTICA SESIÓN 1" },
  { group_id: 6, id: 7, text: "ARITMÉTICA SESIÓN 2" },
  { group_id: 7, id: 6, text: "ARITMÉTICA SESIÓN 1" },
  { group_id: 7, id: 7, text: "ARITMÉTICA SESIÓN 2" },

  { group_id: 3, id: 3, text: "ÁLGEBRA SESIÓN 1" },
  { group_id: 3, id: 4, text: "ÁLGEBRA SESIÓN 2" },
  { group_id: 4, id: 3, text: "ÁLGEBRA SESIÓN 1" },
  { group_id: 4, id: 4, text: "ÁLGEBRA SESIÓN 2" },

  { group_id: 39, id: 39, text: "RAZ. VERBAL SESIÓN 1" },
  { group_id: 39, id: 40, text: "RAZ. VERBAL SESIÓN 2" },
  { group_id: 40, id: 39, text: "RAZ. VERBAL SESIÓN 1" },
  { group_id: 40, id: 40, text: "RAZ. VERBAL SESIÓN 2" },

  { group_id: 22, id: 22, text: "INGLÉS" },
  { group_id: 22, id: 24, text: "INGLÉS SESIÓN 1" },
  { group_id: 22, id: 23, text: "INGLÉS SESIÓN 2" },
  { group_id: 24, id: 22, text: "INGLÉS" },
  { group_id: 24, id: 24, text: "INGLÉS SESIÓN 1" },
  { group_id: 24, id: 23, text: "INGLÉS SESIÓN 2" },
  { group_id: 23, id: 22, text: "INGLÉS" },
  { group_id: 23, id: 24, text: "INGLÉS SESIÓN 1" },
  { group_id: 23, id: 23, text: "INGLÉS SESIÓN 2" },

  // RAZ. VERBAL SESIÓN 2 Y FORTALECIENDO MI FE / TUTORÍA : 5TO REGULAR
  { group_id: 174, id: 39, text: "RAZ. VERBAL SESIÓN 1", material_id: [5] },
  { group_id: 174, id: 40, text: "RAZ. VERBAL SESIÓN 2", material_id: [5] },
  { group_id: 174, id: 48, text: "TUTORIA", material_id: [5] },
  { group_id: 174, id: 106, text: "FORTALECIENDO MI FE", material_id: [5] },

  // RAZ. VERBAL SESIÓN 2 Y FORTALECIENDO MI FE / TUTORÍA : 5TO PRE
  { group_id: 174, id: 38, text: "RAZ. VERBAL", material_id: [19] },
  { group_id: 174, id: 48, text: "TUTORIA", material_id: [19] },
  { group_id: 174, id: 106, text: "FORTALECIENDO MI FE", material_id: [19] },

  { group_id: 20, id: 19, text: "HISTORIA DEL PERÚ", material_id: [25, 26] },
  { group_id: 20, id: 21, text: "HISTORIA UNIVERSAL", material_id: [25, 26] },

  { group_id: 58, id: 11, text: "ECONOMÍA", material_id: [25, 26] },
  { group_id: 58, id: 12, text: "EDUCACIÓN CÍVICA", material_id: [25, 26] },

  { group_id: 15, id: 161, text: "GEOGRAFÍA DEL MUNDO", material_id: [25, 26] },
  { group_id: 15, id: 162, text: "GEOGRAFÍA DEL PERÚ", material_id: [25, 26] },

  { group_id: 173, id: 106, text: "FORTALECIENDO MI FE" },
  { group_id: 173, id: 48, text: "TUTORIA" },

  { group_id: 175, id: 21, text: "HISTORIA UNIVERSAL" },
  { group_id: 175, id: 48, text: "TUTORIA" },

  { group_id: 178, id: 30, text: "LITERATURA" },
  { group_id: 178, id: 48, text: "TUTORÍA" },

  { group_id: 177, id: 27, text: "LENGUAJE" },
  { group_id: 177, id: 106, text: "FORTALECIENDO MI FE" }
];

// PRIMARIA REGULAR
export const tipo_material_primaria = [
  {"id" : 47, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "DIAPOSITIVA"},
  {"id" : 58, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "REGISTROS AUXILIARES"/*, "es_archivo_descarga": true*/},
  {"id" : 60, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CARPETA PEDAGÓGICA"},
  {"id" : 61, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "REGLAMENTO INTERNO"},
  {"id" : 63, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "ACOMPAÑAMIENTO DOCENTE"},
  {"id" : 65, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CAPACITACIONES"},

  {"id" : 3174, "id_tipo" : 2, "id_padre" : [65], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "BIMESTRAL 1"},
  {"id" : 3175, "id_tipo" : 2, "id_padre" : [65], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "BIMESTRAL 2"},
  {"id" : 3176, "id_tipo" : 2, "id_padre" : [65], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "BIMESTRAL 3"},
  {"id" : 3177, "id_tipo" : 2, "id_padre" : [65], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "BIMESTRAL 4"},
  {"id" : 3326, "id_tipo" : 2, "id_padre" : [61, 63], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "SIN PERIODO"},
  {"id" : 3332, "id_tipo" : 2, "id_padre" : [47, 58], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 1"},
  {"id" : 3333, "id_tipo" : 2, "id_padre" : [47, 58], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 2"},
  {"id" : 3334, "id_tipo" : 2, "id_padre" : [47, 58], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 3"},
  {"id" : 3335, "id_tipo" : 2, "id_padre" : [47, 58], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 4"},
  {"id" : 3336, "id_tipo" : 2, "id_padre" : [47, 58], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 5"},
  {"id" : 3337, "id_tipo" : 2, "id_padre" : [47, 58], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 6"},
  {"id" : 3338, "id_tipo" : 2, "id_padre" : [47, 58], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 7"},
  {"id" : 3339, "id_tipo" : 2, "id_padre" : [47, 58], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 8"},
  {"id" : 3537, "id_tipo" : 2, "id_padre" : [60], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "PLANIFICACIÓN ANUAL"},
  {"id" : 3538, "id_tipo" : 2, "id_padre" : [60], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD DIDÁCTICA"},
  {"id" : 3539, "id_tipo" : 2, "id_padre" : [60], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "MAPA DE COMPETENCIAS"},
  {"id" : 3540, "id_tipo" : 2, "id_padre" : [60], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "MODELO DE SESIÓN Y GUÍA"},
  {"id" : 3541, "id_tipo" : 2, "id_padre" : [60], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CONVIVENCIA ESCOLAR"},
  {"id" : 3542, "id_tipo" : 2, "id_padre" : [60], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "FORMATO DE CARPETA PEDAGÓGICA"},
  {"id" : 3543, "id_tipo" : 2, "id_padre" : [60], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CARTEL DE CONTENIDOS"},
  {"id" : 3544, "id_tipo" : 2, "id_padre" : [60], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "PLAN DE ÁREA"},
  {"id" : 3545, "id_tipo" : 2, "id_padre" : [60], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CALENDARIZACIÓN"},

  {"id" : 11, "id_tipo" : 3, "id_padre" : [3174,3175,3176,3177,3332,3333,3334,3335,3336,3337,3338,3339], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CAPITULO 1"},
  {"id" : 12, "id_tipo" : 3, "id_padre" : [3174,3175,3176,3177,3332,3333,3334,3335,3336,3337,3338,3339], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CAPITULO 2"},
  {"id" : 13, "id_tipo" : 3, "id_padre" : [3174,3175,3176,3177,3332,3333,3334,3335,3336,3337,3338,3339], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CAPITULO 3"},
  {"id" : 17, "id_tipo" : 3, "id_padre" : [3332,3333,3334,3335,3336,3337,3338,3339], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CAPITULO 4"},


  {"id":66, "id_tipo":3, "id_padre":[3538, 3539], "material_id":[37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre":"UNIDAD 1"}, 
  {"id":67, "id_tipo":3, "id_padre":[3538, 3539], "material_id":[37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre":"UNIDAD 2"}, 
  {"id":68, "id_tipo":3, "id_padre":[3538, 3539], "material_id":[37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre":"UNIDAD 3"}, 
  {"id":75, "id_tipo":3, "id_padre":[3538, 3539], "material_id":[37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre":"UNIDAD 4"}, 
  {"id":76, "id_tipo":3, "id_padre":[3538, 3539], "material_id":[37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre":"UNIDAD 5"}, 
  {"id":77, "id_tipo":3, "id_padre":[3538, 3539], "material_id":[37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre":"UNIDAD 6"}, 
  {"id":78, "id_tipo":3, "id_padre":[3538, 3539], "material_id":[37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre":"UNIDAD 7"}, 
  {"id":79, "id_tipo":3, "id_padre":[3538, 3539], "material_id":[37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre":"UNIDAD 8"}
];