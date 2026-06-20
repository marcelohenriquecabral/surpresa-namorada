const btnIniciar = document.getElementById('btn-iniciar');
const telaInicial = document.getElementById('tela-inicial');
const telaVideo = document.getElementById('tela-video');
const video = document.getElementById('video-surpresa');
const caixaTexto = document.getElementById('caixa-texto');

btnIniciar.addEventListener('click', () => {
    // Esconde a tela de introdução e revela a tela com a surpresa
    telaInicial.classList.add('escondido');
    telaVideo.classList.remove('escondido');
    
    // Garante que o som do player não inicie mudo e ajusta para o volume máximo
    video.muted = false;
    video.volume = 1.0;
    
    // Inicia a reprodução do vídeo gravado
    video.play();
    
    // Ativa o gatilho da animação CSS que faz o texto subir pela tela
    caixaTexto.classList.add('animar-texto');
});
