// Perguntas clássicas do teste DISC (20 linhas, 4 adjetivos por linha)
const questions = [
    { options: [ { text: "Autoconfiante", value: "D" }, { text: "Animado", value: "I" }, { text: "Estável", value: "S" }, { text: "Detalhista", value: "C" } ] },
    { options: [ { text: "Competitivo", value: "D" }, { text: "Comunicativo", value: "I" }, { text: "Paciente", value: "S" }, { text: "Organizado", value: "C" } ] },
    { options: [ { text: "Corajoso", value: "D" }, { text: "Otimista", value: "I" }, { text: "Apoiado", value: "S" }, { text: "Cauteloso", value: "C" } ] },
    { options: [ { text: "Direto", value: "D" }, { text: "Persuasivo", value: "I" }, { text: "Agradável", value: "S" }, { text: "Preciso", value: "C" } ] },
    { options: [ { text: "Decidido", value: "D" }, { text: "Entusiasmado", value: "I" }, { text: "Leal", value: "S" }, { text: "Metódico", value: "C" } ] },
    { options: [ { text: "Independente", value: "D" }, { text: "Sociável", value: "I" }, { text: "Calmo", value: "S" }, { text: "Cuidadoso", value: "C" } ] },
    { options: [ { text: "Determinado", value: "D" }, { text: "Expressivo", value: "I" }, { text: "Compreensivo", value: "S" }, { text: "Analítico", value: "C" } ] },
    { options: [ { text: "Prático", value: "D" }, { text: "Influente", value: "I" }, { text: "Apoiante", value: "S" }, { text: "Conservador", value: "C" } ] },
    { options: [ { text: "Resoluto", value: "D" }, { text: "Alegre", value: "I" }, { text: "Moderado", value: "S" }, { text: "Precavido", value: "C" } ] },
    { options: [ { text: "Objetivo", value: "D" }, { text: "Inspirador", value: "I" }, { text: "Diplomático", value: "S" }, { text: "Racional", value: "C" } ] },
    { options: [ { text: "Aventureiro", value: "D" }, { text: "Tagarela", value: "I" }, { text: "Tolerante", value: "S" }, { text: "Cumpridor", value: "C" } ] },
    { options: [ { text: "Enérgico", value: "D" }, { text: "Espontâneo", value: "I" }, { text: "Atenção", value: "S" }, { text: "Minucioso", value: "C" } ] },
    { options: [ { text: "Ágil", value: "D" }, { text: "Popular", value: "I" }, { text: "Equilibrado", value: "S" }, { text: "Confiável", value: "C" } ] },
    { options: [ { text: "Líder", value: "D" }, { text: "Amigável", value: "I" }, { text: "Prestativo", value: "S" }, { text: "Planejador", value: "C" } ] },
    { options: [ { text: "Inovador", value: "D" }, { text: "Divertido", value: "I" }, { text: "Constante", value: "S" }, { text: "Controlador", value: "C" } ] },
    { options: [ { text: "Ativo", value: "D" }, { text: "Agradável", value: "I" }, { text: "Seguro", value: "S" }, { text: "Crítico", value: "C" } ] },
    { options: [ { text: "Desafiador", value: "D" }, { text: "Empolgado", value: "I" }, { text: "Fiel", value: "S" }, { text: "Cuidadoso", value: "C" } ] },
    { options: [ { text: "Direcionado", value: "D" }, { text: "Simpático", value: "I" }, { text: "Sereno", value: "S" }, { text: "Exato", value: "C" } ] },
    { options: [ { text: "Ousado", value: "D" }, { text: "Acolhedor", value: "I" }, { text: "Paciente", value: "S" }, { text: "Meticuloso", value: "C" } ] },
    { options: [ { text: "Decisivo", value: "D" }, { text: "Motivador", value: "I" }, { text: "Estável", value: "S" }, { text: "Cuidadoso", value: "C" } ] }
];

let currentQuestion = 0;
let scores = { D: 0, I: 0, S: 0, C: 0 };

const startButton = document.getElementById('start-test');
const restartButton = document.getElementById('restart-test');
const introSection = document.getElementById('intro-section');
const questionSection = document.getElementById('question-section');
const resultSection = document.getElementById('result-section');
const progressBar = document.querySelector('.progress');
const optionsContainer = document.querySelector('.options-container');
const questionText = document.querySelector('.question-container h3');
const questionSubtitle = document.querySelector('.question-subtitle');

// Adicionar navegação para tela de compartilhamento
const shareSection = document.getElementById('share-section');
const shareForm = document.getElementById('share-form');
const shareSuccess = document.getElementById('share-success');

startButton.addEventListener('click', () => {
    introSection.classList.remove('active');
    questionSection.classList.add('active');
    loadQuestion();
});

restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    scores = { D: 0, I: 0, S: 0, C: 0 };
    resultSection.classList.remove('active');
    questionSection.classList.add('active');
    loadQuestion();
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion() {
    if (currentQuestion < questions.length) {
        questionText.textContent = `Minha principal característica é ...`;
        questionSubtitle.textContent = `Escolha o adjetivo que mais representa você nesta linha (${currentQuestion + 1}/20)`;
        optionsContainer.innerHTML = '';
        // Embaralhar os adjetivos antes de exibir
        const shuffledOptions = shuffle([...questions[currentQuestion].options]);
        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            button.dataset.value = option.value;
            button.addEventListener('click', () => selectOption(option.value));
            optionsContainer.appendChild(button);
        });
        const progress = ((currentQuestion) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    } else {
        showResults();
    }
}

function selectOption(value) {
    scores[value]++;
    currentQuestion++;
    loadQuestion();
}

function showResults() {
    questionSection.classList.remove('active');
    resultSection.classList.add('active');
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    const percentages = {
        D: (scores.D / total) * 100,
        I: (scores.I / total) * 100,
        S: (scores.S / total) * 100,
        C: (scores.C / total) * 100
    };
    document.getElementById('d-score').style.width = `${percentages.D}%`;
    document.getElementById('i-score').style.width = `${percentages.I}%`;
    document.getElementById('s-score').style.width = `${percentages.S}%`;
    document.getElementById('c-score').style.width = `${percentages.C}%`;
    document.getElementById('d-label').textContent = `${percentages.D.toFixed(1).replace('.', ',')}%`;
    document.getElementById('i-label').textContent = `${percentages.I.toFixed(1).replace('.', ',')}%`;
    document.getElementById('s-label').textContent = `${percentages.S.toFixed(1).replace('.', ',')}%`;
    document.getElementById('c-label').textContent = `${percentages.C.toFixed(1).replace('.', ',')}%`;

    // NOVO: Dois fatores mais votados
    const sortedFactors = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const top1 = sortedFactors[0][0];
    const top2 = sortedFactors[1][0];

    const factorNames = {
        D: "DOMINÂNCIA",
        I: "INFLUÊNCIA",
        S: "ESTABILIDADE",
        C: "CONFORMIDADE"
    };
    const factorDescriptions = {
        D: {
            desc: "Esta dimensão enfatiza a assertividade, foco em resultados e tomada de decisões rápidas.",
            fortes: "determinado, direto, ousado, competitivo, objetivo, líder.",
            fracos: "impulsivo, impaciente, autoritário, insensível, intolerante."
        },
        I: {
            desc: "Esta dimensão enfatiza a possibilidade de moldar o ambiente, influenciando e persuadindo as outras pessoas.",
            fortes: "expressivo, cordial, amigável, comunicativo, entusiasta, compreensivo.",
            fracos: "indisciplinado, egocêntrico, instável, improdutivo, exagerado."
        },
        S: {
            desc: "Esta dimensão enfatiza a cooperação, paciência e constância.",
            fortes: "leal, paciente, prestativo, equilibrado, confiável, calmo.",
            fracos: "resistente a mudanças, indeciso, acomodado, lento, passivo."
        },
        C: {
            desc: "Esta dimensão enfatiza a precisão, organização e atenção a detalhes.",
            fortes: "organizado, detalhista, analítico, metódico, disciplinado, cuidadoso.",
            fracos: "crítico, perfeccionista, rígido, frio, indeciso."
        }
    };

    document.getElementById('factor-description').innerHTML =
        `<div style="margin-bottom:18px;">
            <b>1º Fator predominante: <span style="color:#1e88e5;">${factorNames[top1]}</span></b><br>
            <span>${factorDescriptions[top1].desc}</span><br>
            <b>Pontos Fortes:</b> ${factorDescriptions[top1].fortes}<br>
            <b>Pontos Fracos:</b> ${factorDescriptions[top1].fracos}
        </div>
        <div>
            <b>2º Fator mais presente: <span style="color:#e53935;">${factorNames[top2]}</span></b><br>
            <span>${factorDescriptions[top2].desc}</span><br>
            <b>Pontos Fortes:</b> ${factorDescriptions[top2].fortes}<br>
            <b>Pontos Fracos:</b> ${factorDescriptions[top2].fracos}
        </div>`;

    const domElem = document.getElementById('dominant-factor');
    domElem.textContent = factorNames[top1];
    domElem.className = 'dominant-highlight disc-' + top1.toLowerCase();

    // Adicionar botão para ir para o compartilhamento após o resultado
    if (!document.getElementById('go-share')) {
        const goShareBtn = document.createElement('button');
        goShareBtn.id = 'go-share';
        goShareBtn.className = 'btn-primary';
        goShareBtn.textContent = 'Receber meu relatório por e-mail';
        goShareBtn.style.marginTop = '1.5rem';
        document.getElementById('result-section').appendChild(goShareBtn);
        goShareBtn.addEventListener('click', () => {
            resultSection.classList.remove('active');
            shareSection.classList.add('active');
        });
    }

    // Ao enviar o formulário, simular envio e mostrar mensagem de sucesso
    if (shareForm) {
        shareForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(shareForm);

            const dPercent = document.getElementById('d-label').textContent.replace(',', '.').replace('%','');
            const iPercent = document.getElementById('i-label').textContent.replace(',', '.').replace('%','');
            const sPercent = document.getElementById('s-label').textContent.replace(',', '.').replace('%','');
            const cPercent = document.getElementById('c-label').textContent.replace(',', '.').replace('%','');
            formData.append('percentD', dPercent);
            formData.append('percentI', iPercent);
            formData.append('percentS', sPercent);
            formData.append('percentC', cPercent);

            // Enviar os dois fatores mais votados
            formData.append('top1', top1);
            formData.append('top2', top2);
            formData.append('top1_nome', factorNames[top1]);
            formData.append('top2_nome', factorNames[top2]);
            formData.append('top1_desc', factorDescriptions[top1].desc);
            formData.append('top2_desc', factorDescriptions[top2].desc);
            formData.append('top1_fortes', factorDescriptions[top1].fortes);
            formData.append('top2_fortes', factorDescriptions[top2].fortes);
            formData.append('top1_fracos', factorDescriptions[top1].fracos);
            formData.append('top2_fracos', factorDescriptions[top2].fracos);

            fetch('send_report.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                if (result.trim() === 'success' || result.trim() === 'Enviado!') {
                    document.querySelector('.share-content').style.display = 'none';
                    shareSuccess.style.display = 'block';
                } else {
                    alert('Erro ao enviar: ' + result);
                }
            });
        });
    }

    // Botão para voltar ao início
    const backToStartBtn = document.getElementById('back-to-start');
    if (backToStartBtn) {
        backToStartBtn.addEventListener('click', function() {
            location.reload();
        });
    }
} 