function calcularCompatibilidade() {
    const nome1 = document.getElementById("name1").value.trim();
    const nome2 = document.getElementById("name2").value.trim();

    if (nome1 === "" || nome2 === "") {
        alert("Por favor, insira os nomes!");
        return;
    }

    const compatibilidade = calcularPercentual(nome1, nome2);
    const resultDiv = document.getElementById("result");
    const compatibilidadeP = document.getElementById("compatibilidade");
    const fraseP = document.getElementById("frase");
    const imagem = document.getElementById("imagem");
    const tryAgainButton = document.getElementById("try-again");

    compatibilidadeP.innerText = `Compatibilidade: ${compatibilidade}%`; 
    const { frase, imagemSrc } = obterMensagem(compatibilidade);
    fraseP.innerText = frase;
    imagem.src = imagemSrc;

    resultDiv.classList.remove("hidden");
    imagem.classList.remove("hidden");
    void resultDiv.offsetWidth; 
    resultDiv.classList.add("show");

    tryAgainButton.classList.remove("hidden");
}

function calcularPercentual(nome1, nome2) {
    let somaLetras = 0;
    for (const letra of nome1) somaLetras += letra.charCodeAt(0);
    for (const letra of nome2) somaLetras += letra.charCodeAt(0);
    return (somaLetras % 100) + 1; 
}

function obterMensagem(compatibilidade) {
    if (compatibilidade > 80) {
        return {
            frase: "Vocês são perfeitos juntos! 🥰",
            imagemSrc: "https://i.pinimg.com/736x/1a/2e/21/1a2e21598971b431b01b9355f3ea303a.jpg" 
        };
    } else if (compatibilidade > 50) {
        return {
            frase: "Há uma boa conexão entre vocês! 💞",
            imagemSrc: "https://i.pinimg.com/736x/1a/39/70/1a39703c17c4d347076d90edc7d01d92.jpg" 
        };
    } else {
        return {
            frase: "Talvez amigos sejam a melhor opção! 💔",
            imagemSrc: "https://i.pinimg.com/736x/0c/22/2b/0c222b3ddbe6b4d09fc79398b15222cb.jpg" 
        };
    }
}

function tentarNovamente() {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result").classList.add("hidden");
    document.getElementById("result").classList.remove("show");
    document.getElementById("try-again").classList.add("hidden");
}

function criarCoracao() {
    const container = document.getElementById("hearts-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const posX = Math.random() * 100;
    heart.style.left = `${posX}%`; 

    const size = Math.random() * 10 + 10; 
    heart.style.width = `${size}px`; 
    heart.style.height = `${size}px`; 

    const duration = Math.random() * 3 + 3; 
    heart.style.animationDuration = `${duration}s`; 

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(criarCoracao, 300); 

