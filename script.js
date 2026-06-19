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

// ============================================
// FUNÇÃO PARA ENVIAR WHATSAPP
// ============================================
function enviarWhatsApp() {
    const numeroWhatsApp = "1191494616";
    const quantidade = document.getElementById('quantidade');
    
    if (!quantidade) return;
    
    const qtd = quantidade.value;
    let mensagem = `Olá! Confirmo minha presença no casamento de Vitor e Thamiris no dia 18/07/2026. `;
    
    if (qtd == 1) {
        mensagem += `Serei apenas eu.`;
    } else {
        mensagem += `Seremos ${qtd} pessoas.`;
    }
    
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/55${numeroWhatsApp}?text=${mensagemCodificada}`, '_blank');
}

// ============================================
// FUNÇÕES DO PIX
// ============================================
function mostrarPix() {
    const pixDiv = document.getElementById('pixInfo');
    const btn = document.getElementById('btnMostrarPix');
    
    if (!pixDiv || !btn) return;
    
    if (pixDiv.style.display === 'none' || pixDiv.style.display === '') {
        pixDiv.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Esconder Chave PIX';
    } else {
        pixDiv.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-eye"></i> Ver Chave PIX';
    }
}

function copiarPix() {
    // ⚠️ COLOQUE SUA CHAVE PIX REAL AQUI! ⚠️
    const chavePix = "11939422862";
    
    navigator.clipboard.writeText(chavePix).then(() => {
        const btn = event.target.closest('.btn-copiar');
        if (btn) {
            const textoOriginal = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            setTimeout(() => {
                btn.innerHTML = textoOriginal;
            }, 2000);
        }
    }).catch(() => {
        alert('Não foi possível copiar. Copie manualmente: ' + chavePix);
    });
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