// game.js — motor genérico de novela visual para LCCR
// No contiene ningún texto de la historia: todo viene de data/*.js (window.GAME_DATA).
// Para cargar otro caso, alcanza con incluir otro archivo de datos en index.html.

(function () {
  const data = window.GAME_DATA;
  const beats = data.beats;
  const personajes = data.personajes;

  // --- estado ---
  let index = 0;
  let stars = 0;
  // pila de puntos de retorno para "volver atrás" en futuras escenas con opciones
  let volverAtrasTarget = null;
  let fondoActual = null;

  // --- elementos del DOM ---
  const el = {
    caseHeader: document.getElementById("case-header"),
    caseTitle: document.getElementById("case-title"),
    starCount: document.getElementById("star-count"),
    startScreen: document.getElementById("start-screen"),
    startTitulo: document.getElementById("start-screen__titulo"),
    startImg: document.getElementById("start-screen__img"),
    btnJugar: document.getElementById("btn-jugar"),
    btnComoJugar: document.getElementById("btn-como-jugar"),
    instruccionesPanel: document.getElementById("instrucciones-panel"),
    instruccionesLista: document.getElementById("instrucciones-lista"),
    btnCerrarInstrucciones: document.getElementById("btn-cerrar-instrucciones"),
    titleCard: document.getElementById("title-card"),
    titleCardTitulo: document.getElementById("title-card__titulo"),
    titleCardSubtitulo: document.getElementById("title-card__subtitulo"),
    stage: document.getElementById("stage"),
    spriteLeft: document.getElementById("sprite-left"),
    spriteRight: document.getElementById("sprite-right"),
    placeholderCenter: document.getElementById("placeholder-center"),
    notaCard: document.getElementById("nota-card"),
    notaText: document.getElementById("nota-card__text"),
    notaContinuar: document.getElementById("nota-continuar"),
    dialogueBox: document.getElementById("dialogue-box"),
    speakerTag: document.getElementById("speaker-tag"),
    dialogueText: document.getElementById("dialogue-text"),
    choices: document.getElementById("choices"),
    nextBtn: document.getElementById("next-btn"),
    endCard: document.getElementById("end-card"),
    endCardText: document.getElementById("end-card__text"),
  };

  el.caseTitle.textContent = data.caso;
  el.starCount.textContent = stars;

  function setStars(n) {
    stars = Math.max(0, n);
    el.starCount.textContent = stars;
  }

  function hide(elements) {
    elements.forEach((e) => e.classList.add("hidden"));
  }

  function clearStage() {
    hide([el.spriteLeft, el.spriteRight, el.placeholderCenter]);
  }

  function showSpeakerSprite(speakerKey) {
    clearStage();
    const p = personajes[speakerKey];
    if (!p) return;
    if (!p.sprite) {
      el.placeholderCenter.classList.remove("hidden");
      return;
    }
    const target = p.lado === "right" ? el.spriteRight : el.spriteLeft;
    target.src = p.sprite;
    target.alt = p.nombre;
    target.classList.remove("hidden");
  }

  function renderBeat() {
    const beat = beats[index];
    if (!beat) return renderEnd("Fin de los datos cargados.");

    // ocultar paneles por defecto; cada tipo de beat muestra lo que necesita
    hide([el.titleCard, el.notaCard, el.dialogueBox, el.endCard]);

    switch (beat.type) {
      case "titulo":
        renderTitulo(beat);
        break;
      case "narracion":
        renderNarracion(beat);
        break;
      case "dialogo":
        renderDialogo(beat);
        break;
      case "nota":
        renderNota(beat);
        break;
      case "opciones":
        renderOpciones(beat);
        break;
      case "fin":
        renderEnd(beat.text);
        break;
      default:
        console.warn("Tipo de beat desconocido:", beat.type);
        advance();
    }
  }

  function renderTitulo(beat) {
    el.titleCardTitulo.textContent = beat.titulo || "";
    el.titleCardSubtitulo.textContent = beat.subtitulo || "";
    el.titleCard.classList.remove("hidden");

    if (beat.fondo !== undefined) setFondo(beat.fondo);
  }

  function setFondo(archivo) {
    fondoActual = archivo;
    el.stage.style.backgroundImage = archivo ? `url('${archivo}')` : "none";
  }

  function renderNarracion(beat) {
    clearStage();
    el.dialogueBox.classList.remove("hidden");
    el.speakerTag.classList.add("hidden");
    el.dialogueText.textContent = beat.text;
    el.dialogueText.style.fontStyle = "italic";
    el.dialogueText.style.color = "var(--ink-soft)";
    hide([el.choices]);
    el.nextBtn.classList.remove("hidden");
  }

  function renderDialogo(beat) {
    showSpeakerSprite(beat.speaker);
    const p = personajes[beat.speaker];
    el.dialogueBox.classList.remove("hidden");
    el.speakerTag.classList.remove("hidden");
    el.speakerTag.textContent = p ? p.nombre : beat.speaker;
    el.dialogueText.textContent = beat.text;
    el.dialogueText.style.fontStyle = "normal";
    el.dialogueText.style.color = "var(--ink)";
    hide([el.choices]);
    el.nextBtn.classList.remove("hidden");
  }

  function renderNota(beat) {
    el.notaText.textContent = beat.text;
    el.notaCard.classList.remove("hidden");
  }

  function renderOpciones(beat) {
    clearStage();
    el.dialogueBox.classList.remove("hidden");
    el.speakerTag.classList.add("hidden");
    el.dialogueText.textContent = beat.prompt || "¿Qué hacen los detectives?";
    el.choices.innerHTML = "";
    el.choices.classList.remove("hidden");
    el.nextBtn.classList.add("hidden");

    beat.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = opt.text;
      btn.addEventListener("click", () => handleChoice(beat, opt));
      el.choices.appendChild(btn);
    });
  }

  function handleChoice(beat, opt) {
    if (typeof opt.starDelta === "number") setStars(stars + opt.starDelta);

    if (opt.outcome === "volver") {
      // muestra un texto de callejón sin salida y ofrece el botón "volver atrás"
      el.choices.classList.add("hidden");
      el.dialogueText.textContent = opt.text2 || opt.text;
      volverAtrasTarget = beat.id || index;

      el.nextBtn.textContent = "Volver atrás";
      el.nextBtn.classList.remove("hidden");
      el.nextBtn.onclick = () => {
        el.nextBtn.textContent = "Siguiente →";
        el.nextBtn.onclick = advance;
        index = idFor(volverAtrasTarget);
        renderBeat();
      };
      return;
    }

    // salida normal: continúa en el beat indicado o el siguiente de la lista
    index = opt.goto ? idFor(opt.goto) : index + 1;
    renderBeat();
  }

  function idFor(idOrIndex) {
    if (typeof idOrIndex === "number") return idOrIndex;
    const found = beats.findIndex((b) => b.id === idOrIndex);
    return found === -1 ? index : found;
  }

  function renderEnd(text) {
    clearStage();
    el.endCardText.textContent = text;
    el.endCard.classList.remove("hidden");
  }

  function advance() {
    index += 1;
    renderBeat();
  }

  // --- eventos del juego ---
  el.nextBtn.addEventListener("click", advance);
  el.notaContinuar.addEventListener("click", advance);
  el.titleCard.addEventListener("click", advance);

  // --- pantalla de inicio ---
  el.startTitulo.textContent = data.tituloJuego || data.caso;
  if (data.portada) el.startImg.src = data.portada;

  el.btnJugar.addEventListener("click", () => {
    el.startScreen.classList.add("hidden");
    el.caseHeader.classList.remove("hidden");
    renderBeat();
  });

  el.btnComoJugar.addEventListener("click", () => {
    el.instruccionesLista.innerHTML = "";
    (data.instrucciones || []).forEach((texto) => {
      const li = document.createElement("li");
      li.textContent = texto;
      el.instruccionesLista.appendChild(li);
    });
    el.instruccionesPanel.classList.remove("hidden");
  });

  el.btnCerrarInstrucciones.addEventListener("click", () => {
    el.instruccionesPanel.classList.add("hidden");
  });

  // --- arranque: se espera a que el jugador toque "Jugar" ---
})();
