// Controle do tamanho da fonte

let tamanhoFonte = 16;

document.getElementById("aumentarFonte").addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

document.getElementById("diminuirFonte").addEventListener("click", () => {
    tamanhoFonte -= 2;

    if(tamanhoFonte < 12){
        tamanhoFonte = 12;
    }

    document.body.style.fontSize = tamanhoFonte + "px";
});

// Alto contraste

document.getElementById("altoContraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

// Quiz

document.getElementById("botaoQuiz").addEventListener("click", () => {

    let pontos = 0;

    const respostas = document.querySelectorAll(
        'input[type="radio"]:checked'
    );

    respostas.forEach(resposta => {
        if(resposta.value === "certo"){
            pontos++;
        }
    });

    const resultado = document.getElementById("resultado");

    if(pontos === 3){
        resultado.innerHTML =
        "Excelente! Você conhece muito bem a agricultura sustentável.";
    }
    else if(pontos >= 2){
        resultado.innerHTML =
        "Muito bom! Você possui bons conhecimentos sobre o tema.";
    }
    else{
        resultado.innerHTML =
        "Continue estudando sobre tecnologia e sustentabilidade no campo.";
    }

});
