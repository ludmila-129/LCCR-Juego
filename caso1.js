// data/caso1.js
// Datos del Caso 1: "El collar de Aurelia" — LCCR (Lorenzo y Concepción, Casos Resueltos)
// Cada "beat" es un paso del diálogo. El motor (game.js) es genérico y no sabe nada
// de la historia: todo lo que ves acá se puede editar sin tocar el motor.
//
// Tipos de beat:
//  - "titulo"    → tarjeta de transición de escena (pantalla completa). Puede traer
//                  "fondo": "archivo.webp" — ese fondo queda puesto hasta el próximo
//                  beat "titulo" que traiga uno nuevo (o "fondo: null" para volver al
//                  fondo neutro de papel).
//  - "narracion" → texto del narrador (sin sprite)
//  - "dialogo"   → línea de un personaje (con o sin sprite)
//  - "nota"      → recordatorio pedagógico ("NOTA DEL NARRADOR") para que
//                  el alumno tome apuntes en papel
//  - "opciones"  → punto de decisión del jugador
//
// Personajes: "lorenzo" y "concepcion" tienen sprite. Cualquier otro speaker
// (ej. "humberto") se muestra con su propio sprite si lo tiene, o con una
// placa sin sprite si no.

window.GAME_DATA = {
  caso: "Caso 1: El collar de Aurelia",
  estrellasMax: 10,

  // --- pantalla de inicio ---
  tituloJuego: "LCCR — Lorenzo y Concepción, Casos Resueltos",
  portada: "portada.webp",
  instrucciones: [
    "Sos parte del equipo de los detectives Lorenzo y Concepción. En cada caso vas a leer diálogos, escuchar testimonios y tomar decisiones para resolver el misterio.",
    "Llevá tus propias notas en papel: fechas, horas y quién dijo qué. La cronología de los hechos es la clave para resolver cada caso.",
    "El objetivo es sumar estrellas (⭐). Cuando tengas que elegir una opción, la elección acertada suma estrellas y avanza la historia.",
    "Si elegís mal, el juego no termina: vas a poder tocar «Volver atrás» para reintentar la decisión, pero eso te cuesta 1 estrella. No hay límite de intentos.",
    "En algunos momentos, Lorenzo y Concepción hacen un «contrapunto»: debaten entre ellos sobre las pistas. Ahí también vas a elegir qué argumento sostener.",
  ],

  personajes: {
    lorenzo: { nombre: "Lorenzo", sprite: "lorenzo.webp", lado: "left" },
    concepcion: { nombre: "Concepción", sprite: "concepcion.webp", lado: "right" },
    humberto: { nombre: "Humberto Carrizo", sprite: "humberto.webp", lado: "right" },
    rafael: { nombre: "Rafael", sprite: "rafael.webp", lado: "left" },
    ana_maria: { nombre: "Ana María", sprite: "ana_maria.webp", lado: "right" },
  },
  beats: [
    { type: "titulo", titulo: "Prólogo", subtitulo: "Martes por la mañana", fondo: null },

    { type: "narracion", text: "La historia comienza un martes por la mañana. Los detectives Lorenzo y Concepción reciben una llamada de la Guardia Civil. Una patrulla ha acudido a la casa de los Carrizo después de que Humberto Carrizo denunciara que el collar de su difunta esposa, Aurelia, había desaparecido la noche del lunes." },
    { type: "narracion", text: "No hay puertas forzadas ni ventanas rotas. Pero la vitrina en donde estaba el collar está abierta y nadie sabe cuándo desapareció." },

    { type: "nota", text: "Tomá nota en papel: ¿qué sabemos hasta ahora? Ej. «Habían varias personas en la propiedad…»" },

    { type: "titulo", titulo: "Escena 1", subtitulo: "La Casa de los Carrizo — Exterior, martes, mañana", fondo: "fondo-escena1.webp" },

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

    { type: "titulo", titulo: "Escena 2", subtitulo: "El despacho de Humberto — Biblioteca, martes, mañana", fondo: "fondo-escena2.webp" },

    { type: "narracion", text: "Humberto conduce a Lorenzo y Concepción hasta una habitación llena de libros. Sobre el escritorio hay varias fotografías." },
    { type: "dialogo", speaker: "humberto", text: "El collar estaba aquí." },
    { type: "narracion", text: "Humberto señala una fotografía. En ella aparece el collar dentro de una vitrina." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Esta fotografía es reciente?" },
    { type: "dialogo", speaker: "humberto", text: "La hice hace tres semanas." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Quién tenía acceso a esta habitación?" },
    { type: "dialogo", speaker: "humberto", text: "Sólo mis hijos, mi esposa y yo. Nadie más." },
    { type: "dialogo", speaker: "concepcion", text: "¿Cuántas personas viven aquí?" },
    { type: "dialogo", speaker: "humberto", text: "Actualmente somos tres, junto con mi hijo, Rafael, y mi hija, Ana María." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Nadie más?" },
    { type: "dialogo", speaker: "humberto", text: "Bueno, algunas personas vienen regularmente a la casa. La señora Élida, por ejemplo, viene todos los lunes para darle clases de pilates a Ana María. Pero no tiene acceso a esta habitación." },
    { type: "dialogo", speaker: "concepcion", text: "¿Ayer vino?" },
    { type: "dialogo", speaker: "humberto", text: "Sí." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Y los vecinos?" },
    { type: "narracion", text: "Humberto suspira." },
    { type: "dialogo", speaker: "humberto", text: "Los vecinos no viven lejos…" },
    { type: "dialogo", speaker: "concepcion", text: "¿Algún problema con ellos?" },
    { type: "dialogo", speaker: "humberto", text: "Ningún problema que sea… importante." },
    { type: "dialogo", speaker: "lorenzo", text: "Ninguno que sea… ¿«importante»?" },
    { type: "dialogo", speaker: "humberto", text: "Bueno... Marcos tiene la costumbre de jugar al fútbol delante de nuestra casa." },
    { type: "dialogo", speaker: "concepcion", text: "¿Quién es Marcos?" },
    { type: "dialogo", speaker: "humberto", text: "El nieto de Nora. Su abuela vive en la casa de al lado. Ella suele venir a esta casa a pedir disculpas por el comportamiento del niño. Siempre nos compensa de alguna forma." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Y qué problema hay?" },
    { type: "dialogo", speaker: "humberto", text: "Es que… Que ha roto dos ventanas en los últimos meses. Es muy problemático." },
    { type: "dialogo", speaker: "concepcion", text: "¿Y ha estado jugando recientemente?" },
    { type: "narracion", text: "Humberto piensa en silencio." },
    { type: "dialogo", speaker: "humberto", text: "No, es decir, no lo he escuchado en los últimos días." },
    { type: "dialogo", speaker: "lorenzo", text: "Eso sí que es interesante." },
    { type: "narracion", text: "Lorenzo piensa." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Usted cree que alguien de afuera podría haber entrado a esta habitación?" },
    { type: "dialogo", speaker: "humberto", text: "No lo sé… Lo único que sé es que ese collar estaba en esta vitrina anoche." },
    { type: "dialogo", speaker: "lorenzo", text: "Vale, comprendo." },

    { type: "nota", text: "Tomá nota en papel: hay un niño que rompe los vidrios… ¿pudo haber entrado?" },

    { type: "titulo", titulo: "Escena 3", subtitulo: "Rafael — Salón principal, martes, mediodía", fondo: "fondo-escena3.webp" },

    { type: "narracion", text: "Un hombre joven, rubio y elegantemente vestido, está sentado en un sofá. Parece mucho menos preocupado que Humberto, su padre." },
    { type: "dialogo", speaker: "rafael", text: "¿Vosotros sois detectives…?" },
    { type: "dialogo", speaker: "lorenzo", text: "Sí." },
    { type: "dialogo", speaker: "rafael", text: "Espero que encuentren el collar pronto." },
    { type: "dialogo", speaker: "lorenzo", text: "¿No está preocupado?" },
    { type: "dialogo", speaker: "rafael", text: "Pero, hombre, ¡Claro que sí!" },
    { type: "dialogo", speaker: "concepcion", text: "No lo parece." },
    { type: "narracion", text: "Rafael sonríe." },
    { type: "dialogo", speaker: "rafael", text: "Siempre me dicen lo mismo." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Dónde estuvo ayer por la noche?" },
    { type: "dialogo", speaker: "rafael", text: "En casa." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Toda la noche?" },
    { type: "dialogo", speaker: "rafael", text: "Sí." },
    { type: "dialogo", speaker: "concepcion", text: "¿A qué hora se fue a dormir?" },
    { type: "dialogo", speaker: "rafael", text: "Sobre las once y media." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Y antes?" },
    { type: "dialogo", speaker: "rafael", text: "Estuve en mi habitación." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Desde qué hora?" },
    { type: "dialogo", speaker: "rafael", text: "No lo recuerdo exactamente." },
    { type: "dialogo", speaker: "concepcion", text: "¿Entró en la biblioteca?" },
    { type: "dialogo", speaker: "rafael", text: "No." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Está seguro?" },
    { type: "dialogo", speaker: "rafael", text: "Completamente." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Tenía algún motivo para entrar?" },
    { type: "dialogo", speaker: "rafael", text: "¡Ja…! ¿Qué clase de pregunta es esa?" },
    { type: "dialogo", speaker: "concepcion", text: "Una bastante sencilla." },
    { type: "narracion", text: "Rafael suspira." },
    { type: "dialogo", speaker: "rafael", text: "No me interesa la reliquia de mi familia." },
    { type: "dialogo", speaker: "lorenzo", text: "¿No le interesa aunque usted sea su principal heredero?" },
    { type: "narracion", text: "Rafael se pone serio." },
    { type: "dialogo", speaker: "rafael", text: "Eso no significa que quiera robarle a mi padre." },
    { type: "dialogo", speaker: "lorenzo", text: "No he dicho eso." },
    { type: "dialogo", speaker: "rafael", text: "Pero lo ha implicado." },
    { type: "dialogo", speaker: "concepcion", text: "¿Usted tiene problemas económicos?" },
    { type: "narracion", text: "Rafael duda por unos segundos." },
    { type: "dialogo", speaker: "rafael", text: "...No." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Está seguro?" },
    { type: "dialogo", speaker: "rafael", text: "Sí." },
    { type: "dialogo", speaker: "lorenzo", text: "Entonces, ¿por qué su padre nos ha dicho que recientemente pidió un préstamo?" },
    { type: "dialogo", speaker: "rafael", text: "Eso es asunto mío." },
    { type: "narracion", text: "Rafael se levanta y se va de la habitación." },
    { type: "narracion", text: "Una vez que Rafael se va, Concepción dirige la mirada hacia Lorenzo." },
    { type: "dialogo", speaker: "concepcion", text: "... ¿Préstamo, dices? Humberto no ha mencionado nada de eso." },
    { type: "dialogo", speaker: "lorenzo", text: "Lo sé, ¿Pero acaso no te ha llamado la atención su reacción?" },
    { type: "dialogo", speaker: "concepcion", text: "Ah, vale… Ahora que lo dices tiene sentido." },

    { type: "nota", text: "Tomá nota en papel: Rafael se acostó a las 23:30. ¿Coincide con lo que dice de «toda la noche en su habitación»?" },

    { type: "titulo", titulo: "Escena 4", subtitulo: "Ana María — Habitación de Ana María, martes, mediodía", fondo: null },

    { type: "narracion", text: "Ana María está frente a un espejo, arreglándose el cabello con nerviosismo. Ella escucha hablar a los detectives fuera de su habitación. De repente, sale de su habitación y se dirige hacia ellos." },
    { type: "dialogo", speaker: "ana_maria", text: "¿Esta investigación va a tardar mucho?" },
    { type: "dialogo", speaker: "concepcion", text: "Depende de usted." },
    { type: "dialogo", speaker: "ana_maria", text: "Vaya… Eso no me da tranquilidad." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Cuándo vio el collar por última vez?" },
    { type: "dialogo", speaker: "ana_maria", text: "Ayer, lunes, por la mañana." },
    { type: "dialogo", speaker: "lorenzo", text: "¿No lo vio por la noche?" },
    { type: "dialogo", speaker: "ana_maria", text: "No, ¿Por?" },
    { type: "dialogo", speaker: "concepcion", text: "¿Estuvo en la biblioteca ayer?" },
    { type: "dialogo", speaker: "ana_maria", text: "No." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Segura?" },
    { type: "dialogo", speaker: "ana_maria", text: "Sí…" },
    { type: "narracion", text: "Ana María hace una pausa." },
    { type: "dialogo", speaker: "ana_maria", text: "No, bueno... quizá sí pasé por allí." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Quizá?" },
    { type: "dialogo", speaker: "ana_maria", text: "Lo siento, sinceramente no lo recuerdo muy bien." },
    { type: "dialogo", speaker: "ana_maria", text: "He bebido mucho vino anoche y bueno… Recuerdo que tuve mi clase de pilates antes de eso." },
    { type: "dialogo", speaker: "concepcion", text: "¿A qué hora terminó su clase de pilates?" },
    { type: "dialogo", speaker: "ana_maria", text: "A las siete." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Y después?" },
    { type: "dialogo", speaker: "ana_maria", text: "Me duché, cené, tomé mucho vino y me quedé en mi habitación." },
    { type: "dialogo", speaker: "concepcion", text: "¿Toda la noche?" },
    { type: "dialogo", speaker: "ana_maria", text: "Sí… Bueno, no estoy tan segura…" },
    { type: "dialogo", speaker: "lorenzo", text: "De casualidad, ¿Hay algo que quiera contarnos? ¿Algún problema personal…?" },
    { type: "narracion", text: "Ana María se pone nerviosa." },
    { type: "dialogo", speaker: "ana_maria", text: "Disculpe, ¿Qué insinúa?" },
    { type: "dialogo", speaker: "concepcion", text: "Parece una pregunta relevante. Usted menciona que no sólo bebió vino, sino más bien demasiado vino." },
    { type: "dialogo", speaker: "ana_maria", text: "Ah, bueno, es algo típico de los fines de semana…" },
    { type: "dialogo", speaker: "lorenzo", text: "Pero usted tuvo la clase un día lunes…" },
    { type: "narracion", text: "Ana María se queda callada." },
    { type: "dialogo", speaker: "ana_maria", text: "Ah, perdóneme… Es que no me siento muy bien últimamente. La muerte de mi madre me ha afectado mucho." },
    { type: "dialogo", speaker: "lorenzo", text: "Entiendo." },
    { type: "dialogo", speaker: "ana_maria", text: "¿Eso es todo?" },
    { type: "dialogo", speaker: "lorenzo", text: "Por ahora. Bueno, no. En realidad queríamos preguntarle…" },

    {
      type: "opciones",
      id: "eleccion-ana-maria",
      prompt: "¿Qué le preguntan a Ana María?",
      options: [
        {
          text: "A. Preguntarle por los problemas de Rafael",
          starDelta: 1,
        },
        {
          text: "B. Preguntarle por los problemas personales de Ana María",
          starDelta: 0,
          outcome: "volver",
          text2: "—¿Hay otra razón por la que ha bebido tanto vino? —pregunta Lorenzo. Ana María responde apenas: «Disculpe. Me da mucha pena…» y vuelve corriendo a su habitación, con timidez y visiblemente triste.",
        },
      ],
    },

    { type: "dialogo", speaker: "lorenzo", text: "¿Qué sabe usted de su hermano Rafael?" },
    { type: "narracion", text: "Ana María mira a Lorenzo." },
    { type: "dialogo", speaker: "ana_maria", text: "¿Sabes? No creo que ninguno de nosotros haya robado la reliquia familiar." },
    { type: "dialogo", speaker: "lorenzo", text: "¿Ninguno?" },
    { type: "dialogo", speaker: "ana_maria", text: "No creo que mi hermano lo hiciera. Y yo no estaba lo suficientemente bien anoche como para robar cosa alguna…" },
    { type: "dialogo", speaker: "lorenzo", text: "¿Por qué está tan segura?" },
    { type: "dialogo", speaker: "ana_maria", text: "Porque sé con toda seguridad dónde estaba mi hermano." },
    { type: "dialogo", speaker: "concepcion", text: "¿Dónde?" },
    { type: "dialogo", speaker: "ana_maria", text: "En su habitación. Él estuvo toda la noche allí hablando por el móvil." },
    { type: "dialogo", speaker: "lorenzo", text: "Pero ¿A qué hora exactamente?" },
    { type: "dialogo", speaker: "ana_maria", text: "No recuerdo muy bien, pero lo ví entrar a su habitación después de mi clase de Pilates. Estaba realmente muy molesto." },
    { type: "dialogo", speaker: "concepcion", text: "¿Por qué crees que estaba tan molesto?" },
    { type: "dialogo", speaker: "ana_maria", text: "Bueno, no le digan esto a nadie pero… Mi hermano ha tenido riña recientemente. Mi padre no sabe nada de esto. Se ha enfadado con su mejor amigo, Juan." },
    { type: "dialogo", speaker: "concepcion", text: "¿Tiene más detalles de este hecho?" },
    { type: "dialogo", speaker: "ana_maria", text: "Yo conocía muy bien a Juan. Era muy amigo de nuestra familia… Pero era casi un medio hermano para Rafael. Hasta que, un día, Rafael conoció a Ángela. Él salió con ella durante muchos años pero hace poco ella terminó con él." },
    { type: "dialogo", speaker: "concepcion", text: "Ah… Cuéntenos ahora de la riña con Juan." },
    { type: "dialogo", speaker: "ana_maria", text: "Claro, es que Juan estaba enamorado de Ángela y cuando ella dejó a Rafael, comenzó a salir con Juan. Ahora, Ángela y Juan son pareja. Sólo sé que Rafael está furioso con Juan por esto… ¡Imagínate! ¡Su ex mejor amigo está saliendo con su ex pareja!" },

    { type: "narracion", text: "Ana María se despide tímidamente de los detectives y vuelve a su habitación. Después de esto, los detectives se quedan reflexionando en el pasillo." },

    { type: "nota", text: "Tomá nota en papel: Ana María tomó mucho vino la noche del lunes, aunque dice que «es típico de los fines de semana»… ¿por qué un lunes?" },

    { type: "fin", text: "Fin del prototipo — Contrapunto 1 próximamente." },
  ],
};
