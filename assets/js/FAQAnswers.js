const perguntas = document.querySelectorAll('.perguntas');

perguntas.forEach((pergunta) => {
  const resposta = pergunta.querySelector('.resposta');
  const icon = pergunta.querySelector('.icon');

  pergunta.addEventListener('click', function () {
    if (resposta.style.display === 'block' || resposta.style.maxHeight) {
      resposta.style.maxHeight = null;
      icon.style.transform = 'rotate(0deg)';
    } else {
      resposta.style.maxHeight = resposta.scrollHeight + 'px';
      icon.style.transform = 'rotate(180deg)';
    }
  });
});
