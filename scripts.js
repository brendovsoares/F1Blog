// Voltar ao topo
const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validação do formulário de contato
const form = document.getElementById('contatoForm');
if(form) {
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.textContent = '';
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (nome.length < 3) {
      formMessage.textContent = 'Por favor, informe um nome com pelo menos 3 caracteres.';
      form.nome.focus();
      return;
    }

    if (!validateEmail(email)) {
      formMessage.textContent = 'Por favor, informe um e-mail válido.';
      form.email.focus();
      return;
    }

    if (mensagem.length < 10) {
      formMessage.textContent = 'Por favor, escreva uma mensagem com pelo menos 10 caracteres.';
      form.mensagem.focus();
      return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Mensagem enviada com sucesso! (Simulação)';
    form.reset();
  });

  function validateEmail(email) {
    // Regex simples para validar email
    return /\S+@\S+\.\S+/.test(email);
  }
}
