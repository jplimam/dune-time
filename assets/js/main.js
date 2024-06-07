const relogio = document.querySelector('.relogio');
let timer;
let startTime;

function mostraHoras(segundos) {
    const horas = new Date(segundos * 1000);
    return horas.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciaRelogio() {
    startTime = parseInt(localStorage.getItem('cronometro')) || 0;
    timer = setInterval(function () {
        startTime++;
        localStorage.setItem('cronometro', startTime);
        relogio.innerHTML = mostraHoras(startTime);

    }, 1000);
}

function pararRelogio() {
    clearInterval(timer);
    localStorage.removeItem('cronometro');
}

document.addEventListener('DOMContentLoaded', function () {
    const tempoSalvo = parseInt(localStorage.getItem('cronometro'));
    if (tempoSalvo) {
        startTime = tempoSalvo;
        relogio.innerHTML = mostraHoras(startTime);
    }
    iniciaRelogio();
})
