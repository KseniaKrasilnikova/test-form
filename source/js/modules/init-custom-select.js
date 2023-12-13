const initSelect = () => {
  const selectorEl = document.querySelector(".custom-select");
  selectorEl.addEventListener('click', function (e) {
    e.stopPropagation();
    selectorEl.classList.toggle('open');
    document.addEventListener('click', function (e) {
      document.querySelector('.custom-select').classList.remove('open');
    });
  });
};

export {initSelect};
