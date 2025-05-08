// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Botão "Ver Ranking"
    document.getElementById('ver-ranking').addEventListener('click', () => {
        alert('Redirecionando para o ranking completo!');
        // window.location.href = 'ranking.html';
    });

    // Referências aos elementos
    const notificacaoIcon = document.getElementById('notificacao-icon');
    const perfilIcon = document.getElementById('perfil-icon');
    const notificacaoBox = document.getElementById('box-notificacao');
    const perfilBox = document.getElementById('box-perfil');
    const closeNotificacao = document.getElementById('close-notificacao');
    const closePerfil = document.getElementById('close-perfil');

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
            !event.target.closest('.box-notificacao') &&
            !event.target.closest('.box-perfil')
        ) {
            fecharTodasCaixas();
        }
    });

    // Menu lateral toggle
    const toggleMenuButton = document.getElementById('toggle-menu');
    const menuLateral = document.querySelector('.menu-lateral');

    toggleMenuButton.addEventListener('click', () => {
        menuLateral.classList.toggle('menu-fechado');
    });

    // Modal Meus Dados
    const modalDados = document.getElementById('modal-dados');
    const abrirModalDados = document.getElementById('abrir-modal-dados');
    const fecharModalDados = document.getElementById('fechar-modal-dados');

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
    const modalAlterarSenha = document.getElementById('modal-alterar-senha');
    const abrirModalSenha = document.getElementById('abrir-modal-senha');
    const fecharModalSenha = document.getElementById('fechar-modal-senha');

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