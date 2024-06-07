const relogio = document.querySelector('.relogio');
let timer;
let i;

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
        i++;
        localStorage.setItem('cronometro', i);
        relogio.innerHTML = mostraHoras(i);
    }, 1000);
}

function pararRelogio() {
    clearInterval(timer);
    localStorage.removeItem('cronometro');
}

document.addEventListener('DOMContentLoaded', function () {
    const tempoSalvo = parseInt(localStorage.getItem('cronometro'));
    if (tempoSalvo) {
        i = tempoSalvo;
        relogio.innerHTML = mostraHoras(i);
    }
    iniciaRelogio();
})
