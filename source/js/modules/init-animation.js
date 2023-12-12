const DURATION_DEFAULT = 0.5;
const DELAY_DEFAULT = 0.5;

const screens = document.querySelectorAll('[data-animate]');

const isElementInViewport = (el) => {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    (top + 100) < (window.pageYOffset + window.innerHeight) &&
    (left + 100) < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
};

const trackingScreenBlock = () => {
  screens.forEach((screen) => {
    const duration = screen.dataset.animateDuration ? parseFloat(screen.dataset.animateDuration) : DURATION_DEFAULT;
    const delay = screen.dataset.animateDelay ? parseFloat(screen.dataset.animateDelay) : DELAY_DEFAULT;

    const items = screen.querySelectorAll('.sup');

    if (isElementInViewport(screen) > 0 && !screen.classList.contains('show')) {
      items.forEach((item, index) => {
        item.style.animationDuration = `${duration}s`;
        item.style.animationDelay = `${index * delay}s`;
      });

      requestAnimationFrame(() => {
        screen.classList.add('show');
      });
    }
  });
};

const initAnimation = () => {
  if (!screens.length) {
    return;
  }

  trackingScreenBlock();
  window.addEventListener('scroll', trackingScreenBlock);
  window.addEventListener('orientationchange', trackingScreenBlock);
};

export {initAnimation};
