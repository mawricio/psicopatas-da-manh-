let totalConfirmados = 0;

function mostrarFormulario() {
  document.getElementById("formulario").style.display = "block";
}

function confirmarPresenca() {
  const nome = document.getElementById("nome").value;
  const acompanhantes = parseInt(document.getElementById("acompanhantes").value) || 0;
  totalConfirmados += 1 + acompanhantes;
  document.getElementById("total").textContent = totalConfirmados;
  alert(`Presença confirmada, ${nome}! 🎉`);
  document.getElementById("formulario").style.display = "none";
}

function deixaPraProxima() {
  alert("Tudo bem! Te esperamos na próxima 💔");
}
