import {initBurger} from './modules/init-burger-action';
import {initSelect} from './modules/init-custom-select';
import {initAnimation} from './modules/init-animation';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initBurger();
    initSelect();
    initAnimation();
  });
});

// ---------------------------------
