<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste de Perfil Comportamental DISC</title>
    <link rel="stylesheet" href="styles.css">
</head>
<style>
    .title1 {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        text-align: center;
    }
</style>
<body>
    <div class="container">
        <header>
            <h1>Teste de Perfil Comportamental DISC</h1>
            <p class="subtitle">Avaliação de Perfil Comportamental gratuito</p>
        </header>

        <div class="test-container">
            <div id="intro-section" class="section active">
                <h2 class="title1">Você está pronto(a) para conhecer seu perfil comportamental predominante?</h2>
                <div class="tips">
                    <h3>DICAS:</h3>
                    <ol>
                        <li>Não há resultado bom ou ruim, por isso, seja sincero(a).</li>
                        <li>Escolha um momento tranquilo para fazer o teste.</li>
                        <li>Não pense muito, a primeira resposta geralmente será a mais correta.</li>
                        <li>Responda pensando em quem você é e não em quem gostaria de ser.</li>
                    </ol>
                </div>
                <button id="start-test" class="btn-primary">Iniciar Teste</button>
            </div>

            <div id="question-section" class="section">
                <div class="progress-bar">
                    <div class="progress"></div>
                </div>
                <div class="question-container">
                    <h3>Selecione o adjetivo que melhor descreve você!</h3>
                    <p class="question-subtitle">(Mesmo que você se identifique com mais de um, escolha o que mais se encaixa)</p>
                    <div class="options-container">
                        <button class="option-btn" data-value="D">ADJETIVO 1</button>
                        <button class="option-btn" data-value="I">ADJETIVO 2</button>
                        <button class="option-btn" data-value="S">ADJETIVO 3</button>
                        <button class="option-btn" data-value="C">ADJETIVO 4</button>
                    </div>
                </div>
            </div>

            <div id="result-section" class="section">
                <h2>Seu Resultado</h2>
                <div class="result-flex">
                    <div class="results-container">
                        <div class="result-item" data-profile="D">
                            <h3>DOMINÂNCIA</h3>
                            <div class="progress-bar disc-bar disc-d">
                                <div class="progress" id="d-score"></div>
                                <span class="score-label" id="d-label">0%</span>
                            </div>
                        </div>
                        <div class="result-item" data-profile="I">
                            <h3>INFLUÊNCIA</h3>
                            <div class="progress-bar disc-bar disc-i">
                                <div class="progress" id="i-score"></div>
                                <span class="score-label" id="i-label">0%</span>
                            </div>
                        </div>
                        <div class="result-item" data-profile="S">
                            <h3>ESTABILIDADE</h3>
                            <div class="progress-bar disc-bar disc-s">
                                <div class="progress" id="s-score"></div>
                                <span class="score-label" id="s-label">0%</span>
                            </div>
                        </div>
                        <div class="result-item" data-profile="C">
                            <h3>CONFORMIDADE</h3>
                            <div class="progress-bar disc-bar disc-c">
                                <div class="progress" id="c-score"></div>
                                <span class="score-label" id="c-label">0%</span>
                            </div>
                        </div>
                    </div>
                    <div class="result-description">
                        <h3>Fator predominante: <span id="dominant-factor" class="dominant-highlight">???</span></h3>
                        <div id="factor-description"></div>
                    </div>
                </div>
                <button id="restart-test" class="btn-primary">Fazer Teste Novamente</button>
            </div>

            <div id="share-section" class="section">
                <div class="share-content">
                    <h2>Receba seu relatório:</h2>
                    <div class="share-flex">
                        <div class="share-info">
                            <p>Insira seu nome e seu melhor e-mail nos campos ao lado para <b>receber gratuitamente</b> o resultado do seu teste de perfil comportamental.</p>
                            <p>Você também pode enviar uma cópia do seu relatório para outra pessoa, como uma empresa que tenha lhe solicitado o teste ou para seu coach, por exemplo.</p>
                            <p>Para isso, basta preencher (no campo especificado) também o e-mail de quem deseja que receba a cópia do seu relatório DISC.</p>
                            <a href="index.php"
                            style="display:inline-block;padding:10px 18px;border-radius:6px;
                                    background:#007BFF;color:#fff;font-family:sans-serif;
                                    font-size:16px;text-decoration:none;cursor:pointer;">
                            Voltar ao início
                            </a>
                        </div>
                        <form class="share-form" id="share-form">
                            <label for="share-name">Seu nome*</label>
                            <input type="text" id="share-name" name="share-name" required>
                            <label for="share-email">Seu melhor email*</label>
                            <input type="email" id="share-email" name="share-email" required>
                            <label for="share-copy">Enviar cópia do relatório para:</label>
                            <input type="email" id="share-copy" name="share-copy" placeholder="Opcional">
                            <button type="submit" class="btn-primary">ENVIAR MEU RELATÓRIO AGORA&gt;&gt;</button>
                        </form>
                    </div>
                </div>
                <div id="share-success" class="share-success" style="display:none;">
                    <h2>🎉 Parabéns!</h2>
                    <h3>Relatório enviado com sucesso!</h3>
                    <p>Obrigado por realizar o Teste de Perfil Comportamental DISC.</p>
                    <p>Verifique sua caixa de entrada (ou spam) para receber o resultado do seu teste.</p>
                    <button id="back-to-start" class="btn-primary">Voltar ao início</button>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html> 