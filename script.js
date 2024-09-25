// carregar jogo
function loadGame() {
    const savedStep = localStorage.getItem('currentStep');
    const resetButton = document.getElementById('reset-button');

    if (savedStep) {
        showStep(savedStep);
        resetButton.classList.remove('disabled');
    } else {
        showStep(0);
        resetButton.classList.add('disabled');
    }
}

// mostra fase salva
function showStep(step) {
    const allSteps = document.querySelectorAll('.passo');
    allSteps.forEach(passo => passo.classList.remove('ativo'));
    const currentPasso = document.getElementById('passo-' + step);
    currentPasso.classList.add('ativo');
}

// salva o jogo
function saveGame() {
    const currentStep = document.querySelector('.passo.ativo').id.split('-')[1];
    localStorage.setItem('currentStep', currentStep);
    console.log('Progresso salvo no passo:', currentStep);
    alert('Progresso salvo!');
    
    //reset após salvar
    const resetButton = document.getElementById('reset-button');
    resetButton.classList.remove('disabled');
}

// exclui jogo
function resetGame() {
    let resposta = confirm('Tem certeza de que deseja excluir seu atual progresso?');
    if (resposta) {
        localStorage.removeItem('currentStep');
        showStep(0);
        alert('Progresso excluído! Começando do início.');

        // desativa reset se não há jogo salvo
        const resetButton = document.getElementById('reset-button');
        resetButton.classList.add('disabled');
    } else {
        alert('Exclusão cancelada! Continue investigando.');
    }
}

// botão de salvar e deletar ativos
document.getElementById('save-button').addEventListener('click', saveGame);
document.getElementById('reset-button').addEventListener('click', resetGame);

// próxima fase
document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', function () {
        const nextStep = this.getAttribute('data-proximo');
        showStep(nextStep);
    });
});

// carrega o jogo quando a página é carregada
window.onload = loadGame;

















 //audio de fundo configs
 const audio = document.getElementById('audio');
 const unMuteCheckbox = document.getElementById('un-mute');

 audio.muted = false;

 unMuteCheckbox.addEventListener('change', function () {
     if (this.checked) {
         audio.muted = false;  //desmuta
     } else {
         audio.muted = true;   //muta
     }
 });

 window.addEventListener('load', function () {
     if (audio.paused) {
         audio.play().catch(error => {
             console.log('Erro ao tentar tocar o áudio:', error);
         });
     }
 });



