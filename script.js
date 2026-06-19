// ============================================
// CONTAGEM REGRESSIVA
// ============================================
function atualizarContador() {
    const dataCasamento = new Date("Jul 18, 2026 15:30:00").getTime();
    const agora = new Date().getTime();
    const diferenca = dataCasamento - agora;
    
    console.log("Contagem atualizando..."); // Para debug
    
    if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
        
        const elDias = document.getElementById("dias");
        const elHoras = document.getElementById("horas");
        const elMinutos = document.getElementById("minutos");
        const elSegundos = document.getElementById("segundos");
        
        if (elDias) elDias.innerHTML = dias < 10 ? "0" + dias : dias;
        if (elHoras) elHoras.innerHTML = horas < 10 ? "0" + horas : horas;
        if (elMinutos) elMinutos.innerHTML = minutos < 10 ? "0" + minutos : minutos;
        if (elSegundos) elSegundos.innerHTML = segundos < 10 ? "0" + segundos : segundos;
        
        console.log(`Dias: ${dias}, Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`);
    } else {
        const contador = document.querySelector(".contador");
        if (contador) {
            contador.innerHTML = "<h3 style='color: #6f7430;'>O grande dia chegou! 🎉</h3>";
        }
    }
}
function mostrarPix() {
    // Pega a caixinha que está escondida (id="pixInfo")
    const pixInfo = document.getElementById("pixInfo");
    
    // Pega o botão de "Ver Chave PIX"
    const btnMostrar = document.getElementById("btnMostrarPix");

    // Se estiver escondida, mostra. Se estiver aparecendo, esconde.
    if (pixInfo.style.display === "none" || pixInfo.style.display === "") {
        pixInfo.style.display = "block";
        btnMostrar.innerHTML = '<i class="fas fa-eye-slash"></i> Esconder Chave PIX';
    } else {
        pixInfo.style.display = "none";
        btnMostrar.innerHTML = '<i class="fas fa-eye"></i> Ver Chave PIX';
    }
}
function copiarPix() {
    // 1. Pega o texto que está dentro do HTML (11991494616)
    const chavePix = document.getElementById("chavePix").innerText;

    // 2. Tenta usar o método moderno de cópia do navegador
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(chavePix)
            .then(() => {
                alert("Chave PIX copiada com sucesso!");
            })
            .catch(err => {
                console.error("Erro ao copiar: ", err);
                fallbackCopiar(chavePix); // Se falhar, usa o plano B
            });
    } else {
        // Plano B para navegadores antigos ou conexões sem HTTPS seguro
        fallbackCopiar(chavePix);
    }
}

// Função de segurança caso o navegador bloqueie o método principal
function fallbackCopiar(texto) {
    const textArea = document.createElement("textarea");
    textArea.value = texto;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert("Chave PIX copiada com sucesso!");
    } catch (err) {
        alert("Não foi possível copiar automaticamente. Por favor, selecione o texto e copie manualmente.");
    }
    document.body.removeChild(textArea);
}
// ============================================
// CARROSSEL DE PREPARATIVOS
// ============================================

let slidePreparativoIndex = 0;
const slidesPreparativo = document.querySelectorAll('.carrossel-slide-preparativo');
const indicadoresPreparativo = document.querySelectorAll('.indicador-preparativo');

function mostrarSlidePreparativo(n) {
    if (!slidesPreparativo.length) return;
    
    if (n >= slidesPreparativo.length) slidePreparativoIndex = 0;
    if (n < 0) slidePreparativoIndex = slidesPreparativo.length - 1;
    
    const slidesContainer = document.querySelector('.carrossel-slides-preparativos');
    if (slidesContainer) {
        slidesContainer.style.transform = `translateX(-${slidePreparativoIndex * 100}%)`;
    }
    
    indicadoresPreparativo.forEach((indicador, i) => {
        if (i === slidePreparativoIndex) {
            indicador.classList.add('ativo-preparativo');
        } else {
            indicador.classList.remove('ativo-preparativo');
        }
    });
}

function moverSlidePreparativo(direcao) {
    slidePreparativoIndex += direcao;
    mostrarSlidePreparativo(slidePreparativoIndex);
}

function irParaSlidePreparativo(n) {
    slidePreparativoIndex = n;
    mostrarSlidePreparativo(slidePreparativoIndex);
}

// Iniciar carrossel dos preparativos
document.addEventListener('DOMContentLoaded', function() {
    mostrarSlidePreparativo(0);
});

// ============================================
// INICIAR TUDO QUANDO A PÁGINA CARREGAR
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada! Iniciando contagem...");
    atualizarContador();
    setInterval(atualizarContador, 1000);
});