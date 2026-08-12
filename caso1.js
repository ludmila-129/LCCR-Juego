// data/caso1.js
// Datos del Caso 1: "El collar de Aurelia" — LCCR (Lorenzo y Concepción, Casos Resueltos)
// Cada "beat" es un paso del diálogo. El motor (game.js) es genérico y no sabe nada
// de la historia: todo lo que ves acá se puede editar sin tocar el motor.
//
// Tipos de beat:
//  - "titulo"    → tarjeta de transición de escena (pantalla completa)
//  - "narracion" → texto del narrador (sin sprite)
//  - "dialogo"   → línea de un personaje (con o sin sprite)
//  - "nota"      → recordatorio pedagógico ("NOTA DEL NARRADOR") para que
//                  el alumno tome apuntes en papel
//  - "opciones"  → punto de decisión del jugador
//
// Personajes: "lorenzo" y "concepcion" tienen sprite (assets/img/*.webp).
// Cualquier otro speaker (ej. "humberto") se muestra con una placa sin sprite.

window.GAME_DATA = {
  caso: "Caso 1: El collar de Aurelia",
  estrellasMax: 10,
  personajes: {
    lorenzo: { nombre: "Lorenzo", sprite: "lorenzo.webp", lado: "left" },
    concepcion: { nombre: "Concepción", sprite: "concepcion.webp", lado: "right" },
    humberto: { nombre: "Humberto Carrizo", sprite: null, lado: "center" },
  },
  beats: [
    { type: "titulo", titulo: "Prólogo", subtitulo: "Martes por la mañana" },

    { type: "narracion", text: "La historia comienza un martes por la mañana. Los detectives Lorenzo y Concepción reciben una llamada de la Guardia Civil. Una patrulla ha acudido a la casa de los Carrizo después de que Humberto Carrizo denunciara que el collar de su difunta esposa, Aurelia, había desaparecido la noche del lunes." },
    { type: "narracion", text: "No hay puertas forzadas ni ventanas rotas. Pero la vitrina en donde estaba el collar está abierta y nadie sabe cuándo desapareció." },

    { type: "nota", text: "Tomá nota en papel: ¿qué sabemos hasta ahora? Ej. «Habían varias personas en la propiedad…»" },

    { type: "titulo", titulo: "Escena 1", subtitulo: "La Casa de los Carrizo — Exterior, martes, mañana" },

    { type: "narracion", text: "Una carretera estrecha atraviesa los campos de Castilla. Al fondo aparece una enorme casa de piedra rodeada de árboles. Un automóvil se detiene frente a una verja de hierro." },
    { type: "dialogo", speaker: "lorenzo", text: "Así que esta es la Casa de los Carrizo." },
    { type: "dialogo", speaker: "concepcion", text: "Parece ser que la familia no tiene problemas de espacio." },
    { type: "dialogo", speaker: "lorenzo", text: "Tampoco de dinero." },
    { type: "dialogo", speaker: "concepcion", text: "No te distraigas." },
    { type: "dialogo", speaker: "lorenzo", text: "No me estoy distrayendo." },
    { type: "dialogo", speaker: "concepcion", text: "Llevas mirando la casa desde que hemos llegado." },
    { type: "dialogo", speaker: "lorenzo", text: "Sólo estoy… analizando…" },
    { type: "dialogo", speaker: "concepcion", text: "Sí, sí… Vale." },

    { type: "narracion", text: "Concepción y Lorenzo bajan del coche. En la entrada, en el jardín delantero, los espera un hombre de unos sesenta años, vestido con una bata oscura y visiblemente alterado." },

    { type: "dialogo", speaker: "humberto", text: "¿Vosotros sois los detectives?" },
    { type: "dialogo", speaker: "concepcion", text: "Detective Concepción. Él es mi compañero, Lorenzo." },
    { type: "dialogo", speaker: "lorenzo", text: "Buenos días." },
    { type: "dialogo", speaker: "humberto", text: "Gracias por venir tan rápido. Siento gran desesperanza en este momento." },
    { type: "dialogo", speaker: "concepcion", text: "Nos han dicho que ha desaparecido una pieza de su colección." },
    { type: "dialogo", speaker: "humberto", text: "No es simplemente una pieza de mi colección…" },
    { type: "dialogo", speaker: "humberto", text: "Se trata del collar de mi esposa, Aurelia, quien ha fallecido hace unos meses atrás." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Una reliquia?" },
    { type: "dialogo", speaker: "humberto", text: "Sí. Mi familia la conserva desde hace más de doscientos años." },
    { type: "dialogo", speaker: "concepcion", text: "¿Cuándo fue la última vez que lo vio?" },
    { type: "dialogo", speaker: "humberto", text: "Ayer por la noche." },
    { type: "dialogo", speaker: "lorenzo", text: "¿A qué hora?" },
    { type: "dialogo", speaker: "humberto", text: "Serían las diez y media, quizá las once." },
    { type: "dialogo", speaker: "concepcion", text: "¿Está seguro?" },
    { type: "dialogo", speaker: "humberto", text: "Completamente." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Y cuándo descubrió que había desaparecido?" },
    { type: "dialogo", speaker: "humberto", text: "Esta mañana, a las ocho." },
    { type: "dialogo", speaker: "concepcion", text: "Entonces sabemos que desapareció entre las diez y media de ayer y las ocho de esta mañana." },
    { type: "dialogo", speaker: "humberto", text: "Eso parece." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Y nadie vio nada?" },
    { type: "dialogo", speaker: "humberto", text: "Eso es precisamente lo que me preocupa." },
    { type: "dialogo", speaker: "concepcion", text: "¿Por qué?" },
    { type: "dialogo", speaker: "humberto", text: "Porque durante esas horas había varias personas dentro de la propiedad." },
    { type: "dialogo", speaker: "lorenzo", text: "Entonces será mejor que entrevistemos a todas las personas que han estado y que están ahora en la propiedad. ¿Nos daría su consentimiento?" },
    { type: "dialogo", speaker: "humberto", text: "Por supuesto. ¡Lo que sea para resolver este misterio!" },

    { type: "nota", text: "Tomá nota en papel: ¿quiénes estaban en la propiedad entre las 22:30 y las 8:00? ¿Alguna hora te llamó la atención?" },

    { type: "fin", text: "Fin del prototipo — Escena 2 próximamente." },
  ],
};
