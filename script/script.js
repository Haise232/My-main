  const menuBtn = document.querySelector('.desp');
  const nav = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
