function marcarAprobado(btn) {
  btn.classList.toggle('aprobado');
  actualizarEstado();
}

function actualizarEstado() {
  const botones = document.querySelectorAll('button');
  botones.forEach(btn => {
    const prer = btn.getAttribute('data-prer');
    if (prer === 'none') return;

    const prereqBtn = Array.from(botones).find(b => b.textContent === prer);
    if (prereqBtn && prereqBtn.classList.contains('aprobado')) {
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled');
    }
  });
}

document.addEventListener('DOMContentLoaded', actualizarEstado);
