/* ===================================
   CREAR MARCAS DE MINUTOS
=================================== */

const markers = document.querySelector(".markers");

for (let i = 0; i < 60; i++) {
  const marker = document.createElement("span");

  marker.classList.add("marker");

  marker.style.transform = `rotate(${i * 6}deg)`;

  markers.appendChild(marker);
}

/* ===================================
   RELOJ ANALÓGICO
=================================== */

const hourHand = document.getElementById("hour");

const minuteHand = document.getElementById("min");

const secondHand = document.getElementById("sec");

function updateClock() {
  const now = new Date();

  const hours = now.getHours();

  const minutes = now.getMinutes();

  const seconds = now.getSeconds();

  const hourRotation = (hours % 12) * 30 + minutes * 0.5;

  const minuteRotation = minutes * 6;

  const secondRotation = seconds * 6;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;

  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;

  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);

updateClock();

/* ===================================
   RELOJ DIGITAL + MODO DEL DIA
=================================== */

const time = document.getElementById("time");

const date = document.getElementById("date");

const mode = document.getElementById("mode");

function updateDigitalClock() {
  const now = new Date();

  let hours = now.getHours();

  let minutes = now.getMinutes();

  let seconds = now.getSeconds();

  /*
       CAMBIO AUTOMÁTICO
       DAY / NIGHT MODE
    */

  if (hours >= 6 && hours < 18) {
    document.body.classList.remove("night");

    document.body.classList.add("day");

    mode.textContent = "☀️ DAY MODE";
  } else {
    document.body.classList.remove("day");

    document.body.classList.add("night");

    mode.textContent = "🌙 NIGHT MODE";
  }

  // Formato hora digital

  hours = String(hours).padStart(2, "0");

  minutes = String(minutes).padStart(2, "0");

  seconds = String(seconds).padStart(2, "0");

  time.textContent = `${hours}:${minutes}:${seconds}`;

  // Fecha

  const days = [
    "DOMINGO",

    "LUNES",

    "MARTES",

    "MIÉRCOLES",

    "JUEVES",

    "VIERNES",

    "SÁBADO",
  ];

  const months = [
    "ENERO",

    "FEBRERO",

    "MARZO",

    "ABRIL",

    "MAYO",

    "JUNIO",

    "JULIO",

    "AGOSTO",

    "SEPTIEMBRE",

    "OCTUBRE",

    "NOVIEMBRE",

    "DICIEMBRE",
  ];

  const dayName = days[now.getDay()];

  const day = String(now.getDate()).padStart(2, "0");

  const month = months[now.getMonth()];

  const year = now.getFullYear();

  date.textContent = `${dayName} • ${day} ${month} ${year}`;
}

setInterval(updateDigitalClock, 1000);

updateDigitalClock();
