/*export const tipo_material = [
  {
    "id": 1,
    "id_tipo": 1,
    "id_padre": null,
    "nombre": "COMPENDIO",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 2,
    "id_tipo": 1,
    "id_padre": null,
    "nombre": "HELICODIAPOSITIVA",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/13/200/100"
  },
  {
    "id": 3,
    "id_tipo": 1,
    "id_padre": null,
    "nombre": "BALOTARIO",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/33/200/100"
  },
  {
    "id": 4,
    "id_tipo": 1,
    "id_padre": null,
    "nombre": "SOLUCIONARIO DE BALOTARIO",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/43/200/100"
  },
  {
    "id": 3146,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "nombre": "TOMO 1",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3147,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "nombre": "TOMO 2",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3164,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "nombre": "TOMO 3",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3165,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "nombre": "TOMO 4",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3166,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "nombre": "TOMO 5",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3167,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "nombre": "TOMO 6",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3168,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "nombre": "TOMO 7",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3169,
    "id_tipo": 2,
    "id_padre": [1, 2],
    "nombre": "TOMO 8",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3170,
    "id_tipo": 2,
    "id_padre": [3, 4],
    "nombre": "MENSUAL 1",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100",
  },
  {
    "id": 3171,
    "id_tipo": 2,
    "id_padre": [3, 4],
    "nombre": "MENSUAL 2",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100",
  },
  {
    "id": 3172,
    "id_tipo": 2,
    "id_padre": [3, 4],
    "nombre": "MENSUAL 3",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100",
  },
  {
    "id": 3173,
    "id_tipo": 2,
    "id_padre": [3, 4],
    "nombre": "MENSUAL 4",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100",
  },
  {
    "id": 3174,
    "id_tipo": 2,
    "id_padre": [3, 4],
    "nombre": "BIMESTRAL 1",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100",
  },
  {
    "id": 3175,
    "id_tipo": 2,
    "id_padre": [3, 4],
    "nombre": "BIMESTRAL 2",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100",
  },
  {
    "id": 3176,
    "id_tipo": 2,
    "id_padre": [3, 4],
    "nombre": "BIMESTRAL 3",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100",
  },
  {
    "id": 3177,
    "id_tipo": 2,
    "id_padre": [3, 4],
    "nombre": "BIMESTRAL 4",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100",
  },
  {
    "id": 3196,
    "id_tipo": 3,
    "id_padre": [3146, 3147, 3164, 3165, 3166, 3167, 3168, 3169],
    "nombre": "CAPÍTULO 1",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3197,
    "id_tipo": 3,
    "id_padre": [3146, 3147, 3164, 3165, 3166, 3167, 3168, 3169],
    "nombre": "CAPÍTULO 2",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3198,
    "id_tipo": 3,
    "id_padre": [3146, 3147, 3164, 3165, 3166, 3167, 3168, 3169],
    "nombre": "CAPÍTULO 3",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3199,
    "id_tipo": 3,
    "id_padre": [3146, 3147, 3164, 3165, 3166, 3167, 3168, 3169],
    "nombre": "ASESORÍA",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  },
  {
    "id": 3200,
    "id_tipo": 3,
    "id_padre": [3146, 3147, 3164, 3165, 3166, 3167, 3168, 3169],
    "nombre": "REFORZAMIENTO",
    "nivel": "Secundaria",
    "empresa": "Saco Oliveros",
    "empresa_logo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
    "imagen": "https://picsum.photos/id/3/200/100"
  }
];*/

export const tipo_material = [
  { "id": 1, "id_tipo": 1, "id_padre": [], "material_id": [6, 7, 11, 12, 13], "nombre": "COMPENDIO" },
  { "id": 2, "id_tipo": 1, "id_padre": [], "material_id": [2, 3, 4, 5, 9, 10, 15, 16, 17, 18], "nombre": "HELICODIAPOSITIVA" },
  { "id": 5, "id_tipo": 1, "id_padre": [], "material_id": [2, 3, 4, 5, 9, 10, 14, 15, 16, 17, 18], "nombre": "BOLETINES" },
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
  { "id": 6, "id_tipo": 3, "id_padre": [3146, 3217, 3218, 3219, 3220, 3221, 3222, 3223], "material_id": [2, 3, 4, 5, 9, 10], "nombre": "SESIÓN" },
  { "id": 7, "id_tipo": 3, "id_padre": [3146, 3217, 3218, 3219, 3220, 3221, 3222, 3223], "material_id": [2, 3, 4, 5, 9, 10], "nombre": "HELICOMOTIVACIÓN" },
  { "id": 8, "id_tipo": 3, "id_padre": [3217, 3218, 3219, 3220, 3221, 3222, 3235, 3236], "material_id": [6, 7, 11, 12, 13], "nombre": "TOMO 1" },
  { "id": 9, "id_tipo": 3, "id_padre": [3217, 3218, 3219, 3220, 3221, 3222, 3235, 3236], "material_id": [6, 7, 11, 12, 13], "nombre": "TOMO 2" }
];