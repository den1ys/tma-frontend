// CICLO REGULAR
/*export const tipo_material = [
  {
    "id": 1,
    "id_tipo": 1,
    "id_padre": null,
    "material_id": [1, 2, 3, 4, 5, 6, 7, 8, 19, 25, 26],
    "nombre": "COMPENDIO"
  },
  {
    "id": 2,
    "id_tipo": 1,
    "id_padre": null,
    "material_id": [1, 2, 3, 4, 5, 6, 7, 8, 19],
    "nombre": "HELICODIAPOSITIVA"
  },
  {
    "id": 15,
    "id_tipo": 1,
    "id_padre": null,
    "material_id": [1, 2, 3, 4, 5, 19],
    "nombre": "INTRODUCTORIO"
  },
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
    "material_id": [1, 2, 3, 4, 5],
    "nombre": "SYLLABUS"
  },
  {
    "id": 49,
    "id_tipo": 1,
    "id_padre": null,
    "material_id": [1, 2, 3, 4, 5, 6, 7, 8, 19],
    "nombre": "CALENDARIZACIÓN"
  },
  {
    "id": 3,
    "id_tipo": 1,
    "id_padre": null,
    "material_id": [1, 2, 3, 4, 5],
    "nombre": "BALOTARIO"
  },
  {
    "id": 3146,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "material_id": [1, 2, 3, 4, 5, 6, 19, 25, 26],
    "nombre": "TOMO 1"
  },
  {
    "id": 3147,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "material_id": [1, 2, 3, 4, 5, 6, 19, 25, 26],
    "nombre": "TOMO 2"
  },
  {
    "id": 3164,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "material_id": [1, 2, 3, 4, 5, 6, 19],
    "nombre": "TOMO 3"
  },
  {
    "id": 3165,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "material_id": [1, 2, 3, 4, 5, 6, 19],
    "nombre": "TOMO 4"
  },
  {
    "id": 3166,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "material_id": [1, 2, 3, 4, 5, 6, 19],
    "nombre": "TOMO 5"
  },
  {
    "id": 3167,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "material_id": [1, 2, 3, 4, 5, 6, 19],
    "nombre": "TOMO 6"
  },
  {
    "id": 3168,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "material_id": [1, 2, 3, 4, 5, 19],
    "nombre": "TOMO 7"
  },
  {
    "id": 3169,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "material_id": [1, 2, 3, 4, 5, 19],
    "nombre": "TOMO 8"
  },
  { "id": 3326, "id_tipo": 2, "id_padre": [15, 16, 48, 49], "material_id": [1, 2, 3, 4, 5, 6, 7, 8, 19], "nombre": "SIN PERIODO" },
  { "id": 3196, "id_tipo": 2, "id_padre": [1, 2], "material_id": [7, 8], "nombre": "CAPÍTULO 1", "nombre_uni": "CAPÍTULO 1-4" },
  { "id": 3197, "id_tipo": 2, "id_padre": [1, 2], "material_id": [7, 8], "nombre": "CAPÍTULO 2", "nombre_uni": "CAPÍTULO 5-8" },
  { "id": 3198, "id_tipo": 2, "id_padre": [1, 2], "material_id": [7, 8], "nombre": "CAPÍTULO 3", "nombre_uni": "CAPÍTULO 9-12" },
  { "id": 3399, "id_tipo": 2, "id_padre": [1, 2], "material_id": [7, 8], "nombre": "CAPÍTULO 4", "nombre_uni": "CAPÍTULO 13-16" },
  { "id": 3400, "id_tipo": 2, "id_padre": [1, 2], "material_id": [7, 8], "nombre": "CAPÍTULO 5", "nombre_uni": "CAPÍTULO 17-20" },
  { "id": 3401, "id_tipo": 2, "id_padre": [1, 2], "material_id": [7, 8], "nombre": "CAPÍTULO 6", "nombre_uni": "CAPÍTULO 21-24" },
  { "id": 3419, "id_tipo": 2, "id_padre": [1, 2], "material_id": [7, 8], "nombre": "CAPÍTULO 7", "nombre_uni": "CAPÍTULO 25-28" },
  { "id": 3420, "id_tipo": 2, "id_padre": [1, 2], "material_id": [7, 8], "nombre": "CAPÍTULO 8", "nombre_uni": "CAPÍTULO 29-32" },
  { "id": 3421, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 9" },
  { "id": 3422, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 10" },
  { "id": 3423, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 11" },
  { "id": 3424, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 12" },
  { "id": 3425, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 13" },
  { "id": 3426, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 14" },
  { "id": 3427, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 15" },
  { "id": 3428, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 16" },
  { "id": 3429, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 17" },
  { "id": 3430, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 18" },
  { "id": 3431, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 19" },
  { "id": 3432, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 20" },
  { "id": 3433, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 21" },
  { "id": 3434, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 22" },
  { "id": 3435, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 23" },
  { "id": 3436, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 24" },
  { "id": 3437, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 25" },
  { "id": 3438, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 26" },
  { "id": 3439, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 27" },
  { "id": 3440, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 28" },
  { "id": 3441, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 29" },
  { "id": 3442, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 30" },
  { "id": 3443, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 31" },
  { "id": 3444, "id_tipo": 2, "id_padre": [2], "material_id": [7, 8], "nombre": "CAPÍTULO 32" },
  { "id": 3327, "id_tipo": 2, "id_padre": [1, 2], "material_id": [6], "nombre": "INTENSIVO 1" },
  { "id": 3328, "id_tipo": 2, "id_padre": [1, 2], "material_id": [6], "nombre": "INTENSIVO 2" },
  { "id": 3329, "id_tipo": 2, "id_padre": [1, 2], "material_id": [6], "nombre": "INTENSIVO 3" },
  { "id": 3170, "id_tipo": 2, "id_padre": [3], "material_id": [1, 2, 3, 4, 5], "nombre": "MENSUAL 1" },
  { "id": 3171, "id_tipo": 2, "id_padre": [3], "material_id": [1, 2, 3, 4, 5], "nombre": "MENSUAL 2" },
  { "id": 3172, "id_tipo": 2, "id_padre": [3], "material_id": [1, 2, 3, 4, 5], "nombre": "MENSUAL 3" },
  { "id": 3173, "id_tipo": 2, "id_padre": [3], "material_id": [1, 2, 3, 4, 5], "nombre": "MENSUAL 4" },
  { "id": 3174, "id_tipo": 2, "id_padre": [3], "material_id": [1, 2, 3, 4, 5], "nombre": "BIMESTRAL 1" },
  { "id": 3175, "id_tipo": 2, "id_padre": [3], "material_id": [1, 2, 3, 4, 5], "nombre": "BIMESTRAL 2" },
  { "id": 3176, "id_tipo": 2, "id_padre": [3], "material_id": [1, 2, 3, 4, 5], "nombre": "BIMESTRAL 3" },
  { "id": 3177, "id_tipo": 2, "id_padre": [3], "material_id": [1, 2, 3, 4, 5], "nombre": "BIMESTRAL 4" },
  { "id": 11, "id_tipo": 3, "id_padre": [3146, 3327], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 1" },
  { "id": 12, "id_tipo": 3, "id_padre": [3146, 3327], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 2" },
  { "id": 13, "id_tipo": 3, "id_padre": [3146, 3327], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 3" },
  { "id": 17, "id_tipo": 3, "id_padre": [3146, 3147, 3327], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 4" },
  { "id": 18, "id_tipo": 3, "id_padre": [3147, 3328], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 5" },
  { "id": 19, "id_tipo": 3, "id_padre": [3147, 3328], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 6" },
  { "id": 20, "id_tipo": 3, "id_padre": [3147, 3164, 3328], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 7" },
  { "id": 21, "id_tipo": 3, "id_padre": [3147, 3164, 3328], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 8" },
  { "id": 22, "id_tipo": 3, "id_padre": [3164, 3329], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 9" },
  { "id": 23, "id_tipo": 3, "id_padre": [3164, 3165, 3329], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 10" },
  { "id": 24, "id_tipo": 3, "id_padre": [3164, 3165, 3329], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 11" },
  { "id": 25, "id_tipo": 3, "id_padre": [3164, 3165, 3329], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 12" },
  { "id": 26, "id_tipo": 3, "id_padre": [3165, 3166], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 13" },
  { "id": 27, "id_tipo": 3, "id_padre": [3165, 3166], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 14" },
  { "id": 28, "id_tipo": 3, "id_padre": [3165, 3166], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 15" },
  { "id": 29, "id_tipo": 3, "id_padre": [3165, 3167], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 16" },
  { "id": 30, "id_tipo": 3, "id_padre": [3166, 3167], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 17" },
  { "id": 31, "id_tipo": 3, "id_padre": [3166, 3167], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 18" },
  { "id": 32, "id_tipo": 3, "id_padre": [3166, 3168], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 19" },
  { "id": 33, "id_tipo": 3, "id_padre": [3166, 3168], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 20" },
  { "id": 34, "id_tipo": 3, "id_padre": [3167, 3168], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 21" },
  { "id": 35, "id_tipo": 3, "id_padre": [3167, 3169], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 22" },
  { "id": 36, "id_tipo": 3, "id_padre": [3167, 3169], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 23" },
  { "id": 37, "id_tipo": 3, "id_padre": [3167, 3169], "material_id": [1, 2, 3, 4, 5, 6, 19], "nombre": "CAPÍTULO 24" },
  { "id": 14, "id_tipo": 3, "id_padre": [3146, 3147, 3164, 3165, 3166, 3167, 3168, 3169], "material_id": [1, 2, 3, 4, 5, 19], "nombre": "RETROALIMENTACIÓN" }
];*/

// CICLO VACACIONAL
/*export const tipo_material = [
  { "id": 1, "id_tipo": 1, "id_padre": [], "material_id": [6, 7, 11, 12, 13], "nombre": "COMPENDIO" },
  { "id": 2, "id_tipo": 1, "id_padre": [], "material_id": [2, 3, 4, 5, 9, 10, 15, 16, 17, 18], "nombre": "HELICODIAPOSITIVA" },
  { "id": 5, "id_tipo": 1, "id_padre": [], "material_id": [2, 3, 4, 5, 9, 10, 14, 15, 16, 17, 18], "nombre": "BOLETINES" },
  { "id": 10, "id_tipo": 1, "id_padre": [], "material_id": [6, 12], "nombre": "PRÁCTICA DIRIGIDA" },
  { "id": 3223, "id_tipo": 2, "id_padre": [1, 2, 5], "material_id": [2, 3, 4, 5, 6, 9, 10, 12, 13, 15, 16, 17, 18], "nombre": "INTRODUCTORIO" },
  { "id": 3217, "id_tipo": 2, "id_padre": [1, 2, 5], "material_id": [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "nombre": "SEMANA 1" },
  { "id": 3218, "id_tipo": 2, "id_padre": [1, 2, 5], "material_id": [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "nombre": "SEMANA 2" },
  { "id": 3219, "id_tipo": 2, "id_padre": [1, 2, 5], "material_id": [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "nombre": "SEMANA 3" },
  { "id": 3220, "id_tipo": 2, "id_padre": [1, 2, 5], "material_id": [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "nombre": "SEMANA 4" },
  { "id": 3221, "id_tipo": 2, "id_padre": [1, 2, 5], "material_id": [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "nombre": "SEMANA 5" },
  { "id": 3222, "id_tipo": 2, "id_padre": [1, 2, 5], "material_id": [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "nombre": "SEMANA 6" },
  { "id": 3235, "id_tipo": 2, "id_padre": [1, 5], "material_id": [6, 12, 13, 14], "nombre": "SEMANA 7" },
  { "id": 3236, "id_tipo": 2, "id_padre": [1, 5], "material_id": [6, 12, 13, 14], "nombre": "SEMANA 8" },
  { "id": 3238, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 9" },
  { "id": 3239, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 10" },
  { "id": 3240, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 11" },
  { "id": 3241, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 12" },
  { "id": 3242, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 13" },
  { "id": 3243, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 14" },
  { "id": 3244, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 15" },
  { "id": 3245, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 16" },
  { "id": 3246, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 17" },
  { "id": 3247, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 18" },
  { "id": 3248, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 19" },
  { "id": 3249, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 20" },
  { "id": 3250, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 21" },
  { "id": 3251, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 22" },
  { "id": 3252, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 23" },
  { "id": 3253, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 24" },
  { "id": 3254, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 25" },
  { "id": 3255, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 26" },
  { "id": 3256, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 27" },
  { "id": 3257, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 28" },
  { "id": 3258, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 29" },
  { "id": 3259, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 30" },
  { "id": 3260, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 31" },
  { "id": 3261, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 32" },
  { "id": 3262, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 33" },
  { "id": 3263, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 34" },
  { "id": 3264, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 35" },
  { "id": 3265, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "SEMANA 36" },
  { "id": 3146, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "TOMO 1" },
  { "id": 3147, "id_tipo": 2, "id_padre": [5], "material_id": [14], "nombre": "TOMO 2" },
  { "id": 3164, "id_tipo": 2, "id_padre": [1, 5], "material_id": [14], "nombre": "TOMO 3" },
  { "id": 3165, "id_tipo": 2, "id_padre": [1, 5], "material_id": [14], "nombre": "TOMO 4" },
  { "id": 3166, "id_tipo": 2, "id_padre": [1, 5], "material_id": [14], "nombre": "TOMO 5" },
  { "id": 3167, "id_tipo": 2, "id_padre": [1, 5], "material_id": [14], "nombre": "TOMO 6" },
  { "id": 3168, "id_tipo": 2, "id_padre": [1, 5], "material_id": [14], "nombre": "TOMO 7" },
  { "id": 3169, "id_tipo": 2, "id_padre": [1, 5], "material_id": [14], "nombre": "TOMO 8" },
  { "id": 3237, "id_tipo": 2, "id_padre": [1, 5], "material_id": [14], "nombre": "TOMO 9" },
  { "id": 3268, "id_tipo": 2, "id_padre": [10], "material_id": [6, 12], "nombre": "PRÁCTICA 1" },
  { "id": 3269, "id_tipo": 2, "id_padre": [10], "material_id": [6, 12], "nombre": "PRÁCTICA 2" },
  { "id": 3270, "id_tipo": 2, "id_padre": [10], "material_id": [6, 12], "nombre": "PRÁCTICA 3" },
  { "id": 3271, "id_tipo": 2, "id_padre": [10], "material_id": [6, 12], "nombre": "PRÁCTICA 4" },
  { "id": 3272, "id_tipo": 2, "id_padre": [10], "material_id": [6, 12], "nombre": "PRÁCTICA 5" },
  { "id": 3273, "id_tipo": 2, "id_padre": [10], "material_id": [6, 12], "nombre": "PRÁCTICA 6" },
  { "id": 3274, "id_tipo": 2, "id_padre": [10], "material_id": [6, 12], "nombre": "PRÁCTICA 7" },
  { "id": 3275, "id_tipo": 2, "id_padre": [10], "material_id": [6, 12], "nombre": "PRÁCTICA 8" },
  { "id": 6, "id_tipo": 3, "id_padre": [3146, 3217, 3218, 3219, 3220, 3221, 3222, 3223], "material_id": [2, 3, 4, 5, 9, 10], "nombre": "SESIÓN" },
  { "id": 7, "id_tipo": 3, "id_padre": [3146, 3217, 3218, 3219, 3220, 3221, 3222, 3223], "material_id": [2, 3, 4, 5, 9, 10], "nombre": "HELICOMOTIVACIÓN" },
  { "id": 8, "id_tipo": 3, "id_padre": [3217, 3218, 3219, 3220, 3221, 3222, 3235, 3236], "material_id": [6, 7, 11, 12, 13], "nombre": "TOMO 1" },
  { "id": 9, "id_tipo": 3, "id_padre": [3217, 3218, 3219, 3220, 3221, 3222, 3235, 3236], "material_id": [6, 7, 11, 12, 13], "nombre": "TOMO 2" }
];*/

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

// CICLO VACACIONAL V2
export const tipo_material = [
  { "id": 1, "id_tipo": 1, "id_padre": [], "material_id": [20, 21, 22, 23, 24, 28, 29], "nombre": "COMPENDIOS" },
  { "id": 2, "id_tipo": 1, "id_padre": [], "material_id": [20, 21, 22, 23, 24, 28, 29], "nombre": "HELICODIAPOSITIVA" },
  { "id": 15, "id_tipo": 1, "id_padre": [], "material_id": [11, 12, 13, 20, 21, 22, 23, 24, 28, 29, 36], "nombre": "INTRODUCTORIO" },
  { "id": 5, "id_tipo": 1, "id_padre": [], "material_id": [13, 20, 21, 22, 23, 24], "nombre": "BOLETINES" },
  { "id": 46, "id_tipo": 1, "id_padre": [], "material_id": [20, 21, 22, 23, 24], "nombre": "EXPLORATORIO" },
  { "id": 16, "id_tipo": 1, "id_padre": [], "material_id": [20, 21, 22, 23, 24], "nombre": "CARPETA HELICOIDAL" },
  { "id": 48, "id_tipo": 1, "id_padre": [], "material_id": [20, 21, 22, 23, 24], "nombre": "SYLLABUS" },
  { "id": 49, "id_tipo": 1, "id_padre": [], "material_id": [20, 21, 22, 23, 24, 30, 31, 32, 33, 34, 35], "nombre": "CALENDARIZACIÓN" },
  { "id": 47, "id_tipo": 1, "id_padre": [], "material_id": [11, 12, 13, 30, 31, 32, 33, 34, 35, 36], "nombre": "DIAPOSITIVA" },


  {"id" : 57, "id_tipo" : 1, "id_padre" : [], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "CARTEL DE COMPETENCIAS Y CONTENIDOS TEMÁTICOS"},
  {"id" : 58, "id_tipo" : 1, "id_padre" : [], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "REGISTROS AUXILIARES"},
  {"id" : 59, "id_tipo" : 1, "id_padre" : [], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "PLAN DE ÁREA"},
  {"id" : 60, "id_tipo" : 1, "id_padre" : [], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "CARPETA PEDAGÓGICA"},
  {"id" : 61, "id_tipo" : 1, "id_padre" : [], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "REGLAMENTO INTERNO"},
  {"id" : 62, "id_tipo" : 1, "id_padre" : [], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "FORMATO DE SESION"},
  {"id" : 63, "id_tipo" : 1, "id_padre" : [], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "ACOMPAÑAMIENTO DOCENTE"},
  {"id" : 64, "id_tipo" : 1, "id_padre" : [], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "LIBROS"},


  { "id": 3146, "id_tipo": 2, "id_padre": [1, 5, 47], "material_id": [11, 12, 13, 20, 21, 22, 23, 24, 28, 29, 36], "nombre": "TOMO 1" },
  { "id": 3147, "id_tipo": 2, "id_padre": [1, 5, 47], "material_id": [11, 12, 13, 28, 29, 36], "nombre": "TOMO 2" },
  { "id": 3164, "id_tipo": 2, "id_padre": [1, 5], "material_id": [13, 28], "nombre": "TOMO 3" },
  { "id": 3165, "id_tipo": 2, "id_padre": [1, 5], "material_id": [13, 28], "nombre": "TOMO 4" },
  { "id": 3196, "id_tipo": 2, "id_padre": [2], "material_id": [20, 21, 22, 23, 24, 28, 29], "nombre": "CAPITULO 1" },
  { "id": 3197, "id_tipo": 2, "id_padre": [2], "material_id": [20, 21, 22, 23, 24, 28, 29], "nombre": "CAPITULO 2" },
  { "id": 3198, "id_tipo": 2, "id_padre": [2], "material_id": [20, 21, 22, 23, 24, 28, 29], "nombre": "CAPITULO 3" },
  { "id": 3399, "id_tipo": 2, "id_padre": [2], "material_id": [20, 21, 22, 23, 24, 28, 29], "nombre": "CAPITULO 4" },
  { "id": 3400, "id_tipo": 2, "id_padre": [2], "material_id": [20, 21, 22, 23, 24, 28, 29], "nombre": "CAPITULO 5" },
  { "id": 3401, "id_tipo": 2, "id_padre": [2], "material_id": [20, 21, 22, 23, 24, 28, 29], "nombre": "CAPITULO 6" },
  { "id": 3419, "id_tipo": 2, "id_padre": [2], "material_id": [28, 29], "nombre": "CAPITULO 7" },
  {"id" : 3217, "id_tipo" : 2, "id_padre" : [47], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "SEMANA 1"},
  {"id" : 3218, "id_tipo" : 2, "id_padre" : [47], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "SEMANA 2"},
  {"id" : 3219, "id_tipo" : 2, "id_padre" : [47], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "SEMANA 3"},
  {"id" : 3220, "id_tipo" : 2, "id_padre" : [47], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "SEMANA 4"},
  {"id" : 3221, "id_tipo" : 2, "id_padre" : [47], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "SEMANA 5"},
  {"id" : 3222, "id_tipo" : 2, "id_padre" : [47], "material_id" : [30, 31, 32, 33, 34, 35], "nombre" : "SEMANA 6"},

  {"id" : 11, "id_tipo" : 3, "id_padre" : [3146], "material_id" : [11, 12, 13, 36], "nombre" : "CAP1"},
  {"id" : 12, "id_tipo" : 3, "id_padre" : [3146], "material_id" : [11, 12, 13, 36], "nombre" : "CAP2"},
  {"id" : 13, "id_tipo" : 3, "id_padre" : [3146], "material_id" : [11, 12, 13, 36], "nombre" : "CAP3"},
  {"id" : 17, "id_tipo" : 3, "id_padre" : [3146], "material_id" : [11, 12, 13, 36], "nombre" : "CAP4"},
  {"id" : 18, "id_tipo" : 3, "id_padre" : [3147], "material_id" : [11, 12, 13, 36], "nombre" : "CAP5"},
  {"id" : 19, "id_tipo" : 3, "id_padre" : [3147], "material_id" : [11, 12, 13, 36], "nombre" : "CAP6"},
  {"id" : 20, "id_tipo" : 3, "id_padre" : [3147], "material_id" : [11, 12, 13, 36], "nombre" : "CAP7"},
  {"id" : 21, "id_tipo" : 3, "id_padre" : [3147], "material_id" : [11, 12, 13, 36], "nombre" : "CAP8"}
];

/*
export const curso_grupos = [
  { group_id: 105, id: 75, text: "PLAN LECTOR" },
  { group_id: 105, id: 48, text: "TUTORIA" },
  { group_id: 136, id: 106, text: "FORTALECIENDO MI FE" },
  { group_id: 136, id: 46, text: "VALORES Y LIDERAZGO" },
  { group_id: 137, id: 106, text: "FORTALECIENDO MI FE" },
  { group_id: 137, id: 23, text: "INGLÉS SESIÓN 2" },
  { group_id: 138, id: 75, text: "PLAN LECTOR" },
  { group_id: 138, id: 40, text: "RAZ. VERBAL SESIÓN 2" },
  { group_id: 139, id: 23, text: "INGLÉS SESIÓN 2" },
  { group_id: 139, id: 48, text: "TUTORIA" }
];
*/
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

  { group_id: 174, id: 38, text: "RAZ. VERBAL" },
  { group_id: 174, id: 48, text: "TUTORIA" },
  { group_id: 174, id: 106, text: "FORTALECIENDO MI FE" },

  { group_id: 20, id: 19, text: "HISTORIA DEL PERÚ", material_id: [25, 26] },
  { group_id: 20, id: 21, text: "HISTORIA UNIVERSAL", material_id: [25, 26] },

  { group_id: 58, id: 11, text: "ECONOMÍA", material_id: [25, 26] },
  { group_id: 58, id: 12, text: "EDUCACIÓN CÍVICA", material_id: [25, 26] },

  { group_id: 15, id: 161, text: "GEOGRAFÍA DEL MUNDO", material_id: [25, 26] },
  { group_id: 15, id: 162, text: "GEOGRAFÍA DEL PERÚ", material_id: [25, 26] },


  { group_id: 173, id: 106, text: "FORTALECIENDO MI FE" },
  { group_id: 173, id: 48, text: "TUTORIA" },

  { group_id: 175, id: 21, text: "HISTORIA UNIVERSAL" },
  { group_id: 175, id: 48, text: "TUTORIA" }
];

// PRIMARIA REGULAR
export const tipo_material_primaria = [
  {"id" : 47, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "DIAPOSITIVA"},
  {"id" : 58, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "REGISTROS AUXILIARES"},
  {"id" : 60, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CARPETA PEDAGÓGICA"},
  {"id" : 61, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "REGLAMENTO INTERNO"},
  {"id" : 63, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "ACOMPAÑAMIENTO DOCENTE"},
  {"id" : 65, "id_tipo" : 1, "id_padre" : [], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CAPACITACIONES"},

  {"id" : 3174, "id_tipo" : 2, "id_padre" : [65], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "BIMESTRAL 1"},
  {"id" : 3175, "id_tipo" : 2, "id_padre" : [65], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "BIMESTRAL 2"},
  {"id" : 3176, "id_tipo" : 2, "id_padre" : [65], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "BIMESTRAL 3"},
  {"id" : 3177, "id_tipo" : 2, "id_padre" : [65], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "BIMESTRAL 4"},
  {"id" : 3326, "id_tipo" : 2, "id_padre" : [58, 61, 63], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "SIN PERIODO"},
  {"id" : 3332, "id_tipo" : 2, "id_padre" : [47], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 1"},
  {"id" : 3333, "id_tipo" : 2, "id_padre" : [47], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 2"},
  {"id" : 3334, "id_tipo" : 2, "id_padre" : [47], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 3"},
  {"id" : 3335, "id_tipo" : 2, "id_padre" : [47], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 4"},
  {"id" : 3336, "id_tipo" : 2, "id_padre" : [47], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 5"},
  {"id" : 3337, "id_tipo" : 2, "id_padre" : [47], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 6"},
  {"id" : 3338, "id_tipo" : 2, "id_padre" : [47], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 7"},
  {"id" : 3339, "id_tipo" : 2, "id_padre" : [47], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "UNIDAD 8"},
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
  {"id" : 17, "id_tipo" : 3, "id_padre" : [3332,3333,3334,3335,3336,3337,3338,3339], "material_id" : [37, 38, 39, 40, 41, 42, 43, 44, 45], "nombre" : "CAPITULO 4"}
];