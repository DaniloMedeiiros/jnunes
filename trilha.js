// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos
    const notificacaoIcon = document.getElementById('trilha-notificacao-icon');
    const perfilIcon = document.getElementById('trilha-perfil-icon');
    const notificacaoBox = document.getElementById('trilha-box-notificacao');
    const perfilBox = document.getElementById('trilha-box-perfil');
    const closeNotificacao = document.getElementById('trilha-close-notificacao');
    const closePerfil = document.getElementById('trilha-close-perfil');

    // Função para fechar todas as caixas
    function fecharTodasCaixas() {
        notificacaoBox.style.display = 'none';
        perfilBox.style.display = 'none';
    }

    // Alterna visibilidade de uma caixa
    function alternarCaixa(caixa) {
        const estaAberto = caixa.style.display === 'block';
        fecharTodasCaixas();
        if (!estaAberto) {
            caixa.style.display = 'block';
        }
    }

    // Evento de clique nos ícones para abrir as caixas
    notificacaoIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        alternarCaixa(notificacaoBox);
    });

    perfilIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        alternarCaixa(perfilBox);
    });

    // Evento para fechar as caixas ao clicar no botão de fechar, se existirem
    if (closeNotificacao) {
        closeNotificacao.addEventListener('click', (event) => {
            event.stopPropagation();
            notificacaoBox.style.display = 'none';
        });
    }

    if (closePerfil) {
        closePerfil.addEventListener('click', (event) => {
            event.stopPropagation();
            perfilBox.style.display = 'none';
        });
    }

    // Fechar as caixas se o usuário clicar fora delas
    window.addEventListener('click', (event) => {
        if (
            !event.target.closest('.icone') &&
            !event.target.closest('#trilha-box-notificacao') &&
            !event.target.closest('#trilha-box-perfil')
        ) {
            fecharTodasCaixas();
        }
    });

    // Menu lateral toggle
    const toggleMenuButton = document.getElementById('trilha-toggle-menu');
    const menuLateral = document.getElementById('trilha-menu-lateral');

    toggleMenuButton.addEventListener('click', () => {
        menuLateral.classList.toggle('trilha-menu-fechado');
    });

    // Modal Meus Dados
    const modalDados = document.getElementById('trilha-modal-dados');
    const abrirModalDados = document.getElementById('trilha-abrir-modal-dados');
    const fecharModalDados = document.getElementById('trilha-fechar-modal-dados');

    abrirModalDados.addEventListener('click', (e) => {
        e.preventDefault();
        modalDados.style.display = 'flex';
        perfilBox.style.display = 'none';
    });

    fecharModalDados.addEventListener('click', () => {
        modalDados.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalDados) {
            modalDados.style.display = 'none';
        }
    });

    // Modal Alterar Senha
    const modalAlterarSenha = document.getElementById('trilha-modal-alterar-senha');
    const abrirModalSenha = document.getElementById('trilha-abrir-modal-senha');
    const fecharModalSenha = document.getElementById('trilha-fechar-modal-senha');

    abrirModalSenha.addEventListener('click', (e) => {
        e.preventDefault();
        modalAlterarSenha.style.display = 'flex';
        perfilBox.style.display = 'none';
    });

    fecharModalSenha.addEventListener('click', () => {
        modalAlterarSenha.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalAlterarSenha) {
            modalAlterarSenha.style.display = 'none';
        }
    });

    // Modal Termos e Condições
    const modalTermos = document.getElementById('trilha-modal-termos');
    const abrirModalTermos = document.getElementById('trilha-abrir-modal-termos');
    const fecharModalTermos = document.getElementById('trilha-fechar-modal-termos');

    abrirModalTermos.addEventListener('click', (e) => {
        e.preventDefault();
        modalTermos.style.display = 'flex';
        perfilBox.style.display = 'none';
    });

    fecharModalTermos.addEventListener('click', () => {
        modalTermos.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalTermos) {
            modalTermos.style.display = 'none';
        }
    });
});

// Função toggleSenha no escopo global
function toggleSenha(element) {
    const input = element.previousElementSibling; // pega o input antes do span
    if (input.type === "password") {
        input.type = "text"; // mostra a senha
        element.innerHTML = '<img src="imagens/olho-fechado-modal-senha.png" alt="Ocultar Senha">';
    } else {
        input.type = "password"; // esconde a senha
        element.innerHTML = '<img src="imagens/olho-aberto-modal-senha.png" alt="Mostrar Senha">';
    }
}

// Carrossel
const carrossel = document.querySelector('.carrossel');

function scrollLeft() {
    carrossel.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    carrossel.scrollBy({ left: 200, behavior: 'smooth' });
}

// Você pode adicionar botões para rolar
const leftButton = document.createElement('button');
leftButton.textContent = '←';
leftButton.onclick = scrollLeft;
const rightButton = document.createElement('button');
rightButton.textContent = '→';
rightButton.onclick = scrollRight;

document.querySelector('.trilhas-container').appendChild(leftButton);
document.querySelector('.trilhas-container').appendChild(rightButton);
