import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const form = document.getElementById("formRanking");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  try {

    await addDoc(collection(db, "ranking"), {

      nombre: document.getElementById("nombre").value,
      idJugador: document.getElementById("idJugador").value,
      clan: document.getElementById("clan").value,
      nivel: Number(document.getElementById("nivel").value),
      puntos: Number(document.getElementById("puntos").value),
      victorias: Number(document.getElementById("victorias").value),
      derrotas: Number(document.getElementById("derrotas").value),

      fechaRegistro: new Date()

    });

    alert("Jugador registrado correctamente");

    form.reset();

  } catch (error) {

    console.error(error);

    alert("Error al guardar");

  }

});