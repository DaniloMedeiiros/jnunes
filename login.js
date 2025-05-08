document.addEventListener("DOMContentLoaded", function () {
  const modalSteps = ["step1", "step2", "step3", "step4"];
  let currentStep = 0;

  function showStep(index) {
    modalSteps.forEach((step, i) => {
      document.getElementById(step).style.display = i === index ? "block" : "none";
    });
  }

  // Abre o modal
  document.getElementById("openRecovery").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("modalOverlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
    document.body.classList.add("modal-active");
    currentStep = 0;
    showStep(currentStep);
  });

  // Fecha o modal
  document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modalOverlay").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("modal-active");
    currentStep = 0;
    showStep(currentStep);
  });

  // Validação do botão "Entrar"
  document.querySelector(".button").addEventListener("click", function (event) {
    const emailInput = document.getElementById("matricula");
    const senhaInput = document.getElementById("senha");
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    // Resetando estilos e mensagens de erro
    emailInput.classList.remove("input-error");
    senhaInput.classList.remove("input-error");

    // Validação de preenchimento
    if (email === "" || senha === "") {
      if (email === "") {
        emailInput.classList.add("input-error");
      }
      if (senha === "") {
        senhaInput.classList.add("input-error");
      }
      return;
    }

    // Validação de e-mail
    if (!email.includes("@")) {
      emailInput.classList.add("input-error");
      return;
    }

    // Redireciona diretamente para o dashboard após o login bem-sucedido
    window.location.href = "dashboard.html"; // Altere para o destino correto
  });

  // Valida o e-mail no modal de recuperação de senha
  document.getElementById("sendCode").addEventListener("click", function () {
    const emailInput = document.getElementById("recoveryEmail");
    const emailError = document.getElementById("emailError");
    const emailValue = emailInput.value.trim();

    // Resetando estilos e mensagens
    emailError.classList.remove("active");
    emailInput.classList.remove("input-error");

    if (emailValue === "") {
      emailError.textContent = "Insira um e-mail por favor.";
      emailError.classList.add("active");
      emailInput.classList.add("input-error");
      return;
    }

    if (!emailValue.includes("@gmail.com")) {
      emailError.textContent = "Informe um e-mail válido.";
      emailError.classList.add("active");
      emailInput.classList.add("input-error");
      return;
    }

    // Se o email for válido, avança
    currentStep++;
    showStep(currentStep);
  });

  // Avança na verificação de código
  document.getElementById("verifyCode").addEventListener("click", function () {
    currentStep++;
    showStep(currentStep);
  });

  // Validação de senha
  document.getElementById("newPassword").addEventListener("input", function () {
    const password = this.value;

    const charLength = document.getElementById("charLength");
    const oneNumber = document.getElementById("oneNumber");
    const oneUpper = document.getElementById("oneUpper");
    const oneLower = document.getElementById("oneLower");
    const oneSpecial = document.getElementById("oneSpecial");

    password.length >= 8 ? charLength.classList.add("valid") : charLength.classList.remove("valid");
    /\d/.test(password) ? oneNumber.classList.add("valid") : oneNumber.classList.remove("valid");
    /[A-Z]/.test(password) ? oneUpper.classList.add("valid") : oneUpper.classList.remove("valid");
    /[a-z]/.test(password) ? oneLower.classList.add("valid") : oneLower.classList.remove("valid");
    /[\W_]/.test(password) ? oneSpecial.classList.add("valid") : oneSpecial.classList.remove("valid");
  });

  // Resetar a senha
  document.getElementById("resetPassword").addEventListener("click", function () {
    const newPassword = document.getElementById("newPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");

    passwordError.classList.remove("active");
    newPassword.classList.remove("input-error");
    confirmPassword.classList.remove("input-error");

    const requisitosValidos = document.querySelectorAll(".valid").length === 5;

    if (!requisitosValidos) {
      passwordError.textContent = "A senha não atende aos requisitos.";
      passwordError.classList.add("active");
      newPassword.classList.add("input-error");
      return;
    }

    if (newPassword.value.trim() === "" || confirmPassword.value.trim() === "") {
      passwordError.textContent = "Os campos de senha são obrigatórios.";
      passwordError.classList.add("active");
      newPassword.classList.add("input-error");
      confirmPassword.classList.add("input-error");
      return;
    }

    if (newPassword.value !== confirmPassword.value) {
      passwordError.textContent = "As senhas precisam ser iguais.";
      passwordError.classList.add("active");
      newPassword.classList.add("input-error");
      confirmPassword.classList.add("input-error");
      return;
    }

    currentStep++;
    showStep(currentStep);
  });

  // Fecha o modal de sucesso
  document.getElementById("closeSuccess").addEventListener("click", function () {
    document.getElementById("modalOverlay").style.display = "none";
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("modal-active");
  });
});
