const filtros = document.querySelectorAll('.filtro');

filtros.forEach((tag) => {
  tag.addEventListener('click', () => {
    filtros.forEach((tag) => {
      tag.classList.remove('filtro-active');
    });
    tag.classList.add('filtro-active');
  });
});
