const excusas = [
  "Se me olvidó la tarea.",
  "No pasaba el bus.",
  "Me quedé dormido.",
  "Mi perro se la comió.",
  "Había mucho tráfico.",
  "No me sentía bien."
];

document.getElementById("btn").addEventListener("click", function() {
  const random = Math.floor(Math.random() * excusas.length);
  document.getElementById("excusa").textContent = excusas[random];
});